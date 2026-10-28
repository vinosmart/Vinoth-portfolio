<!-- components/ProjectsSection.vue -->
<template>
  <section id="projects" class="relative py-32" aria-labelledby="projects-title">
    <div class="container px-4 mx-auto">
      <div class="mb-12 text-center" data-aos="fade-up">
        <p
          class="mb-3 text-sm font-semibold tracking-widest uppercase text-neon-blue"
        >
          <i class="mr-2 fa-solid fa-layer-group"></i>Portfolio
        </p>
        <h2 id="projects-title" class="mb-4 text-5xl font-bold md:text-6xl">
          <span class="glow-text">Websites &amp; </span>
          <span
            class="text-transparent text-gradient bg-gradient-to-r from-neon-blue to-primary-pink bg-clip-text"
            >Projects</span
          >
        </h2>
        <div
          class="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-neon-blue to-primary-pink"
        ></div>
        <p class="max-w-2xl mx-auto mt-4 text-lg text-white/60">
          {{ projectsDelivered }} websites and web apps designed and developed by
          Vinoth Kumar for schools, clinics, nonprofits, startups and brands in
          India, UAE, UK, Germany and Australia.
        </p>
      </div>

      <!-- Category filter -->
      <div
        class="flex flex-wrap justify-center gap-2 mb-12"
        role="tablist"
        aria-label="Filter projects by category"
      >
        <button
          v-for="cat in categories"
          :key="cat"
          role="tab"
          :aria-selected="activeCategory === cat"
          class="px-4 py-2 text-sm font-medium transition-all border rounded-full"
          :class="
            activeCategory === cat
              ? 'bg-gradient-to-r from-neon-blue to-primary-pink border-transparent text-white'
              : 'glass-effect border-white/15 text-white/70 hover:border-neon-blue hover:text-white'
          "
          @click="selectCategory(cat)"
        >
          {{ cat }}
          <span class="ml-1 text-xs opacity-70">{{ countFor(cat) }}</span>
        </button>
      </div>

      <!-- Projects Grid -->
      <ul class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <!-- v-show (not slice) keeps every project in the server HTML for crawlers -->
        <li
          v-for="(project, i) in filteredProjects"
          v-show="i < displayCount"
          :key="project.link"
          class="relative flex flex-col overflow-hidden transition-all duration-500 border group glass-effect border-white/10 rounded-2xl hover:-translate-y-2 hover:border-neon-blue/50 hover:shadow-[0_20px_60px_-20px_rgba(0,217,255,0.45)]"
        >
          <article class="flex flex-col h-full">
            <!-- Project Image -->
            <a
              :href="project.link"
              target="_blank"
              rel="noopener"
              class="relative block overflow-hidden aspect-[16/10] bg-gradient-to-br from-dark-navy to-dark-slate"
              :aria-label="`Visit ${project.title} website`"
            >
              <img
                :src="project.image"
                :alt="`${project.title} website designed and developed by Vinoth Kumar`"
                width="960"
                height="600"
                loading="lazy"
                decoding="async"
                class="object-cover object-top w-full h-full transition-transform duration-700 group-hover:scale-105"
                @error="handleImageError"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-dark-space/80 via-transparent to-transparent"
              ></div>
              <span
                v-if="project.isNew"
                class="absolute px-3 py-1 text-xs font-bold tracking-wide uppercase rounded-full shadow-lg top-4 left-4 bg-gradient-to-r from-neon-blue to-primary-pink"
              >
                New
              </span>
              <span
                class="absolute px-3 py-1 text-xs border rounded-full top-4 right-4 bg-dark-space/70 backdrop-blur border-white/20"
              >
                {{ project.category }}
              </span>
            </a>

            <!-- Project Content -->
            <div class="flex flex-col flex-1 p-6 space-y-3">
              <h3
                class="text-xl font-bold transition-colors group-hover:text-neon-blue"
              >
                {{ project.title }}
              </h3>
              <p class="flex-1 text-sm leading-relaxed text-white/70">
                {{ project.description }}
              </p>

              <div v-if="project.tags" class="flex flex-wrap gap-2">
                <span
                  v-for="tag in project.tags"
                  :key="tag"
                  class="px-2 py-1 text-xs border rounded-lg bg-white/5 text-neon-blue border-white/10"
                >
                  {{ tag }}
                </span>
              </div>

              <div class="flex items-center justify-between pt-3 border-t border-white/10">
                <span class="text-xs truncate text-white/40">{{
                  hostOf(project.link)
                }}</span>
                <a
                  :href="project.link"
                  target="_blank"
                  rel="noopener"
                  class="inline-flex items-center gap-2 text-sm font-semibold text-neon-blue hover:text-white"
                >
                  Live site
                  <i
                    class="text-xs transition-transform fa-solid fa-arrow-up-right-from-square group-hover:translate-x-0.5"
                  ></i>
                </a>
              </div>
            </div>
          </article>
        </li>
      </ul>

      <!-- Load More Button -->
      <div class="mt-12 text-center" v-if="hasMore">
        <button
          @click="loadMore"
          class="px-8 py-4 font-semibold text-white border rounded-lg magnetic-btn glass-effect border-neon-blue/50 hover:border-neon-blue"
        >
          <span class="relative z-10 flex items-center gap-2">
            Show more projects ({{ remainingCount }} more)
            <i class="fa-solid fa-chevron-down"></i>
          </span>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { projects, projectsDelivered } from "~/data/portfolio";

const PAGE_SIZE = 12;
const displayCount = ref(PAGE_SIZE);
const activeCategory = ref("All");

const categoryOrder = [
  "Education",
  "Healthcare",
  "Business",
  "Nonprofit",
  "Real Estate",
  "E-Commerce",
  "Portfolio",
  "Tools",
];
const categories = ["All", "New", ...categoryOrder];

const matches = (project, cat) =>
  cat === "All" || (cat === "New" ? project.isNew : project.category === cat);

const countFor = (cat) => projects.filter((p) => matches(p, cat)).length;

const filteredProjects = computed(() =>
  projects.filter((p) => matches(p, activeCategory.value)),
);

const hasMore = computed(
  () => displayCount.value < filteredProjects.value.length,
);

const remainingCount = computed(
  () => filteredProjects.value.length - displayCount.value,
);

const selectCategory = (cat) => {
  activeCategory.value = cat;
  displayCount.value = PAGE_SIZE;
};

const loadMore = () => {
  displayCount.value += PAGE_SIZE;
};

const hostOf = (link) => link.replace(/^https?:\/\//, "").replace(/\/$/, "");

const handleImageError = (e) => {
  e.target.src = "/og-image.jpg";
};
</script>
