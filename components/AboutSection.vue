<!-- components/AboutSection.vue -->
<template>
  <section id="about" class="relative py-32">
    <div class="container px-4 mx-auto">
      <div class="mb-16 text-center" data-aos="fade-up">
        <h2 class="mb-4 text-5xl font-bold md:text-6xl">
          <span class="glow-text">About</span>
          <span
            class="text-transparent text-gradient bg-gradient-to-r from-neon-blue to-primary-pink bg-clip-text"
            >Me</span
          >
        </h2>
        <div
          class="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-neon-blue to-primary-pink"
        ></div>
      </div>

      <div class="grid items-center grid-cols-1 gap-12 md:grid-cols-2">
        <!-- Profile Image Card -->
        <div data-aos="fade-left" data-aos-duration="1000">
          <div
            class="p-4 transition-transform duration-500 transform md:p-8 neon-border glass-effect rounded-3xl hover:scale-105"
          >
            <div
              class="flex items-center justify-center md:overflow-hidden aspect-square rounded-2xl bg-gradient-to-br from-neon-blue/20 to-primary-pink/20"
            >
              <!-- Replace with your image -->
              <img
                src="/images/avatar.jpg"
                alt="Profile"
                class="w-full h-full md:object-cover"
              />
            </div>

            <!-- Floating badges -->
            <div
              class="absolute p-4 shadow-2xl -top-6 -right-6 bg-gradient-to-r from-neon-blue to-primary-pink rounded-2xl animate-float"
            >
              <div class="text-center">
                <div class="text-3xl font-bold">5+</div>
                <div class="text-sm">Years Exp</div>
              </div>
            </div>

            <div
              class="absolute p-4 border shadow-2xl -bottom-6 -left-6 glass-effect border-neon-purple rounded-2xl animate-float"
              style="animation-delay: 1s"
            >
              <div class="text-center">
                <div class="text-3xl font-bold">50+</div>
                <div class="text-sm">Projects</div>
              </div>
            </div>
          </div>
        </div>

        <!-- About Content -->
        <div class="space-y-6" data-aos="fade-left" data-aos-duration="1000">
          <div class="space-y-4">
            <p class="text-lg leading-relaxed text-white/80">
              I'm a passionate
              <span class="font-semibold text-neon-blue"
                >Full-Stack Developer</span
              >
              specializing in building exceptional digital experiences. With
              expertise in modern JavaScript frameworks and a keen eye for
              design, I transform ideas into reality.
            </p>

            <p class="text-lg leading-relaxed text-white/80">
              My journey in web development started with a curiosity for
              creating interactive experiences. Today, I work with cutting-edge
              technologies like
              <span class="font-semibold text-primary-pink">Vue.js</span>,
              <span class="font-semibold text-primary-cyan">Nuxt.js</span>, and
              <span class="font-semibold text-neon-purple">Next.js</span> to
              build scalable applications.
            </p>
          </div>

          <!-- Info Grid -->
          <div class="grid grid-cols-2 gap-4 pt-6">
            <div
              class="p-2 transition-all border md:p-4 glass-effect border-white/10 rounded-xl hover:border-neon-blue"
            >
              <div class="mb-1 text-sm text-neon-blue">Name</div>
              <div class="font-semibold">VinothKumar</div>
            </div>

            <div
              class="p-2 transition-all border md:p-4 glass-effect border-white/10 rounded-xl hover:border-neon-blue"
            >
              <div class="mb-1 text-sm text-neon-blue">Email</div>
              <div class="text-sm font-semibold">pavinoth00@gmail.com</div>
            </div>

            <div
              class="p-2 transition-all border md:p-4 glass-effect border-white/10 rounded-xl hover:border-neon-blue"
            >
              <div class="mb-1 text-sm text-neon-blue">Location</div>
              <div class="font-semibold">India</div>
            </div>

            <div
              class="p-2 transition-all border md:p-4 glass-effect border-white/10 rounded-xl hover:border-neon-blue"
            >
              <div class="mb-1 text-sm text-neon-blue">Availability</div>
              <div class="flex items-center gap-2 font-semibold">
                <span
                  class="w-2 h-2 bg-green-500 rounded-full animate-pulse"
                ></span>
                Open to Work
              </div>
            </div>
          </div>

          <!-- CTA Button -->
          <div class="pt-6">
            <a
              href="/resume.pdf"
              download
              class="inline-flex items-center gap-3 px-8 py-4 font-semibold text-white rounded-lg magnetic-btn bg-gradient-to-r from-neon-blue to-primary-pink"
            >
              <span class="relative z-10">Download Resume</span>
              <i class="relative z-10 fa-solid fa-download"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { $gsap, $ScrollTrigger } = useNuxtApp();
const profileCard = ref(null);

onMounted(() => {
  if ($gsap && $ScrollTrigger && profileCard.value) {
    $gsap.fromTo(
      profileCard.value,
      {
        rotationY: -15,
        opacity: 0.5,
      },
      {
        rotationY: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: profileCard.value,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }
});
</script>
