import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Star, Quote, Plus } from "lucide-react";
import heroVisual from "@/assets/hero-visual.jpg";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import { Marquee } from "@/components/Marquee";
import { Section } from "@/components/Section";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "UF Studio — Building Brands That Leave an Impact" },
      { name: "description", content: "Premium logo design and brand identity studio. Editorial brand systems for ambitious founders." },
      { property: "og:title", content: "UF Studio — Building Brands That Leave an Impact" },
      { property: "og:description", content: "Premium brand identity & logo design studio." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="absolute inset-0 radial-glow pointer-events-none" />
        <div className="absolute top-40 -left-32 w-96 h-96 bg-[color:var(--accent-orange)] opacity-20 blur-[120px] rounded-full animate-pulse-glow" />
        <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-[color:var(--accent-red)] opacity-15 blur-[140px] rounded-full" />

        <div className="container-prem relative">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <div className="animate-fade-up">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs uppercase tracking-[0.2em] text-[color:var(--text-secondary)] mb-8">
                <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent-orange)] animate-pulse" />
                Independent Branding Studio — est. 2018
              </span>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold leading-[0.95] tracking-tight">
                Building <span className="text-gradient italic">Brands</span> That<br />Leave an Impact.
              </h1>
              <p className="mt-7 max-w-xl text-lg text-[color:var(--text-secondary)] leading-relaxed">
                We craft bold logos, premium identity systems, and editorial brand experiences for founders who refuse to blend in.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link to="/work" className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gradient-accent text-white font-semibold glow hover:scale-[1.02] transition">
                  View Work <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
                </Link>
                <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-white/15 hover:border-[color:var(--accent-orange)] hover:text-[color:var(--accent-orange)] transition">
                  Book a Call
                </Link>
              </div>

              <div className="mt-14 grid grid-cols-3 gap-6 max-w-md">
                {[["120+","Brands"],["8 yrs","Crafting"],["32","Awards"]].map(([n, l]) => (
                  <div key={l}>
                    <div className="text-3xl font-bold text-gradient">{n}</div>
                    <div className="text-xs uppercase tracking-widest text-[color:var(--text-secondary)] mt-1">{l}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <div className="relative aspect-square rounded-[2rem] overflow-hidden glow">
                <img src={heroVisual} alt="Abstract premium 3D branding sculpture" className="w-full h-full object-cover" width={1024} height={1024} />
                <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--bg-main)]/70 via-transparent to-transparent" />
              </div>

              <div className="absolute -top-6 -left-6 glass rounded-2xl p-4 flex items-center gap-3 animate-float">
                <div className="h-10 w-10 rounded-full bg-gradient-accent grid place-items-center">
                  <Sparkles size={18} className="text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold">Brand Identity</div>
                  <div className="text-xs text-[color:var(--text-secondary)]">Studio Process</div>
                </div>
              </div>

              <div className="absolute -bottom-8 -right-4 glass rounded-2xl p-4 animate-float" style={{ animationDelay: "1.5s" }}>
                <div className="flex items-center gap-1 mb-1">
                  {Array.from({length:5}).map((_,i)=>(<Star key={i} size={14} className="fill-[color:var(--accent-orange)] text-[color:var(--accent-orange)]" />))}
                </div>
                <div className="text-xs text-[color:var(--text-secondary)]">Trusted by 120+ founders</div>
              </div>

              <div className="absolute top-1/3 -right-10 hidden md:block w-24 h-24 rounded-2xl bg-gradient-accent opacity-80 blur-2xl animate-pulse-glow" />
            </div>
          </div>
        </div>
      </section>

      {/* CLIENT MARQUEE */}
      <div className="border-y border-white/5 bg-[color:var(--bg-secondary)]/50 py-10">
        <div className="container-prem">
          <p className="text-center text-xs uppercase tracking-[0.3em] text-[color:var(--text-secondary)] mb-6">Trusted by visionary teams worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-x-14 gap-y-6 opacity-60">
            {["NORTHWIND","LUNARA","OBSIDIAN","KAIZEN","VERTEX","HALO","MONOLITH","FORGE"].map(b => (
              <span key={b} className="text-xl md:text-2xl font-bold tracking-[0.15em] text-[color:var(--text-primary)]">{b}</span>
            ))}
          </div>
        </div>
      </div>

      {/* CREATIVE STRIP */}
      <Marquee accent items={["Creative Branding","Premium Identity Design","Modern Creative Studio","Strategic Brand Design"]} />

      {/* FEATURED WORK */}
      <Section eyebrow="Selected Work" title="Identity systems we're proud of." subtitle="A handpicked selection of recent projects spanning packaging, digital, and editorial branding.">
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { img: work1, title: "Northwind Coffee Co.", cat: "Brand Identity" },
            { img: work2, title: "Obsidian Skincare", cat: "Packaging" },
            { img: work3, title: "Kaizen Studio", cat: "Editorial System" },
            { img: work4, title: "Monolith Apparel", cat: "Logo Suite" },
          ].map((w, i) => (
            <Link key={i} to="/work" className="group relative overflow-hidden rounded-3xl bg-[color:var(--bg-card)] border border-white/5 hover:border-[color:var(--accent-orange)]/40 transition">
              <div className="overflow-hidden aspect-[4/3]">
                <img src={w.img} alt={w.title} loading="lazy" width={800} height={600} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
              </div>
              <div className="p-6 flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase tracking-widest text-[color:var(--accent-orange)]">{w.cat}</div>
                  <h3 className="text-xl font-bold mt-1">{w.title}</h3>
                </div>
                <div className="h-11 w-11 rounded-full border border-white/10 grid place-items-center group-hover:bg-gradient-accent group-hover:border-transparent transition">
                  <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link to="/work" className="inline-flex items-center gap-2 text-[color:var(--accent-orange)] font-semibold hover:gap-3 transition-all">
            View all case studies <ArrowRight size={16} />
          </Link>
        </div>
      </Section>

      {/* SERVICES PREVIEW */}
      <Section eyebrow="What we do" title="Services built for bold founders." className="bg-[color:var(--bg-secondary)]/40">
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { t: "Logo Design", d: "Crafted marks with timeless presence." },
            { t: "Brand Identity", d: "Complete identity systems and guidelines." },
            { t: "Packaging Design", d: "Shelf-stopping packaging with story." },
            { t: "Social Media Design", d: "Cohesive content systems that scale." },
            { t: "Website Design", d: "Editorial sites that convert." },
            { t: "Creative Direction", d: "Strategic art direction across channels." },
          ].map((s, i) => (
            <div key={i} className="group p-7 rounded-2xl bg-[color:var(--bg-card)] border border-white/5 hover:border-[color:var(--accent-orange)]/40 transition relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-gradient-accent opacity-0 group-hover:opacity-20 blur-3xl transition" />
              <div className="text-5xl font-bold text-[color:var(--accent-orange)]/30 group-hover:text-[color:var(--accent-orange)] transition">0{i+1}</div>
              <h3 className="mt-4 text-xl font-bold">{s.t}</h3>
              <p className="mt-2 text-sm text-[color:var(--text-secondary)]">{s.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Marquee items={["Logo Design","Brand Identity","Packaging","Editorial","Art Direction","Social Systems"]} />

      {/* PROCESS PREVIEW */}
      <Section eyebrow="Our Process" title="A clear, six-step studio rhythm.">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {["Discovery","Strategy","Identity","Design","Refinement","Delivery"].map((p,i)=>(
            <div key={p} className="p-6 rounded-2xl border border-white/5 bg-[color:var(--bg-card)]">
              <div className="text-xs uppercase tracking-widest text-[color:var(--accent-orange)]">Step 0{i+1}</div>
              <div className="mt-2 text-2xl font-bold">{p}</div>
              <p className="mt-2 text-sm text-[color:var(--text-secondary)]">Premium workflow with editorial polish at every stage.</p>
            </div>
          ))}
        </div>
        <div className="mt-10"><Link to="/process" className="text-[color:var(--accent-orange)] font-semibold">Explore the process →</Link></div>
      </Section>

      {/* TESTIMONIAL PREVIEW */}
      <Section eyebrow="Words from clients" title="Loved by visionary founders." className="bg-[color:var(--bg-secondary)]/40">
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { q: "UF Studio transformed our identity into a brand customers actually care about. Every detail was intentional.", n: "Amelia Rhodes", c: "CEO, Northwind Coffee" },
            { q: "The most strategic design partner we've worked with. They get business, not just visuals.", n: "Daniel Cho", c: "Founder, Obsidian" },
          ].map((t, i) => (
            <div key={i} className="p-8 rounded-3xl bg-[color:var(--bg-card)] border border-white/5 relative">
              <Quote className="absolute top-6 right-6 text-[color:var(--accent-orange)]/30" size={48} />
              <p className="text-lg leading-relaxed">{t.q}</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-gradient-accent grid place-items-center font-bold">{t.n[0]}</div>
                <div>
                  <div className="font-semibold">{t.n}</div>
                  <div className="text-xs text-[color:var(--text-secondary)]">{t.c}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ PREVIEW */}
      <Section eyebrow="Common Questions" title="You ask, we answer.">
        <div className="max-w-3xl divide-y divide-white/5 border-y border-white/5">
          {[
            ["What services do you offer?", "Logo design, brand identity systems, packaging, websites, and creative direction."],
            ["How long does a project take?", "Most identity projects run 4–8 weeks depending on scope and revisions."],
            ["Do you offer revisions?", "Yes — every package includes structured revision rounds at each milestone."],
          ].map(([q,a])=>(
            <details key={q} className="group py-6">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <span className="text-lg font-semibold">{q}</span>
                <Plus className="group-open:rotate-45 transition text-[color:var(--accent-orange)]" />
              </summary>
              <p className="mt-3 text-[color:var(--text-secondary)]">{a}</p>
            </details>
          ))}
        </div>
        <div className="mt-8"><Link to="/faq" className="text-[color:var(--accent-orange)] font-semibold">All FAQs →</Link></div>
      </Section>

      {/* CTA */}
      <section className="py-24">
        <div className="container-prem">
          <div className="relative rounded-[2rem] overflow-hidden p-12 md:p-20 text-center bg-gradient-accent">
            <div className="absolute inset-0 opacity-30 mix-blend-overlay" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, white, transparent 40%), radial-gradient(circle at 80% 80%, white, transparent 40%)" }} />
            <h2 className="relative text-4xl md:text-6xl font-bold text-white max-w-3xl mx-auto leading-tight">Have a brand worth building? Let's make it unforgettable.</h2>
            <Link to="/contact" className="relative mt-10 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-black text-white font-semibold hover:scale-105 transition">
              Start a Project <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
