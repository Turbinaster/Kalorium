import {
  Children,
  cloneElement,
  isValidElement,
  type ButtonHTMLAttributes,
  type ReactElement,
  type ReactNode,
} from "react";

import { cn } from "@/lib/cn";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  asChild?: boolean;
};

const variantClasses = {
  primary:
    "bg-brand-primary text-white shadow-soft hover:bg-brand-hover focus-visible:outline-brand-primary",
  secondary:
    "border border-border-soft bg-surface text-text-primary hover:border-brand-primary/40 hover:bg-brand-soft/50",
  ghost:
    "text-text-primary hover:bg-brand-soft/60 hover:text-text-primary",
};

const sizeClasses = {
  md: "min-h-11 px-5 text-sm font-semibold",
  lg: "min-h-12 px-6 text-base font-semibold",
};

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  asChild = false,
  type,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-cta transition-all duration-200 ease-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-60",
    variantClasses[variant],
    sizeClasses[size],
    className,
  );

  if (asChild) {
    const child = Children.only(children);

    if (!isValidElement(child)) {
      return null;
    }

    const element = child as ReactElement<{ className?: string }>;

    return cloneElement(element, {
      ...props,
      className: cn(classes, element.props.className),
    });
  }

  return (
    <button className={classes} type={type ?? "button"} {...props}>
      {children}
    </button>
  );
}
