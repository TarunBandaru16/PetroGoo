// src/pages/customer/Profile.jsx
import { useState, useRef, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUser,
  FaLock,
  FaBell,
  FaSignOutAlt,
  FaCreditCard,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import { AuthContext } from "../../context/AuthContext";

export default function Profile() {
  const { user, updateUser, logout } = useContext(AuthContext);
  const [activeModal, setActiveModal] = useState(null);
  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  });
  const modalRef = useRef();
  const navigate = useNavigate();

  // Close modal on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setActiveModal(null);
      }
    }
    if (activeModal) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [activeModal]);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleProfileSave = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    updateUser({
      name: formData.get("name"),
      email: formData.get("email"),
    });
    setActiveModal(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-6">
          <img
            src="https://via.placeholder.com/100"
            alt="Profile"
            className="w-24 h-24 rounded-full border"
          />
          <div>
            <h2 className="text-2xl font-bold">{user?.name}</h2>
            <p className="text-gray-600">{user?.email}</p>
          </div>
        </div>

        {/* Settings List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { icon: <FaUser className="text-blue-600" />, label: "Edit Profile" },
            { icon: <FaLock className="text-green-600" />, label: "Change Password" },
            { icon: <FaBell className="text-orange-600" />, label: "Notifications" },
            { icon: <FaCreditCard className="text-purple-600" />, label: "Payment Methods" },
            { icon: <FaSignOutAlt className="text-red-600" />, label: "Logout" },
          ].map((item, idx) => (
            <div
              key={idx}
              onClick={() =>
                item.label === "Logout"
                  ? handleLogout()
                  : setActiveModal(item.label)
              }
              className="bg-white p-5 rounded-lg shadow hover:shadow-md flex items-center justify-between cursor-pointer transition"
            >
              <div className="flex items-center space-x-3">
                {item.icon}
                <span className="font-medium">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {activeModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50">
          <div
            ref={modalRef}
            className="bg-white w-11/12 md:w-7/12 lg:w-5/12 p-6 rounded-xl shadow-lg relative"
          >
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
            <h2 className="text-xl font-bold mb-4">{activeModal}</h2>

            {activeModal === "Change Password" && (
              <form className="space-y-4">
                {["Current Password", "New Password", "Confirm New Password"].map(
                  (label, i) => {
                    const field = ["current", "new", "confirm"][i];
                    return (
                      <div key={field} className="relative">
                        <input
                          type={showPassword[field] ? "text" : "password"}
                          placeholder={label}
                          className="w-full p-3 border rounded-lg pr-10"
                        />
                        <button
                          type="button"
                          onClick={() =>
                            setShowPassword((prev) => ({
                              ...prev,
                              [field]: !prev[field],
                            }))
                          }
                          className="absolute right-3 top-3 text-gray-500"
                        >
                          {/* Corrected icon logic */}
                          {showPassword[field] ? <FaEye /> : <FaEyeSlash />}
                        </button>
                      </div>
                    );
                  }
                )}
                <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                  Update Password
                </button>
              </form>
            )}

            {activeModal === "Notifications" && (
              <p className="text-gray-600">
                Here you can manage your notification preferences.
              </p>
            )}

            {activeModal === "Payment Methods" && (
              <p className="text-gray-600">
                Manage your saved cards and payment options here.
              </p>
            )}

            {activeModal === "Edit Profile" && (
              <form onSubmit={handleProfileSave} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className="w-full p-3 border rounded-lg"
                  defaultValue={user?.name}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full p-3 border rounded-lg"
                  defaultValue={user?.email}
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Save Changes
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
