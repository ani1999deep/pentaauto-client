"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const clients = [
  { name: "IPSEN TECHNOLOGIES PVT. LTD", logo: "/clients/ipsen.png" },
  {
    name: "ADVANCED SYSTEMS SAMPLING PVT. LTD",
    logo: "/clients/advanced.png",
  },
  { name: "DABUR INDIA LTD", logo: "/clients/dabur.png" },
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
  {
    name: "RASHMI METALIKS LIMITED",
    logo: "/clients/rashmi.png",
  },
  {
    name: "TITAGARH WAGONS LIMITED",
    logo: "/clients/titagarh.png",
  },
  {
    name: "TATA STEEL LIMITED",
    logo: "/clients/tata-steel.png",
  },
];

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
    <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-white to-[#F4FFF8]">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-green-200 blur-[180px] opacity-20" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-300 blur-[180px] opacity-20" />

      <div className="container mx-auto px-5 lg:px-6 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="text-[#16A34A] font-semibold uppercase tracking-[5px] mb-3">
            Our Clients
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#14532D]">
            Trusted By Industry Leaders
          </h2>

          <div className="w-28 h-1 bg-green-600 rounded-full mx-auto mt-5" />
        </motion.div>

        {/* Swiper */}
        <Swiper
          modules={[Autoplay]}
          loop
          speed={1000}
          spaceBetween={18}
          grabCursor
          autoplay={{
            delay: 2300,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {clients.map((client, index) => (
            <SwiperSlide key={index}>
              <motion.div
                variants={item}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  scale: 1.04,
                }}
                whileTap={{
                  y: -10,
                  scale: 1.04,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="group cursor-pointer"
              >
                <div
                  className="
                    relative
                    h-[180px]
                    sm:h-[210px]
                    lg:h-[220px]

                    rounded-[28px]

                    bg-white/80
                    backdrop-blur-xl

                    border
                    border-green-100

                    shadow-lg

                    hover:shadow-[0_20px_60px_rgba(34,197,94,.25)]
                    active:shadow-[0_20px_60px_rgba(34,197,94,.25)]

                    transition-all
                    duration-500

                    flex
                    flex-col
                    items-center
                    justify-center

                    p-5

                    overflow-hidden
                  "
                >
                  {/* Glow */}
                  <div
                    className="
                      absolute
                      inset-0

                      opacity-0

                      group-hover:opacity-100
                      group-active:opacity-100

                      transition-all
                      duration-700

                      bg-gradient-to-br
                      from-green-100/80
                      via-transparent
                      to-emerald-100/50
                    "
                  />

                  {/* Floating Circle */}
                  <div
                    className="
                      absolute
                      top-[-50px]
                      right-[-50px]

                      w-[120px]
                      h-[120px]

                      rounded-full

                      bg-green-100

                      blur-3xl

                      opacity-0

                      group-hover:opacity-100
                      group-active:opacity-100

                      transition
                    "
                  />

                  {/* Logo */}
                  <div
                    className="
                      relative

                      w-[95px]
                      h-[60px]

                      sm:w-[120px]
                      sm:h-[70px]

                      lg:w-[150px]
                      lg:h-[85px]

                      mb-5
                    "
                  >
                    <Image
                      src={client.logo}
                      alt={client.name}
                      fill
                      className="
                        object-contain

                        grayscale

                        group-hover:grayscale-0
                        group-active:grayscale-0

                        group-hover:scale-110
                        group-active:scale-110

                        transition-all
                        duration-500
                      "
                    />
                  </div>

                  {/* Name */}
                  <h3
                    className="
                      text-center

                      text-[11px]
                      sm:text-[12px]
                      lg:text-sm

                      font-semibold

                      text-gray-700

                      group-hover:text-[#14532D]
                      group-active:text-[#14532D]

                      transition

                      leading-relaxed
                    "
                  >
                    {client.name}
                  </h3>

                  {/* Bottom Animated Border */}
                  <div
                    className="
                      absolute
                      bottom-0
                      left-0

                      h-[4px]

                      w-0

                      bg-gradient-to-r
                      from-green-500
                      to-emerald-600

                      group-hover:w-full
                      group-active:w-full

                      transition-all
                      duration-500
                    "
                  />
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
