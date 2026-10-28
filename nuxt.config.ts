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
    name: 'Vinoth Kumar',
    description: 'Vinothkumar – award-winning full stack developer, frontend developer and website developer in Chennai, India.',
    defaultLocale: 'en',
  },

  ogImage: {
    enabled: false,
  },

  // We ship our own Person/ProfilePage graph from pages/index.vue
  schemaOrg: {
    defaults: false,
  },

  sitemap: {
    enabled: true,
    // Plain XML for crawlers; the XSLT viewer triggers Chrome's deprecation banner
    xsl: false,
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
      // Page title, description, OG/Twitter and JSON-LD live in pages/index.vue (built from data/portfolio.ts)
      titleTemplate: '%s',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'author', content: 'Vinoth Kumar' },
        { name: 'google-adsense-account', content: 'ca-pub-8441864880126202' },

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

      ]
    }
  },

  css: ['~/assets/css/main.css'],

  nitro: {
    preset: 'vercel',
    prerender: {
      crawlLinks: true,
      routes: ['/', '/ai.json', '/llms.txt', '/api/portfolio']
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
