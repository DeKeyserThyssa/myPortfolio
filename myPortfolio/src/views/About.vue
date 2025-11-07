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
  <p class="pb-2 sm:mt-10">
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
    I’m particularly passionate about <span class="font-bold">Frontend Development</span>
    and enjoy crafting clean and accessible user experiences.
    I’m driven by a constant desire to learn, experiment, and refine my skills.
  </p>

  <p class="pb-2">
    Beyond coding, I enjoy spending time with my dog and gaming.
    I am also passionate about travel and had the opportunity to explore the
    IT landscape during a study trip to San Francisco, where I visited several tech companies.
    Additionally, during my experience at Granstudio,
    I frequently traveled to Turin, Italy, to collaborate closely with the team at their office.
  </p>

  <p class="pb-2">Below, you'll discover my skills:</p>

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