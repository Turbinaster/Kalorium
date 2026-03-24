import { Droplets, Flame, PieChart } from "lucide-react";

import { FeatureCard } from "@/components/ui/feature-card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { diaryWhyNotOnlyCalories } from "@/data/diary";

const icons = [Flame, PieChart, Droplets];

export function DiaryWhyNotOnlyCaloriesSection() {
  return (
    <Section>
      <Container>
        <div className="space-y-8">
          <SectionHeading title={diaryWhyNotOnlyCalories.title} />
          <div className="grid gap-5 lg:grid-cols-3">
            {diaryWhyNotOnlyCalories.items.map((item, index) => {
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
