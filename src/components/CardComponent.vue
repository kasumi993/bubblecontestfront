<template>
  <div class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
    <a
      href="#"
      class="block max-w-sm p-16 border rounded-lg shadow bg-gray-800 border-gray-700 hover:bg-gray-700"
    >

      <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">{{ title }}</h5>
      <p class="font-normal text-gray-400">Here is an interesting contest about....</p>
    </a>
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
