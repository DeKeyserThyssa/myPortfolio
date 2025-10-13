<script setup>
const props = defineProps({
  code: { type: String, required: true }
})
</script>

<template>
  <span :class="`fi fi-${code.toLowerCase()}`" class="inline-block w-5 h-3"></span>
</template>

<style scoped>

</style>