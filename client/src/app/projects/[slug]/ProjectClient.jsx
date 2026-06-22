"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ProjectClient({ project }) {
  // Animation Variants
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
    <main className="bg-[#F7FAF7]">
      {/* HERO */}
      <section className="relative h-[45vh] md:h-[55vh] overflow-hidden rounded-b-3xl">
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority
          className="object-cover object-center scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/50 to-green-900/40 backdrop-blur-[2px]" />

        {/* Decorative Glow */}
        <motion.div
          className="absolute -top-20 -left-20 w-72 h-72 bg-green-500/20 blur-3xl rounded-full"
          animate={{ scale: [1, 1.1, 1], opacity: [0.6, 0.8, 0.6] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-20 -right-20 w-72 h-72 bg-emerald-400/20 blur-3xl rounded-full"
          animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0.9, 0.6] }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        {/* Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-5 sm:px-8">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-4 text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight max-w-2xl"
            >
              {project.title}
            </motion.h1>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "5rem" }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-5 w-20 h-[3px] bg-green-400 rounded-full"
            />
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="container mx-auto px-6 py-24">
        <div className="bg-white rounded-[40px] p-10 lg:p-16 shadow-xl">
          {/* ←←← NEW: Sub Projects / Implementations */}
          {project.projectTitles && project.projectTitles.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="flex items-center gap-3 mb-8">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  className="w-2 h-10 bg-green-700 rounded-full"
                />
                <h2 className="text-3xl md:text-4xl font-black text-[#14532D]">
                  Key Implementations
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {project.projectTitles.map((title, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="flex gap-4 p-6 bg-green-50 border border-green-100 rounded-2xl hover:bg-green-100 transition-all group"
                  >
                    <span className="text-green-700 font-bold text-xl mt-1">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-[#14532D] leading-relaxed font-medium">
                      {title}
                    </p>
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
            <div className="absolute -left-6 top-0 h-24 w-24 bg-green-500/10 blur-2xl rounded-full" />
            <div className="absolute -right-6 bottom-0 h-24 w-24 bg-emerald-500/10 blur-2xl rounded-full" />

            <div className="flex items-center gap-3">
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "40px" }}
                viewport={{ once: true }}
                className="h-10 w-1 bg-gradient-to-b from-green-700 to-emerald-400 rounded-full"
              />
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#14532D] tracking-tight">
                Project Overview
              </h2>
            </div>

            <div className="mt-4 ml-4 flex items-center gap-2">
              <div className="w-12 h-[2px] bg-green-600 rounded-full" />
              <div className="w-3 h-3 bg-emerald-500 rounded-full" />
              <div className="w-20 h-[2px] bg-green-300 rounded-full" />
            </div>

            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="mt-8 ml-4 border-l-2 border-green-200 pl-6"
            >
              <p className="text-lg md:text-xl leading-9 text-gray-600">
                {project.description}
              </p>
            </motion.div>
          </motion.div>

          {/* FEATURES */}
          <motion.div
            className="mt-20"
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
                className="w-2 h-10 bg-green-700 rounded-full"
              />
              <h2 className="text-3xl md:text-4xl font-black text-[#14532D]">
                Key Features
              </h2>
            </div>

            <motion.div
              className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10"
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
                  <h3 className="text-base md:text-lg font-semibold text-[#14532D] leading-relaxed">
                    {item}
                  </h3>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* TECHNOLOGY */}
          <motion.div
            className="mt-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl font-black text-[#14532D]">Technologies</h2>

            <motion.div
              className="flex flex-wrap gap-5 mt-10"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {project.tech?.map((tech) => (
                <motion.div
                  key={tech}
                  variants={scaleIn}
                  whileHover={{
                    scale: 1.08,
                    backgroundColor: "rgba(34, 197, 94, 0.25)", // light green hover
                    backdropFilter: "blur(10px)",
                  }}
                  className="px-7 py-3 rounded-full text-green-900 font-medium cursor-default
             bg-green-200/20 backdrop-blur-md border border-green-300/30 shadow-sm"
                >
                  {tech}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* GALLERY */}
          <motion.div
            className="mt-24"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-5xl font-black text-[#14532D]"
              >
                Project Gallery
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mt-5 text-gray-500"
              >
                Explore actual industrial implementation
              </motion.p>
            </div>

            <motion.div
              className="mt-14 grid md:grid-cols-2 xl:grid-cols-4 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {project.gallery?.map((img, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.03 }}
                  className="relative h-[320px] rounded-[32px] overflow-hidden group shadow-xl"
                >
                  <Image
                    src={img}
                    fill
                    alt={`${project.title}-${index}`}
                    className="object-cover group-hover:scale-110 duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 duration-500" />

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute left-6 bottom-6 text-white"
                  >
                    <p>{project.company}</p>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
