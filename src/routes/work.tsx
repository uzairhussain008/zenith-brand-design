import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/Section";
import w1 from "@/assets/img1.jpg";
import w2 from "@/assets/img2.jpg";
import w3 from "@/assets/img3.jpg";
import w4 from "@/assets/img4.jpg";
import w5 from "@/assets/img5.jpg";
import w6 from "@/assets/img6.jpg";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — UF Studio Portfolio" },
      {
        name: "description",
        content: "Selected branding case studies and editorial identity systems by UF Studio.",
      },
      { property: "og:title", content: "Work — UF Studio Portfolio" },
      {
        property: "og:description",
        content: "Editorial portfolio of premium brand identity work.",
      },
    ],
  }),
  component: Work,
});

const PROJECTS = [
  {
    img: w1,
    title: "Northwind Coffee Co.",
    cat: "Brand Identity",
    desc: "A bold rebrand for a third-wave roastery scaling nationally.",
    span: "md:col-span-2",
  },
  {
    img: w2,
    title: "Obsidian Skincare",
    cat: "Packaging Design",
    desc: "Premium black-foil packaging system for a luxury skincare line.",
  },
  {
    img: w3,
    title: "Kaizen Studio",
    cat: "Editorial System",
    desc: "Editorial guidelines and quarterly print art direction.",
  },
  {
    img: w4,
    title: "Monolith Apparel",
    cat: "Logo Suite",
    desc: "Modular wordmark and product line marks.",
    span: "md:col-span-2",
  },
  {
    img: w5,
    title: "Halo Social",
    cat: "Social Design",
    desc: "Content templates and motion system.",
  },
  {
    img: w6,
    title: "Vertex Tech",
    cat: "Website Design",
    desc: "Editorial product website for a B2B SaaS.",
  },
];

function Work() {
  return (
    <>
      <Section
        eyebrow="Portfolio"
        title="Editorial brand work."
        subtitle="Selected case studies from the studio. Each project is a complete identity system built end-to-end."
      >
        <div className="grid md:grid-cols-3 gap-6 auto-rows-[minmax(0,1fr)]">
          {PROJECTS.map((p, i) => (
            <article
              key={i}
              className={`group relative overflow-hidden rounded-3xl bg-[color:var(--bg-card)] border border-white/5 hover:border-[color:var(--accent-orange)]/40 transition ${p.span || ""}`}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-1000"
                />
              </div>
              <div className="p-7">
                <div className="text-xl uppercase tracking-widest text-[color:var(--accent-orange)]">
                  {p.cat}
                </div>
                <Link
                  to="/contact"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold hover:text-[color:var(--accent-orange)] transition"
                >
                  View Case Study <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
