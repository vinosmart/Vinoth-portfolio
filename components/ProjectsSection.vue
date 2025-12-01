<!-- components/ProjectsSection.vue -->
<template>
  <section id="projects" class="relative py-32">
    <div class="container px-4 mx-auto">
      <div class="mb-16 text-center" data-aos="fade-up">
        <h2 class="mb-4 text-5xl font-bold md:text-6xl">
          <span class="glow-text">Featured</span>
          <span
            class="text-transparent text-gradient bg-gradient-to-r from-neon-blue to-primary-pink bg-clip-text"
            >Projects</span
          >
        </h2>
        <div
          class="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-neon-blue to-primary-pink"
        ></div>
        <p class="mt-4 text-lg text-white/60">
          {{ projects.length }}+ projects delivered with excellence
        </p>
      </div>

      <!-- Projects Grid -->
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <!-- Replace this -->
        <div
          v-for="(project, index) in displayedProjects"
          :key="index"
          class="relative overflow-hidden transition-all duration-500 group neon-border glass-effect rounded-2xl hover:scale-105"
          data-aos="fade-up"
          data-aos-delay="0"
        >
          <!-- Project Image -->
          <div
            class="relative h-64 overflow-hidden bg-gradient-to-br from-dark-navy to-dark-slate"
          >
            <img
              :src="project.image"
              :alt="project.title"
              class="object-cover w-full h-full transition-transform duration-700 transform group-hover:scale-110"
              @error="handleImageError"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-dark-space via-transparent to-transparent opacity-60"
            ></div>

            <!-- Hover Overlay -->
            <div
              class="absolute inset-0 flex items-center justify-center gap-4 transition-opacity duration-500 opacity-0 bg-gradient-to-t from-dark-space via-dark-space/90 to-transparent group-hover:opacity-100"
            >
              <a
                :href="project.link"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center justify-center transition-all duration-300 transform translate-y-4 rounded-full w-14 h-14 bg-gradient-to-r from-neon-blue to-primary-cyan group-hover:translate-y-0 hover:scale-110"
                title="Visit Site"
              >
                <i class="text-xl fa-solid fa-external-link-alt"></i>
              </a>
              <button
                @click="copyLink(project.link)"
                class="flex items-center justify-center transition-all duration-300 delay-75 transform translate-y-4 border rounded-full w-14 h-14 glass-effect border-white/30 group-hover:translate-y-0 hover:scale-110"
                title="Copy Link"
              >
                <i class="text-xl fa-solid fa-link"></i>
              </button>
            </div>
          </div>

          <!-- Project Content -->
          <div class="p-6 space-y-3">
            <div class="flex items-start justify-between gap-2">
              <h3
                class="flex-1 text-xl font-bold transition-colors group-hover:text-neon-blue"
              >
                {{ project.title }}
              </h3>
              <span
                class="px-3 py-1 text-xs border rounded-full glass-effect border-neon-blue/30 whitespace-nowrap"
              >
                {{ getProjectCategory(project.title, project.link) }}
              </span>
            </div>

            <p class="text-sm text-white/70 line-clamp-2">
              {{ getProjectDescription(project.title, project.link) }}
            </p>

            <!-- Tech Stack Tags -->
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in getProjectTech(project.link)"
                :key="tech"
                class="px-2 py-1 text-xs border rounded-lg bg-white/5 text-neon-blue border-white/10"
              >
                {{ tech }}
              </span>
            </div>

            <!-- Action Button -->
            <div class="pt-2">
              <a
                :href="project.link"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center justify-center w-full gap-2 px-4 py-3 text-sm font-semibold text-center text-white rounded-lg magnetic-btn bg-gradient-to-r from-neon-blue to-primary-cyan"
              >
                <span class="relative z-10">View Project</span>
                <i class="relative z-10 fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>

          <!-- Card glow effect on hover -->
          <div
            class="absolute inset-0 transition-opacity duration-500 opacity-0 pointer-events-none group-hover:opacity-100"
          >
            <div
              class="absolute inset-0 bg-gradient-to-r from-neon-blue/5 to-primary-pink/5 rounded-2xl"
            ></div>
          </div>
        </div>
      </div>

      <!-- Load More Button -->
      <!-- <div class="mt-12 text-center" data-aos="fade-up" v-if="hasMore">
        <button
          @click="loadMore"
          class="px-8 py-4 font-semibold text-white border rounded-lg magnetic-btn glass-effect border-neon-blue/50 hover:border-neon-blue"
        >
          <span class="relative z-10 flex items-center gap-2">
            Load More Projects ({{ remainingCount }} more)
            <i class="fa-solid fa-chevron-down"></i>
          </span>
        </button>
      </div> -->
    </div>
  </section>
</template>

