<script setup lang="ts">
import { RouterLink } from 'vue-router'
import HomeComponent from './components/HomeComponent.vue'
</script>

<template>
  <router-view></router-view>
</template>


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

<style lang="scss">
@import "styles/styles.scss";
</style>
