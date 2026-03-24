import { Container } from "@/components/ui/container";
import { ScreenCard } from "@/components/ui/screen-card";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { assetPaths } from "@/data/assets";
import { homeScreenshotsPreview } from "@/data/home";
import { resolveOptionalPublicAsset } from "@/lib/assets";

const screenshotAssetMap = {
  dashboard: resolveOptionalPublicAsset(assetPaths.homeScreenDashboard),
  macros: resolveOptionalPublicAsset(assetPaths.homeScreenMacrosWater),
  diary: resolveOptionalPublicAsset(assetPaths.homeScreenDiary),
  graphs: resolveOptionalPublicAsset(assetPaths.homeScreenGraphs),
} as const;

export function ScreenshotsPreviewSection() {
  return (
    <Section>
      <Container>
        <div className="space-y-10">
          <SectionHeading
            align="center"
            description={homeScreenshotsPreview.intro}
            title={homeScreenshotsPreview.title}
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {homeScreenshotsPreview.items.map((item) => (
              <ScreenCard
                key={item.caption}
                assetSrc={screenshotAssetMap[item.variant]}
                title={item.caption}
                variant={item.variant}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
