import { FeatureCard } from "@/components/ui/feature-card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { downloadWhyApp } from "@/data/download";

export function DownloadWhyAppSection() {
  return (
    <Section tone="soft">
      <Container>
        <div className="space-y-8">
          <SectionHeading title={downloadWhyApp.title} />
          <div className="grid gap-5 md:grid-cols-2">
            {downloadWhyApp.items.map((item, index) => (
              <FeatureCard
                key={item.title}
                accent={index === 1}
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
