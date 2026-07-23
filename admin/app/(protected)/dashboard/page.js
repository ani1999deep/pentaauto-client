"use client";

import {
  Users,
  UserCheck,
  UserX,
  Activity,
  CheckCircle2,
  Clock,
} from "lucide-react";
import StatCard from "@/components/StatCard";
import AttendanceChart from "@/components/AttendanceChart";
import RecentAttendance from "@/components/RecentAttendance";
import QuickActions from "@/components/QuickActions";
import {
  summaryStats,
  attendanceTrend,
  recentAttendance,
  quickActions,
} from "@/lib/mockData";
import { getSession } from "@/lib/auth";

export default function DashboardPage() {
  const session = getSession();

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-text-primary">
          Welcome {session?.name ?? "Admin"}
        </h2>
        <p className="text-sm text-text-secondary mt-1">
          Here&apos;s what&apos;s happening with your team today.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <StatCard
          label="Total Employees"
          value={summaryStats.totalEmployees}
          icon={Users}
          accent="primary"
        />
        <StatCard
          label="Present Today"
          value={summaryStats.presentToday}
          icon={UserCheck}
          accent="secondary"
        />
        <StatCard
          label="Absent"
          value={summaryStats.absent}
          icon={UserX}
          accent="error"
        />
        <StatCard
          label="Active Works"
          value={summaryStats.activeWorks}
          icon={Activity}
          accent="secondary"
        />
        <StatCard
          label="Completed Works"
          value={summaryStats.completedWorks}
          icon={CheckCircle2}
          accent="primary"
        />
        <StatCard
          label="Pending Works"
          value={summaryStats.pendingWorks}
          icon={Clock}
          accent="warning"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <AttendanceChart data={attendanceTrend} />
        </div>
        <div>
          <QuickActions actions={quickActions} />
        </div>
      </div>

      <RecentAttendance data={recentAttendance} />
    </div>
  );
}
