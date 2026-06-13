"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } },
};

export default function ClientsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-center text-4xl font-bold text-[#14532D] mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={{
            initial: { opacity: 0, y: 60 },
            animate: { opacity: 1, y: 0 },
          }}
        >
          Trusted By Clients
        </motion.h2>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-5 gap-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {[1, 2, 3, 4, 5].map((item) => (
            <motion.div
              key={item}
              variants={scaleIn}
              whileHover={{ scale: 1.15 }}
              className="bg-[#F8FAFC] h-24 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300"
            >
              <Briefcase className="text-[#16A34A]" size={42} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
