<script setup>

</script>

<template>
  <div class="flex flex-col items-center justify-center text-center min-h-full relative">
    <h1 class="text-6xl font-bold mb-4">404</h1>
    <p class="text-lg mb-6">
      Oops! The page you’re looking for doesn’t exist.
    </p>
    <RouterLink
        to="/"
        class="px-4 py-2 bg-button text-black flex items-center gap-2 hover:bg-buttonHover rounded-lg"
    >
      Go Home
    </RouterLink>
  </div>
</template>

<style scoped>

</style>