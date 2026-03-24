import { cn } from "@/lib/cn";

type ScenarioCardProps = {
  title: string;
  text: string;
  className?: string;
};

export function ScenarioCard({ title, text, className }: ScenarioCardProps) {
  return (
    <article
      className={cn(
        "soft-card flex h-full flex-col gap-5 rounded-[24px] p-6",
        className,
      )}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-soft">
        <span
          aria-hidden="true"
          className="h-2.5 w-2.5 shrink-0 rounded-full bg-brand-primary"
        />
      </div>
      <div className="space-y-3">
        <h3 className="h3-text text-text-primary">{title}</h3>
        <p className="body-text text-text-secondary">{text}</p>
      </div>
    </article>
  );
}
