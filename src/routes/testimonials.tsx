import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/Section";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials — UF Studio" },
      { name: "description", content: "What founders say about working with UF Studio." },
      { property: "og:title", content: "Testimonials — UF Studio" },
      { property: "og:description", content: "Stories from founders we've partnered with." },
    ],
  }),
  component: Testimonials,
});

const TESTIMONIALS = [
  { q: "UF Studio transformed our identity into a brand customers actually care about. Every detail was intentional.", n: "Amelia Rhodes", c: "CEO, Northwind Coffee" },
  { q: "The most strategic design partner we've worked with. They get business, not just visuals.", n: "Daniel Cho", c: "Founder, Obsidian Skincare" },
  { q: "We launched with confidence. The brand system gave our team a real backbone.", n: "Sofia Martín", c: "Head of Marketing, Kaizen" },
  { q: "Working with the studio felt like having a design co-founder. Sharp, fast, deeply considered.", n: "Marcus Bell", c: "Founder, Monolith Apparel" },
  { q: "Editorial level work. The whole identity reads like a magazine cover.", n: "Lina Park", c: "CMO, Halo Social" },
  { q: "We doubled our average order value in the first quarter after the rebrand.", n: "James Whitaker", c: "Founder, Vertex Tech" },
];

function Testimonials() {
  const [i, setI] = useState(0);
  const t = TESTIMONIALS[i];
  return (
    <>
      <Section eyebrow="Words from clients" title="Loved by founders.">
        <div className="relative max-w-3xl mx-auto">
          <div className="p-10 md:p-14 rounded-3xl bg-[color:var(--bg-card)] border border-white/5 relative text-center">
            <Quote className="mx-auto text-[color:var(--accent-orange)]/40" size={56} />
            <p className="mt-6 text-2xl md:text-3xl leading-relaxed font-medium">"{t.q}"</p>
            <div className="mt-8 flex flex-col items-center gap-2">
              <div className="h-14 w-14 rounded-full bg-gradient-accent grid place-items-center text-white font-bold text-xl">{t.n[0]}</div>
              <div className="font-semibold">{t.n}</div>
              <div className="text-sm text-[color:var(--text-secondary)]">{t.c}</div>
              <div className="flex gap-1 mt-2">
                {Array.from({length:5}).map((_,j)=>(<Star key={j} size={14} className="fill-[color:var(--accent-orange)] text-[color:var(--accent-orange)]" />))}
              </div>
            </div>
          </div>
          <div className="mt-8 flex items-center justify-center gap-4">
            <button onClick={()=>setI((i-1+TESTIMONIALS.length)%TESTIMONIALS.length)} className="h-12 w-12 rounded-full border border-white/10 grid place-items-center hover:bg-gradient-accent transition">
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, j) => (
                <button key={j} onClick={()=>setI(j)} className={`h-2 rounded-full transition-all ${j===i?"w-8 bg-gradient-accent":"w-2 bg-white/15"}`} />
              ))}
            </div>
            <button onClick={()=>setI((i+1)%TESTIMONIALS.length)} className="h-12 w-12 rounded-full border border-white/10 grid place-items-center hover:bg-gradient-accent transition">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-5">
          {TESTIMONIALS.slice(0,3).map((t, j) => (
            <div key={j} className="p-6 rounded-2xl bg-[color:var(--bg-card)] border border-white/5">
              <p className="text-sm">"{t.q}"</p>
              <div className="mt-4 text-sm font-semibold">{t.n}</div>
              <div className="text-xs text-[color:var(--text-secondary)]">{t.c}</div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
