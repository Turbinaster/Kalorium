import { CtaSection } from "@/components/ui/cta-section";
import { downloadFinalCta } from "@/data/download";
import { RUSTORE_URL } from "@/data/site";

export function DownloadFinalCtaSection() {
  return (
    <CtaSection
      description={downloadFinalCta.text}
      primaryAction={{
        label: downloadFinalCta.primaryCta,
        href: RUSTORE_URL,
        external: true,
      }}
      secondaryAction={{
        label: downloadFinalCta.secondaryCta,
        href: "/calculator",
      }}
      title={downloadFinalCta.title}
    />
  );
}
