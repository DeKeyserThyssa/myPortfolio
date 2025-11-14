<script setup>

const skillSections = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
      { name: "Vue" },
      { name: "Tailwind CSS" },
      { name: "React" },
      { name: "TypeScript" },
      { name: "React Native" },
      { name: "SCSS / SASS" },
      { name: "Astro" }
    ]
  },
  {
    title: "Design",
    skills: [
      { name: "Adobe XD" },
      { name: "Figma" },
      { name: "ProtoPie" },
      { name: "Illustrator" },
      { name: "Photoshop" },
      { name: "After Effects" },
      { name: "Premiere Pro" }
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "ASP.NET" },
      { name: "C#" },
      { name: "Python" },
      { name: "NestJS" },
      { name: "Node.js" },
      { name: "MongoDB" },
      { name: "MySQL" }
    ]
  },
  {
    title: "Tools / IDEs",
    skills: [
      { name: "VSCode" },
      { name: "Visual Studio" },
      { name: "WebStorm" },
      { name: "PyCharm" },
      { name: "Git" },
      { name: "GitHub" }
    ]
  },
  {
    title: "DevOps / Cloud",
    skills: [
      { name: "Azure" },
      { name: "Netlify" },
      { name: "Docker" }
    ]
  },
  {
    title: "Personal Skills",
    skills: [
      { name: "Eager to learn" },
      { name: "Patient" },
      { name: "Team player" },
      { name: "Creative" },
      { name: "Flexible" },
      { name: "Stress resistant" },
      { name: "Responsible" },
      { name: "Organized" }
    ]
  }
];
</script>

<template>
  <section class="sm:mt-10">
    <h2 class="text-2xl font-bold mb-6">Skills</h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
          v-for="(section, index) in skillSections"
          :key="index"
          class="bg-card dark:bg-darkCard rounded-2xl shadow-md p-5 transition-all duration-300 hover:shadow-lg"
      >
        <h3 class="text-lg font-semibold mb-3 text-accentText dark:text-darkAccentText">
          {{ section.title }}
        </h3>

        <ul class="flex flex-wrap gap-2">
          <li
              v-for="skill in section.skills"
              :key="skill.name"
              class="px-3 py-1 text-sm font-medium rounded-full transition-colors duration-200
             bg-button hover:bg-buttonHover
             dark:bg-[#3f4938] dark:hover:bg-[#55644d]  flex items-center gap-1"
          >
            {{ skill.name }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>