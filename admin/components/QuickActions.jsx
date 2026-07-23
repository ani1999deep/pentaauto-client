"use client";

import Link from "next/link";
import {
  UserPlus,
  ClipboardList,
  CalendarCheck,
  FileBarChart,
  Sheet,
  Settings,
} from "lucide-react";

const ICONS = {
  "add-employee": UserPlus,
  "assign-work": ClipboardList,
  attendance: CalendarCheck,
  reports: FileBarChart,
  "export-excel": Sheet,
  settings: Settings,
};

export default function QuickActions({ actions }) {
  return (
    <div className="card p-5">
      <h2 className="font-semibold text-text-primary mb-4">Quick Actions</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {actions.map((action) => {
          const Icon = ICONS[action.id] ?? Settings;
          return (
            <Link
              key={action.id}
              href={action.href}
              className="flex flex-col items-center justify-center gap-2 rounded-lg border border-border py-4 px-2 text-center hover:border-secondary hover:bg-secondary/5 transition-colors"
            >
              <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                <Icon className="w-[18px] h-[18px]" />
              </div>
              <span className="text-xs font-medium text-text-primary">{action.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
