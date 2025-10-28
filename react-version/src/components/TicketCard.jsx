import { Link } from "react-router-dom";

const priorityColors = {
  low: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
  medium:
    "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
  high: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
};

const statusColors = {
  open: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  in_progress:
    "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
  resolved: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
  closed: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300",
};

export default function TicketCard({ ticket }) {
  const {
    id,
    title,
    description,
    priority = "medium",
    status = "open",
    assignee,
    created_at,
    updated_at,
  } = ticket;

  // Format date to relative time (e.g., "2 hours ago")
  const getRelativeTime = (date) => {
    const now = new Date();
    const past = new Date(date);
    const diffTime = Math.abs(now - past);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const diffHours = Math.floor(diffTime / (1000 * 60 * 60));
    const diffMinutes = Math.floor(diffTime / (1000 * 60));

    if (diffDays > 0) return `${diffDays}d ago`;
    if (diffHours > 0) return `${diffHours}h ago`;
    return `${diffMinutes}m ago`;
  };

  return (
    <Link
      to={`/tickets/${id}`}
      className="block bg-white dark:bg-slate-800 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden group border border-gray-100 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
      aria-label={`View details for ticket ${title}`}
    >
      <div className="p-6">
        {/* Header with Priority and Status */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex gap-2">
            <span
              className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${priorityColors[priority]}`}
              aria-label={`Priority: ${priority}`}
            >
              {priority.charAt(0).toUpperCase() + priority.slice(1)}
            </span>
            <span
              className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[status]}`}
              aria-label={`Status: ${status}`}
            >
              {status.replace("_", " ").charAt(0).toUpperCase() +
                status.replace("_", " ").slice(1)}
            </span>
          </div>
          <span
            className="text-xs text-gray-500 dark:text-gray-400"
            aria-label={`Ticket ID: ${id}`}
          >
            #{id}
          </span>
        </div>

        {/* Title and Description */}
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
          {title}
        </h3>
        <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm line-clamp-2">
          {description}
        </p>

        {/* Footer with Assignee and Timestamps */}
        <div className="mt-4 flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <div
              className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-xs font-medium"
              aria-label={`Assignee avatar for ${assignee}`}
            >
              {assignee?.charAt(0).toUpperCase()}
            </div>
            <span
              className="text-gray-600 dark:text-gray-400"
              aria-label={`Assignee: ${assignee}`}
            >
              {assignee}
            </span>
          </div>
          <div className="flex gap-4 text-xs text-gray-500 dark:text-gray-400">
            <span
              title={`Created: ${new Date(created_at).toLocaleString()}`}
              aria-label={`Created ${getRelativeTime(created_at)}`}
            >
              Created {getRelativeTime(created_at)}
            </span>
            {updated_at && (
              <span
                title={`Updated: ${new Date(updated_at).toLocaleString()}`}
                aria-label={`Updated ${getRelativeTime(updated_at)}`}
              >
                Updated {getRelativeTime(updated_at)}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Progress Bar for in_progress tickets */}
      {status === "in_progress" && (
        <div
          className="h-1 bg-gray-100 dark:bg-slate-700"
          aria-label="Progress bar"
        >
          <div className="h-1 bg-blue-600 dark:bg-blue-500 w-[45%]" />
        </div>
      )}
    </Link>
  );
}
