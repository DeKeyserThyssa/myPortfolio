<script setup>
  import {computed} from "vue";
  import SvgIcon from "@jamescoyle/vue-icon";
  import { mdiGithub, mdiLinkedin } from "@mdi/js";

  const props =  defineProps({
    platform: String,
    username: String
  })

  const platformIcons = {
    github: mdiGithub,
    linkedin: mdiLinkedin,
  };
  const iconPath = platformIcons[props.platform.toLowerCase()];

  const profileUrl = computed(() => `https://www.${props.platform}.com/${props.username}`)
</script>

<template>
  <a :href="profileUrl" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2">
    <SvgIcon v-if="iconPath" type="mdi" :path="iconPath" class="w-5 h-5" />
    <span class="capitalize">{{ props.platform }}</span>
  </a>
</template>

<style scoped>

</style>