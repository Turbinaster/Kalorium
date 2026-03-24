import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type StepCardProps = {
  step: number;
  title: string;
  text: string;
  icon?: ReactNode;
  className?: string;
};

export function StepCard({
  step,
  title,
  text,
  icon,
  className,
}: StepCardProps) {
  return (
    <article className={cn("soft-card flex h-full flex-col gap-5 rounded-[24px] p-6", className)}>
      <div className="flex items-center justify-between gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-soft text-lg font-bold text-brand-primary">
          {step}
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-surface-elevated text-brand-primary">
          {icon ?? <span className="h-2.5 w-2.5 rounded-full bg-brand-primary" aria-hidden="true" />}
        </div>
      </div>
      <div className="space-y-3">
        <h3 className="h3-text text-text-primary">{title}</h3>
        <p className="body-text text-text-secondary">{text}</p>
      </div>
    </article>
  );
}
