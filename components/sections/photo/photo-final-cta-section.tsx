import { CtaSection } from "@/components/ui/cta-section";
import { photoFinalCta } from "@/data/photo";
import { RUSTORE_URL } from "@/data/site";

export function PhotoFinalCtaSection() {
  return (
    <CtaSection
      description={photoFinalCta.text}
      note={photoFinalCta.note}
      primaryAction={{
        label: photoFinalCta.primaryCta,
        href: RUSTORE_URL,
        external: true,
      }}
      secondaryAction={{
        label: photoFinalCta.secondaryCta,
        href: "/diary",
      }}
      title={photoFinalCta.title}
    />
  );
}
