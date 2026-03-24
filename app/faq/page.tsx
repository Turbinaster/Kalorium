import { FaqAnchorNavSection } from "@/components/sections/faq/faq-anchor-nav-section";
import { FaqAppSection } from "@/components/sections/faq/faq-app-section";
import { FaqCaloriesSection } from "@/components/sections/faq/faq-calories-section";
import { FaqDiarySection } from "@/components/sections/faq/faq-diary-section";
import { FaqFinalCtaSection } from "@/components/sections/faq/faq-final-cta-section";
import { FaqGettingStartedSection } from "@/components/sections/faq/faq-getting-started-section";
import { faqHero } from "@/data/faq";
import { FaqHeroSection } from "@/components/sections/faq/faq-hero-section";
import { FaqMidCtaSection } from "@/components/sections/faq/faq-mid-cta-section";
import { FaqNutritionSection } from "@/components/sections/faq/faq-nutrition-section";
import { FaqPhotoSection } from "@/components/sections/faq/faq-photo-section";
import {
  FaqSearchProvider,
  FaqSearchSection,
} from "@/components/sections/faq/faq-search-section";
import { JsonLd } from "@/components/seo/json-ld";
import { createMetadata } from "@/lib/seo";
import {
  createBreadcrumbStructuredData,
  createFaqPageStructuredData,
} from "@/lib/structured-data";

export const metadata = createMetadata("/faq");

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={[
          createBreadcrumbStructuredData("/faq", faqHero.breadcrumbLabel),
          createFaqPageStructuredData(),
        ]}
      />
      <FaqHeroSection />
      <FaqSearchProvider>
        <FaqSearchSection />
        <FaqAnchorNavSection />
        <FaqAppSection />
        <FaqCaloriesSection />
        <FaqMidCtaSection />
        <FaqPhotoSection />
        <FaqDiarySection />
        <FaqNutritionSection />
        <FaqGettingStartedSection />
      </FaqSearchProvider>
      <FaqFinalCtaSection />
    </>
  );
}
