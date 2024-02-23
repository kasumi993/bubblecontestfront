<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'
import CardComponent from '../components/CardComponent.vue'

import SurveyService from '@/services/surveyService'
import { useRouter } from 'vue-router'
import BannerCardComponent from '@/components/BannerCardComponent.vue'
import CardListComponent from '@/components/cardListComponent.vue'

const router = useRouter()
const surveys = ref([])

const getSurveysList = async () => {
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
  getSurveysList()
})
</script>

<template>
  <div class="Home">
    <div class="intro-banner flex flex-row flex-nowrap gap-5 mt-10 ml-10 mr-10">
      <div class="banner-image">
        <span class="style-text"> <img
          src="@/assets/stars-icon.svg"
          width="25"
        >New </span>
        <banner-card-component class="mt-6" />
      </div>
      <div class="trend-list">
        <span class="style-text"> <img
          src="@/assets/stars-icon.svg"
          width="25"
        >Trending </span>
        <card-list-component class="mt-6" />
      </div>
    </div>

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


<style lang="scss">
.intro-banner {
  max-height: 70vh;
  overflow: hidden;
  .style-text {
    display: flex;
    color: #31AADD;
  }
  .banner-image {
    width: 70%;
  }
  .trend-list {
    width: 30%;
  }
}

</style>
