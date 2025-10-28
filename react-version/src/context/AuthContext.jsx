// src/context/AuthContext.jsx
import { createContext, useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  // Removed useNavigate to allow AuthProvider to be rendered outside Router
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const session = localStorage.getItem("ticketapp_session");
    setIsAuthenticated(!!session);
  }, []);

  const login = (userData) => {
    localStorage.setItem("ticketapp_session", JSON.stringify(userData));
    setIsAuthenticated(true);
    toast.info("Login Successful! Welcome to TixHub");
    Navigate("/dashboard");
  };

  const logout = () => {
    localStorage.removeItem("ticketapp_session");
    setIsAuthenticated(false);
    toast.info("You have been logged out");
    Navigate("/");
  };
  const signup = () => {
    toast.success("Account created successfully");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
