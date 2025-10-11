<script setup>
import Logo from "@/components/logo.vue";
import {ref} from "vue";
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiWhiteBalanceSunny, mdiMoonWaxingCrescent, mdiDownload  } from "@mdi/js";

const isDark = ref(false);

function toggleDarkMode() {
  isDark.value = !isDark.value;
  document.documentElement.classList.toggle('dark');
}
</script>

<template>
  <nav class="flex items-center justify-between px-6 py-3 border-b border-gray-200 dark:border-neutral-600">
    <RouterLink to="/" class="flex items-center space-x-2 text-[#718355] dark:text-[#A6D5A8]">
      <Logo/>
    </RouterLink>

    <div class="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-700 dark:text-gray-300">
      <div class="hidden md:flex items-center space-x-6 text-sm font-medium ">
        <RouterLink to="/about" class="hover:text-[#3A5A40] transition-colors">About</RouterLink>
      </div>

      <a href="../../public/ThyssaDeKeyserResume.pdf" download
         class="px-3 py-1.5 rounded-xl bg-[#E6EEDB] text-black flex items-center gap-2 hover:bg-[#d9e4c9] transition-colors"
      >
        Resume
        <SvgIcon type="mdi" :path="mdiDownload" class="w-5 h-5" />
      </a>

      <button
          @click="toggleDarkMode"
          class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors"
      >
        <SvgIcon v-if="isDark" type="mdi" :path="mdiMoonWaxingCrescent" class="w-5 h-5"/>
        <SvgIcon v-else type="mdi" :path="mdiWhiteBalanceSunny" class="w-5 h-5 rotate-[15deg]"/>
      </button>
    </div>
  </nav>
</template>

<style scoped>
</style>