import { useEffect, useCallback } from "react";
import { motion } from "motion/react";
import repImage from "@/assets/work-rep.jpg";
import { KnowledgePoint, CALM_EASE } from "./Reveal";

interface RepCaseStudyProps {
  isOpen: boolean;
  onClose: () => void;
}

const chapters = [
  {
    number: "01",
    title: "The Business",
    subtitle: "Enterprise MEP Engineering",
    content:
      "REP Pvt Ltd is an established engineering contracting firm executing Mechanical, Electrical, and Plumbing (MEP) infrastructure for commercial developments, industrial facilities, and large-scale residential projects.",
    takeaway:
      "Traditional engineering business requiring institutional credibility and transparent capability presentation.",
  },
  {
    number: "02",
    title: "The Problem",
    subtitle: "Legacy Digital Friction",
    content:
      "While REP's on-ground engineering capability was established, their online presence did not reflect their actual technical scale. Project portfolios were scattered across static documents, capabilities were hard to evaluate, and prospective enterprise clients had no clear digital touchpoint.",
    takeaway:
      "The digital touchpoint failed to match the technical rigor and scale of their actual operations.",
  },
  {
    number: "03",
    title: "Understanding",
    subtitle: "The Vidyarthi Immersion",
    content:
      "Before designing anything, we immersed ourselves in the MEP procurement workflow. We analyzed how general contractors, developers, and project managers evaluate MEP partners: scrutinizing past project scales, safety certifications, multi-discipline scope, and engineering leadership.",
    takeaway:
      "Mapped user journeys specifically for architects, procurement directors, and technical evaluators.",
  },
  {
    number: "04",
    title: "The Platform",
    subtitle: "Website Design & Development",
    content:
      "We built a bespoke corporate flagship with clean structural grid layouts, restrained typography (Cormorant Garamond display + Manrope interface), structured project indexes with discipline filtering (Electrical, HVAC, Plumbing, Firefighting), and sub-second performance across all devices.",
    takeaway:
      "Designed with engineering restraint — structural clarity, accessible HTML, and sub-second load times.",
  },
  {
    number: "05",
    title: "Social Media Systems",
    subtitle: "Ongoing Content & Brand Communication",
    content:
      "Beyond the website, Vidyarthi manages REP's ongoing social media presence. We translate technical on-site milestones, safety achievements, and project completions into disciplined, professional brand communication that keeps the company visible and active.",
    takeaway:
      "Ongoing social media management and digital content systems that keep the brand alive.",
  },
  {
    number: "06",
    title: "The Result",
    subtitle: "Comprehensive Digital Presence",
    content:
      "A complete digital transformation that turned a traditional engineering firm into a modern digital brand. Today, REP Pvt Ltd possesses an authoritative corporate flagship and an active social footprint that commands credibility in enterprise procurement pitches.",
    takeaway:
      "A permanent, high-performance digital presence representing the business with quiet confidence.",
  },
];

const capabilities = [
  {
    title: "Corporate Website",
    desc: "Bespoke digital flagship engineered with surgical typography, sub-second latency, and responsive fluid layouts.",
  },
  {
    title: "Social Media Management",
    desc: "Active handling of corporate social channels, transforming engineering milestones into regular brand touchpoints.",
  },
  {
    title: "Brand Presentation",
    desc: "Institutional visual identity system uniting technical schematics, photography, and company credentials.",
  },
  {
    title: "Digital Content",
    desc: "Structured capability briefs, project case highlights, and engineering discipline documentation.",
  },
  {
    title: "Online Identity",
    desc: "Unified online footprint ensuring consistency across web, social media, and digital procurement touchpoints.",
  },
  {
    title: "Ongoing Digital Growth",
    desc: "Continuous technical maintenance, performance monitoring, and strategic digital enhancements.",
  },
];

