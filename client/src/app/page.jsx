"use client";

import HeroSection from "./components/home/HeroSection/HeroSection";
import AboutSection from "./components/home/AboutSection/AboutSection";
import KeyPersonsSection from "./components/home/KeyPersonsSection/KeyPersonsSection";
import TeamWorkSection from "./components/home/TeamWorkSection/TeamWorkSection";
import IndustriesSection from "./components/home/IndustriesSection/IndustriesSection";
import FeaturedProjects from "./components/home/FeaturedProjects/FeaturedProjects";
import ClientsSection from "./components/home/ClientsSection/ClientsSection";
import Testimonials from "./components/home/Testimonials/Testimonials";
import CTASection from "./components/home/CTASection/CTASection";
import WhyPentaAutomation from "./components/home/WhyPentaAutomation/WhyPentaAutomation";

export default function Home() {
  return (
    <main className="bg-[#F8FAFC]">
      <section id="home">
        <HeroSection />
      </section>

      <section id="about">
        <AboutSection />
      </section>

      <section id="about">
        <TeamWorkSection />
      </section>

      <section id="about">
        <WhyPentaAutomation />
      </section>

      <section id="services">
        <IndustriesSection home={true} />
      </section>

      <section id="projects">
        <FeaturedProjects />
      </section>

      <section id="clients">
        <ClientsSection />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <section id="contact">
        <CTASection />
      </section>
    </main>
  );
}
