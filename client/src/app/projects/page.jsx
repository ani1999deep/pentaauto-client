import Link from "next/link";
import Image from "next/image";
import { projects } from "../../data/projectsData";
import WhyPentaAutomationSection from "../components/WhyPentaAutomationSection/WhyPentaAutomationSection";
import ServicesCTASection from "../services/ServicesCTASection";

export default function ProjectsPage() {
  return (
    <main className="bg-[#F7FAF7] min-h-screen">
      {/* HERO */}
      <section className="relative h-[360px] overflow-hidden">
        {/* Background Image */}
        <Image
          src="/projects/banner8.jpg"
          alt="Projects Banner"
          fill
          priority
          className="object-cover scale-105"
        />

        {/* Dark Green Overlay */}
        <div
          className="
      absolute
      inset-0
      bg-gradient-to-r
      from-[#03150D]/90
      via-[#0B2D18]/70
      to-[#14532D]/60
    "
        />

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <div className="max-w-5xl text-center">
            {/* Small Badge */}
            <span
              className="
          inline-block
          px-6
          py-2
          rounded-full
          bg-green-500/10
          border
          border-green-400/30
          backdrop-blur-md
          text-green-100
          uppercase
          tracking-[4px]
          text-sm
        "
            >
              Smart Industrial Solutions
            </span>

            {/* Title */}
            <h1
              className="
          mt-6
          text-4xl
          md:text-6xl
          font-normal
          leading-tight
        "
            >
              <span className="text-white">Building </span>
              <span
                className="
            bg-gradient-to-r
            from-[#A7F3D0]
            via-[#4ADE80]
            to-[#16A34A]
            bg-clip-text
            text-transparent
          "
              >
                Future Industries
              </span>
            </h1>

            {/* Description */}
            <p
              className="
          mt-6
          text-green-50
          text-base
          leading-7
          max-w-3xl
          mx-auto
        "
            >
              Delivering advanced automation, PLC integration, industrial
              monitoring and engineering solutions with reliability and
              innovation.
            </p>
          </div>
        </div>

        {/* Scroll Down Arrow */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <a href="#all-projects">
            <div className="w-8 h-8 border-b-2 border-r-2 border-green-200 rotate-45" />
          </a>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="all-projects" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-black text-[#14532D]">
              Selected Work
            </h2>

            <p className="text-gray-500 mt-4">
              Delivering smart industrial solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {projects.map((project) => (
              <Link key={project.slug} href={`/projects/${project.slug}`}>
                <div
                  className="
                    bg-white
                    rounded-2xl
                    overflow-hidden
                    shadow-md
                    hover:shadow-2xl
                    hover:-translate-y-2
                    duration-300
                    group
                  "
                >
                  <div className="relative h-[190px] overflow-hidden">
                    <Image
                      fill
                      src={project.image}
                      alt={project.title}
                      className="
                        object-cover
                        duration-700
                        group-hover:scale-110
                      "
                    />
                  </div>

                  <div className="p-5">
                    <span className="text-sm text-green-600">
                      {project.category}
                    </span>

                    <h2 className="text-xl font-bold mt-2 text-[#14532D]">
                      {project.title}
                    </h2>

                    <p className="mt-3 text-sm text-gray-500 line-clamp-2">
                      {project.shortDesc}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section>
        <WhyPentaAutomationSection />
      </section>

      <section>
        <ServicesCTASection />
      </section>
    </main>
  );
}
