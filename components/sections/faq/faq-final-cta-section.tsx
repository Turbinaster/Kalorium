import { CtaSection } from "@/components/ui/cta-section";
import { faqFinalCta } from "@/data/faq";
import { RUSTORE_URL } from "@/data/site";

export function FaqFinalCtaSection() {
  return (
    <CtaSection
      description={faqFinalCta.text}
      note={faqFinalCta.note}
      primaryAction={{
        label: faqFinalCta.primaryCta,
        href: RUSTORE_URL,
        external: true,
      }}
      secondaryAction={{
        label: faqFinalCta.secondaryCta,
        href: "/calculator",
      }}
      title={faqFinalCta.title}
    />
  );
}
