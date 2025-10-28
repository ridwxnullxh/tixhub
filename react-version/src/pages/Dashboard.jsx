// src/pages/Dashboard.jsx
import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import { useTickets } from "../context/TicketContext";

export default function Dashboard() {
  const navigate = useNavigate();
  const { tickets } = useTickets();

  useEffect(() => {
    const session = localStorage.getItem("ticketapp_session");
    if (!session) {
      navigate("/auth/login");
    }
  }, [navigate]);

  const stats = {
    total: tickets.length,
    open: tickets.filter((t) => t.status === "open").length,
    in_progress: tickets.filter((t) => t.status === "in_progress").length,
    closed: tickets.filter((t) => t.status === "closed").length,
  };

  return (
    <main className="min-h-screen flex flex-col bg-gray-50 dark:bg-slate-900">
      <section className="flex-1 px-6 py-12">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="text-4xl font-bold mb-10 text-center text-gray-900 dark:text-white">
            Dashboard
          </h2>

          {/* Stats Cards */}
          <div
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6"
            aria-label="Ticket statistics"
          >
            <StatsCard label="Total Tickets" value={stats.total} icon="all" />
            <StatsCard
              label="Open"
              value={stats.open}
              status="open"
              icon="open"
            />
            <StatsCard
              label="In Progress"
              value={stats.in_progress}
              status="in_progress"
              icon="progress"
            />
            <StatsCard
              label="Closed"
              value={stats.closed}
              status="closed"
              icon="closed"
            />
          </div>

          {/* Link to Ticket Management */}
          <div className="mt-10">
            <Link
              to="/tickets"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Manage Tickets
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function StatsCard({ label, value, status, icon }) {
  const statusColors = {
    open: "bg-green-100 text-green-700 border-green-300 dark:bg-green-900 dark:text-green-300",
    in_progress:
      "bg-amber-100 text-amber-700 border-amber-300 dark:bg-amber-900 dark:text-amber-300",
    closed:
      "bg-gray-200 text-gray-700 border-gray-400 dark:bg-gray-800 dark:text-gray-300",
    default:
      "bg-blue-100 text-blue-700 border-blue-300 dark:bg-blue-900 dark:text-blue-300",
  };
  const icons = {
    all: (
      <svg
        className="w-8 h-8 mx-auto mb-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          strokeWidth="2"
          stroke="currentColor"
          fill="currentColor"
          className="text-blue-200 dark:text-blue-800"
        />
        <text
          x="12"
          y="16"
          textAnchor="middle"
          fontSize="10"
          fill="currentColor"
        >
          All
        </text>
      </svg>
    ),
    open: (
      <svg
        className="w-8 h-8 mx-auto mb-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-label="Open tickets"
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          strokeWidth="2"
          stroke="currentColor"
          fill="currentColor"
          className="text-green-200 dark:text-green-800"
        />
        <path d="M8 12l2 2 4-4" stroke="white" strokeWidth="2" fill="none" />
      </svg>
    ),
    progress: (
      <svg
        className="w-8 h-8 mx-auto mb-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-label="In progress tickets"
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          strokeWidth="2"
          stroke="currentColor"
          fill="currentColor"
          className="text-amber-200 dark:text-amber-800"
        />
        <path d="M12 6v6l4 2" stroke="white" strokeWidth="2" fill="none" />
      </svg>
    ),
    closed: (
      <svg
        className="w-8 h-8 mx-auto mb-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-label="Closed tickets"
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          strokeWidth="2"
          stroke="currentColor"
          fill="currentColor"
          className="text-gray-300 dark:text-gray-700"
        />
        <path
          d="M8 8l8 8M8 16l8-8"
          stroke="white"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    ),
  };
  return (
    <div
      className={`rounded-xl border p-6 text-center font-semibold shadow-sm focus-within:ring-2 focus-within:ring-blue-400 ${
        statusColors[status] || statusColors.default
      }`}
      tabIndex={0}
      aria-label={label + ": " + value}
    >
      {icons[icon]}
      <p className="text-lg">{label}</p>
      <p className="text-2xl font-bold mt-2">{value}</p>
    </div>
  );
}
