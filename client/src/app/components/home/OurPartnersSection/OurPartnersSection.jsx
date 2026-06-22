"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const partners = [
  { name: "ABB India Limited", logo: "/partners/abb.png" },
  { name: "Siemens", logo: "/partners/siemens.png" },
  { name: "Schneider Electric", logo: "/partners/schneider.png" },
  { name: "L&T", logo: "/partners/lt.png" },
  { name: "OMRON Automation Pvt Ltd", logo: "/partners/omron.png" },
  { name: "PHOENIX CONTACT (I) Pvt. Ltd.", logo: "/partners/phoenix.png" },
  { name: "Trinity Touch Pvt Ltd", logo: "/partners/trinity.png" },
  { name: "Fuji Electric India Private Limited", logo: "/partners/fuji.png" },
  { name: "Yaskawa Electric Corporation", logo: "/partners/yaskawa.png" },
  {
    name: "CONTROL TECHNIQUES INDIA PVT LTD",
    logo: "/partners/control-techniques.png",
  },
  { name: "JiGO India", logo: "/partners/jigo.png" },
  { name: "Teknic Controlgear Private Limited", logo: "/partners/teknic.png" },
  { name: "Esbee Electrotech LLP", logo: "/partners/esbee.png" },
  { name: "Mitsubishi Electric", logo: "/partners/mitsubishi.png" },
  {
    name: "GENERAL INDUSTRIAL CONTROLS PRIVATE LIMITED",
    logo: "/partners/gic.png",
  },
  { name: "WAGO India", logo: "/partners/wago.png" },
  { name: "Elmex Controls Private Limited", logo: "/partners/elmex.png" },
  { name: "Rittal India Private Limited", logo: "/partners/rittal.png" },
];

export default function OurPartnersSection() {
  return (
    <section className="relative pt-24 lg:pt-32 pb-10 bg-gradient-to-b from-white to-[#F4FFF8] overflow-x-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-green-200 blur-[180px] opacity-20" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-300 blur-[180px] opacity-20" />

      <div className="container mx-auto px-5 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-green-600 font-semibold uppercase tracking-[5px] mb-3">
            Our Partners
          </p>

          <h2 className="text-3xl lg:text-5xl font-bold text-[#14532D]">
            Technology & Industrial Partners
          </h2>

          <div className="w-32 h-1 bg-green-600 mx-auto mt-5 rounded-full" />
        </motion.div>

        {/* Swiper */}
        <div className="w-full overflow-hidden px-2 pt-6">
          <Swiper
            modules={[Autoplay]}
            loop
            speed={900}
            grabCursor
            spaceBetween={24}
            autoplay={{
              delay: 2200,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            className="!overflow-visible w-full"
            breakpoints={{
              0: { slidesPerView: 2 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
          >
            {partners.map((partner, index) => (
              <SwiperSlide key={index} className="!overflow-visible">
                <motion.div
                  whileHover={{ y: -12, scale: 1.05 }}
                  whileTap={{ scale: 1.04 }}
                  transition={{ duration: 0.35 }}
                  className="group w-full min-w-0 cursor-pointer"
                >
                  <div
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
                    "
                  >
                    {/* Glow layer */}
                    <div className="absolute inset-0 rounded-[30px] opacity-0 group-hover:opacity-100 bg-gradient-to-br from-green-100 via-transparent to-emerald-100 transition-all duration-700" />

                    {/* Floating glow */}
                    <div className="absolute -top-10 -right-10 w-[120px] h-[120px] rounded-full bg-green-300 blur-3xl opacity-0 group-hover:opacity-30 transition-all duration-700" />

                    {/* Logo */}
                    <div className="relative z-10 w-[110px] h-[70px] sm:w-[140px] sm:h-[85px] mb-5">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        fill
                        className="
                          object-contain
                          grayscale
                          transition-all
                          duration-500
                          group-hover:grayscale-0
                          group-hover:scale-110
                        "
                      />
                    </div>

                    {/* Name */}
                    <h3 className="relative z-10 text-center text-[11px] sm:text-[13px] font-semibold text-gray-700 group-hover:text-green-900 transition-all duration-500">
                      {partner.name}
                    </h3>

                    {/* Bottom bar */}
                    <div className="absolute bottom-0 left-0 h-[4px] w-0 bg-gradient-to-r from-green-500 to-emerald-600 group-hover:w-full transition-all duration-500" />
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
