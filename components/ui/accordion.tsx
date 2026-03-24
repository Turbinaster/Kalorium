"use client";

import { ChevronDown } from "lucide-react";
import { useEffect, useId, useState } from "react";

import { cn } from "@/lib/cn";

type AccordionItem = {
  question: string;
  answer: string;
};

type AccordionProps = {
  items: AccordionItem[];
  defaultOpenIndex?: number | null;
  className?: string;
};

export function Accordion({
  items,
  defaultOpenIndex = 0,
  className,
}: AccordionProps) {
  const accordionId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(
    defaultOpenIndex ?? null,
  );

  useEffect(() => {
    setOpenIndex(defaultOpenIndex ?? null);
  }, [defaultOpenIndex, items]);

  return (
    <div className={cn("space-y-4", className)}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const buttonId = `${accordionId}-trigger-${index}`;
        const panelId = `${accordionId}-panel-${index}`;

        return (
          <article key={item.question} className="accordion-surface overflow-hidden">
            <h3>
              <button
                aria-controls={panelId}
                aria-expanded={isOpen}
                id={buttonId}
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors hover:bg-brand-soft/45"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                type="button"
              >
                <span className="body-lg-text font-semibold text-text-primary">
                  {item.question}
                </span>
                <ChevronDown
                  aria-hidden="true"
                  className={cn(
                    "h-5 w-5 shrink-0 text-brand-primary transition-transform duration-200 ease-soft",
                    isOpen ? "rotate-180" : "",
                  )}
                />
              </button>
            </h3>
            <div
              aria-hidden={!isOpen}
              aria-labelledby={buttonId}
              className={cn(
                "grid transition-[grid-template-rows] duration-200 ease-soft",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
              id={panelId}
              role="region"
            >
              <div className="overflow-hidden">
                <div className="body-text px-5 pb-5 text-text-secondary">
                  {item.answer}
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
