import { Droplets, Eye, Image as ImageIcon, Layers3, Ruler } from "lucide-react";

import { FeatureCard } from "@/components/ui/feature-card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { photoAccuracyFactors } from "@/data/photo";

const icons = [ImageIcon, Eye, Layers3, Droplets, Ruler];

export function PhotoAccuracyFactorsSection() {
  return (
    <Section>
      <Container>
        <div className="space-y-8">
          <SectionHeading title={photoAccuracyFactors.title} />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {photoAccuracyFactors.items.map((item, index) => {
              const Icon = icons[index];

              return (
                <FeatureCard
                  key={item.title}
                  accent={index === 2}
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
