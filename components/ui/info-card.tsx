import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type InfoCardProps = {
  title: string;
  text: string;
  icon?: ReactNode;
  className?: string;
};

export function InfoCard({ title, text, icon, className }: InfoCardProps) {
  return (
    <article className={cn("surface-panel flex h-full flex-col gap-4 p-5", className)}>
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-soft text-brand-primary">
        {icon ?? <span className="h-2 w-2 rounded-full bg-brand-primary" aria-hidden="true" />}
      </div>
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-text-primary">{title}</h3>
        <p className="body-sm-text text-text-secondary">{text}</p>
      </div>
    </article>
  );
}
