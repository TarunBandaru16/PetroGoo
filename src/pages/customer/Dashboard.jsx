// src/pages/customer/Dashboard.jsx
import { useState, useRef, useEffect } from "react";
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
  const dropdownRef = useRef();

  const handleProfileClick = () => {
    navigate("/profile");
    setDropdownOpen(false);
  };

  const handleLogoutClick = () => {
    navigate("/");
    setDropdownOpen(false);
  };

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownOpen]);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow-md px-6 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <FaGasPump className="text-blue-600 text-2xl" />
          <span className="font-bold text-xl">PetroGoo</span>
        </div>
        <div className="flex items-center space-x-4 relative" ref={dropdownRef}>
          <FaBell className="text-gray-600 text-xl cursor-pointer" />
          <div className="relative">
            <img
              src="https://via.placeholder.com/40"
              alt="Profile"
              className="w-10 h-10 rounded-full cursor-pointer border"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            />
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-50 border">
                <button
                  onClick={handleProfileClick}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  Profile Settings
                </button>
                <button
                  onClick={handleLogoutClick}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="p-6 space-y-6 max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold">Welcome back, Sarah Johnson 👋</h1>
        <p className="text-gray-600">Here’s your fuel status today.</p>

        {/* Action Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <FaGasPump className="text-blue-600 w-6 h-6" />,
              title: "Request Fuel",
              desc: "Quick fuel delivery to your location",
              btn: "Order Now",
              onClick: () => navigate("/request"),
              bg: "bg-blue-600 text-white hover:bg-blue-700",
            },
            {
              icon: <FaClipboardList className="text-gray-600 w-6 h-6" />,
              title: "View Orders",
              desc: "Check your order history and status",
              btn: "View History",
              onClick: () => navigate("/history"),
              bg: "bg-gray-200 text-gray-700 hover:bg-gray-300",
            },
            {
              icon: <FaGift className="text-green-600 w-6 h-6" />,
              title: "Reward Points",
              desc: `${rewardPoints.toLocaleString()} points • ${pointsToNext} to next reward`,
              btn: "View Rewards",
              onClick: () => navigate("/rewards"),
              bg: "bg-green-100 text-green-700 hover:bg-green-200",
            },
            {
              icon: <FaHeadset className="text-orange-600 w-6 h-6" />,
              title: "Support & Help",
              desc: "Get help with your orders",
              btn: "Contact Support",
              onClick: () => navigate("/support"),
              bg: "bg-orange-200 text-orange-800 hover:bg-orange-300",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="bg-white p-5 rounded-lg shadow hover:shadow-md transition flex flex-col justify-between"
            >
              <div className="bg-gray-100 p-2 rounded-full w-max mb-3">
                {card.icon}
              </div>
              <h3 className="font-semibold">{card.title}</h3>
              <p className="text-gray-500 text-sm mb-4">{card.desc}</p>
              <button
                onClick={card.onClick}
                className={`${card.bg} px-4 py-2 rounded cursor-pointer text-sm font-medium`}
              >
                {card.btn}
              </button>
            </div>
          ))}
        </div>

        {/* Current Order */}
        <div className="bg-white p-6 rounded-lg shadow space-y-6">
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
              <p className="text-gray-500 text-sm">Order {orderStatus.orderId}</p>
              <p className="text-green-600 text-sm">
                Estimated arrival: {orderStatus.estimatedArrival}
              </p>
            </div>
          </div>

          {/* Steps */}
          <div className="flex items-center justify-between mt-6 relative">
            {/* Line (centered) */}
            <div className="absolute top-4 left-0 w-full h-1 bg-gray-300 z-0"></div>

            <div className="flex flex-col items-center text-center z-10">
              <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center">
                <FaCheckCircle />
              </div>
              <span className="mt-2 text-sm font-medium">Requested</span>
              <span className="text-xs text-gray-400">
                {orderStatus.requestedAt}
              </span>
            </div>

            <div className="flex flex-col items-center text-center z-10">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center">
                <FaTruck />
              </div>
              <span className="mt-2 text-sm font-medium">On the way</span>
              <span className="text-xs text-gray-400">
                {orderStatus.onTheWayAt}
              </span>
            </div>

            <div className="flex flex-col items-center text-center z-10">
              <div className="w-8 h-8 bg-gray-300 text-white rounded-full flex items-center justify-center">
                <FaCircle />
              </div>
              <span className="mt-2 text-sm font-medium">Delivered</span>
              <span className="text-xs text-gray-400">
                {orderStatus.deliveredAt}
              </span>
            </div>
          </div>

          <div className="flex space-x-4 mt-6">
            <button
              onClick={() => navigate("/track")}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer"
            >
              Track Order
            </button>
            <button
              onClick={() => navigate("/support")}
              className="bg-gray-200 text-gray-600 px-4 py-2 rounded hover:bg-gray-300 cursor-pointer"
            >
              Contact Driver
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
