<!-- pages/index.vue -->
<template>
  <div>
    <!-- Hero Section -->
    <section
      id="home"
      class="relative flex items-center justify-center min-h-screen pt-20 bg-center bg-no-repeat bg-cover"
      style="
        background-image: linear-gradient(
            rgba(0, 0, 0, 0.5),
            rgba(0, 0, 0, 0.5)
          ),
          url('/bg.jpeg');

        background-color: #0a0e27;
      "
    >
      <!-- <div class="absolute inset-0 bg-black/50"></div> -->
      <div class="container relative z-10 px-4 mx-auto">
        <div class="text-center">
          <div ref="heroContent" class="space-y-6">
            <div
              class="text-lg font-semibold text-neon-blue"
              data-aos="fade-down"
            >
              <i class="mr-2 fa-solid fa-code"></i>
              Hello, I'm
            </div>

            <h1 class="mb-4 text-6xl font-bold md:text-8xl">
              <span class="glow-text" data-aos="fade-left" data-aos-delay="200"
                >Vinoth</span
              >
              <span
                class="text-transparent text-gradient bg-gradient-to-r from-neon-blue via-primary-pink to-neon-purple bg-clip-text"
                data-aos="fade-left"
                data-aos-delay="400"
              >
                Kumar
              </span>
            </h1>

            <div
              class="text-2xl font-light md:text-4xl text-white/70"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <span ref="typedText"></span>
              <span class="animate-pulse">|</span>
            </div>

            <p
              class="max-w-2xl mx-auto text-lg leading-relaxed text-white/60"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              Full-Stack Web Developer specializing in crafting exceptional
              digital experiences with
              <span class="font-semibold text-neon-blue">Vue.js</span>,
              <span class="font-semibold text-primary-pink">Nuxt.js</span>,
              <span class="font-semibold text-primary-cyan">Next.js</span> &
              Modern Web Technologies
            </p>

            <div
              class="flex flex-wrap justify-center gap-4 pt-8"
              data-aos="zoom-in"
              data-aos-delay="1000"
            >
              <a
                class="px-8 py-4 text-lg font-semibold text-white rounded-lg magnetic-btn bg-gradient-to-r from-neon-blue to-primary-pink"
                href="#projects"
              >
                <span class="relative z-10 flex items-center gap-2">
                  <i class="fa-solid fa-briefcase"></i>
                  View My Work
                </span>
              </a>

              <a
                href="/resume.pdf"
                download
                class="px-8 py-4 text-lg font-semibold text-white border rounded-lg magnetic-btn glass-effect border-white/20"
              >
                <span class="relative z-10 flex items-center gap-2">
                  <i class="fa-solid fa-download"></i>
                  Download CV
                </span>
              </a>
            </div>

            <!-- Social Links -->
            <div
              class="flex justify-center gap-6 pt-12"
              data-aos="fade-up"
              data-aos-delay="1200"
            >
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

        <!-- Scroll indicator -->
        <div
          class="absolute -translate-x-1/2 bottom-10 left-1/2 animate-bounce"
          data-aos="fade-up"
          data-aos-delay="1400"
        >
          <i class="text-3xl fa-solid fa-chevron-down text-neon-blue"></i>
        </div>
      </div>

      <!-- Floating elements -->
      <div
        class="absolute w-20 h-20 rounded-full top-1/4 left-10 bg-neon-blue/10 blur-xl animate-float"
      ></div>
    </section>

    <!-- About Section -->
    <AboutSection />

    <!-- Skills Section -->
    <SkillsSection />

    <!-- Projects Section -->
    <ProjectsSection id="projects" />

    <!-- Experience Section -->
    <ExperienceSection />

    <!-- Contact Section -->
    <ContactSection />
  </div>
</template>

<script setup>
const { $gsap } = useNuxtApp();
const heroContent = ref(null);
const typedText = ref(null);

onMounted(() => {
  // Typing animation
  if (typedText.value) {
    const texts = [
      "Full-Stack Developer",
      "Vue.js Specialist",
      "UI/UX Enthusiast",
      "Problem Solver",
    ];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
      const currentText = texts[textIndex];

      if (isDeleting) {
        typedText.value.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typedText.value.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
      }

      let typeSpeed = isDeleting ? 50 : 100;

      if (!isDeleting && charIndex === currentText.length) {
        typeSpeed = 2000;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        typeSpeed = 500;
      }

      setTimeout(type, typeSpeed);
    }

    type();
  }

  // GSAP animations
  if ($gsap && heroContent.value) {
    $gsap.from(heroContent.value, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
      delay: 0.5,
    });
  }
});
</script>
