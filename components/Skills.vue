<template>
    <section id="skills" class="py-20 bg-gray-900 text-white">
      <div class="container mx-auto text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-8">Skills & Technologies</h2>
        
        <h3>{} Programming Languages</h3>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 d-flex">
          <div v-for="(language, index) in programing_languages" :key="language.name" 
               class="flex d-flex items-center opacity-0 transform translate-y-6 transition duration-700 delay-[index * 100]"
               :class="{'opacity-100 translate-y-0': loaded}">
            <div class="bg-gray-800 px-6 py-3 rounded-lg shadow-md transform transition duration-300 hover:scale-110 hover:bg-blue-500 hover:shadow-xl">
              <img :src="`${language.icon}`" :alt="language.name" class="w-10 h-10 transition duration-300 hover:scale-125">
            </div>
            <p class=" text-lg font-semibold transition duration-300 hover:text-blue-400">{{ language.name }}</p>
          </div>
        </div>

        <h3 class="mt-20">{} Frameworks & Technologies</h3>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 d-flex">
          <div v-for="(framework, index) in frameworks" :key="framework.name" 
               class="flex d-flex items-center opacity-0 transform translate-y-6 transition duration-700 delay-[index * 100]"
               :class="{'opacity-100 translate-y-0': loaded}">
            <div class="bg-gray-800 px-6 py-3 rounded-lg shadow-md transform transition duration-300 hover:scale-110 hover:bg-blue-500 hover:shadow-xl">
              <img :src="`${framework.icon}`" :alt="framework.name" class="w-10 h-10 transition duration-300 hover:scale-125">
            </div>
            <p class=" text-lg font-semibold transition duration-300 hover:text-blue-400">{{ framework.name }}</p>
          </div>
        </div>
       
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const programing_languages = ref([
    { name: 'PHP', icon: '/icons/php.svg' },
    { name: 'Javascript', icon: '/icons/javascript.svg' },
    { name: 'C++', icon: '/icons/c++.svg' },
    { name: 'VB.Net', icon: '/icons/vbnet.svg' },
    { name: 'Java', icon: '/icons/java.svg' },
    { name: 'C#', icon: '/icons/csharp.svg' },
    { name: 'WordPress', icon: '/icons/wordpress.svg' },
  ]);
  
  const frameworks = ref([
    { name: 'Vue.js', icon: '/icons/frameworks/vuejs.svg' },
    { name: 'Nuxt.js', icon: '/icons/frameworks/nuxtjs.svg' },
    { name: 'Laravel', icon: '/icons/frameworks/laravels.svg' },
    { name: 'Tailwind CSS', icon: '/icons/frameworks/tailwindcss.svg' },
    { name: 'React.js', icon: '/icons/frameworks/reactjs.svg' },
    { name: 'Spring Boot', icon: '/icons/frameworks/springboot.svg' },
    { name: '.NET', icon: '/icons/frameworks/dotnet.svg' },
    { name: 'WordPress', icon: '/icons/frameworks/wordpress.svg' },
  ]);
  const loaded = ref(false);
  
  onMounted(() => {
    setTimeout(() => {
      loaded.value = true;
    }, 300);
  });
  </script>
  
  <style scoped>
    /* Add any additional styles if needed */
  </style>
  