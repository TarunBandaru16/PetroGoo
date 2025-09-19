// src/pages/customer/History.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaClipboardList, FaTruck, FaCheckCircle, FaTimesCircle } from "react-icons/fa";

export default function History() {
  const navigate = useNavigate();

  // Sample order history data
  const [orders] = useState([
    {
      orderId: "#FX-2024-0892",
      fuelType: "Premium Gasoline - 50L",
      date: "2025-09-18",
      status: "Delivered",
    },
    {
      orderId: "#FX-2024-0825",
      fuelType: "Diesel - 40L",
      date: "2025-09-15",
      status: "Cancelled",
    },
    {
      orderId: "#FX-2024-0790",
      fuelType: "Petrol - 30L",
      date: "2025-09-10",
      status: "Delivered",
    },
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case "Delivered":
        return "bg-green-100 text-green-700";
      case "On the way":
        return "bg-blue-100 text-blue-700";
      case "Cancelled":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "Delivered":
        return <FaCheckCircle />;
      case "On the way":
        return <FaTruck />;
      case "Cancelled":
        return <FaTimesCircle />;
      default:
        return <FaClipboardList />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="p-6 max-w-7xl mx-auto space-y-4">
        <h1 className="text-2xl font-bold">Order History</h1>
        <p className="text-gray-600">Review all your past orders and their statuses.</p>

        {/* Orders Table / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {orders.map((order) => (
            <div
              key={order.orderId}
              className="bg-white p-5 rounded-lg shadow hover:shadow-md transition"
            >
              <div className="flex items-center mb-3 space-x-3">
                <div className={`p-2 rounded-full ${getStatusColor(order.status)}`}>
                  {getStatusIcon(order.status)}
                </div>
                <div>
                  <h3 className="font-semibold">{order.fuelType}</h3>
                  <p className="text-gray-500 text-sm">{order.date}</p>
                </div>
              </div>
              <div
                className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                  order.status
                )}`}
              >
                {order.status}
              </div>
              <button
                onClick={() => navigate("/track")}
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer"
              >
                Track Order
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
