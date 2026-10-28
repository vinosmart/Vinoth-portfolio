<!-- components/JourneySection.vue -->
<template>
  <section id="journey" class="relative py-32" aria-labelledby="journey-title">
    <div
      class="absolute rounded-full w-96 h-96 top-20 -left-32 bg-neon-purple/10 blur-3xl"
    ></div>
    <div class="container relative px-4 mx-auto">
      <div class="grid gap-16 lg:grid-cols-5">
        <!-- Who is Vinoth Kumar -->
        <div class="lg:col-span-2" data-aos="fade-up">
          <div class="lg:sticky lg:top-32">
            <p
              class="mb-3 text-sm font-semibold tracking-widest uppercase text-neon-blue"
            >
              <i class="mr-2 fa-solid fa-route"></i>My Journey
            </p>
            <h2 id="journey-title" class="mb-6 text-4xl font-bold md:text-5xl">
              Who is
              <span
                class="text-transparent bg-gradient-to-r from-neon-blue to-primary-pink bg-clip-text"
                >Vinothkumar?</span
              >
            </h2>
            <div class="space-y-4 text-lg leading-relaxed text-white/75">
              <p>
                <strong class="text-white">Vinothkumar</strong> is a
                <strong class="text-white">full stack developer</strong>,
                <strong class="text-white">frontend developer</strong> and
                <strong class="text-white">software developer</strong> based in
                Chennai, Tamil Nadu, India.
              </p>
              <p>
                Since {{ profile.careerStartYear }} he has designed and built
                {{ projectsDelivered }} websites and web applications – from STEM
                learning platforms and hospital websites to NGO, construction
                and recruitment sites – with Vue.js, Nuxt.js, Next.js, React and
                Node.js.
              </p>
              <p>
                In 2026 he was named
                <strong class="text-white">Best Website Developer</strong> at
                the Global Freelancers Festival in Chennai. Today he is a Software
                Developer at Medivoy (Healthcare Ecosystem) and takes on freelance
                website projects worldwide.
              </p>
            </div>

            <dl class="grid grid-cols-3 gap-3 mt-8">
              <div
                v-for="stat in stats"
                :key="stat.label"
                class="flex flex-col-reverse p-4 text-center border glass-effect border-white/10 rounded-xl"
              >
                <dt class="text-xs text-white/60">{{ stat.label }}</dt>
                <dd
                  class="text-2xl font-bold text-transparent bg-gradient-to-r from-neon-blue to-primary-pink bg-clip-text"
                >
                  {{ stat.value }}
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <!-- Timeline -->
        <ol class="relative lg:col-span-3 border-l border-white/15 ml-3 space-y-10">
          <li
            v-for="(step, index) in journey"
            :key="step.year"
            class="relative pl-10"
            data-aos="fade-up"
            :data-aos-delay="index * 80"
          >
            <span
              class="absolute flex items-center justify-center w-10 h-10 text-sm border rounded-full -left-5 top-0 bg-dark-space border-neon-blue/60 text-neon-blue shadow-[0_0_20px_rgba(0,217,255,0.35)]"
            >
              <i :class="['fa-solid', step.icon]"></i>
            </span>
            <div
              class="p-6 transition-all border glass-effect border-white/10 rounded-2xl hover:border-neon-blue/50"
            >
              <time
                class="inline-block px-3 py-1 mb-3 text-xs font-bold tracking-widest rounded-full bg-white/5 text-primary-cyan"
                >{{ step.year }}</time
              >
              <h3 class="mb-2 text-xl font-bold">{{ step.title }}</h3>
              <p class="leading-relaxed text-white/70">{{ step.text }}</p>
            </div>
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>

<script setup>
import { journey, profile, projectsDelivered } from "~/data/portfolio";

const stats = [
  { value: `${profile.yearsOfExperience}+`, label: "Years" },
  { value: projectsDelivered, label: "Projects" },
  { value: "5", label: "Countries" },
];
</script>
