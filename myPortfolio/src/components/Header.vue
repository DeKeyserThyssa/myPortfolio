<script setup>
import Logo from "@/components/logo.vue";
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import { AkDownload, ByMenu, CdClose, BsMoonFill, FlFilledWeatherSunny } from '@kalimahapps/vue-icons';

const isDark = ref(false);
const isMenuOpen = ref(false);
const route = useRoute();

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

const navLinks = [
  { name: "About", to: "/about" },
  { name: "Experience", to: "/experience" },
];

function toggleDarkMode() {
  isDark.value = !isDark.value;
}

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}
</script>

<template>
  <nav class="relative flex items-center justify-between px-6 py-3 border-b border-gray-200 dark:border-neutral-600">
    <RouterLink to="/" class="flex items-center space-x-2">
      <Logo />
    </RouterLink>

    <!-- Desktop Menu -->
    <div class="hidden md:flex items-center space-x-6 text-sm font-medium">
      <RouterLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="hover:text-accentText dark:hover:text-darkAccentText"
          :class="route.path === link.to ? 'text-linkText dark:text-darkLinkText font-semibold' : ''"
      >
        {{ link.name }}
      </RouterLink>

      <a
          href="/ThyssaDeKeyserResume.pdf" download
          class="px-3 py-1.5 rounded-xl bg-button text-black flex items-center gap-2 hover:bg-buttonHover"
      >
        Resume
        <AkDownload/>
      </a>

      <button @click="toggleDarkMode" class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800">
        <BsMoonFill v-if="isDark" class="w-5 h-5 -scale-x-100" />
        <FlFilledWeatherSunny v-else class="w-5 h-5" />
      </button>
    </div>

    <!-- Mobile Menu Button -->
    <div class="md:hidden flex items-center space-x-3">
      <button @click="toggleDarkMode" class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800">
        <BsMoonFill v-if="isDark" class="w-5 h-5 -scale-x-100" />
        <FlFilledWeatherSunny v-else class="w-5 h-5" />
      </button>

      <button @click="toggleMenu" class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800">
        <ByMenu v-if="!isMenuOpen" class="w-6 h-6" />
        <CdClose v-else class="w-6 h-6" />
      </button>
    </div>

    <!-- Mobile Dropdown Menu -->
    <Transition name="fade">
      <div
          v-if="isMenuOpen"
          class="absolute top-full right-0 mt-2 w-40 bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-xl shadow-lg flex flex-col text-sm font-medium z-50"
      >
        <RouterLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="px-4 py-2 hover:text-accentText dark:hover:text-darkAccentText"
            @click="isMenuOpen = false"
            :class="route.path === link.to ? 'text-linkText dark:text-darkLinkText font-semibold' : ''"
        >
          {{ link.name }}
        </RouterLink>

        <a
            href="/ThyssaDeKeyserResume.pdf" download
            class="px-4 py-2 hover:bg-gray-100 dark:hover:bg-neutral-700 flex items-center gap-2"
            @click="isMenuOpen = false"
        >
          Resume
          <AkDownload class="w-4 h-4"/>
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