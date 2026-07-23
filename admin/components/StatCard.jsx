const ACCENTS = {
  primary: "bg-primary/10 text-primary",
  secondary: "bg-secondary/10 text-secondary",
  warning: "bg-warning/10 text-warning",
  error: "bg-error/10 text-error",
};

export default function StatCard({ label, value, icon: Icon, accent = "primary" }) {
  return (
    <div className="card p-5 flex items-center justify-between">
      <div>
        <p className="text-sm text-text-secondary">{label}</p>
        <p className="text-2xl font-semibold text-text-primary mt-1">{value}</p>
      </div>
      <div className={`w-11 h-11 rounded-lg flex items-center justify-center ${ACCENTS[accent]}`}>
        <Icon className="w-5 h-5" />
      </div>
    </div>
  );
}
