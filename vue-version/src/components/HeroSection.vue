<template>
  <section
    class="relative pt-32 pb-20 bg-gradient-to-br from-blue-50 to-white overflow-hidden"
  >
    <div
      class="absolute -left-16 -top-16 w-64 h-64 bg-indigo-200 rounded-full opacity-30 blur-3xl"
    ></div>
    <div class="max-w-[1200px] mx-auto px-6 text-center relative z-10">
      <h1 class="text-4xl sm:text-5xl font-extrabold text-gray-900">
        Manage Tickets Seamlessly with
        <span class="text-indigo-600">TixHub</span>
      </h1>
      <p class="mt-4 text-gray-600 max-w-2xl mx-auto">
        Create, assign, update and track tickets with ease. Stay in control and
        productive.
      </p>
      <div class="flex justify-center mt-8 gap-4">
        <router-link
          to="/auth/signup"
          class="px-6 py-3 rounded-lg text-white bg-indigo-600"
          >Get Started</router-link
        >
        <router-link
          to="/auth/login"
          class="px-6 py-3 rounded-lg border border-indigo-600 text-indigo-600"
          >Login</router-link
        >
      </div>
    </div>

    <svg
      class="absolute bottom-0 left-0 w-full"
      viewBox="0 0 1440 200"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="g1" x1="0%" x2="100%" y1="0%" y2="0%">
          <stop offset="0%" stop-color="#eef2ff" />
          <stop offset="100%" stop-color="#e0f2fe" />
        </linearGradient>
      </defs>
      <path
        d="M0,80 C200,160 400,0 720,60 C1040,120 1200,40 1440,100 L1440,200 L0,200 Z"
        fill="url(#g1)"
      />
    </svg>
  </section>
</template>
