<script setup>
import Logo from "@/components/logo.vue";
import { ref, onMounted, watch } from "vue";
import SvgIcon from "@jamescoyle/vue-icon";
import {
  mdiWhiteBalanceSunny,
  mdiMoonWaxingCrescent,
  mdiDownload,
  mdiMenu,
  mdiClose,
} from "@mdi/js";

const isDark = ref(false);
const isMenuOpen = ref(false);

// Load theme preference
onMounted(() => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    isDark.value = true;
    document.documentElement.classList.add("dark");
  }
});

// Watch theme toggle
watch(isDark, (newValue) => {
  if (newValue) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
});

function toggleDarkMode() {
  isDark.value = !isDark.value;
}

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}
</script>

<template>
  <nav class="relative flex items-center justify-between px-6 py-3 border-b border-gray-200 dark:border-neutral-600">
    <RouterLink to="/" class="flex items-center space-x-2 text-[#718355] dark:text-[#A6D5A8]">
      <Logo />
    </RouterLink>

    <!-- Desktop Menu -->
    <div class="hidden md:flex items-center space-x-6 text-sm font-medium">
      <RouterLink to="/about" class="hover:text-[#3A5A40] dark:hover:text-[#B5C99A]">
        About
      </RouterLink>

      <a
          href="/ThyssaDeKeyserResume.pdf" download
          class="px-3 py-1.5 rounded-xl bg-[#E6EEDB] text-black flex items-center gap-2 hover:bg-[#d9e4c9]"
      >
        Resume
        <SvgIcon type="mdi" :path="mdiDownload" class="w-5 h-5" />
      </a>

      <button @click="toggleDarkMode" class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800">
        <SvgIcon v-if="isDark" type="mdi" :path="mdiMoonWaxingCrescent" class="w-5 h-5" />
        <SvgIcon v-else type="mdi" :path="mdiWhiteBalanceSunny" class="w-5 h-5 rotate-[15deg]" />
      </button>
    </div>

    <!-- Mobile Menu Button -->
    <div class="md:hidden flex items-center space-x-3">
      <button @click="toggleDarkMode" class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800">
        <SvgIcon v-if="isDark" type="mdi" :path="mdiMoonWaxingCrescent" class="w-5 h-5" />
        <SvgIcon v-else type="mdi" :path="mdiWhiteBalanceSunny" class="w-5 h-5 rotate-[15deg]" />
      </button>

      <button @click="toggleMenu" class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800">
        <SvgIcon v-if="!isMenuOpen" type="mdi" :path="mdiMenu" class="w-6 h-6" />
        <SvgIcon v-else type="mdi" :path="mdiClose" class="w-6 h-6" />
      </button>
    </div>

    <!-- Mobile Dropdown Menu -->
    <Transition name="fade">
      <div
          v-if="isMenuOpen"
          class="absolute top-full right-0 mt-2 w-40 bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-xl shadow-lg flex flex-col text-sm font-medium z-50"
      >
        <RouterLink
            to="/about"
            class="px-4 py-2 hover:bg-gray-100 dark:hover:bg-neutral-700 rounded-t-xl"
            @click="isMenuOpen = false"
        >
          About
        </RouterLink>

        <a
            href="/ThyssaDeKeyserResume.pdf" download
            class="px-4 py-2 hover:bg-gray-100 dark:hover:bg-neutral-700 flex items-center gap-2"
            @click="isMenuOpen = false"
        >
          Resume
          <SvgIcon type="mdi" :path="mdiDownload" class="w-4 h-4" />
        </a>
      </div>
    </Transition>
  </nav>
</template>


<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>