<script setup>
const { $gsap, $ScrollTrigger } = useNuxtApp();

const displayCount = ref(47);

const projects = [
  {
    title: "LMES",
    link: "https://lmes.in/",
    image: "/images/projects/lmes.png",
  },
  {
    title: "Chitti",
    link: "https://chitti.app/",
    image: "/images/projects/chitti.png",
  },
  {
    title: "Fly",
    link: "https://fly-social.com/",
    image: "/images/projects/fly.png",
  },
  {
    title: "Engineering",
    link: "https://chitti.app/engineering/",
    image: "/images/projects/engineering.png",
  },
  {
    title: "Landing Pages",
    link: "https://chitti.app/workshops",
    image: "/images/projects/landing.png",
  },
  {
    title: "Digital It Hub",
    link: "https://www.digitalithub.in/",
    image: "/images/projects/digital.png",
  },
  {
    title: "Karyon Bio",
    link: "https://karyon-bio.vercel.app/",
    image: "/images/projects/karyon.png",
  },
  {
    title: "Cab Service",
    link: "https://carshowroom-beige.vercel.app/",
    image: "/images/projects/cab.png",
  },
  {
    title: "CCANDC Solutions",
    link: "https://ccandcsolutions.com/",
    image: "/images/projects/ccandc.png",
  },
  {
    title: "Real Estate",
    link: "https://annasie.com/",
    image: "/images/projects/real.png",
  },
  {
    title: "Alignpeak",
    link: "https://alignpeak.vercel.app/",
    image: "/images/projects/alignpeak.png",
  },
  {
    title: "Kodestory",
    link: "https://www.kodestory.com/",
    image: "/images/projects/kodestory.png",
  },
  {
    title: "Viss School",
    link: "https://viss.ae/",
    image: "/images/projects/viss.png",
  },
  {
    title: "Yellow Dubai",
    link: "https://yellowdubai.com/",
    image: "/images/projects/yellow.png",
  },
  {
    title: "Career Guidance by Dr.Sivabalan",
    link: "https://www.careerguidancebydrsivabalan.com/",
    image: "/images/projects/siva.png",
  },
  {
    title: "Zeta Web",
    link: "https://zeta-web-one.vercel.app/",
    image: "/images/projects/zeta.png",
  },
  {
    title: "Buff Institute of Design",
    link: "https://www.buffinstituteofdesign.com/",
    image: "/images/projects/buff.png",
  },
  {
    title: "Buff Creative College",
    link: "https://buffcreativecollege.com/",
    image: "/images/projects/buff2.png",
  },
  {
    title: "Greens Technologies Australia",
    link: "https://www.greenstechnologies.com.au/",
    image: "/images/projects/green.png",
  },
  {
    title: "DreamTech",
    link: "https://dreamtech-services.vercel.app/",
    image: "/images/projects/dream.png",
  },
  {
    title: "Shiv Gaming",
    link: "https://shiv-gamings.vercel.app/",
    image: "/images/projects/gaming.png",
  },
  {
    title: "Billing App",
    link: "https://billing-fawn-five.vercel.app/",
    image: "/images/projects/billing.png",
  },
  {
    title: "Zoopcheck",
    link: "https://www.zoopcheck.com/",
    image: "/images/projects/zoopcheck.png",
  },
  {
    title: "Stratford",
    link: "https://www.stratfords.uk/",
    image: "/images/projects/startford.png",
  },
  {
    title: "Image Compressor",
    link: "https://dreamtech-services.vercel.app/compressor",
    image: "/images/projects/compressor.png",
  },
  {
    title: "Saprouae",
    link: "https://www.saprouae.com/",
    image: "/images/projects/saprouae.png",
  },
  {
    title: "Digitalharn Portfolio",
    link: "https://www.digitalharan10x.com/",
    image: "/images/projects/digitalharn.png",
  },
  {
    title: "Ramya Portfolio",
    link: "https://ramya-portfolio-theta.vercel.app/",
    image: "/images/projects/ramya.png",
  },
  {
    title: "Advance Link",
    link: "https://www.advancedlinktrade.com/",
    image: "/images/projects/advance.png",
  },
  {
    title: "Resource India Council",
    link: "https://www.resourceindia.co/",
    image: "/images/projects/resource.png",
  },
  {
    title: "Nx Digita",
    link: "https://www.nxdigita.com/",
    image: "/images/projects/nx.png",
  },
  {
    title: "Yilixin Automation",
    link: "https://www.yilixinautomation.com/",
    image: "/images/projects/yilixin.png",
  },
  {
    title: "Monish Portfolio",
    link: "https://monish-portfolio-tau.vercel.app/",
    image: "/images/projects/monish.png",
  },
  {
    title: "Fifty Stars LLC",
    link: "https://fifty-stars.vercel.app/",
    image: "/images/projects/fifty.png",
  },
  {
    title: "Myndwell",
    link: "https://myndwell.io/",
    image: "/images/projects/myndwell.png",
  },
  {
    title: "Reshma Portfolio",
    link: "https://reshma-portfolio-gray.vercel.app/",
    image: "/images/projects/reshma.png",
  },
  {
    title: "MindScribe Education",
    link: "https://mindscribeeducation.in/",
    image: "/images/projects/mind.png",
  },
  {
    title: "Pulse N Grains",
    link: "https://pulsengranis.vercel.app/",
    image: "/images/projects/pulse.png",
  },
  {
    title: "The Project B",
    link: "https://www.theproject-b.com/",
    image: "/images/projects/books.png",
  },
  {
    title: "Vinaya Mart",
    link: "https://vinayamart-gamma.vercel.app/",
    image: "/images/projects/vinaya.png",
  },
  {
    title: "Medivoy",
    link: "https://www.medi-voy.com/home",
    image: "/images/projects/medivoy.png",
  },
  {
    title: "CDN Tool",
    link: "https://cdn-tool-theta.vercel.app/",
    image: "/images/projects/cdn.png",
  },
  {
    title: "Acid SEO Tool",
    link: "https://seo-tool-gold.vercel.app/",
    image: "/images/projects/acid.png",
  },
  {
    title: "V0 Drop Website",
    link: "https://v0-drop-website-build.vercel.app/",
    image: "/images/projects/drop.png",
  },
  {
    title: "Sir Mutha School",
    link: "https://stage.sirmlady.sirmuthaschool.edu.in/",
    image: "/images/projects/sir.png",
  },
  {
    title: "Yuktrix",
    link: "http://yuktrix.in/",
    image: "/images/projects/yuktirx.png",
  },
  {
    title: "Smartispark",
    link: "https://smartispark.com/",
    image: "/images/projects/spark.png",
  },
];

