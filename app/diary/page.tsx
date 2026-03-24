import { JsonLd } from "@/components/seo/json-ld";
import { DiaryCloudSection } from "@/components/sections/diary/diary-cloud-section";
import { DiaryDayOverviewSection } from "@/components/sections/diary/diary-day-overview-section";
import { DiaryFinalCtaSection } from "@/components/sections/diary/diary-final-cta-section";
import { DiaryGraphsSection } from "@/components/sections/diary/diary-graphs-section";
import { DiaryHeroSection } from "@/components/sections/diary/diary-hero-section";
import { DiaryTrackingSection } from "@/components/sections/diary/diary-tracking-section";
import { DiaryVsNotesSection } from "@/components/sections/diary/diary-vs-notes-section";
import { DiaryWhyNotOnlyCaloriesSection } from "@/components/sections/diary/diary-why-not-only-calories-section";
import { diaryHero } from "@/data/diary";
import { createMetadata } from "@/lib/seo";
import { createBreadcrumbStructuredData } from "@/lib/structured-data";

export const metadata = createMetadata("/diary");

export default function DiaryPage() {
  return (
    <>
      <JsonLd
        data={createBreadcrumbStructuredData("/diary", diaryHero.breadcrumbLabel)}
      />
      <DiaryHeroSection />
      <DiaryTrackingSection />
      <DiaryDayOverviewSection />
      <DiaryWhyNotOnlyCaloriesSection />
      <DiaryGraphsSection />
      <DiaryVsNotesSection />
      <DiaryCloudSection />
      <DiaryFinalCtaSection />
    </>
  );
}
