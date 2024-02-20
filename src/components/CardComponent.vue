<template>
  <div class="card">
    {{ name }}
  </div>
</template>

<script setup lang="ts">
defineProps({
  name
})
</script>

<style scoped>
.card {
  /* Styles de votre carte */
  padding: 10px;
  margin: 5px;
  border: 1px solid #eee;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  cursor: pointer;
}

.card:hover {
  /* Styles de votre carte au survol */
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    transform: translateY(-2px);
    background-color: #f9f9f9;
}
</style>