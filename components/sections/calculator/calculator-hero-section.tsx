import { Calculator, Flame, Gauge, Scale, Target, UserRound } from "lucide-react";

import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Button } from "@/components/ui/button";
import { Chip } from "@/components/ui/chip";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { calculatorHero } from "@/data/calculator";
import { RUSTORE_URL } from "@/data/site";

const heroIcons = [UserRound, Gauge, Scale, Flame, Calculator, Target];

export function CalculatorHeroSection() {
  return (
    <Section className="pb-10 pt-10 md:pb-12 md:pt-14">
      <Container>
        <div className="space-y-8">
          <Breadcrumbs
            items={[
              { label: "Главная", href: "/" },
              { label: calculatorHero.breadcrumbLabel },
            ]}
          />

          <div className="overflow-hidden rounded-[36px] border border-border-soft bg-gradient-to-br from-surface via-surface to-brand-soft/75 px-6 py-8 shadow-soft md:px-10 md:py-12 lg:px-12 lg:py-14">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(360px,460px)] lg:items-center">
              <div className="space-y-8">
                <div className="space-y-5">
                  <span className="caption-text inline-flex rounded-full bg-brand-soft px-3 py-1 text-brand-hover">
                    {calculatorHero.eyebrow}
                  </span>
                  <div className="space-y-4">
                    <h1 className="h1-text text-wrap-balance text-text-primary">
                      {calculatorHero.title}
                    </h1>
                    <p className="body-lg-text max-w-2xl text-text-secondary">
                      {calculatorHero.description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  {calculatorHero.helperChips.map((chip, index) => {
                    const Icon = heroIcons[index];

                    return (
                      <Chip
                        key={chip}
                        icon={<Icon className="h-4 w-4" />}
                        label={chip}
                      />
                    );
                  })}
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button asChild size="lg">
                    <a href={RUSTORE_URL} rel="noreferrer" target="_blank">
                      {calculatorHero.primaryCta}
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="secondary">
                    <a href="#calculator-faq">{calculatorHero.secondaryCta}</a>
                  </Button>
                </div>

                <p className="body-sm-text max-w-2xl text-text-muted">
                  {calculatorHero.supportingNote}
                </p>
              </div>

              <div className="soft-card rounded-[30px] bg-white/80 p-5 md:p-6">
                <div className="space-y-5">
                  <div className="inline-flex rounded-2xl border border-border-soft bg-surface p-1">
                    <span className="rounded-xl bg-brand-primary px-4 py-2 text-sm font-semibold text-white">
                      Женщина
                    </span>
                    <span className="rounded-xl px-4 py-2 text-sm font-semibold text-text-secondary">
                      Мужчина
                    </span>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-[20px] border border-border-soft bg-surface-elevated p-4">
                      <div className="caption-text text-text-muted">Возраст</div>
                      <div className="mt-2 h-6 w-20 rounded-full bg-brand-primary/18" />
                    </div>
                    <div className="rounded-[20px] border border-border-soft bg-surface-elevated p-4">
                      <div className="caption-text text-text-muted">Рост</div>
                      <div className="mt-2 h-6 w-24 rounded-full bg-brand-primary/18" />
                    </div>
                    <div className="rounded-[20px] border border-border-soft bg-surface-elevated p-4">
                      <div className="caption-text text-text-muted">Вес</div>
                      <div className="mt-2 h-6 w-24 rounded-full bg-brand-primary/18" />
                    </div>
                    <div className="rounded-[20px] border border-border-soft bg-surface-elevated p-4">
                      <div className="caption-text text-text-muted">Активность</div>
                      <div className="mt-2 h-6 w-28 rounded-full bg-brand-primary/18" />
                    </div>
                  </div>

                  <div className="inline-flex rounded-2xl border border-border-soft bg-surface p-1">
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

                  <div className="rounded-[24px] bg-brand-primary p-5 text-white">
                    <div className="caption-text text-white/70">Суточная норма калорий</div>
                    <div className="mt-3 text-3xl font-bold">1 940 ккал</div>
                    <div className="mt-4 grid grid-cols-3 gap-3">
                      <div className="rounded-[18px] bg-white/15 p-3">
                        <div className="caption-text text-white/70">Белки</div>
                        <div className="mt-2 text-base font-semibold">116 г</div>
                      </div>
                      <div className="rounded-[18px] bg-white/15 p-3">
                        <div className="caption-text text-white/70">Жиры</div>
                        <div className="mt-2 text-base font-semibold">62 г</div>
                      </div>
                      <div className="rounded-[18px] bg-white/15 p-3">
                        <div className="caption-text text-white/70">Углеводы</div>
                        <div className="mt-2 text-base font-semibold">225 г</div>
                      </div>
                    </div>
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
