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
  { name: "Skills", to: "/skills" },
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
          :title="link.name"
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
    <button @click="toggleMenu" class="md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800">
      <ByMenu v-if="!isMenuOpen" class="w-6 h-6" />
      <CdClose v-else class="w-6 h-6" />
    </button>

    <!-- Mobile Menu -->
    <Transition name="slide">
      <div v-if="isMenuOpen" class="fixed inset-0 z-50 flex">
        <div
            class="w-[90vw] bg-white dark:bg-neutral-900 h-full shadow-xl p-4 flex flex-col space-y-6"
        >
          <div class="flex justify-between items-center">
            <div class="flex gap-4 items-center">
              <RouterLink to="/" @click="isMenuOpen = false">
                <Logo />
              </RouterLink>

              <button @click="toggleDarkMode" class="p-2 rounded-full">
                <BsMoonFill v-if="isDark" class="w-5 h-5 -scale-x-100" />
                <FlFilledWeatherSunny v-else class="w-5 h-5" />
              </button>
            </div>

            <button @click="toggleMenu" class="p-2 rounded-full">
              <CdClose class="w-6 h-6" />
            </button>
          </div>
          <div class="flex flex-col space-y-4 mt-4">
            <RouterLink
                v-for="link in navLinks"
                :key="link.to"
                :to="link.to"
                :title="link.name"
                @click="isMenuOpen = false"
                class="py-2 px-3 text-lg border border-gray-200 dark:border-neutral-700 rounded-xl transition"
                :class="route.path === link.to ? 'text-linkText dark:text-darkLinkText font-semibold border-accentText dark:border-darkAccentText' : ''"
            >
              {{ link.name }}
            </RouterLink>
            <a
                href="/ThyssaDeKeyserResume.pdf" download
                @click="isMenuOpen = false"
                class="flex items-center gap-2 bg-button text-black py-2 px-3 text-lg rounded-xl"
            >
              Resume
              <AkDownload class="w-5 h-5" />
            </a>
          </div>
        </div>
        <div class="flex-1 bg-black/40 backdrop-blur-sm" @click="isMenuOpen = false"></div>
      </div>
    </Transition>

  </nav>
</template>


<style>
/* Sidebar Slide Animation */
.slide-enter-from .w-64,
.slide-leave-to .w-64 {
  transform: translateX(-100%);
}

.slide-enter-active .w-64,
.slide-leave-active .w-64 {
  transition: transform 0.3s ease;
}
</style>