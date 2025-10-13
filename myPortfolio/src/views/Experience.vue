<script setup>
import ExperienceCard from "@/components/ExperienceCard.vue";

const experiences = [
  {
    title: "Junior Software Developer",
    company: "Tailormade Logistics",
    period: "11/2024 - Present",
    place: [
      { countryCode: "be", city: "Destelbergen" },
      { countryCode: "be", city: "Izegem" },
    ],
    details: [
      "Developed features for Thimble, a web app that helps planners organize trips and warehouse staff scan barcodes.",
      "Frontend Development: Vue.js, Tailwind CSS and TypeScript.",
      "Backend Development: C#.",
      "Scrum working with daily stand-ups."
    ],
  },
  {
    title: "R&D Frontend Developer",
    company: "Granstudio",
    period: "11/2023 - 07/2024",
    place: [
      { countryCode: "be", city: "Kortrijk" },
      { countryCode: "it", city: "Turin" },
    ],
    details: [
      "Contributed to the DigiPHY project for clients such as Lynk & Co (Geely) & Renault.",
      "Handled frontend development using Vue.js, Tailwind CSS and JavaScript.",
      "Designed interfaces with Figma for the DigiPHY project.",
      "Participating in design review with clients",
      "Gained experience with Unreal Engine and ProtoPie, expanding my skill set",
      "Worked Agile with Jira in two-week sprints"
    ],
  },
  {
    title: "Internship Frontend Developer",
    company: "Sweet Mustard",
    period: "02/2023 - 06/2023",
    place: [
      { countryCode: "be", city: "Kortrijk" },
    ],
    details: [
      "Worked in an Agile environment with daily scrums and one-week sprints.",
      "Developed an internal project using React.",
      "Designed interfaces with Figma for the project."
    ],
  },
];
</script>

<template>
  <section class="max-w-2xl mx-auto mt-10">
    <h2 class="text-2xl font-bold mb-6">Experience</h2>

    <ExperienceCard
        v-for="(exp, index) in experiences"
        :key="index"
        :title="exp.title"
        :company="exp.company"
        :period="exp.period"
        :place="exp.place"
        :details="exp.details"
    />
  </section>
</template>

<style scoped>

</style>