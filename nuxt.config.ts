// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/seo',
  ],

  site: {
    url: 'https://vinothkumar.site',
    name: 'Vinoth Kumar - Full-Stack Web Developer Portfolio',
    description: 'Best frontend and full-stack web developer specializing in Vue.js, Nuxt.js, Next.js & Modern Web Applications',
    defaultLocale: 'en',
  },

  ogImage: {
    enabled: false,
  },

  sitemap: {
    enabled: true,
    urls: [
      {
        loc: 'https://vinothkumar.site/',
        lastmod: new Date().toISOString(),
        changefreq: 'weekly',
        priority: 1.0,
      },
    ],
  },

  robots: {
    enabled: true,
    UserAgent: '*',
    Allow: '/',
    Sitemap: 'https://vinothkumar.site/sitemap.xml',
    disallow: [],
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      title: 'Vinoth Kumar - Best Website Developer & Frontend Expert | Vue.js, Nuxt.js',
      titleTemplate: '%s | Vinoth Kumar - Frontend Web Developer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        
        // Primary Meta Tags - optimized for "best website developer" and "frontend developer"
        { 
          name: 'title', 
          content: 'Vinoth Kumar - Best Website Developer & Frontend Expert | Vue.js, Nuxt.js' 
        },
        { 
          name: 'description', 
          content: 'Vinoth Kumar - Top-rated Frontend & Full-Stack Web Developer with 5+ years of experience. Expert in Vue.js, Nuxt.js, Next.js. 50+ websites delivered. Hire the best website developer for your next project.' 
        },
        { 
          name: 'keywords', 
          content: 'best website developer, frontend developer, top web developer, Vinoth Kumar, Full-Stack Developer, Vue.js Developer, Nuxt.js Developer, Next.js Developer, JavaScript Expert, React Developer, Frontend Developer India, Web Development, UI/UX Designer, Tailwind CSS, GSAP, Modern Web Apps, freelance web developer, React.js developer, hire web developer' 
        },
        { name: 'author', content: 'Vinoth Kumar' },
        { name: 'robots', content: 'index, follow, max-snippet:-1, max-image-preview:large' },
        { name: 'googlebot', content: 'index, follow, max-snippet:-1, max-image-preview:large' },
        { name: 'google-adsense-account', content: 'ca-pub-8441864880126202' },

        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://vinothkumar.site/' },
        { 
          property: 'og:title', 
          content: 'Vinoth Kumar - Best Website Developer & Frontend Expert | 50+ Projects Delivered' 
        },
        { 
          property: 'og:description', 
          content: 'Hire the best frontend web developer with 5+ years of Vue.js, Nuxt.js & Next.js expertise. Browse 50+ successful projects and let\'s build something amazing.' 
        },
        { property: 'og:image', content: 'https://vinothkumar.site/og-image.jpg' },
        { property: 'og:image:secure_url', content: 'https://vinothkumar.site/og-image.jpg' },
        { property: 'og:image:type', content: 'image/jpeg' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'Vinoth Kumar - Best Full-Stack Web Developer Portfolio' },
        { property: 'og:site_name', content: 'Vinoth Kumar Portfolio' },
        { property: 'og:locale', content: 'en_US' },
        { property: 'article:author', content: 'Vinoth Kumar' },
        { property: 'article:publisher', content: 'https://vinothkumar.site' },

        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@vinothkumar' },
        { name: 'twitter:creator', content: '@vinothkumar' },
        { name: 'twitter:url', content: 'https://vinothkumar.site/' },
        { 
          name: 'twitter:title', 
          content: 'Vinoth Kumar - Best Website Developer & Frontend Expert' 
        },
        { 
          name: 'twitter:description', 
          content: 'Top-rated frontend web developer specializing in Vue.js, Nuxt.js & Next.js. 50+ projects delivered. Let\'s build something amazing together.' 
        },
        { name: 'twitter:image', content: 'https://vinothkumar.site/og-image.jpg' },
        { name: 'twitter:image:alt', content: 'Vinoth Kumar - Best Full-Stack Web Developer' },

        // Additional SEO
        { name: 'theme-color', content: '#00D9FF' },
        { name: 'msapplication-TileColor', content: '#00D9FF' },
        { name: 'msapplication-TileImage', content: '/apple-touch-icon.png' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'google-site-verification', content: 'YOUR_GOOGLE_VERIFICATION_CODE' },
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
        
        // Preconnect to Google AdSense for better performance
        { rel: 'preconnect', href: 'https://pagead2.googlesyndication.com' },
      ],
      script: [
        // Google AdSense
        {
          src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8441864880126202',
          async: true,
          crossorigin: 'anonymous'
        },
        
        // Structured Data (JSON-LD)
        {
          type: 'application/ld+json',
          children: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Person',
                '@id': 'https://vinothkumar.site/#person',
                name: 'Vinoth Kumar',
                url: 'https://vinothkumar.site',
                image: 'https://vinothkumar.site/og-image.jpg',
                jobTitle: 'Full-Stack Web Developer',
                worksFor: {
                  '@type': 'Organization',
                  name: 'Freelance'
                },
                description: 'Best website developer and frontend expert with 5+ years of experience specializing in Vue.js, Nuxt.js, Next.js, and modern web technologies.',
                email: 'pavinoth00@gmail.com',
                telephone: '+91 7845860720',
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: 'Chennai',
                  addressRegion: 'Tamil Nadu',
                  addressCountry: 'IN'
                },
                sameAs: [
                  'https://github.com/vinosmart',
                  'https://www.linkedin.com/in/vinoth-kumar-489465166/',
                  'https://www.facebook.com/vinothkumar.604776/',
                  'https://www.instagram.com/selvapops/'
                ],
                knowsAbout: [
                  'Vue.js', 'Nuxt.js', 'Next.js', 'React', 'JavaScript', 'TypeScript',
                  'Tailwind CSS', 'Node.js', 'Full-Stack Development', 'Web Development',
                  'UI/UX Design', 'Frontend Development', 'Responsive Design', 'GSAP',
                  'REST APIs', 'MongoDB', 'PostgreSQL', 'Git', 'Vercel'
                ]
              },
              {
                '@type': 'WebSite',
                '@id': 'https://vinothkumar.site/#website',
                url: 'https://vinothkumar.site',
                name: 'Vinoth Kumar - Full-Stack Web Developer Portfolio',
                description: 'Portfolio of Vinoth Kumar, a top-rated frontend and full-stack web developer specializing in Vue.js, Nuxt.js, Next.js with 5+ years of experience and 50+ projects delivered.',
                publisher: {
                  '@id': 'https://vinothkumar.site/#person'
                },
                inLanguage: 'en-US',
                potentialAction: {
                  '@type': 'SearchAction',
                  target: {
                    '@type': 'EntryPoint',
                    urlTemplate: 'https://vinothkumar.site/?s={search_term_string}'
                  },
                  'query-input': 'required name=search_term_string'
                }
              },
              {
                '@type': 'Organization',
                '@id': 'https://vinothkumar.site/#organization',
                name: 'Vinoth Kumar Development',
                url: 'https://vinothkumar.site',
                logo: 'https://vinothkumar.site/logo.png',
                description: 'Professional freelance web development services by Vinoth Kumar. Specializing in Vue.js, Nuxt.js, Next.js, and modern web technologies.',
                foundingDate: '2020',
                founder: {
                  '@id': 'https://vinothkumar.site/#person'
                },
                contactPoint: {
                  '@type': 'ContactPoint',
                  telephone: '+91 7845860720',
                  contactType: 'sales',
                  email: 'pavinoth00@gmail.com',
                  availableLanguage: ['English', 'Tamil']
                },
                sameAs: [
                  'https://github.com/vinosmart',
                  'https://www.linkedin.com/in/vinoth-kumar-489465166/',
                  'https://www.facebook.com/vinothkumar.604776/',
                  'https://www.instagram.com/selvapops/'
                ]
              },
              {
                '@type': 'FAQPage',
                '@id': 'https://vinothkumar.site/#faq',
                mainEntity: [
                  {
                    '@type': 'Question',
                    name: 'Who is the best website developer?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Vinoth Kumar is a top-rated full-stack web developer with 5+ years of experience, specializing in Vue.js, Nuxt.js, Next.js, and modern web technologies. He has delivered 50+ successful projects for clients worldwide.'
                    }
                  },
                  {
                    '@type': 'Question',
                    name: 'Where can I hire a frontend developer?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'You can hire Vinoth Kumar, an experienced frontend developer, by visiting his portfolio at vinothkumar.site or contacting him directly at pavinoth00@gmail.com.'
                    }
                  },
                  {
                    '@type': 'Question',
                    name: 'What technologies does Vinoth Kumar specialize in?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Vinoth Kumar specializes in Vue.js, Nuxt.js, Next.js, React, JavaScript, TypeScript, Tailwind CSS, Node.js, GSAP animations, and full-stack web development.'
                    }
                  },
                  {
                    '@type': 'Question',
                    name: 'How many projects has Vinoth Kumar completed?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Vinoth Kumar has successfully delivered 50+ web development projects including educational platforms, e-commerce sites, healthcare portals, real estate websites, and professional portfolio sites.'
                    }
                  },
                  {
                    '@type': 'Question',
                    name: 'Is Vinoth Kumar available for freelance work?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes, Vinoth Kumar is currently open to freelance web development opportunities and new projects. Contact him at pavinoth00@gmail.com to discuss your project.'
                    }
                  },
                  {
                    '@type': 'Question',
                    name: 'What makes Vinoth Kumar a top frontend developer?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'With 5+ years of experience, 50+ projects delivered, expertise in modern frameworks (Vue.js, Nuxt.js, Next.js), 98% Lighthouse performance scores, and a strong focus on UI/UX design, Vinoth Kumar ranks among the best frontend developers.'
                    }
                  }
                ]
              }
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
      routes: ['/', '/ai.json']
    }
  },

  runtimeConfig: {
    public: {
      siteUrl: 'https://vinothkumar.site',
      siteName: 'Vinoth Kumar Portfolio',
      siteDescription: 'Best frontend and full-stack web developer specializing in Vue.js, Nuxt.js, Next.js & Modern Web Applications',
      language: 'en',
      adsenseId: 'ca-pub-8441864880126202'
    }
  }
})
