import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { homeCalculatorPreview } from "@/data/home";

const pseudoFields = [
  { label: "Пол", value: "Женщина" },
  { label: "Возраст", value: "29 лет" },
  { label: "Рост", value: "168 см" },
  { label: "Вес", value: "64 кг" },
  { label: "Активность", value: "Умеренная" },
  { label: "Цель", value: "Поддержание" },
];

const resultMetrics = [
  { label: "Белки", value: "112 г" },
  { label: "Жиры", value: "61 г" },
  { label: "Углеводы", value: "185 г" },
];

export function CalculatorPreviewSection() {
  return (
    <Section>
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(420px,1.05fr)] lg:items-center">
          <div className="space-y-6">
            <SectionHeading title={homeCalculatorPreview.title} />
            <div className="space-y-4">
              <p className="body-lg-text max-w-2xl text-text-secondary">
                {homeCalculatorPreview.textPrimary}
              </p>
              <p className="body-text max-w-2xl text-text-secondary">
                {homeCalculatorPreview.textSecondary}
              </p>
            </div>
            <div className="flex flex-col items-start gap-3">
              <Button asChild size="lg">
                <Link href="/calculator">{homeCalculatorPreview.cta}</Link>
              </Button>
              <p className="body-sm-text text-text-muted">
                {homeCalculatorPreview.smallNote}
              </p>
            </div>
          </div>

          <div className="soft-card overflow-hidden rounded-[30px] bg-gradient-to-br from-surface via-surface to-brand-soft/75 p-6 md:p-8">
            <div className="space-y-5">
              <div className="inline-flex rounded-2xl border border-border-soft bg-white/80 p-1">
                <span className="rounded-xl px-4 py-2 text-sm font-semibold text-text-secondary">
                  Похудение
                </span>
                <span className="rounded-xl bg-brand-primary px-4 py-2 text-sm font-semibold text-white">
                  Поддержание
                </span>
                <span className="rounded-xl px-4 py-2 text-sm font-semibold text-text-secondary">
                  Набор
                </span>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {pseudoFields.map((field) => (
                  <div
                    key={field.label}
                    className="rounded-[20px] border border-border-soft bg-white/85 p-4"
                  >
                    <div className="caption-text text-text-muted">{field.label}</div>
                    <div className="mt-2 text-base font-semibold text-text-primary">
                      {field.value}
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-[24px] bg-brand-primary p-5 text-white">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="caption-text text-white/70">Ориентир на день</div>
                    <div className="mt-2 text-3xl font-bold">1 840 ккал</div>
                  </div>
                  <div className="rounded-full bg-white/18 px-4 py-2 text-sm font-semibold">
                    КБЖУ
                  </div>
                </div>
                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  {resultMetrics.map((metric) => (
                    <div key={metric.label} className="rounded-[18px] bg-white/10 p-3">
                      <div className="caption-text text-white/70">{metric.label}</div>
                      <div className="mt-2 text-lg font-semibold">{metric.value}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 space-y-2">
                  <div className="h-2 rounded-full bg-white/20">
                    <div className="h-full w-3/5 rounded-full bg-white/80" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 w-2/3 rounded-full bg-white/30" />
                    <div className="h-2 w-1/2 rounded-full bg-white/20" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
