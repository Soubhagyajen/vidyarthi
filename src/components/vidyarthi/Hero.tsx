import { useEffect, useRef, useState } from "react";
import heroImage from "@/assets/hero-gurukul.jpg";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

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
  }, []);

  return (
    <section
      id="top"
      ref={ref}
      className="grain relative flex min-h-[100svh] items-end overflow-hidden"
    >
      <div
        className="absolute inset-[-4%] transition-transform duration-[1200ms] ease-out"
        style={{ transform: `translate3d(${pointer.x * -18}px, ${pointer.y * -14}px, 0) scale(1.04)` }}
      >
        <img
          src={heroImage}
          alt="An ancient stone courtyard at dawn with a modern laptop and holographic interface panels"
          width={1920}
          height={1088}
          className="h-full w-full object-cover"
        />
      </div>

      {/* atmospheric layers */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_65%,transparent_5%,var(--background)_95%)] opacity-80" />
      <div
        className="absolute inset-0 opacity-[0.35] transition-transform duration-[1600ms] ease-out"
        style={{
          transform: `translate3d(${pointer.x * 26}px, ${pointer.y * 20}px, 0)`,
          background:
            "radial-gradient(420px circle at 62% 55%, color-mix(in oklab, var(--teal) 22%, transparent), transparent 70%)",
        }}
      />
      <div className="grain-layer" />

      {/* vertical side label */}
      <div className="absolute top-1/2 left-6 hidden -translate-y-1/2 lg:block">
        <div className="flex flex-col items-center gap-6">
          <span className="h-16 w-px bg-gradient-to-b from-transparent to-primary/60" />
          {["Learn", "Build", "Solve"].map((w) => (
            <span
              key={w}
              className="text-[0.65rem] font-semibold tracking-[0.36em] text-muted-foreground uppercase"
              style={{ writingMode: "vertical-rl" }}
            >
              {w}
            </span>
          ))}
          <span className="h-16 w-px bg-gradient-to-t from-transparent to-primary/60" />
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-[88rem] px-6 pt-40 pb-20 lg:px-12 lg:pb-28">
        <p className="eyebrow">Ancient Wisdom. Modern Solutions.</p>

        <h1 className="display mt-7 text-[16vw] leading-[0.86] sm:text-[11rem] lg:text-[13rem]">
          Vidyarthi
        </h1>

        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-end">
          <p className="display text-3xl text-foreground sm:text-4xl lg:col-span-7 lg:text-[3.25rem]">
            We build technology around the way your business works.
          </p>
          <div className="lg:col-span-5">
            <div className="rule-line mb-6 w-24" />
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
              From digital experiences to custom business software and AI-powered solutions, we turn
              real-world problems into meaningful digital systems.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 bg-primary px-7 py-3.5 text-[0.7rem] font-semibold tracking-[0.2em] text-primary-foreground uppercase transition-all duration-500 hover:shadow-[var(--shadow-glow-gold)]"
              >
                Start a Project
                <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#work"
                className="group inline-flex items-center gap-3 border border-border px-7 py-3.5 text-[0.7rem] font-semibold tracking-[0.2em] text-foreground uppercase transition-all duration-500 hover:border-primary/60"
              >
                Explore Our Work
                <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
