import { DownloadFaqSection } from "@/components/sections/download/download-faq-section";
import { DownloadFeaturesSection } from "@/components/sections/download/download-features-section";
import { DownloadFinalCtaSection } from "@/components/sections/download/download-final-cta-section";
import { DownloadHeroSection } from "@/components/sections/download/download-hero-section";
import { DownloadStepsSection } from "@/components/sections/download/download-steps-section";
import { DownloadWhyAppSection } from "@/components/sections/download/download-why-app-section";
import { JsonLd } from "@/components/seo/json-ld";
import { downloadHero } from "@/data/download";
import { createMetadata } from "@/lib/seo";
import { createBreadcrumbStructuredData } from "@/lib/structured-data";

export const metadata = createMetadata("/download");

export default function DownloadPage() {
  return (
    <>
      <JsonLd
        data={createBreadcrumbStructuredData(
          "/download",
          downloadHero.breadcrumbLabel,
        )}
      />
      <DownloadHeroSection />
      <DownloadFeaturesSection />
      <DownloadWhyAppSection />
      <DownloadStepsSection />
      <DownloadFaqSection />
      <DownloadFinalCtaSection />
    </>
  );
}
