import type { ElementType, HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/cn";

type SectionProps<T extends ElementType = "section"> = {
  as?: T;
  children: ReactNode;
  className?: string;
  tone?: "default" | "soft" | "brand";
} & Omit<HTMLAttributes<HTMLElement>, "className" | "children">;

const toneClasses = {
  default: "",
  soft: "bg-background-soft",
  brand: "bg-brand-soft/80",
};

export function Section<T extends ElementType = "section">({
  as,
  children,
  className,
  tone = "default",
  ...props
}: SectionProps<T>) {
  const Component = as ?? "section";

  return (
    <Component className={cn("site-section", toneClasses[tone], className)} {...props}>
      {children}
    </Component>
  );
}
