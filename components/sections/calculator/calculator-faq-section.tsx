import { Accordion } from "@/components/ui/accordion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { calculatorFaqContent } from "@/data/calculator";

export function CalculatorFaqSection() {
  return (
    <Section className="anchor-offset" id={calculatorFaqContent.anchorId}>
      <Container>
        <div className="space-y-10">
          <SectionHeading title={calculatorFaqContent.title} />
          <Accordion
            defaultOpenIndex={0}
            items={calculatorFaqContent.items.map((item) => ({
              question: item.q,
              answer: item.a,
            }))}
          />
        </div>
      </Container>
    </Section>
  );
}
