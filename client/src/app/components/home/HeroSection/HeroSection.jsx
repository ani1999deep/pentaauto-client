"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative py-15 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              className="inline-block bg-[#86EFAC] text-[#14532D] px-4 py-2 rounded-full text-sm font-semibold"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              Trusted Industry Partner
            </motion.span>
            <h1 className="text-4xl md:text-5xl lg:text-[3.3rem] font-bold text-[#14532D] mt-6 leading-tight">
              Trusted and Reliable Solution Provider, Serving as an Innovative
              Industry Partner Since 2012.
            </h1>
            <motion.p
              className="text-[#6B7280] mt-6 text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Delivering innovative engineering, automation, and infrastructure
              solutions that drive growth and operational excellence.
            </motion.p>
            <motion.div
              className="flex gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#16A34A] text-white px-8 py-4 rounded-lg hover:bg-[#14532D] transition"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="border border-[#16A34A] text-[#16A34A] px-8 py-4 rounded-lg hover:bg-[#16A34A] hover:text-white transition"
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative w-full aspect-[16/9] overflow-hidden rounded-3xl shadow-xl"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Image
              src="/penta-banner2.png"
              alt="Industry"
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
