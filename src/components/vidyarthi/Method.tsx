import { useState, useEffect, useRef, useCallback } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  useReducedMotion,
  AnimatePresence,
} from "motion/react";
import { SectionHeading, Reveal, KnowledgePoint, CALM_EASE } from "./Reveal";

interface MethodStep {
  id: string;
  sa: string;
  transliteration: string;
  en: string;
  copy: string;
  deliverable: string;
  blueprintType: string;
  conceptPhase: string;
  angle: number; // in degrees on the 600x600 radar
  x: number; // coordinate on 600x600 viewBox
  y: number;
  annotation: string;
  labelYDevanagari: number;
  labelYEnglish: number;
}

const steps: MethodStep[] = [
  {
    id: "01",
    sa: "जिज्ञासा",
    transliteration: "Jigyāsā",
    en: "Curiosity",
    conceptPhase: "Question · Observation",
    copy: "We ask the penetrating questions others skip. We uncover how your business actually moves, where spreadsheets break, and what quiet friction slows your team down.",
    deliverable: "Operational Discovery Map & Friction Analysis",
    blueprintType: "Inquiry Horizon",
    angle: -120,
    x: 195,
    y: 118,
    labelYDevanagari: 84,
    labelYEnglish: 97,
    annotation: "Q-01 // LATENT FRICTION",
  },
  {
    id: "02",
    sa: "ज्ञान",
    transliteration: "Jñāna",
    en: "Understanding",
    conceptPhase: "Context · Knowledge Graph",
    copy: "Deep domain immersion. Before writing a line of code, we learn your supply chain, BOQ calculations, customer cycles, and business metrics.",
    deliverable: "Domain Knowledge Graph & System Requirements",
    blueprintType: "Knowledge Matrix",
    angle: -60,
    x: 405,
    y: 118,
    labelYDevanagari: 84,
    labelYEnglish: 97,
    annotation: "K-02 // DOMAIN SCHEMATA",
  },
  {
    id: "03",
    sa: "कल्पना",
    transliteration: "Kalpanā",
    en: "Ideation",
    conceptPhase: "Architecture · Blueprint",
    copy: "Transforming messy manual procedures into coherent architectural systems. We design the schema, UI interactions, database models, and automation flows.",
    deliverable: "Interactive Blueprint & Technical Schema",
    blueprintType: "System Architecture",
    angle: 0,
    x: 510,
    y: 300,
    labelYDevanagari: 266,
    labelYEnglish: 279,
    annotation: "A-03 // ISOMETRIC MODEL",
  },
  {
    id: "04",
    sa: "निर्माण",
    transliteration: "Nirmāṇa",
    en: "Building",
    conceptPhase: "Engineering · Construct",
    copy: "Precision engineering. We craft bespoke web platforms, custom databases, and AI pipelines with clean code, type safety, and sub-second response times.",
    deliverable: "Production Codebase & Integrated APIs",
    blueprintType: "Construct Engine",
    angle: 60,
    x: 405,
    y: 482,
    labelYDevanagari: 518,
    labelYEnglish: 531,
    annotation: "C-04 // COMPILED RUNTIME",
  },
  {
    id: "05",
    sa: "समाधान",
    transliteration: "Samādhāna",
    en: "Solution",
    conceptPhase: "Deployment · Clarity",
    copy: "Delivering practical, battle-tested software. We manage migration, conduct team onboarding, and ensure the system solves the exact real-world problem.",
    deliverable: "Live Deployed Solution & User Enablement",
    blueprintType: "Operational Deployment",
    angle: 120,
    x: 195,
    y: 482,
    labelYDevanagari: 518,
    labelYEnglish: 531,
    annotation: "S-05 // ACTIVE INSTANCE",
  },
  {
    id: "06",
    sa: "उत्कर्ष",
    transliteration: "Utkarṣa",
    en: "Growth",
    conceptPhase: "Evolution · Scaling",
    copy: "Continuous refinement. As your operations scale, we introduce deeper automations, real-time analytics, and ongoing performance enhancements.",
    deliverable: "Compounding Automation & Telemetry Loops",
    blueprintType: "Scaling Vector",
    angle: 180,
    x: 90,
    y: 300,
    labelYDevanagari: 266,
    labelYEnglish: 279,
    annotation: "G-06 // COMPOUNDING TELEMETRY",
  },
];

