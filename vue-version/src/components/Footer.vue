<template>
  <footer class="w-full bg-white border-t py-6 mt-12">
    <div class="max-w-[1440px] mx-auto px-4 text-center text-sm text-gray-600">
      © {{ year }} TixHub — Built with Vue
    </div>
  </footer>
</template>

<script setup>
import { ref } from "vue";
const year = new Date().getFullYear();
</script>
