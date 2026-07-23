"use client";
import { useState, useEffect } from "react";
import { MapPin, User, Briefcase } from "lucide-react";
import Swal from "sweetalert2";

export default function AttendanceSection({ user }) {
  const [isMarking, setIsMarking] = useState(false);
  const [error, setError] = useState("");

  const [isFieldWork, setIsFieldWork] = useState(false);
  const [clientName, setClientName] = useState("");
  const [workDetails, setWorkDetails] = useState("");

  // Office Location
  const officeLocation = {
    lat: 22.5123,
    lng: 88.3982,
    name: "PENTA AUTOMATION Office",
    address:
      "2nd Floor, F-2A, 47A/108/3A, Purbachal Road, Kasba, Kolkata – 700078",
  };

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

  const showSuccessAlert = (title, message) => {
    Swal.fire({
      icon: "success",
      title: title,
      text: message,
      confirmButtonColor: "#16A34A",
      background: "#F8FAFC",
      backdrop: `
        rgba(0,0,0,0.6)
        backdrop-filter: blur(8px)
      `,
      showClass: { popup: "animate__animated animate__fadeInDown" },
      hideClass: { popup: "animate__animated animate__fadeOutUp" },
    });
  };

  const showErrorAlert = (title, message) => {
    Swal.fire({
      icon: "error",
      title: title,
      text: message,
      confirmButtonColor: "#DC2626",
      background: "#FEF2F2",
      backdrop: `
        rgba(0,0,0,0.6)
        backdrop-filter: blur(8px)
      `,
    });
  };

  const markAttendance = async () => {
    setIsMarking(true);
    setError("");

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

      const attendanceType = isFieldWork ? "Field Work" : "Office";

      // Validation
      if (!isFieldWork && distance > 100) {
        showErrorAlert(
          "Too Far from Office",
          `You are ${Math.round(distance)} meters away.\nYou must be within 100 meters for Office attendance.`,
        );
        return;
      }

      if (isFieldWork && !workDetails.trim()) {
        showErrorAlert(
          "Missing Information",
          "Please enter work details for Field Work.",
        );
        return;
      }

      const attendanceData = {
        employeeId: user.id,
        employeeName: user.name,
        department: "Engineering",
        date: now.toISOString().split("T")[0],
        checkInTime,
        latitude: userLocation.lat,
        longitude: userLocation.lng,
        address: isFieldWork
          ? "Field / Market Location"
          : officeLocation.address,
        attendanceType,
        status: "Present",
        distance: Math.round(distance),
        clientName: isFieldWork ? clientName.trim() : null,
        workDetails: isFieldWork ? workDetails.trim() : null,
      };

      localStorage.setItem("todayAttendance", JSON.stringify(attendanceData));

      // Show Success SweetAlert
      showSuccessAlert(
        isFieldWork
          ? "Field Work Attendance Marked! 🎉"
          : "Attendance Marked Successfully! 🎉",
        isFieldWork
          ? `Field work recorded successfully.\nDistance: ${Math.round(distance)} meters\nClient: ${clientName || "N/A"}`
          : `You are ${Math.round(distance)} meters from the office.`,
      );

      // Reset field work form
      if (isFieldWork) {
        setClientName("");
        setWorkDetails("");
        setIsFieldWork(false); // Optional: reset toggle after success
      }
    } catch (err) {
      showErrorAlert(
        "Location Error",
        "Unable to get your location. Please allow location access and try again.",
      );
    } finally {
      setIsMarking(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Mark Attendance Card */}
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
              ✅ You must be within 100 meters for Office attendance
            </p>
          </div>

          {/* Field Work Toggle */}
          <div className="mb-6 flex items-center gap-3 bg-[#F8FAFC] p-4 rounded-2xl">
            <input
              type="checkbox"
              id="fieldWork"
              checked={isFieldWork}
              onChange={(e) => setIsFieldWork(e.target.checked)}
              className="w-5 h-5 accent-[#16A34A] cursor-pointer"
            />
            <label
              htmlFor="fieldWork"
              className="flex items-center gap-2 cursor-pointer"
            >
              <Briefcase className="text-[#16A34A]" />
              <span className="font-medium text-[#14532D]">
                Market / Field Work
              </span>
            </label>
          </div>

          {/* Field Work Fields */}
          {isFieldWork && (
            <div className="space-y-4 mb-8">
              <div>
                <label className="block text-sm font-medium text-[#14532D] mb-1">
                  Client Name <span className="text-gray-400">(Optional)</span>
                </label>
                <input
                  type="text"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="Enter client name"
                  className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:border-[#16A34A]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#14532D] mb-1">
                  Work Details <span className="text-red-500">*</span>
                </label>
                <textarea
                  value={workDetails}
                  onChange={(e) => setWorkDetails(e.target.value)}
                  placeholder="Describe the work done / purpose of visit..."
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:border-[#16A34A] resize-y"
                />
              </div>
            </div>
          )}

          <button
            onClick={markAttendance}
            disabled={isMarking}
            className="w-full bg-[#16A34A] hover:bg-[#14532D] disabled:bg-gray-400 text-white py-5 rounded-2xl text-lg font-semibold transition-all flex items-center justify-center gap-3 shadow-lg"
          >
            {isMarking
              ? "Fetching Location..."
              : isFieldWork
                ? "Mark Field Work Attendance"
                : "Mark Office Attendance Now"}
          </button>
        </div>
      </div>

      {/* User Info */}
      <div className="lg:col-span-5 space-y-6">
        <div className="bg-white border border-[#DCFCE7] rounded-3xl p-8">
          <div className="flex items-center gap-6 mb-6">
            <div className="w-24 h-24 bg-[#16A34A] rounded-3xl flex items-center justify-center">
              <User size={52} className="text-white" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-[#14532D]">{user.name}</h3>
              <p className="text-[#16A34A]">{user.role}</p>
              <p className="text-[#6B7280]">ID: {user.id}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
