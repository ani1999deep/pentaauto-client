"use client";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import AttendanceSection from "./AttendanceSection";
import employeesData from "../../../../public/data/employees.json";

export default function AttendancePage() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const currentUserData = localStorage.getItem("currentUser");

    if (!currentUserData) {
      window.location.href = "/login";
      return;
    }

    try {
      const parsedUser = JSON.parse(currentUserData);
      setUser(parsedUser);
    } catch (error) {
      console.error("Invalid user data in localStorage");
      window.location.href = "/login";
    } finally {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC]">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-[#16A34A] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-[#14532D]">Loading Attendance...</p>
        </div>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col">
      {/* Navbar */}
      <Navbar user={user} />

      {/* Sidebar + Main Content */}
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />

        {/* Main Content Area */}
        <main className="flex-1 overflow-auto">
          <div className="p-4 md:p-6 lg:p-8 max-w-7xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-[#14532D]">
                Attendance Dashboard
              </h1>
              <p className="text-gray-600 mt-2">Mark your daily attendance</p>
            </div>

            {/* Attendance Component */}
            <AttendanceSection user={user} />
          </div>
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
