import { motion, useReducedMotion } from "motion/react";
import { SectionHeading, Reveal, KnowledgePoint, CALM_EASE } from "./Reveal";

const beforeItems = [
  { label: "Fragmented Excel Sheets", desc: "Version conflicts & broken formulas" },
  { label: "Scattered WhatsApp Threads", desc: "Lost client decisions & untracked scope" },
  { label: "Unstructured PDFs & Paper", desc: "Hours lost to manual data re-entry" },
  { label: "Manual Calculations", desc: "Costly estimation & material quantity errors" },
  { label: "Siloed Team Workflows", desc: "Bottlenecks waiting on static email reports" },
];

const vidyarthiMovements = [
  { step: "01", name: "Understand", desc: "Audit the hidden operational friction" },
  { step: "02", name: "Architect", desc: "Design a bespoke, unified database schema" },
  { step: "03", name: "Engineer", desc: "Build fast, secure software tailored to your team" },
  { step: "04", name: "Automate", desc: "Connect AI workflows and eliminate manual toil" },
];

const afterItems = [
  { label: "Centralized Operational OS", desc: "One real-time source of truth" },
  { label: "Automated Data Ingestion", desc: "Instant extraction from PDFs & spreadsheets" },
  { label: "Role-Based Web Dashboards", desc: "Immediate clarity for leadership & field teams" },
  { label: "Continuous Telemetry", desc: "Live margin alerts & procurement intelligence" },
];

export function Transformation() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-label="Problem to Solution Transformation"
      className="grain relative overflow-hidden border-t border-border py-20 sm:py-28 lg:py-40 bg-background transition-colors duration-400"
    >
      <div className="hairline-grid absolute inset-0 opacity-25" aria-hidden="true" />
      <div className="grain-layer" aria-hidden="true" />

      <div className="relative mx-auto max-w-[88rem] px-4 sm:px-6 lg:px-12">
        <SectionHeading
          label="Problem → Solution"
          title="From Manual to Meaningful."
          intro="Scattered spreadsheets and manual habits become one calm, connected software system."
        />

        {/* 3-Column Architectural Transformation Canvas */}
        <div className="mt-12 sm:mt-16 grid items-stretch gap-px border border-border bg-border lg:grid-cols-3">
          {/* COLUMN 1: BEFORE */}
          <div className="bg-background p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-border/60 pb-4">
                <p className="text-[0.625rem] font-mono font-semibold tracking-[0.28em] text-muted-foreground uppercase">
                  Phase: Before Vidyarthi
                </p>
                <span className="text-[0.625rem] font-mono text-stone uppercase">
                  Friction State
                </span>
              </div>

              <div className="mt-6 sm:mt-8 space-y-3.5">
                {beforeItems.map((b, i) => (
                  <motion.div
                    key={b.label}
                    initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{
                      duration: shouldReduceMotion ? 0.2 : 0.7,
                      delay: i * 0.06,
                      ease: CALM_EASE,
                    }}
                    className="border border-border/60 border-dashed bg-card/40 p-3.5 rounded-xs"
                  >
                    <p className="text-xs font-mono font-medium text-stone">{b.label}</p>
                    <p className="mt-1 text-[0.6875rem] text-muted-foreground/80">{b.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <p className="mt-8 text-xs font-mono text-stone/80 italic border-t border-border/40 pt-4">
              // High operational fatigue & hidden overhead
            </p>
          </div>

          {/* COLUMN 2: VIDYARTHI PROCESS */}
          <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-card">
            <div>
              <div className="flex items-center justify-between border-b border-gold/30 pb-4">
                <div className="flex items-center gap-2">
                  <KnowledgePoint size="sm" pulse={true} />
                  <p className="eyebrow text-[0.625rem] sm:text-xs">The Vidyarthi Intervention</p>
                </div>
                <span className="text-[0.625rem] font-mono text-gold uppercase">Engineered</span>
              </div>

              <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-5">
                {vidyarthiMovements.map((m, i) => (
                  <Reveal key={m.name} delay={0.15 + i * 0.08}>
                    <div className="group">
                      <div className="flex items-baseline gap-3">
                        <span className="index-num font-mono text-xs">{m.step}</span>
                        <span className="display text-xl sm:text-2xl font-light text-foreground group-hover:text-gold transition-colors">
                          {m.name}
                        </span>
                      </div>
                      <p className="mt-1 pl-7 text-xs leading-relaxed text-muted-foreground">
                        {m.desc}
                      </p>
                      <div className="rule-line mt-3 w-full" aria-hidden="true" />
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <p className="mt-8 text-xs leading-relaxed text-muted-foreground border-t border-border/60 pt-4">
              We learn the process before we replace it — ensuring technology adapts to your
              company, never the reverse.
            </p>
          </div>

          {/* COLUMN 3: AFTER */}
          <div className="bg-background p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-teal/30 pb-4">
                <p className="text-[0.625rem] font-mono font-semibold tracking-[0.28em] text-teal uppercase">
                  Phase: The Outcome
                </p>
                <span className="text-[0.625rem] font-mono text-teal uppercase">Clarity State</span>
              </div>

              <div className="mt-6 sm:mt-8 space-y-3.5">
                {afterItems.map((a, i) => (
                  <motion.div
                    key={a.label}
                    initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{
                      duration: shouldReduceMotion ? 0.2 : 0.7,
                      delay: 0.3 + i * 0.06,
                      ease: CALM_EASE,
                    }}
                    className="border border-teal/30 bg-teal/[0.03] p-3.5 rounded-xs flex items-start justify-between gap-3"
                  >
                    <div>
                      <p className="text-xs font-semibold text-foreground font-sans">{a.label}</p>
                      <p className="mt-1 text-[0.6875rem] text-muted-foreground">{a.desc}</p>
                    </div>
                    <span
                      className="h-2 w-2 rounded-full bg-teal shadow-[0_0_10px_var(--teal)] shrink-0 mt-1"
                      aria-hidden="true"
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            <p className="mt-8 text-xs font-mono text-teal/90 border-t border-border/40 pt-4">
              // Zero spreadsheet loss · Compounding productivity
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
