import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Palette, Layers, Package, Share2, Globe, Compass } from "lucide-react";
import { Section } from "@/components/Section";
import { Marquee } from "@/components/Marquee";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — UF Studio" },
      { name: "description", content: "Logo design, brand identity, packaging, social design, websites and creative direction." },
      { property: "og:title", content: "Services — UF Studio" },
      { property: "og:description", content: "Premium branding services for ambitious founders." },
    ],
  }),
  component: Services,
});

const SERVICES = [
  { Icon: Palette, t: "Logo Design", d: "Crafted marks built to scale across every surface.", steps: ["Discovery", "Exploration", "Refinement"] },
  { Icon: Layers, t: "Brand Identity", d: "Complete identity systems with rigorous guidelines.", steps: ["Strategy", "System Design", "Guidelines"] },
  { Icon: Package, t: "Packaging Design", d: "Shelf-presence and structural design that sells.", steps: ["Concept", "Dieline", "Production"] },
  { Icon: Share2, t: "Social Media Design", d: "Scalable templates and motion systems.", steps: ["Audit", "System", "Templates"] },
  { Icon: Globe, t: "Website Design", d: "Editorial sites that convert visitors to customers.", steps: ["UX", "UI", "Build-ready"] },
  { Icon: Compass, t: "Creative Direction", d: "Ongoing art direction across all brand channels.", steps: ["Quarterly", "Campaign", "Asset Library"] },
];

function Services() {
  return (
    <>
      <Section eyebrow="Services" title="Premium branding, end-to-end." subtitle="Six refined service lines — each one a complete engagement built around your brand goals.">
        <div className="space-y-5">
          {SERVICES.map((s, i) => (
            <div key={s.t} className="group grid md:grid-cols-[80px_1fr_auto] gap-6 items-center p-8 rounded-3xl bg-[color:var(--bg-card)] border border-white/5 hover:border-[color:var(--accent-orange)]/40 transition">
              <div className="h-16 w-16 rounded-2xl bg-gradient-accent grid place-items-center text-white glow">
                <s.Icon size={28} />
              </div>
              <div>
                <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-[color:var(--text-secondary)]">
                  <span>Service 0{i+1}</span>
                </div>
                <h3 className="mt-1 text-3xl font-bold">{s.t}</h3>
                <p className="mt-2 text-[color:var(--text-secondary)] max-w-xl">{s.d}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {s.steps.map(st => (
                    <span key={st} className="px-3 py-1.5 text-xs rounded-full border border-white/10 text-[color:var(--text-secondary)]">{st}</span>
                  ))}
                </div>
              </div>
              <Link to="/contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 hover:bg-gradient-accent transition">
                Enquire <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </Section>
      <Marquee accent items={["Creative Branding","Premium Identity Design","Modern Creative Studio","Strategic Brand Design"]} />
    </>
  );
}
