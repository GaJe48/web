<template>
  <article
    class="flex bg-white transition hover:shadow-xl mt-4 ml-4 mr-4 rounded-xl dark:bg-gray-900 dark:shadow-gray-800/25 animate__animated animate__fadeInUp"
  >
    <div class="rotate-180 p-2 [writing-mode:_vertical-lr]">
      <p
        class="flex items-center justify-center gap-4 text-xs font-bold uppercase text-gray-900 dark:text-white"
      >
        Github
      </p>
    </div>

    <div class="hidden sm:block sm:basis-56">
      <img
        alt=""
        src="//gcore.jsdelivr.net/gh/Atlas-OS/branding@main/banners/banner-v3.png"
        class="aspect-square h-full w-full object-cover"
      />
    </div>

    <div class="flex flex-1 flex-col justify-between">
      <div
        class="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6 dark:border-white/10"
      >
        <a href="//github.com/GaJe48/Atlas">
          <h3 class="font-bold uppercase text-gray-900 dark:text-white">
            Atlas Fork
          </h3>
        </a>

        <p
          class="mt-2 line-clamp-3 text-sm/relaxed text-gray-700 dark:text-gray-200"
        >
          🚀 An open and lightweight modification to Windows, designed to
          optimize performance, privacy and usability.
        </p>
      </div>
    </div>
  </article>
</template>
