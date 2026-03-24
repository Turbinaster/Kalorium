import { cn } from "@/lib/cn";

type ReviewCardProps = {
  title: string;
  text: string;
  source: string;
  className?: string;
};

export function ReviewCard({ title, text, source, className }: ReviewCardProps) {
  return (
    <article className={cn("soft-card flex h-full flex-col gap-5 p-6", className)}>
      <div className="space-y-3">
        <h3 className="h3-text text-text-primary">{title}</h3>
        <p className="body-text text-text-secondary">{text}</p>
      </div>
      <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-brand-hover">
        <span className="h-2.5 w-2.5 rounded-full bg-brand-primary" aria-hidden="true" />
        <span>{source}</span>
      </div>
    </article>
  );
}
