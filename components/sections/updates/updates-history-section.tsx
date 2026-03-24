import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { updatesHistory } from "@/data/updates";

export function UpdatesHistorySection() {
  return (
    <Section>
      <Container>
        <div className="space-y-8">
          <SectionHeading title={updatesHistory.title} />
          <div className="grid gap-5 xl:grid-cols-3">
            {updatesHistory.items.map((item, index) => (
              <article
                key={`${item.version}-${index}`}
                className="soft-card rounded-[24px] p-6"
              >
                <div className="space-y-5">
                  <div className="space-y-1">
                    <p className="caption-text text-text-muted">{item.date}</p>
                    <h3 className="h3-text text-text-primary">{item.version}</h3>
                  </div>
                  <ul className="space-y-3">
                    {item.items.map((point) => (
                      <li key={point} className="body-text flex items-start gap-3 text-text-secondary">
                        <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-brand-primary" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
