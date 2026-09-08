import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ThemeToggle } from "./ThemeToggle";

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
    const onScroll = () => {
      setSolid(window.scrollY > 30);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Handle ESC key to close mobile menu
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        setOpen(false);
      }
    },
    [open],
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Skip to Content for Keyboard Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-5 focus:py-3 focus:bg-primary focus:text-primary-foreground focus:text-xs focus:font-semibold focus:tracking-[0.2em] focus:uppercase focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-foreground"
      >
        Skip to main content
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          solid
            ? "border-b border-border/80 bg-background/90 shadow-lg backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav
          aria-label="Main Navigation"
          className="mx-auto flex max-w-[88rem] items-center justify-between px-6 py-4.5 lg:px-12"
        >
          {/* Brand Mark */}
          <a
            href="#top"
            className="group flex items-baseline gap-3 focus-ring rounded-xs py-1"
            aria-label="Vidyarthi — Return to top"
          >
            <span className="display text-2xl tracking-tight text-foreground group-hover:text-gold transition-colors duration-300 sm:text-[1.75rem]">
              Vidyarthi
            </span>
            <span
              className="h-1.5 w-1.5 rounded-full bg-gold opacity-80 group-hover:scale-125 transition-transform duration-300"
              aria-hidden="true"
            />
            <span className="hidden text-[0.625rem] font-semibold tracking-[0.28em] text-muted-foreground uppercase sm:inline font-sans">
              Digital Solutions Studio
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-7 md:flex">
            <ul className="flex items-center gap-6">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="group relative py-1 text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase transition-colors duration-300 hover:text-foreground focus-ring rounded-xs"
                  >
                    {l.label}
                    <span
                      className="absolute inset-x-0 -bottom-1 h-px scale-x-0 bg-gold transition-transform duration-300 ease-out group-hover:scale-x-100"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>

            {/* Theme Toggle Button */}
            <ThemeToggle />

            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center border border-primary/70 bg-primary/10 px-5 py-2 text-[0.6875rem] font-semibold tracking-[0.2em] text-primary uppercase transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-[var(--shadow-glow-gold)] focus-ring"
            >
              Start a Project
            </a>
          </div>

          {/* Mobile Right Bar: Theme Toggle + Menu Button */}
          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle />

            <button
              type="button"
              aria-label={open ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              onClick={() => setOpen((v) => !v)}
              className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 focus-ring rounded-xs"
            >
              <span
                className={`h-px w-6 bg-foreground transition-all duration-300 ${
                  open ? "translate-y-[4.5px] rotate-45 bg-gold" : ""
                }`}
              />
              <span
                className={`h-px w-6 bg-foreground transition-all duration-300 ${
                  open ? "-translate-y-[4.5px] -rotate-45 bg-gold" : ""
                }`}
              />
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {open && (
            <motion.div
              id="mobile-navigation"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile Navigation"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden border-t border-border bg-background/98 px-6 py-8 backdrop-blur-2xl md:hidden"
            >
              <ul className="space-y-6">
                {links.map((l, i) => (
                  <motion.li
                    key={l.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.3 }}
                  >
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="display block text-3xl font-light text-foreground transition-colors hover:text-gold focus-ring py-1"
                    >
                      {l.label}
                    </a>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-border/60">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="flex w-full items-center justify-center border border-primary bg-primary px-6 py-3.5 text-xs font-semibold tracking-[0.2em] text-primary-foreground uppercase shadow-[var(--shadow-glow-gold)] transition-all focus-ring"
                >
                  Start a Project
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
