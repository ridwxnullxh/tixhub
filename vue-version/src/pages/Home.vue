<template>
  <main class="min-h-screen overflow-x-hidden">
    <HeroSection />

    <section class="max-w-[1440px] mx-auto px-6 py-12">
      <h2 class="text-2xl font-bold text-gray-800 text-center">
        Powerful features
      </h2>
      <p class="text-center text-gray-600 mt-2 max-w-2xl mx-auto">
        Everything your support team needs to stay productive and responsive.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div class="bg-white shadow-lg rounded-xl p-6">
          <h3 class="text-lg font-semibold">Quick Triage</h3>
          <p class="mt-2 text-sm text-gray-600">
            Label, prioritize and assign tickets instantly with one click.
          </p>
        </div>

        <div class="bg-white shadow-lg rounded-xl p-6">
          <h3 class="text-lg font-semibold">Collaboration</h3>
          <p class="mt-2 text-sm text-gray-600">
            Comment, mention teammates and keep everyone in the loop.
          </p>
        </div>

        <div class="bg-white shadow-lg rounded-xl p-6">
          <h3 class="text-lg font-semibold">Reporting</h3>
          <p class="mt-2 text-sm text-gray-600">
            Insights and metrics to help you improve response times and
            throughput.
          </p>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import HeroSection from "../components/HeroSection.vue";
</script>

<style scoped></style>
