"use client";

import { motion } from "framer-motion";
import { Settings, Users, Target } from "lucide-react";
import { keyPersons } from "../data";
import KeyPersonsSection from "../KeyPersonsSection/KeyPersonsSection";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } },
};

export default function AboutSection() {
  return (
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
              Founded in 2012, <strong>Penta Automation</strong> is committed to
              delivering high-quality automation products, technical excellence,
              timely project execution, and precision control solutions across
              diverse industrial sectors.
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
                { number: "1000+", label: "Projects Delivered" },
                { number: "90%+", label: "Satisfied Clients" },
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
                    solutions.
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
            </motion.div>
          </motion.div>
        </div>

        {/* Key Persons */}
        <KeyPersonsSection />
      </div>
    </section>
  );
}
