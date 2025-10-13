<script setup>
import { ref } from "vue";
import FlagIcon from "@/components/FlagIcon.vue";
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiChevronUp, mdiChevronDown } from "@mdi/js";

const props = defineProps({
  title: String,
  company: String,
  period: String,
  details: {
    type: Array,
    default: () => [],
  },
  place: {
    type: Array,
    default: () => [],
  },
});

const open = ref(false);
const toggle = () => (open.value = !open.value);
</script>

<template>
  <div class="bg-card dark:bg-darkCard rounded-2xl shadow-md p-4 mb-4 transition-all duration-300">
    <div class="flex justify-between items-center cursor-pointer" @click="toggle">
      <div>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">
          {{ title }}
        </h3>
        <p class="text-sm text-gray-600 dark:text-gray-200">
          {{ company }} • {{ period }}
          <span v-if="place.length"> • </span>
          <span v-for="(p, i) in place" :key="i" class="inline-flex items-center space-x-1">
            <FlagIcon :code="p.countryCode" />
            <span>{{ p.city }}</span>
            <span v-if="i < place.length - 1" class="pr-1">&</span>
          </span>
        </p>
      </div>
      <SvgIcon v-if="open" type="mdi" :path="mdiChevronUp" class="w-5 h-5"/>
      <SvgIcon v-else type="mdi" :path="mdiChevronDown" class="w-5 h-5"/>
    </div>

    <transition name="fade">
      <div
          v-if="open"
          class="mt-3 border-t border-gray-200 dark:border-gray-700 pt-3 text-gray-700 dark:text-gray-200"
      >
        <ul class="list-disc pl-5 space-y-2">
          <li v-for="(item, index) in details" :key="index">{{ item }}</li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>