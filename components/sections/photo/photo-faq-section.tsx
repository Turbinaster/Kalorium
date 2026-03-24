import { Accordion } from "@/components/ui/accordion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { photoFaq } from "@/data/photo";

export function PhotoFaqSection() {
  return (
    <Section>
      <Container>
        <div className="space-y-8">
          <SectionHeading title={photoFaq.title} />
          <Accordion
            defaultOpenIndex={0}
            items={photoFaq.items.map((item) => ({
              question: item.q,
              answer: item.a,
            }))}
          />
        </div>
      </Container>
    </Section>
  );
}
