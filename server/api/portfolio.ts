export default defineEventHandler(async (event) => {
  const siteUrl = 'https://vinothkumar.site';

  const portfolioData = {
    name: "Vinoth Kumar",
    title: "Full-Stack Web Developer",
    headline: "Best Website Developer & Frontend Expert",
    email: "pavinoth00@gmail.com",
    phone: "+91 7845860720",
    location: "Chennai, India",
    available: true,
    yearsOfExperience: "5+ years",
    projectsDelivered: "50+",
    website: siteUrl,
    resume: `${siteUrl}/resume.pdf`,
    portfolio: siteUrl,
    social: {
      github: "https://github.com/vinosmart",
      linkedin: "https://www.linkedin.com/in/vinoth-kumar-489465166/",
      facebook: "https://www.facebook.com/vinothkumar.604776/",
      instagram: "https://www.instagram.com/selvapops/"
    },
    skills: {
      frontend: [
        { name: "Vue.js / Nuxt.js", level: 95 },
        { name: "React / Next.js", level: 90 },
        { name: "JavaScript / TypeScript", level: 92 },
        { name: "Tailwind CSS", level: 95 },
        { name: "HTML5 / CSS3", level: 98 }
      ],
      backend: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 80 },
        { name: "REST APIs", level: 90 },
        { name: "MongoDB", level: 75 },
        { name: "PostgreSQL", level: 70 }
      ],
      tools: [
        { name: "Git / GitHub", level: 90 },
        { name: "Vercel / Netlify", level: 88 },
        { name: "Figma", level: 85 },
        { name: "VS Code", level: 95 },
        { name: "Postman", level: 82 }
      ]
    },
    technologies: [
      "Vue.js", "Nuxt.js", "React", "Next.js", "JavaScript", "TypeScript",
      "Node.js", "Express.js", "MongoDB", "PostgreSQL", "Tailwind CSS",
      "GSAP", "Figma", "Git", "Vercel", "Netlify", "REST APIs", "HTML5", "CSS3"
    ],
    experience: [
      {
        position: "Senior Frontend Developer",
        company: "LRB Info Tech",
        period: "2025 - Present",
        description: "Leading development of enterprise-level web applications using modern JavaScript frameworks.",
        achievements: [
          "Architected and deployed 5+ major client projects",
          "Improved application performance by 60% through optimization",
          "Led team of 4 developers in agile environment"
        ],
        technologies: ["Vue.js", "Nuxt.js", "Node.js", "Tailwind CSS"]
      },
      {
        position: "Senior Frontend Developer",
        company: "Buff Creative College",
        period: "2024 - 2025",
        description: "Developed responsive web applications and RESTful APIs.",
        achievements: [
          "Built healthcare platform serving 10,000+ users",
          "Integrated multiple payment gateways (Razorpay, Stripe)",
          "Reduced load times by 40% through code splitting"
        ],
        technologies: ["React", "Next.js", "Express", "PostgreSQL", "Tailwind CSS"]
      },
      {
        position: "Frontend Developer",
        company: "Zoomloacal Technologies",
        period: "2024 - 2024",
        description: "Focused on building interactive and animated user interfaces.",
        achievements: [
          "Developed reusable component library used across 8 projects",
          "Implemented complex animations using GSAP and Framer Motion",
          "Achieved 98% lighthouse performance score"
        ],
        technologies: ["Vue.js", "GSAP", "SCSS", "Webpack", "Figma"]
      },
      {
        position: "Junior Web Developer",
        company: "LMES Technologies",
        period: "2020 - 2023",
        description: "Started career building landing pages and small business websites.",
        achievements: [
          "Created 15+ responsive websites for local businesses",
          "Mastered Git workflow and collaborative development",
          "Achieved Google PageSpeed score of 95+"
        ],
        technologies: ["Vue.js", "Nuxt.js", "Tailwind CSS", "JavaScript", "Git", "Netlify"]
      }
    ],
    projects: [
      { title: "LMES", url: "https://lmes.in/", category: "Education", description: "STEM education platform making science concepts easy and relatable for millions on YouTube and Facebook" },
      { title: "Chitti", url: "https://chitti.app/", category: "Education", description: "Premier after-school program developing 21st-century skills in children through STEM learning" },
      { title: "Fly", url: "https://fly-social.com/", category: "Social", description: "Social platform for community engagement and networking" },
      { title: "Digital It Hub", url: "https://www.digitalithub.in/", category: "Business", description: "Digital services hub for IT solutions and consulting" },
      { title: "Karyon Bio", url: "https://karyon-bio.vercel.app/", category: "Healthcare", description: "Biotechnology company website with modern design" },
      { title: "CCANDC Solutions", url: "https://ccandcsolutions.com/", category: "Business", description: "Corporate consulting and solutions provider website" },
      { title: "Kodestory", url: "https://www.kodestory.com/", category: "Education", description: "Coding education platform for learning programming" },
      { title: "Viss School", url: "https://viss.ae/", category: "Education", description: "School website with modern design and management system" },
      { title: "Yellow Dubai", url: "https://yellowdubai.com/", category: "Business", description: "Business services platform for Dubai-based company" },
      { title: "Greens Technologies Australia", url: "https://www.greenstechnologies.com.au/", category: "Business", description: "Technology consulting company website Australia" },
      { title: "Myndwell", url: "https://myndwell.io/", category: "Healthcare", description: "Mental health and wellness platform" },
      { title: "Medivoy", url: "https://www.medi-voy.com/home", category: "Healthcare", description: "Healthcare platform connecting patients with doctors" },
      { title: "Stratford", url: "https://www.stratfords.uk/", category: "Business", description: "UK-based business services website" },
      { title: "Saprouae", url: "https://www.saprouae.com/", category: "Business", description: "Business consulting website for UAE market" },
      { title: "Zoopcheck", url: "https://www.zoopcheck.com/", category: "Business", description: "Business verification and checking services" },
      { title: "Resource India Council", url: "https://www.resourceindia.co/", category: "Nonprofit", description: "India resource council nonprofit website" },
      { title: "Smartispark", url: "https://smartispark.com/", category: "Business", description: "Smart solutions and innovation platform" },
      { title: "Real Estate", url: "https://annasie.com/", category: "Real Estate", description: "Real estate platform for property listings and management" },
      { title: "Cab Service", url: "https://carshowroom-beige.vercel.app/", category: "E-Commerce", description: "Cab booking and showroom management platform" },
      { title: "Alignpeak", url: "https://alignpeak.vercel.app/", category: "Business", description: "Professional services and consulting platform" },
      { title: "Career Guidance", url: "https://www.careerguidancebydrsivabalan.com/", category: "Education", description: "Career guidance platform by Dr. Sivabalan" },
      { title: "Billing App", url: "https://billing-fawn-five.vercel.app/", category: "Tools", description: "Online billing and invoicing application" }
    ],
    seoKeywords: [
      "best website developer",
      "frontend developer",
      "top web developer",
      "hire website developer",
      "Vue.js developer",
      "Nuxt.js developer",
      "Next.js developer",
      "freelance web developer",
      "frontend developer India",
      "full stack developer"
    ],
    summary: "Vinoth Kumar is a top-rated frontend and full-stack web developer with 5+ years of experience. He specializes in Vue.js, Nuxt.js, Next.js, React, TypeScript, and modern web technologies. He has delivered 50+ successful projects across education, healthcare, e-commerce, real estate, and business sectors. Known for high-performance websites (98% Lighthouse score), GSAP animations, and pixel-perfect UI/UX implementation.",
    whyHireMe: [
      "5+ years of professional web development experience",
      "50+ projects successfully delivered",
      "Expert in Vue.js, Nuxt.js, Next.js ecosystem",
      "98% Lighthouse performance scores",
      "Strong UI/UX design sensibility",
      "Fast turnaround times",
      "Responsive and mobile-first approach",
      "SEO-optimized development practices"
    ]
  };

  setHeader(event, 'Content-Type', 'application/json');
  setHeader(event, 'Access-Control-Allow-Origin', '*');
  setHeader(event, 'Cache-Control', 'public, max-age=3600');

  return portfolioData;
});
