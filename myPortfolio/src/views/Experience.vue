<script setup>
import ExperienceCard from "@/components/ExperienceCard.vue";

const workExperiences = [
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
    title: "Internship Frontend Developer & Designer",
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
const educations = [
  {
    title: "Multimedia & Creative Technologies",
    company: "Howest",
    period: "2019 - 2023",
    place: [
      { countryCode: "be", city: "Kortrijk" },
    ],
  },
  {
    title: "Business education - Secondary Education",
    company: "Groenhove",
    period: "2017 - 2019",
    place: [
      { countryCode: "be", city: "Waregem" },
    ],
  },
];
</script>

<template>
  <section class="max-w-2xl mx-auto sm:mt-10">
    <h2 class="text-2xl font-bold mb-6">Work experience</h2>

    <ExperienceCard
        v-for="(exp, index) in workExperiences"
        :key="index"
        :title="exp.title"
        :company="exp.company"
        :period="exp.period"
        :place="exp.place"
        :details="exp.details"
    />
  </section>

  <section class="max-w-2xl mx-auto mt-10">
    <h2 class="text-2xl font-bold mb-6">Education</h2>

    <ExperienceCard
        v-for="(exp, index) in educations"
        :key="index"
        :title="exp.title"
        :company="exp.company"
        :period="exp.period"
        :place="exp.place"
    />
  </section>
</template>

<style scoped>

</style>