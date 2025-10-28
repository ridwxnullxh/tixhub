<template>
  <main class="min-h-screen flex flex-col">
    <section
      class="flex flex-1 justify-center items-center px-6 py-20 bg-blue-50"
    >
      <div
        class="w-full max-w-md bg-white shadow-lg rounded-xl p-8"
        aria-labelledby="login-heading"
      >
        <h2
          id="login-heading"
          class="text-2xl font-bold text-gray-800 text-center mb-6"
        >
          Login to TixHub
        </h2>

        <form
          @submit.prevent="handleLogin"
          class="flex flex-col gap-4"
          aria-label="Login form"
        >
          <label for="email" class="text-sm font-medium text-gray-700"
            >Email</label
          >
          <input
            id="email"
            v-model="email"
            type="email"
            class="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
            aria-label="Email address"
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
            aria-label="Password"
          />

          <button
            type="submit"
            class="mt-4 w-full bg-blue-600 text-white py-2 rounded-md"
          >
            Login
          </button>
        </form>

        <p class="text-center text-gray-600 text-sm mt-3">
          Don't have an account?
          <router-link to="/auth/signup" class="text-blue-600"
            >Sign Up</router-link
          >
        </p>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const router = useRouter();

const handleLogin = () => {
  // simple simulated login
  if (!email.value || !password.value) return alert("All fields required");
  localStorage.setItem(
    "ticketapp_session",
    JSON.stringify({ email: email.value })
  );
  router.push({ name: "Dashboard" });
};
</script>
