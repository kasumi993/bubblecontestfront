<template>
  <div class="image-card animate__animated animate__fadeIn transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
    <div class="card bg-white rounded-lg w-80 shadow-md">
      <img :src="index === 1 ? '/src/assets/timon.jpg' : '/src/assets/poumba.jpg'" alt="Card Image" class="rounded-t w-full object-cover">
      <div class="px-4 py-2">
        <h3 class="text-gray-800 text-xl font-semibold text-center">{{ item.name }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "imageCardComponent",
  props: {
    item: {
      type: Object,
    },
    index: {
      type: Number,
    }
  }
}
</script>

<style scoped>
.image-card {
  cursor: pointer;

  &.selected {
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
    animation: slideAndFade 1s forwards; /* Apply slide and fade animation */
  }

  @keyframes slideAndFade {
    0% {
      position: absolute;
      opacity: 1;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: translate(-50%, -50%) scale(1.5);
      opacity: 0;
    }
  }
}
.card {
  height: 60vh;
  img {
    height: 90%;
  }
}
</style>
