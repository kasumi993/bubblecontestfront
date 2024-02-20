<template>
  <Header />
  <div class="main">
    <router-view />
  </div>
</template>

<script>
import Header from '@/components/Headers/Header.vue'

export default {
  name: 'MainContainer',
  components: { Header }
}
</script>

<style scoped>

</style>
