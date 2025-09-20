// src/routes/AppRoutes.jsx
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Landing from "../pages/Landing";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Dashboard from "../pages/customer/Dashboard";
import RequestFuel from "../pages/customer/RequestFuel";
import TrackOrder from "../pages/customer/TrackOrder";
import Rewards from "../pages/customer/Rewards";
import Support from "../pages/customer/Support";
import History from "../pages/customer/History"; 
import Profile from "../pages/customer/Profile"; // ✅ New Profile page

import { useAuth } from "../hooks/useAuth";

const Offers = () => <div className="p-6">Special Offers Page</div>;

export default function AppRoutes() {
  const authCtx = useAuth();
  const user = authCtx ? authCtx.user : null;
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Public */}
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

        {/* Protected */}
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
              path="/history"
              element={
                <PageWrapper>
                  <History />
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
            <Route
              path="/track"
              element={
                <PageWrapper>
                  <TrackOrder />
                </PageWrapper>
              }
            />
            <Route
              path="/profile"
              element={
                <PageWrapper>
                  <Profile /> {/* ✅ Profile page */}
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
