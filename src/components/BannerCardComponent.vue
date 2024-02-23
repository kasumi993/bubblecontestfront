<template>
  <div class="relative block max-w h-max-md rounded shadow bg-gray-800 border-gray-700 hover:bg-gray-700">
    <!-- Image and Overlay Container -->
    <div class="relative rounded overflow-hidden">
      <!-- Image -->
      <img
        src="@/assets/banner.png"
        class="main-img w-full h-full"
      >

      <!-- Overlay -->
      <div
        class="absolute inset-x-0 rounded bottom-0 h-full"
        style="background-image: linear-gradient(90deg, rgba(0, 0, 0, 0.8) 50%, rgba(0, 0, 0, 0));"
      />
    </div>

    <!-- Text -->
    <div class="absolute w-3/4 bottom-0 left-0 px-6 pb-6">
      <h2 class="text-white text-3xl font-semibold mb-2">
        Battle: Animes Netflix 2024
      </h2>
      <p class="text-gray-400 text-md mb-12">
        Plongez dans l'action de l'année avec le Tournoi de l'Anime Netflix 2024 ! Les plus grands titres de l'animation se défieront pour obtenir la couronne suprême. Que vous soyez un fan de combats...
      </p>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  // type inference enabled
  props: {
    title: {
      type: String,
      default: ''
    }
  }
})
</script>

<style>
.main-img {
  max-height: 53vh !important;
  border-radius: 10px;
}
</style>
