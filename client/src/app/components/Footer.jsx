"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, Phone, Mail } from "lucide-react";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

const footerLinks = [
  {
    name: "About",
    path: "/#about",
  },
  {
    name: "Services",
    path: "/#services",
  },
  {
    name: "Projects",
    path: "/#projects",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden ">
      {/* Glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full blur-3xl opacity-10 bg-green-500" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container mx-auto px-6 py-14"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr] gap-10">
          {/* Brand */}
          <motion.div variants={item}>
            <motion.div
              whileHover={{
                scale: 1.04,
              }}
            >
              <Image
                src="/pentaauto2.jpeg"
                alt="logo"
                width={170}
                height={60}
                className="mb-5"
              />
            </motion.div>

            <p className="text-sm text-gray-500 leading-7 max-w-[280px]">
              Smart automation solutions with PLC, SCADA, MCC & industrial
              excellence.
            </p>
          </motion.div>

          {/* Company */}
          <motion.div variants={item}>
            <h3 className="font-semibold text-sm uppercase mb-5">Company</h3>

            <div className="space-y-3">
              {footerLinks.map((item) => (
                <motion.div
                  key={item.name}
                  whileHover={{
                    x: 6,
                  }}
                >
                  <Link
                    href={item.path}
                    className="group flex items-center gap-1 text-gray-600"
                  >
                    {item.name}

                    <ArrowUpRight
                      size={14}
                      className="opacity-0 group-hover:opacity-100 transition"
                    />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Solutions */}
          <motion.div variants={item}>
            <h3 className="font-semibold text-sm uppercase mb-5">Solutions</h3>

            <div className="space-y-3 text-gray-600">
              {["PLC Automation", "SCADA", "Electrical Panel", "MCC / PCC"].map(
                (text) => (
                  <motion.p
                    key={text}
                    whileHover={{
                      x: 5,
                    }}
                  >
                    {text}
                  </motion.p>
                ),
              )}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div variants={item}>
            <h3 className="font-semibold text-sm uppercase mb-5">Contact</h3>

            <div className="space-y-4 text-gray-600">
              {[
                {
                  icon: MapPin,
                  text: "Kolkata, India",
                },
                {
                  icon: Phone,
                  text: "+91 9836688442",
                },
                {
                  icon: Mail,
                  text: "penta.automation2012@gmail.com",
                },
              ].map((c, i) => (
                <motion.div
                  key={i}
                  whileHover={{
                    scale: 1.03,
                  }}
                  className="flex gap-3"
                >
                  <c.icon size={16} />

                  <p className="text-sm">{c.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          variants={item}
          className="mt-10 pt-6 border-t flex flex-col md:flex-row justify-between"
        >
          <p className="text-xs text-gray-500">© 2026 Penta Automation</p>

          <div className="flex gap-6 text-sm mt-3 md:mt-0">
            <Link href="/">Privacy</Link>

            <Link href="/">Terms</Link>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
