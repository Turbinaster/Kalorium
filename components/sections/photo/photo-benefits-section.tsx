import { Camera, Clock3, NotebookPen, Rows3 } from "lucide-react";

import { FeatureCard } from "@/components/ui/feature-card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { photoBenefits } from "@/data/photo";

const icons = [Clock3, Camera, NotebookPen, Rows3];

export function PhotoBenefitsSection() {
  return (
    <Section className="pt-0">
      <Container>
        <div className="space-y-8">
          <SectionHeading title={photoBenefits.title} />
          <div className="grid gap-5 md:grid-cols-2">
            {photoBenefits.items.map((item, index) => {
              const Icon = icons[index];

              return (
                <FeatureCard
                  key={item.title}
                  accent={index === 0 || index === photoBenefits.items.length - 1}
                  icon={<Icon className="h-5 w-5" />}
                  text={item.text}
                  title={item.title}
                />
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
