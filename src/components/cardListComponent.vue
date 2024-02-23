<template>
  <div class="card-list w-full max-w-md p-4 rounded-lg shadow sm:p-8">
    <div class="flow-root">
      <ul
        role="list"
        class="divide-y divide-gray-700"
      >
        <li class="py-3 sm:py-4">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <img
                class="w-8 h-8 rounded-full"
                src="@/assets/banner.png"
                alt="Neil image"
              >
            </div>
            <div class="flex-1 min-w-0 ms-4">
              <p class="text-sm font-medium truncate text-white">
                Personnages Marvels
              </p>
              <p class="text-sm truncate text-gray-400">
                Meilleur personnage
              </p>
            </div>
            <div>
              <div class="text-sm truncate text-gray-400">
                320
              </div>
              <p class="text-sm truncate text-gray-400">
                inscrits
              </p>
            </div>
          </div>
        </li>
        <li class="py-3 sm:py-4">
          <div class="flex items-center ">
            <div class="flex-shrink-0">
              <img
                class="w-8 h-8 rounded-full"
                src="@/assets/banner.png"
                alt="Bonnie image"
              >
            </div>
            <div class="flex-1 min-w-0 ms-4">
              <p class="text-sm font-medium truncate text-white">
                Effets spéciaux
              </p>
              <p class="text-sm truncate text-gray-400">
                meilleurs effets speciaux, flahs est à l'honneur
              </p>
            </div>
            <div>
              <div class="text-sm truncate text-gray-400">
                20
              </div>
              <p class="text-sm truncate text-gray-400">
                inscrits
              </p>
            </div>
          </div>
        </li>
        <li class="py-3 sm:py-4">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <img
                class="w-8 h-8 rounded-full"
                src="@/assets/banner.png"
                alt="Michael image"
              >
            </div>
            <div class="flex-1 min-w-0 ms-4">
              <p class="text-sm font-medium truncate text-white">
                Cheat code
              </p>
              <p class="text-sm truncate text-gray-400">
                one punch man, solo leveling, isekai
              </p>
            </div>
            <div>
              <div class="text-sm truncate text-gray-400">
                2320
              </div>
              <p class="text-sm truncate text-gray-400">
                inscrits
              </p>
            </div>
          </div>
        </li>
        <li class="py-3 sm:py-4">
          <div class="flex items-center ">
            <div class="flex-shrink-0">
              <img
                class="w-8 h-8 rounded-full"
                src="@/assets/banner.png"
                alt="Lana image"
              >
            </div>
            <div class="flex-1 min-w-0 ms-4">
              <p class="text-sm font-medium truncate text-white">
                Disney party
              </p>
              <p class="text-sm truncate text-gray-400">
                disney ce soir? meilleur films disney
              </p>
            </div>
            <div>
              <div class="text-sm truncate text-gray-400">
                30
              </div>
              <p class="text-sm truncate text-gray-400">
                inscrits
              </p>
            </div>
          </div>
        </li>
        <li class="pt-3 pb-0 sm:pt-4">
          <div class="flex items-center ">
            <div class="flex-shrink-0">
              <img
                class="w-8 h-8 rounded-full"
                src="@/assets/banner.png"
                alt="Thomas image"
              >
            </div>
            <div class="flex-1 min-w-0 ms-4">
              <p class="text-sm font-medium truncate text-white">
                Anime razzia
              </p>
              <p class="text-sm truncate text-gray-400">
                Meilleur anime 2024
              </p>
            </div>
            <div>
              <div class="text-sm truncate text-gray-400">
                3200
              </div>
              <p class="text-sm truncate text-gray-400">
                inscrits
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardListComponent'
}
</script>

<style>
.card-list {
  background-color: #18202d;
}
</style>
