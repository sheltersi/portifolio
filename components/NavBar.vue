<template>
    <nav class="fixed top-0 left-0 right-0 z-50 bg-white/30 backdrop-blur-md shadow-lg p-4">
      <div class="container mx-auto flex justify-between items-center">
        <!-- Logo -->
        <div class="text-2xl font-semibold text-blue-900">
          <span>Shelter Sibanda</span>
        </div>
  
        <!-- Navigation Links -->
        <div class="space-x-6">
          <NuxtLink to="/" class="text-blue-900 hover:text-green-400">Home</NuxtLink>
          <NuxtLink to="#hero-section" class="text-blue-900 hover:text-green-400">About Me</NuxtLink>
          <NuxtLink to="#experience" class="text-blue-900 hover:text-green-400">Experience</NuxtLink>
          <NuxtLink to="#skills-section" class="text-blue-900 hover:text-green-400">Skills</NuxtLink>
          <NuxtLink to="#projects-section" class="text-blue-900 hover:text-green-400">Projects</NuxtLink>

        </div>
      </div>
    </nav>
  </template>
  
  <script setup>
  // No additional JavaScript needed for this simple Navbar.
  </script>
  
  <style scoped>
  /* Any additional scoped styles can go here */
  </style>
  