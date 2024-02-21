<template>
  <div
    class="contest"
  >
    <div
      class="title"
    >
      <h1>
        Tour : {{ currentIndex / 2 }} sur {{ selection.length / 2 }}
      </h1>
    </div>
    <div
      class="divide"
    >
      <div
        v-for="(item, index) in displayedItems"
        :key="index"
        class="template"
      >
        <button
          :class="{'red-border': index === 0, 'blue-border': index === 1}"
          @click="chooseValue(item)"
        >
          {{ item.name }}
        </button>
      </div>
      <div
        class="versus"
      >
        Versus
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import SurveyService from '@/services/surveyService'

const route = useRoute()
const router = useRouter()

const selection = ref([])               // Liste des éléments à montrer dans le tour
const currentIndex = ref(0)             // Index de l'élément actuel à afficher
const choosenItems = ref([])            // Liste des éléments choisis
const returnSelectionItems = ref([])    // Liste des éléments choisis avec le nombre de fois qu'ils ont été choisis
const displayedItems = computed(() => {
  return selection.value.slice(currentIndex.value, currentIndex.value + 2)
})

const getSurveyElements = async () => {
  if (!route.params.id) {
    console.error('ID parameter is missing from route')
    return
  }
  const response = await SurveyService.getSurveyElement(+route.params.id)   // Récupérer les éléments du concours
  while (response.options.length > 32) {                                    // Faire qu'il fasse max 32 éléments
    response.options.pop()
  }
  const data = shuffleArray(response.options)

  const savedSelection = JSON.parse(localStorage.getItem('selection'))      // Récupérer tous les éléments du local storage si ils existent
  if (savedSelection && savedSelection.length !== 0) { selection.value = savedSelection }
  else { selection.value = shuffleArray(data) }
  localStorage.setItem('selection', JSON.stringify(selection.value))
  const savedReturnSelectionItems = JSON.parse(localStorage.getItem('returnSelectionItems'))
  if (savedReturnSelectionItems) { returnSelectionItems.value = savedReturnSelectionItems }
  const savedChoosenItems = JSON.parse(localStorage.getItem('choosenItems'))
  if (savedChoosenItems) { choosenItems.value = savedChoosenItems }
  const savedCurrentIndex = JSON.parse(localStorage.getItem('currentIndex'))
  if (savedCurrentIndex) { currentIndex.value = savedCurrentIndex }
}

onMounted(async () => {
  getSurveyElements()
})


function shuffleArray(array) {
  const tempArray = array
  for (let i = tempArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [ tempArray[i], tempArray[j] ] = [ tempArray[j], tempArray[i] ]               // Échange les éléments
  }
  return tempArray
}

function showNextItems() {                                                        // Afficher les prochains éléments          
  if (currentIndex.value + 2 < selection.value.length) {
    currentIndex.value += 2
    localStorage.setItem('currentIndex', JSON.stringify(currentIndex.value))
  } else {
    if (selection.value.length === 2) {
      returnValues()                                                              // En finale
    } else {
      selection.value = shuffleArray(choosenItems.value)
      console.log('selection', selection.value)
      choosenItems.value = []
      currentIndex.value = 0
      localStorage.setItem('selection', JSON.stringify(selection.value))
      localStorage.setItem('currentIndex', JSON.stringify(currentIndex.value))
    }
  }
}

async function returnValues() {
  console.log('\n\n\n')
  console.log('returnValues', choosenItems.value)
  console.log('returnSelectionItems', returnSelectionItems)
  //const response = await SurveyService.putChoosen(returnSelectionItems.value) // Renvoyer les éléments choisis pour les stats
  //console.log('response', response)
  router.push({ name: 'results' })
}

function chooseValue(item) {                                                   // Quand un élément du concours est choisi     
  console.log('chooseValue', item)
  choosenItems.value.push(item)
  localStorage.setItem('choosenItems', JSON.stringify(choosenItems.value))
  const existingItem = returnSelectionItems.value.find(element => element.id === item.option_id)  // Vérifier si l'élément existe déjà
  if (existingItem) {
    existingItem.choose++                                                                         // Pour augmenter le nombre de fois qu'il a été choisi
  } else {
    returnSelectionItems.value.push({ id: item.option_id, choose: 1 })                            // Sinon on ajoute l'élément à la liste       
  }
  localStorage.setItem('returnSelectionItems', JSON.stringify(returnSelectionItems.value))
  showNextItems()
}
</script>

<style scoped>
.versus {
  position: fixed;
  top: 200px;
  right: 50%;
  transform: translate(50%, -50%);
  border-radius: 10px;
  width: auto;
  height: auto;
  font-size: 1.5em;
  font-weight: bold;
}

.divide {
  display: flex;
  flex-direction: row;

  margin: 0 10px;
}

.template {
  display: flex;
  align-items: center;
  width: 50%;
  height: 50vh;
}

button {
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  font-size: 2em;
  font-weight: bold;
}

.red-border {
  border: 2px solid red;
  background-color: #ffcccc;
}

.red-border:hover {
  background-color: #ff9999;
}

.blue-border {
  border: 2px solid blue;
  background-color: #cce6ff;
}

.blue-border:hover {
  background-color: #99ccff;
}
</style>
