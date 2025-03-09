<script setup>
import { ref, onMounted } from 'vue';

const hero = ref(null);

// const hero = ref(null);
const skillTypedText = ref("");
const titles = [
  "Laravel & Vue.js Enthusiast",
  "React.js Developer",
  "Java Developer",
  "Spring Boot Developer",
  "Junior C# Developer"
];

let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
  const currentTitle = titles[titleIndex];

  if (!isDeleting) {
    // Typing effect
    skillTypedText.value = currentTitle.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentTitle.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1500); // Wait before deleting
    } else {
      setTimeout(typeEffect, 100);
    }
  } else {
    // Deleting effect
    skillTypedText.value = currentTitle.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      titleIndex = (titleIndex + 1) % titles.length; // Move to next title
      setTimeout(typeEffect, 500);
    } else {
      setTimeout(typeEffect, 50);
    }
  }
};

onMounted(() => {
  setTimeout(typeEffect, 500); // Start typing effect
  setTimeout(() => {
    hero.value?.classList.remove("opacity-0", "translate-y-10");
  }, 500);
});

const text = "Shelter";
const typedText = ref("");
let index = 0;

onMounted(() => {
  const typing = setInterval(() => {
    if (index < text.length) {
      typedText.value += text[index];
      index++;
    } else {
      clearInterval(typing);
    }
  }, 150); // Speed of typing
  setTimeout(() => {
    hero.value?.classList.remove("opacity-0", "translate-y-10");
  }, 500);
});


</script>

<template>
    <section class="relative w-full h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800 text-white">
   
    <div class=" text-center ">
        <h1 class="text-4xl md:text-6xl font-bold">Hi, I'm
             <!-- <span class="text-blue-400">Shelter</span> -->
             <span class="text-blue-400">{{ typedText }}</span>
            </h1>
        <p class="text-lg md:text-2xl mt-4">Full-Stack Developer | {{ skillTypedText }}</p>
        
        <div class="mt-6 flex justify-center space-x-4">
          <a href="#projects" class="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-md">View My Work</a>
          <a href="mailto:your@email.com" class="px-6 py-3 border border-gray-400 hover:bg-gray-700 rounded-lg">Hire Me</a>
        </div>
  
        <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <p class="text-sm text-gray-300">Scroll down to see my work ↓</p>
        </div>
      </div>
    </section>
  </template>
  
  <style scoped>
  /* Optional: Add some fade-in animation */
  </style>
  