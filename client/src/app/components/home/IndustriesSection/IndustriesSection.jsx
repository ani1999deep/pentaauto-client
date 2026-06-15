"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { industries } from "../data";

const scaleIn = {
  initial: {
    opacity: 0,
    scale: 0.9,
    y: 30,
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
  },
  transition: {
    duration: 0.6,
  },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function IndustriesSection({ home = false }) {
  const cards = home ? industries.slice(0, 3) : industries;

  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#F7FFF9]">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={{
            initial: {
              opacity: 0,
              y: 50,
            },
            animate: {
              opacity: 1,
              y: 0,
            },
          }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-green-100 text-[#16A34A] font-medium mb-4">
            Our Expertise
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-[#14532D]">
            Industries We Serve
          </h2>

          <p className="mt-5 text-gray-500 max-w-2xl mx-auto">
            Delivering intelligent industrial automation and engineering
            solutions across multiple sectors.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {cards.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="
                  group
                  relative
                  bg-white
                  rounded-3xl
                  p-8
                  text-center
                  border
                  border-green-50
                  shadow-sm
                  hover:shadow-2xl
                  transition-all
                  duration-500
                  overflow-hidden
                "
              >
                {/* Background Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-green-50 to-transparent" />

                {/* Icon */}
                <div
                  className="
    relative
    mx-auto
    w-16
    h-16
    rounded-2xl
    bg-gradient-to-br
    from-emerald-50
    via-green-100
    to-lime-200
    flex
    items-center
    justify-center
    mb-6
    shadow-[0_15px_40px_rgba(34,197,94,0.18)]
    border
    border-white/60
    backdrop-blur-sm
    group-hover:scale-110
    group-hover:-rotate-6
    transition-all
    duration-700
  "
                >
                  {/* Glow */}
                  <div
                    className="
      absolute
      inset-0
      rounded-2xl
      bg-gradient-to-tr
      from-green-300/20
      via-emerald-200/30
      to-lime-300/20
      opacity-0
      group-hover:opacity-100
      blur-xl
      transition
      duration-700
    "
                  />

                  <Icon
                    className="
      relative
      text-[#15803D]
      drop-shadow-[0_4px_10px_rgba(21,128,61,0.35)]
      transition-all
      duration-700
      group-hover:scale-125
    "
                    size={30}
                  />
                </div>

                <h3 className="relative text-xl font-bold text-[#14532D] mb-4">
                  {item.name}
                </h3>

                <p className="relative text-gray-500 leading-7">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Button */}
        {home && (
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link href="/services">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  px-10
                  py-5
                  rounded-full
                  bg-gradient-to-r
                  from-[#16A34A]
                  via-[#22C55E]
                  to-[#15803D]
                  text-white
                  font-semibold
                  shadow-[0_15px_40px_rgba(34,197,94,0.35)]
                  hover:shadow-[0_25px_60px_rgba(34,197,94,0.45)]
                  transition-all
                  duration-500
                "
              >
                Explore All Industries
                <motion.div
                  animate={{
                    x: [0, 5, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.5,
                  }}
                >
                  <ArrowRight size={22} />
                </motion.div>
              </motion.button>
            </Link>

            <p className="mt-4 text-sm text-gray-500">
              Discover our complete industrial automation capabilities
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
