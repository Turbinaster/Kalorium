"use client";

import Link from "next/link";

import { Chip } from "@/components/ui/chip";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { faqSearchContent } from "@/data/faq";

import { useFaqSearchContext } from "@/components/sections/faq/faq-search-section";

export function FaqAnchorNavSection() {
  const { hasMatches, hasQuery, visibleAnchors } = useFaqSearchContext();

  return (
    <Section className="py-0">
      <Container>
        <div className="space-y-5">
          {hasMatches || !hasQuery ? (
            <div className="overflow-x-auto pb-2">
              <div className="flex min-w-max gap-3">
                {visibleAnchors.map((chip) => (
                  <Chip key={chip.id} href={chip.href} label={chip.label} />
                ))}
              </div>
            </div>
          ) : (
            <div className="rounded-[28px] border border-border-soft bg-surface px-6 py-8 text-center shadow-soft">
              <div className="mx-auto max-w-2xl space-y-4">
                <h2 className="h3-text text-text-primary">
                  {faqSearchContent.emptyState.title}
                </h2>
                <p className="body-text text-text-secondary">
                  {faqSearchContent.emptyState.text}
                </p>
                <Button asChild size="lg">
                  <Link href="/calculator">{faqSearchContent.emptyState.cta}</Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
}
