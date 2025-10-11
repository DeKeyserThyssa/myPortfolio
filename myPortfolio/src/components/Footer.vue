<script setup>
import Social from "@/components/Social.vue";

const currentYear = new Date().getFullYear();
</script>

<template>
  <footer
      class="flex flex-col sm:flex-row items-center justify-between text-center sm:text-left
           px-6 py-4 border-t border-gray-200 dark:border-neutral-600 text-sm text-neutral-600 dark:text-neutral-200 gap-2"
  >
    <p class="order-2 sm:order-1">Thyssa De Keyser © {{ currentYear }}</p>

    <nav class="flex gap-5 order-1 sm:order-2">
      <Social platform="linkedin" username="in/thyssa-de-keyser-b03b3224a/" />
      <Social platform="github" username="DeKeyserThyssa" />
    </nav>
  </footer>
</template>

<style scoped>

</style>