import { Activity, Flame, Gauge, Scale, Sigma } from "lucide-react";

import { Container } from "@/components/ui/container";
import { InfoCard } from "@/components/ui/info-card";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { calculationMethodContent } from "@/data/calculator";

const icons = [
  <Sigma key="sigma" className="h-5 w-5" />,
  <Activity key="activity" className="h-5 w-5" />,
  <Gauge key="tdee" className="h-5 w-5" />,
  <Scale key="weight" className="h-5 w-5" />,
  <Flame key="macro" className="h-5 w-5" />,
];

export function CalculationMethodSection() {
  return (
    <Section tone="soft">
      <Container>
        <div className="space-y-10">
          <SectionHeading title={calculationMethodContent.title} />
          <div className="grid gap-4">
            {calculationMethodContent.paragraphs.map((paragraph) => (
              <p key={paragraph} className="body-text max-w-4xl text-text-secondary">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {calculationMethodContent.cards.map((card, index) => (
              <InfoCard
                key={card.title}
                icon={icons[index]}
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
