import { SectionHeading, Reveal } from "./Reveal";
import repImage from "@/assets/work-rep.jpg";
import boqImage from "@/assets/work-boq.jpg";

export function Work() {
  return (
    <section id="work" className="relative border-t border-border py-28 lg:py-40">
      <div className="mx-auto max-w-[88rem] px-6 lg:px-12">
        <SectionHeading label="Selected Work" title="Built for the Real World." />

        {/* Featured case study */}
        <Reveal delay={0.08}>
          <article className="group mt-16 border border-border">
            <div className="relative overflow-hidden">
              <img
                src={repImage}
                alt="REP Pvt Ltd corporate website shown on a laptop resting on stone"
                loading="lazy"
                width={1536}
                height={1024}
                className="h-[46vh] w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.03] lg:h-[68vh]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <span className="absolute top-6 left-6 border border-primary/40 bg-background/70 px-4 py-2 text-[0.6rem] font-semibold tracking-[0.24em] text-primary uppercase backdrop-blur-md">
                Live
              </span>
            </div>
            <div className="grid gap-8 p-8 lg:grid-cols-12 lg:p-12">
              <div className="lg:col-span-5">
                <p className="text-[0.65rem] font-semibold tracking-[0.28em] text-muted-foreground uppercase">
                  Corporate Website
                </p>
                <h3 className="display mt-4 text-4xl lg:text-5xl">REP Pvt Ltd</h3>
              </div>
              <div className="lg:col-span-7">
                <p className="max-w-xl text-sm leading-relaxed text-muted-foreground lg:text-base">
                  A modern digital presence for an MEP engineering company, designed to communicate
                  its services, projects and expertise with clarity and confidence.
                </p>
                <a
                  href="#contact"
                  className="mt-8 inline-flex items-center gap-3 text-[0.7rem] font-semibold tracking-[0.22em] text-primary uppercase"
                >
                  View Case Study
                  <span className="transition-transform duration-500 group-hover:translate-x-1.5">→</span>
                </a>
              </div>
            </div>
          </article>
        </Reveal>

        {/* In development */}
        <Reveal delay={0.12}>
          <article className="mt-px grid border border-border border-t-0 lg:grid-cols-2">
            <div className="order-2 p-8 lg:order-1 lg:p-14">
              <span className="inline-flex items-center gap-2 border border-teal/40 px-4 py-2 text-[0.6rem] font-semibold tracking-[0.24em] text-teal uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-teal" />
                In Development
              </span>
              <h3 className="display mt-8 text-4xl lg:text-5xl">BOQ Management System</h3>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground lg:text-base">
                A custom digital system designed to simplify material, BOQ and project management for
                businesses that still rely heavily on spreadsheets and manual workflows.
              </p>
              <ul className="mt-10 grid grid-cols-2 gap-px border border-border bg-border sm:grid-cols-3">
                {["BOQ", "Materials", "Projects", "Suppliers", "Quantities", "Reports"].map((m) => (
                  <li
                    key={m}
                    className="bg-background px-4 py-4 text-[0.65rem] font-semibold tracking-[0.2em] text-muted-foreground uppercase"
                  >
                    {m}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative order-1 min-h-[38vh] overflow-hidden lg:order-2">
              <img
                src={boqImage}
                alt="Transparent futuristic dashboard showing materials, suppliers and project reports"
                loading="lazy"
                width={1536}
                height={1024}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent" />
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
