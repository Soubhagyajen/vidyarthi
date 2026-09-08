import { useEffect, useState } from "react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Method", href: "#method" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        solid ? "border-b border-border bg-background/85 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-[88rem] items-center justify-between px-6 py-5 lg:px-12">
        <a href="#top" className="group flex items-baseline gap-3">
          <span className="display text-2xl tracking-tight">Vidyarthi</span>
          <span className="hidden text-[0.6rem] font-semibold tracking-[0.28em] text-muted-foreground uppercase sm:inline">
            Digital Solutions Studio
          </span>
        </a>

        <div className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-xs font-medium tracking-[0.16em] text-muted-foreground uppercase transition-colors duration-500 hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="border border-primary/50 px-5 py-2.5 text-[0.68rem] font-semibold tracking-[0.2em] text-primary uppercase transition-all duration-500 hover:bg-primary hover:text-primary-foreground"
          >
            Start a Project
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-px w-6 bg-foreground transition-transform duration-500 ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-6 bg-foreground transition-transform duration-500 ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background/95 px-6 py-6 backdrop-blur-xl md:hidden">
          <ul className="space-y-5">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="display text-3xl text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
