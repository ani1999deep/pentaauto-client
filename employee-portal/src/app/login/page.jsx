"use client";

import React, { useState } from "react";
import { Mail, Lock, Eye, EyeOff, LogIn, User } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const res = await fetch("/data/employees.json");
      const data = await res.json();

      const user = data.employees.find(
        (emp) => emp.email === email && emp.password === password,
      );

      if (user) {
        localStorage.setItem("currentUser", JSON.stringify(user));

        setTimeout(() => {
          router.push("/dashboard");
        }, 700);
      } else {
        throw new Error("Invalid Employee ID or Password");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#F8FAFC] via-[#ECFDF5] to-[#F0FDF4] flex items-center justify-center px-5 py-10">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-52 -left-52 h-[420px] w-[420px] rounded-full bg-green-500/10 blur-3xl" />
        <div className="absolute -bottom-52 -right-52 h-[420px] w-[420px] rounded-full bg-green-900/10 blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex flex-col items-center"
        >
          <div className="relative h-28 w-28 sm:h-32 sm:w-32 rounded-full overflow-hidden border-4 border-white shadow-2xl bg-white">
            <Image
              src="/pentaauto3.png"
              alt="Penta Automation"
              fill
              priority
              className="object-contain p-2"
            />
          </div>
        </motion.div>

        {/* Login Card */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-green-100 bg-white/95 backdrop-blur-xl shadow-2xl p-6 sm:p-10"
        >
          <div className="mb-8 text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#14532D]">
              Welcome Back
            </h1>

            <p className="mt-3 text-sm sm:text-base text-gray-500">
              Sign in to access your employee portal
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#14532D]">
                Employee Email
              </label>

              <div className="relative">
                <Mail
                  size={20}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-green-600"
                />

                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@pentaautomation.com"
                  className="w-full rounded-2xl border border-green-100 bg-gray-50 py-3.5 pl-12 pr-4 text-[15px] outline-none transition-all focus:border-green-600 focus:ring-4 focus:ring-green-600/10"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#14532D]">
                Password
              </label>

              <div className="relative">
                <Lock
                  size={20}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-green-600"
                />

                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full rounded-2xl border border-green-100 bg-gray-50 py-3.5 pl-12 pr-14 text-[15px] outline-none transition-all focus:border-green-600 focus:ring-4 focus:ring-green-600/10"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-green-700"
                >
                  {showPassword ? <EyeOff size={21} /> : <Eye size={21} />}
                </button>
              </div>
            </div>

            {/* Error */}
            {error && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="rounded-xl border border-red-200 bg-red-50 p-3 text-center text-sm text-red-600"
              >
                ⚠️ {error}
              </motion.div>
            )}

            {/* Login */}
            <button
              type="submit"
              disabled={isLoading}
              className="flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#16A34A] to-[#14532D] py-3.5 font-semibold text-white shadow-lg transition-all hover:scale-[1.01] active:scale-95 disabled:opacity-70"
            >
              {isLoading ? (
                <>
                  <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                  Signing In...
                </>
              ) : (
                <>
                  Sign In
                  <LogIn size={22} />
                </>
              )}
            </button>

            {/* Bottom */}
            <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500">
              <button
                type="button"
                onClick={() => alert("Forgot Password feature coming soon.")}
                className="hover:text-green-700 underline underline-offset-4"
              >
                Forgot Password?
              </button>

              <div className="flex items-center gap-1 text-green-700">
                <User size={16} />
                Support
              </div>
            </div>
          </form>
        </motion.div>

        {/* Footer */}
        <p className="mt-8 text-center text-xs text-gray-500">
          © 2026 Penta Automation. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}
