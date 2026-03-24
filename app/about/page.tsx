import { AboutApproachSection } from "@/components/sections/about/about-approach-section";
import { AboutFinalCtaSection } from "@/components/sections/about/about-final-cta-section";
import { AboutHeroSection } from "@/components/sections/about/about-hero-section";
import { AboutOfficialSiteSection } from "@/components/sections/about/about-official-site-section";
import { AboutPurposeSection } from "@/components/sections/about/about-purpose-section";
import { AboutSupportSection } from "@/components/sections/about/about-support-section";
import { JsonLd } from "@/components/seo/json-ld";
import { aboutHero } from "@/data/about";
import { createMetadata } from "@/lib/seo";
import { createBreadcrumbStructuredData } from "@/lib/structured-data";

export const metadata = createMetadata("/about");

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={createBreadcrumbStructuredData("/about", aboutHero.breadcrumbLabel)}
      />
      <AboutHeroSection />
      <AboutPurposeSection />
      <AboutApproachSection />
      <AboutOfficialSiteSection />
      <AboutSupportSection />
      <AboutFinalCtaSection />
    </>
  );
}
