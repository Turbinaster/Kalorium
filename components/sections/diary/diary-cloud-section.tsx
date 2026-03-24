import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { diaryCloud } from "@/data/diary";

function CloudRow() {
  return (
    <div className="rounded-[20px] border border-border-soft bg-white/80 p-4">
      <div className="flex items-center gap-3">
        <div className="h-11 w-11 rounded-2xl bg-brand-soft" />
        <div className="flex-1 space-y-2">
          <div className="h-2.5 w-16 rounded-full bg-brand-primary/20" />
          <div className="h-2 w-full rounded-full bg-border-soft" />
        </div>
      </div>
    </div>
  );
}

export function DiaryCloudSection() {
  return (
    <Section>
      <Container>
        <div className="soft-card rounded-[32px] bg-gradient-to-br from-surface via-surface to-brand-soft/60 px-6 py-8 md:px-10 md:py-10">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(280px,360px)] lg:items-center">
            <div className="space-y-4">
              <h2 className="h2-text text-wrap-balance text-text-primary">{diaryCloud.title}</h2>
              {diaryCloud.paragraphs.map((paragraph) => (
                <p key={paragraph} className="body-text text-text-secondary">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="space-y-4">
              <div className="rounded-[24px] bg-brand-primary px-5 py-5">
                <div className="space-y-3">
                  <div className="h-3 w-16 rounded-full bg-white/45" />
                  <div className="h-6 w-28 rounded-full bg-white/80" />
                </div>
              </div>
              <CloudRow />
              <CloudRow />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
