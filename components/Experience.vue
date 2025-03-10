<template>
    <div class="container mx-auto px-4 py-12">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">Experience</h2>
  
      <div class="relative border-l-4 exp-bd">
        <div
          v-for="(experience, index) in experiences"
          :key="index"
          class="mb-10 ml-6"
        >
          <div
            class="absolute w-6 h-6 exp-bg rounded-full -left-3.5 border-4 border-white"
          ></div>
          <div class="exp-bg p-6 rounded-lg shadow-md hover:shadow-xl transition">
            <h3 class="text-xl font-semibold text-white">
              {{ experience.title }}
            </h3>
            <p class="text-gray-600">{{ experience.company }} • {{ experience.duration }}</p>
            <p class="text-gray-300 mt-2">{{ experience.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        experiences: [
          {
            title: "Software Developer",
            company: "TechCorp Inc.",
            duration: "2022 - Present",
            description: "Developed and maintained enterprise applications using Vue.js and Laravel.",
          },
          {
            title: "Frontend Developer",
            company: "Web Solutions Ltd.",
            duration: "2020 - 2022",
            description: "Built modern web interfaces using Vue.js, Nuxt.js, and TailwindCSS.",
          },
          {
            title: "Intern Developer",
            company: "Startup Hub",
            duration: "2019 - 2020",
            description: "Worked on various projects involving Vue.js, APIs, and UI/UX improvements.",
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped lang="scss">
  /* Optional: Add custom styles here */

.exp-bg{
    background-color: $puce ;
}

.exp-bd{
    border-color: $puce;
}
  </style>
  