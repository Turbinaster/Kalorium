import { Calculator, History, Route, ScanSearch } from "lucide-react";

import { FeatureCard } from "@/components/ui/feature-card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { diaryVsNotes } from "@/data/diary";

const icons = [Calculator, History, ScanSearch, Route];

export function DiaryVsNotesSection() {
  return (
    <Section tone="soft">
      <Container>
        <div className="space-y-8">
          <SectionHeading title={diaryVsNotes.title} />
          <div className="grid gap-5 md:grid-cols-2">
            {diaryVsNotes.items.map((item, index) => {
              const Icon = icons[index];

              return (
                <FeatureCard
                  key={item.title}
                  accent={index === 0 || index === 3}
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
