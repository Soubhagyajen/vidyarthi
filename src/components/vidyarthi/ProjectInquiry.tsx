import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { toast } from "sonner";
import { KnowledgePoint, CALM_EASE } from "./Reveal";

interface FormData {
  serviceType: string;
  problemStatement: string;
  projectStage: string;
  timeline: string;
  name: string;
  email: string;
  company: string;
}

interface FormErrors {
  serviceType?: string;
  problemStatement?: string;
  projectStage?: string;
  timeline?: string;
  name?: string;
  email?: string;
  company?: string;
}

const serviceOptions = [
  {
    id: "website",
    label: "Corporate Website & Brand",
    desc: "Bespoke digital presence, modern architectural platform, or digital flagship",
  },
  {
    id: "software",
    label: "Business & Operational Software",
    desc: "Custom ERP, BOQ calculators, inventory matrix, or internal workflow OS",
  },
  {
    id: "social",
    label: "Social Media & Content Systems",
    desc: "Ongoing digital communication, brand presentation, and growth systems",
  },
  {
    id: "ai",
    label: "AI / Automation Pipelines",
    desc: "Intelligent document parsing, PDF extraction, automated business workflows",
  },
  {
    id: "consulting",
    label: "Discovery & Architectural Consultation",
    desc: "Looking for systems analysis, feasibility research, and technical scoping",
  },
];

const stageOptions = [
  {
    id: "idea",
    label: "Idea / Vision",
    desc: "Starting from a clean concept and strategic roadmap",
  },
  {
    id: "manual",
    label: "Existing Manual Process",
    desc: "Currently handled via Excel, WhatsApp threads, or physical paperwork",
  },
  {
    id: "software",
    label: "Legacy System",
    desc: "Replacing or modernizing outdated software and broken tools",
  },
  {
    id: "scaling",
    label: "Rapid Scaling",
    desc: "Business operations expanding and manual bottlenecks need automation",
  },
  {
    id: "improvement",
    label: "Refinement & Polish",
    desc: "Upgrading visual authority, performance velocity, or user clarity",
  },
];

const timelineOptions = [
  {
    id: "asap",
    label: "Immediate (2–4 weeks)",
    desc: "Ready to initiate architectural sprint promptly",
  },
  { id: "1-3m", label: "1–3 months", desc: "Planned strategic rollout in the upcoming quarter" },
  { id: "3-6m", label: "3–6 months", desc: "Structured enterprise planning cycle" },
  {
    id: "exploring",
    label: "Exploring / Scoping",
    desc: "Early-stage feasibility and technology discovery",
  },
];

