import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import heroImage from "@/assets/hero-gurukul.jpg";
import { KnowledgePoint, CALM_EASE } from "./Reveal";

const phases = [
  {
    id: "01",
    label: "Ancient Foundation",
    detail: "Observation & Manuscript",
    desc: "Understanding root business processes from quiet human observation.",
  },
  {
    id: "02",
    label: "Geometric Blueprint",
    detail: "Proportion & Structure",
    desc: "Organizing chaos into disciplined relational database schemas.",
  },
  {
    id: "03",
    label: "Digital System",
    detail: "Software & Automation",
    desc: "Deploying high-velocity web platforms and autonomous workflows.",
  },
];

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const [activePhase, setActivePhase] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Dynamic Scroll Transformations
  const blueprintOpacity = useTransform(scrollYProgress, [0, 0.4, 0.85], [0.6, 0.95, 0.3]);
  const digitalGridOpacity = useTransform(scrollYProgress, [0, 0.35, 0.75], [0.35, 0.8, 0.95]);
  const heroImageScale = useTransform(scrollYProgress, [0, 1], [1.02, 1.08]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 40]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || shouldReduceMotion) return;

    let frame = 0;
    const onMove = (e: PointerEvent) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const rect = el.getBoundingClientRect();
        setPointer({
          x: (e.clientX - rect.left) / rect.width - 0.5,
          y: (e.clientY - rect.top) / rect.height - 0.5,
        });
      });
    };
    el.addEventListener("pointermove", onMove);
    return () => {
      el.removeEventListener("pointermove", onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [shouldReduceMotion]);

  return (
    <section
      id="top"
      ref={containerRef}
      aria-label="Introduction"
      className="grain relative flex min-h-[100svh] items-end overflow-hidden pt-24 pb-14 sm:pt-28 sm:pb-16 lg:pt-36 lg:pb-24 bg-background transition-colors duration-400"
    >
      {/* Layer 1: Photographic Courtyard Base with Architectural Print Styling */}
      <motion.div
        className="absolute inset-[-2%] sm:inset-[-3%] transition-transform duration-[1200ms] ease-out pointer-events-none"
        style={{
          transform: shouldReduceMotion
            ? "none"
            : `translate3d(${pointer.x * -12}px, ${pointer.y * -8}px, 0)`,
          scale: shouldReduceMotion ? 1 : heroImageScale,
        }}
      >
        <img
          src={heroImage}
          alt="Atmospheric architectural courtyard blending classical stonework with subtle modern digital interfaces"
          width={1920}
          height={1088}
          loading="eager"
          fetchPriority="high"
          className="h-full w-full object-cover object-[center_28%] sm:object-[center_35%] lg:object-center transition-[filter,opacity] duration-500 contrast-[1.04] brightness-[0.98] saturate-[0.92] dark:brightness-[0.72] dark:contrast-[1.12]"
        />
      </motion.div>

      {/* Layer 2: Theme-Adaptive Atmospheric Wash */}
      {/* Dark theme vignette & gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-background via-background/75 to-background/30 dark:block hidden transition-colors duration-400 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,transparent_20%,var(--background)_90%)] opacity-75 dark:block hidden transition-colors duration-400 pointer-events-none"
        aria-hidden="true"
      />

      {/* Light theme handmade architectural parchment print wash */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/35 dark:hidden block transition-colors duration-400 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,transparent_30%,var(--background)_92%)] opacity-60 dark:hidden block transition-colors duration-400 pointer-events-none"
        aria-hidden="true"
      />
      {/* Warm parchment tint overlay giving the photo a tactile handmade paper texture */}
      <div
        className="absolute inset-0 bg-[#E8E0D0]/18 mix-blend-color dark:hidden block transition-colors duration-400 pointer-events-none"
        aria-hidden="true"
      />

      {/* Layer 3: Self-Drawing Animated Architectural Blueprint Layer */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 transition-transform duration-[1400ms] ease-out overflow-hidden"
        style={{
          opacity: blueprintOpacity,
          transform: shouldReduceMotion
            ? "none"
            : `translate3d(${pointer.x * 16}px, ${pointer.y * 12}px, 0)`,
        }}
      >
        <svg
          viewBox="0 0 1440 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full object-cover opacity-75"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Animated Golden Ratio Arcs & Cardinal Axes */}
          <g
            stroke="var(--gold)"
            strokeOpacity={activePhase >= 1 ? "0.65" : "0.4"}
            strokeWidth="0.8"
          >
            <motion.line
              x1="120"
              y1="0"
              x2="120"
              y2="900"
              strokeDasharray="4 8"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.6, ease: CALM_EASE }}
            />
            <motion.line
              x1="720"
              y1="0"
              x2="720"
              y2="900"
              strokeDasharray="2 6"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2.0, ease: CALM_EASE }}
            />
            <motion.line
              x1="1320"
              y1="0"
              x2="1320"
              y2="900"
              strokeDasharray="4 8"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.6, ease: CALM_EASE }}
            />
            <motion.line
              x1="0"
              y1="450"
              x2="1440"
              y2="450"
              strokeDasharray="4 8"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2.2, ease: CALM_EASE }}
            />

            {/* Concentric Golden Proportion Circles */}
            <motion.circle
              cx="720"
              cy="450"
              r="320"
              initial={{ pathLength: 0, rotate: -90 }}
              animate={{ pathLength: 1, rotate: 0 }}
              transition={{ duration: 2.5, ease: CALM_EASE }}
            />
            <motion.circle
              cx="720"
              cy="450"
              r="180"
              strokeDasharray="3 6"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2.2, delay: 0.25, ease: CALM_EASE }}
            />
            <circle cx="720" cy="450" r="480" strokeOpacity="0.15" />

            {/* Isometric Perspective Scaffold */}
            <motion.path
              d="M 400 200 L 720 120 L 1040 200 L 720 280 Z"
              stroke="var(--gold)"
              strokeOpacity="0.35"
              strokeDasharray="3 3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2.0, delay: 0.4, ease: CALM_EASE }}
            />
          </g>

          {/* Dynamic Telemetry Coordinates */}
          <g
            fill="var(--gold)"
            fillOpacity="0.8"
            className="text-[10px] font-mono tracking-widest hidden sm:block"
          >
            <text x="135" y="60">
              SEC_01 // 28°36'N · 77°12'E
            </text>
            <text x="135" y="80">
              SCALE: 1:1.618 // GOLDEN_RATIO
            </text>
            <text x="1140" y="60">
              SYS_V2 // ARCHITECTURAL_MATRIX
            </text>
            <text x="1140" y="80">
              NODE: ACTIVE_CALIBRATION
            </text>
          </g>
        </svg>
      </motion.div>

      {/* Layer 4: Architectural Teal Digital Interface Telemetry Layer */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 transition-transform duration-[1600ms] ease-out overflow-hidden"
        style={{
          opacity: digitalGridOpacity,
          transform: shouldReduceMotion
            ? "none"
            : `translate3d(${pointer.x * -14}px, ${pointer.y * -10}px, 0)`,
        }}
      >
        <svg
          viewBox="0 0 1440 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full object-cover opacity-65"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Wireframe Matrix Nodes */}
          <g stroke="var(--teal)" strokeOpacity="0.5" strokeWidth="0.8">
            <motion.rect
              x="760"
              y="220"
              width="460"
              height="280"
              strokeDasharray="4 4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2.2, delay: 0.35, ease: CALM_EASE }}
            />
            <rect x="790" y="250" width="180" height="100" />
            <rect x="1000" y="250" width="190" height="220" />
            <line x1="760" y1="380" x2="970" y2="380" />
            <polyline points="810,320 860,280 910,300 950,270" strokeWidth="1.4" />
          </g>

          {/* Traveling Telemetry Node */}
          <circle cx="950" cy="270" r="3.5" fill="var(--teal)">
            <animate
              attributeName="opacity"
              values="0.3;1;0.3"
              dur="2.2s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="790" cy="250" r="3" fill="var(--gold)" />
          <circle cx="1190" cy="470" r="3" fill="var(--gold)" />
        </svg>
      </motion.div>

      {/* Grain Layer */}
      <div className="grain-layer" aria-hidden="true" />

      {/* Vertical Side Architectural Track */}
      <aside
        aria-hidden="true"
        className="absolute top-1/2 left-6 hidden -translate-y-1/2 lg:block z-10 pointer-events-none"
      >
        <div className="flex flex-col items-center gap-5">
          <span className="h-12 w-px bg-gradient-to-b from-transparent via-primary/50 to-primary/80" />
          <KnowledgePoint size="sm" pulse={true} />
          {["Learn", "Build", "Solve"].map((w) => (
            <span
              key={w}
              className="text-[0.625rem] font-semibold tracking-[0.38em] text-muted-foreground uppercase font-sans hover:text-gold transition-colors duration-300"
              style={{ writingMode: "vertical-rl" }}
            >
              {w}
            </span>
          ))}
          <span className="h-12 w-px bg-gradient-to-t from-transparent via-primary/50 to-primary/80" />
        </div>
      </aside>

      {/* Main Content Presentation */}
      <motion.div
        style={{ y: shouldReduceMotion ? 0 : textY }}
        className="relative mx-auto w-full max-w-[88rem] px-4 sm:px-6 lg:px-12 z-20"
      >
        {/* Top Eyebrow + Knowledge Spark */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: CALM_EASE }}
          className="flex items-center gap-2.5 sm:gap-3"
        >
          <KnowledgePoint size="md" pulse={true} />
          <p className="eyebrow text-[0.625rem] sm:text-xs">Ancient Wisdom · Modern Solutions</p>
        </motion.div>

        {/* Studio Moniker with Fluid Scaling */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.12, ease: CALM_EASE }}
          className="display mt-4 sm:mt-6 text-[15vw] sm:text-[18vw] md:text-[14vw] lg:text-[11.5rem] xl:text-[13rem] font-light leading-[0.86] tracking-tight text-foreground break-words"
        >
          Vidyarthi
        </motion.h1>

        {/* Proposition & Interaction Grid */}
        <div className="mt-6 sm:mt-8 grid gap-8 sm:gap-10 lg:grid-cols-12 lg:items-end">
          {/* Main Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.25, ease: CALM_EASE }}
            className="lg:col-span-7"
          >
            <h2 className="display text-2xl sm:text-4xl lg:text-[3.25rem] font-light text-foreground leading-[1.12]">
              We build technology around the way your business works.
            </h2>

            {/* Architectural Transformation Phase Selector */}
            <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-2 border-t border-border/80 pt-5 sm:pt-6">
              {phases.map((p, idx) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setActivePhase(idx)}
                  className={`group flex items-center gap-2 px-3 py-2 text-xs transition-all duration-300 focus-ring rounded-xs border cursor-pointer ${
                    activePhase === idx
                      ? "border-gold/80 bg-card text-foreground shadow-[0_0_16px_-6px_var(--gold)]"
                      : "border-border/50 bg-card/60 text-muted-foreground hover:border-border hover:text-foreground"
                  }`}
                >
                  <span
                    className={`font-mono text-[0.6875rem] ${
                      activePhase === idx ? "text-gold font-bold" : "text-stone"
                    }`}
                  >
                    {p.id}
                  </span>
                  <span className="font-sans text-[0.6875rem] font-semibold tracking-wider uppercase">
                    {p.label}
                  </span>
                  {activePhase === idx && <KnowledgePoint size="sm" pulse={false} />}
                </button>
              ))}
            </div>

            <p className="mt-2.5 sm:mt-3 text-xs font-mono text-muted-foreground">
              {phases[activePhase]?.desc}
            </p>
          </motion.div>

          {/* Right Column: Explanatory Copy & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.38, ease: CALM_EASE }}
            className="lg:col-span-5"
          >
            <div className="rule-line mb-4 sm:mb-6 w-20 sm:w-24" aria-hidden="true" />
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base font-normal">
              From high-performance digital platforms to custom business software and intelligent
              automation, we turn operational friction into calm, connected digital systems.
            </p>

            {/* CTA Group */}
            <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-2.5 border border-primary bg-primary px-6 sm:px-7 py-3 sm:py-3.5 text-[0.6875rem] sm:text-[0.7rem] font-semibold tracking-[0.2em] text-primary-foreground uppercase shadow-[var(--shadow-glow-gold)] transition-all duration-500 hover:bg-gold-hover hover:border-gold-hover focus-ring rounded-xs"
              >
                Start a Project
                <span
                  className="transition-transform duration-500 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  →
                </span>
              </a>
              <a
                href="#work"
                className="group inline-flex items-center gap-2.5 border border-border bg-card/70 px-6 sm:px-7 py-3 sm:py-3.5 text-[0.6875rem] sm:text-[0.7rem] font-semibold tracking-[0.2em] text-foreground uppercase backdrop-blur-sm transition-all duration-500 hover:border-primary/70 hover:bg-card focus-ring rounded-xs"
              >
                Explore Our Work
                <span
                  className="transition-transform duration-500 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  →
                </span>
              </a>
            </div>

            {/* Studio Principles Micro-Pill */}
            <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-4 text-[0.625rem] font-mono tracking-widest text-muted-foreground uppercase">
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                No Templates
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-teal" />
                Custom Architecture
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-stone" />
                Domain-Specific
              </span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
