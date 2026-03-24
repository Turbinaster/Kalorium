import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type ChipProps = {
  label: string;
  href?: string;
  icon?: ReactNode;
  active?: boolean;
  className?: string;
};

export function Chip({ label, href, icon, active = false, className }: ChipProps) {
  const sharedClasses = cn(
    "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors",
    active
      ? "border-brand-primary/25 bg-brand-soft text-text-primary"
      : "border-border-soft bg-surface/80 text-text-secondary hover:border-brand-primary/30 hover:bg-brand-soft/70 hover:text-text-primary",
    className,
  );

  const content = (
    <>
      {icon ? <span className="text-brand-primary">{icon}</span> : null}
      <span>{label}</span>
    </>
  );

  if (href) {
    return (
      <Link className={sharedClasses} href={href}>
        {content}
      </Link>
    );
  }

  return <span className={sharedClasses}>{content}</span>;
}
