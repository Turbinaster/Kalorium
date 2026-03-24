import { PageHero } from "@/components/ui/page-hero";
import { contactsHero } from "@/data/contacts";
import { RUSTORE_URL } from "@/data/site";

export function ContactsHeroSection() {
  return (
    <PageHero
      breadcrumbLabel={contactsHero.breadcrumbLabel}
      description={contactsHero.description}
      eyebrow={contactsHero.eyebrow}
      primaryAction={{
        label: contactsHero.primaryCta,
        href: RUSTORE_URL,
        external: true,
      }}
      secondaryAction={{
        label: contactsHero.secondaryCta,
        href: "/",
      }}
      title={contactsHero.title}
    />
  );
}
