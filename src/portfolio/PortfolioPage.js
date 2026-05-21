"use client";

import Navbar from "@/portfolio/components/layout/Navbar";
import Footer from "@/portfolio/components/layout/Footer";
import Hero from "@/portfolio/components/sections/Hero";
import About from "@/portfolio/components/sections/About";
import ClientsMarquee from "@/portfolio/components/sections/ClientsMarquee";
import Experience from "@/portfolio/components/sections/Experience";
import Skills from "@/portfolio/components/sections/Skills";
import Education from "@/portfolio/components/sections/Education";
import Contact from "@/portfolio/components/sections/Contact";

export default function PortfolioPage() {
  return (
    <div className="portfolio-root">
      <Navbar />
      <div className="portfolio-root__main">
        <Hero />
        <About />
        <ClientsMarquee />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
