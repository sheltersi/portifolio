<template>
  <div class="container mx-auto px-4 py-4">
    <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">Projects</h2>

    <div class="overflow-x-auto whitespace-nowrap flex space-x-6 px-6 py-4">
      <div v-for="(project, index) in projects" :key="index"
        class="h-160 w-64 min-w-[650px] bg-gray-900 rounded-lg shadow-md p-4 hover:shadow-xl transition">
        <img :src="project.image" :alt="project.title" class="w-full h-80 object-cover rounded-md mb-4">
        <h3 class="text-lg font-semibold text-white">{{ project.title }}</h3>
        <p class="text-gray-400 text-ellipsis">{{ project.description }}</p>
        <a :href="project.link" target="_blank" class="mt-3 inline-block text-blue-400 hover:text-blue-300">View Project
          →</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const projects = ref([
  {
    title: "Laravel Job Posts",
    description: "Our Job Posting & Application System is a powerful Laravel-based platform that connects job seekers with hiring managers efficiently. Hiring managers can post job openings with detailed descriptions, requirements, and deadlines, while job seekers can browse listings and apply for positions that match their skills.",
    image: "/projects-images/lara-gigs.jpeg",
    link: "#"
  },
  {
    title: "Landing Page",
    description: "This responsive landing page is built using HTML, Tailwind CSS, and JavaScript, designed to deliver a modern and seamless user experience across all devices. With a clean and minimalistic layout, it adapts effortlessly to different screen sizes, ensuring readability and accessibility. Tailwind CSS provides a utility-first approach for efficient styling, while JavaScript adds interactivity, enhancing user engagement through smooth animations and dynamic elements. Optimized for performance, this landing page loads quickly and delivers a polished, professional look—ideal for businesses, startups, and personal portfolios seeking a sleek online presence. 🚀",
    image: "/projects-images/landing-page.jpeg",
    link: "#"
  },
  {
    title: "Doctor Consultation System",
    description: "This doctor appointment system is built using Laravel, Blade, JavaScript, and Tailwind CSS, offering a seamless and efficient way to manage medical appointments. Designed for both patients and healthcare providers, the system provides an intuitive interface for booking, rescheduling, and managing appointments in real time. Laravel powers the backend with robust authentication and database management, while Blade templates ensure dynamic and reusable UI components. Tailwind CSS enhances the design with a modern, responsive layout, and JavaScript adds interactivity for a smooth user experience. This system streamlines the appointment process, improving accessibility and efficiency for both doctors and patients. 🏥✨",
    image: "/projects-images/doc-dashboard.jpeg",
    link: "#"
  },
  // { title: "Project 4", description: "Description here", image: "https://via.placeholder.com/300", link: "#" },
]);
</script>

<style scoped>
/* Hide scrollbar for smooth scrolling */
.overflow-x-auto::-webkit-scrollbar {
  display: none;
}

/* Ensures text does not overflow */
/* p {
  display: -webkit-box;
  -webkit-line-clamp: 3; 
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
} */


p {
  white-space: normal;
  /* Allows text to wrap naturally */
  word-wrap: break-word;
  /* Ensures long words break properly */
  overflow-wrap: break-word;
  /* Alternative for better word handling */
  max-width: 100%;
  /* Ensures the paragraph stays within its container */
}
</style>
