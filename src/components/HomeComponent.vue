<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div
    class="bg-gray-200 underline"
    role="checkbox"
    tabindex="0"
  >
    {{ msg }}
  </div>
</template>

