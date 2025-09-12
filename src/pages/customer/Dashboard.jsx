// src/pages/customer/Dashboard.jsx
import React from "react";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Welcome, {user?.name || "User"}</h1>
        <p className="mb-6">Role: {user?.role}</p>

        <div className="flex gap-3">
          <button
            className="px-4 py-2 bg-red-500 text-white rounded"
            onClick={() => {
              logout();
              navigate("/");
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
