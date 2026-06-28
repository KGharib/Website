import { About } from "@/sections/About";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { ToolsExpertise } from "@/sections/ToolsExpertise";
import { ValueUnlocks } from "@/sections/ValueUnlocks";

export default function Home() {
  return (
    <>
      <Header />
      <main className="xl:ml-[330px]">
        <Hero />
        <ValueUnlocks />
        <ToolsExpertise />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
