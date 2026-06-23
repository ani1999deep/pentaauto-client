"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { projects } from "../../../../data/projectsData";

const featured = projects.slice(0, 3);

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function FeaturedProjects() {
  return (
    <section className="py-20 bg-[#F7FAF7]">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl font-black text-[#14532D]">
            Featured Projects
          </h2>

          <p className="mt-3 text-gray-500">
            Explore our selected industrial projects
          </p>
        </motion.div>

        {/* Smaller cards */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {featured.map((project) => (
            <Link key={project.slug} href={`/projects/${project.slug}`}>
              <motion.div
                whileHover={{ y: -8 }}
                className="
                  bg-white
                  rounded-2xl
                  overflow-hidden
                  shadow-md
                  hover:shadow-xl
                  duration-300
                  group
                "
              >
                {/* Smaller image */}
                <div className="relative h-[190px] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="
                      object-cover
                      duration-500
                      group-hover:scale-105
                    "
                  />
                </div>

                {/* Smaller content */}
                <div className="p-5">
                  <span className="text-sm text-green-600">
                    {project.category}
                  </span>

                  <h3 className="text-xl font-bold mt-2 text-[#14532D]">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm text-gray-500 line-clamp-2">
                    {project.shortDesc}
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link href="/projects">
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
              See More Projects
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
            Discover our complete industrial automation portfolio
          </p>
        </motion.div>
      </div>
    </section>
  );
}
