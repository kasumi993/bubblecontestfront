<template>
  <div>
    <div
        v-for="(item, index) in displayedItems"
        :key="index"
    >
      <button @click="chooseValue(item)">
        {{ item }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { data } from '../data.ts'
import { useRoute } from 'vue-router'

const route = useRoute()

function shuffleArray(array) {
  const tempArray = array
  for (let i = tempArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [ tempArray[i], tempArray[j] ] = [ tempArray[j], tempArray[i] ] // Échange les éléments
  }
  return tempArray
}

console.log(data)
let liste = []
for (let i = 0; i < data.initBDD.length; i++) {
  if (data.initBDD[i].title === route.params.name) {
    liste = shuffleArray(data.initBDD[i].elements)
  }
}
console.log(liste)
const selection = ref(liste)
const currentIndex = ref(0)
const choosenItems = ref([])
const displayedItems = computed(() => {
  return selection.value.slice(currentIndex.value, currentIndex.value + 2)
})


function showNextItems() {
  console.log('showNextItems', currentIndex.value, selection.value.length)
  if (currentIndex.value + 2 < selection.value.length) {
    currentIndex.value += 2
  } else {
    console.log('fini')
    selection.value = shuffleArray(choosenItems.value)
    console.log('selection', selection.value)
    choosenItems.value = []
    currentIndex.value = 0
  }
}

function chooseValue(item) {
  console.log('chooseValue', item)
  choosenItems.value.push(item)
  showNextItems()
  console.log('choosenItems', choosenItems.value)
}
</script>

