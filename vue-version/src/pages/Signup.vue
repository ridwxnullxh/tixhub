<template>
  <main class="min-h-screen flex flex-col">
    <section
      class="flex flex-1 justify-center items-center px-6 py-20 bg-blue-50"
    >
      <div class="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
        <h2 class="text-2xl font-bold text-gray-800 text-center mb-6">
          Create Your TixHub Account
        </h2>

        <form
          @submit.prevent="handleSubmit"
          class="flex flex-col gap-3"
          aria-label="Signup form"
        >
          <label for="name" class="text-sm font-medium text-gray-700"
            >Full Name</label
          >
          <input
            id="name"
            v-model="name"
            type="text"
            class="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <label for="email" class="text-sm font-medium text-gray-700"
            >Email</label
          >
          <input
            id="email"
            v-model="email"
            type="email"
            class="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <label for="password" class="text-sm font-medium text-gray-700"
            >Password</label
          >
          <input
            id="password"
            v-model="password"
            type="password"
            class="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <button
            type="submit"
            class="mt-4 w-full bg-blue-600 text-white py-2 rounded-md"
          >
            Sign Up
          </button>
        </form>

        <p class="text-center text-gray-600 text-sm mt-4">
          Already have an account?
          <router-link to="/auth/login" class="text-blue-600"
            >Login</router-link
          >
        </p>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const name = ref("");
const email = ref("");
const password = ref("");
const router = useRouter();

const handleSubmit = () => {
  if (!name.value || !email.value || !password.value)
    return alert("All fields required");
  localStorage.setItem(
    "ticketapp_session",
    JSON.stringify({ email: email.value })
  );
  router.push({ name: "Dashboard" });
};
</script>
