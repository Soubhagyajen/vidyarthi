import React, { createContext, useContext, useEffect, useState, useCallback } from "react";

export type Theme = "dark" | "light" | "system";
export type ResolvedTheme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  resolvedTheme: ResolvedTheme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const STORAGE_KEY = "vidyarthi-theme";

function getSystemTheme(): ResolvedTheme {
  if (typeof window === "undefined") return "dark";
  try {
    return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  } catch {
    return "dark";
  }
}

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  try {
    const saved = localStorage.getItem(STORAGE_KEY) as Theme | null;
    if (saved === "light" || saved === "dark" || saved === "system") {
      return saved;
    }
    // Also check if html element already has class
    if (document.documentElement.classList.contains("light")) {
      return "light";
    }
  } catch {
    // fallback
  }
  return "dark";
}

function applyThemeToDOM(resolved: ResolvedTheme) {
  if (typeof document === "undefined") return;

  const root = document.documentElement;
  const body = document.body;

  if (resolved === "light") {
    root.classList.remove("dark");
    root.classList.add("light");
    root.setAttribute("data-theme", "light");
    root.style.colorScheme = "light";

    if (body) {
      body.classList.remove("dark");
      body.classList.add("light");
      body.setAttribute("data-theme", "light");
    }

    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute("content", "#F7F4EE");
    }
  } else {
    root.classList.remove("light");
    root.classList.add("dark");
    root.setAttribute("data-theme", "dark");
    root.style.colorScheme = "dark";

    if (body) {
      body.classList.remove("light");
      body.classList.add("dark");
      body.setAttribute("data-theme", "dark");
    }

    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute("content", "#11100E");
    }
  }

  // Dispatch custom event for any non-react listeners
  try {
    window.dispatchEvent(
      new CustomEvent("vidyarthi-theme-change", { detail: { theme: resolved } }),
    );
  } catch {
    // ignore
  }
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(getInitialTheme);
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>(() => {
    const initial = getInitialTheme();
    return initial === "system" ? getSystemTheme() : initial;
  });

  // Apply to DOM immediately on mount and on theme changes
  useEffect(() => {
    const resolved = theme === "system" ? getSystemTheme() : theme;
    setResolvedTheme(resolved);
    applyThemeToDOM(resolved);

    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // ignore
    }
  }, [theme]);

  // Handle system preference changes
  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: light)");
    const handleSystemChange = () => {
      if (theme === "system") {
        const sysResolved = mediaQuery.matches ? "light" : "dark";
        setResolvedTheme(sysResolved);
        applyThemeToDOM(sysResolved);
      }
    };

    mediaQuery.addEventListener("change", handleSystemChange);
    return () => mediaQuery.removeEventListener("change", handleSystemChange);
  }, [theme]);

  const setTheme = useCallback((newTheme: Theme) => {
    const resolved = newTheme === "system" ? getSystemTheme() : newTheme;
    applyThemeToDOM(resolved);
    setThemeState(newTheme);
    setResolvedTheme(resolved);
    try {
      localStorage.setItem(STORAGE_KEY, newTheme);
    } catch {
      // ignore
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((prevTheme) => {
      const currentResolved = prevTheme === "system" ? getSystemTheme() : prevTheme;
      const nextResolved: ResolvedTheme = currentResolved === "dark" ? "light" : "dark";
      applyThemeToDOM(nextResolved);
      setResolvedTheme(nextResolved);
      try {
        localStorage.setItem(STORAGE_KEY, nextResolved);
      } catch {
        // ignore
      }
      return nextResolved;
    });
  }, []);

  // Expose helper on window for browser console testing
  useEffect(() => {
    if (typeof window !== "undefined") {
      (window as unknown as { __vidyarthiToggleTheme: () => void }).__vidyarthiToggleTheme =
        toggleTheme;
      (window as unknown as { __vidyarthiSetTheme: (t: Theme) => void }).__vidyarthiSetTheme =
        setTheme;
    }
  }, [toggleTheme, setTheme]);

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (!context) {
    return {
      theme: "dark",
      resolvedTheme: "dark",
      setTheme: () => {},
      toggleTheme: () => {},
    };
  }
  return context;
}
