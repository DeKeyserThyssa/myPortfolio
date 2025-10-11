<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div class="min-h-screen bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center sm:p-10">
    <div class="flex flex-col h-screen sm:h-[90vh] w-full max-w-6xl bg-white
             text-neutral-800 dark:text-neutral-100 rounded-2xl shadow-md
             border border-neutral-200 dark:border-neutral-800 overflow-hidden
             transition-all duration-300"
    >
      <header class="bg-white flex-shrink-0 dark:bg-neutral-900/90">
        <Header />
      </header>

      <main class="flex-grow px-4 sm:px-8 py-2 overflow-auto dark:bg-neutral-900/90">
        <RouterView />
      </main>

      <footer class="bg-white flex-shrink-0 dark:bg-neutral-900/90">
        <Footer />
      </footer>
    </div>

  </div>
</template>

<style scoped>
/* Optional: clean scrollbar */
main::-webkit-scrollbar {
  width: 6px;
}
main::-webkit-scrollbar-thumb {
  background-color: rgba(0,0,0,0.2);
  border-radius: 3px;
}
</style>
