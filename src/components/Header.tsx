import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

type NavItem = { label: string; to?: string; hash?: string };
const NAV: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "Work", to: "/work" },
  { label: "Services", to: "/services" },
  { label: "About", hash: "about" },
  { label: "Process", hash: "process" },
  { label: "Shop", to: "/shop" },
  { label: "Testimonials", hash: "testimonials" },
  { label: "FAQ", hash: "faq" },
  { label: "Contact", to: "/contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeHash, setActiveHash] = useState<string>("");
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isHome) {
      setActiveHash("");
      return;
    }
    const ids = NAV.filter((n) => n.hash).map((n) => n.hash!);
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (!els.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveHash(visible.target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [isHome]);

  const renderLink = (n: NavItem, onClick?: () => void) => {
    const base =
      "relative text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)] transition-colors";
    if (n.hash) {
      const isActive = isHome && activeHash === n.hash;
      return (
        <Link
          key={n.label}
          to="/"
          hash={n.hash}
          onClick={onClick}
          className={`${base} ${isActive ? "text-[color:var(--accent-orange)]" : ""}`}
        >
          {n.label}
        </Link>
      );
    }
    return (
      <Link
        key={n.label}
        to={n.to!}
        onClick={onClick}
        className={base}
        activeProps={{ className: "text-[color:var(--accent-orange)]" }}
        activeOptions={{ exact: n.to === "/" }}
      >
        {n.label}
      </Link>
    );
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass backdrop-blur-xl shadow-[0_8px_30px_-12px_rgba(0,0,0,0.5)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-prem flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2 group">
          <img src={logo} alt="UF Studio" className="h-10 w-auto" width={120} height={40} />
        </Link>

        <nav className="hidden lg:flex items-center gap-7 text-sm">
          {NAV.map((n) => renderLink(n))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-accent text-white text-sm font-semibold hover:opacity-90 transition shadow-[0_8px_30px_-5px_rgba(255,107,44,0.5)]"
          >
            Start a Project
          </Link>
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden glass border-t border-white/5">
          <div className="container-prem py-4 flex flex-col gap-2">
            {NAV.map((n) => (
              <div key={n.label} className="py-2">
                {renderLink(n, () => setOpen(false))}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
