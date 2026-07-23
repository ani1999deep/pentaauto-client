import { UserCircle } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="card p-8 text-center">
        <UserCircle className="w-10 h-10 text-primary mx-auto mb-3" />
        <h2 className="font-semibold text-text-primary mb-1.5">Profile &amp; Settings</h2>
        <p className="text-sm text-text-secondary">
          Admin profile details and settings will live here.
        </p>
      </div>
    </div>
  );
}
