const STATUS_STYLES = {
  Present: "bg-success/10 text-success",
  Absent: "bg-error/10 text-error",
  Late: "bg-warning/10 text-warning",
};

export default function RecentAttendance({ data }) {
  return (
    <div className="card p-5">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-semibold text-text-primary">Recent Attendance</h2>
        <a href="/attendance" className="text-sm font-medium text-secondary hover:underline">
          View all
        </a>
      </div>

      <div className="space-y-1">
        {data.map((row) => (
          <div
            key={row.id}
            className="flex items-center justify-between py-2.5 border-b border-border last:border-0"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center font-medium text-sm shrink-0">
                {row.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
              </div>
              <div className="min-w-0">
                <p className="text-sm font-medium text-text-primary truncate">{row.name}</p>
                <p className="text-xs text-text-secondary truncate">{row.role}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <span className="text-xs text-text-secondary hidden sm:inline">{row.time}</span>
              <span
                className={`text-xs font-medium px-2.5 py-1 rounded-full ${STATUS_STYLES[row.status]}`}
              >
                {row.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
