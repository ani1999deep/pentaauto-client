"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  PhoneCall,
  Factory,
  Building2,
  User,
  MessageSquare,
  FileText,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function Contact() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-gradient-to-b from-[#F8FAFC] to-[#ECFDF5] py-24 overflow-hidden"
    >
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <span className="bg-[#86EFAC] text-[#14532D] px-5 py-2 rounded-full text-sm font-semibold shadow-sm">
            Get In Touch
          </span>

          <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold text-[#14532D]">
            Contact Us
          </h1>

          <p className="mt-5 text-lg text-[#6B7280] max-w-2xl mx-auto">
            Have questions about our services or projects? Our team is ready to
            help and provide the best solutions for your business.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-3xl shadow-xl border border-green-100 p-8"
          >
            <h2 className="text-2xl font-bold text-[#14532D] mb-6">
              Send Us a Message
            </h2>

            <motion.div variants={fadeUp}>
              <label className="flex items-center gap-2 mb-2 font-medium text-[#1F2937]">
                <User size={18} className="text-[#16A34A]" />
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-200 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-[#16A34A] transition"
              />
            </motion.div>

            <motion.div variants={fadeUp}>
              <label className="flex items-center gap-2 mb-2 font-medium text-[#1F2937]">
                <Mail size={18} className="text-[#16A34A]" />
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-200 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-[#16A34A] transition"
              />
            </motion.div>

            <motion.div variants={fadeUp}>
              <label className="flex items-center gap-2 mb-2 font-medium text-[#1F2937]">
                <FileText size={18} className="text-[#16A34A]" />
                Subject
              </label>

              <input
                type="text"
                placeholder="Subject"
                className="w-full border border-gray-200 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-[#16A34A] transition"
              />
            </motion.div>

            <motion.div variants={fadeUp}>
              <label className="flex items-center gap-2 mb-2 font-medium text-[#1F2937]">
                <MessageSquare size={18} className="text-[#16A34A]" />
                Message
              </label>

              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full border border-gray-200 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-[#16A34A] transition resize-none"
              ></textarea>
            </motion.div>

            <motion.button
              variants={fadeUp}
              whileHover={{
                scale: 1.02,
                boxShadow: "0px 15px 30px rgba(22,163,74,0.25)",
              }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="w-full bg-[#16A34A] hover:bg-[#14532D] text-white font-semibold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Send size={18} />
              Send Message
            </motion.button>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Contact Information Card */}
            <motion.div
              whileHover={{
                y: -8,
                boxShadow: "0px 20px 40px rgba(0,0,0,0.08)",
              }}
              className="bg-white rounded-3xl shadow-xl border border-green-100 p-8"
            >
              <h2 className="text-2xl font-bold text-[#14532D] mb-8">
                Contact Information
              </h2>

              <div className="space-y-7">
                {[
                  {
                    icon: Phone,
                    title: "Phone",
                    value: (
                      <div className="flex flex-col">
                        <a
                          href="tel:+919836688442"
                          className="text-[#6B7280] hover:text-[#16A34A] transition"
                        >
                          +91 9836688442
                        </a>
                        <a
                          href="tel:+919836681900"
                          className="text-[#6B7280] hover:text-[#16A34A] transition"
                        >
                          +91 9836681900
                        </a>
                      </div>
                    ),
                  },
                  {
                    icon: Mail,
                    title: "Email",
                    value: (
                      <a
                        href="mailto:penta.automation2012@gmail.com"
                        className="text-[#6B7280] hover:text-[#16A34A] transition break-all"
                      >
                        penta.automation2012@gmail.com
                      </a>
                    ),
                  },
                  {
                    icon: Building2,
                    title: "Corporate Office",
                    value: (
                      <a
                        href="https://maps.google.com/?q=GC72+X9J,Kasba RTO,Sector C,East Kolkata Township,Kolkata,West Bengal,700107"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#6B7280] hover:text-[#16A34A] transition"
                      >
                        Corporate Office Address Here
                      </a>
                    ),
                  },
                  {
                    icon: Factory,
                    title: "Factory Address",
                    value: (
                      <a
                        href="https://maps.google.com/?q=Penta+Automation+Workshop,Ramchandrapur,Satanipara,Bonhooghly,West+Bengal+700103"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#6B7280] hover:text-[#16A34A] transition"
                      >
                        Factory Address Here
                      </a>
                    ),
                  },
                  {
                    icon: Clock,
                    title: "Working Hours",
                    value: "Mon - Sat : 9:00 AM - 6:00 PM",
                  },
                ].map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={index}
                      whileHover={{ x: 6 }}
                      className="flex items-start gap-4"
                    >
                      <motion.div
                        animate={{ y: [0, -4, 0] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.3,
                        }}
                        className="bg-[#86EFAC] p-3 rounded-xl shadow-sm"
                      >
                        <Icon className="text-[#14532D]" size={22} />
                      </motion.div>

                      <div>
                        <h4 className="font-semibold text-[#1F2937]">
                          {item.title}
                        </h4>

                        <div className="text-[#6B7280]">{item.value}</div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
              className="relative overflow-hidden bg-[#14532D] rounded-3xl p-8 text-white shadow-xl"
            >
              {/* Glow Effects */}
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-green-400/20 rounded-full blur-3xl"></div>

              <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-green-300/10 rounded-full blur-3xl"></div>

              <div className="relative z-10">
                <h3 className="text-3xl font-bold">
                  Need Immediate Assistance?
                </h3>

                <p className="mt-4 text-green-100 leading-relaxed">
                  Contact our team today and discover how Penta Auto can help
                  your business achieve operational excellence and sustainable
                  growth.
                </p>

                <motion.a
                  href="tel:+919836688442"
                  whileHover={{
                    scale: 1.05,
                    y: -2,
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 inline-flex items-center gap-3 bg-white text-[#14532D] px-6 py-4 rounded-xl font-semibold shadow-lg hover:bg-[#86EFAC] hover:shadow-2xl transition-all duration-300"
                >
                  <PhoneCall size={20} />
                  <span>Call Now</span>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.main>
  );
}
