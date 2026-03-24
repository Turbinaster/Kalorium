import { CtaSection } from "@/components/ui/cta-section";
import { diaryFinalCta } from "@/data/diary";
import { RUSTORE_URL } from "@/data/site";

export function DiaryFinalCtaSection() {
  return (
    <CtaSection
      description={diaryFinalCta.text}
      note={diaryFinalCta.note}
      primaryAction={{
        label: diaryFinalCta.primaryCta,
        href: RUSTORE_URL,
        external: true,
      }}
      secondaryAction={{
        label: diaryFinalCta.secondaryCta,
        href: "/calculator",
      }}
      title={diaryFinalCta.title}
    />
  );
}