export function Method() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [isManualOverride, setIsManualOverride] = useState(false);
  const [hoveredStepIndex, setHoveredStepIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Scroll-driven animation handler
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 75%", "end 25%"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // If the user is hovering or manually clicked, allow manual override until scroll continues
    if (!isManualOverride) {
      const calculatedIndex = Math.min(5, Math.max(0, Math.floor(latest * 6)));
      setActiveStepIndex(calculatedIndex);
    }
  });

  // Effective display step (hovered step overrides active step temporarily for instant preview)
  const effectiveIndex = hoveredStepIndex !== null ? hoveredStepIndex : activeStepIndex;
  const currentStep = steps[effectiveIndex] ?? steps[0]!;

  // Central Knowledge Point Travel Offset (moves ~24% toward the active stage, then returns)
  const [pointOffset, setPointOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (shouldReduceMotion) {
      setPointOffset({ x: 0, y: 0 });
      return;
    }

    const rad = (currentStep.angle * Math.PI) / 180;
    const travelDistance = 38; // px toward target orbital node
    const targetX = Math.round(travelDistance * Math.cos(rad));
    const targetY = Math.round(travelDistance * Math.sin(rad));

    // Knowledge explores: moves outward
    setPointOffset({ x: targetX, y: targetY });

    // Knowledge returns: settles back to center
    const timer = setTimeout(() => {
      setPointOffset({ x: 0, y: 0 });
    }, 750);

    return () => clearTimeout(timer);
  }, [effectiveIndex, currentStep.angle, shouldReduceMotion]);

  const selectStage = useCallback((index: number) => {
    setActiveStepIndex(index);
    setIsManualOverride(true);
  }, []);

  // Compute points string for the progressively evolving knowledge polygon
  const activeNodes = steps.slice(0, effectiveIndex + 1);
  const polygonPoints = activeNodes.map((n) => `${n.x},${n.y}`).join(" ");

  return (
    <section
      ref={sectionRef}
      id="method"
      aria-label="The Vidyarthi Method"
      className="grain relative overflow-hidden border-t border-border py-20 sm:py-28 lg:py-40 bg-background transition-colors duration-400"
    >
      {/* Background Architectural Grid */}
      <div
        className="hairline-grid absolute inset-0 opacity-25 pointer-events-none"
        aria-hidden="true"
      />
      <div className="grain-layer pointer-events-none" aria-hidden="true" />

      {/* Floating Ambient Coordinates & Markers */}
      {!shouldReduceMotion && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <motion.div
            className="absolute top-1/4 left-4 sm:left-12 font-mono text-[0.625rem] text-stone/60 tracking-widest uppercase select-none"
            animate={{ y: [-4, 6, -4], opacity: [0.35, 0.65, 0.35] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          >
            SYS.AXIS // 17.3850° N · 78.4867° E
          </motion.div>

          <motion.div
            className="absolute bottom-1/4 right-4 sm:right-12 font-mono text-[0.625rem] text-teal/50 tracking-widest uppercase select-none"
            animate={{ y: [6, -6, 6], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            ORBIT-R210 // 06 MOVEMENTS ACTIVE
          </motion.div>

          <motion.div
            className="absolute top-1/3 right-1/4 h-1 w-1 rounded-full bg-gold/40 shadow-[0_0_8px_var(--gold)]"
            animate={{ scale: [1, 1.8, 1], opacity: [0.2, 0.7, 0.2] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div
            className="absolute bottom-1/3 left-1/4 h-1 w-1 rounded-full bg-teal/40 shadow-[0_0_8px_var(--teal)]"
            animate={{ scale: [1.8, 1, 1.8], opacity: [0.6, 0.2, 0.6] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
        </div>
      )}

      <div className="relative mx-auto max-w-[88rem] px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <SectionHeading
              label="The Vidyarthi Method"
              title="How we think, from question to growth."
              intro="Six movements drawn from the timeless learning rhythm of a Gurukul — observe, understand, imagine, build, solve, and refine."
            />
          </div>

          {/* Quick Step Switcher / Live Telemetry Badge */}
          <div className="lg:col-span-4 flex flex-col lg:items-end">
            <div className="inline-flex items-center gap-2 border border-border/80 bg-card/80 px-3.5 py-1.5 rounded-xs font-mono text-xs text-muted-foreground shadow-xs">
              <span className="h-2 w-2 rounded-full bg-teal animate-pulse" />
              <span className="text-foreground font-semibold">KNOWLEDGE SYSTEM</span>
              <span className="text-stone">/</span>
              <span className="text-gold font-mono">{`STAGE 0${effectiveIndex + 1} OF 06`}</span>
            </div>
            <p className="mt-2 text-[0.6875rem] font-mono text-stone text-right hidden sm:block">
              // INTERACTIVE BLUEPRINT · SCROLL OR CLICK NODES
            </p>
          </div>
        </div>

        {/* ======================================================== */}
        {/* MAIN SIGNATURE VISUALIZATION & EDITORIAL DOSSIER GRID     */}
        {/* ======================================================== */}
        <div className="mt-12 sm:mt-16 grid gap-8 lg:gap-12 lg:grid-cols-12 lg:items-center">
          {/* LEFT / CENTER: THE INTERACTIVE KNOWLEDGE RADAR (7 COLS) */}
          <div className="lg:col-span-7 flex flex-col items-center">
            <div className="relative w-full max-w-[560px] aspect-square rounded-xs border border-border bg-card p-2 sm:p-4 shadow-architectural overflow-hidden">
              {/* Inner subtle measurement crosshairs in corners */}
              <div className="absolute top-3 left-3 font-mono text-[0.625rem] text-stone select-none z-0">
                + [000.000]
              </div>
              <div className="absolute top-3 right-3 font-mono text-[0.625rem] text-stone select-none z-0">
                + [600.000]
              </div>
              <div className="absolute bottom-3 left-3 font-mono text-[0.625rem] text-stone select-none z-0">
                + [000.600]
              </div>
              <div className="absolute bottom-3 right-3 font-mono text-[0.625rem] text-stone select-none z-0">
                + [600.600]
              </div>

              {/* Central Top Branded Label */}
              <div className="absolute top-4 inset-x-0 text-center z-10 pointer-events-none">
                <span className="font-mono text-[0.625rem] tracking-[0.24em] text-gold uppercase bg-card/90 px-3 py-1 border border-border/60 rounded-xs">
                  VIDYARTHI METHOD // KNOWLEDGE SYSTEM
                </span>
              </div>

              {/* Bottom Subtle Pipeline Indicator */}
              <div className="absolute bottom-4 inset-x-0 text-center z-10 pointer-events-none hidden sm:block">
                <span className="font-mono text-[0.5625rem] tracking-[0.2em] text-muted-foreground uppercase bg-card/85 px-2.5 py-0.5 border border-border/40 rounded-xs">
                  QUESTION → UNDERSTAND → IDEA → BUILD → SOLVE → GROWTH
                </span>
              </div>

              {/* SVG 600x600 KNOWLEDGE RADAR CANVAS */}
              <svg
                viewBox="0 0 600 600"
                className="relative h-full w-full z-10"
                aria-label="Interactive Vidyarthi Knowledge Radar Visualization"
              >
                {/* ---------------------------------------------------- */}
                {/* LAYER 0: CARTESIAN CROSSHAIR AXES & GRADUATION TICKS */}
                {/* ---------------------------------------------------- */}
                <g
                  stroke="var(--border)"
                  strokeOpacity="0.8"
                  strokeWidth="0.8"
                  strokeDasharray="3 3"
                >
                  <line x1="40" y1="300" x2="560" y2="300" />
                  <line x1="300" y1="40" x2="300" y2="560" />
                </g>

                {/* Diagonal 45° Guidelines */}
                <g
                  stroke="var(--border)"
                  strokeOpacity="0.35"
                  strokeWidth="0.5"
                  strokeDasharray="2 4"
                >
                  <line x1="100" y1="100" x2="500" y2="500" />
                  <line x1="100" y1="500" x2="500" y2="100" />
                </g>

                {/* Axis Tick Marks */}
                {[100, 150, 200, 250, 350, 400, 450, 500].map((pos) => (
                  <g
                    key={`ticks-${pos}`}
                    stroke="var(--stone)"
                    strokeOpacity="0.5"
                    strokeWidth="0.8"
                  >
                    <line x1={pos} y1="296" x2={pos} y2="304" />
                    <line x1="296" y1={pos} x2="304" y2={pos} />
                  </g>
                ))}

                {/* ---------------------------------------------------- */}
                {/* LAYER 1: CONCENTRIC GEOMETRIC RINGS (1 to 6)         */}
                {/* ---------------------------------------------------- */}

                {/* Core Horizon Ring (R = 36) */}
                <circle
                  cx="300"
                  cy="300"
                  r="36"
                  fill="none"
                  stroke="var(--gold)"
                  strokeOpacity="0.4"
                  strokeWidth="0.8"
                  strokeDasharray="2 2"
                />

                {/* Ring 1 (R = 75): Jigyasa Inquiry Radius */}
                <motion.circle
                  cx="300"
                  cy="300"
                  r="75"
                  fill="none"
                  stroke="var(--gold)"
                  strokeOpacity={effectiveIndex >= 0 ? 0.75 : 0.25}
                  strokeWidth={effectiveIndex >= 0 ? 1.2 : 0.6}
                  strokeDasharray={effectiveIndex >= 0 ? "none" : "3 3"}
                  initial={{ pathLength: 0.2 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.2, ease: CALM_EASE }}
                />

                {/* Ring 2 (R = 120): Jnana Knowledge Matrix Ring */}
                <motion.circle
                  cx="300"
                  cy="300"
                  r="120"
                  fill="none"
                  stroke={effectiveIndex >= 1 ? "var(--gold)" : "var(--stone)"}
                  strokeOpacity={effectiveIndex >= 1 ? 0.8 : 0.2}
                  strokeWidth={effectiveIndex >= 1 ? 1 : 0.6}
                  initial={{ opacity: 0.3 }}
                  animate={{ opacity: effectiveIndex >= 1 ? 1 : 0.3 }}
                  transition={{ duration: 0.8, ease: CALM_EASE }}
                />
                {/* Ring 2 Cardinal Dial Dots */}
                {[0, 60, 120, 180, 240, 300].map((deg) => {
                  const rad = (deg * Math.PI) / 180;
                  const dotX = 300 + 120 * Math.cos(rad);
                  const dotY = 300 + 120 * Math.sin(rad);
                  return (
                    <circle
                      key={`ring2-dot-${deg}`}
                      cx={dotX}
                      cy={dotY}
                      r="1.5"
                      fill={effectiveIndex >= 1 ? "var(--gold)" : "var(--stone)"}
                      opacity={effectiveIndex >= 1 ? 0.8 : 0.3}
                    />
                  );
                })}

                {/* Ring 3 (R = 165): Kalpana Ideation Hexagonal Blueprint Scaffolding */}
                <motion.polygon
                  points="217.5,157.1 382.5,157.1 465,300 382.5,442.9 217.5,442.9 135,300"
                  fill="none"
                  stroke={effectiveIndex >= 2 ? "var(--gold)" : "var(--stone)"}
                  strokeOpacity={effectiveIndex >= 2 ? 0.7 : 0.15}
                  strokeWidth={effectiveIndex >= 2 ? 1 : 0.6}
                  strokeDasharray={effectiveIndex >= 2 ? "4 2" : "2 4"}
                  initial={{ opacity: 0.2 }}
                  animate={{ opacity: effectiveIndex >= 2 ? 1 : 0.2 }}
                  transition={{ duration: 0.8, ease: CALM_EASE }}
                />

                {/* Ring 4 (R = 210): Nirmana Main Stage Orbital Conduit */}
                <circle
                  cx="300"
                  cy="300"
                  r="210"
                  fill="none"
                  stroke={effectiveIndex >= 3 ? "var(--teal)" : "var(--border)"}
                  strokeOpacity={effectiveIndex >= 3 ? 0.6 : 0.3}
                  strokeWidth="1"
                  strokeDasharray="4 4"
                />

                {/* Ring 5 (R = 255): Samadhana Calibration Horizon */}
                <motion.circle
                  cx="300"
                  cy="300"
                  r="255"
                  fill="none"
                  stroke={effectiveIndex >= 4 ? "var(--teal)" : "var(--border)"}
                  strokeOpacity={effectiveIndex >= 4 ? 0.5 : 0.15}
                  strokeWidth="0.8"
                  strokeDasharray="6 6"
                />

                {/* Ring 6 (R = 285): Utkarsha Outer Scaling Vector Perimeter */}
                <circle
                  cx="300"
                  cy="300"
                  r="285"
                  fill="none"
                  stroke={effectiveIndex >= 5 ? "var(--gold)" : "var(--border)"}
                  strokeOpacity={effectiveIndex >= 5 ? 0.6 : 0.2}
                  strokeWidth="0.8"
                />

                {/* Outer Azimuth Degree Readings */}
                <g
                  fill="var(--stone)"
                  fontSize="6"
                  fontFamily="monospace"
                  textAnchor="middle"
                  opacity="0.6"
                >
                  <text x="300" y="32">
                    000° // NORTH AXIS
                  </text>
                  <text x="575" y="303" textAnchor="end">
                    090°
                  </text>
                  <text x="300" y="582">
                    180° // BASELINE
                  </text>
                  <text x="25" y="303" textAnchor="start">
                    270°
                  </text>
                </g>

                {/* ---------------------------------------------------- */}
                {/* PROGRESSIVE ILLUMINATED KNOWLEDGE MESH POLYGON       */}
                {/* ---------------------------------------------------- */}
                {activeNodes.length > 1 && (
                  <motion.polygon
                    points={polygonPoints}
                    fill="var(--gold)"
                    fillOpacity={0.06}
                    stroke="var(--gold)"
                    strokeOpacity={0.4}
                    strokeWidth="0.8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, ease: CALM_EASE }}
                  />
                )}

                {/* ---------------------------------------------------- */}
                {/* ACTIVE CONNECTIONS & CONDUIT BEAM TO ACTIVE STAGE    */}
                {/* ---------------------------------------------------- */}
                {/* Dynamic Gold/Teal Beam from Center to Current Stage */}
                <motion.line
                  x1="300"
                  y1="300"
                  x2={currentStep.x}
                  y2={currentStep.y}
                  stroke="var(--gold)"
                  strokeWidth="1.5"
                  strokeOpacity="0.9"
                  strokeDasharray="4 2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.5, ease: CALM_EASE }}
                />

                {/* Pulsing Light Cone for Active Stage */}
                <polygon
                  points={`300,300 ${currentStep.x - 14},${currentStep.y} ${currentStep.x + 14},${currentStep.y}`}
                  fill="var(--gold)"
                  fillOpacity="0.08"
                />

                {/* ---------------------------------------------------- */}
                {/* SIX STAGE NODES AROUND ORBIT (R = 210)               */}
                {/* ---------------------------------------------------- */}
                {steps.map((s, idx) => {
                  const isActive = effectiveIndex === idx;
                  const isPassed = effectiveIndex >= idx;

                  return (
                    <g
                      key={s.id}
                      onClick={() => selectStage(idx)}
                      onMouseEnter={() => setHoveredStepIndex(idx)}
                      onMouseLeave={() => setHoveredStepIndex(null)}
                      className="cursor-pointer group"
                      role="button"
                      tabIndex={0}
                      aria-label={`Select Stage ${s.id}: ${s.sa} (${s.en})`}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          selectStage(idx);
                        }
                      }}
                    >
                      {/* Outer Pulse Ripple on Active Node */}
                      {isActive && (
                        <circle
                          cx={s.x}
                          cy={s.y}
                          r="26"
                          fill="none"
                          stroke="var(--gold)"
                          strokeWidth="1"
                          strokeOpacity="0.4"
                        >
                          <animate
                            attributeName="r"
                            values="18;30;18"
                            dur="3s"
                            repeatCount="indefinite"
                          />
                          <animate
                            attributeName="stroke-opacity"
                            values="0.6;0;0.6"
                            dur="3s"
                            repeatCount="indefinite"
                          />
                        </circle>
                      )}

                      {/* Node Circle Outer Bracket */}
                      <circle
                        cx={s.x}
                        cy={s.y}
                        r={isActive ? "18" : "13"}
                        fill="var(--card)"
                        stroke={
                          isActive ? "var(--gold)" : isPassed ? "var(--gold)" : "var(--border)"
                        }
                        strokeWidth={isActive ? "1.8" : "1"}
                        strokeOpacity={isActive ? 1 : isPassed ? 0.6 : 0.4}
                        className="transition-all duration-300 group-hover:stroke-gold group-hover:stroke-opacity-100"
                      />

                      {/* Node Center Pip */}
                      <circle
                        cx={s.x}
                        cy={s.y}
                        r={isActive ? "4" : "2"}
                        fill={isActive ? "var(--gold)" : isPassed ? "var(--gold)" : "var(--stone)"}
                        className="transition-all duration-300"
                      />

                      {/* Stage Number Label inside/adjacent */}
                      <text
                        x={s.x}
                        y={s.y + (isActive ? 3 : 2.5)}
                        fill={isActive ? "var(--gold)" : "var(--muted-foreground)"}
                        fontSize={isActive ? "8.5" : "7"}
                        fontFamily="monospace"
                        fontWeight={isActive ? "bold" : "normal"}
                        textAnchor="middle"
                        className="select-none pointer-events-none"
                      >
                        {isActive ? s.id : ""}
                      </text>

                      {/* Devanagari Sanskrit Moniker Near Node */}
                      <text
                        x={s.x}
                        y={s.labelYDevanagari}
                        fill={isActive ? "var(--foreground)" : "var(--muted-foreground)"}
                        fontSize={isActive ? "13" : "10"}
                        fontFamily="serif"
                        textAnchor="middle"
                        fontWeight={isActive ? "600" : "400"}
                        className="select-none pointer-events-none transition-colors duration-300"
                      >
                        {s.sa}
                      </text>

                      {/* English Transliteration / Concept Marker */}
                      <text
                        x={s.x}
                        y={s.labelYEnglish}
                        fill={isActive ? "var(--gold)" : "var(--stone)"}
                        fontSize="6.5"
                        fontFamily="monospace"
                        letterSpacing="0.08em"
                        textAnchor="middle"
                        className="select-none pointer-events-none uppercase transition-colors duration-300"
                      >
                        {s.en}
                      </text>
                    </g>
                  );
                })}

                {/* ---------------------------------------------------- */}
                {/* CENTRAL SIGNATURE KNOWLEDGE POINT (THE GURUKUL NUCLEUS) */}
                {/* ---------------------------------------------------- */}
                <g>
                  {/* Outer Breathing Aura */}
                  <circle cx="300" cy="300" r="20" fill="var(--gold)" fillOpacity="0.06" />

                  {/* Concentric Pulse Ripples */}
                  <circle
                    cx="300"
                    cy="300"
                    r="12"
                    fill="none"
                    stroke="var(--gold)"
                    strokeWidth="0.75"
                    strokeOpacity="0.5"
                  >
                    <animate
                      attributeName="r"
                      values="8;22;8"
                      dur="2.5s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="stroke-opacity"
                      values="0.8;0;0.8"
                      dur="2.5s"
                      repeatCount="indefinite"
                    />
                  </circle>

                  {/* Central Crosshair Lines */}
                  <line
                    x1="288"
                    y1="300"
                    x2="312"
                    y2="300"
                    stroke="var(--gold)"
                    strokeWidth="0.8"
                    strokeOpacity="0.8"
                  />
                  <line
                    x1="300"
                    y1="288"
                    x2="300"
                    y2="312"
                    stroke="var(--gold)"
                    strokeWidth="0.8"
                    strokeOpacity="0.8"
                  />

                  {/* The Traveling / Pulsing Knowledge Point */}
                  <motion.circle
                    cx={300 + pointOffset.x}
                    cy={300 + pointOffset.y}
                    r="4.5"
                    fill="var(--gold)"
                    animate={{
                      scale: [1, 1.25, 1],
                      opacity: [0.9, 1, 0.9],
                    }}
                    transition={{
                      duration: 2.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  {/* Center Annotation */}
                  <text
                    x="300"
                    y="324"
                    fill="var(--gold)"
                    fontSize="6"
                    fontFamily="monospace"
                    letterSpacing="0.12em"
                    textAnchor="middle"
                    className="select-none pointer-events-none"
                  >
                    KNOWLEDGE CORE
                  </text>
                </g>
              </svg>
            </div>

            {/* Quick Interactive Stage Navigator Rail (Below Radar) */}
            <div className="mt-4 w-full max-w-[560px] grid grid-cols-6 gap-1.5 sm:gap-2">
              {steps.map((s, idx) => {
                const isActive = effectiveIndex === idx;
                return (
                  <button
                    key={`pill-${s.id}`}
                    type="button"
                    onClick={() => selectStage(idx)}
                    className={`flex flex-col items-center py-2 px-1 rounded-xs border text-center transition-all duration-300 focus-ring cursor-pointer ${
                      isActive
                        ? "border-gold bg-gold/10 shadow-[0_0_12px_-4px_var(--gold)]"
                        : "border-border/60 bg-card/60 hover:border-gold/40 hover:bg-card"
                    }`}
                  >
                    <span
                      className={`font-mono text-[0.625rem] font-semibold ${
                        isActive ? "text-gold" : "text-stone"
                      }`}
                    >
                      {s.id}
                    </span>
                    <span className="font-serif text-xs leading-tight text-foreground mt-0.5 truncate w-full">
                      {s.sa}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT: EDITORIAL DOSSIER SPOTLIGHT ON ACTIVE STAGE (5 COLS) */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep.id}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -16 }}
                transition={{ duration: 0.45, ease: CALM_EASE }}
                className="border border-border bg-card p-6 sm:p-8 lg:p-10 shadow-architectural relative overflow-hidden"
              >
                {/* Background Blueprint Grid Watermark */}
                <div
                  className="hairline-grid absolute inset-0 opacity-15 pointer-events-none"
                  aria-hidden="true"
                />

                {/* Top Badge Strip */}
                <div className="flex items-center justify-between border-b border-border/80 pb-4">
                  <div className="flex items-center gap-2">
                    <KnowledgePoint size="sm" pulse={true} />
                    <span className="font-mono text-xs font-semibold tracking-widest text-gold uppercase">
                      {`MOVEMENT 0${effectiveIndex + 1} // 06`}
                    </span>
                  </div>

                  <span className="text-[0.625rem] font-mono tracking-widest text-teal uppercase px-2 py-0.5 border border-teal/40 bg-teal/10 rounded-xs">
                    {currentStep.blueprintType}
                  </span>
                </div>

                {/* Sanskrit & English Monikers */}
                <div className="mt-6">
                  <div className="flex items-baseline gap-3">
                    <h3 className="font-serif text-4xl sm:text-5xl text-primary font-light">
                      {currentStep.sa}
                    </h3>
                    <span className="text-sm font-mono text-muted-foreground">
                      ({currentStep.transliteration})
                    </span>
                  </div>

                  <p className="display mt-2 text-2xl sm:text-3xl font-light text-foreground">
                    {currentStep.en}
                  </p>

                  <p className="mt-1 text-xs font-mono tracking-widest text-stone uppercase">
                    PARADIGM: {currentStep.conceptPhase}
                  </p>
                </div>

                {/* Deep Narrative Description */}
                <p className="mt-5 text-sm sm:text-base leading-relaxed text-muted-foreground font-normal">
                  {currentStep.copy}
                </p>

                {/* Milestone Deliverable Artifact Box */}
                <div className="mt-6 sm:mt-8 border-t border-border/70 pt-5">
                  <p className="text-[0.625rem] font-mono tracking-widest uppercase text-gold mb-2">
                    Stage Milestone Deliverable
                  </p>
                  <div className="flex items-start gap-2.5 rounded-xs border border-border/70 bg-background/80 p-3 sm:p-3.5">
                    <span className="text-teal font-mono text-xs mt-0.5">↳</span>
                    <p className="text-xs sm:text-sm font-medium text-foreground leading-snug">
                      {currentStep.deliverable}
                    </p>
                  </div>
                </div>

                {/* Step Controls (Prev / Next) */}
                <div className="mt-8 flex items-center justify-between border-t border-border/60 pt-4 text-xs font-mono">
                  <button
                    type="button"
                    onClick={() => selectStage((effectiveIndex + 5) % 6)}
                    className="text-muted-foreground hover:text-foreground transition-colors uppercase py-1 focus-ring rounded-xs cursor-pointer flex items-center gap-1.5"
                  >
                    <span>←</span>
                    <span>Prev</span>
                  </button>

                  <span className="text-stone text-[0.6875rem]">{currentStep.annotation}</span>

                  <button
                    type="button"
                    onClick={() => selectStage((effectiveIndex + 1) % 6)}
                    className="text-gold hover:text-gold-hover transition-colors uppercase py-1 focus-ring rounded-xs cursor-pointer flex items-center gap-1.5 font-semibold"
                  >
                    <span>Next</span>
                    <span>→</span>
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
