import { PageHero } from "@/components/ui/page-hero";
import { updatesHero } from "@/data/updates";
import { RUSTORE_URL } from "@/data/site";

export function UpdatesHeroSection() {
  return (
    <PageHero
      breadcrumbLabel={updatesHero.breadcrumbLabel}
      description={updatesHero.description}
      eyebrow={updatesHero.eyebrow}
      primaryAction={{
        label: updatesHero.primaryCta,
        href: RUSTORE_URL,
        external: true,
      }}
      secondaryAction={{
        label: updatesHero.secondaryCta,
        href: "/",
      }}
      title={updatesHero.title}
    />
  );
}
