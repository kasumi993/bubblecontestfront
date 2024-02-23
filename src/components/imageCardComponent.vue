<template>
  <div class="image-card animate__animated animate__fadeIn transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
    <div class="card bg-white rounded-lg w-80 shadow-md">
      <img
        :src="index === 1 ? '/src/assets/timon.jpg' : '/src/assets/poumba.jpg'"
        alt="Card Image"
        class="rounded-t w-full object-cover"
      >
      <div class="px-4 py-2">
        <h3 class="text-gray-800 text-xl font-semibold text-center">
          {{ item.name }}
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageCardComponent',
  props: {
    item: {
      type: Object,
      default: () => ({})
    },
    index: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style scoped>
.image-card {
  cursor: pointer;
  transition: all 0.5s ease;
  position: relative;

  &.on-left {
    left: 0;
  }

  &.on-right {
    right: 0;
  }

  &.hide {
    opacity: 0 !important;
  }

  &.slide-to-middle-from-left {
    left: 35%;
  }

  &.slide-to-middle-from-right {
    right: 35%;
  }
}
.card {
  height: 60vh;
  img {
    height: 90%;
  }
}
</style>
