<!-- components/SkillsSection.vue -->
<template>
  <section id="skills" class="relative py-32">
    <div class="container px-4 mx-auto">
      <div class="mb-16 text-center" data-aos="fade-up">
        <h2 class="mb-4 text-5xl font-bold md:text-6xl">
          <span class="glow-text">Technical</span>
          <span
            class="text-transparent text-gradient bg-gradient-to-r from-neon-blue to-primary-pink bg-clip-text"
            >Skills</span
          >
        </h2>
        <div
          class="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-neon-blue to-primary-pink"
        ></div>
      </div>

      <!-- Skills Categories -->
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <!-- Frontend Skills -->
        <div
          class="p-8 transition-all border glass-effect border-white/10 rounded-2xl hover:border-neon-blue"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div class="flex items-center gap-4 mb-6">
            <div
              class="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-neon-blue to-primary-cyan"
            >
              <i class="text-2xl fa-solid fa-code"></i>
            </div>
            <h3 class="text-2xl font-bold">Frontend</h3>
          </div>

          <div class="space-y-4">
            <div
              v-for="skill in frontendSkills"
              :key="skill.name"
              class="skill-item"
            >
              <div class="flex justify-between mb-2">
                <span class="font-medium">{{ skill.name }}</span>
                <span class="font-semibold text-neon-blue"
                  >{{ skill.level }}%</span
                >
              </div>
              <div class="h-2 overflow-hidden rounded-full bg-white/10">
                <div
                  :ref="(el) => setSkillRef(el, skill.name)"
                  class="h-full rounded-full bg-gradient-to-r from-neon-blue to-primary-cyan"
                  :style="{ width: '0%' }"
                  :data-width="skill.level"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Backend Skills -->
        <div
          class="p-8 transition-all border glass-effect border-white/10 rounded-2xl hover:border-primary-pink"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div class="flex items-center gap-4 mb-6">
            <div
              class="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-primary-pink to-neon-purple"
            >
              <i class="text-2xl fa-solid fa-server"></i>
            </div>
            <h3 class="text-2xl font-bold">Backend</h3>
          </div>

          <div class="space-y-4">
            <div
              v-for="skill in backendSkills"
              :key="skill.name"
              class="skill-item"
            >
              <div class="flex justify-between mb-2">
                <span class="font-medium">{{ skill.name }}</span>
                <span class="font-semibold text-primary-pink"
                  >{{ skill.level }}%</span
                >
              </div>
              <div class="h-2 overflow-hidden rounded-full bg-white/10">
                <div
                  :ref="(el) => setSkillRef(el, skill.name)"
                  class="h-full rounded-full bg-gradient-to-r from-primary-pink to-neon-purple"
                  :style="{ width: '0%' }"
                  :data-width="skill.level"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Tools & Others -->
        <div
          class="p-8 transition-all border glass-effect border-white/10 rounded-2xl hover:border-neon-purple"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div class="flex items-center gap-4 mb-6">
            <div
              class="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-neon-purple to-primary-cyan"
            >
              <i class="text-2xl fa-solid fa-tools"></i>
            </div>
            <h3 class="text-2xl font-bold">Tools & More</h3>
          </div>

          <div class="space-y-4">
            <div
              v-for="skill in toolsSkills"
              :key="skill.name"
              class="skill-item"
            >
              <div class="flex justify-between mb-2">
                <span class="font-medium">{{ skill.name }}</span>
                <span class="font-semibold text-neon-purple"
                  >{{ skill.level }}%</span
                >
              </div>
              <div class="h-2 overflow-hidden rounded-full bg-white/10">
                <div
                  :ref="(el) => setSkillRef(el, skill.name)"
                  class="h-full rounded-full bg-gradient-to-r from-neon-purple to-primary-cyan"
                  :style="{ width: '0%' }"
                  :data-width="skill.level"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Tech Stack Icons -->
      <div class="mt-16" data-aos="fade-up" data-aos-delay="400">
        <h3 class="mb-8 text-2xl font-bold text-center text-white/80">
          Technologies I Work With
        </h3>
        <div class="flex flex-wrap justify-center gap-6">
          <div
            v-for="tech in techStack"
            :key="tech.name"
            class="relative group"
          >
            <div
              class="flex items-center justify-center w-20 h-20 transition-all border cursor-pointer glass-effect border-white/10 rounded-2xl hover:border-neon-blue hover:scale-110"
            >
              <i
                :class="tech.icon"
                class="text-4xl"
                :style="{ color: tech.color }"
              ></i>
            </div>
            <div
              class="absolute text-sm transition-opacity -translate-x-1/2 opacity-0 -bottom-8 left-1/2 group-hover:opacity-100 whitespace-nowrap"
            >
              {{ tech.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { $gsap, $ScrollTrigger } = useNuxtApp();

const frontendSkills = [
  { name: "Vue.js / Nuxt.js", level: 95 },
  { name: "React / Next.js", level: 90 },
  { name: "JavaScript / TypeScript", level: 92 },
  { name: "Tailwind CSS", level: 95 },
  { name: "HTML5 / CSS3", level: 98 },
];

const backendSkills = [
  { name: "Node.js", level: 85 },
  { name: "Express.js", level: 80 },
  { name: "REST APIs", level: 90 },
  { name: "MongoDB", level: 75 },
  { name: "PostgreSQL", level: 70 },
];

const toolsSkills = [
  { name: "Git / GitHub", level: 90 },
  { name: "Vercel / Netlify", level: 88 },
  { name: "Figma", level: 85 },
  { name: "VS Code", level: 95 },
  { name: "Postman", level: 82 },
];

const techStack = [
  { name: "Vue.js", icon: "fa-brands fa-vuejs", color: "#42b883" },
  { name: "React", icon: "fa-brands fa-react", color: "#61dafb" },
  { name: "Next.js", icon: "fa-solid fa-n", color: "#000000" },
  { name: "Nuxt.js", icon: "fa-solid fa-code", color: "#00DC82" },
  { name: "Node.js", icon: "fa-brands fa-node-js", color: "#339933" },
  { name: "JavaScript", icon: "fa-brands fa-js", color: "#f7df1e" },
  { name: "TypeScript", icon: "fa-solid fa-code", color: "#3178c6" },
  { name: "HTML5", icon: "fa-brands fa-html5", color: "#e34f26" },
  { name: "CSS3", icon: "fa-brands fa-css3-alt", color: "#1572b6" },
  { name: "Tailwind CSS", icon: "fa-solid fa-wind", color: "#06b6d4" },
  { name: "GSAP", icon: "fa-solid fa-bolt", color: "#88CE02" },
  { name: "AOS", icon: "fa-solid fa-eye", color: "#00D9FF" },
  { name: "Git", icon: "fa-brands fa-git-alt", color: "#f05032" },
  { name: "GitHub", icon: "fa-brands fa-github", color: "#fff" },
  { name: "Vercel", icon: "fa-solid fa-triangle", color: "#000000" },
  { name: "Netlify", icon: "fa-solid fa-diamond", color: "#00C7B7" },
  { name: "pnpm", icon: "fa-solid fa-box", color: "#F69220" },
  { name: "npm", icon: "fa-brands fa-npm", color: "#cb3837" },
  { name: "Figma", icon: "fa-brands fa-figma", color: "#f24e1e" },
  { name: "VS Code", icon: "fa-solid fa-code", color: "#007ACC" },
  { name: "AI Tools", icon: "fa-solid fa-brain", color: "#E5005B" },
  { name: "Vibe Coding", icon: "fa-solid fa-robot", color: "#9C27B0" },
];

const skillRefs = new Map();

const setSkillRef = (el, name) => {
  if (el) {
    skillRefs.set(name, el);
  }
};

onMounted(() => {
  if ($gsap && $ScrollTrigger) {
    skillRefs.forEach((el) => {
      const width = el.getAttribute("data-width");

      $gsap.to(el, {
        width: `${width}%`,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    });
  }
});
</script>
