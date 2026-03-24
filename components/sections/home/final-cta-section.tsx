import { CtaSection } from "@/components/ui/cta-section";
import { homeFinalCta } from "@/data/home";
import { RUSTORE_URL } from "@/data/site";

export function FinalCtaSection() {
  return (
    <CtaSection
      description={homeFinalCta.text}
      note={homeFinalCta.note}
      primaryAction={{
        label: homeFinalCta.primaryCta,
        href: RUSTORE_URL,
        external: true,
      }}
      secondaryAction={{
        label: homeFinalCta.secondaryCta,
        href: "/calculator",
      }}
      title={homeFinalCta.title}
    />
  );
}