interface ProjectInquiryProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export function ProjectInquiry({ isOpen = true, onClose }: ProjectInquiryProps = {}) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const [formData, setFormData] = useState<FormData>({
    serviceType: "Corporate Website & Brand",
    problemStatement: "",
    projectStage: "Existing Manual Process",
    timeline: "1–3 months",
    name: "",
    email: "",
    company: "",
  });

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape" && onClose) {
        onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    if (onClose) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown, onClose]);

  const validateStep = (currentStep: number): boolean => {
    const newErrors: FormErrors = {};

    if (currentStep === 1 && !formData.serviceType) {
      newErrors.serviceType = "Please select what you are looking to build.";
    }

    if (currentStep === 2 && !formData.problemStatement.trim()) {
      newErrors.problemStatement =
        "Please provide a brief description of the problem or objective.";
    } else if (currentStep === 2 && formData.problemStatement.trim().length < 8) {
      newErrors.problemStatement =
        "Please provide a few more details so we can understand your goal.";
    }

    if (currentStep === 3 && !formData.projectStage) {
      newErrors.projectStage = "Please select your current project stage.";
    }

    if (currentStep === 4 && !formData.timeline) {
      newErrors.timeline = "Please select an approximate timeline.";
    }

    if (currentStep === 5) {
      if (!formData.name.trim()) {
        newErrors.name = "Your name is required.";
      }
      if (!formData.email.trim()) {
        newErrors.email = "Your email address is required.";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
        newErrors.email = "Please enter a valid email address.";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep((prev) => Math.min(5, prev + 1));
    }
  };

  const handleBack = () => {
    setErrors({});
    setStep((prev) => Math.max(1, prev - 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(5)) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast.success("Project brief prepared successfully", {
        description: "Review your structured scoping brief or launch direct email transmission.",
      });
    }, 600);
  };

  const constructMailtoUrl = () => {
    const subject = encodeURIComponent(
      `[Project Inquiry] ${formData.serviceType} — ${formData.name || "Client"}${
        formData.company ? ` (${formData.company})` : ""
      }`,
    );

    const body = encodeURIComponent(
      `Hello Vidyarthi Studio,\n\n` +
        `Here is our project inquiry and scoping summary:\n\n` +
        `1. SCOPE: ${formData.serviceType}\n` +
        `2. CURRENT STAGE: ${formData.projectStage}\n` +
        `3. TIMELINE: ${formData.timeline}\n` +
        `4. CONTACT: ${formData.name} (${formData.email})${
          formData.company ? `\n5. COMPANY: ${formData.company}` : ""
        }\n\n` +
        `PROBLEM & OBJECTIVE:\n${formData.problemStatement}\n\n` +
        `"Let's understand the problem before we build the solution."\n`,
    );

    return `mailto:soubhagyajena834@gmail.com?subject=${subject}&body=${body}`;
  };

  const copyBriefToClipboard = () => {
    const briefText =
      `Vidyarthi Project Scoping Brief\n` +
      `---------------------------------\n` +
      `Scope: ${formData.serviceType}\n` +
      `Stage: ${formData.projectStage}\n` +
      `Timeline: ${formData.timeline}\n` +
      `Client: ${formData.name} <${formData.email}>\n` +
      (formData.company ? `Company: ${formData.company}\n` : "") +
      `Problem Statement:\n${formData.problemStatement}\n`;

    navigator.clipboard.writeText(briefText);
    toast.success("Brief copied to clipboard", {
      description: "You can paste this directly into your email or document.",
    });
  };

  if (!isOpen) return null;

  const cardContent = (
    <div className="relative mx-auto w-full max-w-3xl rounded-xs border border-border bg-card p-6 sm:p-10 shadow-architectural">
      {/* Top Header & Progress */}
      <div className="border-b border-border/70 pb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <KnowledgePoint size="sm" pulse={!isSubmitted} />
            <span className="font-mono text-xs text-gold tracking-widest uppercase">
              STUDIO SCOPING PORTAL
            </span>
          </div>

          <div className="flex items-center gap-4">
            {!isSubmitted && (
              <span className="font-mono text-xs text-muted-foreground">
                STEP 0{step} <span className="text-stone">/ 05</span>
              </span>
            )}

            {onClose && (
              <button
                type="button"
                onClick={onClose}
                aria-label="Close scoping portal modal"
                className="p-1 text-muted-foreground hover:text-foreground transition-colors focus-ring rounded-xs cursor-pointer"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 stroke-current fill-none"
                  strokeWidth="2"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Hairline Step Progress Track */}
        {!isSubmitted && (
          <div className="mt-4 h-0.5 w-full bg-border overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-gold via-gold to-teal"
              initial={{ width: "20%" }}
              animate={{ width: `${(step / 5) * 100}%` }}
              transition={{ duration: 0.4, ease: CALM_EASE }}
            />
          </div>
        )}
      </div>

      {/* Main Flow Content */}
      <div className="mt-8">
        <AnimatePresence mode="wait">
          {/* SUCCESS VIEW */}
          {isSubmitted ? (
            <motion.div
              key="submitted"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease: CALM_EASE }}
              className="py-4"
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-full border border-teal/40 bg-teal/10 text-teal mb-4">
                  <span className="text-lg font-mono">✓</span>
                </div>
                <h3 className="display text-3xl font-light text-foreground sm:text-4xl">
                  Project Brief Prepared
                </h3>
                <p className="mt-3 text-sm text-primary font-serif italic text-lg">
                  “Let's understand the problem before we build the solution.”
                </p>
                <p className="mt-2 text-xs text-muted-foreground max-w-md mx-auto">
                  Your structured scoping overview is summarized below. Send it directly to our
                  studio or copy the formatted brief.
                </p>
              </div>

              {/* Scoping Summary Box */}
              <div className="mt-8 border border-border/80 bg-background/90 p-6 rounded-xs font-mono text-xs space-y-3">
                <div className="flex justify-between border-b border-border/50 pb-2">
                  <span className="text-stone uppercase">Scope</span>
                  <span className="text-foreground font-semibold">{formData.serviceType}</span>
                </div>
                <div className="flex justify-between border-b border-border/50 pb-2">
                  <span className="text-stone uppercase">Current Stage</span>
                  <span className="text-foreground font-semibold">{formData.projectStage}</span>
                </div>
                <div className="flex justify-between border-b border-border/50 pb-2">
                  <span className="text-stone uppercase">Timeline</span>
                  <span className="text-foreground font-semibold">{formData.timeline}</span>
                </div>
                <div className="flex justify-between border-b border-border/50 pb-2">
                  <span className="text-stone uppercase">Client</span>
                  <span className="text-foreground">
                    {formData.name} &lt;{formData.email}&gt;
                  </span>
                </div>
                {formData.company && (
                  <div className="flex justify-between border-b border-border/50 pb-2">
                    <span className="text-stone uppercase">Company</span>
                    <span className="text-foreground">{formData.company}</span>
                  </div>
                )}
                <div className="pt-2">
                  <span className="text-stone uppercase block mb-1">Problem & Objective</span>
                  <p className="text-muted-foreground leading-relaxed font-sans text-sm">
                    {formData.problemStatement}
                  </p>
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={constructMailtoUrl()}
                  className="btn-primary w-full sm:w-auto text-center flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Launch Direct Email Transmission</span>
                  <span aria-hidden="true">→</span>
                </a>

                <button
                  type="button"
                  onClick={copyBriefToClipboard}
                  className="btn-secondary w-full sm:w-auto text-center flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Copy Scoping Brief</span>
                </button>
              </div>

              <div className="mt-8 text-center">
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setStep(1);
                    if (onClose) onClose();
                  }}
                  className="text-xs font-mono text-muted-foreground hover:text-foreground uppercase tracking-widest focus-ring rounded-xs py-1"
                >
                  [ Done / Return to Overview ]
                </button>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              {/* STEP 1: What are you building? */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ duration: 0.3, ease: CALM_EASE }}
                >
                  <label className="display text-2xl sm:text-3xl font-light text-foreground block">
                    1. What are you looking to build?
                  </label>
                  <p className="mt-2 text-xs text-muted-foreground">
                    Select the primary domain of technology or engagement needed.
                  </p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {serviceOptions.map((opt) => {
                      const isSelected = formData.serviceType === opt.label;
                      return (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => {
                            setFormData((prev) => ({ ...prev, serviceType: opt.label }));
                            setErrors({});
                          }}
                          className={`flex flex-col items-start p-4 text-left transition-all duration-300 focus-ring rounded-xs border ${
                            isSelected
                              ? "border-gold bg-gold/[0.06] shadow-[0_0_16px_-6px_var(--gold)]"
                              : "border-border/60 bg-background/50 hover:border-border hover:bg-card"
                          }`}
                        >
                          <div className="flex w-full items-center justify-between">
                            <span
                              className={`text-sm font-semibold font-sans ${
                                isSelected ? "text-gold" : "text-foreground"
                              }`}
                            >
                              {opt.label}
                            </span>
                            {isSelected && <KnowledgePoint size="sm" pulse={false} />}
                          </div>
                          <span className="mt-1 text-xs text-muted-foreground leading-relaxed">
                            {opt.desc}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                  {errors.serviceType && (
                    <p className="mt-3 text-xs text-destructive font-mono">{errors.serviceType}</p>
                  )}
                </motion.div>
              )}

              {/* STEP 2: The Core Problem */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ duration: 0.3, ease: CALM_EASE }}
                >
                  <label
                    htmlFor="problem-textarea"
                    className="display text-2xl sm:text-3xl font-light text-foreground block"
                  >
                    2. Describe the friction or goal
                  </label>
                  <p className="mt-2 text-xs text-muted-foreground">
                    What does your team do manually today, or what is the objective of the project?
                  </p>

                  <div className="mt-6">
                    <textarea
                      id="problem-textarea"
                      rows={5}
                      value={formData.problemStatement}
                      onChange={(e) => {
                        setFormData((prev) => ({ ...prev, problemStatement: e.target.value }));
                        setErrors({});
                      }}
                      placeholder="e.g. We spend 15 hours a week updating spreadsheets, or we need a modern architectural web presence for our industrial brand..."
                      className="w-full rounded-xs border border-border bg-background/80 p-4 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold font-sans resize-none"
                    />
                    {errors.problemStatement && (
                      <p className="mt-2 text-xs text-destructive font-mono">
                        {errors.problemStatement}
                      </p>
                    )}
                  </div>
                </motion.div>
              )}

              {/* STEP 3: Current project stage */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ duration: 0.3, ease: CALM_EASE }}
                >
                  <label className="display text-2xl sm:text-3xl font-light text-foreground block">
                    3. Current state of the initiative
                  </label>
                  <p className="mt-2 text-xs text-muted-foreground">
                    Where does the project stand today?
                  </p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {stageOptions.map((opt) => {
                      const isSelected = formData.projectStage === opt.label;
                      return (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => {
                            setFormData((prev) => ({ ...prev, projectStage: opt.label }));
                            setErrors({});
                          }}
                          className={`flex flex-col items-start p-4 text-left transition-all duration-300 focus-ring rounded-xs border ${
                            isSelected
                              ? "border-gold bg-gold/[0.06] shadow-[0_0_16px_-6px_var(--gold)]"
                              : "border-border/60 bg-background/50 hover:border-border hover:bg-card"
                          }`}
                        >
                          <div className="flex w-full items-center justify-between">
                            <span
                              className={`text-sm font-semibold font-sans ${
                                isSelected ? "text-gold" : "text-foreground"
                              }`}
                            >
                              {opt.label}
                            </span>
                            {isSelected && <KnowledgePoint size="sm" pulse={false} />}
                          </div>
                          <span className="mt-1 text-xs text-muted-foreground leading-relaxed">
                            {opt.desc}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                  {errors.projectStage && (
                    <p className="mt-3 text-xs text-destructive font-mono">{errors.projectStage}</p>
                  )}
                </motion.div>
              )}

              {/* STEP 4: Approximate timeline */}
              {step === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ duration: 0.3, ease: CALM_EASE }}
                >
                  <label className="display text-2xl sm:text-3xl font-light text-foreground block">
                    4. Approximate timeline
                  </label>
                  <p className="mt-2 text-xs text-muted-foreground">
                    When are you planning to begin implementation?
                  </p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {timelineOptions.map((opt) => {
                      const isSelected = formData.timeline === opt.label;
                      return (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => {
                            setFormData((prev) => ({ ...prev, timeline: opt.label }));
                            setErrors({});
                          }}
                          className={`flex flex-col items-start p-4 text-left transition-all duration-300 focus-ring rounded-xs border ${
                            isSelected
                              ? "border-teal bg-teal/[0.06] shadow-[0_0_16px_-6px_var(--teal)]"
                              : "border-border/60 bg-background/50 hover:border-border hover:bg-card"
                          }`}
                        >
                          <div className="flex w-full items-center justify-between">
                            <span
                              className={`text-sm font-semibold font-sans ${
                                isSelected ? "text-teal" : "text-foreground"
                              }`}
                            >
                              {opt.label}
                            </span>
                            {isSelected && <KnowledgePoint size="sm" pulse={false} />}
                          </div>
                          <span className="mt-1 text-xs text-muted-foreground leading-relaxed">
                            {opt.desc}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                  {errors.timeline && (
                    <p className="mt-3 text-xs text-destructive font-mono">{errors.timeline}</p>
                  )}
                </motion.div>
              )}

              {/* STEP 5: Contact information */}
              {step === 5 && (
                <motion.div
                  key="step5"
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ duration: 0.3, ease: CALM_EASE }}
                >
                  <label className="display text-2xl sm:text-3xl font-light text-foreground block">
                    5. Contact information
                  </label>
                  <p className="mt-2 text-xs text-muted-foreground">
                    Where can our architecture team send your structured scoping feedback?
                  </p>

                  <div className="mt-6 space-y-4">
                    <div>
                      <label
                        htmlFor="name-input"
                        className="block text-xs font-mono uppercase text-stone mb-1.5"
                      >
                        Your Name <span className="text-gold">*</span>
                      </label>
                      <input
                        id="name-input"
                        type="text"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData((prev) => ({ ...prev, name: e.target.value }));
                          setErrors({});
                        }}
                        placeholder="e.g. Soubhagya Jena"
                        className="w-full rounded-xs border border-border bg-background/80 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold font-sans"
                      />
                      {errors.name && (
                        <p className="mt-1.5 text-xs text-destructive font-mono">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email-input"
                        className="block text-xs font-mono uppercase text-stone mb-1.5"
                      >
                        Email Address <span className="text-gold">*</span>
                      </label>
                      <input
                        id="email-input"
                        type="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData((prev) => ({ ...prev, email: e.target.value }));
                          setErrors({});
                        }}
                        placeholder="e.g. soubhagya@example.com"
                        className="w-full rounded-xs border border-border bg-background/80 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold font-sans"
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-xs text-destructive font-mono">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="company-input"
                        className="block text-xs font-mono uppercase text-stone mb-1.5"
                      >
                        Company / Organization (Optional)
                      </label>
                      <input
                        id="company-input"
                        type="text"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, company: e.target.value }))
                        }
                        placeholder="e.g. Enterprise Infra Pvt Ltd"
                        className="w-full rounded-xs border border-border bg-background/80 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold font-sans"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Navigation Actions */}
              <div className="mt-10 pt-6 border-t border-border/70 flex items-center justify-between">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="text-xs font-mono font-semibold tracking-wider text-muted-foreground hover:text-foreground uppercase py-2 focus-ring rounded-xs cursor-pointer"
                  >
                    ← Previous Step
                  </button>
                ) : (
                  <span className="text-[0.6875rem] font-mono text-stone">
                    // CONFIDENTIAL & BESPOKE
                  </span>
                )}

                {step < 5 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="inline-flex items-center gap-2 border border-primary bg-primary px-6 py-3 text-xs font-semibold tracking-[0.2em] text-primary-foreground uppercase shadow-[var(--shadow-glow-gold)] transition-all hover:bg-gold-hover focus-ring rounded-xs cursor-pointer"
                  >
                    Next Step
                    <span aria-hidden="true">→</span>
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 border border-primary bg-primary px-8 py-3.5 text-xs font-semibold tracking-[0.2em] text-primary-foreground uppercase shadow-[var(--shadow-glow-gold)] transition-all hover:bg-gold-hover disabled:opacity-50 focus-ring rounded-xs cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-primary-foreground animate-ping" />
                        Structuring Brief...
                      </span>
                    ) : (
                      <>
                        Review & Transmit Brief
                        <span aria-hidden="true">→</span>
                      </>
                    )}
                  </button>
                )}
              </div>
            </form>
          )}
        </AnimatePresence>
      </div>
    </div>
  );

  if (onClose) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-md p-4 sm:p-6 overflow-y-auto">
        <div className="relative w-full max-w-3xl my-8">{cardContent}</div>
      </div>
    );
  }

  return cardContent;
}
