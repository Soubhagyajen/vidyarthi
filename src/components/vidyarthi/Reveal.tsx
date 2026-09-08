import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

export const CALM_EASE = [0.22, 1, 0.36, 1] as const;

export type RevealDirection = "up" | "down" | "left" | "right" | "none";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  distance?: number;
  direction?: RevealDirection;
  className?: string;
}

export function Reveal({
  children,
  delay = 0,
  duration = 0.85,
  distance = 24,
  direction = "up",
  className,
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const getInitialOffset = () => {
    switch (direction) {
      case "up":
        return { opacity: 0, y: distance };
      case "down":
        return { opacity: 0, y: -distance };
      case "left":
        return { opacity: 0, x: distance };
      case "right":
        return { opacity: 0, x: -distance };
      case "none":
      default:
        return { opacity: 0 };
    }
  };

  return (
    <motion.div
      className={className}
      initial={getInitialOffset()}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration,
        delay,
        ease: CALM_EASE,
      }}
    >
      {children}
    </motion.div>
  );
}

export function LineReveal({
  delay = 0.1,
  duration = 0.9,
  className = "w-28",
}: {
  delay?: number;
  duration?: number;
  className?: string;
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div aria-hidden="true" className={`rule-line ${className}`} />;
  }

  return (
    <motion.div
      aria-hidden="true"
      className={`rule-line origin-left ${className}`}
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration,
        delay,
        ease: CALM_EASE,
      }}
    />
  );
}

export function KnowledgePoint({
  className = "",
  size = "md",
  pulse = true,
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
  pulse?: boolean;
}) {
  const sizeClasses = {
    sm: "h-1 w-1",
    md: "h-1.5 w-1.5",
    lg: "h-2 w-2",
  }[size];

  return (
    <span
      className={`relative inline-flex items-center justify-center shrink-0 ${className}`}
      aria-hidden="true"
    >
      {pulse && (
        <span
          className={`absolute ${sizeClasses} rounded-full bg-gold/60 animate-ping opacity-75`}
        />
      )}
      <span
        className={`relative ${sizeClasses} rounded-full bg-gold shadow-[0_0_8px_var(--gold)]`}
      />
    </span>
  );
}

export function SectionHeading({
  label,
  title,
  intro,
  className,
}: {
  label: string;
  title: string;
  intro?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <Reveal>
        <div className="flex items-center gap-3">
          <KnowledgePoint size="sm" pulse={false} />
          <p className="eyebrow">{label}</p>
        </div>
        <LineReveal delay={0.12} className="mt-5 w-28" />
        <h2 className="display mt-6 max-w-3xl text-4xl sm:text-5xl lg:text-6xl text-foreground font-light tracking-tight">
          {title}
        </h2>
        {intro && (
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base font-normal">
            {intro}
          </p>
        )}
      </Reveal>
    </div>
  );
}
