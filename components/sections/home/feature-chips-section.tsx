import { Chip } from "@/components/ui/chip";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { homeFeatureChips } from "@/data/home";

export function FeatureChipsSection() {
  return (
    <Section className="py-0">
      <Container>
        <div className="rounded-[30px] border border-border-soft bg-surface/90 px-4 py-5 shadow-soft md:px-6">
          <div className="flex flex-wrap gap-3">
            {homeFeatureChips.map((chip) => (
              <Chip key={`line-${chip.label}`} href={chip.href} label={chip.label} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
