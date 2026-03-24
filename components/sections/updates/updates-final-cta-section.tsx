import { CtaSection } from "@/components/ui/cta-section";
import { updatesFinalCta } from "@/data/updates";
import { RUSTORE_URL } from "@/data/site";

export function UpdatesFinalCtaSection() {
  return (
    <CtaSection
      description={updatesFinalCta.text}
      primaryAction={{
        label: updatesFinalCta.primaryCta,
        href: RUSTORE_URL,
        external: true,
      }}
      secondaryAction={{
        label: updatesFinalCta.secondaryCta,
        href: "/",
      }}
      title={updatesFinalCta.title}
    />
  );
}
