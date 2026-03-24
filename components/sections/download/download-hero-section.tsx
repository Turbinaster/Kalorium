import { PageHero } from "@/components/ui/page-hero";
import { downloadHero } from "@/data/download";
import { RUSTORE_URL } from "@/data/site";

export function DownloadHeroSection() {
  return (
    <PageHero
      breadcrumbLabel={downloadHero.breadcrumbLabel}
      description={downloadHero.description}
      eyebrow={downloadHero.eyebrow}
      note={downloadHero.note}
      primaryAction={{
        label: downloadHero.primaryCta,
        href: RUSTORE_URL,
        external: true,
      }}
      secondaryAction={{
        label: downloadHero.secondaryCta,
        href: "/",
      }}
      title={downloadHero.title}
    />
  );
}
