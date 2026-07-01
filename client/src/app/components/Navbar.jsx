"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("/");

  const navLinks = [
    { name: "Home", path: "/", id: "home" },
    { name: "About Us", path: "/#about", id: "about" },
    { name: "Services", path: "/services", id: "services" },
    { name: "Projects", path: "/#projects", id: "projects" },
    { name: "Contact", path: "/contact", id: "contact" },
  ];

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.45,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg shadow-sm border-b border-gray-100"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px] sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <motion.div whileHover={{ scale: 1.04 }}>
              <Image
                src="/pentaauto3.png"
                alt="Penta Auto"
                width={260}
                height={100}
                priority
                className="
                  h-12
                  sm:h-14
                  md:h-16
                  w-auto
                  object-contain
                "
              />
            </motion.div>
          </Link>

          {/* Desktop */}
          <nav className="hidden lg:flex items-center gap-2 xl:gap-3">
            {navLinks.map((item, index) => {
              const current =
                active === item.id || (item.path === "/" && active === "home");

              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.08,
                  }}
                >
                  <Link
                    href={item.path}
                    onClick={() => setActive(item.id)}
                    className={`
                      relative
                      px-4 xl:px-5
                      py-2
                      rounded-full
                      whitespace-nowrap
                      transition-all
                      duration-300
                      ${
                        current
                          ? "bg-green-100 text-[#16A34A]"
                          : "text-[#1F2937] hover:text-[#16A34A]"
                      }
                    `}
                  >
                    {item.name}

                    {current && (
                      <motion.span
                        layoutId="active"
                        className="absolute bottom-0 left-3 right-3 h-[3px] bg-[#16A34A] rounded-full"
                      />
                    )}
                  </Link>
                </motion.div>
              );
            })}
          </nav>

          {/* CTA */}
          <Link
            href="/contact"
            className="
              hidden
              lg:flex
              items-center
              bg-[#16A34A]
              text-white
              px-5 xl:px-6
              py-3
              rounded-xl
              hover:bg-[#14532D]
            "
          >
            Enquiry
          </Link>

          {/* Mobile */}
          <button className="lg:hidden p-1" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{
                opacity: 0,
                height: 0,
              }}
              animate={{
                opacity: 1,
                height: "auto",
              }}
              exit={{
                opacity: 0,
                height: 0,
              }}
              className="lg:hidden py-4 overflow-hidden"
            >
              {navLinks.map((item) => {
                const current = active === item.id;

                return (
                  <Link
                    key={item.name}
                    href={item.path}
                    onClick={() => {
                      setActive(item.id);
                      setIsOpen(false);
                    }}
                    className={`
                      block
                      w-full
                      py-3
                      px-4
                      rounded-xl
                      mb-2
                      ${
                        current
                          ? "bg-green-100 text-[#16A34A]"
                          : "text-[#1F2937]"
                      }
                    `}
                  >
                    {item.name}
                  </Link>
                );
              })}

              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="
                  block
                  text-center
                  mt-4
                  bg-[#16A34A]
                  text-white
                  px-5
                  py-3
                  rounded-xl
                "
              >
                Get Quote
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
