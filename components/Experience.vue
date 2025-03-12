<template>
    <div class="container mx-auto px-4 py-12">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">Experience</h2>

        <div class="relative border-l-4 exp-bd">
            <div v-for="(experience, index) in experiences" :key="index" class="mb-10 ml-6">
                <div class="absolute w-6 h-6 exp-bd exp-bg rounded-full -left-3.5 border-4 border-white">
                </div>
                <div class="exp-bg p-6 rounded-lg shadow-md hover:shadow-xl transition">
                    <h3 class="text-xl font-semibold text-white">
                        {{ experience.title }}
                    </h3>
                    
                    <p class="text-gray-600">
                        <!-- :src="`${dev_tool.icon}`" -->
                        <img :src="`${company_logo.icon}`" :alt="company_logo.name">
                        {{ experience.company }} • {{ experience.duration }}</p>
                    <p class="text-gray-300 mt-2">{{ experience.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import racvertLogo from '/icons/racvert-logo.jpeg';

const company_logo = ref([
{ name: 'racvert logo', icon: '/icons/racvert-logo.jpeg' },
])

const experiences = ref([
    {
        title: "Full-Stack PHP Developer",
        company: "Racvert Ltd",
        duration: "2023 - 2025",
        description: "As a full-stack PHP Laravel developer, I designed, developed, and maintained dynamic web applications, ensuring optimal performance and scalability. My expertise includes backend development using Laravel, database management, and implementing RESTful APIs. On the frontend, I worked with different technologies for different projects such as Vanilla Javascript, jQuery, Ajax, Vue.js to create responsive and user-friendly interfaces. I collaborated with cross-functional teams to integrate third-party services, optimize application security, and streamline development processes. My role also involved troubleshooting issues, fix bugs, writing automated tests, writing clean and maintainable code, and deploying applications efficiently.",
    },
]);
</script>

<style scoped lang="scss">
/* Optional: Add custom styles here */

.exp-bg {
    background-color: $puce ;
}

.exp-bd {
    border-color: $puce;
}
</style>
