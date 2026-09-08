import { SectionHeading, Reveal } from "./Reveal";

const services = [
  {
    id: "01",
    kicker: "Digital Presence",
    title: "Websites",
    copy: "Professional, high-performance websites that give businesses a strong digital presence.",
    art: (
      <svg viewBox="0 0 160 120" className="h-full w-full" aria-hidden="true">
        <ellipse cx="80" cy="104" rx="44" ry="7" fill="none" stroke="var(--stone)" strokeOpacity="0.4" />
        <rect x="44" y="90" width="72" height="12" fill="none" stroke="var(--stone)" strokeOpacity="0.5" />
        <circle cx="80" cy="52" r="30" fill="none" stroke="var(--gold)" strokeOpacity="0.7" />
        <ellipse cx="80" cy="52" rx="30" ry="10" fill="none" stroke="var(--teal)" strokeOpacity="0.5" />
        <ellipse cx="80" cy="52" rx="11" ry="30" fill="none" stroke="var(--teal)" strokeOpacity="0.35" />
      </svg>
    ),
  },
  {
    id: "02",
    kicker: "Digital Systems",
    title: "Business Software",
    copy: "Custom software for BOQ management, inventory, quotations, CRM, dashboards, operations and internal workflows.",
    art: (
      <svg viewBox="0 0 160 120" className="h-full w-full" aria-hidden="true">
        <ellipse cx="80" cy="104" rx="44" ry="7" fill="none" stroke="var(--stone)" strokeOpacity="0.4" />
        <rect x="44" y="90" width="72" height="12" fill="none" stroke="var(--stone)" strokeOpacity="0.5" />
        <g stroke="var(--gold)" strokeOpacity="0.6" fill="none">
          <path d="M50 40 L80 24 L110 40 L110 76 L80 92 L50 76 Z" />
          <path d="M50 40 L80 56 L110 40" />
          <path d="M80 56 L80 92" />
        </g>
        <g stroke="var(--teal)" strokeOpacity="0.7" fill="none">
          <line x1="58" y1="48" x2="74" y2="57" />
          <line x1="58" y1="58" x2="70" y2="65" />
          <line x1="88" y1="57" x2="104" y2="48" />
        </g>
      </svg>
    ),
  },
  {
    id: "03",
    kicker: "Intelligent Systems",
    title: "AI & Automation",
    copy: "AI-powered tools and automation that reduce repetitive work and make businesses more efficient.",
    art: (
      <svg viewBox="0 0 160 120" className="h-full w-full" aria-hidden="true">
        <ellipse cx="80" cy="104" rx="44" ry="7" fill="none" stroke="var(--stone)" strokeOpacity="0.4" />
        <rect x="44" y="90" width="72" height="12" fill="none" stroke="var(--stone)" strokeOpacity="0.5" />
        <g stroke="var(--teal)" strokeOpacity="0.55">
          <line x1="80" y1="52" x2="54" y2="34" />
          <line x1="80" y1="52" x2="108" y2="32" />
          <line x1="80" y1="52" x2="50" y2="68" />
          <line x1="80" y1="52" x2="112" y2="66" />
          <line x1="80" y1="52" x2="80" y2="22" />
          <line x1="54" y1="34" x2="80" y2="22" />
          <line x1="108" y1="32" x2="112" y2="66" />
        </g>
        <g fill="var(--gold)" fillOpacity="0.85">
          <circle cx="80" cy="52" r="4.5" />
          <circle cx="54" cy="34" r="2.5" />
          <circle cx="108" cy="32" r="2.5" />
          <circle cx="50" cy="68" r="2.5" />
          <circle cx="112" cy="66" r="2.5" />
          <circle cx="80" cy="22" r="2.5" />
        </g>
      </svg>
    ),
  },
  {
    id: "04",
    kicker: "Digital Growth",
    title: "Strategy & Optimization",
    copy: "Digital strategy, analytics, SEO and continuous improvements that help businesses grow.",
    art: (
      <svg viewBox="0 0 160 120" className="h-full w-full" aria-hidden="true">
        <ellipse cx="80" cy="104" rx="44" ry="7" fill="none" stroke="var(--stone)" strokeOpacity="0.4" />
        <rect x="44" y="90" width="72" height="12" fill="none" stroke="var(--stone)" strokeOpacity="0.5" />
        <g stroke="var(--gold)" strokeOpacity="0.65" fill="none">
          <path d="M80 20 L112 78 L48 78 Z" />
          <path d="M64 49 L96 49" />
          <path d="M56 64 L104 64" />
        </g>
        <g stroke="var(--teal)" strokeOpacity="0.7" fill="none">
          <polyline points="52,74 66,60 80,66 96,42 106,50" />
        </g>
      </svg>
    ),
  },
];

export function Services() {
  return (
    <section id="services" className="relative border-t border-border py-28 lg:py-40">
      <div className="mx-auto max-w-[88rem] px-6 lg:px-12">
        <SectionHeading label="What We Build" title="Technology for a Smarter Tomorrow." />

        <div className="mt-16 grid gap-px border border-border bg-border md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.08} className="bg-background">
              <article className="group h-full bg-background p-8 transition-all duration-700 hover:-translate-y-1.5 hover:bg-card hover:shadow-lift lg:p-12">
                <div className="flex items-start justify-between gap-8">
                  <div>
                    <span className="index-num">{s.id}</span>
                    <p className="mt-3 text-[0.65rem] font-semibold tracking-[0.28em] text-muted-foreground uppercase">
                      {s.kicker}
                    </p>
                  </div>
                  <div className="h-24 w-32 shrink-0 opacity-70 transition-all duration-700 group-hover:-translate-y-1 group-hover:opacity-100">
                    {s.art}
                  </div>
                </div>
                <h3 className="display mt-10 text-3xl lg:text-4xl">{s.title}</h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">{s.copy}</p>
                <span className="mt-9 inline-flex items-center gap-3 text-[0.68rem] font-semibold tracking-[0.22em] text-primary uppercase">
                  Explore
                  <span className="transition-transform duration-500 group-hover:translate-x-1.5">→</span>
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
