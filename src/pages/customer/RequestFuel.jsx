// src/pages/customer/RequestFuel.jsx
import { useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import {
  FaGasPump,
  FaCreditCard,
  FaWallet,
  FaMobileAlt,
  FaStar,
} from "react-icons/fa";

export default function RequestFuel() {
  const [fuelType, setFuelType] = useState("petrol");
  const [quantity, setQuantity] = useState(20);
  const [paymentMethod, setPaymentMethod] = useState("upi");
  const [useRewards, setUseRewards] = useState(false);

  const prices = { petrol: 95.5, diesel: 88.2 };
  const rewardPoints = 450;

  const cost = (quantity * prices[fuelType]).toFixed(2);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
      {/* Left: Map */}
      <div className="h-full">
        <MapContainer
          center={[17.385044, 78.486671]}
          zoom={13}
          className="h-full w-full"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
          />
        </MapContainer>
      </div>

      {/* Right: Order Form */}
      <div className="bg-white shadow-lg rounded-xl p-6 overflow-y-auto">
        <h2 className="text-2xl font-bold mb-6">Request Fuel Delivery</h2>

        {/* Fuel Type Selection */}
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Select Fuel Type</h3>
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => setFuelType("petrol")}
              className={`flex items-center justify-center gap-2 p-4 rounded-lg border ${
                fuelType === "petrol"
                  ? "border-blue-600 bg-blue-50 text-blue-600"
                  : "border-gray-300 text-gray-600"
              }`}
            >
              <FaGasPump className="text-lg" />
              <span>Petrol ₹95.50/L</span>
            </button>
            <button
              onClick={() => setFuelType("diesel")}
              className={`flex items-center justify-center gap-2 p-4 rounded-lg border ${
                fuelType === "diesel"
                  ? "border-blue-600 bg-blue-50 text-blue-600"
                  : "border-gray-300 text-gray-600"
              }`}
            >
              <FaGasPump className="text-lg" />
              <span>Diesel ₹88.20/L</span>
            </button>
          </div>
        </div>

        {/* Quantity */}
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Quantity (Liters)</h3>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300"
            >
              -
            </button>
            <span className="text-lg font-medium">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300"
            >
              +
            </button>
          </div>
        </div>

        {/* Estimated Cost */}
        <div className="bg-gray-100 p-4 rounded-lg mb-6">
          <p className="text-gray-700 font-medium">
            Estimated Cost:{" "}
            <span className="text-xl font-bold text-gray-900">₹{cost}</span>
          </p>
          <p className="text-green-600 text-sm mt-1">
            ● Delivery in ~15–20 minutes
          </p>
        </div>

        {/* Payment Method */}
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Payment Method</h3>
          <div className="space-y-3">
            <button
              onClick={() => setPaymentMethod("upi")}
              className={`flex items-center gap-3 w-full p-3 rounded-lg border ${
                paymentMethod === "upi"
                  ? "border-blue-600 bg-blue-50 text-blue-600"
                  : "border-gray-300 text-gray-700"
              }`}
            >
              <FaMobileAlt />
              UPI Payment
            </button>
            <button
              onClick={() => setPaymentMethod("card")}
              className={`flex items-center gap-3 w-full p-3 rounded-lg border ${
                paymentMethod === "card"
                  ? "border-blue-600 bg-blue-50 text-blue-600"
                  : "border-gray-300 text-gray-700"
              }`}
            >
              <FaCreditCard />
              Credit/Debit Card
            </button>
            <button
              onClick={() => setPaymentMethod("wallet")}
              className={`flex items-center gap-3 w-full p-3 rounded-lg border ${
                paymentMethod === "wallet"
                  ? "border-blue-600 bg-blue-50 text-blue-600"
                  : "border-gray-300 text-gray-700"
              }`}
            >
              <FaWallet />
              Digital Wallet
            </button>
          </div>
        </div>

        {/* Reward Points */}
        <div className="flex items-center justify-between bg-yellow-50 p-3 rounded-lg border border-yellow-200 mb-6">
          <div className="flex items-center gap-2">
            <FaStar className="text-yellow-500" />
            <span>Use Reward Points ({rewardPoints} available)</span>
          </div>
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={useRewards}
              onChange={() => setUseRewards(!useRewards)}
              className="form-checkbox h-5 w-5 text-yellow-500"
            />
          </label>
        </div>

        {/* Total */}
        <div className="bg-blue-50 p-4 rounded-lg mb-6">
          <p className="font-semibold text-lg">
            Total Amount:{" "}
            <span className="text-blue-600 font-bold">₹{cost}</span>
          </p>
          <p className="text-gray-500 text-sm">
            Delivery partner will scan QR for verification
          </p>
        </div>

        {/* Submit Button */}
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold">
          Pay & Request Fuel
        </button>
      </div>
    </div>
  );
}
