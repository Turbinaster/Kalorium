"use client";

import { Accordion } from "@/components/ui/accordion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import type { FaqSectionId } from "@/lib/faq";

import { useFaqSearchContext } from "@/components/sections/faq/faq-search-section";

type FaqAccordionSectionProps = {
  sectionId: FaqSectionId;
  tone?: "default" | "soft" | "brand";
  openFirstByDefault?: boolean;
};

export function FaqAccordionSection({
  sectionId,
  tone = "default",
  openFirstByDefault = false,
}: FaqAccordionSectionProps) {
  const { getSectionById, hasQuery } = useFaqSearchContext();
  const section = getSectionById(sectionId);

  if (!section) {
    return null;
  }

  return (
    <Section className="anchor-offset" id={section.id} tone={tone}>
      <Container>
        <div className="space-y-8">
          <SectionHeading description={section.intro} title={section.title} />
          <Accordion
            defaultOpenIndex={hasQuery || openFirstByDefault ? 0 : null}
            items={section.items.map((item) => ({
              question: item.q,
              answer: item.a,
            }))}
          />
        </div>
      </Container>
    </Section>
  );
}

export function FaqAppSection() {
  return <FaqAccordionSection openFirstByDefault sectionId="faq-app" />;
}
