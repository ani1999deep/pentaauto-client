"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

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
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <div>
              <h1 className="text-2xl font-bold text-[#14532D]">GreenTech</h1>
              <p className="text-xs text-[#6B7280]">Engineering Solutions</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="text-[#1F2937] font-medium hover:text-[#16A34A] transition"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <Link href="/contact">
              <button className="bg-[#16A34A] hover:bg-[#14532D] text-white px-6 py-3 rounded-lg transition">
                Get Quote
              </button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X className="text-[#14532D]" />
            ) : (
              <Menu className="text-[#14532D]" />
            )}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="lg:hidden pb-5">
            <div className="flex flex-col gap-4">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className="text-[#1F2937] hover:text-[#16A34A]"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              <Link href="/contact">
                <button className="bg-[#16A34A] text-white px-5 py-3 rounded-lg mt-2">
                  Get Quote
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
