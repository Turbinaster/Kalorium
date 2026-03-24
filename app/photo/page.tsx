import { JsonLd } from "@/components/seo/json-ld";
import { PhotoAccuracyFactorsSection } from "@/components/sections/photo/photo-accuracy-factors-section";
import { PhotoAccuracyIntroSection } from "@/components/sections/photo/photo-accuracy-intro-section";
import { PhotoBenefitsSection } from "@/components/sections/photo/photo-benefits-section";
import { PhotoFaqSection } from "@/components/sections/photo/photo-faq-section";
import { PhotoFinalCtaSection } from "@/components/sections/photo/photo-final-cta-section";
import { PhotoHeroSection } from "@/components/sections/photo/photo-hero-section";
import { PhotoHowItWorksSection } from "@/components/sections/photo/photo-how-it-works-section";
import { PhotoNotOnlyPhotoSection } from "@/components/sections/photo/photo-not-only-photo-section";
import { PhotoScenariosSection } from "@/components/sections/photo/photo-scenarios-section";
import { PhotoWhenToAdjustSection } from "@/components/sections/photo/photo-when-to-adjust-section";
import { PhotoWithDiarySection } from "@/components/sections/photo/photo-with-diary-section";
import { photoHero } from "@/data/photo";
import { createMetadata } from "@/lib/seo";
import { createBreadcrumbStructuredData } from "@/lib/structured-data";

export const metadata = createMetadata("/photo");

export default function PhotoPage() {
  return (
    <>
      <JsonLd
        data={createBreadcrumbStructuredData("/photo", photoHero.breadcrumbLabel)}
      />
      <PhotoHeroSection />
      <PhotoBenefitsSection />
      <PhotoHowItWorksSection />
      <PhotoAccuracyIntroSection />
      <PhotoAccuracyFactorsSection />
      <PhotoWhenToAdjustSection />
      <PhotoNotOnlyPhotoSection />
      <PhotoScenariosSection />
      <PhotoWithDiarySection />
      <PhotoFaqSection />
      <PhotoFinalCtaSection />
    </>
  );
}
