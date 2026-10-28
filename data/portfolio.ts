// data/portfolio.ts
// Single source of truth for projects, journey and SEO copy.
// Used by the page components, the JSON-LD graph, /api/portfolio and /ai.json.

export const SITE_URL = "https://vinothkumar.site";

export const profile = {
  name: "Vinoth Kumar",
  alternateNames: [
    "Vinothkumar",
    "VinothKumar",
    "Vinothkumar M",
    "Vinoth Kumar M",
  ],
  headline: "Full Stack Developer & Frontend Developer",
  jobTitle: "Software Developer at Medivoy (Healthcare Ecosystem)",
  email: "pavinoth00@gmail.com",
  phone: "+91 7845860720",
  city: "Chennai",
  region: "Tamil Nadu",
  country: "India",
  yearsOfExperience: 5,
  careerStartYear: 2020,
  image: `${SITE_URL}/og-image.jpg`,
  social: {
    github: "https://github.com/vinosmart",
    linkedin: "https://www.linkedin.com/in/vinoth-kumar-489465166/",
    facebook: "https://www.facebook.com/vinothkumar.604776/",
    instagram: "https://www.instagram.com/selvapops/",
  },
  award: {
    name: "Best Website Developer – Global Freelancers Festival 2026",
    date: "2026-02-28",
    organiser: "Chennai Freelancers Club",
    venue: "IITM Research Park, Chennai",
  },
};

export const seo = {
  title: "Vinothkumar | Full Stack & Frontend Developer in Chennai",
  description:
    "Vinothkumar is an award-winning full stack developer, frontend developer and website developer from Chennai, India. 5+ years building fast, SEO-ready websites with Vue.js, Nuxt.js, Next.js & React.",
  keywords: [
    "Vinoth Kumar",
    "Vinothkumar",
    "Vinothkumar M",
    "Vinoth Kumar developer",
    "Vinothkumar web developer",
    "best website developer",
    "best website developer in Chennai",
    "best web developer in India",
    "frontend developer",
    "frontend developer Chennai",
    "full stack developer",
    "full stack developer Chennai",
    "software developer",
    "software developer Chennai",
    "website developer",
    "website designer Chennai",
    "freelance web developer",
    "freelance website developer India",
    "hire website developer",
    "hire frontend developer",
    "Vue.js developer",
    "Nuxt.js developer",
    "Next.js developer",
    "React developer",
    "Node.js developer",
    "Tailwind CSS developer",
    "SEO friendly website developer",
    "website development company Chennai",
    "web application developer",
    "UI developer",
  ],
};

