import { Link } from "@tanstack/react-router";
import { ArrowUp, Instagram, Twitter, Linkedin, Dribbble } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-white/5 bg-[color:var(--bg-secondary)]">
      <div className="container-prem py-16">
        <div className="flex flex-col items-center text-center gap-8">
          <img src={logo} alt="UF Studio" className="h-12 w-auto" width={140} height={48} />
          <p className="max-w-xl text-[color:var(--text-secondary)]">
            A creative branding studio crafting bold identities and editorial brand systems for ambitious founders.
          </p>
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm">
            {["/", "/work", "/services", "/about", "/process", "/shop", "/testimonials", "/faq", "/contact"].map((p, i) => (
              <Link key={p} to={p} className="text-[color:var(--text-secondary)] hover:text-[color:var(--accent-orange)]">
                {["Home","Work","Services","About","Process","Shop","Testimonials","FAQ","Contact"][i]}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-5">
            {[Instagram, Twitter, Linkedin, Dribbble].map((Icon, i) => (
              <a key={i} href="#" className="p-2.5 rounded-full bg-white/5 hover:bg-gradient-accent transition">
                <Icon size={18} />
              </a>
            ))}
          </div>
          <div className="w-full hairline pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[color:var(--text-secondary)]">
            <p>© {new Date().getFullYear()} UF Studio. All rights reserved.</p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="inline-flex items-center gap-2 hover:text-[color:var(--accent-orange)] transition"
            >
              Back to top <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
