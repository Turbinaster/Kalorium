import { Search } from "lucide-react";
import type { InputHTMLAttributes } from "react";

import { cn } from "@/lib/cn";

type SearchFieldProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type"
> & {
  label?: string;
  className?: string;
};

export function SearchField({
  label,
  className,
  id = "search-field",
  "aria-label": ariaLabel,
  placeholder,
  ...props
}: SearchFieldProps) {
  return (
    <label className={cn("flex flex-col gap-2", className)} htmlFor={id}>
      {label ? (
        <span className="body-sm-text font-medium text-text-primary">{label}</span>
      ) : null}
      <div className="relative">
        <Search
          aria-hidden="true"
          className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-text-muted"
        />
        <input
          aria-label={label ? undefined : ariaLabel ?? placeholder ?? "Поиск"}
          className="min-h-12 w-full rounded-2xl border border-border-soft bg-surface pl-11 pr-4 text-text-primary placeholder:text-text-muted focus:border-brand-primary focus:outline-none"
          id={id}
          placeholder={placeholder}
          type="search"
          {...props}
        />
      </div>
    </label>
  );
}
