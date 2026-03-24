import { cn } from "@/lib/cn";

import { PhoneMockupPlaceholder } from "@/components/ui/phone-mockup-placeholder";

type ScreenCardProps = {
  title: string;
  variant?: "dashboard" | "macros" | "diary" | "graphs";
  assetSrc?: string | null;
  className?: string;
};

export function ScreenCard({
  title,
  variant = "dashboard",
  assetSrc = null,
  className,
}: ScreenCardProps) {
  return (
    <article
      className={cn(
        "soft-card flex h-full flex-col gap-5 overflow-hidden rounded-[28px] bg-gradient-to-b from-surface to-background-soft/70 p-5",
        className,
      )}
    >
      <div className="relative rounded-[24px] bg-gradient-to-b from-brand-soft/55 via-surface to-surface-elevated px-4 py-6">
        <div className="absolute inset-x-8 top-5 h-20 rounded-full bg-brand-soft/70 blur-3xl" />
        <PhoneMockupPlaceholder
          assetSrc={assetSrc}
          className="relative z-10 max-w-[240px]"
          decorative={!assetSrc}
          imageAlt={title}
          imageSizes="(min-width: 1280px) 240px, (min-width: 768px) 30vw, 80vw"
          title={title}
          variant={variant}
        />
      </div>
      <div className="space-y-2">
        <div className="h-1 w-12 rounded-full bg-brand-primary/30" />
        <p className="body-text text-text-primary">{title}</p>
      </div>
    </article>
  );
}
