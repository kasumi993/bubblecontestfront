<script setup lang="ts">
import SurveyService from '@/services/surveyService'
import { ref, onMounted } from 'vue'

import { useRoute } from 'vue-router'

const route = useRoute()
const listElements = ref([])

const getSurveyElements = async () => {
  if (!route.params.id) {
    console.error('ID parameter is missing from route')
    return
  }
  const response = await SurveyService.getSurveyElement(+route.params.id)   // Récupérer les éléments du concours
  listElements.value = response.options
}

onMounted(async () => {
  getSurveyElements()
})

</script>

<template>
  <div class="Case">
    <div
      v-for="(item, index) in listElements"
      :key="index"
      class="template"
    >
      {{ item.name }}
      <div class="w-full rounded-full bg-gray-700">
        <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" :style="{width: item.choices + 'px'}"> {{item.choices + 'px'}}</div>
      </div>
      <div class="progress-bar-container">
        <div
          class="progress-bar"
          :style="{ width: item.choices + 'px'}"
        />
        <div class="progress-bar-text">
          A été choisi {{ item.choices }} fois donc {{ item.choices / listElements.length * 100 }}%
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.template{
  margin: 20px 50px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 5px;
  background-color: #f2f2f2;
}

</style>
