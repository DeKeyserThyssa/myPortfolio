<script setup>
const navLinks = [
  { name: "Experience", to: "/experience" },
  { name: "Skills", to: "/skills" },
];
</script>

<template>
  <h2 class="text-2xl font-bold mb-6 sm:mt-10">About me</h2>

  <p class="pb-2">
    Hi, I’m <span class="font-bold">Thyssa</span>,
    a Full-Stack Developer with over two years of professional experience
    in building scalable and user-focused digital solutions.
    I hold a degree in
    <a href="https://mct.be/"
    ><span class="font-bold text-linkText dark:text-darkLinkText hover:underline">MCT (Multimedia & Creative Technologies)</span></a
    >
    from Howest University in Kortrijk.
  </p>

  <p class="pb-2">
    I’m passionate about <span class='font-bold'>Frontend Development</span>
    and enjoy crafting clean, accessible user experiences.
    I’m always eager to learn, experiment, and refine my skills.
  </p>

  <p class="pb-2">
    Beyond coding, I enjoy spending time with my dog and gaming.
    I am also passionate about travel and had the opportunity to explore the
    IT landscape during a study trip to San Francisco, where I visited several tech companies.
    During my time at Granstudio, I frequently traveled to Turin, Italy, to collaborate closely with the team.
  </p>

  <p class="pb-2">You can also explore more about me:</p>
  <ul class="list-disc pl-5 space-y-1">
    <li v-for="link in navLinks" :key="link.to">
      <RouterLink
          :to="link.to"
          :title="link.name"
          class="font-bold text-linkText dark:text-darkLinkText hover:underline"
      >
        {{ link.name }}
      </RouterLink>
    </li>
  </ul>
</template>

<style scoped>
</style>