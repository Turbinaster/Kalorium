import { forwardRef, type InputHTMLAttributes } from "react";

import { cn } from "@/lib/cn";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  hint?: string;
  error?: string;
};

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  function InputField({ className, label, hint, error, id, ...props }, ref) {
    const fieldId = id ?? props.name;
    const hintId = hint ? `${fieldId}-hint` : undefined;
    const errorId = error ? `${fieldId}-error` : undefined;
    const describedBy = errorId ?? hintId;

    return (
      <label className="flex flex-col gap-2" htmlFor={fieldId}>
        {label ? (
          <span className="body-sm-text font-medium text-text-primary">{label}</span>
        ) : null}
        <input
          ref={ref}
          className={cn(
            "min-h-12 rounded-2xl border bg-surface px-4 text-text-primary placeholder:text-text-muted focus:outline-none",
            error
              ? "border-red-300 focus:border-red-400"
              : "border-border-soft focus:border-brand-primary",
            className,
          )}
          id={fieldId}
          aria-describedby={describedBy}
          aria-invalid={error ? true : props["aria-invalid"]}
          {...props}
        />
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
