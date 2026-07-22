// src/components/Navbar.jsx
"use client";
import { LogOut, User, Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Navbar({ user }) {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.clear();
    router.push("/login");
  };

  return (
    <nav className="bg-white border-b border-gray-200 px-4 md:px-6 py-4 flex items-center justify-between sticky top-0 z-50 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-[#16A34A] rounded-xl flex items-center justify-center">
            <span className="text-white font-bold text-xl">P</span>
          </div>
          <div>
            <h1 className="font-semibold text-[#14532D] text-lg md:text-xl">
              Penta Automation
            </h1>
            <p className="text-xs text-gray-500 -mt-1 hidden sm:block">
              Employee Portal
            </p>
          </div>
        </div>
      </div>

      {/* Desktop User Info */}
      <div className="hidden md:flex items-center gap-6">
        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="font-medium text-sm text-[#14532D]">{user?.name}</p>
            <p className="text-xs text-gray-500">{user?.role}</p>
          </div>
          <div className="w-10 h-10 bg-[#DCFCE7] rounded-2xl flex items-center justify-center border border-[#16A34A]/30">
            <User size={22} className="text-[#16A34A]" />
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-xl transition"
        >
          <LogOut size={18} />
          <span className="text-sm font-medium">Logout</span>
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden p-2 text-gray-700"
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 right-4 bg-white rounded-2xl shadow-xl border border-gray-200 p-4 w-64 md:hidden z-50">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-[#DCFCE7] rounded-2xl flex items-center justify-center border border-[#16A34A]/30">
              <User size={22} className="text-[#16A34A]" />
            </div>
            <div>
              <p className="font-medium text-[#14532D]">{user?.name}</p>
              <p className="text-xs text-gray-500">{user?.role}</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 text-red-600 hover:bg-red-50 rounded-xl transition"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      )}
    </nav>
  );
}
