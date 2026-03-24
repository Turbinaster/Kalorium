"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import { Container } from "@/components/ui/container";
import { SearchField } from "@/components/ui/search-field";
import { Section } from "@/components/ui/section";
import { faqAnchorChips, faqSearchContent, faqSections } from "@/data/faq";
import { filterFaqSections, type FaqSectionData, type FaqSectionId } from "@/lib/faq";

type FaqSearchContextValue = {
  query: string;
  setQuery: (value: string) => void;
  hasQuery: boolean;
  hasMatches: boolean;
  visibleSections: FaqSectionData[];
  visibleAnchors: typeof faqAnchorChips;
  getSectionById: (id: FaqSectionId) => FaqSectionData | null;
};

const FaqSearchContext = createContext<FaqSearchContextValue | null>(null);

export function FaqSearchProvider({ children }: { children: ReactNode }) {
  const [query, setQuery] = useState("");

  const visibleSections = useMemo(
    () => filterFaqSections(faqSections, query),
    [query],
  );

  const visibleSectionIds = new Set(visibleSections.map((section) => section.id));
  const hasQuery = query.trim().length > 0;
  const hasMatches = visibleSections.length > 0;

  const visibleAnchors = hasQuery
    ? faqAnchorChips.filter((chip) => visibleSectionIds.has(chip.id))
    : faqAnchorChips;

  function getSectionById(id: FaqSectionId) {
    return visibleSections.find((section) => section.id === id) ?? null;
  }

  return (
    <FaqSearchContext.Provider
      value={{
        query,
        setQuery,
        hasQuery,
        hasMatches,
        visibleSections,
        visibleAnchors,
        getSectionById,
      }}
    >
      {children}
    </FaqSearchContext.Provider>
  );
}

export function useFaqSearchContext() {
  const context = useContext(FaqSearchContext);

  if (!context) {
    throw new Error("useFaqSearchContext must be used within FaqSearchProvider");
  }

  return context;
}

export function FaqSearchSection() {
  const { query, setQuery } = useFaqSearchContext();

  return (
    <Section className="pt-0">
      <Container>
        <div className="rounded-[28px] border border-border-soft bg-surface p-5 shadow-soft md:p-6">
          <SearchField
            aria-label={faqSearchContent.placeholder}
            id="faq-search"
            placeholder={faqSearchContent.placeholder}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>
      </Container>
    </Section>
  );
}
