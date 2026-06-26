"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function ProjectClient({ project }) {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: "easeOut" },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.92 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  return (
    <main className="bg-[#F7FAF7] overflow-x-hidden w-full max-w-full">
      {/* HERO */}
      <section className="relative h-[45vh] sm:h-[50vh] md:h-[55vh] lg:h-[62vh] xl:h-[65vh] overflow-hidden rounded-b-3xl w-full max-w-full">
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority
          className="object-cover object-center scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/50 to-green-900/40 backdrop-blur-[2px]" />

        <motion.div
          className="absolute -top-20 -left-20 w-64 h-64 sm:w-72 sm:h-72 bg-green-500/20 blur-3xl rounded-full"
          animate={{ scale: [1, 1.1, 1], opacity: [0.6, 0.8, 0.6] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-20 -right-20 w-64 h-64 sm:w-72 sm:h-72 bg-emerald-400/20 blur-3xl rounded-full"
          animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0.9, 0.6] }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-5 sm:px-6 md:px-8 max-w-5xl">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] max-w-3xl"
            >
              {project.title}
            </motion.h1>

            {project.tagline && (
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.35 }}
                className="mt-6"
              >
                <div className="inline-flex items-center gap-4">
                  <div className="flex flex-col items-center">
                    <span className="w-10 h-[2px] bg-gradient-to-r from-green-500 to-emerald-300 rounded-full" />
                    <span className="w-1.5 h-1.5 mt-1 rounded-full bg-green-400 shadow-[0_0_14px_rgba(74,222,128,.8)]" />
                  </div>

                  <p className="text-sm sm:text-base md:text-lg lg:text-xl font-light tracking-[0.18em] uppercase text-white/85 leading-relaxed max-w-xl">
                    <span className="text-green-300">“</span>
                    {project.tagline}
                    <span className="text-green-300">”</span>
                  </p>
                </div>
              </motion.div>
            )}

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "5rem" }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-5 w-16 sm:w-20 h-[3px] bg-green-400 rounded-full"
            />
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="container mx-auto px-5 sm:px-6 md:px-8 py-8 md:py-12 lg:py-16">
        <div className="bg-white rounded-[28px] sm:rounded-[32px] md:rounded-[40px] p-6 sm:p-8 md:p-12 lg:p-16 shadow-xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 md:mb-10"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#14532D] tracking-tight">
              {project.title}
            </h1>
          </motion.div>

          {project.projectTitles?.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12 md:mb-14"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-[3px] bg-gradient-to-r from-green-600 to-emerald-400 rounded" />
                <h3 className="text-xl sm:text-2xl font-bold text-[#14532D] tracking-tight">
                  Notable Implementations
                </h3>
              </div>

              <div className="space-y-6 pl-1 sm:pl-2">
                {project.projectTitles.map((title, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    whileHover={{ x: 8 }}
                    className="group relative flex gap-4 sm:gap-5 items-start"
                  >
                    <div className="flex-shrink-0 mt-1.5">
                      <div className="w-7 h-7 rounded-full border-2 border-green-600 flex items-center justify-center bg-white text-green-700 font-semibold text-sm shadow-sm">
                        {String(index + 1)}
                      </div>
                    </div>

                    <div className="flex-1 bg-gradient-to-r from-green-50 to-white border border-green-100 rounded-2xl p-5 sm:p-6 hover:shadow-md transition-all duration-300 group-hover:border-green-200">
                      <p className="text-[#14532D] leading-relaxed font-medium text-[15px] sm:text-base">
                        {title}
                      </p>
                    </div>

                    {index < project.projectTitles.length - 1 && (
                      <div className="absolute left-[13px] top-9 bottom-0 w-[2px] bg-gradient-to-b from-green-300 to-transparent" />
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Overview */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -left-4 sm:-left-6 top-0 h-20 w-20 bg-green-500/10 blur-2xl rounded-full" />
            <div className="absolute -right-4 sm:-right-6 bottom-0 h-20 w-20 bg-emerald-500/10 blur-2xl rounded-full" />

            <div className="flex items-center gap-3">
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "40px" }}
                viewport={{ once: true }}
                className="h-8 sm:h-10 w-1 bg-gradient-to-b from-green-700 to-emerald-400 rounded-full"
              />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#14532D] tracking-tight">
                Project Overview
              </h2>
            </div>

            <div className="mt-4 ml-4 flex items-center gap-2">
              <div className="w-10 h-[2px] bg-green-600 rounded-full" />
              <div className="w-3 h-3 bg-emerald-500 rounded-full" />
              <div className="w-16 h-[2px] bg-green-300 rounded-full" />
            </div>

            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="mt-8 ml-4 border-l-2 border-green-200 pl-5 sm:pl-6"
            >
              <p className="text-base sm:text-lg md:text-xl leading-relaxed md:leading-9 text-gray-600">
                {project.description}
              </p>
            </motion.div>
          </motion.div>

          {/* FEATURES */}
          <motion.div
            className="mt-14 md:mt-20"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <div className="flex items-center gap-3">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                className="w-2 h-9 sm:h-10 bg-green-700 rounded-full"
              />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#14532D]">
                Key Features
              </h2>
            </div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mt-8 md:mt-10"
              variants={staggerContainer}
            >
              {project.features?.map((item, index) => (
                <motion.div
                  key={item}
                  variants={fadeInUp}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="group p-6 rounded-2xl bg-green-50 border border-green-100 hover:bg-green-100 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-green-700 font-bold text-sm">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1 h-[1px] bg-green-200 group-hover:bg-green-400 transition" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-[#14532D] leading-relaxed">
                    {item}
                  </h3>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-10 md:mt-14"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-8 bg-green-700 rounded-full" />
              <h2 className="text-2xl sm:text-3xl font-black text-[#14532D]">
                Photo Gallery
              </h2>
            </div>

            <Swiper
              modules={[Autoplay]}
              loop={true}
              speed={1200}
              observer={true}
              observeParents={true}
              allowTouchMove={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
                waitForTransition: false,
              }}
              onSwiper={(swiper) => {
                swiper.el.addEventListener("mouseenter", () => {
                  swiper.autoplay.stop();
                });

                swiper.el.addEventListener("mouseleave", () => {
                  swiper.autoplay.start();
                });

                swiper.el.addEventListener("click", () => {
                  swiper.autoplay.stop();

                  setTimeout(() => {
                    swiper.autoplay.start();
                  }, 2500);
                });

                swiper.el.addEventListener("touchend", () => {
                  setTimeout(() => {
                    swiper.autoplay.start();
                  }, 1500);
                });
              }}
              spaceBetween={24}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 2,
                },
                1280: {
                  slidesPerView: 3,
                },
              }}
              className="bg-transparent"
            >
              {project.gallery?.map((img, index) => (
                <SwiperSlide key={index}>
                  <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden bg-transparent">
                    <Image
                      src={img}
                      fill
                      alt={`${project.title}-${index}`}
                      sizes="(max-width:768px) 100vw,33vw"
                      className="object-cover transition-transform duration-700 hover:scale-110"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
