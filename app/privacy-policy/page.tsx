import { PrivacyContentSection } from "@/components/sections/privacy/privacy-content-section";
import { PrivacyHeroSection } from "@/components/sections/privacy/privacy-hero-section";
import { JsonLd } from "@/components/seo/json-ld";
import { privacyHero } from "@/data/privacy-policy";
import { createMetadata } from "@/lib/seo";
import { createBreadcrumbStructuredData } from "@/lib/structured-data";

export const metadata = createMetadata("/privacy-policy");

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd
        data={createBreadcrumbStructuredData(
          "/privacy-policy",
          privacyHero.breadcrumbLabel,
        )}
      />
      <PrivacyHeroSection />
      <PrivacyContentSection />
    </>
  );
}
