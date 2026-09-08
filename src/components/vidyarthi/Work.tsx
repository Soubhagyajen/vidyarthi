import { useState } from "react";
import { SectionHeading, Reveal, KnowledgePoint } from "./Reveal";
import { RepCaseStudy } from "./RepCaseStudy";
import { BoqCaseStudy } from "./BoqCaseStudy";

interface Project {
  num: string;
  category: string;
  client: string;
  title: string;
  problem: string;
  solution: string;
  deliverables: string[];
  externalUrl?: string;
  systemArchitecture: string;
  caseStudyId?: "rep" | "boq";
}

const projects: Project[] = [
  {
    num: "01",
    category: "Real Client Work · Digital Presence & Brand Systems",
    client: "REP Pvt Ltd",
    title: "Translating an Engineering Business into a Modern Digital Presence",
    problem:
      "A traditional industrial engineering business required a sophisticated, credible digital foundation that accurately reflected their manufacturing capabilities and engineering standards.",
    solution:
      "Vidyarthi designed and engineered an architectural corporate website, unified their brand presentation across digital touchpoints, and established structured social media and content systems for ongoing digital growth.",
    deliverables: [
      "Corporate Website Architecture",
      "Digital Presence & Positioning",
      "Website Design & Full-Stack Development",
      "Brand Presentation & Assets",
      "Social Media Management & Content",
      "Online Identity & Domain Infrastructure",
      "Ongoing Digital Growth Systems",
    ],
    externalUrl: "https://www.reppvtltd.com",
    systemArchitecture: "Custom Web Platform · Brand Design System · Ongoing Social Media Engine",
    caseStudyId: "rep",
  },
  {
    num: "02",
    category: "Proprietary Architecture · Enterprise Workflow",
    client: "Construction & Industrial Client",
    title: "Automated BOQ Extraction & Real-Time Procurement Intelligence",
    problem:
      "Engineers and procurement teams spent 14+ hours per tender manually transcribing material quantities, contractor schedules, and cost variations across hundreds of PDF drawings and inconsistent spreadsheets.",
    solution:
      "Engineered an automated BOQ parsing engine that extracts structured line items from architectural PDFs, standardizes item codes, and syncs directly into an interactive live costing spreadsheet.",
    deliverables: [
      "PDF Parser Engine",
      "Automated Line-Item Matcher",
      "Live Costing Dashboard",
      "Multi-Currency Export",
      "Audit Trail & Version Control",
    ],
    systemArchitecture: "FastAPI · Python OCR Engine · React Table · DuckDB · Supabase",
    caseStudyId: "boq",
  },
];

const pipelineStages = [
  { step: "01", title: "Traditional Business", desc: "Core industrial operations & heritage" },
  { step: "02", title: "Deep Understanding", desc: "Immersion in domain & client ethos" },
  { step: "03", title: "Digital Identity", desc: "Refined aesthetic & visual language" },
  { step: "04", title: "Corporate Website", desc: "Fast, bespoke, modern platform" },
  { step: "05", title: "Social Media", desc: "Consistent narrative & industry content" },
  { step: "06", title: "Digital Presence", desc: "Enduring authority & inbound growth" },
];

