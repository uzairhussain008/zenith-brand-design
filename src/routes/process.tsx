import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/Section";
import { Search, Lightbulb, Sparkles, PenTool, Wand2, Send } from "lucide-react";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Process — UF Studio" },
      { name: "description", content: "Our six-step studio process for building premium brand identities." },
      { property: "og:title", content: "Process — UF Studio" },
      { property: "og:description", content: "A clear, six-step branding workflow." },
    ],
  }),
  component: Process,
});

const STEPS = [
  { Icon: Search, t: "Discovery", d: "Deep audits, founder interviews, competitive mapping." },
  { Icon: Lightbulb, t: "Strategy", d: "Brand positioning, voice, and a clear narrative backbone." },
  { Icon: Sparkles, t: "Identity", d: "Logo system, palette, type and core visual elements." },
  { Icon: PenTool, t: "Design", d: "Full system rollout across touchpoints and templates." },
  { Icon: Wand2, t: "Refinement", d: "Pixel-level polish, accessibility, and edge-case design." },
  { Icon: Send, t: "Delivery", d: "Final assets, guidelines, and launch support." },
];

function Process() {
  return (
    <Section eyebrow="The Process" title="A studio rhythm built for clarity." subtitle="Six connected phases. Each one with clear deliverables and feedback rounds.">
      <div className="relative">
        <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[color:var(--accent-orange)] to-transparent hidden md:block" />
        <div className="space-y-6">
          {STEPS.map((s, i) => (
            <div key={s.t} className="relative md:pl-24 p-7 rounded-3xl bg-[color:var(--bg-card)] border border-white/5 hover:border-[color:var(--accent-orange)]/40 transition">
              <div className="md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2 h-16 w-16 rounded-2xl bg-gradient-accent grid place-items-center text-white glow mb-4 md:mb-0">
                <s.Icon size={24} />
              </div>
              <div className="flex items-baseline gap-3 text-xs uppercase tracking-widest text-[color:var(--accent-orange)]">Step 0{i+1}</div>
              <h3 className="mt-1 text-3xl font-bold">{s.t}</h3>
              <p className="mt-2 text-[color:var(--text-secondary)] max-w-2xl">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
