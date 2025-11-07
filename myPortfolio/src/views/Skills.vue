<script setup>
  const frontendSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Vue",
    "Tailwind CSS",
    "React",
    "TypeScript",
    "React Native",
    "SCSS / SASS",
    "Astro",
  ];

  const designSkills = [
    "Adobe XD",
    "Figma",
    "ProtoPie",
    "Illustrator",
    "Photoshop",
    "After Effects",
    "Premiere Pro",
  ];

  const backendSkills = ["ASP.NET", "C#", "NestJS", "MongoDB", "MySQL", "Docker"];

  const personalSkills = [
    "Eager to learn",
    "Patient",
    "Team player",
    "Creative",
    "Flexible",
    "Stress resistant",
    "Responsible",
    "Organized",
  ];

  const otherSkills = [
    "Git",
    "GitHub / GitLab",
    "Microsoft Office",
    "Azure",
    "Jira",
    "Confluence",
    "Agile",
    "Scrum",
  ];
</script>

<template>
  <h2 class="text-2xl font-bold mb-6 sm:mt-10">Skills</h2>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div>
      <h2 class="font-bold text-accentText dark:text-darkAccentText mb-2">Frontend</h2>
      <ul>
        <li v-for="skill in frontendSkills" :key="skill" class="text-accentText dark:text-darkAccentText font-semibold uppercase">
          {{ skill }}
        </li>
      </ul>
    </div>

    <div>
      <h2 class="font-bold text-accentText dark:text-darkAccentText mb-2">Design</h2>
      <ul>
        <li v-for="skill in designSkills" :key="skill" class="text-accentText dark:text-darkAccentText font-semibold uppercase">
          {{ skill }}
        </li>
      </ul>
    </div>

    <div>
      <h2 class="font-bold text-accentText dark:text-darkAccentText mb-2">Backend</h2>
      <ul>
        <li v-for="skill in backendSkills" :key="skill" class="text-accentText dark:text-darkAccentText font-semibold uppercase">
          {{ skill }}
        </li>
      </ul>
    </div>

    <div>
      <h2 class="font-bold text-accentText dark:text-darkAccentText mb-2">Other Skills</h2>
      <ul>
        <li v-for="skill in otherSkills" :key="skill" class="text-accentText dark:text-darkAccentText font-semibold uppercase">
          {{ skill }}
        </li>
      </ul>
    </div>

    <div>
      <h2 class="font-bold text-accentText dark:text-darkAccentText mb-2">Personal Skills</h2>
      <ul>
        <li v-for="skill in personalSkills" :key="skill" class="text-accentText dark:text-darkAccentText font-semibold uppercase">
          {{ skill }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>

</style>