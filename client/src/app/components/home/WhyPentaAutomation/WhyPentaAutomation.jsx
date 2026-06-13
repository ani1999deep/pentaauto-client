"use client";

import { motion } from "framer-motion";
import { whyPentaAutomation } from "../../../../data/whyPenta";
import { Trophy, ArrowRight } from "lucide-react";

export default function WhyPentaAutomation() {
  const { title, mainDescription, benefits, expertise } = whyPentaAutomation;

  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#DCFCE7] text-[#16A34A] font-semibold">
            <Trophy size={18} />
            WHY PENTA
          </span>

          <h2 className="mt-5 text-4xl font-bold text-[#14532D]">{title}</h2>

          <p className="mt-5 text-[#6B7280] leading-8">{mainDescription}</p>
        </div>

        {/* Compact Benefits */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {benefits.slice(0, 4).map((item, i) => (
            <motion.div
              key={i}
              whileHover={{
                y: -6,
              }}
              className="bg-white p-7 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#DCFCE7] flex items-center justify-center mb-5">
                <item.icon size={26} className="text-[#16A34A]" />
              </div>

              <h3 className="font-bold text-lg text-[#14532D] mb-3">
                {item.title}
              </h3>

              <p className="text-sm text-[#6B7280] leading-7 line-clamp-5">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Expertise Small Premium */}
        <div className="mt-14 bg-[#14532D] rounded-[32px] p-10">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white">Our Expertise</h3>

            <p className="mt-2 text-[#86EFAC]">
              Smart Control • Automation • Electrical Panels
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mt-10">
            {expertise.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{
                  scale: 1.02,
                }}
                className="bg-white/5 rounded-3xl p-6"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#16A34A]/20 flex items-center justify-center">
                    <item.icon size={22} className="text-[#86EFAC]" />
                  </div>

                  <h4 className="text-white font-semibold text-lg">
                    {item.title}
                  </h4>
                </div>

                <ul className="space-y-3">
                  {item.items.slice(0, 3).map((point, index) => (
                    <li
                      key={index}
                      className="flex gap-2 text-gray-200 text-sm"
                    >
                      <ArrowRight size={15} className="text-[#86EFAC] mt-1" />

                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
