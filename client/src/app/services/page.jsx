"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import IndustriesSection from "../components/home/IndustriesSection/IndustriesSection";
import WhyPentaAutomationSection from "../components/WhyPentaAutomationSection/WhyPentaAutomationSection";
import ServicesCTASection from "./ServicesCTASection";

export default function ServicesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[420px] overflow-hidden">
        <Image
          src="/image/services-banner2.jpg"
          alt="Industries"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl"
            >
              <span className="inline-block text-green-400 font-semibold tracking-[3px] uppercase mb-4">
                Our Expertise
              </span>

              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Industries We Serve
              </h1>

              <p className="mt-5 text-gray-200 text-base md:text-lg leading-8">
                Delivering industrial automation, factory automation, and
                robotics integration excellence across diverse manufacturing and
                enterprise sectors.
              </p>

              <Link href="/contact">
                <button className="mt-8 px-7 py-3 rounded-full bg-[#16A34A] text-white hover:scale-105 transition">
                  Contact us →
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-[#16A34A] font-semibold uppercase tracking-[3px]">
              Our Expertise
            </span>

            <h2 className="mt-6 text-5xl font-bold text-[#14532D]">
              Industrial Automation Across Every Sector
            </h2>

            <p className="mt-8 text-gray-600 text-lg leading-9">
              Penta Automation is a trusted automation system integrator
              partnering with organizations across manufacturing, process, and
              IT sectors. We deliver tailored factory automation solutions,
              cybersecurity, and MES implementations that drive efficiency,
              safety, and compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Cards */}
      <IndustriesSection />
      <WhyPentaAutomationSection />
      <ServicesCTASection />
    </main>
  );
}
