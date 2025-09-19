// src/routes/AppRoutes.jsx
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Landing from "../pages/Landing";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Dashboard from "../pages/customer/Dashboard";
import RequestFuel from "../pages/customer/RequestFuel";
import TrackOrder from "../pages/customer/TrackOrder"; // ✅ new import

import { useAuth } from "../hooks/useAuth";

// 🔹 Temporary placeholder pages
const Orders = () => <div className="p-6">Order History Page</div>;
const Support = () => <div className="p-6">Support Page</div>;
const Rewards = () => <div className="p-6">Rewards Page</div>;
const Offers = () => <div className="p-6">Special Offers Page</div>;

export default function AppRoutes() {
  const authCtx = useAuth();
  const user = authCtx ? authCtx.user : null;
  const location = useLocation();

  console.log("User:", user);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Public Routes */}
        <Route path="/" element={<Landing />} />
        <Route
          path="/login"
          element={
            <PageWrapper>
              <Login />
            </PageWrapper>
          }
        />
        <Route
          path="/register"
          element={
            <PageWrapper>
              <Register />
            </PageWrapper>
          }
        />

        {/* Protected Routes for Customer */}
        {user?.role === "customer" && (
          <>
            <Route
              path="/dashboard"
              element={
                <PageWrapper>
                  <Dashboard />
                </PageWrapper>
              }
            />
            <Route
              path="/request"
              element={
                <PageWrapper>
                  <RequestFuel />
                </PageWrapper>
              }
            />
            <Route
              path="/orders"
              element={
                <PageWrapper>
                  <Orders />
                </PageWrapper>
              }
            />
            <Route
              path="/support"
              element={
                <PageWrapper>
                  <Support />
                </PageWrapper>
              }
            />
            <Route
              path="/rewards"
              element={
                <PageWrapper>
                  <Rewards />
                </PageWrapper>
              }
            />
            <Route
              path="/offers"
              element={
                <PageWrapper>
                  <Offers />
                </PageWrapper>
              }
            />
            {/* ✅ Track Order page */}
            <Route
              path="/track"
              element={
                <PageWrapper>
                  <TrackOrder />
                </PageWrapper>
              }
            />
          </>
        )}

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
}

function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -100, opacity: 0 }}
      transition={{ duration: 0.15, ease: "easeInOut" }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}
