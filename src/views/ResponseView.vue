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
  console.log('response', listElements) 
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
  margin: 10px 20px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 5px;
  background-color: #f2f2f2;
}

.progress-bar-container {
  margin: 5px 0;
  width: 100%;
  background-color: #eee;
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow: hidden;
}

.progress-bar {
  height: 20px; /* Hauteur de la barre de progression */
  background-color: #4caf50; /* Couleur de la barre de progression */
  text-align: center;
  line-height: 20px; /* Pour centrer le texte verticalement si nécessaire */
  color: white;
  transition: width 0.5s ease-in-out; /* Transition douce pour le changement de largeur */
}

.progress-bar-text {
  transform: translate(5px, -23px);
  position: absolute;
}
</style>