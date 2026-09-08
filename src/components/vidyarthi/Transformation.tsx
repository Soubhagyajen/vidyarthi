import { motion } from "motion/react";
import { SectionHeading, Reveal } from "./Reveal";

const before = ["PDFs", "Excel Sheets", "WhatsApp", "Paperwork", "Manual Calculations", "Repetitive Work"];
const middle = ["Understand", "Design", "Build", "Automate"];
const after = ["Dashboard", "Digital Workflow", "Automation", "AI", "Business Intelligence"];

const scatter = [
  { x: -14, y: -8, r: -6 },
  { x: 18, y: 6, r: 4 },
  { x: -8, y: 14, r: 5 },
  { x: 12, y: -12, r: -3 },
  { x: -18, y: 4, r: 7 },
  { x: 8, y: 12, r: -5 },
];

export function Transformation() {
  return (
    <section className="grain relative overflow-hidden border-t border-border py-28 lg:py-40">
      <div className="hairline-grid absolute inset-0 opacity-30" />
      <div className="grain-layer" />
      <div className="relative mx-auto max-w-[88rem] px-6 lg:px-12">
        <SectionHeading
          label="Problem → Solution"
          title="From Manual to Meaningful."
          intro="Scattered files and manual habits become one calm, connected system."
        />

        <div className="mt-16 grid items-stretch gap-px border border-border bg-border lg:grid-cols-3">
          {/* BEFORE */}
          <div className="bg-background p-8 lg:p-10">
            <p className="text-[0.65rem] font-semibold tracking-[0.28em] text-muted-foreground uppercase">
              Before
            </p>
            <div className="mt-10 space-y-3">
              {before.map((b, i) => {
                const s = scatter[i] ?? { x: 0, y: 10, r: 0 };
                return (
                <motion.div
                  key={b}
                  initial={{ opacity: 0, x: s.x, y: s.y, rotate: s.r }}
                  whileInView={{ opacity: 1, x: 0, y: 0, rotate: s.r / 2 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="border border-border border-dashed px-4 py-3 text-sm text-stone"
                >
                  {b}
                </motion.div>
                );
              })}
            </div>
          </div>

          {/* VIDYARTHI */}
          <div
            className="bg-background p-8 lg:p-10"
            style={{
              background:
                "linear-gradient(180deg, color-mix(in oklab, var(--forest) 30%, var(--background)), var(--background))",
            }}
          >
            <p className="eyebrow">Vidyarthi</p>
            <div className="mt-10 space-y-4">
              {middle.map((m, i) => (
                <Reveal key={m} delay={0.2 + i * 0.1}>
                  <div className="flex items-center gap-4">
                    <span className="index-num w-6">{`0${i + 1}`}</span>
                    <span className="display text-2xl lg:text-3xl">{m}</span>
                  </div>
                  <div className="rule-line mt-4 w-full" />
                </Reveal>
              ))}
            </div>
            <p className="mt-10 text-sm leading-relaxed text-muted-foreground">
              We learn the process before we replace it — so the system fits the business, not the
              other way around.
            </p>
          </div>

          {/* AFTER */}
          <div className="bg-background p-8 lg:p-10">
            <p className="text-[0.65rem] font-semibold tracking-[0.28em] text-teal uppercase">After</p>
            <div className="mt-10 space-y-3">
              {after.map((a, i) => (
                <motion.div
                  key={a}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.5 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-center justify-between border border-teal/25 bg-teal/[0.04] px-4 py-3 text-sm text-foreground"
                >
                  {a}
                  <span className="h-1.5 w-1.5 rounded-full bg-teal shadow-[0_0_12px_var(--teal)]" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
