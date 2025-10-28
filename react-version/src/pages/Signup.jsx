// src/pages/Signup.jsx
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, password, confirmPassword } = form;

    if (!name || !email || !password || !confirmPassword) {
      return setError("All fields are required.");
    }
    if (password !== confirmPassword) {
      return setError("Passwords do not match.");
    }
    if (password.length < 6) {
      return setError("Password must be at least 6 characters.");
    }

    // ✅ For now, simulate account creation
    localStorage.setItem("ticketapp_session", "dummy_token");
    navigate("/dashboard");
  };

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <section className="flex flex-1 justify-center items-center px-6 py-20 bg-blue-50">
        <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
          <h2
            className="text-2xl font-bold text-gray-800 text-center mb-6"
            aria-labelledby="signup-heading"
          >
            Create Your TixHub Account
          </h2>

          {error && (
            <p
              className="text-red-600 text-sm text-center mb-4"
              data-testid="test-signup-error"
            >
              {error}
            </p>
          )}

          <form
            className="flex flex-col gap-3"
            onSubmit={handleSubmit}
            aria-label="Signup form"
          >
            {/* Full Name */}
            <label
              className="text-sm font-medium text-gray-700"
              htmlFor="signup-name"
            >
              Full Name
            </label>
            <input
              type="text"
              id="signup-name"
              name="name"
              data-testid="test-signup-name"
              value={form.name}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="John Doe"
              aria-required="true"
              aria-label="Full name"
              aria-describedby="signup-name-desc"
            />
            <span id="signup-name-desc" className="sr-only">
              Enter your full name
            </span>

            {/* Email */}
            <label
              className="text-sm font-medium text-gray-700"
              htmlFor="signup-email"
            >
              Email
            </label>
            <input
              type="email"
              id="signup-email"
              name="email"
              data-testid="test-signup-email"
              value={form.email}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="name@example.com"
              aria-required="true"
              aria-label="Email address"
              aria-describedby="signup-email-desc"
            />
            <span id="signup-email-desc" className="sr-only">
              Enter your email address
            </span>

            {/* Password */}
            <label
              className="text-sm font-medium text-gray-700"
              htmlFor="signup-password"
            >
              Password
            </label>
            <input
              type="password"
              id="signup-password"
              name="password"
              data-testid="test-signup-password"
              value={form.password}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="••••••••••"
              aria-required="true"
              aria-label="Password"
              aria-describedby="signup-password-desc"
            />
            <span id="signup-password-desc" className="sr-only">
              Enter your password
            </span>

            {/* Confirm Password */}
            <label
              className="text-sm font-medium text-gray-700"
              htmlFor="signup-confirm-password"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="signup-confirm-password"
              name="confirmPassword"
              data-testid="test-signup-confirm-password"
              value={form.confirmPassword}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="••••••••••"
              aria-required="true"
              aria-label="Confirm password"
              aria-describedby="signup-confirm-password-desc"
            />
            <span id="signup-confirm-password-desc" className="sr-only">
              Re-enter your password
            </span>

            <button
              type="submit"
              data-testid="test-signup-btn"
              className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-medium transition focus:outline-none focus:ring-2 focus:ring-blue-400"
              aria-label="Sign up"
            >
              Sign Up
            </button>
          </form>

          <p className="text-center text-gray-600 text-sm mt-4">
            Already have an account?{" "}
            <Link
              to="/auth/login"
              data-testid="test-signup-login"
              className="text-blue-600 hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
