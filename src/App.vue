<script setup lang="ts">
import Isi from "./components/Isi.vue";
import Navbar from "./components/Navbar.vue";
import Pembuka from "./components/Pembuka.vue";
import Pemisah from "./components/Pemisah.vue";
import PemisahTengah from "./components/PemisahTengah.vue";
import Penutup from "./components/Penutup.vue";
</script>

<template>
  <div class="h-screen dark:bg-gray-800">
    <div class="h-auto pb-10 dark:bg-gray-800 overflow-hidden">
      <Navbar />
      <Pemisah />
      <div class="flex flex-col lg:flex-row gap-4 mt-4 ml-4 mr-4">
        <Pembuka />
      </div>
      <div
        class="flex flex-wrap gap-4 mt-4 ml-4 mr-4 animate__animated animate__fadeIn animate__slow"
      >
        <Isi />
      </div>
      <PemisahTengah />
      <Penutup />
    </div>
  </div>
</template>
