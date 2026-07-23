"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import AuthGuard from "@/components/AuthGuard";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TITLES = {
  "/dashboard": "Dashboard",
  "/employees": "Employees",
  "/attendance": "Attendance",
  "/work-distribution": "Work Distribution",
  "/profile": "Profile",
};

export default function ProtectedLayout({ children }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <AuthGuard>
      <div className="flex min-h-screen bg-bg">
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        <div className="flex-1 flex flex-col min-w-0">
          <Navbar title={TITLES[pathname] ?? "Dashboard"} onMenuClick={() => setSidebarOpen(true)} />
          <main className="flex-1 px-4 sm:px-6 py-6">{children}</main>
          <Footer />
        </div>
      </div>
    </AuthGuard>
  );
}
