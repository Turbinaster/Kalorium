import {
  Cloud,
  Droplets,
  PieChart,
  ScanSearch,
  ScrollText,
  TrendingUp,
} from "lucide-react";

import { FeatureCard } from "@/components/ui/feature-card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { homeFeatureCards, homeFeaturesSection } from "@/data/home";

const featureIcons = [
  <ScanSearch key="scan" className="h-5 w-5" />,
  <ScrollText key="diary" className="h-5 w-5" />,
  <PieChart key="macro" className="h-5 w-5" />,
  <Droplets key="water" className="h-5 w-5" />,
  <TrendingUp key="graph" className="h-5 w-5" />,
  <Cloud key="cloud" className="h-5 w-5" />,
];

export function FeaturesGridSection() {
  return (
    <Section>
      <Container>
        <div className="space-y-10">
          <SectionHeading align="center" title={homeFeaturesSection.title} />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {homeFeatureCards.map((card, index) => (
              <FeatureCard
                key={card.title}
                accent={card.accent}
                icon={featureIcons[index]}
                text={card.text}
                title={card.title}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
