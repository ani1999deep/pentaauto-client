"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Lock, User } from "lucide-react";
import Image from "next/image";
import { login, isAuthenticated } from "@/lib/auth";

export default function LoginPage() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (isAuthenticated()) {
      router.replace("/dashboard");
    }
  }, [router]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    setTimeout(() => {
      const result = login(username.trim(), password);

      if (result.success) {
        router.push("/dashboard");
      } else {
        setError(result.error);
        setSubmitting(false);
      }
    }, 400);
  };

  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-100 via-white to-green-100 px-4">
      {/* Background Blur */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[450px] h-[450px] rounded-full bg-green-300/30 blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-[450px] h-[450px] rounded-full bg-emerald-300/20 blur-3xl"></div>
      </div>

      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <div className="relative">
            {/* White Circle */}
            <div className="w-32 h-32 rounded-full bg-white shadow-2xl border-[6px] border-white ring-4 ring-green-100 flex items-center justify-center">
              <Image
                src="/pentaauto3.png"
                alt="Penta Automation"
                width={85}
                height={85}
                priority
                className="object-contain"
              />
            </div>
          </div>

          <h1 className="mt-6 text-3xl font-bold tracking-tight text-gray-800">
            Penta Automation
          </h1>

          <p className="text-gray-500 mt-2">Admin Dashboard Login</p>
        </div>

        {/* Login Card */}

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl bg-white/90 backdrop-blur-lg shadow-2xl border border-white p-8"
        >
          {/* Username */}

          <div className="mb-5">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Username
            </label>

            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />

              <input
                type="text"
                placeholder="Enter Username"
                autoComplete="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full rounded-xl border border-gray-300 py-3 pl-12 pr-4 outline-none focus:border-green-600 focus:ring-4 focus:ring-green-100 transition"
                required
              />
            </div>
          </div>

          {/* Password */}

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Password
            </label>

            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-xl border border-gray-300 py-3 pl-12 pr-12 outline-none focus:border-green-600 focus:ring-4 focus:ring-green-100 transition"
                required
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-green-700"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Error */}

          {error && (
            <div className="mt-4 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-600">
              {error}
            </div>
          )}

          {/* Button */}

          <button
            type="submit"
            disabled={submitting}
            className="mt-8 w-full rounded-xl bg-gradient-to-r from-green-700 to-emerald-600 py-3 text-white font-semibold shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
          >
            {submitting ? "Signing In..." : "Sign In"}
          </button>
        </form>

        {/* Footer */}

        <p className="mt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Penta Automation
        </p>
      </div>
    </main>
  );
}
