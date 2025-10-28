<template>
  <article class="bg-white rounded-xl shadow p-6">
    <div class="flex justify-between items-start mb-3">
      <h4 class="text-lg font-semibold">{{ ticket.title }}</h4>
      <span
        :class="statusClass"
        class="text-xs px-3 py-1 rounded-full font-medium"
        >{{ statusLabel }}</span
      >
    </div>
    <p v-if="ticket.description" class="text-gray-700 mb-4">
      {{ ticket.description }}
    </p>
    <div class="flex justify-between items-center text-sm text-gray-500">
      <div class="flex items-center gap-2">
        <div
          class="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white"
        >
          {{ ticket.assignee ? ticket.assignee.charAt(0).toUpperCase() : "?" }}
        </div>
        <span>{{ ticket.assignee }}</span>
      </div>
      <div class="text-xs">
        {{
          ticket.created_at
            ? new Date(ticket.created_at).toLocaleDateString()
            : ""
        }}
      </div>
    </div>
  </article>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps({ ticket: Object });
const statusClass = computed(() => {
  if (!props.ticket) return "";
  const map = {
    open: "bg-green-100 text-green-700",
    in_progress: "bg-amber-100 text-amber-700",
    closed: "bg-gray-200 text-gray-600",
  };
  return map[props.ticket.status] || "bg-blue-100 text-blue-700";
});
const statusLabel = computed(() =>
  props.ticket.status ? props.ticket.status.replace("_", " ") : ""
);
</script>
