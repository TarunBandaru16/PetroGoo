// src/pages/customer/History.jsx
import { useState } from "react";
import { FaCheckCircle, FaTimesCircle, FaTruck } from "react-icons/fa";

export default function History() {
  const [orders] = useState([
    {
      orderId: "#FX-2024-0892",
      fuelType: "Premium Gasoline - 50L",
      date: "2025-09-18",
      cost: "₹4,500",
      status: "Delivered",
      payment: "UPI",
      deliveryAddress: "123 Green Street, Hyderabad",
    },
    {
      orderId: "#FX-2024-0825",
      fuelType: "Diesel - 40L",
      date: "2025-09-15",
      cost: "₹3,200",
      status: "Cancelled",
      payment: "Card",
      deliveryAddress: "45 MG Road, Bengaluru",
    },
    {
      orderId: "#FX-2024-0790",
      fuelType: "Petrol - 30L",
      date: "2025-09-10",
      cost: "₹2,700",
      status: "Delivered",
      payment: "Cash on Delivery",
      deliveryAddress: "78 Lake View Colony, Chennai",
    },
    {
      orderId: "#FX-2024-0765",
      fuelType: "Premium Diesel - 60L",
      date: "2025-09-05",
      cost: "₹5,600",
      status: "On the way",
      payment: "UPI",
      deliveryAddress: "Plot 19, Cyber Park, Pune",
    },
  ]);

  const [selectedOrder, setSelectedOrder] = useState(null);

  const getStatusStyle = (status) => {
    switch (status) {
      case "Delivered":
        return "text-green-600";
      case "Cancelled":
        return "text-red-600";
      case "On the way":
        return "text-blue-600";
      default:
        return "text-gray-600";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "Delivered":
        return <FaCheckCircle className="inline mr-1" />;
      case "Cancelled":
        return <FaTimesCircle className="inline mr-1" />;
      case "On the way":
        return <FaTruck className="inline mr-1" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Order History</h1>

        <div className="space-y-4">
          {orders.map((order) => (
            <div
              key={order.orderId}
              className="bg-white p-5 rounded-lg shadow-sm border flex justify-between items-center"
            >
              <div>
                <h2 className="font-semibold text-lg">{order.fuelType}</h2>
                <p className="text-sm text-gray-500">{order.date}</p>
                <p className="text-xs text-gray-400">{order.orderId}</p>
                <p className="text-sm font-medium text-gray-700">Cost: {order.cost}</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className={`text-sm font-medium ${getStatusStyle(order.status)}`}>
                  {getStatusIcon(order.status)}
                  {order.status}
                </div>
                <button
                  onClick={() => setSelectedOrder(order)}
                  className="px-5 py-2 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition duration-200"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center backdrop-blur-sm z-50">
          <div className="bg-white w-11/12 md:w-3/4 lg:w-2/3 xl:w-2/3 rounded-lg shadow-lg p-6 relative">
            <button
              onClick={() => setSelectedOrder(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
            >
              &times;
            </button>

            <h2 className="text-xl font-bold mb-4">Order Details</h2>
            <div className="space-y-2 text-gray-700">
              <p><span className="font-medium">Order ID:</span> {selectedOrder.orderId}</p>
              <p><span className="font-medium">Fuel Type:</span> {selectedOrder.fuelType}</p>
              <p><span className="font-medium">Date:</span> {selectedOrder.date}</p>
              <p><span className="font-medium">Cost:</span> {selectedOrder.cost}</p>
              <p>
                <span className="font-medium">Status:</span>{" "}
                <span className={getStatusStyle(selectedOrder.status)}>
                  {selectedOrder.status}
                </span>
              </p>
              <p><span className="font-medium">Payment:</span> {selectedOrder.payment}</p>
              <p><span className="font-medium">Delivery Address:</span> {selectedOrder.deliveryAddress}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
