<!-- pages/index.vue -->
<template>
  <div>
    <!-- Hero Section -->
    <section
      id="home"
      class="relative flex items-center min-h-screen pt-28 pb-20 overflow-hidden bg-center bg-no-repeat bg-cover"
      style="
        background-image:
          linear-gradient(rgba(10, 14, 39, 0.75), rgba(10, 14, 39, 0.92)),
          url(&quot;/bg.jpeg&quot;);
        background-color: #0a0e27;
      "
    >
      <div
        class="absolute rounded-full w-[32rem] h-[32rem] -top-40 -right-40 bg-primary-pink/20 blur-3xl"
      ></div>
      <div
        class="absolute rounded-full w-96 h-96 bottom-0 -left-32 bg-neon-blue/15 blur-3xl"
      ></div>

      <div class="container relative z-10 px-4 mx-auto">
        <div
          ref="heroContent"
          class="grid items-center gap-12 lg:grid-cols-[1.4fr_1fr]"
        >
          <div class="space-y-7 text-center lg:text-left">
            <a
              href="#achievements"
              class="inline-flex items-center gap-2 px-4 py-2 text-sm border rounded-full glass-effect border-yellow-400/40 text-yellow-200 hover:border-yellow-300"
              data-aos="fade-down"
            >
              <i class="fa-solid fa-trophy text-yellow-300"></i>
              Best Website Developer · Global Freelancers Festival 2026
            </a>

            <h1 class="text-5xl font-bold leading-[1.05] md:text-7xl xl:text-8xl">
              <span class="block text-lg font-semibold tracking-wide md:text-xl text-neon-blue mb-3">
                <i class="mr-2 fa-solid fa-code"></i>Hello, I'm
              </span>
              <span class="glow-text">Vinoth</span>
              <span
                class="text-transparent bg-gradient-to-r from-neon-blue via-primary-pink to-neon-purple bg-clip-text"
              >
                Kumar</span
              >
              <span
                class="block mt-4 text-base font-medium tracking-wide md:text-lg text-white/60"
              >
                Full Stack Developer · Frontend Developer · Website Developer in
                Chennai, India</span
              >
            </h1>

            <p
              class="text-2xl font-light md:text-3xl text-white/80"
              aria-hidden="true"
            >
              <span class="text-white/50">I'm a </span>
              <span ref="typedText">Full Stack Developer</span>
              <span class="animate-pulse text-neon-blue">|</span>
            </p>

            <p
              class="max-w-2xl mx-auto text-lg leading-relaxed lg:mx-0 text-white/65"
            >
              Award-winning <strong class="text-white">full stack</strong> &amp;
              <strong class="text-white">frontend developer</strong> from
              Chennai, India. I design and build fast, SEO-friendly websites and
              web apps with
              <span class="font-semibold text-neon-blue">Vue.js</span>,
              <span class="font-semibold text-primary-pink">Nuxt.js</span>,
              <span class="font-semibold text-primary-cyan">Next.js</span> &amp;
              <span class="font-semibold text-neon-purple">React</span> –
              {{ projectsDelivered }} projects shipped for clients in 5 countries.
            </p>

            <div class="flex flex-wrap justify-center gap-4 lg:justify-start">
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
                href="#contact"
                class="px-8 py-4 text-lg font-semibold text-white border rounded-lg magnetic-btn glass-effect border-white/20"
              >
                <span class="relative z-10 flex items-center gap-2">
                  <i class="fa-solid fa-paper-plane"></i>
                  Hire Me
                </span>
              </a>
              <a
                href="/resume.pdf"
                download
                class="px-6 py-4 text-lg font-semibold border rounded-lg text-white/80 border-white/10 hover:text-white hover:border-white/30"
              >
                <span class="flex items-center gap-2">
                  <i class="fa-solid fa-download"></i>
                  CV
                </span>
              </a>
            </div>

            <!-- Social Links -->
            <div class="flex justify-center gap-4 lg:justify-start">
              <a
                v-for="s in socials"
                :key="s.icon"
                :href="s.href"
                target="_blank"
                rel="me noopener"
                :aria-label="`Vinoth Kumar on ${s.label}`"
                class="flex items-center justify-center w-12 h-12 transition-all border rounded-full glass-effect border-white/20 hover:border-neon-blue hover:scale-110"
              >
                <i :class="['text-xl fa-brands', s.icon]"></i>
              </a>
            </div>
          </div>

          <!-- Stats card -->
          <div class="relative hidden lg:block" data-aos="fade-left">
            <div
              class="relative p-8 border glass-effect border-white/10 rounded-3xl neon-border"
            >
              <img
                src="/logo.png"
                alt="Vinoth Kumar logo"
                width="80"
                height="80"
                class="w-20 h-20 mb-6 rounded-full"
              />
              <ul class="space-y-5">
                <li
                  v-for="stat in heroStats"
                  :key="stat.label"
                  class="flex items-center gap-4"
                >
                  <span
                    class="flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 text-neon-blue"
                  >
                    <i :class="['fa-solid', stat.icon]"></i>
                  </span>
                  <span>
                    <span class="block text-2xl font-bold">{{ stat.value }}</span>
                    <span class="text-sm text-white/60">{{ stat.label }}</span>
                  </span>
                </li>
              </ul>
              <div
                class="flex items-center gap-2 pt-6 mt-6 text-sm border-t border-white/10 text-white/70"
              >
                <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Available for freelance projects
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About section"
        class="absolute -translate-x-1/2 bottom-8 left-1/2 animate-bounce"
      >
        <i class="text-3xl fa-solid fa-chevron-down text-neon-blue"></i>
      </a>
    </section>

    <AboutSection />
    <JourneySection />
    <AchievementSection />
    <SkillsSection />
    <ProjectsSection />
    <ExperienceSection />
    <FaqSection />
    <ContactSection />
    <AdSense ad-slot="5574130269" />
  </div>
