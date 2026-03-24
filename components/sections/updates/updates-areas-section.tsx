import { FeatureCard } from "@/components/ui/feature-card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { updatesAreas } from "@/data/updates";

export function UpdatesAreasSection() {
  return (
    <Section tone="soft">
      <Container>
        <div className="space-y-8">
          <SectionHeading title={updatesAreas.title} />
          <div className="grid gap-5 md:grid-cols-2">
            {updatesAreas.items.map((item, index) => (
              <FeatureCard
                key={item.title}
                accent={index === 0 || index === 3}
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
