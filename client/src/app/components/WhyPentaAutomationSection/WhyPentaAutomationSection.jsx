"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { whyPentaData } from "../../../data/whyPentaData";

export default function WhyPentaAutomationSection() {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[620px] rounded-[30px] overflow-hidden"
          >
            <Image
              src="/image/services-banner.jpg"
              alt="Why Penta Automation"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#14532D]/20 to-transparent" />
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#16A34A] font-semibold tracking-[4px] uppercase">
              {whyPentaData.badge}
            </span>
            <h2 className="mt-2 text-2xl md:text-3xl font-bold text-[#14532D] leading-[1.25] max-w-[650px]">
              {whyPentaData.title}
            </h2>

            <p className="mt-8 text-gray-600 text-lg leading-9">
              {whyPentaData.description}
            </p>

            <div className="mt-10 space-y-6">
              {whyPentaData.features.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={index}
                    whileHover={{ x: 6 }}
                    className="flex gap-5"
                  >
                    <div className="w-14 h-14 shrink-0 rounded-2xl bg-green-50 flex items-center justify-center">
                      <Icon size={24} className="text-[#16A34A]" />
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-[#14532D]">
                        {item.title}
                      </h3>

                      <p className="text-gray-500 mt-1 leading-7">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
