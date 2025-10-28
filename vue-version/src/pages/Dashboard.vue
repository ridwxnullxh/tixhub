<template>
  <main class="min-h-screen bg-gray-50">
    <section class="px-6 py-12">
      <div class="max-w-[1440px] mx-auto">
        <h2 class="text-4xl font-bold mb-8">Dashboard</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-white rounded-xl shadow p-6 text-center">
            <p class="text-lg">Total Tickets</p>
            <p class="text-2xl font-bold mt-2">{{ stats.total }}</p>
          </div>
          <div class="bg-white rounded-xl shadow p-6 text-center">
            <p class="text-lg">Open</p>
            <p class="text-2xl font-bold mt-2">{{ stats.open }}</p>
          </div>
          <div class="bg-white rounded-xl shadow p-6 text-center">
            <p class="text-lg">Resolved</p>
            <p class="text-2xl font-bold mt-2">{{ stats.closed }}</p>
          </div>
        </div>

        <div class="mt-8">
          <router-link
            to="/tickets"
            class="inline-block bg-blue-600 text-white px-6 py-3 rounded-md"
            >Manage Tickets</router-link
          >
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const session = localStorage.getItem("ticketapp_session");
if (!session) router.push({ name: "Login" });

const raw = JSON.parse(localStorage.getItem("ticketapp_tickets") || "[]");

const stats = computed(() => ({
  total: raw.length,
  open: raw.filter((t) => t.status === "open").length,
  in_progress: raw.filter((t) => t.status === "in_progress").length,
  closed: raw.filter((t) => t.status === "closed").length,
}));
</script>
