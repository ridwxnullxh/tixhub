<script setup>
// App root - router view and shared layout
import { onMounted } from "vue";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
onMounted(() => {
  // ensure body has background classes for Tailwind or custom CSS
  document.documentElement.classList.remove("no-js");
});
</script>

<template>
  <div>
    <Navbar />
    <main class="pt-20">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<style scoped>
.pt-20 {
  padding-top: 5rem;
}
</style>
