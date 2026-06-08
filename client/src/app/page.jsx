"use client";

import {
  Building2,
  Factory,
  Briefcase,
  ArrowRight,
  Star,
  Settings,
  Zap,
  ClipboardList,
  Truck,
  Wind,
  Cpu,
  Award,
  Users,
  Target,
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  const services = [
    {
      title: "Engineering Solutions",
      desc: "Innovative engineering services tailored to modern industries.",
      icon: Settings,
    },
    {
      title: "Industrial Automation",
      desc: "Smart automation systems for efficiency and productivity.",
      icon: Zap,
    },
    {
      title: "Project Management",
      desc: "End-to-end project execution with quality assurance.",
      icon: ClipboardList,
    },
  ];

  const industries = [
    { name: "Manufacturing", icon: Factory },
    { name: "Construction", icon: Truck },
    { name: "Energy", icon: Wind },
    { name: "Infrastructure", icon: Building2 },
    { name: "Automotive", icon: Cpu },
    { name: "Technology", icon: Award },
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

  // Animation Variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5 },
  };

  return (
    <main className="bg-[#F8FAFC]">
      {/* Hero Section */}
      <section className="relative py-15 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.span
                className="inline-block bg-[#86EFAC] text-[#14532D] px-4 py-2 rounded-full text-sm font-semibold"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                Trusted Industry Partner
              </motion.span>
              <h1 className="text-4xl md:text-5xl lg:text-[3.3rem] font-bold text-[#14532D] mt-6 leading-tight">
                Trusted and Reliable Solution Provider, Serving as an Innovative
                Industry Partner Since 2012.
              </h1>
              <motion.p
                className="text-[#6B7280] mt-6 text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Delivering innovative engineering, automation, and
                infrastructure solutions that drive growth and operational
                excellence.
              </motion.p>
              <motion.div
                className="flex gap-4 mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-[#16A34A] text-white px-8 py-4 rounded-lg hover:bg-[#14532D] transition"
                >
                  Get Started
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="border border-[#16A34A] text-[#16A34A] px-8 py-4 rounded-lg hover:bg-[#16A34A] hover:text-white transition"
                >
                  Learn More
                </motion.button>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative w-full aspect-[16/9] overflow-hidden rounded-3xl shadow-xl"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Image
                src="/penta-banner2.png"
                alt="Industry"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Company */}

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - About Content */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
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
              <motion.div
                className="grid grid-cols-3 gap-6 mt-10"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                {[
                  { number: "14+", label: "Years Experience" },
                  { number: "100+", label: "Projects Delivered" },
                  { number: "500+", label: "Satisfied Clients" },
                ].map((stat, i) => (
                  <motion.div key={i} variants={fadeInUp}>
                    <h3 className="text-3xl font-bold text-[#16A34A]">
                      {stat.number}
                    </h3>
                    <p className="text-[#6B7280] text-sm">{stat.label}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Column - Cards */}
            <motion.div
              className="grid gap-5"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {/* Existing Cards */}
              <motion.div
                variants={fadeInUp}
                className="bg-[#F8FAFC] p-6 rounded-2xl border border-gray-100 shadow-sm group hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex-shrink-0 bg-[#DCFCE7] rounded-2xl flex items-center justify-center">
                    <Settings size={28} className="text-[#16A34A]" />
                  </div>
                  <div className="flex-1">
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
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-[#F8FAFC] p-6 rounded-2xl border border-gray-100 shadow-sm group hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex-shrink-0 bg-[#DCFCE7] rounded-2xl flex items-center justify-center">
                    <Users size={28} className="text-[#16A34A]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-[#14532D] mb-3">
                      Firm Overview
                    </h3>
                    <p className="text-[#6B7280] leading-7">
                      Established as a Partnership Firm on 3rd December 2012,
                      Penta Automation has earned a reputation for delivering
                      reliable, efficient, and customer-focused automation
                      solutions. Supported by experienced leadership and skilled
                      professionals, we serve MNCs, corporate organizations,
                      SMEs, and owner-managed businesses.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-[#14532D] text-white p-6 rounded-2xl group hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex-shrink-0 bg-white/10 rounded-2xl flex items-center justify-center">
                    <Target size={28} className="text-[#86EFAC]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-4">
                      Our Commitment
                    </h3>
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
              </motion.div>
            </motion.div>
          </div>
          {/* ====================== NEW: Key Persons Section ====================== */}
          <div className="mt-20">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-12"
            >
              <span className="inline-block bg-[#DCFCE7] text-[#14532D] px-4 py-2 rounded-full text-sm font-semibold">
                Our Leadership
              </span>
              <h3 className="text-4xl md:text-5xl font-bold text-[#14532D] mt-4">
                Key Persons
              </h3>
              <p className="mt-3 text-[#6B7280] max-w-2xl mx-auto">
                Meet the visionaries driving innovation and excellence at Penta
                Automation
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {/* Person 1 - Smaller Card */}
              <motion.div
                variants={fadeInUp}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="relative h-64 overflow-hidden">
                  {" "}
                  {/* Reduced height */}
                  <img
                    src="https://via.placeholder.com/600x800/14532D/ffffff?text=Mr.+Rajesh+Sharma"
                    alt="Nihar Roy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute top-5 right-5 bg-white/90 text-[#14532D] px-3 py-1 rounded-2xl text-xs font-semibold backdrop-blur-md">
                    Application & Design Head
                  </div>
                </div>

                <div className="p-6">
                  {" "}
                  {/* Reduced padding */}
                  <div className="absolute -top-5 left-6 w-10 h-10 bg-[#16A34A] rounded-2xl flex items-center justify-center text-white shadow-lg text-sm font-bold">
                    01
                  </div>
                  <h4 className="text-xl font-bold text-[#14532D] mt-6">
                    Mr. Nihar Roy
                  </h4>
                  <p className="text-[#16A34A] font-medium">
                    Application & Design Head
                  </p>
                  <div className="mt-5 space-y-2.5 text-sm text-[#6B7280]">
                    <a
                      href="tel:+919876543210"
                      className="flex items-center gap-3 hover:text-[#14532D] transition-colors"
                    >
                      <span className="text-[#16A34A]">📞</span> +91 9836680055
                    </a>
                    <a
                      href="mailto:niharroy@pentaauto.co.in"
                      className="flex items-center gap-3 hover:text-[#14532D] transition-colors"
                    >
                      <span className="text-[#16A34A]">✉️</span>{" "}
                      niharroy@pentaauto.co.in
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Person 2 - Smaller Card */}
              <motion.div
                variants={fadeInUp}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src="https://via.placeholder.com/600x800/14532D/ffffff?text=Ms.+Priya+Nair"
                    alt="Monotosh Halder"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                  <div className="absolute top-5 right-5 bg-white/90 text-[#14532D] px-3 py-1 rounded-2xl text-xs font-semibold backdrop-blur-md">
                    Technical Head
                  </div>
                </div>

                <div className="p-6">
                  <div className="absolute -top-5 left-6 w-10 h-10 bg-[#16A34A] rounded-2xl flex items-center justify-center text-white shadow-lg text-sm font-bold">
                    02
                  </div>

                  <h4 className="text-xl font-bold text-[#14532D] mt-6">
                    Ms. Monotosh Halder
                  </h4>
                  <p className="text-[#16A34A] font-medium">Marketing Head</p>

                  <div className="mt-5 space-y-2.5 text-sm text-[#6B7280]">
                    <a
                      href="tel:+919876543211"
                      className="flex items-center gap-3 hover:text-[#14532D] transition-colors"
                    >
                      <span className="text-[#16A34A]">📞</span> +91 9836685823
                    </a>
                    <a
                      href="mailto:monotosh.penta@gmail.com"
                      className="flex items-center gap-3 hover:text-[#14532D] transition-colors"
                    >
                      <span className="text-[#16A34A]">✉️</span>{" "}
                      monotosh.penta@gmail.com
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Person 3 - Smaller Card */}
              <motion.div
                variants={fadeInUp}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src="https://via.placeholder.com/600x800/14532D/ffffff?text=Mr.+Amit+Verma"
                    alt="Amit Verma"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                  <div className="absolute top-5 right-5 bg-white/90 text-[#14532D] px-3 py-1 rounded-2xl text-xs font-semibold backdrop-blur-md">
                    Operations
                  </div>
                </div>

                <div className="p-6">
                  <div className="absolute -top-5 left-6 w-10 h-10 bg-[#16A34A] rounded-2xl flex items-center justify-center text-white shadow-lg text-sm font-bold">
                    03
                  </div>

                  <h4 className="text-xl font-bold text-[#14532D] mt-6">
                    Mr. Amit Verma
                  </h4>
                  <p className="text-[#16A34A] font-medium">
                    Director - Operations
                  </p>

                  <div className="mt-5 space-y-2.5 text-sm text-[#6B7280]">
                    <a
                      href="tel:+919876543212"
                      className="flex items-center gap-3 hover:text-[#14532D] transition-colors"
                    >
                      <span className="text-[#16A34A]">📞</span> +91 98765 43212
                    </a>
                    <a
                      href="mailto:amit@pentaautomation.com"
                      className="flex items-center gap-3 hover:text-[#14532D] transition-colors"
                    >
                      <span className="text-[#16A34A]">✉️</span>{" "}
                      amit@pentaautomation.com
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries, Projects, Clients, Testimonials, CTA sections remain the same as before with motion wrappers */}

      {/* (Rest of the sections are unchanged from the previous version I gave you - just copy them over) */}

      {/* Industries */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold text-[#14532D]">
              Industries We Serve
            </h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-6"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {industries.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className="bg-[#F8FAFC] border border-gray-100 p-6 rounded-xl text-center hover:-translate-y-2 transition-all duration-300 group"
                >
                  <div className="mx-auto w-12 h-12 flex items-center justify-center bg-white rounded-2xl shadow-sm mb-4 group-hover:rotate-12 transition-transform duration-300">
                    <Icon className="text-[#16A34A]" size={28} />
                  </div>
                  <h3 className="font-semibold text-[#14532D]">{item.name}</h3>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold text-[#14532D]">
              Featured Projects
            </h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="h-56 bg-gradient-to-br from-[#86EFAC] to-[#16A34A] flex items-center justify-center relative overflow-hidden">
                  <motion.div
                    className="text-white/80"
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Factory size={80} />
                  </motion.div>
                </div>
                <div className="p-6">
                  <span className="text-sm text-[#16A34A]">
                    {project.category}
                  </span>
                  <h3 className="font-semibold text-xl text-[#14532D] mt-2">
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-center text-4xl font-bold text-[#14532D] mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Trusted By Clients
          </motion.h2>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-5 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[1, 2, 3, 4, 5].map((item) => (
              <motion.div
                key={item}
                variants={scaleIn}
                whileHover={{ scale: 1.15 }}
                className="bg-[#F8FAFC] h-24 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300"
              >
                <Briefcase className="text-[#16A34A]" size={42} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold text-[#14532D]">
              What Clients Say
            </h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
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
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#14532D]">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            className="text-4xl font-bold text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ready To Start Your Next Project?
          </motion.h2>
          <motion.p
            className="text-green-100 mt-4 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Partner with us to build innovative, efficient, and sustainable
            solutions for your business.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="mt-8 bg-white text-[#14532D] px-8 py-4 rounded-lg font-semibold inline-flex items-center gap-2 hover:bg-[#86EFAC] transition-all duration-200"
          >
            Contact Us
            <ArrowRight size={18} />
          </motion.button>
        </div>
      </section>
    </main>
  );
}
