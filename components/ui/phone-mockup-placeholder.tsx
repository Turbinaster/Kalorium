import Image from "next/image";
import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type PhoneMockupPlaceholderProps = {
  title?: string;
  variant?: "hero" | "dashboard" | "calculator" | "macros" | "photo" | "diary" | "graphs";
  className?: string;
  decorative?: boolean;
  assetSrc?: string | null;
  imageAlt?: string;
  imageClassName?: string;
  imagePriority?: boolean;
  imageSizes?: string;
};

const variantMap = {
  hero: {
    media: "chart",
    topBars: ["w-16", "w-24"],
    listRows: ["w-24", "w-32", "w-20"],
    chartBars: ["h-8", "h-12", "h-10", "h-16"],
    metricDots: [74, 56, 40],
  },
  dashboard: {
    media: "chart",
    topBars: ["w-14", "w-20"],
    listRows: ["w-20", "w-28", "w-24"],
    chartBars: ["h-12", "h-16", "h-10", "h-14"],
    metricDots: [70, 54, 42],
  },
  calculator: {
    media: "chart",
    topBars: ["w-14", "w-24"],
    listRows: ["w-24", "w-20", "w-28"],
    chartBars: ["h-9", "h-14", "h-12", "h-16"],
    metricDots: [72, 50, 38],
  },
  macros: {
    media: "chart",
    topBars: ["w-12", "w-24"],
    listRows: ["w-16", "w-24", "w-28"],
    chartBars: ["h-10", "h-12", "h-14", "h-8"],
    metricDots: [64, 52, 44],
  },
  photo: {
    media: "camera",
    topBars: ["w-14", "w-24"],
    listRows: ["w-20", "w-24", "w-16"],
    chartBars: ["h-8", "h-12", "h-10", "h-14"],
    metricDots: [68, 48, 38],
  },
  diary: {
    media: "chart",
    topBars: ["w-20", "w-28"],
    listRows: ["w-28", "w-24", "w-16"],
    chartBars: ["h-9", "h-13", "h-11", "h-15"],
    metricDots: [66, 50, 38],
  },
  graphs: {
    media: "chart",
    topBars: ["w-12", "w-20"],
    listRows: ["w-20", "w-20", "w-32"],
    chartBars: ["h-8", "h-15", "h-11", "h-18"],
    metricDots: [62, 48, 40],
  },
} as const;

function PhoneFrame({
  ariaHidden,
  children,
  className,
  role,
  ariaLabel,
}: {
  ariaHidden?: boolean;
  ariaLabel?: string;
  children: ReactNode;
  className?: string;
  role?: "img";
}) {
  return (
    <div
      aria-hidden={ariaHidden || undefined}
      aria-label={ariaLabel}
      className={cn(
        "relative mx-auto aspect-[9/18.5] w-full max-w-[308px] rounded-[40px] border border-brand-primary/15 bg-[#0f1716] p-3 shadow-[0_35px_80px_rgba(20,60,55,0.18)]",
        className,
      )}
      role={role}
    >
      <div className="absolute left-1/2 top-3 h-5 w-28 -translate-x-1/2 rounded-full bg-[#121c1a]" />
      {children}
    </div>
  );
}