export function RepCaseStudy({ isOpen, onClose }: RepCaseStudyProps) {
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
      aria-labelledby="rep-case-study-title"
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
          <span className="font-mono text-xs text-gold tracking-widest uppercase">
            CLIENT CASE STUDY // 01
          </span>
          <span className="hidden sm:inline text-stone text-xs">·</span>
          <span className="hidden sm:inline text-xs font-mono text-muted-foreground uppercase">
            REP Pvt Ltd
          </span>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://www.reppvtltd.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 border border-primary/60 bg-primary/10 px-3.5 py-1.5 text-xs font-mono tracking-wider text-primary uppercase transition-all hover:bg-primary hover:text-primary-foreground focus-ring rounded-xs"
          >
            <span>reppvtltd.com</span>
            <span aria-hidden="true">↗</span>
          </a>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close Case Study"
            className="group flex items-center gap-2 border border-border/70 bg-card px-4 py-2 text-xs font-semibold tracking-wider text-foreground uppercase transition-all duration-300 hover:border-gold hover:text-gold focus-ring rounded-xs cursor-pointer"
          >
            <span>Close</span>
            <span className="font-mono text-stone group-hover:text-gold">✕</span>
          </button>
        </div>
      </header>

      {/* Main Editorial Case Study Content */}
      <main className="mx-auto w-full max-w-5xl px-6 py-12 lg:px-12 lg:py-20 flex-1">
        {/* Header Eyebrow & Title */}
        <div className="border-b border-border/70 pb-10">
          <div className="flex flex-wrap items-center gap-3 text-[0.6875rem] font-mono tracking-widest text-muted-foreground uppercase">
            <span className="text-gold">CLIENT: REP PVT LTD</span>
            <span>·</span>
            <span>SCOPE: CORPORATE WEB PLATFORM & SOCIAL MEDIA MANAGEMENT</span>
            <span>·</span>
            <span className="text-teal">STATUS: ACTIVE CLIENT RELATIONSHIP</span>
          </div>

          <h1
            id="rep-case-study-title"
            className="display mt-6 text-4xl sm:text-6xl lg:text-7xl font-light text-foreground tracking-tight"
          >
            REP Pvt Ltd
          </h1>

          <p className="mt-4 text-xl sm:text-2xl font-light text-primary/95 font-serif">
            Digital Presence & Brand Systems for a Premier MEP Engineering Enterprise.
          </p>

          <p className="mt-4 max-w-3xl text-sm sm:text-base leading-relaxed text-muted-foreground font-normal">
            “Vidyarthi helped translate a traditional engineering business into a modern digital
            presence.”
          </p>

          {/* Direct CTA Button */}
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href="https://www.reppvtltd.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 border border-primary bg-primary px-6 py-3 text-xs font-semibold tracking-[0.2em] text-primary-foreground uppercase shadow-[var(--shadow-glow-gold)] transition-all duration-300 hover:bg-gold-hover focus-ring rounded-xs"
            >
              Visit REP Pvt Ltd
              <span aria-hidden="true">↗</span>
            </a>
            <span className="text-xs font-mono text-stone">
              // LIVE PRODUCTION FLAGSHIP: www.reppvtltd.com
            </span>
          </div>
        </div>

        {/* Featured Visual Screen Display */}
        <div className="mt-12 rounded-xs border border-border bg-card overflow-hidden shadow-architectural">
          <div className="relative">
            <img
              src={repImage}
              alt="REP Pvt Ltd corporate digital platform shown on a desktop screen set against stone architecture"
              width={1536}
              height={1024}
              className="w-full h-auto object-cover max-h-[60vh]"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-80"
              aria-hidden="true"
            />
          </div>

          <div className="p-6 border-t border-border/60 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-teal" />
              <span>PRODUCTION PLATFORM · ACTIVE</span>
            </div>
            <span>FRAMEWORK: BESPOKE COMPONENT ARCHITECTURE</span>
            <span className="text-gold">ONGOING SOCIAL MEDIA MANAGEMENT</span>
          </div>
        </div>

        {/* Capability Philosophy Callout */}
        <div className="mt-12 border-l-2 border-primary bg-card/60 p-6">
          <p className="text-xs font-mono tracking-widest text-gold uppercase">
            Beyond the Website
          </p>
          <p className="mt-2 text-sm sm:text-base text-foreground font-light leading-relaxed">
            “Beyond the website, Vidyarthi helps businesses build the systems and content that keep
            their digital presence alive. From technical engineering translation to structured
            social media communication, we ensure the brand compounds authority continuously.”
          </p>
        </div>

        {/* The 6-Movement Transformation Story */}
        <div className="mt-16">
          <div className="flex items-center gap-2 mb-8">
            <KnowledgePoint size="sm" pulse={false} />
            <h2 className="text-xs font-mono font-semibold tracking-[0.28em] text-gold uppercase">
              The Project Narrative // Understand → Create → Build → Grow
            </h2>
          </div>

          <div className="space-y-8">
            {chapters.map((ch) => (
              <article
                key={ch.number}
                className="grid gap-6 border border-border/70 bg-card/60 p-8 lg:grid-cols-12 lg:p-10 transition-colors hover:bg-card"
              >
                <div className="lg:col-span-4">
                  <span className="index-num font-mono">{`MOVEMENT // ${ch.number}`}</span>
                  <h3 className="display mt-2 text-2xl sm:text-3xl font-light text-foreground">
                    {ch.title}
                  </h3>
                  <p className="mt-1 text-xs font-mono text-primary/90 uppercase tracking-wider">
                    {ch.subtitle}
                  </p>
                </div>

                <div className="lg:col-span-8 flex flex-col justify-between">
                  <p className="text-sm sm:text-base leading-relaxed text-muted-foreground font-normal">
                    {ch.content}
                  </p>

                  <div className="mt-6 border-t border-border/60 pt-4 flex items-start gap-2.5">
                    <KnowledgePoint size="sm" pulse={false} className="mt-1" />
                    <p className="text-xs font-medium text-foreground/90 font-sans leading-relaxed">
                      <strong className="text-gold font-mono uppercase mr-2 text-[0.625rem]">
                        Key Insight:
                      </strong>
                      {ch.takeaway}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Technical Architecture Dimensions */}
        <div className="mt-16 border border-border bg-card p-8 lg:p-10">
          <h3 className="text-xs font-mono font-semibold tracking-[0.24em] text-gold uppercase">
            Services Delivered & Managed
          </h3>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="border border-border/50 bg-background/50 p-4 rounded-xs"
              >
                <p className="text-xs font-semibold text-foreground font-sans">{cap.title}</p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground font-normal">
                  {cap.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Case Study Footer & CTA */}
        <div className="mt-16 border-t border-border/80 pt-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-sm text-muted-foreground">Ready to discuss your digital presence?</p>
            <p className="display text-2xl text-foreground font-light mt-1">
              Let's architect your platform.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.reppvtltd.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-border bg-card px-6 py-3.5 text-xs font-semibold tracking-wider text-foreground uppercase hover:border-gold hover:text-gold focus-ring rounded-xs"
            >
              Visit REP Pvt Ltd
              <span aria-hidden="true">↗</span>
            </a>
            <a
              href="#contact"
              onClick={onClose}
              className="inline-flex items-center gap-3 border border-primary bg-primary px-7 py-3.5 text-xs font-semibold tracking-[0.2em] text-primary-foreground uppercase shadow-[var(--shadow-glow-gold)] transition-all hover:bg-gold-hover focus-ring rounded-xs"
            >
              Start a Conversation
            </a>
          </div>
        </div>
      </main>
    </motion.div>
  );
}
