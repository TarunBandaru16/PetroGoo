// src/pages/customer/TrackOrder.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaGasPump,
  FaHome,
  FaMotorcycle,
  FaPhone,
  FaCommentDots,
  FaCheckCircle,
  FaClock,
  FaTruck,
  FaFlag,
  FaExclamationTriangle,
} from "react-icons/fa";

import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix for default marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const TrackOrder = () => {
  const navigate = useNavigate();

  const [order] = useState({
    id: "#FX2024091101",
    fuelType: "Petrol - 5 Liters",
    price: "$24.50",
    ordered: "15 mins ago",
    estimatedDelivery: "0 mins",
    deliveryPartner: {
      name: "Michael Johnson",
      rating: "4.8/5",
      vehicle: "Bike #1234",
    },
    address: {
      line1: "123 Oak Street, Downtown",
      line2: "New York, NY 10001",
    },
    details: {
      fuelType: "Premium Petrol",
      quantity: "5 Liters",
      unitPrice: "$4.90/L",
      totalAmount: "$24.50",
    },
  });

  const homePosition = [40.7128, -74.006];
  const bunkPosition = [40.73061, -73.935242];
  const route = [homePosition, bunkPosition];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow-md p-4 flex items-center justify-between">
        <button onClick={() => navigate("/dashboard")} className="text-xl text-gray-600">
          <FaArrowLeft />
        </button>
        <h1 className="font-bold text-lg">Track Your Order</h1>
        <div></div>
      </nav>

      <div className="p-6 max-w-7xl mx-auto space-y-6">
        {/* Order Info */}
        <div className="bg-white p-6 rounded shadow-md flex justify-between items-center">
          <div>
            <div className="text-sm text-gray-500">Order ID</div>
            <div className="font-bold">{order.id}</div>
            <div className="flex items-center space-x-2 mt-2">
              <FaGasPump className="text-blue-600" />
              <span className="font-medium">{order.fuelType}</span>
            </div>
            <div className="text-gray-700 mt-1">{order.price}</div>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-500">Ordered</div>
            <div className="text-gray-700">{order.ordered}</div>
            <div className="text-sm text-gray-500 mt-2">Estimated Delivery</div>
            <div className="text-green-600">{order.estimatedDelivery}</div>
          </div>
        </div>

        {/* Map and Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Map Section */}
          <div className="lg:col-span-2 bg-white rounded shadow-md overflow-hidden">
            <MapContainer
              center={homePosition}
              zoom={13}
              scrollWheelZoom={false}
              style={{ height: "100%", width: "100%", minHeight: "400px" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; OpenStreetMap contributors"
              />
              <Marker position={homePosition}>
                <Popup>Your Home</Popup>
              </Marker>
              <Marker position={bunkPosition}>
                <Popup>Fuel Bunk</Popup>
              </Marker>
              <Polyline positions={route} color="blue" />
            </MapContainer>
          </div>

          {/* Sidebar Section */}
          <div className="space-y-4">
            {/* Delivery Partner */}
            <div className="bg-white p-4 rounded shadow-md">
              <h3 className="font-semibold mb-2">Delivery Partner</h3>
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src="https://via.placeholder.com/60"
                  alt="Partner"
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <div className="font-bold">{order.deliveryPartner.name}</div>
                  <div className="flex items-center text-yellow-500 space-x-1">
                    ★★★★★ <span className="text-gray-600">{order.deliveryPartner.rating}</span>
                  </div>
                  <div className="text-gray-500 text-sm">{order.deliveryPartner.vehicle}</div>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="flex-1 bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
                  <FaPhone className="inline mr-2" /> Call
                </button>
                <button className="flex-1 border border-blue-600 text-blue-600 p-2 rounded hover:bg-blue-50">
                  <FaCommentDots className="inline mr-2" /> Chat
                </button>
              </div>
            </div>

            {/* Safety Reminder */}
            <div className="bg-yellow-50 border border-yellow-300 p-4 rounded shadow-sm flex items-center space-x-2">
              <FaExclamationTriangle className="text-yellow-500" />
              <div>
                <div className="font-semibold text-sm">Safety Reminder</div>
                <div className="text-sm text-gray-600">Verify QR code at delivery for secure handover.</div>
              </div>
            </div>

            {/* Delivery Address */}
            <div className="bg-white p-4 rounded shadow-md">
              <h3 className="font-semibold mb-2">Delivery Address</h3>
              <div className="flex items-start space-x-2">
                <FaHome className="text-blue-600 mt-1" />
                <div>
                  <div className="font-medium">Home</div>
                  <div className="text-gray-600 text-sm">{order.address.line1}</div>
                  <div className="text-gray-600 text-sm">{order.address.line2}</div>
                </div>
              </div>
            </div>

            {/* Order Details */}
            <div className="bg-white p-4 rounded shadow-md">
              <h3 className="font-semibold mb-2">Order Details</h3>
              <div className="text-sm text-gray-600 space-y-2">
                <div className="flex justify-between">
                  <span>Fuel Type</span>
                  <span className="font-medium">{order.details.fuelType}</span>
                </div>
                <div className="flex justify-between">
                  <span>Quantity</span>
                  <span className="font-medium">{order.details.quantity}</span>
                </div>
                <div className="flex justify-between">
                  <span>Unit Price</span>
                  <span className="font-medium">{order.details.unitPrice}</span>
                </div>
                <div className="flex justify-between pt-2 border-t">
                  <span>Total Amount</span>
                  <span className="font-bold text-blue-600">{order.details.totalAmount}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Order Progress */}
        <div className="bg-white p-4 rounded shadow-md">
          <h3 className="font-semibold mb-4">Order Progress</h3>
          <div className="relative flex items-center justify-between">
            {/* Connecting Line */}
            <div className="absolute top-6 left-12 right-12 h-1 bg-gray-300 z-0"></div>
            <div className="absolute top-6 left-12 right-12 h-1 bg-blue-600 z-0"></div>

            {/* Step 1 */}
            <div className="flex flex-col items-center text-blue-600 relative z-10 bg-white">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl">
                <FaCheckCircle />
              </div>
              <span className="text-sm mt-2">Requested</span>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-blue-600 relative z-10 bg-white">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl">
                <FaClock />
              </div>
              <span className="text-sm mt-2">Accepted</span>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-blue-600 relative z-10 bg-white">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl">
                <FaGasPump />
              </div>
              <span className="text-sm mt-2">Picked Up</span>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center text-blue-600 relative z-10 bg-white">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl">
                <FaTruck />
              </div>
              <span className="text-sm mt-2">On The Way</span>
            </div>

            {/* Step 5 */}
            <div className="flex flex-col items-center text-gray-400 relative z-10 bg-white">
              <div className="w-12 h-12 bg-gray-300 text-white rounded-full flex items-center justify-center text-xl">
                <FaFlag />
              </div>
              <span className="text-sm mt-2 text-gray-400">Delivered</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackOrder;
