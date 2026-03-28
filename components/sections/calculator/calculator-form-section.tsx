"use client";

import {
  createContext,
  useContext,
  useState,
  type ChangeEvent,
  type ReactNode,
} from "react";

import { Button } from "@/components/ui/button";
import { InputField } from "@/components/ui/input-field";
import { SegmentedControl } from "@/components/ui/segmented-control";
import { SelectField } from "@/components/ui/select-field";
import { cn } from "@/lib/cn";
import {
  activityOptions,
  calculatorFormContent,
  goalOptions,
  sexOptions,
} from "@/data/calculator";
import {
  calculateCalculatorResult,
  validateCalculatorForm,
  type CalculatorErrors,
  type CalculatorFormValues,
  type CalculatorResult,
  type Goal,
  type Sex,
} from "@/lib/calculator";

type CalculatorContextValue = {
  values: CalculatorFormValues;
  errors: CalculatorErrors;
  result: CalculatorResult | null;
  hasCalculated: boolean;
  updateField: (field: keyof CalculatorFormValues, value: string) => void;
  handleSubmit: () => void;
};

type CalculatorFormCardProps = {
  className?: string;
  note?: string;
};

const initialValues: CalculatorFormValues = {
  sex: "female",
  age: "",
  heightCm: "",
  weightKg: "",
  activity: "moderate",
  goal: "maintain",
};

const CalculatorContext = createContext<CalculatorContextValue | null>(null);

export function CalculatorProvider({ children }: { children: ReactNode }) {
  const [values, setValues] = useState<CalculatorFormValues>(initialValues);
  const [errors, setErrors] = useState<CalculatorErrors>({});
  const [result, setResult] = useState<CalculatorResult | null>(null);
  const [hasCalculated, setHasCalculated] = useState(false);

  function updateField(field: keyof CalculatorFormValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => {
      if (!current[field as keyof CalculatorErrors]) {
        return current;
      }

      const nextErrors = { ...current };
      delete nextErrors[field as keyof CalculatorErrors];
      return nextErrors;
    });
  }

  function handleSubmit() {
    const validation = validateCalculatorForm(values);

    if (Object.keys(validation.errors).length > 0 || !validation.parsedValues) {
      setErrors(validation.errors);
      return;
    }

    const nextResult = calculateCalculatorResult(validation.parsedValues);

    setErrors({});
    setResult(nextResult);
    setHasCalculated(true);

    requestAnimationFrame(() => {
      document
        .getElementById("calculator-result")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  return (
    <CalculatorContext.Provider
      value={{
        values,
        errors,
        result,
        hasCalculated,
        updateField,
        handleSubmit,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
}

export function useCalculatorContext() {
  const context = useContext(CalculatorContext);

  if (!context) {
    throw new Error("useCalculatorContext must be used within CalculatorProvider");
  }

  return context;
}

function SegmentedField({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: Array<{ label: string; value: string }>;
}) {
  return (
    <div className="flex min-w-0 flex-col gap-2">
      <span className="body-sm-text font-medium text-text-primary">{label}</span>
      <SegmentedControl
        ariaLabel={label}
        onChange={onChange}
        options={options}
        value={value}
      />
    </div>
  );
}

export function CalculatorFormCard({
  className,
  note,
}: CalculatorFormCardProps) {
  const { values, errors, updateField, handleSubmit } = useCalculatorContext();

  return (
    <form
      className={cn("soft-card w-full rounded-[28px] p-4 sm:p-5 md:p-6", className)}
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmit();
      }}
    >
      <div className="grid gap-5">
        <div className="grid gap-5 md:grid-cols-2">
          <SegmentedField
            label={calculatorFormContent.labels.sex}
            onChange={(nextValue) => updateField("sex", nextValue as Sex)}
            options={sexOptions}
            value={values.sex}
          />
          <SegmentedField
            label={calculatorFormContent.labels.goal}
            onChange={(nextValue) => updateField("goal", nextValue as Goal)}
            options={goalOptions}
            value={values.goal}
          />
          <InputField
            error={errors.age}
            id="calculator-age"
            inputMode="numeric"
            label={calculatorFormContent.labels.age}
            name="age"
            placeholder="Например, 29"
            type="number"
            value={values.age}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              updateField("age", event.target.value)
            }
          />
          <InputField
            error={errors.heightCm}
            id="calculator-height"
            inputMode="numeric"
            label={calculatorFormContent.labels.heightCm}
            name="heightCm"
            placeholder="Например, 168"
            type="number"
            value={values.heightCm}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              updateField("heightCm", event.target.value)
            }
          />
          <InputField
            error={errors.weightKg}
            id="calculator-weight"
            inputMode="decimal"
            label={calculatorFormContent.labels.weightKg}
            name="weightKg"
            placeholder="Например, 64.5"
            step="0.1"
            type="number"
            value={values.weightKg}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              updateField("weightKg", event.target.value)
            }
          />
          <SelectField
            id="calculator-activity"
            label={calculatorFormContent.labels.activity}
            name="activity"
            options={activityOptions}
            value={values.activity}
            onChange={(event) => updateField("activity", event.target.value)}
          />
        </div>

        <div className="flex flex-col items-start gap-4">
          <Button size="lg" type="submit">
            {calculatorFormContent.buttonLabel}
          </Button>
          {note ? (
            <p className="body-sm-text max-w-2xl text-text-muted">{note}</p>
          ) : null}
        </div>
      </div>
    </form>
  );
}
