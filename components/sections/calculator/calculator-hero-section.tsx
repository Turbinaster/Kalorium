import { CalculatorFormCard } from "@/components/sections/calculator/calculator-form-section";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const calculatorHeroContent = {
  breadcrumbLabel: "Калькулятор калорий",
  eyebrow: "Онлайн-расчёт нормы",
  title: "Калькулятор калорий и КБЖУ онлайн",
  subtitle:
    "Рассчитайте свою суточную норму калорий с учётом пола, возраста, роста, веса, активности и цели.",
  supportingText:
    "Калькулятор сразу покажет ориентир по калориям, белкам, жирам, углеводам, воде и клетчатке.",
  formNote:
    "После расчёта можно использовать этот ориентир в дневнике питания Калориума.",
};

export function CalculatorHeroSection() {
  return (
    <Section className="pb-8 pt-10 md:pb-10 md:pt-14">
      <Container>
        <div className="space-y-6 md:space-y-8">
          <Breadcrumbs
            items={[
              { label: "Главная", href: "/" },
              { label: calculatorHeroContent.breadcrumbLabel },
            ]}
          />

          <div className="overflow-hidden rounded-[32px] border border-border-soft bg-gradient-to-br from-surface via-surface to-brand-soft/70 px-4 py-6 shadow-soft sm:px-5 sm:py-7 md:px-8 md:py-10 lg:px-10 lg:py-12">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1fr)] lg:items-start lg:gap-10">
              <div className="min-w-0 space-y-4 md:space-y-5">
                <span className="caption-text inline-flex rounded-full bg-brand-soft px-3 py-1 text-brand-hover">
                  {calculatorHeroContent.eyebrow}
                </span>
                <div className="space-y-4">
                  <h1 className="h1-text text-wrap-balance text-text-primary">
                    {calculatorHeroContent.title}
                  </h1>
                  <p className="body-lg-text max-w-2xl text-text-secondary">
                    {calculatorHeroContent.subtitle}
                  </p>
                  <p className="body-text max-w-xl text-text-secondary">
                    {calculatorHeroContent.supportingText}
                  </p>
                </div>
              </div>

              <CalculatorFormCard note={calculatorHeroContent.formNote} />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
