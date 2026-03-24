import { JsonLd } from "@/components/seo/json-ld";
import { BenefitsSection } from "@/components/sections/home/benefits-section";
import { CalculatorPreviewSection } from "@/components/sections/home/calculator-preview-section";
import { FaqPreviewSection } from "@/components/sections/home/faq-preview-section";
import { FeatureChipsSection } from "@/components/sections/home/feature-chips-section";
import { FeaturesGridSection } from "@/components/sections/home/features-grid-section";
import { FinalCtaSection } from "@/components/sections/home/final-cta-section";
import { HeroSection } from "@/components/sections/home/hero-section";
import { HowItWorksSection } from "@/components/sections/home/how-it-works-section";
import { ReviewsPreviewSection } from "@/components/sections/home/reviews-preview-section";
import { ScreenshotsPreviewSection } from "@/components/sections/home/screenshots-preview-section";
import { WhoForSection } from "@/components/sections/home/who-for-section";
import { createHomeStructuredData } from "@/lib/structured-data";

export default function HomePage() {
  return (
    <>
      <JsonLd data={createHomeStructuredData()} />
      <HeroSection />
      <FeatureChipsSection />
      <FeaturesGridSection />
      <HowItWorksSection />
      <ScreenshotsPreviewSection />
      <WhoForSection />
      <CalculatorPreviewSection />
      <BenefitsSection />
      <FaqPreviewSection />
      <ReviewsPreviewSection />
      <FinalCtaSection />
    </>
  );
}
