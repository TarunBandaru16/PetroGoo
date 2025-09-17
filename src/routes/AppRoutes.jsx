// src/routes/AppRoutes.jsx
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Landing from "../pages/Landing";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Dashboard from "../pages/customer/Dashboard";
import RequestFuel from "../pages/customer/RequestFuel"; // ✅ Corrected name

import { useAuth } from "../hooks/useAuth";

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
