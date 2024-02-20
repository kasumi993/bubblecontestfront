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
    <button @click="update()">
      updateBDD
    </button>
  </header>
</template>


<style lang="scss">
@import "styles/styles.scss";
</style>

<script lang="ts">
import PocketBase from 'pocketbase'
import initDatabase from '../init.json'
const pb = new PocketBase('http://127.0.0.1:8090')
pb.autoCancellation(false)

const updateBDD = async (element: NonNullable<object>) => {
  const record = await pb.collection('contest').create(element)
  console.log(record)
}

export default {
  methods: {
    update() {
      initDatabase.initBDD.forEach(async (element) => {
        await updateBDD(element)
      })
    }
  }
}

</script>