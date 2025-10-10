<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div class="min-h-screen bg-neutral-100 flex items-center justify-center sm:p-10">
    <div class="flex flex-col h-screen sm:h-[90vh] w-full max-w-6xl bg-white
             text-neutral-800 rounded-2xl shadow-md
             border border-neutral-200/60 overflow-hidden
             transition-all duration-300"
    >
      <header class="bg-white/70 flex-shrink-0">
        <Header />
      </header>

      <main class="flex-grow px-4 sm:px-8 py-2 overflow-auto">
        <RouterView />
      </main>

      <footer class="bg-white/70 flex-shrink-0">
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
