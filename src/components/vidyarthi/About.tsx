import { SectionHeading, Reveal } from "./Reveal";

export function About() {
  return (
    <>
      <section id="about" className="relative border-t border-border py-28 lg:py-40">
        <div className="mx-auto max-w-[88rem] px-6 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <SectionHeading label="The Vidyarthi Philosophy" title="Built by a Learner. For Builders." />
              <Reveal delay={0.1}>
                <div className="mt-10 space-y-6 text-sm leading-relaxed text-muted-foreground lg:text-base">
                  <p>
                    Vidyarthi means learner. The name comes from a simple belief: the best builders
                    never stop learning.
                  </p>
                  <p>
                    We approach every project with curiosity — learning the business, understanding
                    the people behind it, and finding the simplest way technology can create
                    meaningful change.
                  </p>
                </div>
                <div className="mt-12 flex flex-wrap items-center gap-6">
                  {["Learn", "Build", "Solve"].map((w) => (
                    <span key={w} className="display text-3xl text-primary lg:text-4xl">
                      {w}.
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-6">
              <Reveal delay={0.15}>
                <div className="relative aspect-4/5 overflow-hidden border border-border">
                  <svg
                    viewBox="0 0 400 500"
                    className="h-full w-full"
                    preserveAspectRatio="xMidYMid slice"
                    aria-hidden="true"
                  >
                    <rect width="400" height="500" fill="var(--card)" />
                    {/* ancient arcade */}
                    <g stroke="var(--gold)" strokeOpacity="0.4" fill="none">
                      {[40, 130, 220].map((x) => (
                        <g key={x}>
                          <path d={`M${x} 340 L${x} 190 Q${x + 35} 130 ${x + 70} 190 L${x + 70} 340`} />
                          <rect x={x - 8} y="340" width="86" height="14" />
                        </g>
                      ))}
                      <line x1="0" y1="354" x2="400" y2="354" />
                    </g>
                    {/* modern grid emerging */}
                    <g stroke="var(--teal)" strokeOpacity="0.28">
                      {Array.from({ length: 9 }).map((_, i) => (
                        <line key={`v${i}`} x1={i * 50} y1="360" x2={i * 50} y2="500" />
                      ))}
                      {Array.from({ length: 4 }).map((_, i) => (
                        <line key={`h${i}`} x1="0" y1={370 + i * 34} x2="400" y2={370 + i * 34} />
                      ))}
                    </g>
                    <g fill="var(--teal)" fillOpacity="0.14">
                      <rect x="52" y="378" width="96" height="26" />
                      <rect x="52" y="412" width="60" height="26" />
                      <rect x="252" y="378" width="96" height="60" />
                    </g>
                    <rect
                      x="0.5"
                      y="0.5"
                      width="399"
                      height="499"
                      fill="none"
                      stroke="var(--foreground)"
                      strokeOpacity="0.08"
                    />
                  </svg>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
                  <p className="absolute bottom-6 left-6 text-[0.62rem] tracking-[0.26em] text-muted-foreground uppercase">
                    Stone becomes structure. Structure becomes software.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Brand quote */}
      <section className="grain relative overflow-hidden border-t border-border py-28 lg:py-40">
        <div className="grain-layer" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,color-mix(in_oklab,var(--gold)_9%,transparent),transparent_62%)]" />
        <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-12">
          <Reveal>
            <p className="eyebrow">The Vidyarthi Philosophy</p>
            <blockquote className="display mt-10 text-3xl leading-[1.15] sm:text-5xl lg:text-[4.5rem]">
              “Knowledge begins with curiosity. Technology begins with understanding.”
            </blockquote>
            <div className="rule-line mx-auto mt-12 w-40 bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
