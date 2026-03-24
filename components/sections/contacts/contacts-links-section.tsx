import Link from "next/link";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { contactsLinks } from "@/data/contacts";

export function ContactsLinksSection() {
  return (
    <Section>
      <Container>
        <div className="space-y-8">
          <SectionHeading title={contactsLinks.title} />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {contactsLinks.items.map((item) => (
              <Link
                key={item.href}
                className="soft-card rounded-[24px] px-5 py-5 text-text-primary transition-colors hover:border-brand-primary/30 hover:bg-brand-soft/35"
                href={item.href}
              >
                <span className="body-text font-semibold">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
