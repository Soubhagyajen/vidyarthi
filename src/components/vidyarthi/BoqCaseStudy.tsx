import { useState, useEffect, useCallback } from "react";
import { motion } from "motion/react";
import boqImage from "@/assets/work-boq.jpg";
import { KnowledgePoint, CALM_EASE } from "./Reveal";

interface BoqCaseStudyProps {
  isOpen: boolean;
  onClose: () => void;
}

interface WorkflowStep {
  id: string;
  phase: string;
  title: string;
  subtitle: string;
  description: string;
  inputState: string;
  outputState: string;
  dataSnippet: {
    raw: string;
    transformed: string;
  };
  operationalBenefit: string;
}

const workflowSteps: WorkflowStep[] = [
  {
    id: "01",
    phase: "Stage 1",
    title: "Upload & Ingest BOQ",
    subtitle: "Raw File Parsing",
    description:
      "Client estimates and subcontractor Bill of Quantities arrive in chaotic, inconsistent formats — unstructured Excel workbooks, scanned PDF schedules, and manual rate sheets.",
    inputState: "Fragmented Excel / PDF rate schedules with inconsistent headers",
    outputState: "Ingested raw tabular streams ready for tokenization & parsing",
    dataSnippet: {
      raw: '["Item 14.b", "25mm CPVC pipe heavy grade", "approx 450", "mtrs", "rate unassigned"]',
      transformed:
        '{\n  "raw_line": "Item 14.b",\n  "raw_text": "25mm CPVC pipe heavy grade",\n  "declared_qty": 450,\n  "unit": "MTR",\n  "status": "QUEUED_FOR_NORMALIZATION"\n}',
    },
    operationalBenefit:
      "Eliminates hours of manual copy-pasting and prevents missing line-item oversights.",
  },
  {
    id: "02",
    phase: "Stage 2",
    title: "Extract Information",
    subtitle: "Line Item Normalization",
    description:
      "The ingestion engine parses unstructured rows into discrete engineering parameters: item code, technical specification, diameter/rating, quantity, and unit of measurement.",
    inputState: "Ambiguous free-text specifications and unlinked row entries",
    outputState: "Parsed entity objects with verified numeric types and normalized units",
    dataSnippet: {
      raw: '"25mm CPVC pipe heavy grade - Schedule 80 conforming to IS:15778"',
      transformed:
        '{\n  "category": "PLUMBING",\n  "material_type": "CPVC_PIPE",\n  "dimension": "25mm",\n  "schedule": "SCH_80",\n  "standard": "IS_15778",\n  "confidence": 0.98\n}',
    },
    operationalBenefit:
      "Standardizes naming across different consultants, architects, and subcontractor bids.",
  },
  {
    id: "03",
    phase: "Stage 3",
    title: "Structure Materials",
    subtitle: "Catalog & Hierarchy Mapping",
    description:
      "Extracted items are matched against the enterprise material library and supplier taxonomy, connecting isolated BOQ entries to actual procurement catalogs.",
    inputState: "Isolated line items with no supplier reference or historical rates",
    outputState: "Mapped material entities linked to approved vendors and standard SKUs",
    dataSnippet: {
      raw: 'Material Code Unlinked -> "25mm CPVC Pipe"',
      transformed:
        '{\n  "sku": "PLUMB-CPVC-025-S80",\n  "master_category": "Piping & Fittings",\n  "approved_vendors": ["Astral", "Supreme", "Ashirvad"],\n  "base_uom": "METER",\n  "tax_hsn": "391723"\n}',
    },
    operationalBenefit:
      "Instantly connects project estimations to real-world procurement catalogs and supplier databases.",
  },
  {
    id: "04",
    phase: "Stage 4",
    title: "Generate Standardized Data",
    subtitle: "Relational Ledger & Versioning",
    description:
      "The system builds a permanent, version-controlled relational database for the project. Every change, revision addendum, and price adjustment is tracked with full audit history.",
    inputState: "Overwritten file versions ('BOQ_final_v2_final_revised.xlsx')",
    outputState: "Immutable relational project schema with timestamped revision tree",
    dataSnippet: {
      raw: "File: BOQ_TowerA_Final_Rev4_Jan2026.xlsx (author unknown)",
      transformed:
        '{\n  "project_id": "PRJ-2026-HYD-04",\n  "revision": "v2.1",\n  "total_line_items": 428,\n  "committed_value": "INR 42,50,000",\n  "audit_state": "VERIFIED_LOCKED"\n}',
    },
    operationalBenefit:
      "Eliminates multi-version confusion and guarantees complete accountability across teams.",
  },
  {
    id: "05",
    phase: "Stage 5",
    title: "Track Quantities & Variance",
    subtitle: "Real-Time Consumption vs. Budget",
    description:
      "Site teams submit material indent requisitions directly through web portals. The system checks requested quantities against allocated BOQ limits in real time.",
    inputState: "Unchecked site WhatsApp requisitions leading to project budget overruns",
    outputState: "Automated variance calculation flagging quantity deviations before purchase",
    dataSnippet: {
      raw: "Site indent request: 120 Mtr (Requested by Site Engineer)",
      transformed:
        '{\n  "allocated_boq": 450,\n  "previously_issued": 380,\n  "requested": 120,\n  "projected_total": 500,\n  "variance": "+50 MTR (+11.1%)",\n  "alert": "VARIANCE_THRESHOLD_EXCEEDED"\n}',
    },
    operationalBenefit:
      "Flags cost and quantity leakage before purchase orders are issued, saving significant margin.",
  },
  {
    id: "06",
    phase: "Stage 6",
    title: "Generate Operational Outputs",
    subtitle: "Automated RFQs & Telemetry",
    description:
      "Generates clean, standardized Request for Quotations (RFQs) for vendors, creates automated purchase summaries, and displays real-time margin telemetry for leadership.",
    inputState: "Manual manual email drafting to dozens of individual material vendors",
    outputState: "Automated supplier packages, comparative bid tables, and ERP sync",
    dataSnippet: {
      raw: 'Manual email: "Sir please send best rate for attached pipe list"',
      transformed:
        '{\n  "rfq_package_id": "RFQ-PLUMB-2026-09",\n  "vendor_count": 4,\n  "comparison_matrix_ready": true,\n  "export_formats": ["PDF", "XLSX", "ERP_WEBHOOK"],\n  "status": "DISPATCHED"\n}',
    },
    operationalBenefit:
      "Reduces procurement turnaround from days to minutes while ensuring competitive pricing.",
  },
];

