"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    // Automatically redirect to login when app opens
    router.push("/login");
  }, [router]);

  // Optional: Show a small loading screen while redirecting
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-[#16A34A] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-[#14532D] font-medium">Redirecting to Login...</p>
      </div>
    </div>
  );
}
