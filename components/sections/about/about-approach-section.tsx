import { FeatureCard } from "@/components/ui/feature-card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { aboutApproach } from "@/data/about";

export function AboutApproachSection() {
  return (
    <Section tone="soft">
      <Container>
        <div className="space-y-8">
          <SectionHeading title={aboutApproach.title} />
          <div className="grid gap-5 lg:grid-cols-3">
            {aboutApproach.items.map((item, index) => (
              <FeatureCard
                key={item.title}
                accent={index === 0}
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