export function BoqCaseStudy({ isOpen, onClose }: BoqCaseStudyProps) {
  const [activeWorkflowIdx, setActiveWorkflowIdx] = useState(0);
  const currentWorkflow = workflowSteps[activeWorkflowIdx] ?? workflowSteps[0]!;

  // Handle ESC key
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-labelledby="boq-case-study-title"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: CALM_EASE }}
      className="fixed inset-0 z-[100] flex flex-col bg-background/98 backdrop-blur-2xl overflow-y-auto"
    >
      {/* Sticky Top Bar */}
      <header className="sticky top-0 z-30 flex items-center justify-between border-b border-border/80 bg-background/95 px-6 py-4 lg:px-12 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <KnowledgePoint size="sm" pulse={true} />
          <span className="font-mono text-xs text-teal tracking-widest uppercase">
            FLAGSHIP ARCHITECTURE // 02
          </span>
          <span className="hidden sm:inline text-stone text-xs">·</span>
          <span className="hidden sm:inline text-xs font-mono text-muted-foreground uppercase">
            BOQ Management System
          </span>
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close Case Study"
          className="group flex items-center gap-2 border border-border/70 bg-card px-4 py-2 text-xs font-semibold tracking-wider text-foreground uppercase transition-all duration-300 hover:border-teal hover:text-teal focus-ring rounded-xs"
        >
          <span>Close Case Study</span>
          <span className="font-mono text-stone group-hover:text-teal">✕</span>
        </button>
      </header>

      {/* Main Case Study Content */}
      <main className="mx-auto w-full max-w-5xl px-6 py-12 lg:px-12 lg:py-20 flex-1">
        {/* Header Eyebrow & Title */}
        <div className="border-b border-border/70 pb-10">
          <div className="flex flex-wrap items-center gap-3 text-[0.6875rem] font-mono tracking-widest text-muted-foreground uppercase">
            <span className="text-teal">CATEGORY: CUSTOM ENTERPRISE SOFTWARE</span>
            <span>·</span>
            <span>DISCIPLINE: ESTIMATION & PROCUREMENT INTELLIGENCE</span>
            <span>·</span>
            <span className="text-gold">STATUS: IN DEVELOPMENT</span>
          </div>

          <h1
            id="boq-case-study-title"
            className="display mt-6 text-4xl sm:text-6xl lg:text-7xl font-light text-foreground tracking-tight"
          >
            BOQ Management System
          </h1>

          <p className="mt-4 text-xl sm:text-2xl font-light text-primary/95 font-serif">
            Transforming chaotic spreadsheets and manual estimations into structured operational
            intelligence.
          </p>
        </div>

        {/* The Visual Problem-to-Software Evolution Blueprint */}
        <div className="mt-12 border border-border bg-card p-8 lg:p-10 shadow-architectural">
          <div className="flex items-center gap-2 mb-6">
            <KnowledgePoint size="sm" pulse={false} />
            <h2 className="text-xs font-mono font-semibold tracking-[0.28em] text-gold uppercase">
              The Evolution Pipeline // Friction to Software
            </h2>
          </div>

          {/* Pipeline Visual Stack */}
          <div className="grid gap-3 sm:grid-cols-5 items-center text-center font-mono text-xs">
            {/* Step 1: Chaos */}
            <div className="border border-border/70 border-dashed bg-background/50 p-4 rounded-xs text-stone">
              <p className="text-[0.625rem] text-muted-foreground uppercase tracking-widest mb-1">
                Raw Input
              </p>
              <p className="font-semibold text-stone">PDF / Excel / WhatsApp</p>
              <p className="text-[0.6875rem] mt-1 text-muted-foreground">Scattered Manual Data</p>
            </div>

            <div className="hidden sm:flex justify-center text-gold">→</div>

            {/* Step 2: Understand & Structure */}
            <div className="border border-gold/40 bg-gold/[0.04] p-4 rounded-xs text-foreground">
              <p className="text-[0.625rem] text-gold uppercase tracking-widest mb-1">
                Vidyarthi Schema
              </p>
              <p className="font-semibold text-primary">Understand & Structure</p>
              <p className="text-[0.6875rem] mt-1 text-muted-foreground">Domain Normalization</p>
            </div>

            <div className="hidden sm:flex justify-center text-teal">→</div>

            {/* Step 3: Deployed System */}
            <div className="border border-teal/40 bg-teal/[0.05] p-4 rounded-xs text-foreground">
              <p className="text-[0.625rem] text-teal uppercase tracking-widest mb-1">
                Living System
              </p>
              <p className="font-semibold text-teal">BOQ Management OS</p>
              <p className="text-[0.6875rem] mt-1 text-muted-foreground">Real-Time Intelligence</p>
            </div>
          </div>
        </div>

        {/* Featured Visual Dashboard Display */}
        <div className="mt-12 rounded-xs border border-border bg-card overflow-hidden shadow-architectural">
          <div className="relative">
            <img
              src={boqImage}
              alt="Architectural software interface layout for bill of quantities, suppliers, and project reports"
              width={1536}
              height={1024}
              className="w-full h-auto object-cover max-h-[55vh]"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-80"
              aria-hidden="true"
            />
          </div>

          <div className="p-6 border-t border-border/60 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-teal animate-pulse" />
              <span>CUSTOM SOFTWARE ENGINE · PROPRIETARY ARCHITECTURE</span>
            </div>
            <span>TECH: TANSTACK / REACT / NITRO / TYPE-SAFE ENGINE</span>
          </div>
        </div>

        {/* Interactive 6-Step Workflow Representation */}
        <div className="mt-16">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2">
                <KnowledgePoint size="sm" pulse={true} />
                <h2 className="text-xs font-mono font-semibold tracking-[0.28em] text-gold uppercase">
                  Interactive System Workflow Simulator
                </h2>
              </div>
              <p className="display text-2xl sm:text-3xl font-light text-foreground mt-2">
                Walk through how unstructured data becomes operational clarity.
              </p>
            </div>

            {/* Step Controller Counter */}
            <span className="font-mono text-xs text-muted-foreground border border-border px-3 py-1.5 rounded-xs">
              STEP {currentWorkflow.id} / 06
            </span>
          </div>

          {/* Workflow Step Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 border border-border bg-background p-2">
            {workflowSteps.map((ws, idx) => {
              const isActive = activeWorkflowIdx === idx;
              return (
                <button
                  key={ws.id}
                  type="button"
                  onClick={() => setActiveWorkflowIdx(idx)}
                  className={`flex flex-col items-start p-3 text-left transition-all duration-300 focus-ring rounded-xs border ${
                    isActive
                      ? "border-teal bg-card shadow-[0_0_16px_-6px_var(--teal)] text-foreground"
                      : "border-border/40 bg-background/50 hover:border-border text-muted-foreground"
                  }`}
                >
                  <span
                    className={`font-mono text-[0.625rem] font-semibold ${
                      isActive ? "text-teal" : "text-stone"
                    }`}
                  >
                    {ws.id} // {ws.phase}
                  </span>
                  <span className="text-xs font-medium mt-1 font-sans line-clamp-1">
                    {ws.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Workflow Stage Deep-Dive Card */}
          <div className="mt-4 border border-border bg-card p-8 lg:p-10 rounded-xs">
            <div className="grid gap-8 lg:grid-cols-12">
              {/* Left Column: Stage Explanation & Operational Benefit */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-teal uppercase">
                    <span>STAGE {currentWorkflow.id}</span>
                    <span>·</span>
                    <span>{currentWorkflow.subtitle}</span>
                  </div>

                  <h3 className="display mt-3 text-3xl font-light text-foreground">
                    {currentWorkflow.title}
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground font-normal">
                    {currentWorkflow.description}
                  </p>

                  <div className="mt-6 space-y-3 text-xs font-mono">
                    <div className="border border-border/60 bg-background/60 p-3 rounded-xs">
                      <p className="text-[0.625rem] text-stone uppercase tracking-wider">
                        Initial Input State
                      </p>
                      <p className="mt-1 text-foreground/90">{currentWorkflow.inputState}</p>
                    </div>

                    <div className="border border-teal/40 bg-teal/[0.03] p-3 rounded-xs">
                      <p className="text-[0.625rem] text-teal uppercase tracking-wider">
                        Transformed Output State
                      </p>
                      <p className="mt-1 text-foreground/90">{currentWorkflow.outputState}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 border-t border-border/60 pt-4 flex items-start gap-2.5">
                  <KnowledgePoint size="sm" pulse={false} className="mt-1" />
                  <p className="text-xs font-medium text-foreground font-sans leading-relaxed">
                    <strong className="text-gold font-mono uppercase mr-2 text-[0.625rem]">
                      Operational Impact:
                    </strong>
                    {currentWorkflow.operationalBenefit}
                  </p>
                </div>
              </div>

              {/* Right Column: Simulated Data Transformation Console */}
              <div className="lg:col-span-6">
                <div className="h-full rounded-xs border border-border/80 bg-background p-5 font-mono text-xs flex flex-col justify-between">
                  <div>
                    {/* Console Header */}
                    <div className="flex items-center justify-between border-b border-border/60 pb-3 text-[0.625rem] text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-destructive/80" />
                        <span className="h-2 w-2 rounded-full bg-gold/80" />
                        <span className="h-2 w-2 rounded-full bg-teal/80" />
                        <span className="ml-2 font-mono">schema_transformer.ts</span>
                      </div>
                      <span className="text-teal">JSON_VALIDATED</span>
                    </div>

                    {/* Raw vs Transformed Artifacts */}
                    <div className="mt-4 space-y-4">
                      <div>
                        <p className="text-[0.625rem] text-stone uppercase tracking-widest">
                          // Raw Ingestion Payload
                        </p>
                        <pre className="mt-1.5 p-2.5 bg-card/60 border border-border/40 text-[0.6875rem] text-stone overflow-x-auto rounded-xs">
                          <code>{currentWorkflow.dataSnippet.raw}</code>
                        </pre>
                      </div>

                      <div>
                        <p className="text-[0.625rem] text-teal uppercase tracking-widest">
                          // Normalized Structured Record
                        </p>
                        <pre className="mt-1.5 p-3 bg-teal/[0.04] border border-teal/30 text-[0.6875rem] text-teal/95 overflow-x-auto rounded-xs leading-relaxed">
                          <code>{currentWorkflow.dataSnippet.transformed}</code>
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Navigation Buttons for Workflow */}
                  <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between">
                    <button
                      type="button"
                      disabled={activeWorkflowIdx === 0}
                      onClick={() => setActiveWorkflowIdx((prev) => Math.max(0, prev - 1))}
                      className="text-[0.6875rem] font-semibold tracking-wider text-muted-foreground hover:text-foreground disabled:opacity-30 disabled:hover:text-muted-foreground uppercase"
                    >
                      ← Previous Stage
                    </button>

                    <button
                      type="button"
                      disabled={activeWorkflowIdx === workflowSteps.length - 1}
                      onClick={() =>
                        setActiveWorkflowIdx((prev) => Math.min(workflowSteps.length - 1, prev + 1))
                      }
                      className="text-[0.6875rem] font-semibold tracking-wider text-teal hover:text-teal/80 disabled:opacity-30 disabled:hover:text-teal uppercase flex items-center gap-1.5"
                    >
                      <span>Next Stage</span>
                      <span>→</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Case Study Footer & Action */}
        <div className="mt-16 border-t border-border/80 pt-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-sm text-muted-foreground">Facing similar spreadsheet friction?</p>
            <p className="display text-2xl text-foreground font-light mt-1">
              Let's engineer a custom operating system.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#contact"
              onClick={onClose}
              className="inline-flex items-center gap-3 border border-primary bg-primary px-7 py-3.5 text-xs font-semibold tracking-[0.2em] text-primary-foreground uppercase shadow-[var(--shadow-glow-gold)] transition-all hover:bg-gold-hover focus-ring rounded-xs"
            >
              Request System Architecture
            </a>
            <button
              type="button"
              onClick={onClose}
              className="border border-border px-6 py-3.5 text-xs font-semibold tracking-wider text-muted-foreground uppercase hover:text-foreground focus-ring rounded-xs"
            >
              Back to Overview
            </button>
          </div>
        </div>
      </main>
    </motion.div>
  );
}
