<template>
  <main class="min-h-screen bg-gray-50">
    <section class="px-6 py-12">
      <div class="max-w-[1440px] mx-auto">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-3xl font-bold">Tickets</h2>
          <button
            @click="openNew"
            class="bg-blue-600 text-white px-4 py-2 rounded"
          >
            New Ticket
          </button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div v-if="tickets.length === 0" class="text-gray-600">
            No tickets available
          </div>
          <div v-for="ticket in tickets" :key="ticket.id">
            <TicketCard :ticket="ticket" />
            <div class="flex justify-end gap-3 mt-2">
              <button @click="openEdit(ticket)" class="text-blue-600">
                Edit
              </button>
              <button @click="confirmDelete(ticket.id)" class="text-red-600">
                Delete
              </button>
            </div>
          </div>
        </div>

        <!-- Modal -->
        <div
          v-if="showForm"
          class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4"
        >
          <form
            @submit.prevent="handleSubmit"
            class="bg-white rounded-lg p-6 w-full max-w-md"
          >
            <h3 class="text-xl font-bold mb-4">
              {{ editingTicket ? "Edit Ticket" : "New Ticket" }}
            </h3>
            <div v-if="error" class="text-red-600 mb-2">{{ error }}</div>

            <label class="block mb-2">Title *</label>
            <input
              v-model="form.title"
              class="w-full border rounded px-3 py-2 mb-4"
              required
            />

            <label class="block mb-2">Status *</label>
            <select
              v-model="form.status"
              class="w-full border rounded px-3 py-2 mb-4"
            >
              <option value="open">Open</option>
              <option value="in_progress">In Progress</option>
              <option value="closed">Closed</option>
            </select>

            <label class="block mb-2">Description</label>
            <textarea
              v-model="form.description"
              rows="3"
              class="w-full border rounded px-3 py-2 mb-4"
            ></textarea>

            <div class="flex justify-end gap-3">
              <button
                type="button"
                @click="closeForm"
                class="px-4 py-2 border rounded"
              >
                Cancel
              </button>
              <button
                type="submit"
                class="bg-blue-600 text-white px-4 py-2 rounded"
              >
                {{ editingTicket ? "Update" : "Create" }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from "vue";
import TicketCard from "../components/TicketCard.vue";

const tickets = ref(
  JSON.parse(localStorage.getItem("ticketapp_tickets") || "[]")
);
const editingTicket = ref(null);
const showForm = ref(false);
const form = ref({ title: "", status: "open", description: "" });
const error = ref("");

function openNew() {
  editingTicket.value = null;
  form.value = { title: "", status: "open", description: "" };
  showForm.value = true;
}
function openEdit(t) {
  editingTicket.value = t;
  form.value = { ...t };
  showForm.value = true;
}
function closeForm() {
  showForm.value = false;
  editingTicket.value = null;
  error.value = "";
}
function handleSubmit() {
  if (!form.value.title.trim()) {
    error.value = "Title is required";
    return;
  }
  if (!["open", "in_progress", "closed"].includes(form.value.status)) {
    error.value = "Invalid status";
    return;
  }
  error.value = "";
  if (editingTicket.value) {
    const idx = tickets.value.findIndex((x) => x.id === editingTicket.value.id);
    tickets.value[idx] = {
      ...tickets.value[idx],
      ...form.value,
      updated_at: new Date().toISOString(),
    };
  } else {
    tickets.value.unshift({
      id: "TIX-" + Date.now(),
      ...form.value,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    });
  }
  localStorage.setItem("ticketapp_tickets", JSON.stringify(tickets.value));
  closeForm();
}
function confirmDelete(id) {
  if (!confirm("Are you sure you want to delete this ticket?")) return;
  tickets.value = tickets.value.filter((t) => t.id !== id);
  localStorage.setItem("ticketapp_tickets", JSON.stringify(tickets.value));
}
</script>
