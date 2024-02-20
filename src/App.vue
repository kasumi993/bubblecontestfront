<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Home from "./components/Home.vue";
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    >

    <div class="wrapper">
      <Home msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/contest">Contest</RouterLink>
      </nav>
    </div>
  </header>
</template>

<style lang="scss">
@import "styles/styles.scss";
</style>
