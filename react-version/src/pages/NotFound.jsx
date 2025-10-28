import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-50 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center px-6 py-24">
      <div className="text-center">
        {/* Decorative Elements */}
        <div className="relative">
          <div className="absolute -left-8 -top-8 w-64 h-64 bg-blue-200 rounded-full opacity-20 blur-3xl animate-pulse dark:bg-blue-500 dark:opacity-10"></div>
          <div className="absolute right-8 top-8 w-32 h-32 bg-indigo-200 rounded-full opacity-20 blur-2xl animate-pulse dark:bg-indigo-500 dark:opacity-10"></div>

          {/* Main Content */}
          <div className="relative">
            <h1 className="text-9xl font-bold text-gray-900 dark:text-white">
              4
              <span className="text-blue-600 dark:text-blue-400 inline-block animate-bounce">
                0
              </span>
              4
            </h1>

            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
              Oops! Page not found
            </p>

            <p className="mt-2 text-gray-500 dark:text-gray-400 max-w-sm mx-auto">
              The page you're looking for might have been moved, deleted, or
              never existed.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex gap-4 justify-center">
              <Link
                to="/"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Go Home
              </Link>
              <Link
                to="/tickets"
                className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 dark:hover:bg-slate-800 transition-colors duration-200"
              >
                View Tickets
              </Link>
            </div>
          </div>
        </div>

        {/* SVG Decoration */}
        <div className="mt-12 max-w-lg mx-auto">
          <svg
            className="w-full text-blue-600 dark:text-blue-400"
            viewBox="0 0 480 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 40C120 40 120 0 240 0C360 0 360 40 480 40H0Z"
              fill="currentColor"
              fillOpacity="0.1"
            />
            <path
              d="M0 40C120 40 120 80 240 80C360 80 360 40 480 40H0Z"
              fill="currentColor"
              fillOpacity="0.1"
            />
          </svg>
        </div>
      </div>
    </main>
  );
}
