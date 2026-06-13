"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 bg-[#14532D]">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-bold text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Ready To Start Your Next Project?
        </motion.h2>
        <motion.p
          className="text-green-100 mt-4 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Partner with us to build innovative, efficient, and sustainable
          solutions for your business.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="mt-8 bg-white text-[#14532D] px-8 py-4 rounded-lg font-semibold inline-flex items-center gap-2 hover:bg-[#86EFAC] transition-all duration-200"
        >
          Contact Us
          <ArrowRight size={18} />
        </motion.button>
      </div>
    </section>
  );
}
