<!-- layouts/default.vue -->
<template>
  <div class="relative min-h-screen overflow-x-hidden">
    <!-- Animated background particles -->
    <div id="particles-js" class="fixed inset-0 z-0"></div>

    <!-- Gradient overlay -->
    <div
      class="fixed inset-0 z-0 bg-gradient-to-br from-dark-space via-dark-navy to-dark-slate opacity-90"
    ></div>

    <!-- Content -->
    <div class="relative z-10">
      <Header />
      <slot />
      <Footer />
    </div>

    <!-- WhatsApp chat button -->
    <a
      :href="whatsappLink"
      target="_blank"
      rel="noopener"
      aria-label="Chat with Vinothkumar on WhatsApp"
      title="Chat on WhatsApp"
      class="fixed z-50 flex items-center justify-center text-white transition-transform duration-300 rounded-full shadow-2xl w-14 h-14 bottom-6 right-6 bg-[#25D366] hover:scale-110 shadow-[#25D366]/40"
    >
      <span
        class="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping"
      ></span>
      <i class="relative text-3xl fa-brands fa-whatsapp"></i>
    </a>

    <!-- Cursor follower -->
    <!-- <div ref="cursorDot" class="cursor-dot"></div>
    <div ref="cursorOutline" class="cursor-outline"></div> -->
  </div>
</template>

<script setup>
import { profile } from "~/data/portfolio";

const whatsappLink = `https://wa.me/${profile.phone.replace(/\D/g, "")}?text=${encodeURIComponent(
  "Hi Vinothkumar, I found your portfolio and would like to discuss a website project.",
)}`;

const cursorDot = ref(null);
const cursorOutline = ref(null);

onMounted(() => {
  // Cursor follower effect
  if (process.client) {
    document.addEventListener("mousemove", (e) => {
      if (cursorDot.value && cursorOutline.value) {
        cursorDot.value.style.left = e.clientX + "px";
        cursorDot.value.style.top = e.clientY + "px";

        cursorOutline.value.style.left = e.clientX + "px";
        cursorOutline.value.style.top = e.clientY + "px";
      }
    });

    // Load particles.js
    if (window.particlesJS) {
      window.particlesJS("particles-js", {
        particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: { value: ["#00D9FF", "#9C27B0", "#E5005B"] },
          shape: { type: "circle" },
          opacity: { value: 0.5, random: true },
          size: { value: 3, random: true },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#00D9FF",
            opacity: 0.2,
            width: 1,
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: true,
            out_mode: "out",
          },
        },
      });
    }
  }
});
</script>

<style scoped>
.cursor-dot {
  width: 8px;
  height: 8px;
  background: #00d9ff;
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  transform: translate(-50%, -50%);
  transition: width 0.3s, height 0.3s;
}

.cursor-outline {
  width: 30px;
  height: 30px;
  border: 2px solid rgba(0, 217, 255, 0.5);
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 9998;
  transform: translate(-50%, -50%);
  transition: all 0.15s ease-out;
}
</style>
