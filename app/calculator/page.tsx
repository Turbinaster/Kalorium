import { CalculatorFaqSection } from "@/components/sections/calculator/calculator-faq-section";
import {
  CalculatorFormSection,
  CalculatorProvider,
} from "@/components/sections/calculator/calculator-form-section";
import { CalculatorHeroSection } from "@/components/sections/calculator/calculator-hero-section";
import { CalculatorResultSection } from "@/components/sections/calculator/calculator-result-section";
import { CalculationMethodSection } from "@/components/sections/calculator/calculation-method-section";
import { GoalsSection } from "@/components/sections/calculator/goals-section";
import { MetricExplanationsSection } from "@/components/sections/calculator/metric-explanations-section";
import { NextStepsSection } from "@/components/sections/calculator/next-steps-section";
import { WhyDifferentSection } from "@/components/sections/calculator/why-different-section";
import { WhyNotEnoughSection } from "@/components/sections/calculator/why-not-enough-section";
import { JsonLd } from "@/components/seo/json-ld";
import { CtaSection } from "@/components/ui/cta-section";
import { calculatorFinalCta, calculatorHero } from "@/data/calculator";
import { RUSTORE_URL } from "@/data/site";
import { createMetadata } from "@/lib/seo";
import { createBreadcrumbStructuredData } from "@/lib/structured-data";

export const metadata = createMetadata("/calculator");

export default function CalculatorPage() {
  return (
    <>
      <JsonLd
        data={createBreadcrumbStructuredData(
          "/calculator",
          calculatorHero.breadcrumbLabel,
        )}
      />
      <CalculatorHeroSection />
      <CalculatorProvider>
        <CalculatorFormSection />
        <CalculatorResultSection />
      </CalculatorProvider>
      <CalculationMethodSection />
      <MetricExplanationsSection />
      <GoalsSection />
      <WhyDifferentSection />
      <NextStepsSection />
      <WhyNotEnoughSection />
      <CalculatorFaqSection />
      <CtaSection
        description={calculatorFinalCta.text}
        note={calculatorFinalCta.note}
        primaryAction={{
          label: calculatorFinalCta.primaryCta,
          href: RUSTORE_URL,
          external: true,
        }}
        secondaryAction={{
          label: calculatorFinalCta.secondaryCta,
          href: "/diary",
        }}
        title={calculatorFinalCta.title}
      />
    </>
  );
}
