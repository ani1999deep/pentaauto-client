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
      <section className="relative py-15 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-[#86EFAC] text-[#14532D] px-4 py-2 rounded-full text-sm font-semibold">
                Trusted Industry Partner
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-[3.3rem] font-bold text-[#14532D] mt-6 leading-tight">
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

            <div className="relative w-full aspect-[16/9] overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="/penta-banner2.png"
                alt="Industry"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      {/* About Company */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <span className="inline-block bg-[#DCFCE7] text-[#14532D] px-4 py-2 rounded-full text-sm font-semibold">
                About Penta Automation
              </span>

              <h2 className="text-4xl md:text-5xl font-bold text-[#14532D] mt-6">
                Delivering Smart Automation Solutions Since 2012
              </h2>

              <p className="mt-6 text-[#6B7280] leading-8">
                Founded in 2012, <strong>Penta Automation</strong> is committed
                to delivering high-quality automation products, technical
                excellence, timely project execution, and precision control
                solutions across diverse industrial sectors. Our mission is to
                bring advanced Electrical and Electronics technologies to
                industries, enabling businesses to improve productivity,
                efficiency, and operational reliability.
              </p>

              <p className="mt-4 text-[#6B7280] leading-8">
                We specialize in the manufacturing, assembly, sales, servicing,
                and implementation of Electrical & Electronic Control Systems
                while providing complete engineering, design, and fabrication
                solutions tailored to customer requirements.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-10">
                <div>
                  <h3 className="text-3xl font-bold text-[#16A34A]">14+</h3>
                  <p className="text-[#6B7280] text-sm">Years Experience</p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-[#16A34A]">100+</h3>
                  <p className="text-[#6B7280] text-sm">Projects Delivered</p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-[#16A34A]">500+</h3>
                  <p className="text-[#6B7280] text-sm">Satisfied Clients</p>
                </div>
              </div>
            </div>

            {/* Right Cards */}
            <div className="grid gap-5">
              <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-gray-100 shadow-sm">
                <h3 className="text-xl font-semibold text-[#14532D] mb-3">
                  Our Expertise
                </h3>

                <div className="grid grid-cols-2 gap-3 text-[#6B7280]">
                  <span>✓ PLC & DCS Systems</span>
                  <span>✓ VVVF Inverter Drives</span>
                  <span>✓ Industrial Sensors</span>
                  <span>✓ Field Instruments</span>
                  <span>✓ Power Distribution</span>
                  <span>✓ Motor Control Systems</span>
                  <span>✓ Automation Solutions</span>
                  <span>✓ Control Panels</span>
                </div>
              </div>

              <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-gray-100 shadow-sm">
                <h3 className="text-xl font-semibold text-[#14532D] mb-3">
                  Firm Overview
                </h3>

                <p className="text-[#6B7280] leading-7">
                  Established as a Partnership Firm on 3rd December 2012, Penta
                  Automation has earned a reputation for delivering reliable,
                  efficient, and customer-focused automation solutions.
                  Supported by experienced leadership and skilled professionals,
                  we serve MNCs, corporate organizations, SMEs, and
                  owner-managed businesses.
                </p>
              </div>

              <div className="bg-[#14532D] text-white p-6 rounded-2xl">
                <h3 className="text-xl font-semibold mb-4">Our Commitment</h3>

                <div className="grid grid-cols-2 gap-3 text-green-100">
                  <span>✓ Quality Solutions</span>
                  <span>✓ Technical Innovation</span>
                  <span>✓ Timely Delivery</span>
                  <span>✓ Reliable Support</span>
                  <span>✓ Custom Engineering</span>
                  <span>✓ Long-Term Partnerships</span>
                </div>
              </div>
            </div>
          </div>
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
