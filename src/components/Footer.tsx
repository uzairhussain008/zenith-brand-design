import { Link } from "@tanstack/react-router";
import { ArrowUp, Facebook, Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/logo.svg";

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/people/Ufstudio/61590108610899/",
    Icon: Facebook,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/uf-studio-596069406/",
    Icon: Linkedin,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/ufstudio_official/",
    Icon: Instagram,
  },
];

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-white/5 bg-(--bg-secondary)">
      <div className="container-prem py-16">
        <div className="flex flex-col items-center text-center gap-8">
          <img src={logo} alt="UF Studio" className="h-12 w-auto" width={140} height={48} />
          <p className="max-w-xl text-(--text-secondary)">
            A creative branding studio crafting bold identities and editorial brand systems for
            ambitious founders.
          </p>
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm">
            <Link to="/" className="text-(--text-secondary) hover:text-(--accent-orange)">
              Home
            </Link>
            <Link to="/work" className="text-(--text-secondary) hover:text-(--accent-orange)">
              Work
            </Link>
            <Link to="/services" className="text-(--text-secondary) hover:text-(--accent-orange)">
              Services
            </Link>
            <Link
              to="/"
              hash="about"
              className="text-(--text-secondary) hover:text-(--accent-orange)"
            >
              About
            </Link>
            <Link
              to="/"
              hash="process"
              className="text-(--text-secondary) hover:text-(--accent-orange)"
            >
              Process
            </Link>
            <Link to="/shop" className="text-(--text-secondary) hover:text-(--accent-orange)">
              Shop
            </Link>
            <Link
              to="/"
              hash="testimonials"
              className="text-(--text-secondary) hover:text-(--accent-orange)"
            >
              Testimonials
            </Link>
            <Link
              to="/"
              hash="faq"
              className="text-(--text-secondary) hover:text-(--accent-orange)"
            >
              FAQ
            </Link>
            <Link to="/contact" className="text-(--text-secondary) hover:text-(--accent-orange)">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-5">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-white/5 hover:bg-gradient-accent transition"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
          <div className="w-full hairline pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-(--text-secondary)">
            <p>© {new Date().getFullYear()} UF Studio. All rights reserved.</p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="inline-flex items-center gap-2 hover:text-(--accent-orange) transition"
            >
              Back to top <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
