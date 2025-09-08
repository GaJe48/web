<script setup lang="ts">
defineProps<{
  pesan: string
  saus: string
  sausPoto: string
  warna: string
}>()
</script>

<template>
  <button
    class="inline-flex items-center justify-center gap-1.5 rounded-sm px-5 py-3 transition focus:ring-3 focus:outline-hidden"
    :class="warna"
    type="button"
  >
    <span class="text-sm font-medium">
      <a :href="saus">{{ pesan }}</a>
    </span>

    <img :src="sausPoto" class="size-6" />
  </button>
</template>
