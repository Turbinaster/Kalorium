import { Container } from "@/components/ui/container";
import { ScenarioCard } from "@/components/ui/scenario-card";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { homeWhoFor } from "@/data/home";

export function WhoForSection() {
  return (
    <Section tone="brand">
      <Container>
        <div className="space-y-10">
          <SectionHeading align="center" title={homeWhoFor.title} />
          <div className="grid gap-6 md:grid-cols-2">
            {homeWhoFor.cards.map((card) => (
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
