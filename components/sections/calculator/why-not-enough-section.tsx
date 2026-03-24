import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { whyNotEnoughContent } from "@/data/calculator";

export function WhyNotEnoughSection() {
  return (
    <Section>
      <Container>
        <div className="rounded-[30px] border border-border-soft bg-background-soft px-6 py-8 md:px-10">
          <div className="space-y-5">
            <h2 className="h2-text max-w-3xl text-text-primary">
              {whyNotEnoughContent.title}
            </h2>
            {whyNotEnoughContent.paragraphs.map((paragraph) => (
              <p key={paragraph} className="body-text max-w-4xl text-text-secondary">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
