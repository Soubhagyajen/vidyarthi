import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { SectionHeading, Reveal, KnowledgePoint, CALM_EASE } from "./Reveal";

interface ServiceItem {
  id: string;
  kicker: string;
  title: string;
  copy: string;
  outcome: string;
  framework: string;
  deliverables: string[];
}

const services: ServiceItem[] = [
  {
    id: "01",
    kicker: "Digital Presence & Brand Systems",
    title: "Websites & Social Media Systems",
    copy: "Beyond the website, Vidyarthi helps businesses build the systems and content that keep their digital presence alive — from bespoke corporate flagships to ongoing brand communication.",
    outcome:
      "Translates traditional operational strength into an authoritative, active digital footprint.",
    framework: "UNDERSTAND → CREATE → BUILD → GROW",
    deliverables: [
      "Corporate Web Flagships",
      "Social Media Management",
      "Brand Content Systems",
      "Online Identity Architecture",
    ],
  },
  {
    id: "02",
    kicker: "Operational Software",
    title: "Custom Business Systems",
    copy: "Purpose-built operational software for BOQ quantification, material tracking, client portals, and internal estimation workflows tailored to domain realities.",
    outcome: "Replaces chaotic spreadsheets with one unified, real-time operating system.",
    framework: "AUDIT → STRUCTURE → CODE → DEPLOY",
    deliverables: [
      "BOQ & Cost Engines",
      "Inventory Matrices",
      "Custom Client Portals",
      "Role-Based Security",
    ],
  },
  {
    id: "03",
    kicker: "Intelligent Systems",
    title: "AI & Workflow Automation",
    copy: "Autonomous AI pipelines and intelligent connectors that ingest unstructured documents, parse complex PDFs, and automate repetitive operational bottlenecks.",
    outcome: "Saves hundreds of manual labor hours monthly while eliminating operational errors.",
    framework: "INGEST → PARSE → EXECUTE → VERIFY",
    deliverables: [
      "Document Ingestion (PDF/OCR)",
      "Autonomous Pipelines",
      "Custom LLM Integrations",
      "Webhook Architecture",
    ],
  },
  {
    id: "04",
    kicker: "Digital Strategy",
    title: "Strategy & Ongoing Growth",
    copy: "Data-led performance tuning, technical search optimization, and systematic improvements to compound digital market footprint over time.",
    outcome:
      "Ensures sustainable digital traction, higher conversion rates, and measurable impact.",
    framework: "MEASURE → OPTIMIZE → EXPAND → SCALE",
    deliverables: [
      "Technical SEO",
      "Conversion Engineering",
      "Real-Time Telemetry",
      "Lifecycle Auditing",
    ],
  },
];

