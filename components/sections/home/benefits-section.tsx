import { Sparkles } from "lucide-react";

import { Container } from "@/components/ui/container";
import { InfoCard } from "@/components/ui/info-card";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { homeBenefits } from "@/data/home";

export function BenefitsSection() {
  return (
    <Section tone="soft">
      <Container>
        <div className="space-y-10">
          <SectionHeading align="center" title={homeBenefits.title} />
          <div className="grid gap-6 md:grid-cols-2">
            {homeBenefits.items.map((item) => (
              <InfoCard
                key={item.title}
                icon={<Sparkles className="h-5 w-5" />}
                text={item.text}
                title={item.title}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
