"use client";

import { motion } from "framer-motion";
import { Factory, Truck, Wind, Building2, Cpu, Award } from "lucide-react";
import { industries } from "../data";

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } },
};

export default function IndustriesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={{
            initial: { opacity: 0, y: 60 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
          }}
        >
          <h2 className="text-4xl font-bold text-[#14532D]">
            Industries We Serve
          </h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-6"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {industries.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="bg-[#F8FAFC] border border-gray-100 p-6 rounded-xl text-center hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="mx-auto w-12 h-12 flex items-center justify-center bg-white rounded-2xl shadow-sm mb-4 group-hover:rotate-12 transition-transform duration-300">
                  <Icon className="text-[#16A34A]" size={28} />
                </div>
                <h3 className="font-semibold text-[#14532D]">{item.name}</h3>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
