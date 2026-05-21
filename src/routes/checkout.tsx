import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/Section";
import { ShieldCheck, Lock, CreditCard } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/checkout")({
  validateSearch: (s: Record<string, unknown>) => ({
    item: typeof s.item === "string" ? s.item : "Logo Template Pack",
    price: typeof s.price === "number" ? s.price : 49,
  }),
  head: () => ({
    meta: [
      { title: "Checkout — UF Studio" },
      { name: "description", content: "Secure checkout for UF Studio digital products." },
      { property: "og:title", content: "Checkout — UF Studio" },
      { property: "og:description", content: "Complete your purchase securely." },
    ],
  }),
  component: Checkout,
});

function Checkout() {
  const { item, price } = Route.useSearch();
  const [done, setDone] = useState(false);
  const tax = +(price * 0.08).toFixed(2);
  const total = +(price + tax).toFixed(2);
  return (
    <Section eyebrow="Checkout" title="Secure premium checkout.">
      <div className="grid lg:grid-cols-[1.3fr_1fr] gap-8">
        <form
          onSubmit={(e) => { e.preventDefault(); setDone(true); }}
          className="p-8 rounded-3xl bg-[color:var(--bg-card)] border border-white/5 space-y-6"
        >
          <h3 className="text-2xl font-bold">Billing details</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <Input name="first" label="First Name" />
            <Input name="last" label="Last Name" />
            <Input name="email" type="email" label="Email" />
            <Input name="country" label="Country" />
          </div>
          <h3 className="text-2xl font-bold pt-4">Payment</h3>
          <div className="grid sm:grid-cols-3 gap-3">
            {["Card","PayPal","Apple Pay"].map((m,i) => (
              <label key={m} className="cursor-pointer">
                <input type="radio" name="method" defaultChecked={i===0} className="peer sr-only" />
                <div className="p-4 rounded-xl border border-white/10 peer-checked:border-[color:var(--accent-orange)] peer-checked:bg-[color:var(--accent-orange)]/10 flex items-center justify-center gap-2 font-semibold transition">
                  <CreditCard size={16}/> {m}
                </div>
              </label>
            ))}
          </div>
          <Input name="card" label="Card Number" placeholder="1234 5678 9012 3456" />
          <div className="grid sm:grid-cols-3 gap-4">
            <Input name="exp" label="Expiry" placeholder="MM/YY" />
            <Input name="cvc" label="CVC" placeholder="123" />
            <Input name="zip" label="ZIP" />
          </div>
          <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-gradient-accent text-white font-semibold glow hover:scale-[1.01] transition">
            <Lock size={16}/> {done ? "Payment Confirmed ✓" : `Complete Purchase — $${total}`}
          </button>
          <div className="flex items-center justify-center gap-6 text-xs text-[color:var(--text-secondary)] pt-2">
            <span className="flex items-center gap-1"><ShieldCheck size={14}/> 256-bit SSL</span>
            <span>Powered by Stripe</span>
            <span>WooCommerce ready</span>
          </div>
        </form>

        <aside className="p-8 rounded-3xl bg-[color:var(--bg-card)] border border-white/5 h-fit sticky top-24">
          <h3 className="text-xl font-bold">Order Summary</h3>
          <div className="mt-6 flex items-center gap-4 pb-6 border-b border-white/5">
            <div className="h-16 w-16 rounded-xl bg-gradient-accent grid place-items-center text-white font-bold">UF</div>
            <div className="flex-1">
              <div className="font-semibold">{item}</div>
              <div className="text-xs text-[color:var(--text-secondary)]">Digital download · Instant</div>
            </div>
            <div className="font-bold">${price}</div>
          </div>
          <div className="space-y-2 mt-5 text-sm">
            <Row l="Subtotal" v={`$${price.toFixed(2)}`} />
            <Row l="Tax" v={`$${tax.toFixed(2)}`} />
            <Row l="Discount" v="—" />
          </div>
          <div className="mt-5 pt-5 border-t border-white/5 flex items-center justify-between">
            <span className="text-lg font-semibold">Total</span>
            <span className="text-3xl font-bold text-gradient">${total.toFixed(2)}</span>
          </div>
        </aside>
      </div>
    </Section>
  );
}

function Input({ label, name, type="text", placeholder }: any) {
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-widest text-[color:var(--text-secondary)] mb-2">{label}</span>
      <input name={name} type={type} placeholder={placeholder} required className="w-full px-4 py-3 rounded-xl bg-[color:var(--bg-main)] border border-white/10 focus:border-[color:var(--accent-orange)] outline-none transition" />
    </label>
  );
}
function Row({ l, v }: { l: string; v: string }) {
  return <div className="flex justify-between text-[color:var(--text-secondary)]"><span>{l}</span><span className="text-[color:var(--text-primary)]">{v}</span></div>;
}
