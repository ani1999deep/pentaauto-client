"use client";

import { useRouter } from "next/navigation";
import { Menu, Bell, LogOut } from "lucide-react";
import { logout, getSession } from "@/lib/auth";

export default function Navbar({ title, onMenuClick }) {
  const router = useRouter();
  const session = getSession();

  function handleLogout() {
    logout();
    router.push("/");
  }

  return (
    <header className="sticky top-0 z-20 h-16 bg-card border-b border-border flex items-center justify-between px-4 sm:px-6">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="lg:hidden text-text-secondary hover:text-text-primary"
          aria-label="Open sidebar"
        >
          <Menu className="w-5 h-5" />
        </button>
        <h1 className="text-base sm:text-lg font-semibold text-text-primary">{title}</h1>
      </div>

      <div className="flex items-center gap-4 sm:gap-5">
        <button
          className="relative text-text-secondary hover:text-text-primary transition-colors"
          aria-label="Notifications"
        >
          <Bell className="w-5 h-5" />
          <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-error" />
        </button>

        <div className="hidden sm:flex items-center gap-2.5 pl-4 border-l border-border">
          <div className="w-8 h-8 rounded-full bg-secondary/15 flex items-center justify-center text-secondary font-semibold text-sm">
            {session?.name?.[0] ?? "A"}
          </div>
          <span className="text-sm font-medium text-text-primary">{session?.name ?? "Admin"}</span>
        </div>

        <button
          onClick={handleLogout}
          className="flex items-center gap-1.5 text-sm font-medium text-text-secondary hover:text-error transition-colors"
        >
          <LogOut className="w-4 h-4" />
          <span className="hidden sm:inline">Logout</span>
        </button>
      </div>
    </header>
  );
}
