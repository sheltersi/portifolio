<template>
    <div class="container mx-auto px-4 py-12">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">Projects</h2>
  
      <div class="overflow-x-auto whitespace-nowrap flex space-x-6 px-6 py-4">
        <div 
          v-for="(project, index) in projects" 
          :key="index" 
          class="w-64 min-w-[250px] bg-gray-900 rounded-lg shadow-md p-4 hover:shadow-xl transition"
        >
          <img :src="project.image" :alt="project.title" class="w-full h-40 object-cover rounded-md mb-4">
          <h3 class="text-lg font-semibold text-white">{{ project.title }}</h3>
          <p class="text-gray-400">{{ project.description }}</p>
          <a :href="project.link" target="_blank" class="mt-3 inline-block text-blue-400 hover:text-blue-300">View Project →</a>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        projects: [
          { title: "Project 1", description: "Description here", image: "https://via.placeholder.com/300", link: "#" },
          { title: "Project 2", description: "Description here", image: "https://via.placeholder.com/300", link: "#" },
          { title: "Project 3", description: "Description here", image: "https://via.placeholder.com/300", link: "#" },
          { title: "Project 4", description: "Description here", image: "https://via.placeholder.com/300", link: "#" },
          { title: "Project 5", description: "Description here", image: "https://via.placeholder.com/300", link: "#" },
          { title: "Project 6", description: "Description here", image: "https://via.placeholder.com/300", link: "#" },
          { title: "Project 7", description: "Description here", image: "https://via.placeholder.com/300", link: "#" },
          { title: "Project 8", description: "Description here", image: "https://via.placeholder.com/300", link: "#" },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  /* Optional smooth scrolling */
  .overflow-x-auto::-webkit-scrollbar {
    display: none;
  }
  </style>
  