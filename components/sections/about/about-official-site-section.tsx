import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { aboutOfficialSite } from "@/data/about";

export function AboutOfficialSiteSection() {
  return (
    <Section>
      <Container>
        <div className="soft-card rounded-[32px] bg-gradient-to-br from-surface via-surface to-background-soft px-6 py-8 md:px-10 md:py-10">
          <div className="max-w-4xl space-y-4">
            <h2 className="h2-text text-wrap-balance text-text-primary">
              {aboutOfficialSite.title}
            </h2>
            {aboutOfficialSite.paragraphs.map((paragraph) => (
              <p key={paragraph} className="body-text text-text-secondary">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
