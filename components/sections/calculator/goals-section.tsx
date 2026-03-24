import { Container } from "@/components/ui/container";
import { ScenarioCard } from "@/components/ui/scenario-card";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { goalsContent } from "@/data/calculator";

export function GoalsSection() {
  return (
    <Section tone="brand">
      <Container>
        <div className="space-y-10">
          <SectionHeading title={goalsContent.title} />
          <div className="grid gap-6 lg:grid-cols-3">
            {goalsContent.cards.map((card) => (
              <ScenarioCard
                key={card.title}
                text={card.text}
                title={card.title}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
