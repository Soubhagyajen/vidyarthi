import { Reveal } from "./Reveal";

const steps = [
  {
    id: "01",
    title: "Knowledge",
    caption: "Handwritten notes, questions, observations",
    art: (
      <svg viewBox="0 0 200 140" className="h-full w-full" aria-hidden="true">
        <rect x="24" y="14" width="152" height="112" fill="none" stroke="var(--stone)" strokeOpacity="0.35" />
        {[34, 48, 62, 76, 90, 104].map((y, i) => (
          <path
            key={y}
            d={`M40 ${y} C ${70 + i * 6} ${y - 6}, ${110 - i * 4} ${y + 7}, ${150 - i * 8} ${y}`}
            fill="none"
            stroke="var(--gold)"
            strokeOpacity={0.55}
            strokeWidth="1"
          />
        ))}
        <circle cx="150" cy="112" r="6" fill="none" stroke="var(--gold)" strokeOpacity="0.6" />
      </svg>
    ),
  },
  {
    id: "02",
    title: "Idea",
    caption: "Structure, geometry, a considered plan",
    art: (
      <svg viewBox="0 0 200 140" className="h-full w-full" aria-hidden="true">
        <g stroke="var(--stone)" strokeOpacity="0.4" fill="none">
          <rect x="24" y="14" width="152" height="112" />
          <rect x="40" y="28" width="56" height="34" />
          <rect x="40" y="72" width="56" height="40" />
          <rect x="108" y="28" width="52" height="84" />
        </g>
        <g stroke="var(--gold)" strokeOpacity="0.7" fill="none">
          <line x1="46" y1="40" x2="86" y2="40" />
          <line x1="46" y1="48" x2="72" y2="48" />
          <line x1="116" y1="42" x2="152" y2="42" />
          <line x1="116" y1="52" x2="140" y2="52" />
        </g>
      </svg>
    ),
  },
  {
    id: "03",
    title: "Technology",
    caption: "A working system, live and useful",
    art: (
      <svg viewBox="0 0 200 140" className="h-full w-full" aria-hidden="true">
        <rect x="24" y="14" width="152" height="112" fill="none" stroke="var(--teal)" strokeOpacity="0.35" />
        <line x1="24" y1="34" x2="176" y2="34" stroke="var(--teal)" strokeOpacity="0.3" />
        <g fill="var(--teal)" fillOpacity="0.2">
          <rect x="38" y="48" width="48" height="26" />
          <rect x="38" y="82" width="48" height="26" />
          <rect x="100" y="48" width="62" height="60" />
        </g>
        <g stroke="var(--teal)" strokeOpacity="0.75" fill="none">
          <polyline points="106,96 120,78 134,88 148,62 156,72" />
          <circle cx="34" cy="24" r="2.5" />
          <circle cx="44" cy="24" r="2.5" />
        </g>
      </svg>
    ),
  },
];

export function Philosophy() {
  return (
    <section className="grain relative overflow-hidden border-t border-border py-28 lg:py-40">
      <div className="hairline-grid absolute inset-0 opacity-40" />
      <div className="grain-layer" />
      <div className="relative mx-auto max-w-[88rem] px-6 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Reveal>
              <p className="eyebrow">The Beginning</p>
              <h2 className="display mt-6 text-4xl sm:text-5xl lg:text-[4rem]">
                A Vidyarthi is
                <br />
                always learning.
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-6 lg:pt-14">
            <Reveal delay={0.1}>
              <div className="rule-line mb-7 w-24" />
              <p className="text-base leading-relaxed text-muted-foreground lg:text-lg">
                We believe great technology begins with understanding. Before we design, develop or
                automate anything, we learn how your business works, where the friction exists, and
                what you are trying to achieve.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-20 grid gap-px border border-border bg-border sm:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.12} className="bg-background">
              <div className="group h-full p-7 transition-colors duration-700 hover:bg-card lg:p-9">
                <div className="flex items-center justify-between">
                  <span className="index-num">{s.id}</span>
                  <span className="text-[0.6rem] tracking-[0.28em] text-muted-foreground uppercase">
                    {i === 2 ? "Now" : "Then"}
                  </span>
                </div>
                <div className="mt-7 h-32 opacity-80 transition-opacity duration-700 group-hover:opacity-100">
                  {s.art}
                </div>
                <h3 className="display mt-8 text-2xl">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.caption}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
