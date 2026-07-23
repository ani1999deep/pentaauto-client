"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  CalendarCheck,
  ListTodo,
  UserCircle,
  X,
  ChevronRight,
} from "lucide-react";

const NAV_ITEMS = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Employees",
    href: "/employees",
    icon: Users,
  },
  {
    label: "Attendance",
    href: "/attendance",
    icon: CalendarCheck,
  },
  {
    label: "Work Distribution",
    href: "/work-distribution",
    icon: ListTodo,
  },
  {
    label: "Profile",
    href: "/profile",
    icon: UserCircle,
  },
];

export default function Sidebar({ open, onClose }) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Overlay */}
      {open && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-30 bg-black/40 backdrop-blur-sm lg:hidden"
        />
      )}

      <aside
        className={`fixed left-0 top-0 z-40 flex h-screen w-72 flex-col border-r border-white/10 bg-gradient-to-b from-[#0f5132] via-[#146c43] to-[#198754] text-white shadow-2xl transition-transform duration-300 lg:sticky lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}

        <div className="flex h-20 items-center justify-between border-b border-white/10 px-6">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-lg">
              <Image
                src="/pentaauto3.png"
                alt="Logo"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>

            <div>
              <h2 className="text-lg font-bold tracking-wide">
                Penta Automation
              </h2>

              <p className="text-xs text-green-100">Admin Dashboard</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="lg:hidden rounded-lg p-2 transition hover:bg-white/10"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}

        <nav className="flex-1 space-y-2 overflow-y-auto px-4 py-6">
          {NAV_ITEMS.map(({ label, href, icon: Icon }) => {
            const active = pathname === href;

            return (
              <Link
                key={href}
                href={href}
                onClick={onClose}
                className={`group flex items-center justify-between rounded-xl px-4 py-3 transition-all duration-300 ${
                  active
                    ? "bg-white text-[#146c43] shadow-lg"
                    : "text-green-100 hover:bg-white/10 hover:translate-x-1 hover:text-white"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon
                    className={`h-5 w-5 ${active ? "text-[#146c43]" : ""}`}
                  />

                  <span className="font-medium">{label}</span>
                </div>

                <ChevronRight
                  className={`h-4 w-4 transition ${
                    active ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Footer */}

        <div className="border-t border-white/10 p-6">
          <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-md">
            <h3 className="text-sm font-semibold">Penta Automation</h3>

            <p className="mt-1 text-xs text-green-100 leading-relaxed">
              Smart Industrial Automation Solutions
            </p>

            <div className="mt-4 h-px bg-white/20" />

            <p className="mt-3 text-xs text-green-200">Version 1.0.0</p>
          </div>
        </div>
      </aside>
    </>
  );
}
