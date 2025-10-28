<template>
  <nav class="w-full bg-white shadow py-3 fixed top-0 left-0 z-50">
    <div class="max-w-[1440px] mx-auto px-4 flex justify-between items-center">
      <router-link to="/" class="text-2xl font-bold text-blue-600"
        >TixHub</router-link
      >
      <div class="hidden md:flex gap-4 items-center">
        <router-link to="/tickets" class="text-gray-600 hover:text-blue-600"
          >Tickets</router-link
        >
        <router-link to="/dashboard" class="text-gray-600 hover:text-blue-600"
          >Dashboard</router-link
        >
        <router-link
          v-if="!isAuthenticated"
          to="/auth/login"
          class="text-gray-600 hover:text-blue-600"
          >Login</router-link
        >
        <button
          v-else
          @click="logout"
          class="bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
const isAuthenticated = ref(false);
const router = useRouter();

onMounted(() => {
  isAuthenticated.value = !!localStorage.getItem("ticketapp_session");
});

function logout() {
  localStorage.removeItem("ticketapp_session");
  router.push({ name: "Home" });
}
</script>
