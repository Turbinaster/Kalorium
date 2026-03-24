import { Accordion } from "@/components/ui/accordion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { downloadFaq } from "@/data/download";

export function DownloadFaqSection() {
  return (
    <Section>
      <Container>
        <div className="space-y-8">
          <SectionHeading title={downloadFaq.title} />
          <Accordion
            defaultOpenIndex={0}
            items={downloadFaq.items.map((item) => ({
              question: item.q,
              answer: item.a,
            }))}
          />
        </div>
      </Container>
    </Section>
  );
}
