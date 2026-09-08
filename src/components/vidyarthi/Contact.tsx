import doorway from "@/assets/doorway.jpg";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="contact" className="grain relative overflow-hidden border-t border-border">
      <img
        src={doorway}
        alt="An ancient carved stone doorway opening onto a bright futuristic space"
        loading="lazy"
        width={1536}
        height={1024}
        className="absolute inset-0 h-full w-full object-cover opacity-45"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/75 to-background" />
      <div className="grain-layer" />

      <div className="relative mx-auto max-w-4xl px-6 py-32 text-center lg:px-12 lg:py-44">
        <Reveal>
          <p className="eyebrow">Contact</p>
          <h2 className="display mt-8 text-4xl sm:text-6xl lg:text-[4.5rem]">
            Have a problem worth solving?
          </h2>
          <p className="mx-auto mt-7 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Tell us what you're trying to build. We'll figure out the technology together.
          </p>
          <a
            href="mailto:hello@vidyarthi.studio"
            className="group mt-12 inline-flex items-center gap-3 bg-primary px-9 py-4 text-[0.7rem] font-semibold tracking-[0.22em] text-primary-foreground uppercase transition-all duration-500 hover:shadow-[var(--shadow-glow-gold)]"
          >
            Let's Build Together
            <span className="transition-transform duration-500 group-hover:translate-x-1.5">→</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-[88rem] px-6 py-16 lg:px-12 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="display text-3xl">Vidyarthi</p>
            <p className="mt-3 text-[0.68rem] font-semibold tracking-[0.26em] text-primary uppercase">
              Ancient Wisdom. Modern Solutions.
            </p>
          </div>

          <nav className="lg:col-span-4">
            <p className="text-[0.62rem] tracking-[0.28em] text-muted-foreground uppercase">Navigate</p>
            <ul className="mt-5 grid grid-cols-2 gap-3 text-sm">
              {[
                ["Home", "#top"],
                ["Services", "#services"],
                ["Work", "#work"],
                ["About", "#about"],
                ["Insights", "#about"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-muted-foreground transition-colors duration-500 hover:text-foreground"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <p className="text-[0.62rem] tracking-[0.28em] text-muted-foreground uppercase">Follow</p>
            <ul className="mt-5 space-y-3 text-sm">
              {["LinkedIn", "Instagram", "YouTube"].map((s) => (
                <li key={s}>
                  <a
                    href="#top"
                    className="text-muted-foreground transition-colors duration-500 hover:text-foreground"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rule-line mt-16 w-full bg-gradient-to-r from-primary/30 via-border to-transparent" />
        <p className="mt-6 text-[0.68rem] tracking-[0.2em] text-muted-foreground uppercase">
          © 2026 Vidyarthi. Learn. Build. Solve.
        </p>
      </div>
    </footer>
  );
}
