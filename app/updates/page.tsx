import { UpdatesAreasSection } from "@/components/sections/updates/updates-areas-section";
import { UpdatesFinalCtaSection } from "@/components/sections/updates/updates-final-cta-section";
import { UpdatesHeroSection } from "@/components/sections/updates/updates-hero-section";
import { UpdatesHistorySection } from "@/components/sections/updates/updates-history-section";
import { UpdatesLatestSection } from "@/components/sections/updates/updates-latest-section";
import { JsonLd } from "@/components/seo/json-ld";
import { updatesHero } from "@/data/updates";
import { createMetadata } from "@/lib/seo";
import { createBreadcrumbStructuredData } from "@/lib/structured-data";

export const metadata = createMetadata("/updates");

export default function UpdatesPage() {
  return (
    <>
      <JsonLd
        data={createBreadcrumbStructuredData(
          "/updates",
          updatesHero.breadcrumbLabel,
        )}
      />
      <UpdatesHeroSection />
      <UpdatesLatestSection />
      <UpdatesHistorySection />
      <UpdatesAreasSection />
      <UpdatesFinalCtaSection />
    </>
  );
}
