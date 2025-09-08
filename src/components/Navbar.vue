<script setup lang="ts">
import Tombol from "./Tombol.vue";
</script>

<template>
  <header
    class="bg-white drop-shadow-xl dark:bg-gray-900 animate__animated animate__fadeInDown fixed w-full z-10"
  >
    <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div
        class="flex flex-col items-center gap-4 md:flex-row md:items-center md:justify-between"
      >
        <div class="flex flex-row">
          <img
            src="//static.wikia.nocookie.net/zenless-zone-zero/images/7/79/Avatar_Hoshimi_Miyabi.png"
            class="size-15 mr-4"
            onclick="darkMode()"
          />
          <div>
            <h1
              class="text-2xl font-bold text-gray-900 sm:text-3xl dark:text-white"
            >
              Tempat Gabut
            </h1>

            <p class="mt-1.5 text-sm text-gray-500 dark:text-gray-400 italic">
              Ngapain Ngoding, Mending Mancing.
            </p>
          </div>
        </div>

        <div class="flex items-center gap-4">
          <Tombol
            pesan="Guthib Gw"
            saus="https://github.com/GaJe48"
            saus-poto="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/160px-GitHub_Invertocat_Logo.svg.png"
            warna="text-gray-900 bg-white border border-gray-200 hover:text-gray-700 dark:text-white dark:bg-gray-900 dark:border-gray-800 dark:hover:text-gray-200"
          />

          <Tombol
            pesan="Fesnuk IMPHEN"
            saus="https://facebook.com/groups/programmerhandal"
            saus-poto="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023_Facebook_icon.svg/50px-2023_Facebook_icon.svg.png"
            warna="text-white bg-indigo-600 hover:bg-indigo-700"
          />
        </div>
      </div>
    </div>
  </header>
</template>
