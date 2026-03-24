import { CtaSection } from "@/components/ui/cta-section";
import { aboutFinalCta } from "@/data/about";
import { RUSTORE_URL } from "@/data/site";

export function AboutFinalCtaSection() {
  return (
    <CtaSection
      description={aboutFinalCta.text}
      primaryAction={{
        label: aboutFinalCta.primaryCta,
        href: RUSTORE_URL,
        external: true,
      }}
      secondaryAction={{
        label: aboutFinalCta.secondaryCta,
        href: "/contacts",
      }}
      title={aboutFinalCta.title}
    />
  );
}
