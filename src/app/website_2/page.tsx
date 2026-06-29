import type { Metadata } from "next";
import { About } from "@/sections/About";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { ProblemSection } from "@/sections/ProblemSection";
import { ToolsExpertise } from "@/sections/ToolsExpertise";
import { ValueUnlocks } from "@/sections/ValueUnlocks";
import { Website2Hero } from "@/sections/Website2Hero";

export const metadata: Metadata = {
  title: "Website 2 | Gharib Analytics",
  description:
    "A light data-network concept for Gharib Analytics, using the current Website 1 structure with a looping hero background video."
};

export default function Website2Page() {
  return (
    <div className="website-2-theme min-h-screen bg-[var(--color-page)] text-[var(--color-ink)]">
      <Header />
      <main className="xl:ml-[330px]">
        <Website2Hero />
        <ProblemSection />
        <ValueUnlocks />
        <ToolsExpertise />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
