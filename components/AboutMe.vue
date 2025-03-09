<script setup>
import { ref } from 'vue';
const expanded = ref(false);
</script>


<template>
    <section id="about" class="py-20 text-dark">
        <div class="container mx-auto flex flex-col md:flex-row items-center text-center md:text-left">
            <!-- Image Section (Centered on Small, Right on Large) -->
            <div class="flex justify-center md:w-1/3 mb-6 md:mb-0">
                <img src="/professional-image-2.jpeg" alt="Shelter"
                    class="w-60 h-60 rounded-full object-cover shadow-lg">
            </div>

            <!-- Text Content -->
            <div class="md:w-2/3">
                <h2 class="text-3xl md:text-4xl font-bold mb-6 about-me">
                    <span class="tags"><</span> Code Alchemy <span class="tags">/></span> Where Innovation Meets Precision ⚡
                </h2>
                <p class="text-lg md:text-xl max-w-2xl about-me-text">
                    I'm Shelter – a problem-solver who turns ideas into reality, one line of code at a time. 🚀
                    <span v-if="!expanded">...</span>
                    <span v-show="expanded">
                        With a knack for blending design and logic, I craft seamless digital experiences that are as
                        intuitive
                        as they are powerful.
                        My toolkit? Laravel for robust backends, Vue.js for sleek and responsive frontends,
                        and a touch of React when the project demands flexibility.
                        I thrive on creating solutions that don’t just work but work beautifully—whether it’s an
                        optimized API,
                        a scalable system, or an interactive dashboard that makes data come alive.
                        My mission is simple: take complex problems and
                        turn them into elegant,
                        efficient, and maintainable code. I believe every bug is a puzzle waiting to be solved, and
                        every
                        challenge is an opportunity for innovation.
                        Whether it's fine-tuning a database query or architecting a system that scales effortlessly, I
                        love
                        pushing the boundaries of what’s possible.
                        If you're looking for a developer who writes clean code and builds with passion, let's
                        connect—because
                        great software isn’t just built, it’s crafted.
                    </span>
                </p>

                <!-- Read More Button -->
                <button @click="expanded = !expanded" class="mt-4 text-blue-600 font-bold">
                    {{ expanded ? "Read Less" : "Read More" }}
                </button>

                <!-- Download Resume Button -->
                <div class="mt-6">
                    <a href="/resume.pdf" download
                        class="about-me-btn px-6 py-3 hover:bg-blue-600 rounded-lg shadow-md">Download Resume</a>
                </div>
            </div>
        </div>
    </section>
</template>




<style scoped lang="scss">
.about-me {
    // background-color: $caribbean-current;
}

.about-me-text {
    background-color: $gradient-top;
}

.about-me-btn {
    background: $puce;
}

.tags{
    color:$caribbean-current;
}
</style>