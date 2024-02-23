<template>
  <div
    class="contest px-32 pt-4"
  >
    <div class="title text-center pt-4 pb-14">
      <h1 class="text-2xl text-gray-300 font-semibold">{{ surveyList.description}}</h1>
      <p class="text-white text-lg">
        Tour : {{ currentIndex / 2 }} sur {{ Math.round(selection.length / 2 )}}
      </p>
    </div>
    <div class="mx-32 md:mx-16 flex items-center gap-8 justify-between" v-if="displayedItems?.length">
      <image-card-component v-for="(item, index) in displayedItems" ref="imageCards" :key="index" :item="item" :index="index" @click="chooseValue(item, index)"></image-card-component>
      <div class="order-2 fixed left-1/2">
        <div class="loading-circle"></div>
        <img src="@/assets/vs.png" width="35" class="z-10 relative">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import SurveyService from '@/services/surveyService'
import ImageCardComponent from "@/components/imageCardComponent.vue";

const route = useRoute()
const router = useRouter()

const surveyList = ref([])               // Liste des éléments
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
  surveyList.value = response;
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

const imageCards = ref([]);
function chooseValue(item, index) {
  // Quand un élément du concours est choisi
  console.log(imageCards.value);
  console.log(imageCards.value[index].$el);
  imageCards.value[index].$el.classList.add('selected');
  setTimeout(() => {
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
  }, 3000)
}
</script>

<style scoped>
.contest {
  height: calc(100vh - 120px);
}
/* CSS for the loading circle animation */
.loading-circle {
  position: absolute;
  transform: translate(-50%, -50%);
  top: -14px;
  left: -17px;
  width: 65px;
  height: 65px;
  border: 3px solid transparent;
  border-bottom-color: #31AADD; /* Change color as needed */
  border-top-color: #31AADD; /* Change color as needed */
  border-radius: 50%;
  animation: spin 5s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>
