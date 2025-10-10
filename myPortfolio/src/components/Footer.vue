<script setup>
import Social from "@/components/Social.vue";

const currentYear = new Date().getFullYear();
</script>

<template>
  <div class="flex items-center justify-between px-6 py-3 border-t border-gray-200 bg-white">
    <p>Thyssa De Keyser © {{ currentYear }}</p>
    <nav class="flex gap-4">
      <Social platform="linkedin" username="in/thyssa-de-keyser-b03b3224a/"/>
      <Social platform="github" username="DeKeyserThyssa"/>
    </nav>
  </div>
</template>

<style scoped>

</style>