import { FeatureCard } from "@/components/ui/feature-card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { aboutPurpose } from "@/data/about";

export function AboutPurposeSection() {
  return (
    <Section className="pt-0">
      <Container>
        <div className="space-y-8">
          <SectionHeading title={aboutPurpose.title} />
          <div className="grid gap-5 lg:grid-cols-3">
            {aboutPurpose.items.map((item, index) => (
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
