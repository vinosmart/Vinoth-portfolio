<!-- components/ContactSection.vue -->
<template>
  <section id="contact" class="relative py-32">
    <div class="container px-4 mx-auto md:px-6">
      <div class="mb-16 text-center" data-aos="fade-up">
        <h2 class="mb-4 text-5xl font-bold md:text-6xl">
          <span class="glow-text">Get In</span>
          <span
            class="text-transparent text-gradient bg-gradient-to-r from-neon-blue to-primary-pink bg-clip-text"
            >Touch</span
          >
        </h2>
        <div
          class="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-neon-blue to-primary-pink"
        ></div>
        <p class="mt-4 text-lg text-white/60">
          Let's create something amazing together
        </p>
      </div>

      <div class="grid max-w-6xl gap-12 mx-auto md:grid-cols-2">
        <!-- Contact Info -->
        <div class="space-y-8" data-aos="fade-left">
          <div>
            <h3 class="mb-4 text-2xl font-bold md:text-3xl">
              Let's talk about everything!
            </h3>
            <p class="text-base text-white/70 md:text-lg">
              Don't hesitate to reach out if you have any questions or just want
              to say hello. I'm always open to discussing new projects, creative
              ideas, or opportunities.
            </p>
          </div>

          <!-- Contact Cards -->
          <div class="space-y-4">
            <div
              class="p-4 transition-all border glass-effect border-white/10 rounded-xl md:p-6 hover:border-neon-blue group"
            >
              <div class="flex items-center gap-4">
                <div
                  class="flex items-center justify-center w-12 h-12 transition-transform md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-neon-blue to-primary-cyan group-hover:scale-110"
                >
                  <i class="text-xl fa-solid fa-envelope md:text-2xl"></i>
                </div>
                <div>
                  <div class="mb-1 text-xs md:text-sm text-white/60">Email</div>
                  <a
                    href="mailto:pavinoth00@gmail.com"
                    class="text-sm font-semibold break-all transition-colors md:text-lg hover:text-neon-blue"
                  >
                    pavinoth00@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div
              class="p-4 transition-all border glass-effect border-white/10 rounded-xl md:p-6 hover:border-primary-pink group"
            >
              <div class="flex items-center gap-4">
                <div
                  class="flex items-center justify-center w-12 h-12 transition-transform md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-primary-pink to-neon-purple group-hover:scale-110"
                >
                  <i class="text-xl fa-solid fa-phone md:text-2xl"></i>
                </div>
                <div>
                  <div class="mb-1 text-xs md:text-sm text-white/60">Phone</div>
                  <a
                    href="tel:+917845860720"
                    class="text-sm font-semibold transition-colors md:text-lg hover:text-primary-pink"
                  >
                    +91 7845860720
                  </a>
                </div>
              </div>
            </div>

            <div
              class="p-4 transition-all border glass-effect border-white/10 rounded-xl md:p-6 hover:border-neon-purple group"
            >
              <div class="flex items-center gap-4">
                <div
                  class="flex items-center justify-center w-12 h-12 transition-transform md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-neon-purple to-primary-cyan group-hover:scale-110"
                >
                  <i class="text-xl fa-solid fa-map-marker-alt md:text-2xl"></i>
                </div>
                <div>
                  <div class="mb-1 text-xs md:text-sm text-white/60">
                    Location
                  </div>
                  <div class="text-sm font-semibold md:text-lg">
                    Chennai, India
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Social Links -->
          <div>
            <h4 class="mb-4 text-xl font-bold">Follow Me</h4>
            <div class="flex gap-6" data-aos="fade-up" data-aos-delay="1200">
              <a
                href="https://github.com/vinosmart"
                class="flex items-center justify-center w-12 h-12 transition-all border rounded-full glass-effect border-white/20 hover:border-neon-blue hover:scale-110"
              >
                <i class="text-xl fa-brands fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/vinoth-kumar-489465166/"
                class="flex items-center justify-center w-12 h-12 transition-all border rounded-full glass-effect border-white/20 hover:border-neon-blue hover:scale-110"
              >
                <i class="text-xl fa-brands fa-linkedin"></i>
              </a>
              <a
                href="https://www.facebook.com/vinothkumar.604776/"
                class="flex items-center justify-center w-12 h-12 transition-all border rounded-full glass-effect border-white/20 hover:border-neon-blue hover:scale-110"
              >
                <i class="text-xl fa-brands fa-facebook"></i>
              </a>
              <a
                href="https://www.instagram.com/selvapops/"
                class="flex items-center justify-center w-12 h-12 transition-all border rounded-full glass-effect border-white/20 hover:border-neon-blue hover:scale-110"
              >
                <i class="text-xl fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div
          class="p-6 neon-border glass-effect rounded-2xl md:p-8"
          data-aos="fade-left"
        >
          <!-- Success Message -->
          <div
            v-if="showSuccess"
            class="p-4 mb-6 text-sm text-green-400 border rounded-lg bg-green-500/20 border-green-500/50"
          >
            ✅ Thank you! Your message has been sent successfully. I'll get back
            to you soon!
          </div>

          <!-- Error Message -->
          <div
            v-if="showError"
            class="p-4 mb-6 text-sm text-red-400 border rounded-lg bg-red-500/20 border-red-500/50"
          >
            ❌ {{ errorMessage }}
          </div>

          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div>
              <label class="block mb-2 text-sm font-medium">Your Name *</label>
              <input
                v-model="form.name"
                type="text"
                required
                :disabled="isSubmitting"
                class="w-full px-4 py-3 text-white transition-all border rounded-lg outline-none glass-effect border-white/20 focus:border-neon-blue disabled:opacity-50"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label class="block mb-2 text-sm font-medium">Your Email *</label>
              <input
                v-model="form.email"
                type="email"
                required
                :disabled="isSubmitting"
                class="w-full px-4 py-3 text-white transition-all border rounded-lg outline-none glass-effect border-white/20 focus:border-neon-blue disabled:opacity-50"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label class="block mb-2 text-sm font-medium">Subject *</label>
              <input
                v-model="form.subject"
                type="text"
                required
                :disabled="isSubmitting"
                class="w-full px-4 py-3 text-white transition-all border rounded-lg outline-none glass-effect border-white/20 focus:border-neon-blue disabled:opacity-50"
                placeholder="Project Discussion"
              />
            </div>

            <div>
              <label class="block mb-2 text-sm font-medium">Message *</label>
              <textarea
                v-model="form.message"
                required
                rows="5"
                :disabled="isSubmitting"
                class="w-full px-4 py-3 text-white transition-all border rounded-lg outline-none resize-none glass-effect border-white/20 focus:border-neon-blue disabled:opacity-50"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full px-8 py-4 text-lg font-semibold text-white rounded-lg magnetic-btn bg-gradient-to-r from-neon-blue to-primary-pink disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span
                class="relative z-10 flex items-center justify-center gap-2"
              >
                <i
                  :class="
                    isSubmitting
                      ? 'fa-solid fa-spinner fa-spin'
                      : 'fa-solid fa-paper-plane'
                  "
                ></i>
                {{ isSubmitting ? "Sending..." : "Send Message" }}
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const form = reactive({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const isSubmitting = ref(false);
const showSuccess = ref(false);
const showError = ref(false);
const errorMessage = ref("");

// Replace this with your Apps Script Web App URL
const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxoFzHrf8SXVE3nsg06IBnZrGZM_a3QAmereqVkCyFvvwt9oAVmTfUUBiVmEIKChfiQQw/exec";

const handleSubmit = async () => {
  isSubmitting.value = true;
  showSuccess.value = false;
  showError.value = false;

  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors", // Required for Google Apps Script
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    // Since we're using no-cors, we can't read the response
    // Assume success if no error was thrown
    showSuccess.value = true;

    // Reset form
    form.name = "";
    form.email = "";
    form.subject = "";
    form.message = "";

    // Hide success message after 5 seconds
    setTimeout(() => {
      showSuccess.value = false;
    }, 5000);
  } catch (error) {
    console.error("Error:", error);
    showError.value = true;
    errorMessage.value =
      "Failed to send message. Please try again or email me directly.";

    // Hide error message after 5 seconds
    setTimeout(() => {
      showError.value = false;
    }, 5000);
  } finally {
    isSubmitting.value = false;
  }
};
</script>
