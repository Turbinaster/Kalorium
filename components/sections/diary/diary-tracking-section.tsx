import { Droplets, Flame, NotebookText, PieChart, Wheat } from "lucide-react";

import { FeatureCard } from "@/components/ui/feature-card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { diaryTracking } from "@/data/diary";

const icons = [Flame, PieChart, Wheat, Droplets, NotebookText];

export function DiaryTrackingSection() {
  return (
    <Section className="pt-0">
      <Container>
        <div className="space-y-8">
          <SectionHeading title={diaryTracking.title} />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {diaryTracking.items.map((item, index) => {
              const Icon = icons[index];

              return (
                <FeatureCard
                  key={item.title}
                  accent={index === 0 || index === 4}
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
