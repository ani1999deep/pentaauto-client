"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Clock,
  PhoneCall,
  Factory,
  Building2,
  MapPin,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function Contact() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9 }}
      className="min-h-screen bg-gradient-to-br from-[#F8FAFC] via-[#ECFDF5] to-[#F0FDF4] py-12 md:py-20 overflow-hidden relative"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-72 md:w-96 h-72 md:h-96 bg-green-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-40 -right-20 w-72 md:w-96 h-72 md:h-96 bg-emerald-200/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Hero */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-14 md:mb-20"
        >
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-md px-5 py-2 rounded-2xl shadow-sm border border-green-100 mb-6">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            <span className="text-green-700 font-semibold tracking-widest text-xs sm:text-sm">
              LET'S CONNECT
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-[#14532D] leading-tight">
            We're Just a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
              Message Away
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg md:text-xl text-[#4B5563] max-w-2xl mx-auto">
            Whether you have a project in mind or just want to say hello, our
            team is excited to hear from you.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
            {/* Phone */}
            <motion.div
              whileHover={{ y: -12 }}
              className="bg-white rounded-3xl shadow-xl border border-green-100 p-6 sm:p-8 md:p-10 group"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center text-white">
                  <Phone size={28} />
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#14532D]">
                    Speak With Us
                  </h3>
                  <p className="text-green-600 text-sm">Instant Support</p>
                </div>
              </div>

              <div className="space-y-5">
                <a href="tel:+919836688442">
                  <div className="text-lg sm:text-xl md:text-2xl font-semibold break-all text-[#1F2937]">
                    +91 98366 88442
                  </div>
                </a>

                <a href="tel:+919836681900">
                  <div className="text-lg sm:text-xl md:text-2xl font-semibold break-all text-[#1F2937]">
                    +91 98366 81900
                  </div>
                </a>

                <a
                  href="mailto:penta.automation2012@gmail.com"
                  className="flex items-start gap-3 text-sm sm:text-base md:text-lg text-[#6B7280] hover:text-green-700 mt-6 break-all"
                >
                  <Mail size={22} />
                  penta.automation2012@gmail.com
                </a>
              </div>
            </motion.div>

            {/* Office */}
            <motion.div
              whileHover={{ y: -12 }}
              className="bg-white rounded-3xl shadow-xl border border-green-100 p-6 sm:p-8 md:p-10 group"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center text-white">
                  <Building2 size={28} />
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-[#14532D]">
                  Corporate Office
                </h3>
              </div>

              <a
                href="https://maps.google.com/?q=24/4,+Purbachal+Garden,+North+Purbachal,+Haltu,+Kolkata,+West+Bengal+700078"
                target="_blank"
                className="text-sm sm:text-base text-[#4B5563] hover:text-green-700 leading-8"
              >
                <MapPin
                  size={22}
                  className="text-green-600 mt-1 shrink-0 group-hover:scale-110 transition"
                />
                24/4, Purbachal Garden,North Purbachal
                <br />
                Haltu,Kolkata, West Bengal 700078
              </a>
            </motion.div>

            {/* Factory */}
            <motion.div
              whileHover={{ y: -12 }}
              className="bg-white rounded-3xl shadow-xl border border-green-100 p-6 sm:p-8 md:p-10 group"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-orange-600 to-amber-600 rounded-2xl flex items-center justify-center text-white">
                  <Factory size={28} />
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-[#14532D]">
                  Factory
                </h3>
              </div>

              <a
                href="https://maps.google.com/?q=Penta+Automation+Workshop,Ramchandrapur,Satanipara,Bonhooghly,West+Bengal+700103"
                target="_blank"
                className="text-sm sm:text-base text-[#4B5563] hover:text-green-700 leading-8"
              >
                <MapPin
                  size={22}
                  className="text-green-600 mt-1 shrink-0 group-hover:scale-110 transition"
                />
                Penta Automation Workshop,Ramchandrapur
                <br />
                Satanipara,Bonhooghly, West Bengal 700103
              </a>
            </motion.div>

            {/* Hours */}
            <motion.div
              whileHover={{ y: -12 }}
              className="bg-gradient-to-br from-[#14532D] to-[#1F2937] text-white rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10"
            >
              <div className="flex items-center gap-4 mb-8">
                <Clock size={32} className="text-green-400" />
                <h3 className="text-xl md:text-2xl font-bold">Working Hours</h3>
              </div>

              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                  <span>Monday - Saturday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>

                <div className="text-green-300 text-sm">Sunday Closed</div>
              </div>

              <motion.a
                href="tel:+919836688442"
                whileHover={{ scale: 1.05 }}
                className="mt-8 inline-flex items-center justify-center gap-3 bg-white text-[#14532D] px-6 py-4 rounded-2xl font-semibold w-full sm:w-auto"
              >
                <PhoneCall size={22} />
                Call Now
              </motion.a>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div className="mt-12 md:mt-16 bg-gradient-to-r from-green-700 via-emerald-700 to-teal-700 rounded-3xl p-6 sm:p-10 md:p-16 text-center text-white">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold">
              Ready to Start Your Next Project?
            </h2>

            <p className="mt-5 text-base sm:text-lg text-green-100">
              Our experts are standing by to turn your ideas into reality.
            </p>

            <motion.a
              href="tel:+919836688442"
              whileHover={{ scale: 1.08 }}
              className="mt-8 inline-flex items-center gap-3 bg-white text-emerald-800 px-6 sm:px-8 md:px-10 py-4 rounded-2xl text-base sm:text-lg md:text-xl font-semibold"
            >
              <PhoneCall size={24} />
              Let's Talk Today
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.main>
  );
}
