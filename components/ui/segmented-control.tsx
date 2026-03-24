"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/cn";

type SegmentedOption = {
  label: string;
  value: string;
};

type SegmentedControlProps = {
  options: SegmentedOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  className?: string;
  ariaLabel?: string;
};

export function SegmentedControl({
  options,
  value,
  defaultValue,
  onChange,
  className,
  ariaLabel = "Переключатель",
}: SegmentedControlProps) {
  const [internalValue, setInternalValue] = useState(
    value ?? defaultValue ?? options[0]?.value,
  );

  useEffect(() => {
    if (value !== undefined) {
      setInternalValue(value);
    }
  }, [value]);

  return (
    <div
      aria-label={ariaLabel}
      className={cn(
        "inline-flex w-full rounded-2xl border border-border-soft bg-surface p-1",
        className,
      )}
      role="group"
    >
      {options.map((option) => {
        const active = internalValue === option.value;

        return (
          <button
            key={option.value}
            aria-pressed={active}
            className={cn(
              "min-h-10 flex-1 rounded-xl px-4 text-sm font-semibold transition-colors",
              active
                ? "bg-brand-primary text-white"
                : "text-text-secondary hover:bg-brand-soft/70 hover:text-text-primary",
            )}
            onClick={() => {
              if (value === undefined) {
                setInternalValue(option.value);
              }

              onChange?.(option.value);
            }}
            type="button"
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
