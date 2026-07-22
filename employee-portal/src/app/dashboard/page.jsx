"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  BarChart,
  Bar,
} from "recharts";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const currentUser = localStorage.getItem("currentUser");

    if (!currentUser) {
      window.location.href = "/login";
    } else {
      setUser(JSON.parse(currentUser));
    }

    setLoading(false);
  }, []);

  const attendanceData = [
    { day: "Mon", attendance: 86 },
    { day: "Tue", attendance: 91 },
    { day: "Wed", attendance: 88 },
    { day: "Thu", attendance: 95 },
    { day: "Fri", attendance: 92 },
    { day: "Sat", attendance: 85 },
    { day: "Sun", attendance: 80 },
  ];

  const employeeData = [
    { name: "Present", value: 86 },
    { name: "Absent", value: 9 },
    { name: "Leave", value: 5 },
  ];

  const departmentData = [
    { department: "HR", employees: 12 },
    { department: "IT", employees: 35 },
    { department: "Sales", employees: 18 },
    { department: "Accounts", employees: 10 },
    { department: "Support", employees: 16 },
  ];

  const COLORS = ["#16A34A", "#DC2626", "#F59E0B"];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC]">
        Loading Portal...
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar user={user} />

      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 p-8 overflow-auto bg-[#F8FAFC]">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-10">
              <h1 className="text-4xl font-bold text-[#14532D]">
                Welcome back, {user.name.split(" ")[0]} 👋
              </h1>

              <p className="text-gray-600 mt-2">
                Here's what's happening today
              </p>
            </div>

            {/* Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
              <div className="bg-white rounded-xl shadow p-6">
                <h3 className="text-gray-500 text-sm">Total Employees</h3>
                <h2 className="text-4xl font-bold text-[#14532D] mt-2">120</h2>
              </div>

              <div className="bg-white rounded-xl shadow p-6">
                <h3 className="text-gray-500 text-sm">Present Today</h3>
                <h2 className="text-4xl font-bold text-green-600 mt-2">103</h2>
              </div>

              <div className="bg-white rounded-xl shadow p-6">
                <h3 className="text-gray-500 text-sm">On Leave</h3>
                <h2 className="text-4xl font-bold text-yellow-500 mt-2">5</h2>
              </div>

              <div className="bg-white rounded-xl shadow p-6">
                <h3 className="text-gray-500 text-sm">Absent</h3>
                <h2 className="text-4xl font-bold text-red-500 mt-2">12</h2>
              </div>
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              {/* Line Chart */}
              <div className="bg-white rounded-xl shadow p-6">
                <h2 className="text-xl font-semibold text-[#14532D] mb-6">
                  Weekly Attendance
                </h2>

                <ResponsiveContainer width="100%" height={320}>
                  <LineChart data={attendanceData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />

                    <Line
                      type="monotone"
                      dataKey="attendance"
                      stroke="#16A34A"
                      strokeWidth={4}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Pie Chart */}
              <div className="bg-white rounded-xl shadow p-6">
                <h2 className="text-xl font-semibold text-[#14532D] mb-6">
                  Employee Status
                </h2>

                <ResponsiveContainer width="100%" height={320}>
                  <PieChart>
                    <Pie
                      data={employeeData}
                      dataKey="value"
                      nameKey="name"
                      outerRadius={110}
                      label
                    >
                      {employeeData.map((entry, index) => (
                        <Cell
                          key={index}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>

                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Bar Chart */}
            <div className="bg-white rounded-xl shadow p-6 mt-8">
              <h2 className="text-xl font-semibold text-[#14532D] mb-6">
                Employees by Department
              </h2>

              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={departmentData}>
                  <CartesianGrid strokeDasharray="3 3" />

                  <XAxis dataKey="department" />
                  <YAxis />

                  <Tooltip />

                  <Bar
                    dataKey="employees"
                    fill="#16A34A"
                    radius={[8, 8, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
