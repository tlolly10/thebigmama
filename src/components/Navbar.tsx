import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Menu", href: "#menu" },
  { label: "Story", href: "#story" },
  { label: "Reviews", href: "#reviews" },
  { label: "Visit", href: "#visit" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b-[3px] border-ink bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border-[3px] border-ink bg-primary text-primary-foreground font-display text-xl">
            BM
          </div>
          <div className="font-display text-2xl tracking-wide leading-none">
            THE BIG <span className="text-primary">MAMA</span>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="font-heading text-lg uppercase tracking-wider hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
          <a
            href="https://www.talabat.com"
            target="_blank"
            rel="noreferrer"
            className="comic-border bg-primary text-primary-foreground px-5 py-2 font-heading uppercase tracking-wider transition-transform hover:-translate-y-0.5"
          >
            Order Now
          </a>
        </nav>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t-[3px] border-ink bg-cream px-4 py-4 flex flex-col gap-3">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="font-heading text-lg uppercase">
              {l.label}
            </a>
          ))}
          <a
            href="https://www.talabat.com"
            target="_blank"
            rel="noreferrer"
            className="comic-border bg-primary text-primary-foreground px-5 py-2 font-heading uppercase text-center"
          >
            Order Now
          </a>
        </div>
      )}
    </header>
  );
}
