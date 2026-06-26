"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Users2 } from "lucide-react";

export default function TeamWorkSection() {
  return (
    <section className="py-24">
      <div className="text-center mb-12">
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-[#16A34A] font-semibold text-sm">
          <Users2 size={18} />
          Team Work
        </span>
        <h2 className="mt-5 text-4xl font-bold text-[#14532D]">
          Our Dedicated Team
        </h2>
        <p className="mt-3 text-gray-600 max-w-3xl mx-auto">
          Our experienced engineering and automation professionals work together
          to deliver Electrical Panels, MCC, PCC, PLC, SCADA and industrial
          automation projects with quality and precision.
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-[#16A34A] to-[#86EFAC] mx-auto mt-5 rounded-full" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto"
      >
        <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100">
          <div className="relative h-[260px] md:h-[500px]">
            <img
              src="/team/team-work-penta-1.jpeg"
              alt="team"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="p-8 text-center">
            <h3 className="text-2xl font-bold text-[#14532D]">
              Strong Team • Smart Solutions
            </h3>
            <p className="mt-3 text-gray-600">
              Collaboration, innovation and technical excellence drive every
              successful project we deliver.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
