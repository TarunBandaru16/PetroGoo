// src/pages/customer/RequestFuel.jsx
import { useState } from "react";
import {
  FaGasPump,
  FaCreditCard,
  FaWallet,
  FaMobileAlt,
  FaStar,
  FaLock,
} from "react-icons/fa";

export default function RequestFuel() {
  const [fuelType, setFuelType] = useState("petrol");
  const [quantity, setQuantity] = useState(20);
  const [paymentMethod, setPaymentMethod] = useState("upi");
  const [useRewards, setUseRewards] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const prices = { petrol: 95.5, diesel: 88.2 };
  const rewardPoints = 450;

  const cost = (quantity * prices[fuelType]).toFixed(2);

  // Popup Content based on selected method
  const renderPopupContent = () => {
    switch (paymentMethod) {
      case "upi":
        return (
          <>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <FaMobileAlt className="text-blue-600" /> Pay with UPI
            </h3>
            <p className="text-gray-600 mb-4">
              Enter your UPI ID to complete the payment securely.
            </p>
            <input
              type="text"
              placeholder="example@upi"
              className="w-full border rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition">
              Pay ₹{cost}
            </button>
          </>
        );

      case "card":
        return (
          <>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <FaCreditCard className="text-blue-600" /> Pay with Card
            </h3>
            <p className="text-sm text-gray-500 flex items-center gap-2 mb-4">
              <FaLock className="text-green-600" /> Secure & Encrypted
            </p>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Cardholder Name"
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="1234 5678 9012 3456"
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="password"
                  placeholder="CVV"
                  className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <input
                type="text"
                placeholder="Billing ZIP"
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition">
              Pay ₹{cost}
            </button>
          </>
        );

      case "wallet":
        return (
          <>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <FaWallet className="text-blue-600" /> Pay with Wallet
            </h3>
            <p className="text-gray-600 mb-4">
              Choose your wallet provider to continue.
            </p>
            <select className="w-full border rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Paytm</option>
              <option>PhonePe</option>
              <option>Amazon Pay</option>
            </select>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition">
              Pay ₹{cost}
            </button>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white shadow-xl rounded-2xl p-8">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">
          Request Fuel Delivery
        </h2>

        {/* Fuel Type Selection */}
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Select Fuel Type</h3>
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => setFuelType("petrol")}
              className={`flex items-center justify-center gap-2 p-4 rounded-lg border transition ${
                fuelType === "petrol"
                  ? "border-blue-600 bg-blue-50 text-blue-600"
                  : "border-gray-300 text-gray-600 hover:border-blue-400"
              }`}
            >
              <FaGasPump className="text-lg" />
              <span>Petrol ₹95.50/L</span>
            </button>
            <button
              onClick={() => setFuelType("diesel")}
              className={`flex items-center justify-center gap-2 p-4 rounded-lg border transition ${
                fuelType === "diesel"
                  ? "border-blue-600 bg-blue-50 text-blue-600"
                  : "border-gray-300 text-gray-600 hover:border-blue-400"
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
              className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 transition"
            >
              -
            </button>
            <span className="text-xl font-medium">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 transition"
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
              className={`flex items-center gap-3 w-full p-3 rounded-lg border transition ${
                paymentMethod === "upi"
                  ? "border-blue-600 bg-blue-50 text-blue-600"
                  : "border-gray-300 text-gray-700 hover:border-blue-400"
              }`}
            >
              <FaMobileAlt />
              UPI Payment
            </button>
            <button
              onClick={() => setPaymentMethod("card")}
              className={`flex items-center gap-3 w-full p-3 rounded-lg border transition ${
                paymentMethod === "card"
                  ? "border-blue-600 bg-blue-50 text-blue-600"
                  : "border-gray-300 text-gray-700 hover:border-blue-400"
              }`}
            >
              <FaCreditCard />
              Credit/Debit Card
            </button>
            <button
              onClick={() => setPaymentMethod("wallet")}
              className={`flex items-center gap-3 w-full p-3 rounded-lg border transition ${
                paymentMethod === "wallet"
                  ? "border-blue-600 bg-blue-50 text-blue-600"
                  : "border-gray-300 text-gray-700 hover:border-blue-400"
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
        <button
          onClick={() => setShowPopup(true)}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
        >
          Pay & Request Fuel
        </button>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Background Overlay with Blur */}
          <div
            className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm"
            onClick={() => setShowPopup(false)}
          ></div>

          {/* Modal Box */}
          <div className="relative w-[70%] max-w-lg bg-white rounded-2xl shadow-2xl p-6 z-10">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            {renderPopupContent()}
          </div>
        </div>
      )}
    </div>
  );
}
