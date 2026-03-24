import { Activity, Calculator, Scale, Sigma } from "lucide-react";

import { Container } from "@/components/ui/container";
import { InfoCard } from "@/components/ui/info-card";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { whyDifferentContent } from "@/data/calculator";

const icons = [
  <Sigma key="formula" className="h-5 w-5" />,
  <Activity key="activity" className="h-5 w-5" />,
  <Scale key="weight" className="h-5 w-5" />,
  <Calculator key="macro" className="h-5 w-5" />,
];

export function WhyDifferentSection() {
  return (
    <Section>
      <Container>
        <div className="space-y-10">
          <SectionHeading
            description={whyDifferentContent.intro}
            title={whyDifferentContent.title}
          />
          <div className="grid gap-6 md:grid-cols-2">
            {whyDifferentContent.cards.map((card, index) => (
              <InfoCard
                key={card.title}
                icon={icons[index]}
                text={card.text}
                title={card.title}
              />
            ))}
          </div>
          <div className="rounded-[28px] border border-border-soft bg-background-soft px-6 py-6 md:px-8">
            <p className="body-text max-w-4xl text-text-secondary">
              {whyDifferentContent.closing}
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
