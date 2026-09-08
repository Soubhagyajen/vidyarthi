import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/vidyarthi/Nav";
import { Hero } from "@/components/vidyarthi/Hero";
import { Philosophy } from "@/components/vidyarthi/Philosophy";
import { Services } from "@/components/vidyarthi/Services";
import { Method } from "@/components/vidyarthi/Method";
import { Work } from "@/components/vidyarthi/Work";
import { Transformation } from "@/components/vidyarthi/Transformation";
import { About } from "@/components/vidyarthi/About";
import { Contact, Footer } from "@/components/vidyarthi/Contact";

const title = "Vidyarthi — Ancient Wisdom. Modern Solutions.";
const description =
  "Vidyarthi is a digital solutions studio building bespoke websites, custom business software, and AI-powered automation around the way your business actually works.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-gold selection:text-background">
      <Nav />
      <main id="main-content" tabIndex={-1} className="focus:outline-none">
        <Hero />
        <Philosophy />
        <Services />
        <Method />
        <Work />
        <Transformation />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
