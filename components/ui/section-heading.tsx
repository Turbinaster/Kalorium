import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex max-w-3xl flex-col gap-4",
        align === "center" ? "mx-auto items-center text-center" : "",
        className,
      )}
    >
      {eyebrow ? (
        <span className="caption-text rounded-full bg-brand-soft px-3 py-1 text-brand-hover">
          {eyebrow}
        </span>
      ) : null}
      <div className="space-y-3">
        <h2 className="h2-text text-wrap-balance text-text-primary">{title}</h2>
        {description ? (
          <p className="body-text text-wrap-balance text-text-secondary">{description}</p>
        ) : null}
      </div>
    </div>
  );
}
