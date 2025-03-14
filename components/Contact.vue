<template>

    <section id="contact" class="relative w-full bg-gradient-to-b from-gray-900 to-gray-800 text-gray-200 py-16">
    
        <!-- SVG Shape (Full Width) -->
        <div class="absolute top-0 left-0 w-full overflow-hidden leading-none">
            <svg class="relative w-full h-24 text-white" viewBox="0 0 1440 320" preserveAspectRatio="none">
                <path fill="currentColor" d="M0,256L1440,160L1440,0L0,0Z"></path>
            </svg>
        </div>

        <!-- Background Waves -->
        <div class="absolute inset-0 overflow-hidden">
            <svg class="absolute bottom-0 w-full h-40 text-gray-700" viewBox="0 0 1440 320">
                <path fill="currentColor" fill-opacity="1"
                    d="M0,224L80,234.7C160,245,320,267,480,256C640,245,800,203,960,186.7C1120,171,1280,181,1360,186.7L1440,192L1440,320L0,320Z">
                </path>
            </svg>
        </div>

        <div class="container mx-auto px-6 pt-6 relative z-10">
            <h2 class="text-3xl md:text-4xl font-bold text-center mb-6">Let's Connect</h2>
            <p class="text-gray-400 text-center max-w-2xl mx-auto mb-8">
                Have an exciting project or idea? Reach out and let's build something amazing!
            </p>

            <!-- Contact Form -->
            <div class="max-w-lg mx-auto bg-gray-800 bg-opacity-30 p-6 rounded-2xl shadow-lg backdrop-blur-md">
                <form @submit.prevent="submitForm">
                    <div class="relative mb-4">
                        <input v-model="form.name" type="text" id="name"
                            class="w-full px-4 py-3 bg-transparent border border-gray-500 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 peer"
                            required />
                        <label for="name"
                            class="absolute left-4 top-3 text-gray-400 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:top-3 peer-focus:text-sm peer-focus:text-blue-400">
                            Your Name
                        </label>
                    </div>

                    <div class="relative mb-4">
                        <input v-model="form.email" type="email" id="email"
                            class="w-full px-4 py-3 bg-transparent border border-gray-500 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 peer"
                            required />
                        <label for="email"
                            class="absolute left-4 top-3 text-gray-400 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:top-3 peer-focus:text-sm peer-focus:text-blue-400">
                            Your Email
                        </label>
                    </div>

                    <div class="relative mb-4">
                        <textarea v-model="form.message" id="message" rows="4"
                            class="w-full px-4 py-3 bg-transparent border border-gray-500 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 peer"
                            required></textarea>
                        <label for="message"
                            class="absolute left-4 top-3 text-gray-400 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:top-3 peer-focus:text-sm peer-focus:text-blue-400">
                            Your Message
                        </label>
                    </div>

                    <button type="submit"
                        class="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition-all shadow-md hover:shadow-xl">
                        Send Message
                    </button>
                </form>
            </div>

            <!-- Social Links -->
            <div class="mt-10 text-center">
                <h3 class="text-lg font-semibold">Follow Me</h3>
                <div class="flex justify-center space-x-6 mt-4 text-2xl">
                    <a href="https://github.com/sheltersi" class="hover:text-blue-400 transition">
                        <font-awesome-icon :icon="['fab', 'github']" class="text-3xl" />
                    </a>
                    <a href=" https://x.com/ShelterSibs?t=qNVT1bgU2A8nrBf1aBITdQ&s=08" class="hover:text-blue-400 transition">
                        <font-awesome-icon :icon="['fab', 'square-x-twitter']" class="text-3xl" />
                    </a>
                    <a href="https://www.linkedin.com/in/shelter-sibanda-9761a41b5/" class="hover:text-blue-400 ">
                        <font-awesome-icon :icon="['fab', 'linkedin']" class="text-3xl" />

                    </a>
                    <a href="mailto:sheltersibanda002@email.com" class="hover:text-blue-400 transition">
                        <font-awesome-icon :icon="['fas', 'envelope']" class="text-3xl" /></a>

                </div>
            </div>
        </div>
    </section>
</template>

<!-- <script setup>
import { ref } from "vue";

const form = ref({
  name: '',
  email: '',
  message: '',
});

const submitForm = () => {
  const formElement = document.createElement('form');
  formElement.method = 'POST';
  formElement.action = 'https://formsubmit.co/sheltersibanda002@gmail.com';

  Object.keys(form.value).forEach((key) => {
    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = key;
    input.value = form.value[key];
    formElement.appendChild(input);
  });

  document.body.appendChild(formElement);
  formElement.submit();

// Show success message with SweetAlert2
Swal.fire({
    title: "Success!",
    text: "Your message has been sent successfully.",
    icon: "success",
    confirmButtonText: "OK",
  });

  // Reset the form after submission
  form.value = {
    name: "",
    email: "",
    message: "",
  };
};
</script> -->


<!-- <script setup>
import { ref } from "vue";
import Swal from "sweetalert2"; // If you're using SweetAlert2

const form = ref({
  name: '',
  email: '',
  message: '',
});

const submitForm = (event) => {
  event.preventDefault(); // Prevent the default form submission

  const formElement = document.createElement('form');
  formElement.method = 'POST';
  formElement.action = 'https://formsubmit.co/sheltersibanda002@gmail.com';

  Object.keys(form.value).forEach((key) => {
    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = key;
    input.value = form.value[key];
    formElement.appendChild(input);
  });

  document.body.appendChild(formElement);
  formElement.submit();

  // Show success message with SweetAlert2
  Swal.fire({
    title: "Success!",
    text: "Your message has been sent successfully.",
    icon: "success",
    confirmButtonText: "OK",
  });

  // Reset the form after submission
  form.value = {
    name: "",
    email: "",
    message: "",
  };
};
</script> -->


<script setup>
import { ref } from "vue";
import Swal from "sweetalert2"; // If you're using SweetAlert2

// yQGDqSIOcL9kHEwM
const form = ref({
  name: '',
  email: '',
  message: '',
});

const submitForm = async () => {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form.value)
    });

    if (response.ok) {
      Swal.fire('Success!', 'Your message has been sent!', 'success');
      form.value = { name: '', email: '', message: '' };
    } else {
      Swal.fire('Error!', 'Failed to send message.', 'error');
    }
  } catch (error) {
    console.error(error);
    Swal.fire('Oops!', 'Something went wrong!', 'error');
  }
};
</script>

<style scoped>
/* Glassmorphism Effect */
.backdrop-blur-md {
    backdrop-filter: blur(10px);
}

/* Floating Labels */
input,
textarea {
    transition: all 0.3s ease-in-out;
}
</style>