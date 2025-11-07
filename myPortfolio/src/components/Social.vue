<script setup>
  import {computed} from "vue";
  import { AkGithubFill, AkLinkedinBoxFill } from '@kalimahapps/vue-icons';

  const props =  defineProps({
    platform: String,
    username: String
  })

  const platformIcons = {
    github: AkGithubFill,
    linkedin: AkLinkedinBoxFill,
  };
  const iconPath = platformIcons[props.platform.toLowerCase()];

  const profileUrl = computed(() => `https://www.${props.platform}.com/${props.username}`)
</script>

<template>
  <a :href="profileUrl" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2">
    <component v-if="iconPath" :is="iconPath" class="w-5 h-5"/>
    <span class="capitalize">{{ props.platform }}</span>
  </a>
</template>

<style scoped>

</style>