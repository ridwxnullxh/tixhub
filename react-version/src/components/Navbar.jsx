import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const [theme, setTheme] = useState(() =>
    typeof window !== "undefined"
      ? localStorage.getItem("theme") || "light"
      : "light"
  );

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleToggleTheme = () =>
    setTheme((t) => (t === "dark" ? "light" : "dark"));

  const handleLogout = () => {
    logout(); // Auth context handles storage and navigation
  };

  return (
    <nav
      className="w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-transparent dark:border-slate-800 py-3 fixed top-0 left-0 z-50"
      role="navigation"
    >
      <div className="max-w-[1440px] mx-auto px-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold text-blue-600 dark:text-white"
          data-testid="test-navbar-logo"
        >
          TixHub
        </Link>

        <div className="hidden md:flex gap-4 items-center">
          <button
            onClick={handleToggleTheme}
            aria-label="Toggle dark mode"
            className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            data-testid="test-theme-toggle"
          >
            {theme === "dark" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-yellow-300"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 2a.75.75 0 01.75.75V4a.75.75 0 01-1.5 0V2.75A.75.75 0 0110 2zM10 16a.75.75 0 01.75.75V18a.75.75 0 01-1.5 0v-1.25A.75.75 0 0110 16zM4.22 4.22a.75.75 0 011.06 0l.88.88a.75.75 0 11-1.06 1.06l-.88-.88a.75.75 0 010-1.06zM14.84 14.84a.75.75 0 011.06 0l.88.88a.75.75 0 11-1.06 1.06l-.88-.88a.75.75 0 010-1.06zM2 10a.75.75 0 01.75-.75H4a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm12 0a.75.75 0 01.75-.75H16a.75.75 0 010 1.5h-1.25A.75.75 0 0114 10zM4.22 15.78a.75.75 0 010-1.06l.88-.88a.75.75 0 011.06 1.06l-.88.88a.75.75 0 01-1.06 0zM14.84 5.16a.75.75 0 010-1.06l.88-.88a.75.75 0 011.06 1.06l-.88.88a.75.75 0 01-1.06 0zM10 6.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-slate-700"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M17.293 13.293a8 8 0 11-10.586-10.586 8 8 0 0010.586 10.586z" />
              </svg>
            )}
          </button>

          {isAuthenticated ? (
            <>
              <Link
                to="/dashboard"
                className="text-gray-700 dark:text-gray-100 hover:text-blue-600"
              >
                Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/auth/login"
                className="text-gray-600 hover:text-blue-600"
                data-testid="test-navbar-login"
              >
                Login
              </Link>
              <Link
                to="/auth/signup"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                data-testid="test-navbar-register"
              >
                Get Started
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