</template>

<script setup>
import {
  SITE_URL,
  profile,
  seo,
  projects,
  projectCount,
  projectsDelivered,
  faqs,
} from "~/data/portfolio";

const { $gsap } = useNuxtApp();
const heroContent = ref(null);
const typedText = ref(null);

const socials = [
  { href: profile.social.github, icon: "fa-github", label: "GitHub" },
  { href: profile.social.linkedin, icon: "fa-linkedin", label: "LinkedIn" },
  { href: profile.social.facebook, icon: "fa-facebook", label: "Facebook" },
  { href: profile.social.instagram, icon: "fa-instagram", label: "Instagram" },
];

const heroStats = [
  { icon: "fa-calendar-check", value: `${profile.yearsOfExperience}+ years`, label: "Building for the web" },
  { icon: "fa-globe", value: `${projectsDelivered} websites`, label: "Delivered in 5 countries" },
  { icon: "fa-gauge-high", value: "95+", label: "Lighthouse performance" },
  { icon: "fa-trophy", value: "2026", label: "Best Website Developer award" },
];

useSeoMeta({
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords.join(", "),
  author: profile.name,
  robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  ogType: "profile",
  ogUrl: `${SITE_URL}/`,
  ogTitle: seo.title,
  ogDescription: seo.description,
  ogImage: profile.image,
  ogImageAlt: "Vinoth Kumar – Full Stack & Frontend Developer, Chennai",
  ogSiteName: "Vinoth Kumar",
  ogLocale: "en_IN",
  profileFirstName: "Vinoth",
  profileLastName: "Kumar",
  twitterCard: "summary_large_image",
  twitterTitle: seo.title,
  twitterDescription: seo.description,
  twitterImage: profile.image,
});

const personId = `${SITE_URL}/#person`;

const sameAs = Object.values(profile.social);

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": personId,
      name: profile.name,
      alternateName: profile.alternateNames,
      givenName: "Vinoth",
      familyName: "Kumar",
      url: SITE_URL,
      image: profile.image,
      jobTitle: profile.jobTitle,
      description: faqs[0].a,
      email: `mailto:${profile.email}`,
      telephone: profile.phone,
      address: {
        "@type": "PostalAddress",
        addressLocality: profile.city,
        addressRegion: profile.region,
        addressCountry: "IN",
      },
      worksFor: { "@type": "Organization", name: "Medivoy", url: "https://www.medi-voy.com/" },
      hasOccupation: {
        "@type": "Occupation",
        name: "Full Stack Web Developer",
        occupationLocation: { "@type": "City", name: profile.city },
        skills:
          "Vue.js, Nuxt.js, Next.js, React, TypeScript, Node.js, Tailwind CSS, SEO",
      },
      award: profile.award.name,
      knowsAbout: [
        "Frontend Development",
        "Full Stack Development",
        "Website Development",
        "Software Development",
        "Vue.js",
        "Nuxt.js",
        "Next.js",
        "React",
        "TypeScript",
        "JavaScript",
        "Node.js",
        "Tailwind CSS",
        "GSAP",
        "Technical SEO",
        "Core Web Vitals",
        "UI/UX Design",
      ],
      sameAs,
    },
    {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}/#webpage`,
      url: `${SITE_URL}/`,
      name: seo.title,
      description: seo.description,
      inLanguage: "en",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      mainEntity: { "@id": personId },
      dateModified: new Date().toISOString().slice(0, 10),
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Vinoth Kumar",
      alternateName: ["Vinothkumar", "Vinoth Kumar Portfolio"],
      publisher: { "@id": personId },
      inLanguage: "en",
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#service`,
      name: "Vinoth Kumar – Website & Web App Development",
      url: SITE_URL,
      image: profile.image,
      founder: { "@id": personId },
      telephone: profile.phone,
      email: profile.email,
      areaServed: ["Chennai", "India", "United Arab Emirates", "United Kingdom", "Worldwide"],
      address: {
        "@type": "PostalAddress",
        addressLocality: profile.city,
        addressRegion: profile.region,
        addressCountry: "IN",
      },
      serviceType: [
        "Website Development",
        "Frontend Development",
        "Full Stack Development",
        "Web Application Development",
        "SEO-friendly Website Design",
      ],
    },
    {
      "@type": "ItemList",
      "@id": `${SITE_URL}/#projects`,
      name: "Websites and projects by Vinoth Kumar",
      numberOfItems: projectCount,
      itemListElement: projects.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "CreativeWork",
          name: p.title,
          url: p.link,
          description: p.description,
          genre: p.category,
          image: `${SITE_URL}${p.image}`,
          creator: { "@id": personId },
        },
      })),
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

useHead({
  link: [{ rel: "canonical", href: `${SITE_URL}/` }],
  script: [
    {
      key: "portfolio-jsonld",
      type: "application/ld+json",
      innerHTML: JSON.stringify(jsonLd),
    },
  ],
});

onMounted(() => {
  // Typing animation
  if (typedText.value) {
    const texts = [
      "Full Stack Developer",
      "Frontend Developer",
      "Website Developer",
      "Vue.js & Nuxt.js Specialist",
      "Software Developer",
    ];
    let textIndex = 0;
    let charIndex = texts[0].length;
    let isDeleting = true;

    function type() {
      if (!typedText.value) return;
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

    setTimeout(type, 2000);
  }

  // GSAP animations
  if ($gsap && heroContent.value) {
    $gsap.from(heroContent.value, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
      delay: 0.3,
    });
  }
});
</script>