const getProjectCategory = (title, link) => {
  if (
    link.includes("chitti") ||
    link.includes("lmes") ||
    link.includes("viss") ||
    link.includes("buff") ||
    title.includes("Education")
  )
    return "Education";
  if (link.includes("portfolio") || title.includes("Portfolio"))
    return "Portfolio";
  if (
    link.includes("tool") ||
    link.includes("compressor") ||
    link.includes("seo")
  )
    return "Tools";
  if (link.includes("real") || link.includes("annasie")) return "Real Estate";
  if (link.includes("mart") || link.includes("shop") || link.includes("cab"))
    return "E-Commerce";
  return "Business";
};

const getProjectDescription = (title, link) => {
  if (link.includes("lmes"))
    return "STEM education platform making science concepts easy and relatable for millions on YouTube and Facebook";
  if (link.includes("chitti.app") && !link.includes("engineering"))
    return "Premier after-school program developing 21st-century skills in children through STEM learning";
  if (link.includes("medivoy") || link.includes("medi-voy"))
    return "Healthcare platform connecting patients with doctors for consultations";
  if (title.includes("Portfolio"))
    return "Custom portfolio website showcasing professional work and achievements";
  if (link.includes("tool"))
    return "Web-based utility tool for developers and content creators";
  if (link.includes("real"))
    return "Real estate platform for property listings and management";

  return "Professional website with modern design and seamless user experience";
};

const getProjectTech = (link) => {
  const techs = ["Nuxt.js", "Tailwind CSS"];
  if (link.includes("vercel")) techs.push("Vercel");
  if (link.includes("tool")) techs.push("Vue.js");
  if (link.includes("shop") || link.includes("mart")) techs.push("E-Commerce");
  return techs;
};

const displayedProjects = computed(() => {
  return projects.slice(0, displayCount.value);
});

// const hasMore = computed(() => {
//   return displayCount.value < projects.length;
// });

const remainingCount = computed(() => {
  return projects.length - displayCount.value;
});

const loadMore = () => {
  displayCount.value += 9;
};

const copyLink = (link) => {
  navigator.clipboard.writeText(link);
  alert("Link copied to clipboard!");
};

const handleImageError = (e) => {
  e.target.src =
    "https://via.placeholder.com/800x600/1A1A2E/00D9FF?text=Project+Image";
};

onMounted(() => {
  if ($gsap && $ScrollTrigger) {
    const cards = document.querySelectorAll("#projects .group");
    $gsap.from(cards, {
      opacity: 0, // This might be hiding your cards!
      y: 50,
      stagger: 0.08,
      duration: 0.6,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#projects",
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
    });
  }
});
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Add this to force visibility */
#projects .group {
  opacity: 1 !important;
  transform: translateY(0) !important;
}
</style>
