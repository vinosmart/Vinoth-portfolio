<!-- components/ExperienceSection.vue -->
<template>
  <section id="experience" class="relative py-32">
    <div class="container px-4 mx-auto">
      <div class="mb-16 text-center" data-aos="fade-up">
        <h2 class="mb-4 text-5xl font-bold md:text-6xl">
          <span class="glow-text">Work</span>
          <span
            class="text-transparent text-gradient bg-gradient-to-r from-neon-blue to-primary-pink bg-clip-text"
            >Experience</span
          >
        </h2>
        <div
          class="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-neon-blue to-primary-pink"
        ></div>
      </div>

      <!-- Timeline -->
      <div class="relative max-w-4xl mx-auto">
        <!-- Center Line -->
        <div
          ref="timelineLine"
          class="absolute top-0 hidden w-1 h-full transform -translate-x-1/2 left-1/2 bg-gradient-to-b from-neon-blue via-primary-pink to-neon-purple md:block"
          style="opacity: 0"
        ></div>

        <!-- Experience Items -->
        <div class="space-y-12">
          <div
            v-for="(exp, index) in experiences"
            :key="exp.id"
            :class="index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:text-right'"
            class="relative"
            data-aos="fade-up"
            :data-aos-delay="index * 100"
          >
            <!-- Timeline Dot -->
            <div
              class="absolute top-0 hidden w-6 h-6 transform -translate-x-1/2 border-4 rounded-full left-1/2 bg-gradient-to-br from-neon-blue to-primary-pink border-dark-space md:block"
              :class="{ 'animate-pulse': index === 0 }"
            ></div>

            <!-- Content Card -->
            <div
              :class="index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'"
              class="p-6 transition-transform duration-300 neon-border glass-effect rounded-2xl hover:scale-105"
            >
              <div
                class="flex items-start justify-between mb-4"
                :class="index % 2 === 0 ? '' : 'md:flex-row-reverse'"
              >
                <div :class="index % 2 === 0 ? '' : 'md:text-right'">
                  <h3 class="mb-1 text-2xl font-bold text-neon-blue">
                    {{ exp.position }}
                  </h3>
                  <div class="text-lg font-semibold text-white/80">
                    {{ exp.company }}
                  </div>
                </div>
                <span
                  class="px-4 py-1 text-sm border rounded-full glass-effect border-primary-pink/30 whitespace-nowrap"
                >
                  {{ exp.period }}
                </span>
              </div>

              <p class="mb-4 text-white/70">{{ exp.description }}</p>

              <!-- Achievements -->
              <ul class="space-y-2">
                <li
                  v-for="achievement in exp.achievements"
                  :key="achievement"
                  class="flex items-start gap-2 text-sm text-white/60"
                  :class="
                    index % 2 === 0 ? '' : 'md:flex-row-reverse md:text-right'
                  "
                >
                  <i class="mt-1 fa-solid fa-check-circle text-neon-blue"></i>
                  <span>{{ achievement }}</span>
                </li>
              </ul>

              <!-- Technologies -->
              <div
                class="flex flex-wrap gap-2 mt-4"
                :class="index % 2 === 0 ? '' : 'md:justify-end'"
              >
                <span
                  v-for="tech in exp.technologies"
                  :key="tech"
                  class="px-3 py-1 text-xs border rounded-lg bg-white/5 border-neon-blue/20 text-neon-blue"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { $gsap, $ScrollTrigger } = useNuxtApp();
const timelineLine = ref(null);

const experiences = [
  {
    id: 1,
    position: "Senior Frontend Developer",
    company: "LRB Info TEch",
    period: "2025 - Present",
    description:
      "Leading development of enterprise-level web applications using modern JavaScript frameworks. Mentoring junior developers and establishing best practices.",
    achievements: [
      "Architected and deployed 5+ major client projects",
      "Improved application performance by 60% through optimization",
      "Led team of 4 developers in agile environment",
    ],
    technologies: ["Vue.js", "Nuxt.js", "Node.js", "Tailwind CSS"],
  },
  {
    id: 2,
    position: "Senior Frontend Developer",
    company: "Buff Creative College",
    period: "2024 - 2025",
    description:
      "Developed responsive web applications and RESTful APIs. Collaborated with design teams to create pixel-perfect user interfaces.",
    achievements: [
      "Built healthcare platform serving 10,000+ users",
      "Integrated multiple payment gateways (Razorpay, Stripe)",
      "Reduced load times by 40% through code splitting",
    ],
    technologies: ["React", "Next.js", "Express", "PostgreSQL", "Tailwind CSS"],
  },
  {
    id: 3,
    position: "Frontend Developer",
    company: "Zoomloacal Technologies",
    period: "2024 - 2024",
    description:
      "Focused on building interactive and animated user interfaces. Worked closely with UX designers to implement design systems.",
    achievements: [
      "Developed reusable component library used across 8 projects",
      "Implemented complex animations using GSAP and Framer Motion",
      "Achieved 98% lighthouse performance score",
    ],
    technologies: ["Vue.js", "GSAP", "SCSS", "Webpack", "Figma"],
  },
  {
    id: 4,
    position: "Junior Web Developer",
    company: "LMES Technologies",
    period: "2020 - 2023",
    description:
      "Started career building landing pages and small business websites. Learned modern development practices and version control.",
    achievements: [
      "Created 15+ responsive websites for local businesses",
      "Mastered Git workflow and collaborative development",
      "Achieved Google PageSpeed score of 95+",
    ],
    technologies: [
      "Vue.js",
      "Nuxt.js",
      "Tailwind CSS",
      "JavaScript",
      "Git",
      "Netlify",
    ],
  },
];

onMounted(() => {
  if ($gsap && $ScrollTrigger && timelineLine.value) {
    $gsap.to(timelineLine.value, {
      opacity: 1,
      height: "100%",
      duration: 2,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: timelineLine.value,
        start: "top 80%",
        end: "bottom 20%",
        scrub: 1,
      },
    });
  }
});
</script>
