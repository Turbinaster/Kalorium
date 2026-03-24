import { Mic, SquarePen, Waypoints } from "lucide-react";

import { FeatureCard } from "@/components/ui/feature-card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { photoNotOnlyPhoto } from "@/data/photo";

const icons = [SquarePen, Mic, Waypoints];

export function PhotoNotOnlyPhotoSection() {
  return (
    <Section tone="soft">
      <Container>
        <div className="space-y-8">
          <SectionHeading title={photoNotOnlyPhoto.title} />
          <div className="grid gap-5 lg:grid-cols-3">
            {photoNotOnlyPhoto.items.map((item, index) => {
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
