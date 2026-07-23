"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Menu, Bell, LogOut, User, Settings, ChevronDown } from "lucide-react";
import { logout, getSession } from "@/lib/auth";

export default function Navbar({ title = "Dashboard", onMenuClick }) {
  const router = useRouter();
  const session = getSession();

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-200 shadow-sm">
      <div className="h-20 flex items-center justify-between px-4 lg:px-8">
        {/* LEFT */}
        <div className="flex items-center gap-4">
          {/* Mobile Menu */}
          <button
            onClick={onMenuClick}
            className="lg:hidden w-11 h-11 rounded-xl border bg-white hover:bg-gray-100 transition flex items-center justify-center"
          >
            <Menu size={22} />
          </button>

          {/* Page Title */}
          <div>
            <h1 className="text-xl lg:text-2xl font-bold text-gray-800">
              {title}
            </h1>
            <p className="hidden md:block text-sm text-gray-500">
              Welcome back, {session?.name || "Administrator"}
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3">
          {/* Notification */}
          <button className="relative w-11 h-11 rounded-xl border bg-white hover:bg-gray-100 transition flex items-center justify-center">
            <Bell className="w-5 h-5 text-gray-700" />

            <span className="absolute top-2 right-2 flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75 animate-ping"></span>

              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
          </button>

          {/* User Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-3 bg-white border rounded-2xl px-3 py-2 hover:shadow-md transition"
            >
              <div className="w-11 h-11 rounded-full bg-gradient-to-r from-green-600 to-emerald-500 flex items-center justify-center text-white font-bold text-lg">
                {session?.name?.charAt(0).toUpperCase() || "A"}
              </div>

              <div className="hidden sm:block text-left">
                <h3 className="font-semibold text-gray-800 leading-none">
                  {session?.name || "Administrator"}
                </h3>

                <p className="text-xs text-gray-500 mt-1">
                  System Administrator
                </p>
              </div>

              <ChevronDown
                className={`hidden sm:block w-4 h-4 text-gray-500 transition-transform ${
                  open ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Dropdown */}
            {open && (
              <div className="absolute right-0 mt-3 w-64 rounded-2xl bg-white border shadow-xl overflow-hidden">
                <div className="p-5 border-b">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-600 to-emerald-500 flex items-center justify-center text-white font-bold text-lg">
                      {session?.name?.charAt(0).toUpperCase() || "A"}
                    </div>

                    <div>
                      <h2 className="font-semibold text-gray-800">
                        {session?.name || "Administrator"}
                      </h2>

                      <p className="text-sm text-gray-500">admin@company.com</p>
                    </div>
                  </div>
                </div>

                <button
                  className="w-full px-5 py-3 flex items-center gap-3 hover:bg-gray-50 transition"
                  onClick={() => {
                    setOpen(false);
                    router.push("/dashboard/profile");
                  }}
                >
                  <User size={18} />
                  Profile
                </button>

                <button
                  className="w-full px-5 py-3 flex items-center gap-3 hover:bg-gray-50 transition"
                  onClick={() => {
                    setOpen(false);
                    router.push("/dashboard/settings");
                  }}
                >
                  <Settings size={18} />
                  Settings
                </button>

                <div className="border-t"></div>

                <button
                  onClick={handleLogout}
                  className="w-full px-5 py-3 flex items-center gap-3 text-red-600 hover:bg-red-50 transition"
                >
                  <LogOut size={18} />
                  Logout
                </button>
              </div>
            )}
          </div>

          {/* Desktop Logout */}
          <button
            onClick={handleLogout}
            className="hidden lg:flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-5 py-2.5 rounded-xl transition shadow"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}
