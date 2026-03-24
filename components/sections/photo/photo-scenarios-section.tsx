import { Container } from "@/components/ui/container";
import { ScenarioCard } from "@/components/ui/scenario-card";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { photoScenarios } from "@/data/photo";

export function PhotoScenariosSection() {
  return (
    <Section>
      <Container>
        <div className="space-y-8">
          <SectionHeading title={photoScenarios.title} />
          <div className="grid gap-5 md:grid-cols-2">
            {photoScenarios.items.map((item) => (
              <ScenarioCard key={item.title} text={item.text} title={item.title} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
