import { createFileRoute, Link } from "@tanstack/react-router";
import { Section } from "@/components/Section";
import { ShoppingBag, Star } from "lucide-react";
import w1 from "@/assets/work-1.jpg";
import w2 from "@/assets/work-2.jpg";
import w3 from "@/assets/work-3.jpg";
import w4 from "@/assets/work-4.jpg";
import w5 from "@/assets/work-5.jpg";
import w6 from "@/assets/work-6.jpg";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop — UF Studio Digital Products" },
      { name: "description", content: "Premium digital templates, mockups, and brand resources." },
      { property: "og:title", content: "Shop — UF Studio" },
      { property: "og:description", content: "Brand templates, mockups, and design resources." },
    ],
  }),
  component: Shop,
});

const PRODUCTS = [
  { img: w4, t: "Logo Template Pack", d: "60 editable wordmark and monogram templates.", p: 49 },
  {
    img: w3,
    t: "Brand Guideline Template",
    d: "Indesign + Figma deliverables for studios.",
    p: 39,
  },
  { img: w5, t: "Social Media Kit", d: "150 motion-ready content templates.", p: 29 },
  { img: w2, t: "Mockup Bundle", d: "Premium packaging mockups in dark studio.", p: 59 },
  { img: w1, t: "Business Card Pack", d: "Editorial cards in 12 systems.", p: 19 },
  { img: w6, t: "Brand Strategy PDF", d: "Founders' guide to brand positioning.", p: 24 },
];

function Shop() {
  return (
    <Section
      eyebrow="Shop"
      title="Studio-crafted digital products."
      subtitle="Templates, mockups and brand resources used inside UF Studio — now available to you."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PRODUCTS.map((p, i) => (
          <article
            key={i}
            className="group rounded-3xl overflow-hidden bg-[color:var(--bg-card)] border border-white/5 hover:border-[color:var(--accent-orange)]/40 transition"
          >
            <div className="aspect-[4/3] overflow-hidden relative">
              <img
                src={p.img}
                alt={p.t}
                width={800}
                height={600}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute top-3 left-3 px-3 py-1 text-xs rounded-full bg-black/60 backdrop-blur uppercase tracking-widest">
                Digital
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-1 mb-2">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    size={12}
                    className="fill-[color:var(--accent-orange)] text-[color:var(--accent-orange)]"
                  />
                ))}
                <span className="ml-2 text-xs text-[color:var(--text-secondary)]">(128)</span>
              </div>
              <h3 className="text-lg font-bold">{p.t}</h3>
              <p className="mt-1 text-sm text-[color:var(--text-secondary)]">{p.d}</p>
              <div className="mt-5 flex items-center justify-between">
                <span className="text-2xl font-bold text-gradient">${p.p}</span>
                <Link
                  to="/checkout"
                  search={{ item: p.t, price: p.p }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-accent text-white text-sm font-semibold hover:scale-105 transition"
                >
                  <ShoppingBag size={14} /> Inquire
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
