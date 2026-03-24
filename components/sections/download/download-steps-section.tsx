import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { downloadSteps } from "@/data/download";

export function DownloadStepsSection() {
  return (
    <Section>
      <Container>
        <div className="space-y-8">
          <SectionHeading title={downloadSteps.title} />
          <div className="grid gap-5 md:grid-cols-3">
            {downloadSteps.items.map((item, index) => (
              <article key={item} className="soft-card rounded-[24px] p-6">
                <div className="space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-soft text-lg font-bold text-brand-primary">
                    {index + 1}
                  </div>
                  <h3 className="h3-text text-text-primary">{item}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
