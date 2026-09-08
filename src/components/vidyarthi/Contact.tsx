import { useState } from "react";
import { ProjectInquiry } from "./ProjectInquiry";
import { KnowledgePoint } from "./Reveal";

export function Contact() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  return (
    <>
      {/* Editorial Conversion Section */}
      <section
        id="contact"
        aria-label="Contact Vidyarthi"
        className="grain relative overflow-hidden border-t border-border py-20 sm:py-28 lg:py-40 bg-background transition-colors duration-400"
      >
        <div className="hairline-grid absolute inset-0 opacity-20" aria-hidden="true" />
        <div className="grain-layer" aria-hidden="true" />

        <div className="relative mx-auto max-w-[88rem] px-4 sm:px-6 lg:px-12">
          <div className="grid gap-12 sm:gap-16 lg:grid-cols-12 lg:items-start">
            {/* Left Column: Architectural Call to Action */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2.5">
                <KnowledgePoint size="sm" pulse={true} />
                <p className="eyebrow text-[0.625rem] sm:text-xs">Start a Conversation</p>
              </div>

              <div className="rule-line mt-4 sm:mt-5 w-24 sm:w-28" aria-hidden="true" />

              <h2 className="display mt-5 sm:mt-6 text-3xl sm:text-5xl lg:text-[4.25rem] font-light leading-[1.08] text-foreground">
                Let’s understand
                <br />
                your challenge.
              </h2>

              <p className="mt-6 sm:mt-8 text-base sm:text-lg leading-relaxed text-muted-foreground font-normal max-w-xl">
                Whether you need a bespoke corporate web platform, structured social media
                management, or a custom operational software system — we start with curiosity.
              </p>

              {/* Scoping Portal Trigger CTA */}
              <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => setIsInquiryOpen(true)}
                  className="btn-primary flex items-center gap-2 cursor-pointer text-xs sm:text-sm"
                >
                  <span>Open Architectural Scoping Portal</span>
                  <span aria-hidden="true">→</span>
                </button>

                <a
                  href="mailto:soubhagyajena834@gmail.com"
                  className="btn-secondary flex items-center gap-2 cursor-pointer text-xs sm:text-sm"
                >
                  <span>soubhagyajena834@gmail.com</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>

            {/* Right Column: Studio Information & Quick Spec */}
            <div className="lg:col-span-5">
              <div className="border border-border bg-card p-6 sm:p-8 shadow-architectural">
                <div className="flex items-center justify-between border-b border-border/80 pb-4">
                  <span className="font-mono text-xs font-semibold tracking-widest text-gold uppercase">
                    Studio Dossier
                  </span>
                  <span className="text-[0.625rem] font-mono text-teal">
                    ACCEPTING SELECT CLIENTS
                  </span>
                </div>

                <div className="mt-6 space-y-4 sm:space-y-5 text-xs sm:text-sm font-mono">
                  <div className="flex items-start justify-between border-b border-border/40 pb-3">
                    <span className="text-muted-foreground">FOUNDER:</span>
                    <span className="text-foreground font-semibold">Soubhagya Jena</span>
                  </div>

                  <div className="flex items-start justify-between border-b border-border/40 pb-3">
                    <span className="text-muted-foreground">STUDIO TYPE:</span>
                    <span className="text-foreground">Bespoke Software & Digital Systems</span>
                  </div>

                  <div className="flex items-start justify-between border-b border-border/40 pb-3">
                    <span className="text-muted-foreground">SERVICES:</span>
                    <span className="text-right text-foreground">
                      Web Platforms · Social Media · Systems
                    </span>
                  </div>

                  <div className="flex items-start justify-between border-b border-border/40 pb-3">
                    <span className="text-muted-foreground">AVERAGE SPRINT:</span>
                    <span className="text-foreground">2 – 6 Weeks to Production</span>
                  </div>

                  <div className="flex items-start justify-between">
                    <span className="text-muted-foreground">RESPONSE TIME:</span>
                    <span className="text-gold">Within 24 Business Hours</span>
                  </div>
                </div>

                <div className="mt-6 sm:mt-8 border-t border-border/60 pt-4">
                  <p className="text-[0.6875rem] text-muted-foreground leading-relaxed font-sans">
                    Every project is personally designed and engineered by Soubhagya Jena. Direct
                    collaboration, zero intermediary layers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Architectural Scoping Portal Modal */}
      {isInquiryOpen && <ProjectInquiry isOpen={true} onClose={() => setIsInquiryOpen(false)} />}
    </>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/60 py-12 sm:py-16 text-foreground transition-colors duration-400">
      <div className="mx-auto max-w-[88rem] px-4 sm:px-6 lg:px-12">
        {/* Main Footer Navigation Grid */}
        <div className="grid gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-12">
          {/* Column 1: Moniker & Purpose */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2">
              <span className="display text-2xl font-light text-foreground">Vidyarthi</span>
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            </div>
            <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground font-normal max-w-sm">
              Software studio building modern web platforms, structured social media management, and
              custom operational software.
            </p>
            <p className="mt-4 text-xs font-mono text-stone">
              Rooted in curiosity. Engineered with precision.
            </p>
          </div>

          {/* Column 2: Studio Navigation */}
          <div className="lg:col-span-2">
            <p className="font-mono text-xs font-semibold tracking-widest uppercase text-gold">
              Explore
            </p>
            <ul className="mt-4 space-y-2.5 text-xs sm:text-sm font-sans text-muted-foreground">
              <li>
                <a href="#services" className="hover:text-gold transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-gold transition-colors">
                  Selected Work
                </a>
              </li>
              <li>
                <a href="#method" className="hover:text-gold transition-colors">
                  Methodology
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-gold transition-colors">
                  Philosophy
                </a>
              </li>
              <li>
                <a href="#builder" className="hover:text-gold transition-colors">
                  The Builder
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Connect with Builder & Social */}
          <div className="lg:col-span-3">
            <p className="font-mono text-xs font-semibold tracking-widest uppercase text-gold">
              Connect
            </p>
            <ul className="mt-4 space-y-2.5 text-xs sm:text-sm font-sans text-muted-foreground">
              <li>
                <a
                  href="https://www.linkedin.com/in/soubhagya-jena-a02043253"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile of Soubhagya Jena (opens in new tab)"
                  className="hover:text-gold transition-colors inline-flex items-center gap-1.5"
                >
                  <span>LinkedIn · Soubhagya Jena</span>
                  <span className="text-[0.625rem]" aria-hidden="true">
                    ↗
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UCcfvPfLBngyVb0cqOKyo7cg"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube Channel of Vidyarthi and Soubhagya Jena (opens in new tab)"
                  className="hover:text-gold transition-colors inline-flex items-center gap-1.5"
                >
                  <span>YouTube Channel</span>
                  <span className="text-[0.625rem]" aria-hidden="true">
                    ↗
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Soubhagyajen"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile of Soubhagya Jena (opens in new tab)"
                  className="hover:text-gold transition-colors inline-flex items-center gap-1.5"
                >
                  <span>GitHub · Soubhagyajen</span>
                  <span className="text-[0.625rem]" aria-hidden="true">
                    ↗
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:soubhagyajena834@gmail.com"
                  className="hover:text-gold transition-colors inline-flex items-center gap-1.5"
                >
                  <span>soubhagyajena834@gmail.com</span>
                  <span className="text-[0.625rem]" aria-hidden="true">
                    ↗
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Client Ecosystem */}
          <div className="lg:col-span-3">
            <p className="font-mono text-xs font-semibold tracking-widest uppercase text-gold">
              Client Showcase
            </p>
            <div className="mt-4 border border-border/80 bg-background/80 p-4 rounded-xs">
              <a
                href="https://www.reppvtltd.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit REP Pvt Ltd official website (opens in new tab)"
                className="group block"
              >
                <div className="flex items-center justify-between text-foreground group-hover:text-gold transition-colors">
                  <span className="font-semibold text-xs sm:text-sm">REP Pvt Ltd</span>
                  <span className="font-mono text-xs">↗</span>
                </div>
                <p className="mt-1 text-[0.6875rem] text-muted-foreground leading-relaxed">
                  Corporate web platform, brand presentation, and digital presence systems.
                </p>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright and Architectural Colophon */}
        <div className="mt-12 sm:mt-16 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border/60 pt-6 sm:pt-8 text-[0.6875rem] font-mono text-stone">
          <p>
            © {new Date().getFullYear()} Vidyarthi Studio. Founded by Soubhagya Jena. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4">
            <span>DESIGNED & ENGINEERED IN HYDERABAD</span>
            <span>·</span>
            <span>STABLE RELEASE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
