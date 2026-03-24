import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type FeatureCardProps = {
  title: string;
  text: string;
  icon?: ReactNode;
  accent?: boolean;
  className?: string;
};

export function FeatureCard({
  title,
  text,
  icon,
  accent = false,
  className,
}: FeatureCardProps) {
  return (
    <article
      className={cn(
        "soft-card flex h-full flex-col gap-5 overflow-hidden rounded-[24px] p-6",
        accent
          ? "bg-gradient-to-br from-brand-soft via-surface to-surface"
          : "bg-surface",
        className,
      )}
    >
      <div
        className={cn(
          "flex h-12 w-12 items-center justify-center rounded-2xl text-brand-primary",
          accent ? "bg-white/90" : "bg-brand-soft",
        )}
      >
        {icon ?? <span className="h-2 w-2 rounded-full bg-brand-primary" aria-hidden="true" />}
      </div>
      <div className="space-y-3">
        <h3 className="h3-text text-text-primary">{title}</h3>
        <p className="body-text text-text-secondary">{text}</p>
      </div>
    </article>
  );
}
