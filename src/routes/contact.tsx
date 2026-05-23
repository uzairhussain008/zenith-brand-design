import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { Section } from "@/components/Section";
import { Mail, MapPin, Phone, Send, Instagram, Twitter, Linkedin, Dribbble, Calendar } from "lucide-react";
import { useState } from "react";
import { sendContactMessage } from "@/lib/contact.functions";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — UF Studio" },
      { name: "description", content: "Start a project with UF Studio. We respond within 24 hours." },
      { property: "og:title", content: "Contact — UF Studio" },
      { property: "og:description", content: "Get in touch to start your branding project." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const send = useServerFn(sendContactMessage);
  return (
    <Section eyebrow="Get in touch" title="Let's build your brand.">
      <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10">
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const fd = new FormData(e.currentTarget);
            setStatus("sending");
            setErrorMsg("");
            try {
              await send({
                data: {
                  name: String(fd.get("name") ?? ""),
                  email: String(fd.get("email") ?? ""),
                  type: String(fd.get("type") ?? ""),
                  budget: String(fd.get("budget") ?? ""),
                  message: String(fd.get("message") ?? ""),
                },
              });
              setStatus("sent");
              (e.target as HTMLFormElement).reset();
            } catch (err: any) {
              setStatus("error");
              setErrorMsg(err?.message ?? "Failed to send message.");
            }
          }}
          className="p-8 md:p-10 rounded-3xl bg-[color:var(--bg-card)] border border-white/5 space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Name" name="name" />
            <Field label="Email" name="email" type="email" />
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <Select label="Project Type" name="type" options={["Logo Design","Brand Identity","Packaging","Website","Other"]} />
            <Select label="Budget" name="budget" options={["$2k – $5k","$5k – $15k","$15k – $30k","$30k+"]} />
          </div>
          <Field label="Message" name="message" textarea />
          <button type="submit" disabled={status === "sending"} className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gradient-accent text-white font-semibold glow hover:scale-[1.02] transition disabled:opacity-60">
            {status === "sent" ? "Message sent ✓" : status === "sending" ? "Sending…" : <>Send Message <Send size={16} /></>}
          </button>
          {status === "error" && (
            <p className="text-sm text-red-400">{errorMsg}</p>
          )}
        </form>

        <aside className="space-y-5">
          {[
            { Icon: Mail, t: "Email", v: "fawad@ufstudio.shop" },
            { Icon: Phone, t: "Phone", v: "+1 (970) 458-2113" },
            { Icon: MapPin, t: "Location", v: "Lisbon · Remote-first studio" },
          ].map(({Icon,t,v}) => (
            <div key={t} className="p-6 rounded-2xl bg-[color:var(--bg-card)] border border-white/5 flex items-start gap-4">
              <div className="h-12 w-12 rounded-xl bg-gradient-accent grid place-items-center text-white shrink-0"><Icon size={20} /></div>
              <div>
                <div className="text-xs uppercase tracking-widest text-[color:var(--text-secondary)]">{t}</div>
                <div className="mt-1 font-semibold">{v}</div>
              </div>
            </div>
          ))}
          <div className="p-6 rounded-2xl bg-gradient-accent text-white">
            <div className="flex items-center gap-2 text-sm font-semibold"><Calendar size={16}/> Book a Call</div>
            <p className="mt-2 text-white/90 text-sm">Prefer to talk? Schedule a free 30-minute discovery call.</p>
            <a href="#" className="mt-4 inline-flex px-5 py-2.5 rounded-full bg-black text-white text-sm font-semibold">Open Calendar</a>
          </div>
          <div className="flex gap-3 pt-2">
            {[Instagram, Twitter, Linkedin, Dribbble].map((Icon, i) => (
              <a key={i} href="#" className="p-3 rounded-full bg-white/5 hover:bg-gradient-accent transition"><Icon size={18} /></a>
            ))}
          </div>
        </aside>
      </div>
    </Section>
  );
}

function Field({ label, name, type="text", textarea }: { label: string; name: string; type?: string; textarea?: boolean }) {
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-widest text-[color:var(--text-secondary)] mb-2">{label}</span>
      {textarea ? (
        <textarea name={name} rows={5} required className="w-full px-4 py-3 rounded-xl bg-[color:var(--bg-main)] border border-white/10 focus:border-[color:var(--accent-orange)] outline-none transition" />
      ) : (
        <input name={name} type={type} required className="w-full px-4 py-3 rounded-xl bg-[color:var(--bg-main)] border border-white/10 focus:border-[color:var(--accent-orange)] outline-none transition" />
      )}
    </label>
  );
}
function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-widest text-[color:var(--text-secondary)] mb-2">{label}</span>
      <select name={name} className="w-full px-4 py-3 rounded-xl bg-[color:var(--bg-main)] border border-white/10 focus:border-[color:var(--accent-orange)] outline-none transition">
        {options.map(o => <option key={o}>{o}</option>)}
      </select>
    </label>
  );
}
