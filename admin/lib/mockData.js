// lib/mockData.js
//
// Static mock data standing in for real API responses. Each export maps
// 1:1 to a future endpoint, so swapping to live data later means replacing
// the export with a fetch call in the component that uses it.

export const summaryStats = {
  totalEmployees: 52,
  presentToday: 48,
  absent: 4,
  activeWorks: 19,
  completedWorks: 241,
  pendingWorks: 8,
};

export const attendanceTrend = [
  { day: "Mon", present: 45, absent: 7 },
  { day: "Tue", present: 47, absent: 5 },
  { day: "Wed", present: 44, absent: 8 },
  { day: "Thu", present: 49, absent: 3 },
  { day: "Fri", present: 48, absent: 4 },
  { day: "Sat", present: 41, absent: 11 },
  { day: "Sun", present: 38, absent: 14 },
];

export const recentAttendance = [
  { id: 1, name: "Ritika Sharma", role: "UI Designer", time: "09:02 AM", status: "Present" },
  { id: 2, name: "Arjun Mehta", role: "Backend Engineer", time: "09:14 AM", status: "Present" },
  { id: 3, name: "Fatima Khan", role: "HR Executive", time: "—", status: "Absent" },
  { id: 4, name: "Sourav Das", role: "QA Engineer", time: "09:31 AM", status: "Late" },
  { id: 5, name: "Priya Nair", role: "Project Manager", time: "08:58 AM", status: "Present" },
  { id: 6, name: "Karan Verma", role: "DevOps Engineer", time: "—", status: "Absent" },
];

export const quickActions = [
  { id: "add-employee", label: "Add Employee", href: "/employees?action=add" },
  { id: "assign-work", label: "Assign Work", href: "/work-distribution?action=assign" },
  { id: "attendance", label: "Attendance", href: "/attendance" },
  { id: "reports", label: "Reports", href: "/attendance?view=reports" },
  { id: "export-excel", label: "Export Excel", href: "#export" },
  { id: "settings", label: "Settings", href: "/profile" },
];
