"use client";

import { MetricCard } from "@/components/ui/metric-card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { calculatorResultContent } from "@/data/calculator";

import { useCalculatorContext } from "@/components/sections/calculator/calculator-form-section";

function PlaceholderCard({ label }: { label: string }) {
  return <MetricCard hint="Появится после расчёта" label={label} value="—" />;
}

export function CalculatorResultSection() {
  const { result, hasCalculated } = useCalculatorContext();

  return (
    <Section className="pt-0" id="calculator-result">
      <Container>
        <div className="space-y-8">
          <div className="space-y-3">
            <h2 className="h2-text text-text-primary">{calculatorResultContent.title}</h2>
            <p className="body-text max-w-3xl text-text-secondary">
              {calculatorResultContent.intro}
            </p>
          </div>

          {!hasCalculated || !result ? (
            <div className="space-y-6">
              <div className="soft-card rounded-[30px] px-6 py-8 md:px-8">
                <div className="space-y-3">
                  <h3 className="h3-text text-text-primary">
                    {calculatorResultContent.placeholderTitle}
                  </h3>
                  <p className="body-text text-text-secondary">
                    {calculatorResultContent.placeholderText}
                  </p>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
                {calculatorResultContent.secondaryMetrics.map((metric) => (
                  <PlaceholderCard key={metric} label={metric} />
                ))}
              </div>
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
                <PlaceholderCard label="ИМТ" />
                <PlaceholderCard label="Идеальный вес" />
                <PlaceholderCard label="Эффективный вес" />
                <PlaceholderCard label="BMR" />
                <PlaceholderCard label="TDEE" />
              </div>
            </div>
          ) : (
            <div aria-live="polite" className="space-y-6">
              <div className="soft-card rounded-[30px] bg-gradient-to-br from-brand-soft via-surface to-surface px-6 py-8 md:px-8">
                <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
                  <div className="space-y-3">
                    <p className="caption-text text-text-muted">
                      {calculatorResultContent.mainMetric}
                    </p>
                    <p className="text-4xl font-extrabold tracking-tight text-text-primary md:text-5xl">
                      {result.targetCalories} ккал
                    </p>
                  </div>
                  <div className="rounded-[22px] bg-brand-primary px-5 py-4 text-white">
                    <p className="caption-text text-white/70">Активность</p>
                    <p className="mt-2 text-xl font-bold">{result.activityCoefficient}</p>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
                <MetricCard label="Белки" value={`${result.protein} г`} />
                <MetricCard label="Жиры" value={`${result.fat} г`} />
                <MetricCard label="Углеводы" value={`${result.carbs} г`} />
                <MetricCard label="Вода" value={`${result.waterLiters.toFixed(1)} л`} />
                <MetricCard label="Клетчатка" value={`${result.fiber} г`} />
              </div>

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
                <MetricCard
                  hint={result.bmiCategory}
                  label="ИМТ"
                  value={result.bmi.toFixed(1)}
                />
                <MetricCard
                  hint="По формуле Дивайна"
                  label="Идеальный вес"
                  value={`${result.idealWeight.toFixed(1)} кг`}
                />
                <MetricCard
                  hint="Скорректирован для расчёта"
                  label="Эффективный вес"
                  value={`${result.effectiveWeight.toFixed(1)} кг`}
                />
                <MetricCard
                  hint="Базовый обмен"
                  label="BMR"
                  value={`${result.bmr} ккал`}
                />
                <MetricCard
                  hint="С учётом активности"
                  label="TDEE"
                  value={`${result.tdee} ккал`}
                />
              </div>

              <p className="body-sm-text max-w-3xl text-text-muted">
                {calculatorResultContent.note}
              </p>
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
}
