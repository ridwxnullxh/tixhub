// src/pages/Login.jsx
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("All fields are required.");
      return;
    }

    // Login using auth context - handles storage and navigation
    setTimeout(() => {
      login({ email });
    }, 500);
  };

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <section className="flex flex-1 justify-center items-center px-6 py-20 bg-blue-50">
        <div
          className="w-full max-w-md bg-white shadow-lg rounded-xl p-8"
          aria-labelledby="login-heading"
        >
          <h2
            id="login-heading"
            className="text-2xl font-bold text-gray-800 text-center mb-6"
          >
            Login to TixHub
          </h2>

          {error && (
            <p
              className="text-red-600 text-lg text-center mb-4"
              data-testid="test-login-error"
            >
              {error}
            </p>
          )}

          <form
            className="flex flex-col gap-4"
            onSubmit={handleLogin}
            aria-label="Login form"
          >
            {/* Email Field */}
            <label
              className="text-sm font-medium text-gray-700"
              htmlFor="login-email"
            >
              Email
            </label>
            <input
              type="email"
              id="login-email"
              data-testid="test-login-email"
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-required="true"
              aria-label="Email address"
              aria-describedby="login-email-desc"
            />
            <span id="login-email-desc" className="sr-only">
              Enter your email address
            </span>

            {/* Password Field */}
            <label
              className="text-sm font-medium text-gray-700"
              htmlFor="login-password"
            >
              Password
            </label>
            <input
              type="password"
              id="login-password"
              data-testid="test-login-password"
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="••••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              aria-required="true"
              aria-label="Password"
              aria-describedby="login-password-desc"
            />
            <span id="login-password-desc" className="sr-only">
              Enter your password
            </span>

            <button
              type="submit"
              data-testid="test-login-btn"
              className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-medium transition focus:outline-none focus:ring-2 focus:ring-blue-400"
              aria-label="Login"
            >
              Login
            </button>
          </form>

          {/* Other links */}
          <div className="text-center mt-4">
            <Link
              to="/auth/forgot-password"
              className="text-sm text-blue-600 hover:underline"
              data-testid="test-forgot-password"
            >
              Forgot Password?
            </Link>
          </div>

          <p className="text-center text-gray-600 text-sm mt-3">
            Don't have an account?{" "}
            <Link
              to="/auth/signup"
              data-testid="test-login-signup"
              className="text-blue-600 font-medium hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
