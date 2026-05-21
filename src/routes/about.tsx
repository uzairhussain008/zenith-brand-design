import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/Section";
import designer from "@/assets/designer.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — UF Studio" },
      { name: "description", content: "Meet the studio behind premium brand identities." },
      { property: "og:title", content: "About — UF Studio" },
      { property: "og:description", content: "Independent branding studio crafted with intention." },
      { property: "og:image", content: designer },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <Section eyebrow="About the Studio" title="Independent. Intentional. Editorial.">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-[2rem] overflow-hidden glow">
              <img src={designer} alt="Founder of UF Studio" width={800} height={1000} loading="lazy" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 glass rounded-2xl p-5">
              <div className="text-3xl font-bold text-gradient">8+ yrs</div>
              <div className="text-xs uppercase tracking-widest text-[color:var(--text-secondary)]">Crafting Brands</div>
            </div>
          </div>
          <div>
            <p className="text-lg text-[color:var(--text-secondary)] leading-relaxed">
              UF Studio is a small, senior-led branding practice. We partner with founders and creative teams to design identities with editorial rigor, narrative depth, and a clear strategic backbone.
            </p>
            <p className="mt-5 text-lg text-[color:var(--text-secondary)] leading-relaxed">
              Every engagement is led personally — no junior handoffs, no template thinking. Just bold, deliberate brand design.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-6">
              {[["120+","Brands shipped"],["32","Awards earned"],["12","Countries served"]].map(([n,l])=>(
                <div key={l}>
                  <div className="text-3xl font-bold text-gradient">{n}</div>
                  <div className="text-xs uppercase tracking-widest text-[color:var(--text-secondary)] mt-1">{l}</div>
                </div>
              ))}
            </div>
            <blockquote className="mt-10 p-6 rounded-2xl bg-[color:var(--bg-card)] border-l-4 border-[color:var(--accent-orange)] italic">
              "We build brands the way architects design buildings — with structure, intention, and a point of view."
            </blockquote>
          </div>
        </div>
      </Section>

      <Section eyebrow="Experience" title="Selected highlights." className="bg-[color:var(--bg-secondary)]/40">
        <div className="grid md:grid-cols-2 gap-6">
          {[
            ["2024","Lead identity for Northwind's national expansion."],
            ["2023","AIGA Award — Best Packaging System (Obsidian)."],
            ["2022","Joined Brand New 'Studios to Watch'."],
            ["2020","Studio founded — first 20 clients shipped."],
          ].map(([y,t])=>(
            <div key={y} className="p-7 rounded-2xl bg-[color:var(--bg-card)] border border-white/5">
              <div className="text-[color:var(--accent-orange)] font-bold text-sm">{y}</div>
              <p className="mt-2 text-lg">{t}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
