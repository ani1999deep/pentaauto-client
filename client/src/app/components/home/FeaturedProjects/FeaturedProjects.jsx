"use client";

import { motion } from "framer-motion";
import { Factory } from "lucide-react";
import { projects } from "../data";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } },
};

export default function FeaturedProjects() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl font-bold text-[#14532D]">
            Featured Projects
          </h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="h-56 bg-gradient-to-br from-[#86EFAC] to-[#16A34A] flex items-center justify-center relative overflow-hidden">
                <motion.div
                  className="text-white/80"
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.5 }}
                >
                  <Factory size={80} />
                </motion.div>
              </div>
              <div className="p-6">
                <span className="text-sm text-[#16A34A]">
                  {project.category}
                </span>
                <h3 className="font-semibold text-xl text-[#14532D] mt-2">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
