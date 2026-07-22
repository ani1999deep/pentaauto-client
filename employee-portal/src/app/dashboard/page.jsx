"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  LogOut,
  User,
  MapPin,
  Clock,
  CheckCircle,
  AlertCircle,
  XCircle,
} from "lucide-react";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [attendanceStatus, setAttendanceStatus] = useState(null);
  const [isMarking, setIsMarking] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  // Office Location
  const officeLocation = {
    lat: 22.5123,
    lng: 88.3982,
    name: "PENTA AUTOMATION Office",
    address:
      "2nd Floor, F-2A, 47A/108/3A, Purbachal Road, Kasba, Kolkata – 700078",
  };

  useEffect(() => {
    const currentUser = localStorage.getItem("currentUser");
    if (!currentUser) {
      router.push("/login");
    } else {
      setUser(JSON.parse(currentUser));
    }
    setLoading(false);
  }, [router]);

  const getCurrentLocation = () => {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error("Geolocation not supported"));
        return;
      }
      navigator.geolocation.getCurrentPosition(
        (position) =>
          resolve({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          }),
        (err) => reject(err),
        { enableHighAccuracy: true, timeout: 10000 },
      );
    });
  };

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371e3;
    const φ1 = (lat1 * Math.PI) / 180;
    const φ2 = (lat2 * Math.PI) / 180;
    const Δφ = ((lat2 - lat1) * Math.PI) / 180;
    const Δλ = ((lon2 - lon1) * Math.PI) / 180;

    const a =
      Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
      Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  const markAttendance = async () => {
    setIsMarking(true);
    setError("");
    setAttendanceStatus(null);

    try {
      const userLocation = await getCurrentLocation();
      const distance = calculateDistance(
        userLocation.lat,
        userLocation.lng,
        officeLocation.lat,
        officeLocation.lng,
      );

      const now = new Date();
      const checkInTime = now.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
      });

      if (distance <= 100) {
        // ✅ Within Range - Mark Attendance
        const attendanceData = {
          employeeId: user.id,
          employeeName: user.name,
          department: "Engineering",
          date: now.toISOString().split("T")[0],
          checkInTime,
          latitude: userLocation.lat,
          longitude: userLocation.lng,
          address: officeLocation.address,
          attendanceType: "Office",
          status: "Present",
          distance: Math.round(distance),
        };

        localStorage.setItem("todayAttendance", JSON.stringify(attendanceData));

        setAttendanceStatus({
          success: true,
          title: "Attendance Marked Successfully! 🎉",
          message: `You are ${Math.round(distance)} meters from office.`,
          type: "success",
        });
      } else {
        // ❌ Outside Range
        setAttendanceStatus({
          success: false,
          title: "You are too far from the office",
          message: `You are ${Math.round(distance)} meters away.\nYou must be within 100 meters to mark attendance.`,
          type: "error",
        });
      }
    } catch (err) {
      setError(
        "Unable to get your location. Please allow location access and try again.",
      );
    } finally {
      setIsMarking(false);
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    router.push("/login");
  };

  if (loading)
    return (
      <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center">
        Loading Portal...
      </div>
    );
  if (!user) return null;

  return (
    <div className="min-h-screen bg-[#F8FAFC] p-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-[#14532D]">
              Employee Portal
            </h1>
            <p className="text-[#6B7280]">
              PENTA AUTOMATION • Attendance System
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-2xl transition"
          >
            <LogOut size={20} /> Logout
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Mark Attendance Section */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-[#DCFCE7] rounded-3xl shadow-xl p-8">
              <h2 className="text-2xl font-semibold text-[#14532D] mb-6 flex items-center gap-3">
                <MapPin className="text-[#16A34A]" /> Mark Today's Attendance
              </h2>

              <div className="bg-[#F8FAFC] p-6 rounded-2xl mb-8">
                <p className="font-medium text-[#14532D]">Office Location</p>
                <p className="text-[#6B7280] mt-2 leading-relaxed">
                  {officeLocation.name}
                  <br />
                  {officeLocation.address}
                </p>
                <p className="text-xs text-[#16A34A] mt-3">
                  ✅ You must be within 100 meters
                </p>
              </div>

              <button
                onClick={markAttendance}
                disabled={isMarking}
                className="w-full bg-[#16A34A] hover:bg-[#14532D] disabled:bg-gray-400 text-white py-5 rounded-2xl text-lg font-semibold transition-all flex items-center justify-center gap-3 shadow-lg"
              >
                {isMarking ? "Fetching Location..." : "Mark Attendance Now"}
              </button>

              {error && (
                <p className="text-red-600 mt-4 text-center font-medium">
                  {error}
                </p>
              )}
            </div>
          </div>

          {/* User Info + Status */}
          <div className="lg:col-span-5">
            <div className="bg-white border border-[#DCFCE7] rounded-3xl p-8">
              <div className="flex items-center gap-6 mb-6">
                <div className="w-24 h-24 bg-[#16A34A] rounded-3xl flex items-center justify-center">
                  <User size={52} className="text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-[#14532D]">
                    {user.name}
                  </h3>
                  <p className="text-[#16A34A]">{user.role}</p>
                  <p className="text-[#6B7280]">ID: {user.id}</p>
                </div>
              </div>
            </div>

            {/* Attendance Status Message */}
            {attendanceStatus && (
              <div
                className={`mt-6 p-6 rounded-3xl border ${attendanceStatus.success ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"}`}
              >
                <div className="flex gap-4">
                  {attendanceStatus.success ? (
                    <CheckCircle className="text-green-600 mt-1" size={32} />
                  ) : (
                    <XCircle className="text-red-600 mt-1" size={32} />
                  )}
                  <div>
                    <h3
                      className={`font-bold text-xl ${attendanceStatus.success ? "text-green-700" : "text-red-700"}`}
                    >
                      {attendanceStatus.title}
                    </h3>
                    <p className="mt-2 text-gray-600 whitespace-pre-line">
                      {attendanceStatus.message}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
