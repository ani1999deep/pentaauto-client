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
  const [stats, setStats] = useState({
    totalEmployees: 120,
    presentToday: 103,
    onLeave: 5,
    absent: 12,
  });

  useEffect(() => {
    const currentUser = localStorage.getItem("currentUser");

    if (!currentUser) {
      window.location.href = "/login";
    } else {
      setUser(JSON.parse(currentUser));
    }

    // Simulate API fetch delay
    setTimeout(() => {
      setStats({
        totalEmployees: 120,
        presentToday: 103,
        onLeave: 5,
        absent: 12,
      });
      setLoading(false);
    }, 700);
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

  const recentAttendance = [
    {
      date: "2026-07-23",
      checkIn: "09:15 AM",
      status: "Present",
      type: "Office",
      gps: "28.6139° N, 77.2090° E",
      hours: "8h 30m",
    },
    {
      date: "2026-07-22",
      checkIn: "09:05 AM",
      status: "Present",
      type: "Office",
      gps: "28.6139° N, 77.2090° E",
      hours: "9h 10m",
    },
    {
      date: "2026-07-21",
      checkIn: "10:25 AM",
      status: "Late",
      type: "Market",
      gps: "28.7041° N, 77.1025° E",
      hours: "7h 45m",
    },
    {
      date: "2026-07-20",
      checkIn: "09:00 AM",
      status: "Field Work",
      type: "Market",
      gps: "28.5355° N, 77.3910° E",
      hours: "6h 20m",
    },
    {
      date: "2026-07-19",
      checkIn: "09:00 AM",
      status: "Present",
      type: "Office",
      gps: "28.6139° N, 77.2090° E",
      hours: "8h 55m",
    },
  ];

  const COLORS = ["#16A34A", "#DC2626", "#F59E0B", "#3B82F6", "#8B5CF6"];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC]">
        Loading Portal...
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      <Navbar user={user} />

      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 p-8 overflow-auto">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-10">
              <h1 className="text-4xl font-bold text-[#14532D]">
                Welcome back, {user.name.split(" ")[0]} 👋
              </h1>
              <p className="text-gray-600 mt-2">
                Here's what's happening today in your organization
              </p>
            </div>

            {/* Attendance History */}
            <div>
              <h2 className="text-3xl font-bold text-[#14532D] mb-8">
                Attendance History
              </h2>

              {/* Monthly Summary Cards */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
                {[
                  { label: "Total Working Days", value: 22 },
                  { label: "Days Present", value: 18, color: "text-green-600" },
                  { label: "Field Visits", value: 4, color: "text-blue-600" },
                  { label: "Late Entries", value: 2, color: "text-yellow-500" },
                  { label: "Absent Days", value: 1, color: "text-red-500" },
                  { label: "Attendance %", value: "91.8%" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-2xl shadow p-6 text-center"
                  >
                    <p className="text-gray-500 text-sm">{item.label}</p>
                    <p
                      className={`text-4xl font-bold mt-3 ${item.color || "text-[#14532D]"}`}
                    >
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Charts Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
                {/* Line Chart - Weekly Trend */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-xl font-semibold text-[#14532D] mb-6">
                    Weekly Attendance Trend
                  </h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={attendanceData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="day" />
                      <YAxis domain={[70, 100]} />
                      <Tooltip />
                      <Line
                        type="natural"
                        dataKey="attendance"
                        stroke="#14532D"
                        strokeWidth={3}
                        dot={{ fill: "#14532D", r: 5 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>

                {/* Pie Chart - Today's Status */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-xl font-semibold text-[#14532D] mb-6">
                    Today's Attendance
                  </h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={employeeData}
                        cx="50%"
                        cy="50%"
                        innerRadius={70}
                        outerRadius={110}
                        dataKey="value"
                      >
                        {employeeData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index]} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Recent Attendance Table */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="p-6 border-b">
                  <h3 className="text-xl font-semibold text-[#14532D]">
                    Recent Daily Attendance
                  </h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-50 border-b">
                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                          Date
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                          Check-in
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                          Status
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                          Type
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                          GPS
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                          Hours
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {recentAttendance.map((record, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-6 py-4 text-sm">{record.date}</td>
                          <td className="px-6 py-4 text-sm font-medium">
                            {record.checkIn}
                          </td>
                          <td className="px-6 py-4">
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-medium ${
                                record.status === "Present"
                                  ? "bg-green-100 text-green-700"
                                  : record.status === "Late"
                                    ? "bg-yellow-100 text-yellow-700"
                                    : record.status === "Field Work"
                                      ? "bg-blue-100 text-blue-700"
                                      : "bg-red-100 text-red-700"
                              }`}
                            >
                              {record.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm">{record.type}</td>
                          <td className="px-6 py-4 text-sm text-gray-600">
                            {record.gps}
                          </td>
                          <td className="px-6 py-4 text-sm font-medium">
                            {record.hours}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
