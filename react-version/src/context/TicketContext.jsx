import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

const TicketContext = createContext();

const initialTickets = [
  {
    id: "TIX-001",
    title: "Sample ticket",
    description: "This is a sample ticket.",
    status: "open",
    priority: "medium",
    assignee: "Jane Doe",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];

export function TicketProvider({ children }) {
  const [tickets, setTickets] = useState(() => {
    const stored = localStorage.getItem("ticketapp_tickets");
    return stored ? JSON.parse(stored) : initialTickets;
  });

  // Persist tickets to localStorage
  const persist = (next) => {
    setTickets(next);
    localStorage.setItem("ticketapp_tickets", JSON.stringify(next));
  };

  // CRUD operations
  const createTicket = (data) => {
    // Validation
    if (
      !data.title ||
      !data.status ||
      !["open", "in_progress", "closed"].includes(data.status)
    ) {
      toast.error("Title and valid status are required.");
      return false;
    }
    const newTicket = {
      ...data,
      id: `TIX-${Date.now()}`,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
    persist([newTicket, ...tickets]);
    toast.success("Ticket created successfully!");
    return true;
  };

  const updateTicket = (id, updates) => {
    const idx = tickets.findIndex((t) => t.id === id);
    if (idx === -1) {
      toast.error("Ticket not found.");
      return false;
    }
    if (
      updates.status &&
      !["open", "in_progress", "closed"].includes(updates.status)
    ) {
      toast.error("Invalid status value.");
      return false;
    }
    const updated = {
      ...tickets[idx],
      ...updates,
      updated_at: new Date().toISOString(),
    };
    const next = [...tickets];
    next[idx] = updated;
    persist(next);
    toast.success("Ticket updated.");
    return true;
  };

  const deleteTicket = (id) => {
    const next = tickets.filter((t) => t.id !== id);
    persist(next);
    toast.success("Ticket deleted.");
  };

  return (
    <TicketContext.Provider
      value={{ tickets, createTicket, updateTicket, deleteTicket }}
    >
      {children}
    </TicketContext.Provider>
  );
}

export const useTickets = () => useContext(TicketContext);
