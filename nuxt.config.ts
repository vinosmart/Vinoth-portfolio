// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  
  modules: [
    '@nuxtjs/tailwindcss',
  ],

  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      title: 'Vinoth Kumar | Full-Stack Web Developer | Vue.js, Nuxt.js & Next.js Expert',
      titleTemplate: '%s',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        
        // Primary Meta Tags
        { 
          name: 'title', 
          content: 'Vinoth Kumar | Full-Stack Web Developer | Vue.js, Nuxt.js & Next.js Expert' 
        },
        { 
          name: 'description', 
          content: 'Full-Stack Web Developer with 5+ years of experience specializing in Vue.js, Nuxt.js, Next.js, and modern web technologies. Building exceptional digital experiences with cutting-edge frameworks.' 
        },
        { 
          name: 'keywords', 
          content: 'Vinoth Kumar, Full-Stack Developer, Web Developer, Vue.js Developer, Nuxt.js Developer, Next.js Developer, JavaScript Expert, React Developer, Frontend Developer, Backend Developer, India, Web Development, UI/UX, Tailwind CSS, GSAP, Modern Web Apps' 
        },
        { name: 'author', content: 'Vinoth Kumar' },
        { name: 'robots', content: 'index, follow' },
        { name: 'googlebot', content: 'index, follow' },

        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://vinothkumar.site/' },
        { 
          property: 'og:title', 
          content: 'Vinoth Kumar | Full-Stack Web Developer | Vue.js, Nuxt.js & Next.js Expert' 
        },
        { 
          property: 'og:description', 
          content: 'Full-Stack Web Developer with 5+ years of experience. Specializing in Vue.js, Nuxt.js, Next.js, and modern web technologies. View my portfolio of 50+ projects.' 
        },
        { property: 'og:image', content: 'https://vinothkumar.site/og-image.jpg' },
        { property: 'og:image:secure_url', content: 'https://vinothkumar.site/og-image.jpg' },
        { property: 'og:image:type', content: 'image/jpeg' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'Vinoth Kumar - Full-Stack Web Developer' },
        { property: 'og:site_name', content: 'Vinoth Kumar Portfolio' },
        { property: 'og:locale', content: 'en_US' },

        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@vinothkumar' },
        { name: 'twitter:creator', content: '@vinothkumar' },
        { name: 'twitter:url', content: 'https://vinothkumar.site/' },
        { 
          name: 'twitter:title', 
          content: 'Vinoth Kumar | Full-Stack Web Developer | Vue.js, Nuxt.js & Next.js Expert' 
        },
        { 
          name: 'twitter:description', 
          content: 'Full-Stack Web Developer with 5+ years of experience. Specializing in Vue.js, Nuxt.js, Next.js, and modern web technologies.' 
        },
        { name: 'twitter:image', content: 'https://vinothkumar.site/og-image.jpg' },
        { name: 'twitter:image:alt', content: 'Vinoth Kumar - Full-Stack Web Developer' },

        // Additional SEO
        { name: 'theme-color', content: '#00D9FF' },
        { name: 'msapplication-TileColor', content: '#00D9FF' },
        { name: 'msapplication-TileImage', content: '/apple-touch-icon.png' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [
        // Favicon
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        
        // Font Awesome
        { 
          rel: 'stylesheet', 
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css',
          crossorigin: 'anonymous'
        },
        
        // Canonical URL
        { rel: 'canonical', href: 'https://vinothkumar.site/' },
        
        // Preconnect for performance
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'dns-prefetch', href: 'https://cdnjs.cloudflare.com' },
      ],
      script: [
        // Structured Data (JSON-LD) for better SEO
        {
          type: 'application/ld+json',
          children: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Vinoth Kumar',
            url: 'https://vinothkumar.site',
            image: 'https://vinothkumar.site/og-image.jpg',
            jobTitle: 'Full-Stack Web Developer',
            worksFor: {
              '@type': 'Organization',
              name: 'Freelance'
            },
            description: 'Full-Stack Web Developer specializing in Vue.js, Nuxt.js, Next.js, and modern web technologies with 5+ years of experience.',
            email: 'pavinoth00@gmail.com',
            address: {
              '@type': 'PostalAddress',
              addressCountry: 'IN',
              addressRegion: 'India'
            },
            sameAs: [
              'https://github.com/vinothkumar',
              'https://linkedin.com/in/vinothkumar',
              'https://twitter.com/vinothkumar'
            ],
            knowsAbout: [
              'Vue.js',
              'Nuxt.js',
              'Next.js',
              'React',
              'JavaScript',
              'TypeScript',
              'Tailwind CSS',
              'Node.js',
              'Full-Stack Development',
              'Web Development',
              'UI/UX Design'
            ]
          })
        }
      ]
    }
  },

  css: ['~/assets/css/main.css'],

  nitro: {
    preset: 'vercel',
    prerender: {
      crawlLinks: true,
      routes: ['/']
    }
  },

  runtimeConfig: {
    public: {
      siteUrl: 'https://vinothkumar.site',
      siteName: 'Vinoth Kumar Portfolio',
      siteDescription: 'Full-Stack Web Developer specializing in Vue.js, Nuxt.js, Next.js & Modern Web Applications',
      language: 'en'
    }
  }
})
