<!-- components/Header.vue -->
<template>
  <header
    ref="header"
    class="fixed top-0 left-0 right-0 z-50 border-b glass-effect border-white/10"
  >
    <nav class="container px-4 py-4 mx-auto">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <div class="text-2xl font-bold glow-text">
          <img src="/logo.png" class="w-[60px] rounded-full" alt="" />
        </div>

        <!-- Desktop Menu -->
        <ul class="hidden space-x-8 md:flex">
          <li v-for="item in menuItems" :key="item.id">
            <a
              :href="`#${item.id}`"
              class="relative transition-colors duration-300 group text-white/80 hover:text-white"
              @click="scrollToSection(item.id, $event)"
            >
              {{ item.label }}
              <span
                class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-neon-blue to-primary-pink group-hover:w-full transition-all duration-300"
              ></span>
            </a>
          </li>
        </ul>

        <!-- CTA Button -->
        <button
          @click="scrollToSection('contact', $event)"
          class="hidden px-4 py-3 text-sm font-semibold border rounded-lg md:block magnetic-btn glass-effect border-neon-blue/50"
        >
          <span class="relative z-10">Let's Talk</span>
        </button>

        <!-- Mobile menu toggle -->
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="text-2xl md:hidden"
        >
          <i
            :class="mobileMenuOpen ? 'fa-solid fa-times' : 'fa-solid fa-bars'"
          ></i>
        </button>
      </div>

      <!-- Mobile Menu -->
      <Transition name="slide">
        <div
          v-if="mobileMenuOpen"
          class="p-6 mt-4 rounded-lg md:hidden glass-effect"
        >
          <ul class="space-y-4">
            <li v-for="item in menuItems" :key="item.id">
              <a
                :href="`#${item.id}`"
                class="block text-lg transition-colors hover:text-neon-blue"
                @click="
                  scrollToSection(item.id, $event);
                  mobileMenuOpen = false;
                "
              >
                {{ item.label }}
              </a>
            </li>
          </ul>
        </div>
      </Transition>
    </nav>
  </header>
</template>

<script setup>
const { $gsap, $ScrollTrigger } = useNuxtApp();
const header = ref(null);
const mobileMenuOpen = ref(false);

const menuItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

const scrollToSection = (id, event) => {
  event.preventDefault();
  const element = document.getElementById(id);
  if (element && $gsap) {
    $gsap.to(window, {
      duration: 1,
      scrollTo: { y: element, offsetY: 80 },
      ease: "power3.inOut",
    });
  }
};

onMounted(() => {
  if ($gsap && $ScrollTrigger && header.value) {
    $gsap.from(header.value, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
  }
});
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
