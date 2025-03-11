<!-- <template>
    <section id="skills" class="py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div class="container mx-auto text-center px-6">
        <h2 class="text-4xl font-bold mb-12">Skills & Technologies</h2>
  
        <div v-for="(category, index) in skillCategories" :key="index" class="mb-16">
          <h3 class="text-left text-2xl font-semibold mb-4 relative pl-6 before:absolute before:left-0 before:top-2 before:w-4 before:h-4 before:bg-blue-400 before:rounded-full">
            {{ category.title }}
          </h3>
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            <div v-for="(item, i) in category.items" :key="item.name" 
                 class="flex flex-col items-center bg-white bg-opacity-10 backdrop-blur-lg p-4 rounded-xl shadow-lg transition transform duration-300 hover:scale-110 hover:bg-opacity-20">
              <img :src="item.icon" :alt="item.name" class="w-12 h-12 mb-2 transition duration-300 hover:scale-125">
              <p class="text-lg font-medium">{{ item.name }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const skillCategories = ref([
    {
      title: '{ } Programming Languages',
      items: [
        { name: 'PHP', icon: '/icons/php.svg' },
        { name: 'JavaScript', icon: '/icons/javascript.svg' },
        { name: 'C++', icon: '/icons/c++.svg' },
        { name: 'VB.Net', icon: '/icons/vbnet.svg' },
        { name: 'Java', icon: '/icons/java.svg' },
        { name: 'C#', icon: '/icons/csharp.svg' }
      ]
    },
    {
      title: '{ } Frameworks & Technologies',
      items: [
        { name: 'Vue.js', icon: '/icons/frameworks/vue.svg' },
        { name: 'Nuxt.js', icon: '/icons/frameworks/nuxt.svg' },
        { name: 'Laravel', icon: '/icons/frameworks/laravels.svg' },
        { name: 'React.js', icon: '/icons/frameworks/react.svg' },
        { name: 'Spring Boot', icon: '/icons/frameworks/spring.svg' },
        { name: '.NET', icon: '/icons/frameworks/dotnet.svg' }
      ]
    },
    {
      title: '{ } Dev Tools',
      items: [
        { name: 'Postman', icon: '/icons/dev-tools/postman.svg' },
        { name: 'VScode', icon: '/icons/dev-tools/vscode.svg' },
        { name: 'Bitbucket', icon: '/icons/dev-tools/bitbucket.svg' },
        { name: 'Jira', icon: '/icons/dev-tools/jira.svg' }
      ]
    },
    {
      title: '{ } Databases',
      items: [
        { name: 'MySQL', icon: '/icons/databases/mysql.svg' },
        { name: 'Firebase', icon: '/icons/databases/firebase.svg' }
      ]
    }
  ]);
  </script>
  
  <style scoped>
  /**** Modern Styling with Glassmorphism ****/
  </style>
   -->
   <template>
    <section id="skills" class="py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div class="container mx-auto text-center px-6">
        <h2 class="text-4xl font-bold mb-12">Skills & Technologies</h2>
  
        <div v-for="(category, index) in skillCategories" :key="index" class="mb-16">
          <h3 class="text-left text-2xl font-semibold mb-4 relative pl-6 before:absolute before:left-0 before:top-2 before:w-4 before:h-4 before:bg-blue-400 before:rounded-full">
            {{ category.title }}
          </h3>
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            <div v-for="(item, i) in category.items" :key="item.name" 
                 class="flex flex-col items-center bg-gray-800 p-4 rounded-xl shadow-lg transition transform duration-300 hover:scale-110 hover:bg-gray-700">
              <img :src="item.icon" :alt="item.name" class="w-12 h-12 mb-2 transition duration-300 hover:scale-125">
              <p class="text-lg font-medium">{{ item.name }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const skillCategories = ref([
    {
      title: '{ } Programming Languages',
      items: [
        { name: 'PHP', icon: '/icons/php.svg' },
        { name: 'JavaScript', icon: '/icons/javascript.svg' },
        { name: 'C++', icon: '/icons/c++.svg' },
        { name: 'VB.Net', icon: '/icons/vbnet.svg' },
        { name: 'Java', icon: '/icons/java.svg' },
        { name: 'C#', icon: '/icons/csharp.svg' }
      ]
    },
    {
      title: '{ } Frameworks & Technologies',
      items: [
        { name: 'Vue.js', icon: '/icons/frameworks/vue.svg' },
        { name: 'Nuxt.js', icon: '/icons/frameworks/nuxt.svg' },
        { name: 'Laravel', icon: '/icons/frameworks/laravels.svg' },
        { name: 'React.js', icon: '/icons/frameworks/react.svg' },
        { name: 'Spring Boot', icon: '/icons/frameworks/spring.svg' },
        { name: '.NET', icon: '/icons/frameworks/dotnet.svg' }
      ]
    },
    {
      title: '{ } Dev Tools',
      items: [
        { name: 'Postman', icon: '/icons/dev-tools/postman.svg' },
        { name: 'VScode', icon: '/icons/dev-tools/vscode.svg' },
        { name: 'Bitbucket', icon: '/icons/dev-tools/bitbucket.svg' },
        { name: 'Jira', icon: '/icons/dev-tools/jira.svg' }
      ]
    },
    {
      title: '{ } Databases',
      items: [
        { name: 'MySQL', icon: '/icons/databases/mysql.svg' },
        { name: 'Firebase', icon: '/icons/databases/firebase.svg' }
      ]
    }
  ]);
  </script>
  