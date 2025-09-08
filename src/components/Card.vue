<script setup lang="ts">
interface Tag {
  label: string
  color: string
}

defineProps<{
  title: string
  url: string
  date?: string
  author?: string
  tags: Tag[]
  resultUrl?: string
}>()
</script>

<template>
  <article
    class="hover:animate-background grow rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-xs hover:[animation-duration:_4s] dark:shadow-gray-700/25"
  >
    <div class="rounded-[10px] bg-white p-4 !pt-20 sm:p-6 dark:bg-gray-900">
      <time :datetime="date || '2022-10-10'" class="block text-xs text-gray-500 dark:text-gray-400">
        {{ author || 'Dea Afrizal' }}
      </time>

      <h3 class="mt-0.5 text-lg font-medium text-gray-900 dark:text-white">
        <a :href="url">{{ title }}</a>
      </h3>

      <div class="mt-4 flex flex-wrap gap-1">
        <span
          v-if="resultUrl"
          class="rounded-full bg-purple-100 px-2.5 py-0.5 text-xs whitespace-nowrap text-orange-600 dark:bg-yellow-600 dark:text-orange-100"
        >
          <a :href="resultUrl">Hasil</a>
        </span>

        <span
          v-for="tag in tags"
          :key="tag.label"
          class="rounded-full px-2.5 py-0.5 text-xs whitespace-nowrap"
          :class="
            tag.color || 'bg-purple-100 text-purple-600 dark:bg-purple-600 dark:text-purple-100'
          "
        >
          {{ tag.label }}
        </span>
      </div>
    </div>
  </article>
</template>
