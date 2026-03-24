import { FeatureCard } from "@/components/ui/feature-card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { downloadFeatures } from "@/data/download";

export function DownloadFeaturesSection() {
  return (
    <Section className="pt-0">
      <Container>
        <div className="space-y-8">
          <SectionHeading title={downloadFeatures.title} />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {downloadFeatures.items.map((item, index) => (
              <FeatureCard
                key={item.title}
                accent={index === 0 || index === downloadFeatures.items.length - 1}
                text={item.text}
                title={item.title}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
