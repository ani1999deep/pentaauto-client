import { Building2, Factory, Briefcase, ArrowRight, Star } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const services = [
    {
      title: "Engineering Solutions",
      desc: "Innovative engineering services tailored to modern industries.",
    },
    {
      title: "Industrial Automation",
      desc: "Smart automation systems for efficiency and productivity.",
    },
    {
      title: "Project Management",
      desc: "End-to-end project execution with quality assurance.",
    },
  ];

  const industries = [
    "Manufacturing",
    "Construction",
    "Energy",
    "Infrastructure",
    "Automotive",
    "Technology",
  ];

  const projects = [
    {
      title: "Industrial Automation System",
      category: "Manufacturing",
    },
    {
      title: "Smart Energy Management",
      category: "Energy",
    },
    {
      title: "Infrastructure Development",
      category: "Construction",
    },
  ];

  return (
    <main className="bg-[#F8FAFC]">
      {/* Hero Section */}
      <section className="relative py-28 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-[#86EFAC] text-[#14532D] px-4 py-2 rounded-full text-sm font-semibold">
                Trusted Industry Partner
              </span>

              <h1 className="text-5xl lg:text-6xl font-bold text-[#14532D] mt-6 leading-tight">
                Trusted and Reliable Solution Provider, Serving as an Innovative
                Industry Partner Since 2012.
              </h1>

              <p className="text-[#6B7280] mt-6 text-lg">
                Delivering innovative engineering, automation, and
                infrastructure solutions that drive growth and operational
                excellence.
              </p>

              <div className="flex gap-4 mt-8">
                <button className="bg-[#16A34A] text-white px-8 py-4 rounded-lg hover:bg-[#14532D] transition">
                  Get Started
                </button>

                <button className="border border-[#16A34A] text-[#16A34A] px-8 py-4 rounded-lg hover:bg-[#16A34A] hover:text-white transition">
                  Learn More
                </button>
              </div>
            </div>

            <div>
              <Image
                src="/penta-banner.png"
                alt="Industry"
                width={600}
                height={400}
                className="rounded-3xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 className="text-4xl font-bold text-[#14532D]">
            About Our Company
          </h2>

          <p className="mt-6 text-[#6B7280] leading-8">
            We are a leading provider of engineering, industrial automation, and
            infrastructure solutions. Our mission is to empower businesses
            through innovation, quality, and sustainable development.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#14532D]">Our Services</h2>
            <p className="text-[#6B7280] mt-4">
              Comprehensive solutions tailored for industry needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:-translate-y-2 transition"
              >
                <Building2 size={40} className="text-[#16A34A] mb-4" />

                <h3 className="text-xl font-semibold text-[#14532D]">
                  {service.title}
                </h3>

                <p className="text-[#6B7280] mt-3">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#14532D]">
              Industries We Serve
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {industries.map((item, index) => (
              <div
                key={index}
                className="bg-[#F8FAFC] border border-gray-100 p-6 rounded-xl text-center"
              >
                <Factory className="mx-auto text-[#16A34A] mb-4" />

                <h3 className="font-semibold text-[#14532D]">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#14532D]">
              Featured Projects
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg"
              >
                <div className="h-56 bg-[#86EFAC]" />

                <div className="p-6">
                  <span className="text-sm text-[#16A34A]">
                    {project.category}
                  </span>

                  <h3 className="font-semibold text-xl text-[#14532D] mt-2">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-center text-4xl font-bold text-[#14532D] mb-16">
            Trusted By Clients
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {[1, 2, 3, 4, 5].map((item) => (
              <div
                key={item}
                className="bg-[#F8FAFC] h-24 rounded-xl flex items-center justify-center"
              >
                <Briefcase className="text-[#16A34A]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#14532D]">
              What Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={18}
                      fill="currentColor"
                      className="text-yellow-400"
                    />
                  ))}
                </div>

                <p className="text-[#6B7280]">
                  "Exceptional service and professional project execution.
                  Highly recommended."
                </p>

                <h4 className="mt-4 font-semibold text-[#14532D]">
                  Client Name
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#14532D]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white">
            Ready To Start Your Next Project?
          </h2>

          <p className="text-green-100 mt-4 max-w-2xl mx-auto">
            Partner with us to build innovative, efficient, and sustainable
            solutions for your business.
          </p>

          <button className="mt-8 bg-white text-[#14532D] px-8 py-4 rounded-lg font-semibold inline-flex items-center gap-2 hover:bg-[#86EFAC]">
            Contact Us
            <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </main>
  );
}
