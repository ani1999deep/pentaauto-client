"use client";

import { motion } from "framer-motion";
import { whyPentaAutomation } from "../../../../data/whyPenta";
import { Trophy, ArrowRight } from "lucide-react";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function WhyPentaAutomation() {
  const {
    title,
    mainDescription,
    benefits,
    expertise,
    closingTagline,
    finalTagline,
  } = whyPentaAutomation;

  return (
    <section className="relative py-24 overflow-hidden bg-[#F8FAFC]">
      {/* Background Effects */}
      <div className="absolute left-[-150px] top-[100px] w-[350px] h-[350px] rounded-full bg-green-300/20 blur-[140px]" />
      <div className="absolute right-[-150px] bottom-[50px] w-[400px] h-[400px] rounded-full bg-green-400/10 blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            whileHover={{
              scale: 1.05,
            }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full
            bg-white shadow-lg border border-green-100"
          >
            <Trophy size={18} className="text-[#16A34A]" />

            <span className="text-sm md:text-base font-semibold tracking-[0.18em] text-[#14532D]">
              WHY PENTA AUTOMATION
            </span>
          </motion.div>

          <h4 className="mt-8 text-2xl md:text-4xl font-bold text-[#14532D] leading-tight">
            {title}
          </h4>

          <p className="mt-6 text-[#64748B] leading-8 text-lg">
            {mainDescription}
          </p>
        </motion.div>

        {/* Benefit Cards - Now shows ALL 7 benefits */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-2 xl:grid-cols-4 gap-6"
        >
          {benefits.map((card, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{
                y: -12,
              }}
              className="
              relative
              rounded-[30px]
              overflow-hidden
              bg-white/70
              backdrop-blur
              border
              border-white
              p-8
              shadow-lg
              group
              "
            >
              <div
                className="
                absolute
                inset-0
                opacity-0
                group-hover:opacity-100
                transition
                bg-gradient-to-br
                from-green-100
                to-transparent
                "
              />

              <div className="relative">
                <motion.div
                  whileHover={{
                    rotate: 10,
                    scale: 1.1,
                  }}
                  className="
                  w-16
                  h-16
                  rounded-2xl
                  bg-gradient-to-br
                  from-[#16A34A]
                  to-[#86EFAC]
                  flex
                  items-center
                  justify-center
                  text-white
                  mb-6
                  shadow-lg
                  "
                >
                  <card.icon size={28} />
                </motion.div>

                <h3 className="text-xl font-bold text-[#14532D]">
                  {card.title}
                </h3>

                <p className="mt-4 text-[#64748B] leading-7 text-sm">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.96,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{ once: true }}
          className="
          mt-20
          rounded-[40px]
          bg-[#14532D]
          overflow-hidden
          shadow-2xl
          "
        >
          <div className="p-10 md:p-14">
            <div className="text-center">
              <h3 className="text-4xl font-bold text-white">
                Smart Industrial Expertise
              </h3>

              <p className="mt-3 text-[#86EFAC]">
                Electrical Panels • PLC • SCADA • Automation
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6 mt-12">
              {expertise.map((box, i) => (
                <motion.div
                  key={i}
                  whileHover={{
                    y: -8,
                  }}
                  className="
                  bg-white/5
                  border
                  border-white/10
                  rounded-[28px]
                  p-7
                  backdrop-blur
                  "
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="
                    w-14
                    h-14
                    rounded-2xl
                    bg-[#16A34A]/20
                    flex
                    items-center
                    justify-center"
                    >
                      <box.icon size={24} className="text-[#86EFAC]" />
                    </div>

                    <h4 className="text-white font-semibold">{box.title}</h4>
                  </div>

                  <ul className="space-y-3 mt-6">
                    {box.items.slice(0, 3).map((x, idx) => (
                      <li
                        key={idx}
                        className="flex gap-3 text-gray-200 text-sm"
                      >
                        <ArrowRight size={16} className="text-[#86EFAC] mt-1" />

                        {x}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Closing Taglines */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-[#14532D] text-xl font-medium tracking-wide">
            {closingTagline}
          </p>
          <p className="mt-4 text-[#16A34A] font-semibold text-lg">
            {finalTagline}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
