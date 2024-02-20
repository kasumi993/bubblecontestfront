<template>
  <Header/>
  <div class="main">
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "@/components/Headers/Header.vue";

export default {
  name: "mainContainer",
  components: {Header}
}
</script>

<style scoped>

</style>
