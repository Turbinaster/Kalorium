import { Chip } from "@/components/ui/chip";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { reviewsThemes } from "@/data/reviews";

export function ReviewsThemesSection() {
  return (
    <Section className="pt-0">
      <Container>
        <div className="space-y-8">
          <SectionHeading title={reviewsThemes.title} />
          <div className="flex flex-wrap gap-3">
            {reviewsThemes.items.map((item, index) => (
              <Chip key={item} active={index < 2} label={item} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
