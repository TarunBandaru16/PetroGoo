// src/pages/customer/Rewards.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaWallet,
  FaGasPump,
  FaMoneyBill,
  FaTicketAlt,
  FaUserFriends,
  FaCheck,
  FaTimes,
} from "react-icons/fa";

export default function Rewards() {
  const navigate = useNavigate();

  const rewardPoints = 1250;
  const nextReward = 1500;
  const pointsToNext = nextReward - rewardPoints;
  const progressPercent = Math.min(100, (rewardPoints / nextReward) * 100);

  const redeemItems = [
    { id: "fuel", title: "Free 1 Litre Fuel", points: 1500, icon: <FaGasPump className="text-blue-600 text-lg" /> },
    { id: "cashback", title: "₹100 Cashback", points: 2000, icon: <FaMoneyBill className="text-green-600 text-lg" /> },
    { id: "coupon", title: "Discount Voucher", points: 1000, icon: <FaTicketAlt className="text-yellow-600 text-lg" /> },
  ];

  const activities = [
    { id: 1, title: "Fuel Delivery Completed", time: "2 hours ago", points: +200 },
    { id: 2, title: "Referral Bonus", time: "1 day ago", points: +100 },
    { id: 3, title: "Redeemed Free Fuel", time: "3 days ago", points: -1500 },
    { id: 4, title: "Fuel Delivery Completed", time: "5 days ago", points: +200 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate(-1)}
              className="p-2 rounded-full hover:bg-gray-100"
              aria-label="Go back"
            >
              <FaArrowLeft />
            </button>
            <h1 className="text-base font-medium text-blue-600">Rewards & Wallet</h1>
          </div>

          <div className="relative">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <FaWallet className="text-blue-600" />
            </button>
            <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-yellow-400 rounded-full ring-2 ring-white" />
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-screen-xl mx-auto px-6 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* LEFT: Points + Invite */}
          <div className="space-y-6">
            {/* Points card */}
            <section className="relative rounded-xl overflow-hidden shadow-lg">
              <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-6 rounded-xl">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-sm opacity-90 mb-3">
                      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white/20">💰</span>
                      <span className="font-medium">Your Points</span>
                    </div>

                    <div className="text-3xl font-bold tracking-tight">
                      {rewardPoints.toLocaleString()}
                      <span className="text-sm font-normal ml-2">Points</span>
                    </div>

                    <p className="text-sm mt-3 opacity-90">Next reward at {nextReward} points</p>

                    <div className="mt-4">
                      <div className="h-2 bg-blue-800 rounded-full overflow-hidden">
                        <div className="h-2 bg-yellow-400 rounded-full transition-all" style={{ width: `${progressPercent}%` }} />
                      </div>

                      <div className="flex items-center justify-between text-xs mt-2 opacity-90">
                        <span>Keep earning to unlock rewards!</span>
                        <span>{pointsToNext} more</span>
                      </div>
                    </div>
                  </div>

                  <div className="hidden md:block ml-6 relative w-28 h-28">
                    <svg viewBox="0 0 80 80" className="absolute right-0 top-0 w-28 h-28 opacity-20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M40 4C40 4 60 20 60 38C60 56 46 72 40 76C34 72 20 56 20 38C20 20 40 4 40 4Z" fill="#fff" />
                    </svg>
                  </div>
                </div>
              </div>
            </section>

            {/* Invite friends */}
            <section className="rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-green-400 to-green-500 text-white p-5 rounded-xl">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/20">
                        <FaUserFriends />
                      </span>
                      <h3 className="text-lg font-semibold">Invite Friends</h3>
                    </div>
                    <p className="text-sm opacity-90">Earn 500 points for each successful referral!</p>
                    <button className="mt-4 bg-white text-green-600 font-semibold px-4 py-2 rounded-lg shadow-sm hover:opacity-95">
                      Share Now
                    </button>
                  </div>

                  <div className="hidden md:flex items-center">
                    <div className="w-16 h-16 rounded-full bg-white/10" />
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* RIGHT: Redeem + Activity */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Redeem Your Points</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {redeemItems.map((item) => {
                const available = rewardPoints >= item.points;
                return (
                  <article key={item.id} className="bg-white p-5 rounded-xl shadow flex flex-col justify-between">
                    <div>
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gray-100 mb-3">{item.icon}</div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-sm text-gray-500 mt-2">{item.points} points</p>
                    </div>

                    <div className="mt-4">
                      <button
                        disabled={!available}
                        className={`w-full py-2 rounded-lg font-medium transition ${
                          available ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-gray-100 text-gray-400 cursor-not-allowed"
                        }`}
                      >
                        {available ? "Redeem" : "Not Available"}
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>

            <section>
              <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
              <div className="bg-white rounded-xl shadow divide-y">
                {activities.map((a) => (
                  <div key={a.id} className="flex items-center justify-between p-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${a.points > 0 ? "bg-green-50" : "bg-red-50"}`}>
                        {a.points > 0 ? <FaCheck className="text-green-600" /> : <FaTimes className="text-red-600" />}
                      </div>

                      <div>
                        <div className="font-medium text-gray-800">{a.title}</div>
                        <div className="text-sm text-gray-500">{a.time}</div>
                      </div>
                    </div>

                    <div className="text-sm font-semibold">
                      <span className={a.points > 0 ? "text-green-600" : "text-red-600"}>
                        {a.points > 0 ? `+${a.points} pts` : `${a.points} pts`}
                      </span>
                    </div>
                  </div>
                ))}

                <div className="p-4 text-center">
                  <button className="text-sm text-blue-600 font-medium hover:underline">View All Transactions</button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
