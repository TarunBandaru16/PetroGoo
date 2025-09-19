// src/pages/customer/Dashboard.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaGasPump,
  FaClipboardList,
  FaGift,
  FaHeadset,
  FaTruck,
  FaCheckCircle,
  FaCircle,
  FaBell,
} from "react-icons/fa";

export default function Dashboard() {
  const navigate = useNavigate();
  const [rewardPoints] = useState(1250);
  const [pointsToNext] = useState(250);
  const [orderStatus] = useState({
    fuelType: "Premium Gasoline - 50L",
    orderId: "#FX-2024-0892",
    estimatedArrival: "25 minutes",
    status: "On the way",
    requestedAt: "2:30 PM",
    onTheWayAt: "3:15 PM",
    deliveredAt: "3:55 PM",
  });
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow-md p-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <FaGasPump className="text-blue-600 text-2xl" />
          <span className="font-bold text-xl">PetroGoo</span>
        </div>
        <div className="flex items-center space-x-4 relative">
          <FaBell className="text-gray-600 text-xl cursor-pointer" />
          <div className="relative">
            <img
              src="https://via.placeholder.com/40"
              alt="Profile"
              className="w-10 h-10 rounded-full cursor-pointer"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            />
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2">
                <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Profile Settings
                </button>
                <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Billing
                </button>
                <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="p-6 space-y-6 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold">Welcome back, Sarah Johnson</h1>
        <p className="text-gray-600">Here's your fuel status today.</p>

        {/* Action Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Request Fuel Card */}
          <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
            <div className="bg-blue-100 p-2 rounded-full w-max mb-3">
              <FaGasPump className="text-blue-600 w-6 h-6" />
            </div>
            <h3 className="font-semibold">Request Fuel</h3>
            <p className="text-gray-500 text-sm mb-4">
              Quick fuel delivery to your location
            </p>
            <button
              onClick={() => navigate("/request")}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer"
            >
              Order Now
            </button>
          </div>

          {/* View Orders */}
          <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
            <div className="bg-gray-100 p-2 rounded-full w-max mb-3">
              <FaClipboardList className="text-gray-600 w-6 h-6" />
            </div>
            <h3 className="font-semibold">View Orders</h3>
            <p className="text-gray-500 text-sm mb-4">
              Check your order history and status
            </p>
            <button
              onClick={() => navigate("/orders")}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 cursor-pointer"
            >
              View History
            </button>
          </div>

          {/* Reward Points */}
          <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
            <div className="bg-green-100 p-2 rounded-full w-max mb-3">
              <FaGift className="text-green-600 w-6 h-6" />
            </div>
            <h3 className="font-semibold">Reward Points</h3>
            <p className="text-gray-500 text-sm mb-4">
              {rewardPoints.toLocaleString()} points
            </p>
            <p className="text-green-500 text-sm">
              {pointsToNext} points to next reward
            </p>
          </div>

          {/* Support */}
          <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
            <div className="bg-orange-100 p-2 rounded-full w-max mb-3">
              <FaHeadset className="text-orange-600 w-6 h-6" />
            </div>
            <h3 className="font-semibold">Support & Help</h3>
            <p className="text-gray-500 text-sm mb-4">
              Get help with your orders
            </p>
            <button
              onClick={() => navigate("/support")}
              className="bg-orange-200 text-orange-800 px-4 py-2 rounded hover:bg-orange-300 cursor-pointer"
            >
              Contact Support
            </button>
          </div>
        </div>

        {/* Main Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Current Order Status */}
          <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold text-lg">Current Order Status</h2>
              <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                In Progress
              </span>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <FaTruck className="text-blue-600 w-8 h-8" />
              </div>
              <div>
                <h3 className="font-semibold">{orderStatus.fuelType}</h3>
                <p className="text-gray-500 text-sm">
                  Order {orderStatus.orderId}
                </p>
                <p className="text-green-600 text-sm">
                  Estimated arrival: {orderStatus.estimatedArrival}
                </p>
              </div>
            </div>

            {/* Status Steps */}
            <div className="flex items-center justify-between mt-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center">
                  <FaCheckCircle />
                </div>
                <span className="mt-2 text-sm font-medium">Requested</span>
                <span className="text-xs text-gray-400">
                  {orderStatus.requestedAt}
                </span>
              </div>

              <div className="flex-1 h-1 bg-green-500 mx-2"></div>

              <div className="flex flex-col items-center text-center">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center">
                  <FaTruck />
                </div>
                <span className="mt-2 text-sm font-medium">On the way</span>
                <span className="text-xs text-gray-400">
                  {orderStatus.onTheWayAt}
                </span>
              </div>

              <div className="flex-1 h-1 bg-gray-300 mx-2"></div>

              <div className="flex flex-col items-center text-center">
                <div className="w-8 h-8 bg-gray-300 text-white rounded-full flex items-center justify-center">
                  <FaCircle />
                </div>
                <span className="mt-2 text-sm font-medium">Delivered</span>
                <span className="text-xs text-gray-400">
                  {orderStatus.deliveredAt}
                </span>
              </div>
            </div>

            {/* ✅ Updated buttons go to /track (TrackOrder page) */}
            <div className="flex space-x-4 mt-6">
              <button
                onClick={() => navigate("/track")}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer"
              >
                Track Order
              </button>
              <button
                onClick={() => navigate("/track")}
                className="bg-gray-200 text-gray-600 px-4 py-2 rounded hover:bg-gray-300 cursor-pointer"
              >
                Contact Driver
              </button>
            </div>
          </div>

          {/* Rewards + Special Offer */}
          <div className="space-y-6">
            <div className="bg-white p-4 rounded-lg shadow space-y-4">
              <h3 className="font-semibold">Reward Points</h3>
              <p className="text-2xl font-bold text-green-600">
                {rewardPoints.toLocaleString()}
              </p>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <div className="flex-1 bg-gray-200 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-green-500 h-2 rounded-full"
                    style={{
                      width: `${
                        (rewardPoints / (rewardPoints + pointsToNext)) * 100
                      }%`,
                    }}
                  ></div>
                </div>
                <span>{pointsToNext} points to go</span>
              </div>
              <button
                onClick={() => navigate("/rewards")}
                className="bg-green-100 text-green-700 px-4 py-2 rounded hover:bg-green-200 cursor-pointer"
              >
                View Rewards
              </button>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-green-500 text-white p-4 rounded-lg shadow space-y-3">
              <div className="flex items-center space-x-2">
                <span className="text-yellow-400 text-xl">★</span>
                <h3 className="font-semibold">Special Offer</h3>
              </div>
              <p>Earn 2x points on all orders this week! Limited time offer.</p>
              <button
                onClick={() => navigate("/offers")}
                className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100 cursor-pointer"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
