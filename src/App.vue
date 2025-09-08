<script setup lang="ts">
import Isi from './components/Isi.vue'
import Navbar from './components/Navbar.vue'
import Pembuka from './components/Pembuka.vue'
import Pemisah from './components/Pemisah.vue'
import PemisahTengah from './components/PemisahTengah.vue'
import Penutup from './components/Penutup.vue'
</script>

<template>
  <div class="h-screen dark:bg-gray-800">
    <div class="h-auto overflow-hidden pb-10 dark:bg-gray-800">
      <Navbar />
      <Pemisah />
      <div class="mt-4 mr-4 ml-4 flex flex-col gap-4 lg:flex-row">
        <Pembuka />
      </div>
      <div
        class="animate__animated animate__fadeIn animate__slow mt-4 mr-4 ml-4 flex flex-wrap gap-4"
      >
        <Isi />
      </div>
      <PemisahTengah />
      <Penutup />
    </div>
  </div>
</template>
