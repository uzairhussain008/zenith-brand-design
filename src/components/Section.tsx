import { PropsWithChildren } from "react";
type Props = PropsWithChildren<{ eyebrow?: string; title?: string; subtitle?: string; className?: string }>;
export function Section({ eyebrow, title, subtitle, className = "", children }: Props) {
  return (
    <section className={`py-20 md:py-28 ${className}`}>
      <div className="container-prem">
        {(eyebrow || title || subtitle) && (
          <div className="max-w-3xl mb-14">
            {eyebrow && (
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[color:var(--accent-orange)] mb-4">
                <span className="h-px w-8 bg-[color:var(--accent-orange)]" /> {eyebrow}
              </span>
            )}
            {title && <h2 className="text-4xl md:text-6xl font-bold leading-[1.05]">{title}</h2>}
            {subtitle && <p className="mt-5 text-lg text-[color:var(--text-secondary)] max-w-2xl">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
