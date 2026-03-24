import Link from "next/link";

import { Accordion } from "@/components/ui/accordion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { homeFaqPreview } from "@/data/home";

export function FaqPreviewSection() {
  return (
    <Section>
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start">
          <SectionHeading title={homeFaqPreview.title} />
          <div className="space-y-5">
            <Accordion
              defaultOpenIndex={0}
              items={homeFaqPreview.items.map((item) => ({
                question: item.q,
                answer: item.a,
              }))}
            />
            <Link
              className="body-text inline-flex font-semibold text-brand-hover transition-colors hover:text-brand-primary"
              href={homeFaqPreview.linkHref}
            >
              {homeFaqPreview.linkLabel}
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
