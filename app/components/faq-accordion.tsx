"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

type FaqItem = {
  question: string;
  answer: string;
};

export default function FaqAccordion({
  items,
}: {
  items: FaqItem[];
}) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <button
            key={item.question}
            type="button"
            onClick={() => setOpenIndex(isOpen ? -1 : index)}
            className="panel-dark reveal-up w-full rounded-[1.2rem] p-5 text-left"
            style={{ animationDelay: `${index * 70}ms` }}
          >
            <div className="flex items-start justify-between gap-4">
              <p className="text-sm font-semibold text-[var(--foreground)] md:text-base">{item.question}</p>
              <Plus
                size={18}
                className={`mt-0.5 shrink-0 text-[var(--brand-green)] transition-transform duration-300 ${
                  isOpen ? "rotate-45" : ""
                }`}
              />
            </div>
            {isOpen ? (
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{item.answer}</p>
            ) : null}
          </button>
        );
      })}
    </div>
  );
}
