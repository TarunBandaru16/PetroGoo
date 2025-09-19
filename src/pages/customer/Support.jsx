// src/pages/customer/Support.jsx
import {
  FaHeadset,
  FaEnvelope,
  FaPhoneAlt,
  FaQuestionCircle,
  FaTruck,
  FaCreditCard,
  FaGift,
} from "react-icons/fa";

export default function Support() {
  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-3xl font-bold mb-10">Support & Help</h1>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition text-center">
            <FaHeadset className="mx-auto text-blue-600 text-4xl mb-4" />
            <h3 className="font-semibold text-lg mb-2">Live Chat</h3>
            <p className="text-gray-500 text-sm mb-4">
              Connect with our support team instantly.
            </p>
            <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
              Start Chat
            </button>
          </div>

          <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition text-center">
            <FaPhoneAlt className="mx-auto text-green-600 text-4xl mb-4" />
            <h3 className="font-semibold text-lg mb-2">Call Us</h3>
            <p className="text-gray-500 text-sm mb-4">
              Available 24/7 at our customer care line.
            </p>
            <p className="font-bold text-gray-800 text-lg">+91 98765 43210</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition text-center">
            <FaEnvelope className="mx-auto text-orange-600 text-4xl mb-4" />
            <h3 className="font-semibold text-lg mb-2">Email Support</h3>
            <p className="text-gray-500 text-sm mb-4">
              Drop us an email and we’ll get back to you quickly.
            </p>
            <p className="font-bold text-gray-800 text-lg">
              support@petrogoo.com
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white p-8 rounded-xl shadow">
          <h2 className="text-2xl font-semibold mb-6 flex items-center">
            <FaQuestionCircle className="text-blue-600 mr-2" /> Frequently Asked
            Questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-800 flex items-center mb-1">
                <FaTruck className="text-blue-600 mr-2" /> How do I track my
                fuel order?
              </h3>
              <p className="text-gray-600 text-sm">
                Go to{" "}
                <span className="font-semibold">Dashboard → Track Order</span>{" "}
                to see real-time updates on your delivery.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 flex items-center mb-1">
                <FaCreditCard className="text-green-600 mr-2" /> What payment
                methods are accepted?
              </h3>
              <p className="text-gray-600 text-sm">
                We accept UPI, credit/debit cards, and major wallets for
                hassle-free payments.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 flex items-center mb-1">
                <FaGift className="text-pink-600 mr-2" /> How can I redeem my
                reward points?
              </h3>
              <p className="text-gray-600 text-sm">
                Visit the <span className="font-semibold">Rewards</span> section
                to check available offers and redeem points instantly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