export function Services() {
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="services"
      aria-label="Studio Services"
      className="relative border-t border-border py-28 lg:py-40 bg-background"
    >
      <div className="mx-auto max-w-[88rem] px-6 lg:px-12">
        <SectionHeading
          label="What We Build"
          title="Technology for a Smarter Tomorrow."
          intro="Four core disciplines unified by one philosophy: we architect software and digital presence around the natural rhythm of your business."
        />

        {/* 2x2 Architectural Grid Matrix */}
        <div className="mt-16 grid gap-px border border-border bg-border md:grid-cols-2">
          {services.map((s, i) => {
            const isHovered = hoveredService === s.id;
            return (
              <Reveal key={s.id} delay={i * 0.08} className="bg-background">
                <article
                  onMouseEnter={() => setHoveredService(s.id)}
                  onMouseLeave={() => setHoveredService(null)}
                  className="group relative flex h-full flex-col justify-between bg-background p-8 transition-all duration-700 hover:bg-card hover:shadow-architectural lg:p-12"
                >
                  {/* Top Bar: Identifier & Architectural Diagram */}
                  <div>
                    <div className="flex items-start justify-between gap-6">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="index-num">{s.id}</span>
                          <span className="h-1 w-1 rounded-full bg-border" />
                          <p className="text-[0.625rem] font-semibold tracking-[0.28em] text-muted-foreground uppercase font-sans">
                            {s.kicker}
                          </p>
                        </div>
                        <h3 className="display mt-4 text-3xl font-light text-foreground lg:text-4xl">
                          {s.title}
                        </h3>
                      </div>

                      {/* Geometric Architectural Diagram */}
                      <div className="h-24 w-28 shrink-0 rounded-xs border border-border/50 bg-background/60 p-2 transition-all duration-500 group-hover:border-gold/60 group-hover:scale-105 flex items-center justify-center">
                        {i === 0 && (
                          <svg viewBox="0 0 100 80" className="h-full w-full" aria-hidden="true">
                            <ellipse
                              cx="50"
                              cy="68"
                              rx="32"
                              ry="6"
                              fill="none"
                              stroke="var(--stone)"
                              strokeOpacity="0.4"
                            />
                            <rect
                              x="24"
                              y="58"
                              width="52"
                              height="10"
                              fill="none"
                              stroke="var(--stone)"
                              strokeOpacity="0.5"
                            />
                            <circle
                              cx="50"
                              cy="34"
                              r="20"
                              fill="none"
                              stroke="var(--gold)"
                              strokeOpacity={isHovered ? 0.95 : 0.65}
                            />
                            <ellipse
                              cx="50"
                              cy="34"
                              rx="20"
                              ry="7"
                              fill="none"
                              stroke="var(--teal)"
                              strokeOpacity={isHovered ? 0.85 : 0.45}
                            />
                            <circle cx="50" cy="34" r="2.5" fill="var(--gold)" />
                          </svg>
                        )}

                        {i === 1 && (
                          <svg viewBox="0 0 100 80" className="h-full w-full" aria-hidden="true">
                            <g
                              stroke="var(--gold)"
                              strokeOpacity={isHovered ? 0.9 : 0.65}
                              strokeWidth="0.85"
                              fill="none"
                            >
                              <path d="M30 26 L50 16 L70 26 L70 52 L50 62 L30 52 Z" />
                              <path d="M30 26 L50 36 L70 26" />
                              <path d="M50 36 L50 62" />
                            </g>
                            <g
                              stroke="var(--teal)"
                              strokeOpacity="0.8"
                              strokeWidth="1.1"
                              fill="none"
                            >
                              <line x1="36" y1="32" x2="46" y2="38" />
                              <line x1="36" y1="40" x2="44" y2="45" />
                              <line x1="56" y1="38" x2="66" y2="32" />
                            </g>
                            <circle cx="50" cy="16" r="2.5" fill="var(--gold)" />
                          </svg>
                        )}

                        {i === 2 && (
                          <svg viewBox="0 0 100 80" className="h-full w-full" aria-hidden="true">
                            <g
                              stroke="var(--teal)"
                              strokeOpacity={isHovered ? 0.85 : 0.5}
                              strokeWidth="0.85"
                            >
                              <line x1="50" y1="34" x2="30" y2="20" />
                              <line x1="50" y1="34" x2="70" y2="18" />
                              <line x1="50" y1="34" x2="26" y2="48" />
                              <line x1="50" y1="34" x2="74" y2="46" />
                              <line x1="50" y1="34" x2="50" y2="12" />
                            </g>
                            <g fill="var(--gold)">
                              <circle cx="50" cy="34" r="3.5" />
                              <circle cx="30" cy="20" r="2" />
                              <circle cx="70" cy="18" r="2" />
                              <circle cx="26" cy="48" r="2" />
                              <circle cx="74" cy="46" r="2" />
                              <circle cx="50" cy="12" r="2.5" fill="var(--teal)" />
                            </g>
                          </svg>
                        )}

                        {i === 3 && (
                          <svg viewBox="0 0 100 80" className="h-full w-full" aria-hidden="true">
                            <g
                              stroke="var(--gold)"
                              strokeOpacity={isHovered ? 0.85 : 0.55}
                              strokeWidth="0.85"
                              fill="none"
                            >
                              <polygon points="50,14 74,56 26,56" />
                              <line x1="38" y1="35" x2="62" y2="35" />
                              <line x1="32" y1="46" x2="68" y2="46" />
                            </g>
                            <g
                              stroke="var(--teal)"
                              strokeOpacity="0.85"
                              strokeWidth="1.3"
                              fill="none"
                            >
                              <polyline points="30,52 40,42 50,47 62,28 70,34" />
                              <circle cx="70" cy="34" r="2.5" fill="var(--teal)" />
                            </g>
                          </svg>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="mt-5 text-sm leading-relaxed text-muted-foreground font-normal">
                      {s.copy}
                    </p>

                    {/* Framework Pathway */}
                    <div className="mt-4 flex items-center gap-2 text-[0.625rem] font-mono tracking-wider text-teal">
                      <span>FLOW:</span>
                      <span>{s.framework}</span>
                    </div>

                    {/* Business Outcome Box */}
                    <div className="mt-5 border-l-2 border-primary/60 bg-background/50 pl-4 py-2.5 transition-colors group-hover:border-gold">
                      <p className="text-[0.625rem] font-mono tracking-wider uppercase text-gold">
                        Business Outcome
                      </p>
                      <p className="mt-1 text-xs text-foreground font-medium leading-relaxed">
                        {s.outcome}
                      </p>
                    </div>

                    {/* Deliverables Tags */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {s.deliverables.map((d) => (
                        <span
                          key={d}
                          className="border border-border/60 bg-background/40 px-2.5 py-1 text-[0.625rem] font-mono tracking-wider uppercase text-stone transition-colors group-hover:border-border"
                        >
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action Link */}
                  <div className="mt-10 pt-6 border-t border-border/50 flex items-center justify-between">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-3 text-[0.6875rem] font-semibold tracking-[0.22em] text-primary uppercase focus-ring rounded-xs py-1 transition-colors hover:text-gold"
                    >
                      Inquire About {s.kicker}
                      <span
                        className="transition-transform duration-500 group-hover:translate-x-1.5"
                        aria-hidden="true"
                      >
                        →
                      </span>
                    </a>

                    <KnowledgePoint
                      size="sm"
                      pulse={false}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
