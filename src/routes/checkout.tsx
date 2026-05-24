import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/Section";
import { Mail, Send, ShieldCheck } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/checkout")({
  validateSearch: (s: Record<string, unknown>) => ({
    item: typeof s.item === "string" ? s.item : "Logo Template Pack",
    price: typeof s.price === "number" ? s.price : 49,
  }),
  head: () => ({
    meta: [
      { title: "Inquire - UF Studio" },
      { name: "description", content: "Send an inquiry to UF Studio about a product or project." },
      { property: "og:title", content: "Inquire - UF Studio" },
      { property: "og:description", content: "Reach out about a product or project." },
    ],
  }),
  component: Inquiry,
});

type Status = "idle" | "sent";

function Inquiry() {
  const { item, price } = Route.useSearch();
  const [status, setStatus] = useState<Status>("idle");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = `${String(fd.get("first") ?? "")} ${String(fd.get("last") ?? "")}`.trim();
    const email = String(fd.get("email") ?? "");
    const message = String(fd.get("message") ?? "");
    const subject = encodeURIComponent(`Product inquiry - ${item}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nProduct: ${item}\nReference price: $${price}\n\nMessage:\n${message}`,
    );

    window.location.href = `mailto:fawad@ufstudio.shop?subject=${subject}&body=${body}`;
    setStatus("sent");
    e.currentTarget.reset();
  }

  return (
    <Section eyebrow="Inquire" title="Send us a message.">
      <div className="grid lg:grid-cols-[1.3fr_1fr] gap-8">
        <form
          onSubmit={onSubmit}
          className="p-8 rounded-3xl bg-[color:var(--bg-card)] border border-white/5 space-y-6"
        >
          <h3 className="text-2xl font-bold">Your details</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <Input name="first" label="First Name" />
            <Input name="last" label="Last Name" />
            <Input name="email" type="email" label="Email" placeholder="you@example.com" />
            <Input name="country" label="Country" required={false} />
          </div>
          <h3 className="text-2xl font-bold pt-4">Your message</h3>
          <label className="block">
            <span className="block text-xs uppercase tracking-widest text-[color:var(--text-secondary)] mb-2">
              Message
            </span>
            <textarea
              name="message"
              required
              rows={6}
              placeholder={`I'm interested in "${item}" - please share more details.`}
              className="w-full px-4 py-3 rounded-xl bg-[color:var(--bg-main)] border border-white/10 focus:border-[color:var(--accent-orange)] outline-none transition resize-y"
            />
          </label>
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-gradient-accent text-white font-semibold glow hover:scale-[1.01] transition"
          >
            <Send size={16} />
            {status === "sent" ? "Email draft opened" : "Send Message"}
          </button>
          {status === "sent" && (
            <p className="text-sm text-[color:var(--text-secondary)] text-center">
              Thanks. Your email app should now have a prepared message ready to send.
            </p>
          )}
          <div className="flex items-center justify-center gap-6 text-xs text-[color:var(--text-secondary)] pt-2">
            <span className="flex items-center gap-1">
              <ShieldCheck size={14} /> Private & secure
            </span>
            <span>Replies within 24h</span>
          </div>
        </form>

        <aside className="p-8 rounded-3xl bg-[color:var(--bg-card)] border border-white/5 h-fit sticky top-24">
          <h3 className="text-xl font-bold">You're inquiring about</h3>
          <div className="mt-6 flex items-center gap-4 pb-6 border-b border-white/5">
            <div className="h-16 w-16 rounded-xl bg-gradient-accent grid place-items-center text-white font-bold">
              UF
            </div>
            <div className="flex-1">
              <div className="font-semibold">{item}</div>
              <div className="text-xs text-[color:var(--text-secondary)]">
                Reference price - ${price}
              </div>
            </div>
          </div>
          <div className="mt-6 space-y-3 text-sm text-[color:var(--text-secondary)]">
            <p>
              Tell us about your brand, timeline, and what you'd like to achieve. We'll reply
              personally with next steps.
            </p>
            <div className="flex items-center gap-2 pt-2 text-[color:var(--text-primary)]">
              <Mail size={14} className="text-[color:var(--accent-orange)]" />
              <a
                href="mailto:fawad@ufstudio.shop"
                className="hover:text-[color:var(--accent-orange)] transition"
              >
                fawad@ufstudio.shop
              </a>
            </div>
          </div>
        </aside>
      </div>
    </Section>
  );
}

function Input({
  label,
  name,
  type = "text",
  placeholder,
  required = true,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-widest text-[color:var(--text-secondary)] mb-2">
        {label}
      </span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full px-4 py-3 rounded-xl bg-[color:var(--bg-main)] border border-white/10 focus:border-[color:var(--accent-orange)] outline-none transition"
      />
    </label>
  );
}
