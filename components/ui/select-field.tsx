import { ChevronDown } from "lucide-react";
import { forwardRef, type SelectHTMLAttributes } from "react";

import { cn } from "@/lib/cn";

type SelectOption = {
  label: string;
  value: string;
};

type SelectFieldProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string;
  hint?: string;
  error?: string;
  options: SelectOption[];
};

export const SelectField = forwardRef<HTMLSelectElement, SelectFieldProps>(
  function SelectField(
    { className, label, hint, error, options, id, ...props },
    ref,
  ) {
    const fieldId = id ?? props.name;
    const hintId = hint ? `${fieldId}-hint` : undefined;
    const errorId = error ? `${fieldId}-error` : undefined;
    const describedBy = errorId ?? hintId;

    return (
      <label className="flex flex-col gap-2" htmlFor={fieldId}>
        {label ? (
          <span className="body-sm-text font-medium text-text-primary">{label}</span>
        ) : null}
        <div className="relative">
          <select
            ref={ref}
            className={cn(
              "min-h-12 w-full appearance-none rounded-2xl border bg-surface px-4 pr-11 text-text-primary focus:outline-none",
              error
                ? "border-red-300 focus:border-red-400"
                : "border-border-soft focus:border-brand-primary",
              className,
            )}
            id={fieldId}
            aria-describedby={describedBy}
            aria-invalid={error ? true : props["aria-invalid"]}
            {...props}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <ChevronDown
            aria-hidden="true"
            className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-text-muted"
          />
        </div>
        {error ? (
          <span className="caption-text text-red-500" id={errorId}>
            {error}
          </span>
        ) : hint ? (
          <span className="caption-text text-text-muted" id={hintId}>
            {hint}
          </span>
        ) : null}
      </label>
    );
  },
);
