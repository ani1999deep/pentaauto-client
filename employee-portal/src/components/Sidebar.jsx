// src/components/Sidebar.jsx
"use client";
import { Calendar, CreditCard, Home, User, LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { name: "Dashboard", href: "/dashboard", icon: Home },
  { name: "Attendance", href: "/dashboard/attendance", icon: Calendar },
  { name: "Expenses", href: "/dashboard/expenses", icon: CreditCard },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed bottom-6 right-6 z-50 bg-[#16A34A] text-white p-4 rounded-full shadow-xl"
      >
        <User size={24} />
      </button>

      {/* Sidebar */}
      <div
        className={`
        fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 
        h-[calc(100vh-73px)] lg:h-auto p-6 flex flex-col
        transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
      >
        <div className="mb-8">
          <p className="uppercase text-xs font-semibold text-gray-500 tracking-widest mb-4">
            Main
          </p>
          <nav className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive =
                pathname === item.href ||
                (item.href === "/dashboard" && pathname === "/dashboard");

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-medium transition-all ${
                    isActive
                      ? "bg-[#DCFCE7] text-[#14532D] shadow-sm"
                      : "hover:bg-gray-100 text-gray-600"
                  }`}
                >
                  <Icon size={20} />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="mt-auto pt-6 border-t">
          <div className="text-xs text-gray-500 leading-relaxed">
            © 2026 Penta Automation
            <br />
            All Rights Reserved
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
