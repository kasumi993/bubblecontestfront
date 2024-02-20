<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div
    class="bg-gray-200 relative inline-block flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:shadow-outline"
    role="checkbox"
    tabindex="0"
  >
    {{ msg }}
  </div>
</template>