export function Work() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<"rep" | "boq" | null>(null);

  return (
    <>
      <section
        id="work"
        aria-label="Selected Client Work"
        className="grain relative overflow-hidden border-t border-border py-20 sm:py-28 lg:py-40 bg-background transition-colors duration-400"
      >
        <div className="hairline-grid absolute inset-0 opacity-25" aria-hidden="true" />
        <div className="grain-layer" aria-hidden="true" />

        <div className="relative mx-auto max-w-[88rem] px-4 sm:px-6 lg:px-12">
          {/* Section Header */}
          <SectionHeading
            label="Selected Works"
            title="Real systems. Real businesses. Built with care."
            intro="We partner with traditional enterprises and forward-looking teams to build modern websites, operational software, and enduring digital presence."
          />

          {/* PROJECT 01: REP PVT LTD (HERO FEATURED CASE STUDY) */}
          <div className="mt-12 sm:mt-16">
            <Reveal>
              <div className="relative overflow-hidden border border-border bg-card shadow-architectural transition-all duration-500 hover:border-gold/60">
                {/* Top Architectural Banner */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/80 bg-background/60 px-5 sm:px-8 py-3.5 sm:py-4">
                  <div className="flex items-center gap-2.5">
                    <KnowledgePoint size="sm" pulse={true} />
                    <span className="font-mono text-xs font-semibold tracking-widest text-gold uppercase">
                      Featured Client Engagement · 01
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <a
                      href="https://www.reppvtltd.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Visit REP Pvt Ltd live website (opens in new tab)"
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-foreground hover:text-gold transition-colors focus-ring"
                    >
                      <span>reppvtltd.com</span>
                      <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </div>

                {/* Main Content Showcase */}
                <div className="p-6 sm:p-8 lg:p-12">
                  <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
                    {/* Left: Client Overview & Narrative */}
                    <div className="lg:col-span-7">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono tracking-widest text-teal uppercase">
                          Engineering & Industrial Services
                        </span>
                        <span className="text-muted-foreground/40">/</span>
                        <span className="text-xs font-mono text-muted-foreground uppercase">
                          Real Client Project
                        </span>
                      </div>

                      <h3 className="display mt-3 text-2xl sm:text-4xl lg:text-[2.75rem] font-light text-foreground leading-[1.15]">
                        REP Pvt Ltd — Digital Presence & Brand Systems
                      </h3>

                      <p className="mt-4 sm:mt-5 text-sm sm:text-base leading-relaxed text-muted-foreground font-normal">
                        Vidyarthi helped translate a traditional engineering business into a modern
                        digital presence. From custom corporate website engineering to structured
                        social media management and digital brand assets, we delivered a
                        comprehensive foundation built for ongoing industry authority.
                      </p>

                      {/* Capabilities Matrix */}
                      <div className="mt-6 sm:mt-8">
                        <p className="text-[0.625rem] font-mono tracking-widest uppercase text-stone mb-3">
                          Delivered Services & Capabilities
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {projects[0]!.deliverables.map((item) => (
                            <span
                              key={item}
                              className="rounded-xs border border-border/80 bg-background/80 px-2.5 sm:px-3 py-1 sm:py-1.5 text-[0.6875rem] sm:text-xs font-mono text-foreground"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Triggers */}
                      <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
                        <button
                          type="button"
                          onClick={() => setSelectedCaseStudy("rep")}
                          className="btn-primary flex items-center gap-2 cursor-pointer text-xs sm:text-sm"
                        >
                          <span>Explore Case Study & Architecture</span>
                          <span aria-hidden="true">→</span>
                        </button>

                        <a
                          href="https://www.reppvtltd.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Visit REP Pvt Ltd live website in new tab"
                          className="btn-secondary flex items-center gap-2 cursor-pointer text-xs sm:text-sm"
                        >
                          <span>Visit Live Website</span>
                          <span aria-hidden="true">↗</span>
                        </a>
                      </div>
                    </div>

                    {/* Right: Architectural Elevation Schematic */}
                    <div className="lg:col-span-5">
                      <div className="relative aspect-4/3 w-full rounded-xs border border-border/80 bg-background p-4 sm:p-6 flex flex-col justify-between overflow-hidden shadow-inner">
                        <div
                          className="hairline-grid absolute inset-0 opacity-40"
                          aria-hidden="true"
                        />

                        {/* Top Schematic Header */}
                        <div className="relative z-10 flex items-center justify-between border-b border-border/60 pb-3">
                          <span className="font-mono text-[0.625rem] tracking-widest text-gold uppercase">
                            // SCHEMATIC ELEVATION
                          </span>
                          <span className="font-mono text-[0.625rem] text-muted-foreground uppercase">
                            PRODUCTION STABLE
                          </span>
                        </div>

                        {/* Diagram Center */}
                        <div className="relative z-10 my-4 flex flex-col items-center justify-center text-center">
                          <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-full border border-gold/60 bg-gold/5 flex items-center justify-center shadow-[0_0_20px_var(--gold)]">
                            <span className="font-serif text-xl sm:text-2xl font-light text-primary">
                              REP
                            </span>
                          </div>
                          <p className="mt-3 font-mono text-xs text-foreground font-semibold">
                            reppvtltd.com
                          </p>
                          <p className="mt-1 text-[0.6875rem] text-muted-foreground font-mono">
                            Engineering & Industrial Systems
                          </p>
                        </div>

                        {/* Bottom Metric Strip */}
                        <div className="relative z-10 grid grid-cols-2 gap-2 border-t border-border/60 pt-3 text-[0.625rem] font-mono">
                          <div>
                            <span className="text-muted-foreground">SCOPE:</span>
                            <span className="ml-1 text-foreground">Web + Social + Brand</span>
                          </div>
                          <div className="text-right">
                            <span className="text-muted-foreground">STATUS:</span>
                            <span className="ml-1 text-teal">Active Production</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Connected Architectural Transformation Pipeline */}
                  <div className="mt-10 sm:mt-14 border-t border-border/70 pt-8 sm:pt-10">
                    <p className="text-[0.625rem] font-mono tracking-widest uppercase text-muted-foreground mb-4 sm:mb-6">
                      The Digital Transformation Journey // 6-Stage Execution Pipeline
                    </p>

                    <div className="relative">
                      {/* Desktop Continuous Rail */}
                      <div
                        aria-hidden="true"
                        className="hidden lg:block absolute top-[14px] inset-x-6 h-px bg-gradient-to-r from-gold/30 via-gold/70 to-teal/40 z-0"
                      />

                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 relative z-10">
                        {pipelineStages.map((stage) => (
                          <div
                            key={stage.step}
                            className="border border-border/70 bg-background/60 p-3 sm:p-4 rounded-xs transition-colors hover:border-gold/50"
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-mono text-[0.625rem] font-semibold text-gold">
                                {stage.step}
                              </span>
                              <span className="h-1.5 w-1.5 rounded-full bg-border" />
                            </div>
                            <p className="mt-2 text-xs font-semibold text-foreground font-sans">
                              {stage.title}
                            </p>
                            <p className="mt-1 text-[0.6875rem] text-muted-foreground leading-snug">
                              {stage.desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* PROJECT 02: BOQ AUTOMATION ENGINE (SECONDARY FEATURED SYSTEM) */}
          <div className="mt-10 sm:mt-14">
            <Reveal delay={0.1}>
              <div className="relative overflow-hidden border border-border bg-card p-6 sm:p-8 lg:p-12 transition-all duration-500 hover:border-border">
                <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
                  <div className="lg:col-span-7">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono tracking-widest text-gold uppercase">
                        {projects[1]!.num} / {projects[1]!.category}
                      </span>
                    </div>

                    <h3 className="display mt-3 text-2xl sm:text-3xl lg:text-4xl font-light text-foreground">
                      {projects[1]!.title}
                    </h3>

                    <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground font-normal">
                      {projects[1]!.solution}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {projects[1]!.deliverables.map((item) => (
                        <span
                          key={item}
                          className="rounded-xs border border-border/80 bg-background/80 px-2.5 py-1 text-[0.6875rem] font-mono text-muted-foreground"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="mt-8 flex flex-wrap items-center gap-4">
                      <button
                        type="button"
                        onClick={() => setSelectedCaseStudy("boq")}
                        className="btn-primary flex items-center gap-2 cursor-pointer text-xs sm:text-sm"
                      >
                        <span>Open Interactive BOQ Simulator</span>
                        <span aria-hidden="true">→</span>
                      </button>
                    </div>
                  </div>

                  <div className="lg:col-span-5">
                    <div className="relative aspect-4/3 w-full rounded-xs border border-border bg-background/90 p-4 sm:p-6 flex flex-col justify-between">
                      <div className="flex items-center justify-between border-b border-border/60 pb-3 font-mono text-[0.625rem]">
                        <span className="text-teal">// INGESTION PIPELINE</span>
                        <span className="text-muted-foreground">SUB-SECOND LATENCY</span>
                      </div>

                      <div className="space-y-2 font-mono text-[0.6875rem]">
                        <div className="flex justify-between border-b border-border/40 py-1 text-muted-foreground">
                          <span>PDF Spec Parse:</span>
                          <span className="text-foreground">248 items</span>
                        </div>
                        <div className="flex justify-between border-b border-border/40 py-1 text-muted-foreground">
                          <span>OCR Accuracy:</span>
                          <span className="text-teal">99.4% precision</span>
                        </div>
                        <div className="flex justify-between border-b border-border/40 py-1 text-muted-foreground">
                          <span>Schema Normalization:</span>
                          <span className="text-foreground">0.32s</span>
                        </div>
                        <div className="flex justify-between py-1 text-muted-foreground">
                          <span>Spreadsheet Sync:</span>
                          <span className="text-gold">Live Bi-directional</span>
                        </div>
                      </div>

                      <div className="border-t border-border/60 pt-3 text-right">
                        <span className="text-[0.625rem] font-mono text-stone">
                          STACK: FASTAPI · DUCKDB · REACT TABLE
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Case Study Modals */}
      <RepCaseStudy
        isOpen={selectedCaseStudy === "rep"}
        onClose={() => setSelectedCaseStudy(null)}
      />
      <BoqCaseStudy
        isOpen={selectedCaseStudy === "boq"}
        onClose={() => setSelectedCaseStudy(null)}
      />
    </>
  );
}