export const experiences = [
  {
    id: 1,
    position: "Senior Frontend Developer",
    company: "Medivoy (Healthcare Ecosystem)",
    period: "2025 - Present",
    startYear: 2025,
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
    startYear: 2024,
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
    startYear: 2024,
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
    startYear: 2020,
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

export type Project = {
  title: string;
  link: string;
  image: string;
  category: string;
  description: string;
  tags?: string[];
  isNew?: boolean;
};

// Newest work first. `isNew` projects get a badge and lead the grid.
export const projects: Project[] = [
  {
    title: "Sayeesham",
    link: "https://www.sayeesham.com/",
    image: "/images/projects/sayeesham.webp",
    category: "Education",
    description:
      "Home of Indian music & arts in Freising, Germany – Carnatic music classes and the traditional art of Saisri.",
    tags: ["Arts & Music", "International"],
    isNew: true,
  },
  {
    title: "Little Laudable Learners",
    link: "https://littlelaudablelearners.com/",
    image: "/images/projects/littlelaudable.webp",
    category: "Education",
    description:
      "Live online small-group classes building reading, writing and communication skills for children aged 3.5–13.",
    tags: ["EdTech", "Kids Learning"],
    isNew: true,
  },
  {
    title: "MG Foundation",
    link: "https://www.mgfoundation.site/",
    image: "/images/projects/mgfoundation.webp",
    category: "Nonprofit",
    description:
      "Chennai-based public charitable trust serving daily meals to the homeless, the elderly and street animals.",
    tags: ["Charity", "Chennai"],
    isNew: true,
  },
  {
    title: "Your Dental CEO",
    link: "https://www.yourdentalceo.in/",
    image: "/images/projects/yourdentalceo.webp",
    category: "Healthcare",
    description:
      "Brand website for South India's first clinical business strategist, helping dental clinic owners scale.",
    tags: ["Dental", "Consulting"],
    isNew: true,
  },
  {
    title: "Arul Sabari",
    link: "https://arul-sabari.vercel.app/",
    image: "/images/projects/arulsabari.webp",
    category: "Portfolio",
    description:
      "Personal brand site for the founder of Aharam Services and Executive Director of CEDOI India.",
    tags: ["Personal Brand", "Vite"],
    isNew: true,
  },
  {
    title: "Aharam Services",
    link: "https://aharam-services.vercel.app/",
    image: "/images/projects/aharam.webp",
    category: "Business",
    description:
      "Chennai recruitment & human capital company – permanent hiring, campus recruitment, executive search and job fairs.",
    tags: ["Recruitment", "Chennai"],
    isNew: true,
  },
  {
    title: "LRB ACID Tool",
    link: "https://lrb-acid-tool.vercel.app/",
    image: "/images/projects/lrbacid.webp",
    category: "Tools",
    description:
      "All-in-one security, performance, SEO, AI search (GEO), privacy and DevOps audit engine for any website.",
    tags: ["Nuxt.js", "SEO Audit"],
    isNew: true,
  },
  {
    title: "RK Elite Construction",
    link: "https://www.rkeliteconstruction.in/",
    image: "/images/projects/rkelite.webp",
    category: "Real Estate",
    description:
      "Residential, commercial, industrial and turnkey construction services in Chennai with lead-generation flows.",
    tags: ["Construction", "Lead Gen"],
    isNew: true,
  },
  {
    title: "Dr. Ahamed Muneef",
    link: "https://www.drahamedmuneef.com/",
    image: "/images/projects/drahamed.webp",
    category: "Healthcare",
    description:
      "Website for a DHA & DOH licensed specialist general surgeon in Dubai with consultation booking.",
    tags: ["Astro", "Doctor Website", "UAE"],
    isNew: true,
  },
  {
    title: "Zentrix India",
    link: "https://www.zentrixindia.com/",
    image: "/images/projects/zentrix.webp",
    category: "Education",
    description:
      "STEM education company behind ZenStore, India's first career concept store, and the ZenKidz learning platform.",
    tags: ["STEM", "Franchise"],
    isNew: true,
  },
  {
    title: "Zentara Foundation",
    link: "https://www.zentarafoundation.org/",
    image: "/images/projects/zentara.webp",
    category: "Nonprofit",
    description:
      "Free hands-on AI, robotics, drones and 3D printing education for underprivileged classrooms across India.",
    tags: ["NGO", "STEM"],
    isNew: true,
  },
  {
    title: "Jekyll & Hyde",
    link: "https://jekyll-pi-lilac.vercel.app/",
    image: "/images/projects/jekyll.webp",
    category: "Business",
    description:
      "Premium events & experiences venue with a 3D WebGL hero – corporate events, celebrations and nightlife.",
    tags: ["3D / WebGL", "Hospitality"],
    isNew: true,
  },
  {
    title: "LMES",
    link: "https://lmes.in/",
    image: "/images/projects/lmes.png",
    category: "Education",
    description:
      "STEM education platform making science concepts easy and relatable for millions on YouTube and Facebook.",
  },
  {
    title: "Chitti",
    link: "https://chitti.app/",
    image: "/images/projects/chitti.png",
    category: "Education",
    description:
      "Premier after-school program developing 21st-century skills in children through STEM learning.",
  },
  {
    title: "Fly",
    link: "https://fly-social.com/",
    image: "/images/projects/fly.png",
    category: "Business",
    description: "Social platform for community engagement and networking.",
  },
  {
    title: "Chitti Engineering",
    link: "https://chitti.app/engineering/",
    image: "/images/projects/engineering.png",
    category: "Education",
    description:
      "Engineering programme pages for the Chitti learning platform.",
  },
  {
    title: "Chitti Workshop Landing Pages",
    link: "https://chitti.app/workshops",
    image: "/images/projects/landing.png",
    category: "Education",
    description: "High-conversion workshop landing pages for Chitti.",
  },
  {
    title: "Digital It Hub",
    link: "https://www.digitalithub.in/",
    image: "/images/projects/digital.png",
    category: "Business",
    description: "Digital services hub for IT solutions and consulting.",
  },
  {
    title: "Karyon Bio",
    link: "https://karyon-bio.vercel.app/",
    image: "/images/projects/karyon.png",
    category: "Healthcare",
    description: "Biotechnology company website with modern design.",
  },
  {
    title: "Cab Service",
    link: "https://carshowroom-beige.vercel.app/",
    image: "/images/projects/cab.png",
    category: "E-Commerce",
    description: "Cab booking and showroom website.",
  },
  {
    title: "CCANDC Solutions",
    link: "https://ccandcsolutions.com/",
    image: "/images/projects/ccandc.png",
    category: "Business",
    description: "Corporate consulting and solutions provider website.",
  },
  {
    title: "Annasie Real Estate",
    link: "https://annasie.com/",
    image: "/images/projects/real.png",
    category: "Real Estate",
    description: "Real estate platform for property listings and management.",
  },
  {
    title: "Alignpeak",
    link: "https://alignpeak.vercel.app/",
    image: "/images/projects/alignpeak.png",
    category: "Business",
    description: "Professional services and consulting website.",
  },
  {
    title: "Kodestory",
    link: "https://www.kodestory.com/",
    image: "/images/projects/kodestory.png",
    category: "Education",
    description: "Coding education platform for learning programming.",
  },
  {
    title: "Viss School",
    link: "https://viss.ae/",
    image: "/images/projects/viss.png",
    category: "Education",
    description: "School website for a UAE institution.",
  },
  {
    title: "Yellow Dubai",
    link: "https://yellowdubai.com/",
    image: "/images/projects/yellow.png",
    category: "Business",
    description: "Business services website for a Dubai-based company.",
  },
  {
    title: "Career Guidance by Dr. Sivabalan",
    link: "https://www.careerguidancebydrsivabalan.com/",
    image: "/images/projects/siva.png",
    category: "Education",
    description: "Career guidance platform by Dr. Sivabalan.",
  },
  {
    title: "Zeta Web",
    link: "https://zeta-web-one.vercel.app/",
    image: "/images/projects/zeta.png",
    category: "Business",
    description: "Modern marketing website.",
  },
  {
    title: "Buff Institute of Design",
    link: "https://www.buffinstituteofdesign.com/",
    image: "/images/projects/buff.png",
    category: "Education",
    description: "Design institute website with course and admission pages.",
  },
  {
    title: "Buff Creative College",
    link: "https://buffcreativecollege.com/",
    image: "/images/projects/buff2.png",
    category: "Education",
    description: "Creative college website with programmes and admissions.",
  },
  {
    title: "Greens Technologies Australia",
    link: "https://www.greenstechnologies.com.au/",
    image: "/images/projects/green.png",
    category: "Education",
    description: "IT training and technology institute website for Australia.",
  },
  {
    title: "DreamTech",
    link: "https://dreamtech-services.vercel.app/",
    image: "/images/projects/dream.png",
    category: "Business",
    description: "IT services company website.",
  },
  {
    title: "Shiv Gaming",
    link: "https://shiv-gamings.vercel.app/",
    image: "/images/projects/gaming.png",
    category: "Business",
    description: "Gaming brand website.",
  },
  {
    title: "Billing App",
    link: "https://billing-fawn-five.vercel.app/",
    image: "/images/projects/billing.png",
    category: "Tools",
    description: "Online billing and invoicing application.",
  },
  {
    title: "Zoopcheck",
    link: "https://www.zoopcheck.com/",
    image: "/images/projects/zoopcheck.png",
    category: "Business",
    description: "Verification and checking services website.",
  },
  {
    title: "Stratford",
    link: "https://www.stratfords.uk/",
    image: "/images/projects/startford.png",
    category: "Business",
    description: "UK-based business website.",
  },
  {
    title: "Image Compressor",
    link: "https://dreamtech-services.vercel.app/compressor",
    image: "/images/projects/compressor.png",
    category: "Tools",
    description: "In-browser image compression tool.",
  },
  {
    title: "Saprouae",
    link: "https://www.saprouae.com/",
    image: "/images/projects/saprouae.png",
    category: "Business",
    description: "Business website for the UAE market.",
  },
  {
    title: "Digitalharan Portfolio",
    link: "https://www.digitalharan10x.com/",
    image: "/images/projects/digitalharn.png",
    category: "Portfolio",
    description: "Personal brand and portfolio website.",
  },
  {
    title: "Ramya Portfolio",
    link: "https://ramya-portfolio-theta.vercel.app/",
    image: "/images/projects/ramya.png",
    category: "Portfolio",
    description: "Custom portfolio website showcasing professional work.",
  },
  {
    title: "Advance Link",
    link: "https://www.advancedlinktrade.com/",
    image: "/images/projects/advance.png",
    category: "Business",
    description: "Trading company website.",
  },
  {
    title: "Resource India Council",
    link: "https://www.resourceindia.co/",
    image: "/images/projects/resource.png",
    category: "Nonprofit",
    description: "Council website for Resource India.",
  },
  {
    title: "Nx Digita",
    link: "https://www.nxdigita.com/",
    image: "/images/projects/nx.png",
    category: "Business",
    description: "Digital agency website.",
  },
  {
    title: "Yilixin Automation",
    link: "https://www.yilixinautomation.com/",
    image: "/images/projects/yilixin.png",
    category: "Business",
    description: "Industrial automation company website.",
  },
  {
    title: "Monish Portfolio",
    link: "https://monish-portfolio-tau.vercel.app/",
    image: "/images/projects/monish.png",
    category: "Portfolio",
    description: "Custom portfolio website showcasing professional work.",
  },
  {
    title: "Fifty Stars LLC",
    link: "https://fifty-stars.vercel.app/",
    image: "/images/projects/fifty.png",
    category: "Business",
    description: "Company website for Fifty Stars LLC.",
  },
  {
    title: "Myndwell",
    link: "https://myndwell.io/",
    image: "/images/projects/myndwell.png",
    category: "Healthcare",
    description: "Mental health and wellness platform.",
  },
  {
    title: "Reshma Portfolio",
    link: "https://reshma-portfolio-gray.vercel.app/",
    image: "/images/projects/reshma.png",
    category: "Portfolio",
    description: "Custom portfolio website showcasing professional work.",
  },
  {
    title: "MindScribe Education",
    link: "https://mindscribeeducation.in/",
    image: "/images/projects/mind.png",
    category: "Education",
    description: "Education services website.",
  },
  {
    title: "Pulse N Grains",
    link: "https://pulsengranis.vercel.app/",
    image: "/images/projects/pulse.png",
    category: "E-Commerce",
    description: "Pulses and grains store website.",
  },
  {
    title: "The Project B",
    link: "https://www.theproject-b.com/",
    image: "/images/projects/books.png",
    category: "Business",
    description: "Books and publishing website.",
  },
  {
    title: "Vinaya Mart",
    link: "https://vinayamart-gamma.vercel.app/",
    image: "/images/projects/vinaya.png",
    category: "E-Commerce",
    description: "Online grocery and retail store.",
  },
  {
    title: "Medivoy",
    link: "https://www.medi-voy.com/home",
    image: "/images/projects/medivoy.png",
    category: "Healthcare",
    description:
      "Healthcare platform connecting patients with doctors for consultations.",
  },
  {
    title: "CDN Tool",
    link: "https://cdn-tool-theta.vercel.app/",
    image: "/images/projects/cdn.png",
    category: "Tools",
    description: "Web-based CDN utility tool for developers.",
  },
  {
    title: "V0 Drop Website",
    link: "https://v0-drop-website-build.vercel.app/",
    image: "/images/projects/drop.png",
    category: "Business",
    description: "Product landing website.",
  },
  {
    title: "Sir Mutha School",
    link: "https://stage.sirmlady.sirmuthaschool.edu.in/",
    image: "/images/projects/sir.png",
    category: "Education",
    description: "School website for Sir Mutha School, Chennai.",
  },
  {
    title: "Yuktrix",
    link: "http://yuktrix.in/",
    image: "/images/projects/yuktirx.png",
    category: "Business",
    description: "Technology company website.",
  },
  {
    title: "Smartispark",
    link: "https://smartispark.com/",
    image: "/images/projects/spark.png",
    category: "Business",
    description: "Smart solutions and innovation website.",
  },
  {
    title: "Ayyapan & Co",
    link: "https://masspowerinfra.com/",
    image: "/images/projects/ayapan.png",
    category: "Real Estate",
    description: "Infrastructure company website.",
  },
  {
    title: "VJ Luxurious Boutique",
    link: "https://www.vjluxuriousboutique.com/",
    image: "/images/projects/vjluxuriousboutique.png",
    category: "E-Commerce",
    description: "Luxury boutique fashion website.",
  },
  {
    title: "Taken Care Services",
    link: "https://www.takencareservices.com/",
    image: "/images/projects/time.png",
    category: "Business",
    description: "Services company website.",
  },
  {
    title: "Vishthaw Group",
    link: "https://vishthawgroup.vercel.app/",
    image: "/images/projects/vishthawgroup.png",
    category: "Business",
    description: "Group company website.",
  },
  {
    title: "MSM Groups",
    link: "https://www.msmgroups.in/",
    image: "/images/projects/msmgroups.png",
    category: "Business",
    description: "Group company website.",
  },
  {
    title: "The Branding Wizards",
    link: "https://magic-brand-system.vercel.app/",
    image: "/images/projects/brand.png",
    category: "Business",
    description: "Branding agency website.",
  },
  {
    title: "Lifebalances",
    link: "https://www.lifebalances.online/",
    image: "/images/projects/lifebalances.png",
    category: "Healthcare",
    description: "Wellness and life-balance coaching website.",
  },
  {
    title: "Amarnath Portfolio",
    link: "https://3d-portfolio-fawn-kappa.vercel.app/",
    image: "/images/projects/amar.png",
    category: "Portfolio",
    description: "3D interactive portfolio website.",
  },
  {
    title: "IQAFIL",
    link: "https://www.iqafil.com/",
    image: "/images/projects/iqafil.png",
    category: "Business",
    description: "Company website for IQAFIL.",
  },
];

export const projectCount = projects.length;
// Headline number shown on the page and in AI/SEO copy (includes work not listed here).
export const projectsDelivered = "100+";

// Visible on the page (JourneySection) and mirrored in JSON-LD / llms.txt.
export const journey = [
  {
    year: "2020",
    title: "First line of production code",
    text: "Started as a Junior Web Developer at LMES Technologies in Chennai, shipping landing pages and small-business websites with Vue.js and Nuxt.js.",
    icon: "fa-seedling",
  },
  {
    year: "2023",
    title: "15+ websites & STEM platforms",
    text: "Built the LMES and Chitti learning platforms used by students across India, and reached 95+ Google PageSpeed scores as a habit.",
    icon: "fa-graduation-cap",
  },
  {
    year: "2024",
    title: "Frontend specialist",
    text: "Frontend Developer at Zoomloacal Technologies, then Senior Frontend Developer at Buff Creative College – GSAP animation, design systems, Next.js and payment integrations.",
    icon: "fa-wand-magic-sparkles",
  },
  {
    year: "2025",
    title: "Software Developer at Medivoy (Healthcare Ecosystem)",
    text: "Building software for the Medivoy healthcare ecosystem, while delivering freelance websites for clients in India, UAE, UK, Germany and Australia.",
    icon: "fa-rocket",
  },
  {
    year: "2026",
    title: "Best Website Developer award",
    text: "Named Best Website Developer at the Global Freelancers Festival 2026 by Chennai Freelancers Club at IITM Research Park, Chennai.",
    icon: "fa-trophy",
  },
];

export const faqs = [
  {
    q: "Who is Vinothkumar?",
    a: `Vinothkumar is a full stack developer, frontend developer and website developer from Chennai, India. He has 5+ years of experience, has delivered ${projectsDelivered} websites and web apps, and works as a Software Developer at Medivoy (Healthcare Ecosystem).`,
  },
  {
    q: "Who is the best website developer in Chennai?",
    a: "Vinoth Kumar was awarded Best Website Developer at the Global Freelancers Festival 2026 in Chennai. He builds fast, SEO-friendly websites with Vue.js, Nuxt.js, Next.js and React for businesses, schools, clinics and nonprofits.",
  },
  {
    q: "What does Vinoth Kumar specialise in?",
    a: "Frontend and full stack web development: Vue.js, Nuxt.js, Next.js, React, TypeScript, Tailwind CSS, Node.js, REST APIs, GSAP animation, technical SEO and Core Web Vitals performance.",
  },
  {
    q: "Can I hire Vinoth Kumar as a freelance web developer?",
    a: "Yes. Vinoth Kumar is open to freelance website and web application projects worldwide. Email pavinoth00@gmail.com or call +91 7845860720.",
  },
  {
    q: "What kinds of websites has Vinoth Kumar built?",
    a: "Education and EdTech platforms, healthcare and doctor websites, construction and real estate sites, nonprofit and NGO websites, recruitment portals, e-commerce stores, portfolios and developer tools for clients in India, UAE, UK, Germany and Australia.",
  },
];

export function buildPortfolioJson() {
  return {
    name: profile.name,
    alternateNames: profile.alternateNames,
    title: profile.headline,
    jobTitle: profile.jobTitle,
    email: profile.email,
    phone: profile.phone,
    location: `${profile.city}, ${profile.country}`,
    available: true,
    yearsOfExperience: `${profile.yearsOfExperience}+ years`,
    projectsDelivered,
    website: SITE_URL,
    resume: `${SITE_URL}/resume.pdf`,
    social: profile.social,
    award: profile.award,
    summary: faqs[0].a,
    journey,
    experience: experiences,
    projects: projects.map(({ title, link, category, description }) => ({
      title,
      url: link,
      category,
      description,
    })),
    faqs,
    seoKeywords: seo.keywords,
  };
}
