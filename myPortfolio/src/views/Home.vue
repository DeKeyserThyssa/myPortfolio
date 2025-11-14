<script setup>
import {
  DeHtml5Original, DeCss3Original, DeJavascriptOriginal, DeTypescriptOriginal,
  DeVuejsOriginal, DeReactOriginal, DeCsharpOriginal, DeFigmaOriginal
} from '@kalimahapps/vue-icons';

const topSkills = [
  { name: "HTML", icon: DeHtml5Original },
  { name: "CSS", icon: DeCss3Original },
  { name: "JavaScript", icon: DeJavascriptOriginal },
  { name: "TypeScript", icon: DeTypescriptOriginal },
  { name: "Vue", icon: DeVuejsOriginal },
  { name: "React", icon: DeReactOriginal },
  { name: "C#", icon: DeCsharpOriginal },
  { name: "Figma", icon: DeFigmaOriginal },
];
</script>

<template>
  <div class="py-8 flex flex-col justify-between gap-8 sm:py-10 min-h-full">
    <section
        class="flex flex-col-reverse md:flex-row items-center justify-center text-center md:text-left
             gap-8"
    >
      <div class="flex flex-col items-center md:items-start space-y-3">
        <h2 class="text-2xl sm:text-3xl font-semibold leading-snug">
          Full-Stack Web Developer <br />
          with a preference for <br />
          <span class="text-accentText dark:text-darkAccentText">Frontend Development & Design</span>
        </h2>
      </div>
      <div class="flex justify-center md:justify-end">
        <img
            src="/portfoliofoto.jpg"
            alt="Portfolio"
            class="w-48 sm:w-60 md:w-72 lg:w-80 rounded-full shadow-md border border-neutral-200 object-cover"
        />
      </div>
    </section>
    <div class="block md:hidden border-t border-gray-200 dark:border-neutral-600 w-3/4 mx-auto"></div>
    <section>
      <h2 class="text-3xl font-bold text-center mb-8 text-accentText dark:text-darkAccentText">
        My Top Skills
      </h2>
      <div class="flex flex-wrap justify-center gap-6">
        <div
            v-for="skill in topSkills"
            :key="skill.name"
            class="flex flex-col items-center gap-2 p-4 bg-card dark:bg-darkCard rounded-xl shadow-md hover:shadow-lg transition"
        >
          <component :is="skill.icon" class="w-10 h-10 text-accentText dark:text-darkAccentText" />
          <span class="font-semibold">{{ skill.name }}</span>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
</style>
