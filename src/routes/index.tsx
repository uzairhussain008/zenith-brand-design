import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Sparkles,
  Star,
  Quote,
  Plus,
  Search,
  Lightbulb,
  PenTool,
  Wand2,
  Send,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
import heroVisual from "@/assets/hero-visual.jpg";
import designer from "@/assets/designer.jpg";
import work1 from "@/assets/img1.jpg";
import work2 from "@/assets/img2.jpg";
import work3 from "@/assets/img3.jpg";
import work4 from "@/assets/img4.jpg";
import { Marquee } from "@/components/Marquee";
import { Section } from "@/components/Section";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "UF Studio — Building Brands That Leave an Impact" },
      {
        name: "description",
        content:
          "Premium logo design and brand identity studio. Editorial brand systems for ambitious founders.",
      },
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
                Independent Branding Studio — est. 2022
              </span>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold leading-[0.95] tracking-tight">
                Building <span className="text-gradient italic">Brands</span> That
                <br />
                Leave an Impact.
              </h1>
              <p className="mt-7 max-w-xl text-lg text-[color:var(--text-secondary)] leading-relaxed">
                We craft bold logos, premium identity systems, and editorial brand experiences for
                founders who refuse to blend in.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  to="/work"
                  className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gradient-accent text-white font-semibold glow hover:scale-[1.02] transition"
                >
                  View Work{" "}
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-white/15 hover:border-[color:var(--accent-orange)] hover:text-[color:var(--accent-orange)] transition"
                >
                  Book a Call
                </Link>
              </div>

              <div className="mt-14 grid grid-cols-3 gap-6 max-w-md">
                {[
                  ["120+", "Brands"],
                  ["4 yrs", "Crafting"],
                  ["32", "Awards"],
                ].map(([n, l]) => (
                  <div key={l}>
                    <div className="text-3xl font-bold text-gradient">{n}</div>
                    <div className="text-xs uppercase tracking-widest text-[color:var(--text-secondary)] mt-1">
                      {l}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <div className="relative aspect-square rounded-[2rem] overflow-hidden glow">
                <img
                  src={heroVisual}
                  alt="Abstract premium 3D branding sculpture"
                  className="w-full h-full object-cover"
                  width={1024}
                  height={1024}
                />
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

              <div
                className="absolute -bottom-8 -right-4 glass rounded-2xl p-4 animate-float"
                style={{ animationDelay: "1.5s" }}
              >
                <div className="flex items-center gap-1 mb-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="fill-[color:var(--accent-orange)] text-[color:var(--accent-orange)]"
                    />
                  ))}
                </div>
                <div className="text-xs text-[color:var(--text-secondary)]">
                  Trusted by 120+ founders
                </div>
              </div>

              <div className="absolute top-1/3 -right-10 hidden md:block w-24 h-24 rounded-2xl bg-gradient-accent opacity-80 blur-2xl animate-pulse-glow" />
            </div>
          </div>
        </div>
      </section>

      {/* CLIENT MARQUEE */}
      <div className="border-y border-white/5 bg-[color:var(--bg-secondary)]/50 py-10">
        <div className="container-prem">
          <p className="text-center text-xs uppercase tracking-[0.3em] text-[color:var(--text-secondary)] mb-6">
            Trusted by visionary teams worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-14 gap-y-6 opacity-60">
            {[
              "NORTHWIND",
              "LUNARA",
              "OBSIDIAN",
              "KAIZEN",
              "VERTEX",
              "HALO",
              "MONOLITH",
              "FORGE",
            ].map((b) => (
              <span
                key={b}
                className="text-xl md:text-2xl font-bold tracking-[0.15em] text-[color:var(--text-primary)]"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* CREATIVE STRIP — between Hero & Featured Work */}
      <div className="relative -my-4 z-10">
        <Marquee
          accent
          items={[
            "Creative Branding",
            "Premium Identity Design",
            "Modern Creative Studio",
            "Strategic Brand Design",
            "Luxury Brand Experience",
          ]}
        />
      </div>

      {/* FEATURED WORK */}
      <Section
        eyebrow="Selected Work"
        title="Identity systems we're proud of."
        subtitle="A handpicked selection of recent projects spanning packaging, digital, and editorial branding."
      >
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { img: work1, title: "Northwind Coffee Co.", cat: "Brand Identity" },
            { img: work2, title: "Obsidian Skincare", cat: "Packaging" },
            { img: work3, title: "Kaizen Studio", cat: "Editorial System" },
            { img: work4, title: "Monolith Apparel", cat: "Logo Suite" },
          ].map((w, i) => (
            <Link
              key={i}
              to="/work"
              className="group relative overflow-hidden rounded-3xl bg-[color:var(--bg-card)] border border-white/5 hover:border-[color:var(--accent-orange)]/40 transition"
            >
              <div className="overflow-hidden aspect-[4/3]">
                <img
                  src={w.img}
                  alt={w.title}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />
              </div>
              <div className="p-6 flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase tracking-widest text-[color:var(--accent-orange)]">
                    {w.cat}
                  </div>
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
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-[color:var(--accent-orange)] font-semibold hover:gap-3 transition-all"
          >
            View all case studies <ArrowRight size={16} />
          </Link>
        </div>
      </Section>

      {/* SERVICES PREVIEW */}
      <Section
        eyebrow="What we do"
        title="Services built for bold founders."
        className="bg-[color:var(--bg-secondary)]/40"
      >
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { t: "Logo Design", d: "Crafted marks with timeless presence." },
            { t: "Brand Identity", d: "Complete identity systems and guidelines." },
            { t: "Packaging Design", d: "Shelf-stopping packaging with story." },
            { t: "Social Media Design", d: "Cohesive content systems that scale." },
            { t: "Website Design", d: "Editorial sites that convert." },
            { t: "Creative Direction", d: "Strategic art direction across channels." },
          ].map((s, i) => (
            <div
              key={i}
              className="group p-7 rounded-2xl bg-[color:var(--bg-card)] border border-white/5 hover:border-[color:var(--accent-orange)]/40 transition relative overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-gradient-accent opacity-0 group-hover:opacity-20 blur-3xl transition" />
              <div className="text-5xl font-bold text-[color:var(--accent-orange)]/30 group-hover:text-[color:var(--accent-orange)] transition">
                0{i + 1}
              </div>
              <h3 className="mt-4 text-xl font-bold">{s.t}</h3>
              <p className="mt-2 text-sm text-[color:var(--text-secondary)]">{s.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CREATIVE STRIP — between Services & About */}
      <div className="relative -my-2 z-10">
        <Marquee
          items={[
            "Logo Design",
            "Brand Identity",
            "Packaging",
            "Editorial",
            "Art Direction",
            "Social Systems",
            "Visual Identity Systems",
          ]}
        />
      </div>

      {/* ABOUT (anchor section) */}
      <section id="about" className="scroll-mt-24">
        <Section eyebrow="About the Studio" title="Independent. Intentional. Editorial.">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="rounded-[2rem] overflow-hidden glow">
                <img
                  src={designer}
                  alt="Founder of UF Studio"
                  width={800}
                  height={1000}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 glass rounded-2xl p-5">
                <div className="text-3xl font-bold text-gradient">4+ yrs</div>
                <div className="text-xs uppercase tracking-widest text-[color:var(--text-secondary)]">
                  Crafting Brands
                </div>
              </div>
              <div className="absolute -top-6 -left-6 w-28 h-28 rounded-2xl bg-gradient-accent opacity-60 blur-3xl animate-pulse-glow" />
            </div>
            <div>
              <p className="text-lg text-[color:var(--text-secondary)] leading-relaxed">
                UF Studio is a small, senior-led branding practice. We partner with founders and
                creative teams to design identities with editorial rigor, narrative depth, and a
                clear strategic backbone.
              </p>
              <p className="mt-5 text-lg text-[color:var(--text-secondary)] leading-relaxed">
                Every engagement is led personally — no junior handoffs, no template thinking. Just
                bold, deliberate brand design.
              </p>
              <div className="mt-10 grid grid-cols-3 gap-6">
                {[
                  ["120+", "Brands shipped"],
                  ["32", "Awards earned"],
                  ["12", "Countries served"],
                ].map(([n, l]) => (
                  <div key={l}>
                    <div className="text-3xl font-bold text-gradient">{n}</div>
                    <div className="text-xs uppercase tracking-widest text-[color:var(--text-secondary)] mt-1">
                      {l}
                    </div>
                  </div>
                ))}
              </div>
              <blockquote className="mt-10 p-6 rounded-2xl bg-[color:var(--bg-card)] border-l-4 border-[color:var(--accent-orange)] italic">
                "We build brands the way architects design buildings — with structure, intention,
                and a point of view."
              </blockquote>
            </div>
          </div>
        </Section>
      </section>

      {/* CREATIVE STRIP — above Process */}
      <div className="relative -my-2 z-10">
        <Marquee
          accent
          reverse
          items={[
            "Creative Direction",
            "Visual Identity Systems",
            "Luxury Brand Experience",
            "Premium Identity Design",
          ]}
        />
      </div>

      {/* PROCESS (anchor section) */}
      <section id="process" className="scroll-mt-24">
        <Section
          eyebrow="The Process"
          title="A clear, six-step studio rhythm."
          subtitle="Six connected phases. Each one with deliverables and feedback rounds."
          className="bg-[color:var(--bg-secondary)]/40"
        >
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[color:var(--accent-orange)] to-transparent hidden md:block" />
            <div className="space-y-6">
              {[
                {
                  Icon: Search,
                  t: "Discovery",
                  d: "Deep audits, founder interviews, competitive mapping.",
                },
                {
                  Icon: Lightbulb,
                  t: "Strategy",
                  d: "Brand positioning, voice, and narrative backbone.",
                },
                {
                  Icon: Sparkles,
                  t: "Identity",
                  d: "Logo system, palette, type and core visual elements.",
                },
                {
                  Icon: PenTool,
                  t: "Design",
                  d: "Full system rollout across touchpoints and templates.",
                },
                {
                  Icon: Wand2,
                  t: "Refinement",
                  d: "Pixel-level polish, accessibility, and edge-case design.",
                },
                { Icon: Send, t: "Delivery", d: "Final assets, guidelines, and launch support." },
              ].map((s, i) => (
                <div
                  key={s.t}
                  className="relative md:pl-24 p-7 rounded-3xl bg-[color:var(--bg-card)] border border-white/5 hover:border-[color:var(--accent-orange)]/40 transition"
                >
                  <div className="md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2 h-16 w-16 rounded-2xl bg-gradient-accent grid place-items-center text-white glow mb-4 md:mb-0">
                    <s.Icon size={24} />
                  </div>
                  <div className="text-xs uppercase tracking-widest text-[color:var(--accent-orange)]">
                    Step 0{i + 1}
                  </div>
                  <h3 className="mt-1 text-2xl md:text-3xl font-bold">{s.t}</h3>
                  <p className="mt-2 text-[color:var(--text-secondary)] max-w-2xl">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>
      </section>

      {/* CREATIVE STRIP — above Shop CTA */}
      <div className="relative -my-2 z-10">
        <Marquee
          items={[
            "Strategic Brand Design",
            "Modern Creative Studio",
            "Creative Branding",
            "Premium Identity Design",
          ]}
        />
      </div>

      {/* SHOP CTA */}
      <Section
        eyebrow="Studio Shop"
        title="Premium templates & resources."
        subtitle="Brand templates, mockups, and editorial systems used inside UF Studio."
      >
        <div className="grid sm:grid-cols-3 gap-5">
          {[
            { img: work4, t: "Logo Template Pack", p: 49 },
            { img: work3, t: "Brand Guideline Kit", p: 39 },
            { img: work2, t: "Mockup Bundle", p: 59 },
          ].map((p) => (
            <Link
              key={p.t}
              to="/shop"
              className="group rounded-3xl overflow-hidden bg-[color:var(--bg-card)] border border-white/5 hover:border-[color:var(--accent-orange)]/40 transition"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.t}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />
              </div>
              <div className="p-5 flex items-center justify-between">
                <div className="font-semibold">{p.t}</div>
                <span className="text-xl font-bold text-gradient">${p.p}</span>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-10">
          <Link to="/shop" className="text-[color:var(--accent-orange)] font-semibold">
            Visit the shop →
          </Link>
        </div>
      </Section>

      {/* TESTIMONIALS (anchor section) */}
      <section id="testimonials" className="scroll-mt-24">
        <TestimonialsBlock />
      </section>

      {/* FAQ (anchor section) */}
      <section id="faq" className="scroll-mt-24">
        <Section eyebrow="Common Questions" title="You ask, we answer.">
          <div className="max-w-3xl divide-y divide-white/5 border-y border-white/5">
            {[
              [
                "What services do you offer?",
                "Logo design, brand identity systems, packaging, websites, and creative direction.",
              ],
              [
                "How long does a project take?",
                "Most identity projects run 4–8 weeks depending on scope and revisions.",
              ],
              [
                "What files will I receive?",
                "Native source files, exports in all required formats, and a complete PDF brand guideline.",
              ],
              [
                "Do you offer revisions?",
                "Yes — every package includes structured revision rounds at each milestone.",
              ],
              [
                "How do payments work?",
                "50% to kick off, 50% on final delivery. Stripe, PayPal, or wire.",
              ],
              [
                "How do we start?",
                "Use the contact form or book a discovery call. We'll respond within 24 hours.",
              ],
            ].map(([q, a]) => (
              <details key={q} className="group py-6">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="text-lg font-semibold">{q}</span>
                  <Plus className="group-open:rotate-45 transition text-[color:var(--accent-orange)]" />
                </summary>
                <p className="mt-3 text-[color:var(--text-secondary)]">{a}</p>
              </details>
            ))}
          </div>
        </Section>
      </section>

      {/* CREATIVE STRIP — near footer CTA */}
      <div className="relative -my-2 z-10">
        <Marquee
          accent
          items={[
            "Let's build something iconic",
            "Creative Branding",
            "Premium Identity Design",
            "Luxury Brand Experience",
          ]}
        />
      </div>

      {/* CTA */}
      <section className="py-24">
        <div className="container-prem">
          <div className="relative rounded-[2rem] overflow-hidden p-12 md:p-20 text-center bg-gradient-accent">
            <div
              className="absolute inset-0 opacity-30 mix-blend-overlay"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 20%, white, transparent 40%), radial-gradient(circle at 80% 80%, white, transparent 40%)",
              }}
            />
            <h2 className="relative text-4xl md:text-6xl font-bold text-white max-w-3xl mx-auto leading-tight">
              Have a brand worth building? Let's make it unforgettable.
            </h2>
            <Link
              to="/contact"
              className="relative mt-10 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-black text-white font-semibold hover:scale-105 transition"
            >
              Start a Project <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

const TESTIMONIALS = [
  {
    q: "UF Studio transformed our identity into a brand customers actually care about. Every detail was intentional.",
    n: "Amelia Rhodes",
    c: "CEO, Northwind Coffee",
  },
  {
    q: "The most strategic design partner we've worked with. They get business, not just visuals.",
    n: "Daniel Cho",
    c: "Founder, Obsidian Skincare",
  },
  {
    q: "We launched with confidence. The brand system gave our team a real backbone.",
    n: "Sofia Martín",
    c: "Head of Marketing, Kaizen",
  },
  {
    q: "Working with the studio felt like having a design co-founder. Sharp, fast, deeply considered.",
    n: "Marcus Bell",
    c: "Founder, Monolith Apparel",
  },
];

function TestimonialsBlock() {
  const [i, setI] = useState(0);
  const t = TESTIMONIALS[i];
  return (
    <Section
      eyebrow="Words from clients"
      title="Loved by visionary founders."
      className="bg-[color:var(--bg-secondary)]/40"
    >
      <div className="relative max-w-3xl mx-auto">
        <div className="p-10 md:p-14 rounded-3xl bg-[color:var(--bg-card)] border border-white/5 relative text-center">
          <Quote className="mx-auto text-[color:var(--accent-orange)]/40" size={56} />
          <p className="mt-6 text-2xl md:text-3xl leading-relaxed font-medium">"{t.q}"</p>
          <div className="mt-8 flex flex-col items-center gap-2">
            <div className="h-14 w-14 rounded-full bg-gradient-accent grid place-items-center text-white font-bold text-xl">
              {t.n[0]}
            </div>
            <div className="font-semibold">{t.n}</div>
            <div className="text-sm text-[color:var(--text-secondary)]">{t.c}</div>
            <div className="flex gap-1 mt-2">
              {Array.from({ length: 5 }).map((_, j) => (
                <Star
                  key={j}
                  size={14}
                  className="fill-[color:var(--accent-orange)] text-[color:var(--accent-orange)]"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={() => setI((i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
            className="h-12 w-12 rounded-full border border-white/10 grid place-items-center hover:bg-gradient-accent transition"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="flex gap-2">
            {TESTIMONIALS.map((_, j) => (
              <button
                key={j}
                onClick={() => setI(j)}
                className={`h-2 rounded-full transition-all ${j === i ? "w-8 bg-gradient-accent" : "w-2 bg-white/15"}`}
              />
            ))}
          </div>
          <button
            onClick={() => setI((i + 1) % TESTIMONIALS.length)}
            className="h-12 w-12 rounded-full border border-white/10 grid place-items-center hover:bg-gradient-accent transition"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </Section>
  );
}
