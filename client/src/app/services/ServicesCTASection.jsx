"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ServicesCTASection() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#DDF7B8] via-[#B9EC7B] to-[#5EAF3B] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto text-center"
        >
          <span className="inline-block text-[#14532D] font-semibold uppercase tracking-[3px] mb-4">
            Start Your Automation Journey
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-[#06391C] leading-tight">
            Power Your Next Project with Penta Automation
          </h2>

          <p className="mt-6 text-[#1E4D2B] text-lg leading-8 max-w-3xl mx-auto">
            Accelerate productivity and transform operations with intelligent
            industrial automation, smart factory solutions, and advanced
            robotics integration tailored to your business goals.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">
            <Link href="/contact">
              <button className="px-8 py-4 rounded-full bg-[#045F29] text-white font-semibold hover:scale-105 hover:shadow-xl transition duration-300">
                Request a Consultation
              </button>
            </Link>

            <Link href="/contact">
              <button className="px-8 py-4 rounded-full border-2 border-[#045F29] text-[#045F29] hover:bg-[#045F29] hover:text-white transition duration-300">
                Speak with Our Experts
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
