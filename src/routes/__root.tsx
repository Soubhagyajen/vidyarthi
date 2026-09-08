import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import "../styles.css";
import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { ThemeProvider } from "../lib/theme";
import { Toaster } from "@/components/ui/sonner";

const defaultTitle = "Vidyarthi — Ancient Wisdom. Modern Solutions.";
const defaultDescription =
  "Vidyarthi is a digital solutions studio building bespoke websites, custom business software, and AI-powered automation around the way your business actually works.";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Vidyarthi",
  alternateName: "Vidyarthi Digital Solutions Studio",
  url: "https://vidyarthi.studio",
  description: defaultDescription,
  slogan: "Ancient Wisdom. Modern Solutions.",
  knowsAbout: [
    "Custom Web Applications",
    "Enterprise Business Software",
    "BOQ Management Systems",
    "AI & Workflow Automation",
    "Digital Architecture",
  ],
};

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="max-w-md text-center">
        <p className="eyebrow">404 Error</p>
        <h1 className="display mt-4 text-6xl font-light text-foreground">Page not found</h1>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          The page you are looking for does not exist or has been moved to a new location.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center border border-primary bg-primary px-6 py-3 text-xs font-semibold tracking-[0.2em] text-primary-foreground uppercase transition-all duration-300 hover:shadow-[var(--shadow-glow-gold)]"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="max-w-md text-center">
        <p className="eyebrow">System Error</p>
        <h1 className="display mt-4 text-4xl font-light text-foreground">Something went wrong</h1>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          An unexpected error occurred while rendering this page. You can try refreshing or navigate
          back to the home page.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center border border-primary bg-primary px-6 py-3 text-xs font-semibold tracking-[0.2em] text-primary-foreground uppercase transition-all duration-300 hover:shadow-[var(--shadow-glow-gold)]"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center border border-border bg-background px-6 py-3 text-xs font-semibold tracking-[0.2em] text-foreground uppercase transition-all duration-300 hover:border-primary/50"
          >
            Return Home
          </a>
        </div>
      </div>
    </div>
  );
}

const themeScript = `(function() {
  try {
    var stored = localStorage.getItem('vidyarthi-theme');
    var isLight = stored === 'light' || (!stored && window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches && stored !== 'dark');
    var root = document.documentElement;
    var resolved = isLight ? 'light' : 'dark';
    root.classList.remove('dark', 'light');
    root.classList.add(resolved);
    root.setAttribute('data-theme', resolved);
    root.style.colorScheme = resolved;
  } catch (e) {}
})();`;

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#11100E" },
      { name: "color-scheme", content: "dark light" },
      { title: defaultTitle },
      { name: "description", content: defaultDescription },
      { name: "author", content: "Vidyarthi" },
      {
        name: "keywords",
        content:
          "digital studio, custom business software, BOQ management system, enterprise automation, AI solutions, web development, digital transformation",
      },
      { property: "og:site_name", content: "Vidyarthi" },
      { property: "og:title", content: defaultTitle },
      { property: "og:description", content: defaultDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://vidyarthi.studio/" },
      { property: "og:locale", content: "en_US" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: defaultTitle },
      { name: "twitter:description", content: defaultDescription },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,600&family=Manrope:wght@300;400;500;600;700;800&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "canonical", href: "https://vidyarthi.studio/" },
    ],
    scripts: [
      {
        children: themeScript,
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(structuredData),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body
        className="bg-background text-foreground antialiased selection:bg-gold selection:text-primary-foreground font-sans transition-colors duration-400"
        suppressHydrationWarning
      >
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <Outlet />
        <Toaster position="bottom-right" />
      </QueryClientProvider>
    </ThemeProvider>
  );
}
