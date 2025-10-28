import { ref } from "vue";

const stored = JSON.parse(localStorage.getItem("ticketapp_tickets") || "[]");
const tickets = ref(stored);

const persist = () => {
  localStorage.setItem("ticketapp_tickets", JSON.stringify(tickets.value));
};

export function useTickets() {
  const createTicket = (data) => {
    if (
      !data.title ||
      !["open", "in_progress", "closed"].includes(data.status)
    ) {
      return false;
    }
    const newT = {
      id: "TIX-" + Date.now(),
      ...data,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
    tickets.value.unshift(newT);
    persist();
    return true;
  };

  const updateTicket = (id, updates) => {
    const idx = tickets.value.findIndex((t) => t.id === id);
    if (idx === -1) return false;
    if (
      updates.status &&
      !["open", "in_progress", "closed"].includes(updates.status)
    )
      return false;
    tickets.value[idx] = {
      ...tickets.value[idx],
      ...updates,
      updated_at: new Date().toISOString(),
    };
    persist();
    return true;
  };

  const deleteTicket = (id) => {
    tickets.value = tickets.value.filter((t) => t.id !== id);
    persist();
  };

  return { tickets, createTicket, updateTicket, deleteTicket };
}
