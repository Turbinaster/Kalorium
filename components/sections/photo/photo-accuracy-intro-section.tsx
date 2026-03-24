import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { photoAccuracyIntro } from "@/data/photo";

export function PhotoAccuracyIntroSection() {
  return (
    <Section tone="soft">
      <Container>
        <div className="soft-card rounded-[32px] bg-gradient-to-br from-surface via-surface to-background-soft px-6 py-8 md:px-10 md:py-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
            <div className="space-y-4">
              <div className="inline-flex rounded-full bg-brand-soft px-3 py-1">
                <span className="caption-text text-brand-hover">Важно о точности</span>
              </div>
              <h2 className="h2-text text-wrap-balance text-text-primary">
                {photoAccuracyIntro.title}
              </h2>
            </div>

            <div className="space-y-4">
              {photoAccuracyIntro.paragraphs.map((paragraph) => (
                <p key={paragraph} className="body-text text-text-secondary">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
