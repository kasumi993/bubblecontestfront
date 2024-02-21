<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'
import CardComponent from '../components/CardComponent.vue'

import SurveyService from '@/services/surveyService'
import { useRouter } from 'vue-router'

const router = useRouter()
const surveys = ref([])

const getSurveys2 = async () => {
  const response = await SurveyService.getSurveys()
  surveys.value = response
  console.log('surveys')
  console.log(surveys)
  console.log('surveys.value')
  console.log(surveys.value)
}

const goToContest = (param) => {
  console.log('param')
  console.log(param)
  localStorage.setItem('choosenItems', JSON.stringify([]))
  localStorage.setItem('currentIndex', JSON.stringify(0))
  localStorage.setItem('selection', JSON.stringify([]))
  localStorage.setItem('returnSelectionItems', JSON.stringify([]))
  router.push({ name: 'contest', params: { id: param } })

}


onBeforeMount(() => {
  getSurveys2()
})
</script>

<template>
  <div class="Home">
    <form class="m-14 w-80vw max-w-screen-xl mx-auto">
      <label
        for="default-search"
        class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >Search</label>
      <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            class="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          id="default-search"
          type="search"
          class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search Mockups, Logos..."
          required
        >
        <button
          type="submit"
          class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Search
        </button>
      </div>
    </form>

    <div class="m-14 grid grid-cols-3 gap-8">
      <div
        v-for="(survey, index) in surveys"
        :key="index"
      >
        <CardComponent
          :title="survey.title"
          @click="goToContest(survey.survey_id)"
        />
      </div>
    </div>
  </div>
</template>
