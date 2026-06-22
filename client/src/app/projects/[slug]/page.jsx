import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "../../../data/projectsData";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="bg-[#F7FAF7]">
      {/* HERO */}

      <section className="relative h-[85vh]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority
          className="object-cover"
        />

        <div
          className="
        absolute
        inset-0
        bg-gradient-to-r
        from-black/80
        to-black/40
        flex
        items-center
        "
        >
          <div className="container mx-auto px-6">
            <span
              className="
            inline-block
            px-5
            py-2
            rounded-full
            bg-green-600
            text-white
            text-sm
            "
            >
              {project.category}
            </span>

            <h1
              className="
            mt-8
            text-5xl
            lg:text-7xl
            font-black
            text-white
            max-w-4xl
            "
            >
              {project.title}
            </h1>

            <p
              className="
            mt-6
            text-xl
            text-gray-200
            "
            >
              Company: {project.company}
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}

      <section
        className="
      container
      mx-auto
      px-6
      py-24
      "
      >
        <div
          className="
        bg-white
        rounded-[40px]
        p-10
        lg:p-16
        shadow-xl
        "
        >
          {/* Overview */}

          <div>
            <h2
              className="
            text-4xl
            font-black
            text-[#14532D]
            "
            >
              Project Overview
            </h2>

            <div
              className="
            w-28
            h-1
            bg-green-600
            mt-4
            rounded-full
            "
            />

            <p
              className="
            mt-10
            text-lg
            leading-[42px]
            text-gray-600
            "
            >
              {project.description}
            </p>
          </div>

          {/* FEATURES */}

          <div className="mt-20">
            <h2
              className="
            text-4xl
            font-black
            text-[#14532D]
            "
            >
              Key Features
            </h2>

            <div
              className="
            grid
            md:grid-cols-2
            xl:grid-cols-3
            gap-8
            mt-10
            "
            >
              {project.features?.map((item) => (
                <div
                  key={item}
                  className="
                  p-8
                  rounded-[28px]
                  bg-green-50
                  hover:-translate-y-2
                  duration-500
                  shadow
                  "
                >
                  <div
                    className="
                  text-3xl
                  mb-5
                  "
                  >
                    ✓
                  </div>

                  <h3
                    className="
                  text-lg
                  font-bold
                  text-[#14532D]
                  "
                  >
                    {item}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/* TECHNOLOGY */}

          <div className="mt-20">
            <h2
              className="
            text-4xl
            font-black
            text-[#14532D]
            "
            >
              Technologies
            </h2>

            <div
              className="
            flex
            flex-wrap
            gap-5
            mt-10
            "
            >
              {project.tech?.map((tech) => (
                <div
                  key={tech}
                  className="
                  px-7
                  py-3
                  rounded-full
                  bg-[#14532D]
                  text-white
                  font-medium
                  "
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>

          {/* GALLERY */}

          <div className="mt-24">
            <div className="text-center">
              <h2
                className="
              text-5xl
              font-black
              text-[#14532D]
              "
              >
                Project Gallery
              </h2>

              <p
                className="
              mt-5
              text-gray-500
              "
              >
                Explore actual industrial implementation
              </p>
            </div>

            <div
              className="
            mt-14
            grid
            md:grid-cols-2
            xl:grid-cols-4
            gap-8
            "
            >
              {project.gallery?.map((img, index) => (
                <div
                  key={index}
                  className="
                  relative
                  h-[320px]
                  rounded-[32px]
                  overflow-hidden
                  group
                  shadow-xl
                  "
                >
                  <Image
                    src={img}
                    fill
                    alt={`${project.title}-${index}`}
                    className="
                    object-cover
                    group-hover:scale-110
                    duration-700
                    "
                  />

                  <div
                    className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/80
                  to-transparent
                  opacity-0
                  group-hover:opacity-100
                  duration-500
                  "
                  />

                  <div
                    className="
                  absolute
                  left-6
                  bottom-6
                  opacity-0
                  group-hover:opacity-100
                  translate-y-6
                  group-hover:translate-y-0
                  duration-500
                  text-white
                  "
                  >
                    <h3
                      className="
                    text-2xl
                    font-bold
                    "
                    >
                      Site View {index + 1}
                    </h3>

                    <p>{project.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
