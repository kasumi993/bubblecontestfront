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

<style scoped>
.Home{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
}
ul{
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
