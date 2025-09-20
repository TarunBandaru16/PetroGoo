// src/context/AuthContext.jsx
import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
  updateUser: () => {},
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Load user from localStorage (simple persistence)
  useEffect(() => {
    try {
      const raw = localStorage.getItem("petrogoo_user");
      if (raw) setUser(JSON.parse(raw));
    } catch (e) {
      console.error("Auth load error:", e);
    }
  }, []);

  const login = (userObj) => {
    setUser(userObj);
    localStorage.setItem("petrogoo_user", JSON.stringify(userObj));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("petrogoo_user");
  };

  const updateUser = (updates) => {
    const updated = { ...user, ...updates };
    setUser(updated);
    localStorage.setItem("petrogoo_user", JSON.stringify(updated));
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};
