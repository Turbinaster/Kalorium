import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { privacySections } from "@/data/privacy-policy";

export function PrivacyContentSection() {
  return (
    <Section className="pt-0">
      <Container>
        <div className="soft-card rounded-[28px] px-6 py-8 md:px-10 md:py-10">
          <div className="max-w-3xl space-y-10">
            {privacySections.map((section) => (
              <div key={section.title} className="space-y-4">
                <h2 className="h3-text text-text-primary">{section.title}</h2>
                <p className="body-text text-text-secondary">{section.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
