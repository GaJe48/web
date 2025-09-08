<script setup lang="ts">
import Card from './Card.vue'

const cards = [
  {
    title: 'HTML Dasar - 13 Part',
    url: '//www.youtube.com/playlist?list=PLFIM0718LjIVuONHysfOK0ZtiqUWvrx4F',
    author: 'Web Programming UNPAS',
    resultUrl: 'html-dasar.html',
    tags: [
      {
        label: 'HTML',
        color: 'bg-purple-100 text-purple-600 dark:bg-purple-600 dark:text-purple-100',
      },
    ],
  },
  {
    title: 'Sesi 1 - Semester 1 Cuy University',
    url: '//www.youtube.com/watch?v=71a2zeC71gk&list=PLc6SEcJkQ6DzVY6THm3prtUU6HKMqpZSH',
    resultUrl: 'sesi-1-layout.html',
    tags: [
      {
        label: 'HTML',
        color: 'bg-purple-100 text-purple-600 dark:bg-purple-600 dark:text-purple-100',
      },
      {
        label: 'CSS',
        color: 'bg-purple-100 text-purple-600 dark:bg-purple-600 dark:text-purple-100',
      },
    ],
  },
  {
    title: 'Sesi 2 - Semester 1 Cuy University',
    url: '//www.youtube.com/watch?v=Mb6Np6QURDY&list=PLc6SEcJkQ6DzVY6THm3prtUU6HKMqpZSH',
    tags: [
      {
        label: 'HTML',
        color: 'bg-purple-100 text-purple-600 dark:bg-purple-600 dark:text-purple-100',
      },
      {
        label: 'CSS',
        color: 'bg-purple-100 text-purple-600 dark:bg-purple-600 dark:text-purple-100',
      },
      {
        label: 'JavaScript',
        color: 'bg-purple-100 text-purple-600 dark:bg-purple-600 dark:text-purple-100',
      },
    ],
  },
  {
    title: 'Sesi 3 - Semester 1 Cuy University',
    url: '//www.youtube.com/watch?v=igwNyjc7Ii8&list=PLc6SEcJkQ6DzVY6THm3prtUU6HKMqpZSH',
    tags: [
      {
        label: 'HTML',
        color: 'bg-purple-100 text-purple-600 dark:bg-purple-600 dark:text-purple-100',
      },
      {
        label: 'Bootstrap',
        color: 'bg-purple-100 text-purple-600 dark:bg-purple-600 dark:text-purple-100',
      },
    ],
  },
  {
    title: 'Sesi 4 - Semester 1 Cuy University',
    url: '//www.youtube.com/watch?v=vQeJIa-ZYm4&list=PLc6SEcJkQ6DzVY6THm3prtUU6HKMqpZSH',
    resultUrl: 'sesi-4-saklar.html',
    tags: [
      {
        label: 'HTML',
        color: 'bg-purple-100 text-purple-600 dark:bg-purple-600 dark:text-purple-100',
      },
      {
        label: 'CSS',
        color: 'bg-purple-100 text-purple-600 dark:bg-purple-600 dark:text-purple-100',
      },
      {
        label: 'JavaScript',
        color: 'bg-purple-100 text-purple-600 dark:bg-purple-600 dark:text-purple-100',
      },
      {
        label: 'Tailwind',
        color: 'bg-purple-100 text-purple-600 dark:bg-purple-600 dark:text-purple-100',
      },
      {
        label: 'Flowbite',
        color: 'bg-purple-100 text-purple-600 dark:bg-purple-600 dark:text-purple-100',
      },
    ],
  },
  {
    title: 'Sesi 5 - Semester 1 Cuy University',
    url: '//www.youtube.com/watch?v=QUpyv31Nyso&list=PLc6SEcJkQ6DzVY6THm3prtUU6HKMqpZSH',
    resultUrl: 'sesi-5-login.html',
    tags: [
      {
        label: 'HTML',
        color: 'bg-purple-100 text-purple-600 dark:bg-purple-600 dark:text-purple-100',
      },
      {
        label: 'CSS',
        color: 'bg-purple-100 text-purple-600 dark:bg-purple-600 dark:text-purple-100',
      },
      {
        label: 'JavaScript',
        color: 'bg-purple-100 text-purple-600 dark:bg-purple-600 dark:text-purple-100',
      },
    ],
  },
  {
    title: 'Sesi 6 - Semester 1 Cuy University',
    url: '//www.youtube.com/watch?v=QIpWKTHKcqM&list=PLc6SEcJkQ6DzVY6THm3prtUU6HKMqpZSH',
    resultUrl: 'index.html',
    tags: [
      {
        label: 'HTML',
        color: 'bg-purple-100 text-purple-600 dark:bg-purple-600 dark:text-purple-100',
      },
      {
        label: 'CSS',
        color: 'bg-purple-100 text-purple-600 dark:bg-purple-600 dark:text-purple-100',
      },
      {
        label: 'JavaScript',
        color: 'bg-purple-100 text-purple-600 dark:bg-purple-600 dark:text-purple-100',
      },
    ],
  },
  {
    title: 'Sesi 7 - Semester 1 Cuy University',
    url: '//www.youtube.com/watch?v=kLUI9LISP5k&list=PLc6SEcJkQ6DzVY6THm3prtUU6HKMqpZSH',
    tags: [
      {
        label: 'JavaScript',
        color: 'bg-purple-100 text-purple-600 dark:bg-purple-600 dark:text-purple-100',
      },
      {
        label: 'Node.js',
        color: 'bg-purple-100 text-purple-600 dark:bg-purple-600 dark:text-purple-100',
      },
    ],
  },
  {
    title: 'Sesi 8 - Semester 1 Cuy University',
    url: '//www.youtube.com/watch?v=XqJYMlCpYQA&list=PLc6SEcJkQ6DzVY6THm3prtUU6HKMqpZSH',
    resultUrl: 'sesi-8-passgen.html',
    tags: [
      {
        label: 'HTML',
        color: 'bg-purple-100 text-purple-600 dark:bg-purple-600 dark:text-purple-100',
      },
      {
        label: 'JavaScript',
        color: 'bg-purple-100 text-purple-600 dark:bg-purple-600 dark:text-purple-100',
      },
      {
        label: 'Bootstrap',
        color: 'bg-purple-100 text-purple-600 dark:bg-purple-600 dark:text-purple-100',
      },
    ],
  },
  {
    title: 'Sesi 1 - Semester 2 Cuy University',
    url: '//www.youtube.com/watch?v=4ZHSZ4bz_pE&list=PLc6SEcJkQ6DwIfhXhH52cL0fI33_yQVNo',
    tags: [
      {
        label: 'HTML',
        color: 'bg-purple-100 text-purple-600 dark:bg-purple-600 dark:text-purple-100',
      },
      {
        label: 'CSS',
        color: 'bg-purple-100 text-purple-600 dark:bg-purple-600 dark:text-purple-100',
      },
    ],
  },
  {
    title: 'Sesi 2 - Semester 2 Cuy University',
    url: '//www.youtube.com/watch?v=Ed7i0we-V3g&list=PLc6SEcJkQ6DwIfhXhH52cL0fI33_yQVNo',
    tags: [
      {
        label: 'HTML',
        color: 'bg-purple-100 text-purple-600 dark:bg-purple-600 dark:text-purple-100',
      },
      {
        label: 'CSS',
        color: 'bg-purple-100 text-purple-600 dark:bg-purple-600 dark:text-purple-100',
      },
    ],
  },
  {
    title: 'Sesi 3 - Semester 2 Cuy University',
    url: '//www.youtube.com/watch?v=zgqwL_ORYZc&list=PLc6SEcJkQ6DwIfhXhH52cL0fI33_yQVNo',
    tags: [
      {
        label: 'HTML',
        color: 'bg-purple-100 text-purple-600 dark:bg-purple-600 dark:text-purple-100',
      },
      {
        label: 'CSS',
        color: 'bg-purple-100 text-purple-600 dark:bg-purple-600 dark:text-purple-100',
      },
      {
        label: 'JavaScript',
        color: 'bg-purple-100 text-purple-600 dark:bg-purple-600 dark:text-purple-100',
      },
    ],
  },
  {
    title: 'Sesi 4 - Semester 2 Cuy University',
    url: '//www.youtube.com/watch?v=5SzdLikCuic&list=PLc6SEcJkQ6DwIfhXhH52cL0fI33_yQVNo',
    tags: [
      {
        label: 'HTML',
        color: 'bg-purple-100 text-purple-600 dark:bg-purple-600 dark:text-purple-100',
      },
      {
        label: 'CSS',
        color: 'bg-purple-100 text-purple-600 dark:bg-purple-600 dark:text-purple-100',
      },
    ],
  },
  {
    title: 'Sesi 5 - Semester 2 Cuy University',
    url: '//www.youtube.com/watch?v=0FrqCNU1krI&list=PLc6SEcJkQ6DwIfhXhH52cL0fI33_yQVNo',
    tags: [
      {
        label: 'HTML',
        color: 'bg-purple-100 text-purple-600 dark:bg-purple-600 dark:text-purple-100',
      },
      {
        label: 'CSS',
        color: 'bg-purple-100 text-purple-600 dark:bg-purple-600 dark:text-purple-100',
      },
    ],
  },
]
</script>

<template>
  <Card
    v-for="card in cards"
    :key="card.title"
    :title="card.title"
    :url="card.url"
    :author="card.author"
    :tags="card.tags"
    :result-url="card.resultUrl"
  />
</template>
