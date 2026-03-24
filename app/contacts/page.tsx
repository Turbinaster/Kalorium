import { ContactsHeroSection } from "@/components/sections/contacts/contacts-hero-section";
import { ContactsLinksSection } from "@/components/sections/contacts/contacts-links-section";
import { ContactsMethodsSection } from "@/components/sections/contacts/contacts-methods-section";
import { JsonLd } from "@/components/seo/json-ld";
import { contactsHero } from "@/data/contacts";
import { createMetadata } from "@/lib/seo";
import { createBreadcrumbStructuredData } from "@/lib/structured-data";

export const metadata = createMetadata("/contacts");

export default function ContactsPage() {
  return (
    <>
      <JsonLd
        data={createBreadcrumbStructuredData(
          "/contacts",
          contactsHero.breadcrumbLabel,
        )}
      />
      <ContactsHeroSection />
      <ContactsMethodsSection />
      <ContactsLinksSection />
      </>
  );
}
