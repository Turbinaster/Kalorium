import { Camera, PieChart, ScanSearch, SquarePen } from "lucide-react";

import { StepCard } from "@/components/ui/step-card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { photoHowItWorks } from "@/data/photo";

const icons = [Camera, ScanSearch, PieChart, SquarePen];

export function PhotoHowItWorksSection() {
  return (
    <Section>
      <Container>
        <div className="space-y-8">
          <SectionHeading title={photoHowItWorks.title} />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {photoHowItWorks.steps.map((step, index) => {
              const Icon = icons[index];

              return (
                <StepCard
                  key={step.title}
                  icon={<Icon className="h-5 w-5" />}
                  step={index + 1}
                  text={step.text}
                  title={step.title}
                />
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
