import { SectionHeading, Reveal } from "./Reveal";

const steps = [
  { id: "01", sa: "जिज्ञासा", en: "Curiosity", copy: "We ask the right questions." },
  { id: "02", sa: "ज्ञान", en: "Understanding", copy: "We learn how your business actually works." },
  { id: "03", sa: "कल्पना", en: "Ideation", copy: "We transform problems into possibilities." },
  { id: "04", sa: "निर्माण", en: "Building", copy: "We design and develop the solution." },
  { id: "05", sa: "समाधान", en: "Solution", copy: "We deliver technology that solves a real problem." },
  { id: "06", sa: "उत्कर्ष", en: "Growth", copy: "We improve, automate and scale." },
];

export function Method() {
  return (
    <section
      id="method"
      className="grain relative overflow-hidden border-t border-border py-28 lg:py-40"
      style={{
        background:
          "linear-gradient(180deg, var(--background), color-mix(in oklab, var(--forest) 26%, var(--background)) 55%, var(--background))",
      }}
    >
      <div className="grain-layer" />
      <div className="relative mx-auto max-w-[88rem] px-6 lg:px-12">
        <SectionHeading
          label="The Vidyarthi Method"
          title="How we think, from question to growth."
          intro="Six movements drawn from the learning rhythm of a Gurukul — observe, understand, imagine, build, solve, refine."
        />

        <ol className="mt-16 grid gap-px border border-border bg-border lg:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.07} className="bg-background/80">
              <li className="group relative h-full p-8 transition-colors duration-700 hover:bg-card lg:p-10">
                <span className="index-num">{s.id}</span>
                <p className="mt-6 font-serif text-3xl text-primary/90">{s.sa}</p>
                <h3 className="display mt-3 text-2xl text-foreground">{s.en}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.copy}</p>
                <span className="absolute bottom-0 left-0 h-px w-0 bg-primary transition-all duration-700 group-hover:w-full" />
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
