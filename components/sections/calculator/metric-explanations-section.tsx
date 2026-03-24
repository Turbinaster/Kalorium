import { Activity, Gauge, Ruler, Scale, Sigma } from "lucide-react";

import { Container } from "@/components/ui/container";
import { InfoCard } from "@/components/ui/info-card";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { metricExplanationsContent } from "@/data/calculator";

const icons = [
  <Scale key="bmi" className="h-5 w-5" />,
  <Ruler key="ideal" className="h-5 w-5" />,
  <Gauge key="effective" className="h-5 w-5" />,
  <Sigma key="bmr" className="h-5 w-5" />,
  <Activity key="tdee" className="h-5 w-5" />,
];

export function MetricExplanationsSection() {
  return (
    <Section>
      <Container>
        <div className="space-y-10">
          <SectionHeading
            description={metricExplanationsContent.intro}
            title={metricExplanationsContent.title}
          />
          <div className="grid gap-6 md:grid-cols-2">
            {metricExplanationsContent.cards.map((card, index) => (
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
