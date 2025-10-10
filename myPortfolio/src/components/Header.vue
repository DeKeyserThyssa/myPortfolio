<script setup>

</script>

<template>
  <nav class="flex items-center justify-between px-6 py-3 border-b border-gray-200 bg-white">
    <RouterLink to="/" class="flex items-center space-x-2">
      <img src="./../assets/logo.svg" alt="Logo" class="h-6" />
    </RouterLink>

    <div class="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-700">
      <RouterLink to="/about" class="hover:text-[#3A5A40] transition-colors">About</RouterLink>
    </div>
  </nav>
</template>

<style scoped>

</style>