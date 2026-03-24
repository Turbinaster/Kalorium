import { EyeOff, NotebookPen, Soup, Target } from "lucide-react";

import { FeatureCard } from "@/components/ui/feature-card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { photoWhenToAdjust } from "@/data/photo";

const icons = [EyeOff, NotebookPen, Target, Soup];

export function PhotoWhenToAdjustSection() {
  return (
    <Section>
      <Container>
        <div className="space-y-8">
          <SectionHeading title={photoWhenToAdjust.title} />
          <div className="grid gap-5 md:grid-cols-2">
            {photoWhenToAdjust.items.map((item, index) => {
              const Icon = icons[index];

              return (
                <FeatureCard
                  key={item.title}
                  accent={index === 1}
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
