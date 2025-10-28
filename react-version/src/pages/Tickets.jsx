// src/pages/TicketManagement.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTickets } from "../context/TicketContext";
import TicketCard from "../components/TicketCard";
import { toast } from "react-toastify";

export default function TicketManagement() {
  const navigate = useNavigate();
  const { tickets, createTicket, updateTicket, deleteTicket } = useTickets();
  const [editingTicket, setEditingTicket] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    status: "open",
    description: "",
    priority: "medium",
    assignee: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    const session = localStorage.getItem("ticketapp_session");
    if (!session) navigate("/auth/login");
  }, [navigate]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim()) {
      setError("Title is required");
      return;
    }
    if (!["open", "in_progress", "closed"].includes(formData.status)) {
      setError("Status must be open, in_progress, or closed");
      return;
    }
    setError("");
    if (editingTicket) {
      updateTicket(editingTicket.id, formData);
    } else {
      createTicket(formData);
    }
    closeForm();
  };

  const handleDelete = (id) => {
    if (!window.confirm("Are you sure you want to delete this ticket?")) return;
    deleteTicket(id);
  };

  const openEdit = (ticket) => {
    setEditingTicket(ticket);
    setFormData(ticket);
    setShowForm(true);
  };

  const openNew = () => {
    setEditingTicket(null);
    setFormData({
      title: "",
      status: "open",
      description: "",
      priority: "medium",
      assignee: "",
    });
    setShowForm(true);
  };

  const closeForm = () => {
    setEditingTicket(null);
    setFormData({
      title: "",
      status: "open",
      description: "",
      priority: "medium",
      assignee: "",
    });
    setError("");
    setShowForm(false);
  };

  return (
    <main className="min-h-screen flex flex-col bg-gray-50 dark:bg-slate-900">
      <section className="flex-1 px-6 py-12">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Tickets
            </h2>
            <button
              onClick={openNew}
              className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700"
            >
              New Ticket
            </button>
          </div>
          {/* Ticket List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tickets.length === 0 ? (
              <p className="text-gray-600 dark:text-gray-300">
                No tickets available
              </p>
            ) : (
              tickets.map((ticket) => (
                <div key={ticket.id}>
                  <TicketCard ticket={ticket} />
                  <div className="flex justify-end gap-3 mt-2">
                    <button
                      className="text-blue-600 dark:text-blue-400"
                      onClick={() => openEdit(ticket)}
                    >
                      Edit
                    </button>
                    <button
                      className="text-red-600 dark:text-red-400"
                      onClick={() => handleDelete(ticket.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Create / Edit Modal */}
      {showForm && (
        <div
          className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 px-4"
          aria-modal="true"
          role="dialog"
        >
          <form
            className="bg-white dark:bg-slate-800 max-w-md w-full rounded-lg p-6 shadow-xl"
            onSubmit={handleSubmit}
            aria-label={editingTicket ? "Edit Ticket form" : "New Ticket form"}
          >
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              {editingTicket ? "Edit Ticket" : "New Ticket"}
            </h3>

            {error && (
              <p className="text-red-600 mb-2" role="alert">
                {error}
              </p>
            )}

            <label
              className="block mb-2 font-medium text-gray-700 dark:text-gray-200"
              htmlFor="ticket-title"
            >
              Title *
            </label>
            <input
              id="ticket-title"
              name="title"
              className="w-full border rounded px-3 py-2 mb-4 dark:bg-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={formData.title}
              onChange={handleChange}
              required
              aria-required="true"
              aria-label="Ticket title"
              aria-describedby="ticket-title-desc"
            />
            <span id="ticket-title-desc" className="sr-only">
              Enter the ticket title
            </span>

            <label
              className="block mb-2 font-medium text-gray-700 dark:text-gray-200"
              htmlFor="ticket-status"
            >
              Status *
            </label>
            <select
              id="ticket-status"
              name="status"
              className="w-full border rounded px-3 py-2 mb-4 dark:bg-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={formData.status}
              onChange={handleChange}
              required
              aria-required="true"
              aria-label="Ticket status"
              aria-describedby="ticket-status-desc"
            >
              <option value="open">Open</option>
              <option value="in_progress">In Progress</option>
              <option value="closed">Closed</option>
            </select>
            <span id="ticket-status-desc" className="sr-only">
              Select the ticket status
            </span>

            <label
              className="block mb-2 font-medium text-gray-700 dark:text-gray-200"
              htmlFor="ticket-description"
            >
              Description
            </label>
            <textarea
              id="ticket-description"
              name="description"
              rows="3"
              className="w-full border rounded px-3 py-2 mb-4 dark:bg-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={formData.description}
              onChange={handleChange}
              aria-label="Ticket description"
              aria-describedby="ticket-description-desc"
            />
            <span id="ticket-description-desc" className="sr-only">
              Enter the ticket description
            </span>

            <label
              className="block mb-2 font-medium text-gray-700 dark:text-gray-200"
              htmlFor="ticket-priority"
            >
              Priority
            </label>
            <select
              id="ticket-priority"
              name="priority"
              className="w-full border rounded px-3 py-2 mb-4 dark:bg-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={formData.priority}
              onChange={handleChange}
              aria-label="Ticket priority"
              aria-describedby="ticket-priority-desc"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
            <span id="ticket-priority-desc" className="sr-only">
              Select the ticket priority
            </span>

            <label
              className="block mb-2 font-medium text-gray-700 dark:text-gray-200"
              htmlFor="ticket-assignee"
            >
              Assignee
            </label>
            <input
              id="ticket-assignee"
              name="assignee"
              className="w-full border rounded px-3 py-2 mb-4 dark:bg-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={formData.assignee}
              onChange={handleChange}
              aria-label="Ticket assignee"
              aria-describedby="ticket-assignee-desc"
            />
            <span id="ticket-assignee-desc" className="sr-only">
              Enter the assignee name
            </span>

            <div className="flex justify-end gap-3">
              <button
                type="button"
                className="px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-blue-400"
                onClick={closeForm}
                aria-label="Cancel"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                aria-label={editingTicket ? "Update ticket" : "Create ticket"}
              >
                {editingTicket ? "Update" : "Create"}
              </button>
            </div>
          </form>
        </div>
      )}
    </main>
  );
}
