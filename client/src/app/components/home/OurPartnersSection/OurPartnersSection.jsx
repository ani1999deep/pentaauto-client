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
  { name: "Esbee Electrotech LLP", logo: "/partners/esbee.jpg" },
  { name: "Mitsubishi Electric", logo: "/partners/mitsubishi.png" },
  {
    name: "GENERAL INDUSTRIAL CONTROLS PRIVATE LIMITED",
    logo: "/partners/gic.jpg",
  },
  { name: "WAGO India", logo: "/partners/wago.png" },
  { name: "Elmex Controls Private Limited", logo: "/partners/elmex.png" },
  { name: "Rittal India Private Limited", logo: "/partners/rittal.png" },
];

export default function OurPartnersSection() {
  return (
    <section className="relative pt-16 lg:pt-20 pb-8 bg-gradient-to-b from-white to-[#F4FFF8] overflow-x-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-green-200 blur-[160px] opacity-20" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-300 blur-[160px] opacity-20" />

      <div className="container mx-auto px-5 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-green-600 font-semibold uppercase tracking-[4px] mb-2 text-sm">
            Our Partners
          </p>

          <h2 className="text-3xl lg:text-4xl font-bold text-[#14532D]">
            Technology & Industrial Partners
          </h2>

          <div className="w-24 h-1 bg-green-600 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Swiper */}
        <div className="w-full overflow-hidden px-1">
          <Swiper
            modules={[Autoplay]}
            loop
            speed={800}
            grabCursor
            spaceBetween={20}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            className="!overflow-visible w-full"
            breakpoints={{
              0: { slidesPerView: 2 },
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
            }}
          >
            {partners.map((partner, index) => (
              <SwiperSlide key={index} className="!overflow-visible">
                <motion.div
                  whileHover={{ y: -8, scale: 1.04 }}
                  whileTap={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="group w-full min-w-0 cursor-pointer"
                >
                  <div
                    className="
                      relative
                      h-[160px]
                      sm:h-[180px]
                      flex
                      flex-col
                      justify-center
                      items-center
                      p-4
                      transition-all
                      duration-500
                    "
                  >
                    {/* Hover Glow */}
                    <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-60 bg-gradient-to-br from-green-100/40 via-transparent to-emerald-100/40 transition-all duration-700" />

                    {/* Floating Glow */}
                    <div className="absolute -top-8 -right-8 w-[100px] h-[100px] rounded-full bg-green-300 blur-3xl opacity-0 group-hover:opacity-30 transition-all duration-700" />

                    {/* Logo */}
                    <div className="relative z-10 w-[90px] h-[55px] sm:w-[110px] sm:h-[68px] mb-4">
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
                    <h3 className="relative z-10 text-center text-[10px] sm:text-xs font-semibold text-gray-700 group-hover:text-green-900 transition-all duration-500 leading-tight">
                      {partner.name}
                    </h3>

                    {/* Bottom Bar */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] w-0 bg-gradient-to-r from-green-500 to-emerald-600 group-hover:w-12 transition-all duration-500" />
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
