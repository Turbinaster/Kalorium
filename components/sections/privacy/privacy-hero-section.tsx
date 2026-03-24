import { PageHero } from "@/components/ui/page-hero";
import { privacyHero } from "@/data/privacy-policy";
import { RUSTORE_URL } from "@/data/site";

export function PrivacyHeroSection() {
  return (
    <PageHero
      breadcrumbLabel={privacyHero.breadcrumbLabel}
      description={privacyHero.description}
      eyebrow={privacyHero.eyebrow}
      primaryAction={{
        label: privacyHero.primaryCta,
        href: "/",
      }}
      secondaryAction={{
        label: privacyHero.secondaryCta,
        href: RUSTORE_URL,
        external: true,
      }}
      title={privacyHero.title}
    />
  );
}
