"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const clients = [
  { name: "IPSEN TECHNOLOGIES PVT. LTD", logo: "/clients/ipsen.png" },
  { name: "ADVANCED SYSTEMS SAMPLING PVT. LTD", logo: "/clients/advanced.png" },
  { name: "DABUR INDIA LTD", logo: "/clients/dabur.png" },
  { name: "BHAMBRA ENGINEERING WORKS", logo: "/clients/bhambra.png" },
  { name: "BAT-SOL EQUIPMENT & TECHNOLOGY", logo: "/clients/batsol.png" },
  {
    name: "BHARATIYA RESERVE BANK NOTE MUDRAN PVT. LTD",
    logo: "/clients/brbnmpl.png",
  },
  { name: "HINDUSTAN AERONAUTICS LIMITED", logo: "/clients/hal.png" },
  { name: "QUALICOM SOLUTIONS PVT. LTD.", logo: "/clients/qualicom.png" },
  { name: "RASHMI METALIKS LIMITED", logo: "/clients/rashmi.png" },
  { name: "TITAGARH WAGONS LIMITED", logo: "/clients/titagarh.png" },
  { name: "TATA STEEL LIMITED", logo: "/clients/tata-steel.png" },
  { name: "GIRIDHAN METAL PRIVATE LIMITED", logo: "/clients/giridhan.png" },
  { name: "EXIDE INDUSTRIES LIMITED", logo: "/clients/exide.png" },
  { name: "HINDUSTAN UNILEVER LIMITED", logo: "/clients/hul.png" },
  { name: "SUPER SMELTERS LIMITED", logo: "/clients/super-smelters.png" },
  { name: "DAMODAR VALLEY CORPORATION", logo: "/clients/dvc.png" },
  { name: "NTPC LIMITED", logo: "/clients/ntpc.png" },
  {
    name: "THE WEST BENGAL POWER DEVELOPMENT CORPORATION LTD",
    logo: "/clients/wbpdc.png",
  },
];

export default function ClientsSection() {
  return (
    <section
      className="
        relative
        pt-24
        lg:pt-32
        pb-10
        bg-gradient-to-b
        from-white
        to-[#F4FFF8]
        overflow-visible
      "
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-green-200 blur-[180px] opacity-20" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-300 blur-[180px] opacity-20" />

      <div className="container mx-auto px-5 relative z-10 overflow-visible">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-green-600 font-semibold uppercase tracking-[5px] mb-3">
            Our Clients
          </p>

          <h2 className="text-3xl lg:text-5xl font-bold text-[#14532D]">
            Trusted By Industry Leaders
          </h2>

          <div className="w-32 h-1 bg-green-600 mx-auto mt-5 rounded-full" />
        </motion.div>

        <div className="overflow-visible px-2 pt-6 pb-0">
          <Swiper
            modules={[Autoplay]}
            loop
            speed={900}
            grabCursor
            spaceBetween={24}
            autoplay={{
              delay: 2300,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            className="!overflow-visible"
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
              <SwiperSlide key={index} className="!overflow-visible pt-4 pb-0">
                <motion.div
                  whileHover={{
                    y: -12,
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 1.04,
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                  className="group overflow-visible"
                >
                  <div
                    tabIndex={0}
                    className="
                      relative
                      h-[190px]
                      sm:h-[220px]

                      rounded-[30px]

                      bg-white/85
                      backdrop-blur-xl

                      border
                      border-green-100

                      p-6

                      flex
                      flex-col
                      justify-center
                      items-center

                      shadow-lg

                      overflow-hidden

                      transition-all
                      duration-500

                      hover:shadow-[0_30px_80px_rgba(34,197,94,.35)]

                      group-active:shadow-[0_30px_80px_rgba(34,197,94,.35)]
                      group-focus-within:shadow-[0_30px_80px_rgba(34,197,94,.35)]

                      outline-none
                    "
                  >
                    {/* Gradient Glow */}
                    <div
                      className="
                        absolute
                        inset-0
                        rounded-[30px]

                        opacity-0

                        group-hover:opacity-100
                        group-active:opacity-100
                        group-focus-within:opacity-100

                        bg-gradient-to-br
                        from-green-100
                        via-transparent
                        to-emerald-100

                        transition-all
                        duration-700
                      "
                    />

                    {/* Floating Glow */}
                    <div
                      className="
                        absolute
                        -top-10
                        -right-10

                        w-[120px]
                        h-[120px]

                        rounded-full
                        bg-green-300

                        blur-3xl

                        opacity-0

                        group-hover:opacity-30
                        group-active:opacity-30
                        group-focus-within:opacity-30

                        transition-all
                        duration-700
                      "
                    />

                    {/* Logo */}
                    <div
                      className="
                        relative
                        z-10

                        w-[100px]
                        h-[65px]

                        sm:w-[130px]
                        sm:h-[80px]

                        lg:w-[150px]
                        lg:h-[90px]

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
                          transition-all
                          duration-500

                          group-hover:grayscale-0
                          group-hover:scale-110

                          group-active:grayscale-0
                          group-active:scale-110

                          group-focus-within:grayscale-0
                          group-focus-within:scale-110
                        "
                      />
                    </div>

                    {/* Company Name */}
                    <h3
                      className="
                        relative
                        z-10

                        text-center

                        text-[11px]
                        sm:text-[13px]

                        font-semibold

                        text-gray-700

                        transition-all
                        duration-500

                        group-hover:text-green-900
                        group-active:text-green-900
                        group-focus-within:text-green-900
                      "
                    >
                      {client.name}
                    </h3>

                    {/* Bottom Bar */}
                    <div
                      className="
                        absolute
                        bottom-0
                        left-0

                        h-[4px]
                        w-0

                        rounded-full

                        bg-gradient-to-r
                        from-green-500
                        to-emerald-600

                        group-hover:w-full
                        group-active:w-full
                        group-focus-within:w-full

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
      </div>
    </section>
  );
}
