<template>
  <div class="main">
    <HeaderComponent />
    <router-view />
  </div>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent/HeaderComponent.vue'

export default {
  name: 'MainContainer',
  components: { HeaderComponent }
}
</script>

<style scoped>

</style>
