import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/Section";
import { Plus } from "lucide-react";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — UF Studio" },
      { name: "description", content: "Answers to common questions about working with UF Studio." },
      { property: "og:title", content: "FAQ — UF Studio" },
      { property: "og:description", content: "Frequently asked questions." },
    ],
  }),
  component: FAQ,
});

const QA = [
  ["What services do you offer?", "Logo design, brand identity systems, packaging, social design, websites, and creative direction."],
  ["How long does a project take?", "Most identity engagements run 4–8 weeks. Larger systems can extend to 12 weeks."],
  ["What files will I receive?", "Native source files, exports in all required formats, and a complete PDF brand guideline."],
  ["Do you offer revisions?", "Yes — every engagement includes structured revision rounds at each milestone."],
  ["How do payments work?", "50% to kick off, 50% on final delivery. Stripe, PayPal, or wire."],
  ["How do we start?", "Use the contact form or book a discovery call. We'll respond within 24 hours."],
];

function FAQ() {
  return (
    <Section eyebrow="FAQ" title="Common questions.">
      <div className="max-w-3xl divide-y divide-white/5 border-y border-white/5">
        {QA.map(([q,a]) => (
          <details key={q} className="group py-6">
            <summary className="flex items-center justify-between cursor-pointer list-none">
              <span className="text-lg md:text-xl font-semibold">{q}</span>
              <Plus className="group-open:rotate-45 transition text-[color:var(--accent-orange)] shrink-0 ml-4" />
            </summary>
            <p className="mt-4 text-[color:var(--text-secondary)] leading-relaxed">{a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
