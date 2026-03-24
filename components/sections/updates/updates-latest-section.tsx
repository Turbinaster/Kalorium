import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { updatesLatest } from "@/data/updates";

export function UpdatesLatestSection() {
  return (
    <Section className="pt-0">
      <Container>
        <div className="space-y-8">
          <SectionHeading title={updatesLatest.title} />
          <article className="soft-card rounded-[28px] bg-gradient-to-br from-brand-soft via-surface to-background-soft p-6 md:p-8">
            <div className="space-y-5">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="caption-text text-text-muted">Последняя версия</p>
                  <h3 className="h2-text text-text-primary">{updatesLatest.version}</h3>
                </div>
                <p className="body-sm-text text-text-muted">{updatesLatest.date}</p>
              </div>
              <ul className="space-y-3">
                {updatesLatest.items.map((item) => (
                  <li key={item} className="body-text flex items-start gap-3 text-text-secondary">
                    <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-brand-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </Container>
    </Section>
  );
}
