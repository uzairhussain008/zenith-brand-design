type Props = { items: string[]; reverse?: boolean; accent?: boolean };
export function Marquee({ items, reverse, accent }: Props) {
  const list = [...items, ...items, ...items];
  return (
    <div
      className={`relative overflow-hidden py-5 border-y border-white/10 ${
        accent ? "bg-gradient-accent text-black" : "bg-[color:var(--bg-secondary)]"
      }`}
      style={accent ? { transform: "rotate(-1.5deg)", marginInline: "-2rem" } : undefined}
    >
      <div className={`flex whitespace-nowrap gap-12 text-2xl md:text-3xl font-bold tracking-tight ${reverse ? "animate-marquee-slow" : "animate-marquee"}`}>
        {list.map((t, i) => (
          <span key={i} className="inline-flex items-center gap-12">
            {t} <span className={accent ? "text-black/40" : "text-[color:var(--accent-orange)]"}>✺</span>
          </span>
        ))}
      </div>
    </div>
  );
}
