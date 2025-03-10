<template>
    <section id="skills" class="py-20 bg-gray-900 text-white">
      <div class="container mx-auto text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-8">Skills & Technologies</h2>
        
        <h3 class="text-left text-2xl sm:ms-4 mb-2">{ } Programming Languages</h3>
        <hr>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 d-flex">
          <div v-for="(language, index) in programing_languages" :key="language.name" 
               class="flex d-flex items-center opacity-0 transform translate-y-6 transition duration-700 delay-[index * 100]
                px-6 py-3 rounded-lg shadow-md bg-gray-800 
                hover:scale-110 hover:bg-gray-500 hover:shadow-xl"
               :class="{'opacity-100 translate-y-0': loaded}">
            <div class="me-2  transform transition duration-300 hover:scale-110 hover:bg-white hover:shadow-xl">
              <img :src="`${language.icon}`" :alt="language.name" class="w-5 h-5 transition duration-300 hover:scale-125">
            </div>
            <p class=" text-lg font-semibold transition duration-300 hover:text-blue-400">{{ language.name }}</p>
          </div>
        </div>

        <h3 class="mt-20 text-left text-2xl sm:ms-4 mb-2">{ } Frameworks & Technologies</h3>
        <hr>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 d-flex">
          <div v-for="(framework, index) in frameworks" :key="framework.name" 
               class="flex d-flex items-center opacity-0 transform translate-y-6 transition duration-700 delay-[index * 100]"
               :class="{'opacity-100 translate-y-0': loaded}">
            <div class="bg-gray-800 px-6 py-3 rounded-lg shadow-md transform transition duration-300 hover:scale-110 hover:bg-white hover:shadow-xl">
              <img :src="`${framework.icon}`" :alt="framework.name" class="w-10 h-10 transition duration-300 hover:scale-125">
            </div>
            <p class=" text-lg font-semibold transition duration-300 hover:text-blue-400">{{ framework.name }}</p>
          </div>
        </div>

        <h3 class="mt-20 text-left text-2xl sm:ms-4 mb-2">{ } Dev Tools</h3>
        <hr>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 d-flex">
          <div v-for="(dev_tool, index) in dev_tools" :key="dev_tool.name" 
               class="flex d-flex items-center opacity-0 transform translate-y-6 transition duration-700 delay-[index * 100]"
               :class="{'opacity-100 translate-y-0': loaded}">
            <div class="bg-gray-800 px-6 py-3 rounded-lg shadow-md transform transition duration-300 hover:scale-110 hover:bg-white hover:shadow-xl">
              <img :src="`${dev_tool.icon}`" :alt="dev_tool.name" class="w-10 h-10 transition duration-300 hover:scale-125">
            </div>
            <p class=" text-lg font-semibold transition duration-300 hover:text-white">{{ dev_tool.name }}</p>
          </div>
        </div>
       
        <h3 class="mt-20 text-left text-2xl sm:ms-4 mb-2">{ } Databases</h3>
        <hr>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 d-flex">
          <div v-for="(dev_tool, index) in databases" :key="dev_tool.name" 
               class="flex d-flex items-center opacity-0 transform translate-y-6 transition duration-700 delay-[index * 100]"
               :class="{'opacity-100 translate-y-0': loaded}">
            <div class="bg-gray-800 px-6 py-3 rounded-lg shadow-md transform transition duration-300 hover:scale-110 hover:bg-white hover:shadow-xl">
              <img :src="`${dev_tool.icon}`" :alt="dev_tool.name" class="w-10 h-10 transition duration-300 hover:scale-125">
            </div>
            <p class=" text-lg font-semibold transition duration-300 hover:text-white">{{ dev_tool.name }}</p>
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

  ]);
  
  const frameworks = ref([
    { name: 'Vue.js', icon: '/icons/frameworks/vue.svg' },
    { name: 'Nuxt.js', icon: '/icons/frameworks/nuxt.svg' },
    { name: 'Laravel', icon: '/icons/frameworks/laravels.svg' },
    { name: 'Tailwind CSS', icon: '/icons/frameworks/tailwindcss.svg' },
    { name: 'React.js', icon: '/icons/frameworks/react.svg' },
    { name: 'Spring Boot', icon: '/icons/frameworks/spring.svg' },
    { name: '.NET', icon: '/icons/frameworks/dotnet.svg' },
    { name: 'Bootstrap', icon: '/icons/frameworks/bootstrap.svg' },
    { name: 'Nodejs', icon: '/icons/frameworks/nodejs.svg' },
    { name: 'jQuery', icon: '/icons/frameworks/jquery.svg' },
    { name: 'WordPress', icon: '/icons/frameworks/wordpress.svg' },
  ]);


  const dev_tools = ref([
    { name: 'Postman', icon: '/icons/dev-tools/postman.svg' },
    { name: 'VScode', icon: '/icons/dev-tools/vscode.svg' },
    { name: 'Visual Studio', icon: '/icons/dev-tools/visualstudio.svg' },
    { name: 'Netbeans', icon: '/icons/dev-tools/netbeans.svg.png' },
    { name: 'Lucidchart', icon: '/icons/dev-tools/lucidchart-icon.svg' },
    { name: 'Bitbucket', icon: '/icons/dev-tools/bitbucket.svg' },
    { name: 'Jira', icon: '/icons/dev-tools/jira.svg' },
  ]);

  const databases = ref([
    { name: 'Mysql', icon: '/icons/databases/mysql.svg' },
    { name: 'Firebase', icon: '/icons/databases/firebase.svg' },
  ]);


  const loaded = ref(false);
  
  onMounted(() => {
    setTimeout(() => {
      loaded.value = true;
    }, 300);
  });
  </script>
  
  <style scoped lang="scss">
    /* Add any additional styles if needed */

    .skill-lang{
      background-color: $columbia-blue;
    }

    .skill-lang-text{
      color: $russian-violet;
    }
  </style>
  


