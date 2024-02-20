<script setup lang="ts">
import CardComponent from '../components/CardComponent.vue'
import { data } from '../data.ts'

console.log(data)
const concours = data.initBDD.map((element) => {
  return element.title
})

</script>

<template>
  <div className="Home">
    <ul>
      <li
        v-for="(titre, index) in concours"
        :key="index"
      >
        <CardComponent :name="titre" />
      </li>
    </ul>
  </div>
</template>
