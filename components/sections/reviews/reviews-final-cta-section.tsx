import { CtaSection } from "@/components/ui/cta-section";
import { reviewsFinalCta } from "@/data/reviews";
import { RUSTORE_URL } from "@/data/site";

export function ReviewsFinalCtaSection() {
  return (
    <CtaSection
      description={reviewsFinalCta.text}
      primaryAction={{
        label: reviewsFinalCta.primaryCta,
        href: RUSTORE_URL,
        external: true,
      }}
      secondaryAction={{
        label: reviewsFinalCta.secondaryCta,
        href: "/",
      }}
      title={reviewsFinalCta.title}
    />
  );
}
