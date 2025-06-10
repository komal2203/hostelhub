import React, { createContext, useState, useEffect } from "react";

// Create context
export const AuthContext = createContext();

// Create provider component
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // For example, load user from localStorage or API on mount
  useEffect(() => {
    // Example: get user info from localStorage or decode JWT token
    const token = localStorage.getItem("token");
    if (token) {
      // decode token or fetch user info from backend here
      // For now, let's assume user info is stored in localStorage (example):
      const savedUser = JSON.parse(localStorage.getItem("user"));
      if (savedUser) setUser(savedUser);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}
