export type FaqSectionId =
  | "faq-app"
  | "faq-calories"
  | "faq-photo"
  | "faq-diary"
  | "faq-nutrition"
  | "faq-getting-started";

export type FaqItem = {
  q: string;
  a: string;
};

export type FaqSectionData = {
  id: FaqSectionId;
  navLabel: string;
  title: string;
  intro: string;
  items: FaqItem[];
};

function normalizeText(value: string) {
  return value.trim().toLowerCase();
}

export function filterFaqSections(
  sections: FaqSectionData[],
  query: string,
): FaqSectionData[] {
  const normalizedQuery = normalizeText(query);

  if (!normalizedQuery) {
    return sections;
  }

  return sections
    .map((section) => ({
      ...section,
      items: section.items.filter((item) =>
        normalizeText(item.q).includes(normalizedQuery),
      ),
    }))
    .filter((section) => section.items.length > 0);
}
