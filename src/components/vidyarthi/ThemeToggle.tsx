import { motion } from "motion/react";
import { useTheme } from "@/lib/theme";
import { KnowledgePoint } from "./Reveal";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { resolvedTheme, toggleTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleTheme();
      }}
      aria-label={isDark ? "Switch to Warm Parchment light theme" : "Switch to Obsidian dark theme"}
      title={isDark ? "Switch to Light theme (Parchment)" : "Switch to Dark theme (Obsidian)"}
      className={`group relative flex cursor-pointer items-center gap-2 border border-border/80 bg-card/80 px-3 py-1.5 text-[0.625rem] font-mono uppercase tracking-widest text-foreground transition-all duration-300 hover:border-gold hover:text-gold focus-ring rounded-xs backdrop-blur-md shadow-xs ${className}`}
    >
      {/* Animated Visual Mode Icon */}
      <div className="relative h-4 w-4 shrink-0 flex items-center justify-center">
        {isDark ? (
          /* Obsidian / Moon Geometry */
          <motion.svg
            key="dark-icon"
            initial={{ rotate: -45, opacity: 0, scale: 0.8 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 45, opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.25 }}
            viewBox="0 0 16 16"
            fill="none"
            className="h-3.5 w-3.5 text-gold"
          >
            <path
              d="M13.5 9.5C12.8 9.8 12 10 11.2 10C7.2 10 4 6.8 4 2.8C4 2 4.2 1.2 4.5 0.5C2 1.5 0.2 4 0.2 6.9C0.2 10.8 3.4 14 7.3 14C10.2 14 12.7 12.2 13.7 9.7L13.5 9.5Z"
              fill="currentColor"
            />
          </motion.svg>
        ) : (
          /* Parchment / Sun Geometry */
          <motion.svg
            key="light-icon"
            initial={{ rotate: 45, opacity: 0, scale: 0.8 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: -45, opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.25 }}
            viewBox="0 0 16 16"
            fill="none"
            className="h-3.5 w-3.5 text-gold"
          >
            <circle cx="8" cy="8" r="3.5" fill="currentColor" />
            <line
              x1="8"
              y1="1"
              x2="8"
              y2="3"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            <line
              x1="8"
              y1="13"
              x2="8"
              y2="15"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            <line
              x1="1"
              y1="8"
              x2="3"
              y2="8"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            <line
              x1="13"
              y1="8"
              x2="15"
              y2="8"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            <line
              x1="3"
              y1="3"
              x2="4.5"
              y2="4.5"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            <line
              x1="11.5"
              y1="11.5"
              x2="13"
              y2="13"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            <line
              x1="3"
              y1="13"
              x2="4.5"
              y2="11.5"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            <line
              x1="11.5"
              y1="4.5"
              x2="13"
              y2="3"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </motion.svg>
        )}
      </div>

      {/* Mode Label */}
      <span className="hidden sm:inline transition-colors group-hover:text-gold font-medium">
        {isDark ? "Obsidian" : "Parchment"}
      </span>

      <KnowledgePoint size="sm" pulse={false} className="opacity-60 group-hover:opacity-100" />
    </button>
  );
}
