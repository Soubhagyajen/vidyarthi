import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Reveal, KnowledgePoint, CALM_EASE } from "./Reveal";

interface Stage {
  id: string;
  step: string;
  title: string;
  subtitle: string;
  caption: string;
  phase: string;
}

const stages: Stage[] = [
  {
    id: "01",
    step: "Stage I",
    title: "Knowledge",
    subtitle: "The Observation",
    caption:
      "Handwritten notes, business context, operational friction, and the quiet questions that reveal how your team actually works.",
    phase: "Manuscript & Inquiry",
  },
  {
    id: "02",
    step: "Stage II",
    title: "Idea",
    subtitle: "The Architecture",
    caption:
      "Geometry, structural planning, database schemas, and a considered blueprint designed around real workflows.",
    phase: "Blueprint & Geometry",
  },
  {
    id: "03",
    step: "Stage III",
    title: "Technology",
    subtitle: "The Living System",
    caption:
      "A fast, bespoke, deployed software system with automated pipelines, real-time intelligence, and lasting utility.",
    phase: "Software & Execution",
  },
];

export function Philosophy() {
  const [activeStage, setActiveStage] = useState(1);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-label="The Beginning Philosophy"
      className="grain relative overflow-hidden border-t border-border py-20 sm:py-28 lg:py-40 bg-background transition-colors duration-400"
    >
      <div className="hairline-grid absolute inset-0 opacity-30" aria-hidden="true" />
      <div className="grain-layer" aria-hidden="true" />

      <div className="relative mx-auto max-w-[88rem] px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="grid gap-8 lg:gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Reveal>
              <div className="flex items-center gap-2.5 sm:gap-3">
                <KnowledgePoint size="sm" pulse={false} />
                <p className="eyebrow text-[0.625rem] sm:text-xs">The Beginning</p>
              </div>
              <div className="rule-line mt-4 sm:mt-5 w-24 sm:w-28" aria-hidden="true" />
              <h2 className="display mt-5 sm:mt-6 text-3xl sm:text-5xl lg:text-[4.25rem] text-foreground font-light leading-[1.08]">
                A Vidyarthi is
                <br />
                always learning.
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-6 lg:pt-14">
            <Reveal delay={0.1}>
              <p className="text-sm sm:text-base leading-relaxed text-muted-foreground lg:text-lg font-normal">
                We believe great technology begins with understanding. Before we design, develop or
                automate anything, we learn how your business works, where the friction exists, and
                what you are trying to achieve.
              </p>

              {/* Stage Progress Tracker */}
              <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-mono tracking-widest text-muted-foreground">
                <span className="text-gold">CONTINUOUS EVOLUTION:</span>
                <span>OBSERVE → STRUCTURE → DEPLOY</span>
              </div>
            </Reveal>
          </div>
        </div>

        {/* The Continuous Connected Conduit Canvas */}
        <div className="relative mt-14 sm:mt-20">
          {/* Connecting Architectural Conduit Line */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-[28px] inset-x-12 h-px bg-gradient-to-r from-gold/30 via-gold/60 to-teal/40 z-0"
          >
            {/* Traveling Knowledge Point along the conduit */}
            <motion.div
              className="absolute -top-[3.5px] h-2 w-2 rounded-full bg-gold shadow-[0_0_12px_var(--gold)]"
              animate={
                shouldReduceMotion
                  ? { left: `${(activeStage / 2) * 90}%` }
                  : {
                      left: ["5%", "50%", "95%", "5%"],
                    }
              }
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          {/* Three Evolving Panels */}
          <div className="grid gap-px border border-border bg-border lg:grid-cols-3 relative z-10">
            {stages.map((s, idx) => {
              const isActive = activeStage === idx;
              return (
                <div
                  key={s.id}
                  onMouseEnter={() => setActiveStage(idx)}
                  className={`group relative h-full p-6 sm:p-8 lg:p-10 transition-all duration-500 cursor-pointer ${
                    isActive ? "bg-card shadow-lift" : "bg-background hover:bg-card/70"
                  }`}
                >
                  {/* Top Phase Header with Stage Marker */}
                  <div className="flex items-center justify-between border-b border-border/60 pb-4 sm:pb-5">
                    <div className="flex items-center gap-2.5">
                      <span
                        className={`font-mono text-xs font-semibold ${
                          isActive ? "text-gold" : "text-stone"
                        }`}
                      >
                        {s.id}
                      </span>
                      <span className="h-1 w-1 rounded-full bg-border" />
                      <span className="text-[0.625rem] font-mono tracking-widest uppercase text-muted-foreground">
                        {s.step}
                      </span>
                    </div>

                    <span
                      className={`text-[0.625rem] font-semibold tracking-[0.24em] uppercase font-sans px-2.5 py-1 rounded-xs border transition-colors ${
                        isActive
                          ? "border-gold/50 bg-gold/10 text-gold"
                          : "border-border/40 text-muted-foreground"
                      }`}
                    >
                      {s.phase}
                    </span>
                  </div>

                  {/* Stage Visual Geometry Artifact */}
                  <div className="mt-6 sm:mt-8 h-36 sm:h-40 w-full rounded-xs border border-border/40 bg-background/50 p-3 sm:p-4 transition-all duration-500 group-hover:border-gold/40 flex items-center justify-center">
                    {idx === 0 && (
                      <svg
                        viewBox="0 0 240 140"
                        className="h-full w-full"
                        aria-hidden="true"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        {/* Manuscript Organic Guidelines */}
                        <g stroke="var(--stone)" strokeOpacity="0.3" strokeWidth="0.75">
                          <line x1="20" y1="20" x2="220" y2="20" strokeDasharray="3 3" />
                          <line x1="20" y1="120" x2="220" y2="120" strokeDasharray="3 3" />
                          <line x1="50" y1="10" x2="50" y2="130" strokeDasharray="2 4" />
                        </g>

                        {/* Hand-scribed Waveforms with Animated Stroke Drawing */}
                        {[38, 54, 70, 86, 102].map((y, i) => (
                          <motion.path
                            key={y}
                            d={`M 60 ${y} Q 95 ${y - (i % 2 === 0 ? 5 : -4)}, 135 ${y} T 210 ${y}`}
                            fill="none"
                            stroke="var(--gold)"
                            strokeOpacity={isActive ? 0.9 : 0.5}
                            strokeWidth={i === 2 ? "1.4" : "0.9"}
                            initial={{ pathLength: 0.3 }}
                            whileInView={{ pathLength: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, delay: i * 0.1, ease: CALM_EASE }}
                          />
                        ))}

                        {/* Knowledge Point Spark on Observation */}
                        <circle
                          cx="60"
                          cy="70"
                          r="3"
                          fill="var(--gold)"
                          className={isActive ? "animate-pulse" : ""}
                        />
                        <text
                          x="60"
                          y="125"
                          fill="var(--stone)"
                          fontSize="7"
                          fontFamily="monospace"
                          letterSpacing="0.1em"
                        >
                          // RAW INQUIRY · OBSERVATION
                        </text>
                      </svg>
                    )}

                    {idx === 1 && (
                      <svg
                        viewBox="0 0 240 140"
                        className="h-full w-full"
                        aria-hidden="true"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        {/* Isometric Blueprint Scaffolding */}
                        <g
                          stroke={isActive ? "var(--gold)" : "var(--stone)"}
                          strokeOpacity={isActive ? 0.8 : 0.45}
                          strokeWidth="0.85"
                          fill="none"
                        >
                          {/* Structural Wireframe Boxes */}
                          <motion.rect
                            x="30"
                            y="24"
                            width="75"
                            height="42"
                            strokeDasharray="2 2"
                            initial={{ pathLength: 0.5 }}
                            whileInView={{ pathLength: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: CALM_EASE }}
                          />
                          <motion.rect
                            x="30"
                            y="74"
                            width="75"
                            height="42"
                            initial={{ pathLength: 0.5 }}
                            whileInView={{ pathLength: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, delay: 0.2, ease: CALM_EASE }}
                          />
                          <motion.rect
                            x="120"
                            y="24"
                            width="90"
                            height="92"
                            initial={{ pathLength: 0.5 }}
                            whileInView={{ pathLength: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.4, delay: 0.3, ease: CALM_EASE }}
                          />
                          <line x1="120" y1="52" x2="210" y2="52" />
                          <line x1="120" y1="80" x2="210" y2="80" />
                        </g>

                        {/* Architectural Axis & Proportions */}
                        <g stroke="var(--gold)" strokeOpacity="0.85" strokeWidth="1.1" fill="none">
                          <polyline points="40,45 65,35 90,45" />
                          <polyline points="40,95 65,85 90,95" />
                          <line x1="135" y1="38" x2="195" y2="38" strokeDasharray="4 2" />
                        </g>

                        <circle cx="120" cy="24" r="2.5" fill="var(--gold)" />
                        <text
                          x="30"
                          y="128"
                          fill="var(--stone)"
                          fontSize="7"
                          fontFamily="monospace"
                          letterSpacing="0.1em"
                        >
                          // BLUEPRINT MATRIX · GEOMETRY
                        </text>
                      </svg>
                    )}

                    {idx === 2 && (
                      <svg
                        viewBox="0 0 240 140"
                        className="h-full w-full"
                        aria-hidden="true"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        {/* Digital Interface & Active Telemetry */}
                        <rect
                          x="20"
                          y="18"
                          width="200"
                          height="96"
                          fill="none"
                          stroke="var(--teal)"
                          strokeOpacity={isActive ? 0.7 : 0.4}
                          strokeWidth="0.85"
                        />
                        <line
                          x1="20"
                          y1="38"
                          x2="220"
                          y2="38"
                          stroke="var(--teal)"
                          strokeOpacity="0.3"
                        />

                        {/* Working Modules */}
                        <g fill="var(--teal)" fillOpacity="0.14">
                          <rect x="32" y="48" width="55" height="28" />
                          <rect x="32" y="82" width="55" height="24" />
                          <rect x="95" y="48" width="112" height="58" />
                        </g>

                        {/* Real-time Data Vector Stream with Motion */}
                        <motion.path
                          d="M 105 92 L 125 70 L 145 82 L 165 58 L 185 68 L 200 52"
                          stroke="var(--teal)"
                          strokeWidth="1.4"
                          fill="none"
                          initial={{ pathLength: 0 }}
                          whileInView={{ pathLength: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.6, ease: CALM_EASE }}
                        />
                        <circle cx="200" cy="52" r="3.5" fill="var(--teal)">
                          <animate
                            attributeName="opacity"
                            values="0.4;1;0.4"
                            dur="2s"
                            repeatCount="indefinite"
                          />
                        </circle>

                        <circle cx="30" cy="28" r="2" fill="var(--teal)" />
                        <circle cx="38" cy="28" r="2" fill="var(--gold)" />

                        <text
                          x="32"
                          y="126"
                          fill="var(--teal)"
                          fontSize="7"
                          fontFamily="monospace"
                          letterSpacing="0.1em"
                        >
                          // LIVE SYSTEM DEPLOYED · AUTOMATED
                        </text>
                      </svg>
                    )}
                  </div>

                  {/* Stage Title & Editorial Copy */}
                  <div className="mt-6 sm:mt-8">
                    <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase font-sans">
                      {s.subtitle}
                    </p>
                    <h3 className="display mt-2 text-2xl sm:text-3xl font-light text-foreground">
                      {s.title}
                    </h3>
                    <p className="mt-3 sm:mt-4 text-xs sm:text-sm leading-relaxed text-muted-foreground font-normal">
                      {s.caption}
                    </p>
                  </div>

                  {/* Active Highlight Line */}
                  <div
                    className={`absolute bottom-0 inset-x-0 h-0.5 transition-all duration-500 ${
                      isActive
                        ? "bg-gradient-to-r from-gold via-gold to-teal opacity-100"
                        : "opacity-0"
                    }`}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
