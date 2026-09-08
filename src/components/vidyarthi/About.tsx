import { SectionHeading, Reveal, KnowledgePoint } from "./Reveal";

const socialLinks = [
  {
    name: "LinkedIn",
    handle: "soubhagya-jena",
    url: "https://www.linkedin.com/in/soubhagya-jena-a02043253",
    label: "Connect with Soubhagya Jena on LinkedIn (opens in new tab)",
    detail: "Professional Background & Network",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        className="h-5 w-5"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    handle: "@SoubhagyaJena",
    url: "https://www.youtube.com/channel/UCcfvPfLBngyVb0cqOKyo7cg",
    label: "Watch Vidyarthi & Soubhagya Jena on YouTube (opens in new tab)",
    detail: "Technical Architecture & Philosophy",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        className="h-5 w-5"
      >
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
        <polygon
          points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"
          fill="currentColor"
          stroke="none"
        />
      </svg>
    ),
  },
  {
    name: "GitHub",
    handle: "Soubhagyajen",
    url: "https://github.com/Soubhagyajen",
    label: "Explore Soubhagya Jena's code on GitHub (opens in new tab)",
    detail: "Open Code & Production Systems",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        className="h-5 w-5"
      >
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
  },
];

export function About() {
  return (
    <>
      {/* Studio Philosophy & Heritage Narrative */}
      <section
        id="about"
        aria-label="About Vidyarthi"
        className="relative border-t border-border py-20 sm:py-28 lg:py-40 bg-background transition-colors duration-400"
      >
        <div className="mx-auto max-w-[88rem] px-4 sm:px-6 lg:px-12">
          <div className="grid gap-12 sm:gap-16 lg:grid-cols-12 lg:items-center">
            {/* Left Column: Narrative */}
            <div className="lg:col-span-6">
              <SectionHeading
                label="The Vidyarthi Philosophy"
                title="Built by a Learner. For Builders."
              />
              <Reveal delay={0.1}>
                <div className="mt-8 sm:mt-10 space-y-5 sm:space-y-6 text-sm leading-relaxed text-muted-foreground font-normal lg:text-base">
                  <p>
                    <strong className="text-foreground font-medium">Vidyarthi</strong> translates to{" "}
                    <em>student</em> or <em>learner</em>. The studio was founded on a singular
                    truth: the most enduring builders never graduate from learning.
                  </p>
                  <p>
                    We approach every client engagement as an intellectual immersion — dissecting
                    the nuance of how your business operates, respecting the people who run it, and
                    engineering the simplest, most powerful digital architecture to propel it
                    forward.
                  </p>
                  <p>
                    No offshore assembly lines. No template churn. Just bespoke craft, deep domain
                    empathy, and software that lasts.
                  </p>
                </div>

                {/* The Triad Motifs */}
                <div className="mt-8 sm:mt-12 flex flex-wrap items-center gap-6 border-t border-border/70 pt-6 sm:pt-8">
                  {[
                    { word: "Learn", desc: "Observe the friction" },
                    { word: "Build", desc: "Engineer the solution" },
                    { word: "Solve", desc: "Deliver lasting impact" },
                  ].map((t) => (
                    <div key={t.word} className="flex flex-col">
                      <span className="display text-2xl sm:text-3xl font-light text-primary lg:text-4xl">
                        {t.word}.
                      </span>
                      <span className="text-[0.625rem] font-mono tracking-wider uppercase text-stone mt-1">
                        {t.desc}
                      </span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Right Column: Architectural Drawing (Stone -> Code Structure) */}
            <div className="lg:col-span-6">
              <Reveal delay={0.15}>
                <div className="relative aspect-4/5 overflow-hidden border border-border bg-card shadow-architectural">
                  <svg
                    viewBox="0 0 400 500"
                    className="h-full w-full"
                    preserveAspectRatio="xMidYMid slice"
                    aria-hidden="true"
                  >
                    <rect width="400" height="500" fill="var(--card)" />

                    {/* Classical Ancient Arcade Archways */}
                    <g stroke="var(--gold)" strokeOpacity="0.45" strokeWidth="1" fill="none">
                      {[40, 130, 220].map((x) => (
                        <g key={x}>
                          <path
                            d={`M${x} 340 L${x} 190 Q${x + 35} 130 ${x + 70} 190 L${x + 70} 340`}
                          />
                          <rect x={x - 8} y="340" width="86" height="14" />
                          <line x1={x + 35} y1="130" x2={x + 35} y2="190" strokeDasharray="2 3" />
                        </g>
                      ))}
                      <line x1="0" y1="354" x2="400" y2="354" strokeWidth="1.5" />
                    </g>

                    {/* Modern Software Wireframe Emerging from the Foundation */}
                    <g stroke="var(--teal)" strokeOpacity="0.35" strokeWidth="0.8">
                      {Array.from({ length: 9 }).map((_, i) => (
                        <line key={`v${i}`} x1={i * 50} y1="360" x2={i * 50} y2="500" />
                      ))}
                      {Array.from({ length: 5 }).map((_, i) => (
                        <line key={`h${i}`} x1="0" y1={365 + i * 32} x2="400" y2={365 + i * 32} />
                      ))}
                    </g>

                    {/* Active Systems Blocks */}
                    <g fill="var(--teal)" fillOpacity="0.16">
                      <rect x="52" y="378" width="96" height="26" />
                      <rect x="52" y="412" width="60" height="26" />
                      <rect x="252" y="378" width="96" height="58" />
                    </g>

                    {/* Golden Ratio Reference Axis */}
                    <circle
                      cx="200"
                      cy="220"
                      r="140"
                      stroke="var(--gold)"
                      strokeOpacity="0.18"
                      fill="none"
                      strokeDasharray="4 4"
                    />
                    <circle cx="200" cy="220" r="4" fill="var(--gold)" />

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

                  {/* Gradient & Caption */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-background/85 via-transparent to-transparent"
                    aria-hidden="true"
                  />
                  <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 flex items-center justify-between border-t border-border/60 pt-3 sm:pt-4">
                    <p className="text-[0.625rem] tracking-[0.24em] text-muted-foreground uppercase font-sans">
                      Stone becomes structure. Structure becomes software.
                    </p>
                    <KnowledgePoint size="sm" pulse={false} />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Dedicated Connect with the Builder Section */}
      <section
        id="builder"
        aria-label="Connect with the Builder"
        className="grain relative overflow-hidden border-t border-border py-20 sm:py-28 lg:py-32 bg-card transition-colors duration-400"
      >
        <div className="hairline-grid absolute inset-0 opacity-20" aria-hidden="true" />
        <div className="grain-layer" aria-hidden="true" />

        <div className="relative mx-auto max-w-[88rem] px-4 sm:px-6 lg:px-12">
          <div className="grid gap-10 sm:gap-12 lg:grid-cols-12 lg:items-center">
            {/* Builder Philosophy & Intro */}
            <div className="lg:col-span-5">
              <Reveal>
                <div className="flex items-center gap-2.5">
                  <KnowledgePoint size="sm" pulse={true} />
                  <p className="eyebrow text-[0.625rem] sm:text-xs">Connect with the Builder</p>
                </div>

                <h2 className="display mt-4 sm:mt-5 text-3xl sm:text-5xl font-light text-foreground leading-[1.1]">
                  Built by a Learner.
                </h2>

                <blockquote className="mt-5 sm:mt-6 border-l-2 border-gold/60 pl-4 text-base sm:text-lg font-serif italic text-primary leading-relaxed">
                  “Vidyarthi is built around a simple belief: the best technology begins with
                  understanding.”
                </blockquote>

                <div className="mt-6 sm:mt-8">
                  <p className="display text-2xl font-light text-foreground">Soubhagya Jena</p>
                  <p className="text-xs font-mono tracking-widest text-gold uppercase mt-1">
                    Founder / Builder · Vidyarthi Studio
                  </p>
                  <p className="mt-2.5 text-xs text-muted-foreground font-mono leading-relaxed">
                    Software engineer, systems architect, and student of timeless craftsmanship.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Official Interactive Profile Matrix */}
            <div className="lg:col-span-7">
              <Reveal delay={0.1}>
                <div className="grid gap-3 sm:gap-4 sm:grid-cols-3">
                  {socialLinks.map((soc) => (
                    <a
                      key={soc.name}
                      href={soc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={soc.label}
                      className="group flex flex-col justify-between border border-border/70 bg-background/80 p-5 sm:p-6 transition-all duration-500 hover:border-gold hover:bg-background hover:shadow-architectural focus-ring rounded-xs cursor-pointer"
                    >
                      <div>
                        <div className="flex items-center justify-between text-muted-foreground transition-colors group-hover:text-gold">
                          <span className="p-2 border border-border/60 bg-card/60 rounded-xs group-hover:border-gold/50">
                            {soc.icon}
                          </span>
                          <span
                            className="font-mono text-sm group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                            aria-hidden="true"
                          >
                            ↗
                          </span>
                        </div>

                        <h3 className="display mt-5 sm:mt-6 text-xl sm:text-2xl font-light text-foreground group-hover:text-gold transition-colors">
                          {soc.name}
                        </h3>

                        <p className="mt-1 text-xs font-mono text-primary font-medium">
                          {soc.handle}
                        </p>
                      </div>

                      <p className="mt-5 sm:mt-6 border-t border-border/50 pt-3 text-[0.6875rem] text-muted-foreground font-sans">
                        {soc.detail}
                      </p>
                    </a>
                  ))}
                </div>

                {/* Micro Telemetry Bar */}
                <div className="mt-4 sm:mt-6 flex flex-wrap items-center justify-between gap-3 sm:gap-4 border border-border/60 bg-background/50 px-4 sm:px-5 py-3 text-[0.625rem] font-mono tracking-widest text-muted-foreground uppercase">
                  <span>LOCATION: HYDERABAD / REMOTE</span>
                  <span>·</span>
                  <span className="text-teal">DIRECT CONSULTATIONS OPEN</span>
                  <span>·</span>
                  <span>TIMEZONE: IST (UTC+5:30)</span>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Brand Quote Experience */}
      <section
        aria-label="Core Philosophy Quote"
        className="grain relative overflow-hidden border-t border-border py-20 sm:py-28 lg:py-40 bg-background transition-colors duration-400"
      >
        <div className="grain-layer" aria-hidden="true" />
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,color-mix(in_oklab,var(--gold)_10%,transparent),transparent_65%)]"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 text-center lg:px-12">
          <Reveal>
            <div className="inline-flex items-center gap-2.5">
              <KnowledgePoint size="sm" pulse={true} />
              <p className="eyebrow text-[0.625rem] sm:text-xs">The Vidyarthi Truth</p>
            </div>

            <blockquote className="display mt-8 sm:mt-10 text-2xl sm:text-5xl lg:text-[4.25rem] font-light leading-[1.18] text-foreground">
              “Knowledge begins with curiosity. Technology begins with understanding.”
            </blockquote>

            <div
              className="rule-line-center mx-auto mt-8 sm:mt-12 w-36 sm:w-48"
              aria-hidden="true"
            />

            <p className="mt-5 sm:mt-6 text-xs font-mono tracking-widest text-muted-foreground uppercase">
              STUDIO MAXIM // 2026
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
