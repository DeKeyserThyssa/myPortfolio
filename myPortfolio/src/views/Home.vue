<script setup>
import {onMounted, ref} from "vue";
import SvgIcon from "@jamescoyle/vue-icon";
import {mdiLaptop} from "@mdi/js";
import portfolioFoto from '../assets/portfoliofoto.jpg';

const messages = [
  "React",
  "Vue",
  "Astro",
  "Figma",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Adobe XD",
  "Photoshop",
  "After Effects",
  "Tailwind CSS",
  "React Native",
  "ProtoPie",
]

const message = ref("");

onMounted(() => {
  const randomIndex = Math.floor(Math.random() * messages.length);
  message.value = messages[randomIndex];
});
</script>

<template>
  <section
      class="flex flex-col-reverse md:flex-row items-center justify-center text-center md:text-left
           gap-8 py-8 sm:py-16 min-h-full relative -translate-y-6 sm:-translate-y-24"
  >
    <div class="flex flex-col items-center md:items-start space-y-3">
      <h2 class="text-2xl sm:text-3xl font-semibold leading-snug">
        Full-Stack Web Developer <br />
        with a preference for <br />
        <span class="text-[#3A5A40] dark:text-[#B5C99A]">Frontend Development & Design</span>
      </h2>
      <h3
          class="flex items-center flex-row gap-4 text-lg sm:text-xl font-medium text-[#3A5A40] bg-[#EAF4EA] px-4 py-2 rounded-xl shadow-sm"
      >
        <SvgIcon type="mdi" :path="mdiLaptop" />
        <span class="font-bold">{{ message }}</span>
      </h3>
    </div>
    <div class="flex justify-center md:justify-end">
      <img
          :src="portfolioFoto"
          alt="Portfolio"
          class="w-48 sm:w-60 md:w-72 lg:w-80 rounded-full shadow-md border border-neutral-200 object-cover"
      />
    </div>
  </section>
</template>

<style scoped>
</style>