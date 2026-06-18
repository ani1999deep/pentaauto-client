"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const clients = [
  {
    name: "IPSEN TECHNOLOGIES PVT. LTD",
    logo: "/clients/ipsen.png",
  },
  {
    name: "ADVANCED SYSTEMS SAMPLING PVT. LTD",
    logo: "/clients/advanced.png",
  },
  {
    name: "DABUR INDIA LTD",
    logo: "/clients/dabur.png",
  },
  {
    name: "BHAMBRA ENGINEERING WORKS",
    logo: "/clients/bhambra.png",
  },
  {
    name: "BAT-SOL EQUIPMENT & TECHNOLOGY",
    logo: "/clients/batsol.png",
  },
  {
    name: "BHARATIYA RESERVE BANK NOTE MUDRAN PVT. LTD",
    logo: "/clients/brbnmpl.png",
  },
  {
    name: "HINDUSTAN AERONAUTICS LIMITED",
    logo: "/clients/hal.png",
  },
  {
    name: "QUALICOM SOLUTIONS PVT. LTD.",
    logo: "/clients/qualicom.png",
  },
];

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
  },
};

export default function ClientsSection() {
  return (
    <section className="relative py-28 overflow-hidden bg-gradient-to-b from-white to-[#F4FFF8]">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-green-200 blur-[180px] opacity-20" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-300 blur-[180px] opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-[#16A34A] font-semibold uppercase tracking-[6px] mb-3">
            Our Clients
          </p>

          <h2 className="text-5xl font-bold text-[#14532D]">
            Trusted By Industry Leaders
          </h2>

          <div className="w-32 h-1 bg-green-600 rounded-full mx-auto mt-5" />
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {clients.map((client, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{
                y: -10,
                scale: 1.04,
              }}
              transition={{ duration: 0.3 }}
              className="group relative"
            >
              <div
                className="
                h-[220px]
                rounded-3xl
                bg-white/70
                backdrop-blur-xl
                border
                border-green-100
                shadow-lg
                hover:shadow-green-300/40
                transition-all
                duration-500
                flex
                flex-col
                items-center
                justify-center
                p-8
                overflow-hidden
              "
              >
                {/* Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br from-green-100/50 to-transparent" />

                {/* Logo */}
                <div className="relative w-[150px] h-[80px] mb-6">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    className="object-contain grayscale group-hover:grayscale-0 transition duration-500"
                  />
                </div>

                {/* Company Name */}
                <h3
                  className="
                  text-center
                  text-sm
                  font-semibold
                  text-gray-700
                  group-hover:text-[#14532D]
                  transition
                "
                >
                  {client.name}
                </h3>

                {/* Hover Line */}
                <div
                  className="
                  absolute
                  bottom-0
                  left-0
                  h-1
                  w-0
                  bg-green-600
                  group-hover:w-full
                  transition-all
                  duration-500
                "
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
