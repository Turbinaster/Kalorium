import { PageHero } from "@/components/ui/page-hero";
import { reviewsHero } from "@/data/reviews";
import { RUSTORE_URL } from "@/data/site";

export function ReviewsHeroSection() {
  return (
    <PageHero
      breadcrumbLabel={reviewsHero.breadcrumbLabel}
      description={reviewsHero.description}
      eyebrow={reviewsHero.eyebrow}
      note={reviewsHero.note}
      primaryAction={{
        label: reviewsHero.primaryCta,
        href: RUSTORE_URL,
        external: true,
      }}
      secondaryAction={{
        label: reviewsHero.secondaryCta,
        href: RUSTORE_URL,
        external: true,
      }}
      title={reviewsHero.title}
    />
  );
}
