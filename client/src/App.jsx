// src/App.jsx
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import './index.css'; // or './App.css' if you're using that

import DarkTest from "./components/DarkTest";

import Login from "./components/Login";
import Register from "./components/Register";
import HomeLayout from "./components/HomeLayout";
import Mess from "./pages/Mess";
import LostAndFound from "./pages/LostAndFound";
import Polls from "./pages/Polls";
import HomePage from "./pages/HomePage";
import parseJWT from "./utils/parseJWT";
import { ToastProvider } from "./components/ToastContext";
import { AuthProvider } from './context/AuthContext';

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decoded = parseJWT(token);
      if (decoded && decoded.exp * 1000 > Date.now()) {
        setUser({ id: decoded.id });
      } else {
        localStorage.removeItem("token");
      }
    }
  }, []);

  const handleLogin = (token) => {
    localStorage.setItem("token", token);
    const decoded = parseJWT(token);
    setUser({ id: decoded.id });
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthProvider>
      <ToastProvider>
        <Router>
          <Routes>
            {!user ? (
              <>
                <Route path="/login" element={<Login onLogin={handleLogin} />} />
                <Route
                  path="/register"
                  element={<Register onRegister={handleLogin} />}
                />
                <Route path="*" element={<Navigate to="/login" />} />
              </>
            ) : (
              <>
                <Route
                  path="/home"
                  element={<HomeLayout onLogout={handleLogout} />}
                >
                  <Route index element={<HomePage />} />
                  {/* <Route index element={<Mess />} /> */}
                  <Route path="mess" element={<Mess />} />
                  <Route path="lost" element={<LostAndFound />} />
                  <Route path="polls" element={<Polls />} />
                </Route>
                <Route path="*" element={<Navigate to="/home" />} />
              </>
            )}
          </Routes>
        </Router>
      </ToastProvider>
    </AuthProvider>
  );
}
