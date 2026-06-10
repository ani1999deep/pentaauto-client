"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="sticky top-0 z-50 bg-gradient-to-r from-[#06903A] via-[#c3f398] to-[#01652B] shadow-sm border-b border-gray-100"
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/pentaauto.png"
                alt="Penta Auto"
                width={180}
                height={60}
                priority
                className="h-12 w-auto object-contain"
              />
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -2 }}
              >
                <Link
                  href={item.path}
                  className="font-medium text-[#1F2937] hover:text-[#16A34A] transition duration-300"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/contact"
              className="hidden lg:flex bg-[#16A34A] hover:bg-[#14532D] text-white px-6 py-3 rounded-lg transition shadow-lg hover:shadow-xl"
            >
              Enquiry
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? (
              <X className="text-[#14532D]" size={28} />
            ) : (
              <Menu className="text-[#14532D]" size={28} />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35 }}
              className="lg:hidden overflow-hidden border-t border-green-200"
            >
              <div className="flex flex-col gap-4 py-5">
                {navLinks.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.08,
                    }}
                  >
                    <Link
                      href={item.path}
                      className="text-[#1F2937] hover:text-[#16A34A] font-medium transition"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  whileHover={{ scale: 1.03 }}
                >
                  <Link
                    href="/contact"
                    className="bg-[#16A34A] text-white px-5 py-3 rounded-lg w-fit shadow-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    Get Quote
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