export function PhoneMockupPlaceholder({
  title,
  variant = "hero",
  className,
  decorative = true,
  assetSrc = null,
  imageAlt,
  imageClassName,
  imagePriority = false,
  imageSizes = "(min-width: 1280px) 380px, (min-width: 768px) 340px, 86vw",
}: PhoneMockupPlaceholderProps) {
  const current = variantMap[variant];
  const accessibleTitle = imageAlt ?? title ?? "Интерфейс приложения Калориум";

  if (assetSrc) {
    return (
      <PhoneFrame ariaHidden={decorative} className={className}>
        <div className="relative h-full overflow-hidden rounded-[32px] bg-[#eef7f4]">
          <Image
            alt={decorative ? "" : accessibleTitle}
            className={cn("object-cover object-top", imageClassName)}
            fill
            priority={imagePriority}
            sizes={imageSizes}
            src={assetSrc}
          />
        </div>
      </PhoneFrame>
    );
  }

  return (
    <PhoneFrame
      ariaHidden={decorative}
      ariaLabel={decorative ? undefined : accessibleTitle}
      className={className}
      role={decorative ? undefined : "img"}
    >
      <div className="flex h-full flex-col gap-4 overflow-hidden rounded-[32px] bg-gradient-to-b from-[#f4fbf8] via-white to-[#eaf7f3] p-5">
        <div className="flex items-center justify-between gap-3">
          <div className="space-y-2">
            <div className={cn("h-3 rounded-full bg-brand-primary/18", current.topBars[0])} />
            <div className={cn("h-7 rounded-full bg-brand-primary/75", current.topBars[1])} />
          </div>
          <div className="flex items-center gap-1">
            <span className="h-2.5 w-2.5 rounded-full bg-brand-primary/25" />
            <span className="h-2.5 w-2.5 rounded-full bg-brand-primary/45" />
            <span className="h-2.5 w-2.5 rounded-full bg-brand-primary/65" />
          </div>
        </div>

        <div className="surface-panel grid grid-cols-[1.15fr_0.85fr] gap-3 rounded-[24px] p-4">
          {current.media === "camera" ? (
            <div className="relative overflow-hidden rounded-[20px] bg-brand-primary/10 p-4">
              <div className="absolute inset-3 rounded-[16px] border border-brand-primary/30" />
              <div className="absolute left-4 top-4 h-5 w-5 rounded-tl-[10px] border-l-2 border-t-2 border-brand-primary/65" />
              <div className="absolute right-4 top-4 h-5 w-5 rounded-tr-[10px] border-r-2 border-t-2 border-brand-primary/65" />
              <div className="absolute bottom-4 left-4 h-5 w-5 rounded-bl-[10px] border-b-2 border-l-2 border-brand-primary/65" />
              <div className="absolute bottom-4 right-4 h-5 w-5 rounded-br-[10px] border-b-2 border-r-2 border-brand-primary/65" />
              <div className="flex h-full flex-col justify-between rounded-[16px] bg-gradient-to-b from-white/90 via-brand-soft/35 to-brand-primary/8 p-3">
                <div className="h-3 w-16 rounded-full bg-brand-primary/22" />
                <div className="mx-auto h-20 w-20 rounded-[28px] bg-white/85 shadow-[0_10px_24px_rgba(20,60,55,0.08)]" />
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-white/90" />
                  <div className="h-3 flex-1 rounded-full bg-white/85" />
                </div>
              </div>
            </div>
          ) : (
            <div className="rounded-[20px] bg-brand-primary/8 p-4">
              <div className="h-3 w-16 rounded-full bg-brand-primary/20" />
              <div className="mt-4 flex items-end gap-2">
                {current.chartBars.map((height, index) => (
                  <div
                    key={`${variant}-chart-${index}`}
                    className={cn("w-6 rounded-full bg-brand-primary/70", height)}
                  />
                ))}
              </div>
            </div>
          )}

          <div className="space-y-3">
            {current.metricDots.map((size, index) => (
              <div
                key={`${variant}-metric-${index}`}
                className="flex items-center gap-3 rounded-[18px] bg-white/85 p-3"
              >
                <div
                  className="rounded-full bg-brand-primary/12 ring-4 ring-brand-soft/80"
                  style={{ width: size / 2, height: size / 2 }}
                />
                <div className="flex-1 space-y-2">
                  <div className="h-2.5 w-8 rounded-full bg-brand-primary/20" />
                  <div className="h-2 w-full rounded-full bg-border-soft" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-3">
          {current.listRows.map((width, index) => (
            <div
              key={`${variant}-row-${index}`}
              className="surface-panel flex items-center gap-3 rounded-[20px] p-4"
            >
              <div className="h-11 w-11 rounded-2xl bg-brand-primary/14" />
              <div className="flex-1 space-y-2">
                <div className={cn("h-3 rounded-full bg-brand-primary/25", width)} />
                <div className="h-2 w-full rounded-full bg-border-soft" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-auto rounded-[24px] bg-brand-primary p-4 text-white">
          <div className="flex items-center justify-between gap-3">
            <div className="space-y-2">
              <div className="h-3 w-16 rounded-full bg-white/45" />
              <div className="h-6 w-24 rounded-full bg-white/75" />
            </div>
            <div className="rounded-full bg-white/20 px-4 py-2">
              <div className="h-3 w-10 rounded-full bg-white/70" />
            </div>
          </div>
          <div className="mt-4 grid grid-cols-4 gap-2">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="h-11 rounded-2xl bg-white/18" />
            ))}
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
}
