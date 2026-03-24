import { cn } from "@/lib/cn";

type MetricCardProps = {
  label: string;
  value: string;
  hint?: string;
  className?: string;
};

export function MetricCard({ label, value, hint, className }: MetricCardProps) {
  return (
    <div className={cn("soft-card min-w-[164px] p-4", className)}>
      <p className="caption-text uppercase tracking-[0.08em] text-text-muted">{label}</p>
      <p className="mt-3 text-2xl font-bold text-text-primary">{value}</p>
      {hint ? <p className="body-sm-text mt-2 text-text-secondary">{hint}</p> : null}
    </div>
  );
}
