import { Camera, PieChart, ScrollText, TrendingUp } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { StepCard } from "@/components/ui/step-card";
import { homeHowItWorks } from "@/data/home";

const stepIcons = [
  <Camera key="camera" className="h-5 w-5" />,
  <PieChart key="macro" className="h-5 w-5" />,
  <ScrollText key="diary" className="h-5 w-5" />,
  <TrendingUp key="progress" className="h-5 w-5" />,
];

export function HowItWorksSection() {
  return (
    <Section tone="soft">
      <Container>
        <div className="space-y-10">
          <SectionHeading align="center" title={homeHowItWorks.title} />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {homeHowItWorks.steps.map((step, index) => (
              <StepCard
                key={step.title}
                icon={stepIcons[index]}
                step={index + 1}
                text={step.text}
                title={step.title}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
