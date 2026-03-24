import { PageHero } from "@/components/ui/page-hero";
import { aboutHero } from "@/data/about";
import { RUSTORE_URL } from "@/data/site";

export function AboutHeroSection() {
  return (
    <PageHero
      breadcrumbLabel={aboutHero.breadcrumbLabel}
      description={aboutHero.description}
      eyebrow={aboutHero.eyebrow}
      primaryAction={{
        label: aboutHero.primaryCta,
        href: RUSTORE_URL,
        external: true,
      }}
      secondaryAction={{
        label: aboutHero.secondaryCta,
        href: "/calculator",
      }}
      title={aboutHero.title}
    />
  );
}
