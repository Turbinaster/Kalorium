"use client";

import {
  createContext,
  useContext,
  useState,
  type ChangeEvent,
  type ReactNode,
} from "react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { InputField } from "@/components/ui/input-field";
import { Section } from "@/components/ui/section";
import { SegmentedControl } from "@/components/ui/segmented-control";
import { SelectField } from "@/components/ui/select-field";
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
    <div className="flex flex-col gap-2">
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

export function CalculatorFormSection() {
  const { values, errors, updateField, handleSubmit } = useCalculatorContext();

  return (
    <Section>
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-start">
          <div className="space-y-4">
            <span className="caption-text inline-flex rounded-full bg-brand-soft px-3 py-1 text-brand-hover">
              Интерактивный расчёт
            </span>
            <div className="space-y-3">
              <h2 className="h2-text text-text-primary">{calculatorFormContent.title}</h2>
              <p className="body-text text-text-secondary">{calculatorFormContent.intro}</p>
            </div>
          </div>

          <form
            className="soft-card rounded-[30px] p-6 md:p-8"
            onSubmit={(event) => {
              event.preventDefault();
              handleSubmit();
            }}
          >
            <div className="grid gap-5">
              <div className="grid gap-5 md:grid-cols-2">
                <SegmentedField
                  label={calculatorFormContent.labels.sex}
                  onChange={(nextValue) =>
                    updateField("sex", nextValue as Sex)
                  }
                  options={sexOptions}
                  value={values.sex}
                />
                <SegmentedField
                  label={calculatorFormContent.labels.goal}
                  onChange={(nextValue) =>
                    updateField("goal", nextValue as Goal)
                  }
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
                <p className="body-sm-text max-w-2xl text-text-muted">
                  {calculatorFormContent.helperText}
                </p>
              </div>
            </div>
          </form>
        </div>
      </Container>
    </Section>
  );
}
