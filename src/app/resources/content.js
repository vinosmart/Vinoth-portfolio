import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Vinoth",
  lastName: "Kumar",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Front-End Developer",
  avatar: "/images/avatar.jpg",
  location: "India/Tamilnadu", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Tamil"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/vinosmart",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/vinoth-kumar-489465166/",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Front-End Developer</>,
  subline: (
    <>
      I'm Vinoth, a Front-End Developer where I craft intuitive
      <br /> user experiences. After hours, I build my own projects.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: true,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Vinoth is a Front-End Developer with a passion for transforming complex
        challenges into simple, elegant software solutions. His work spans
        digital interfaces, interactive experiences, and the convergence of
        design and technology.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Buff",
        timeframe: "Oct 2024 - present",
        role: "Front-End Developer ",
        achievements: [],
        images: [],
      },
      {
        company: "Primesite Innovation",
        timeframe: "Apr 2024 - Oct 2024",
        role: "Front-End Developer (Freelancing)",
        achievements: [],
        images: [],
      },

      {
        company: "ZoomLocal",
        timeframe: "Jan 2024 - Apr 2024",
        role: "Front-End Developer",
        achievements: [],
        images: [],
      },
      {
        company: "LMES",
        timeframe: "Aug 2022 - Dec 2023",
        role: "Front-End Developer",

        achievements: [],
        images: [],
      },
    ],
  },
  studies: {
    display: false,
    title: "Studies",
    institutions: [
      {
        name: "",
        description: <>Studied software engineering.</>,
      },
      {
        name: "Build the Future",
        description: <>Studied online marketing and personal branding.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "Website Development",
        description: (
          <>
            Specializing in building high-performance mobile and desktop
            applications, ensuring seamless user experiences and rapid delivery.
          </>
        ),
        images: [
          {
            src: "/images/chitti.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/car.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Nuxt js",
        description: (
          <>
            Expert in developing dynamic and responsive web applications using
            Nuxt.js, ensuring fast, SEO-friendly, and scalable solutions.
          </>
        ),

        images: [
          {
            src: "/images/fly.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/maker.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "SEO",
        description: (
          <>
            Expert in implementing SEO strategies to boost organic traffic,
            improve search engine rankings, and optimize websites for maximum
            visibility.
          </>
        ),

        images: [
          {
            src: "/images/8.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Tailwind CSS",
        description: <>Make pretty and effective style in Web Apps.</>,
        images: [
          {
            src: "/images/karyon.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/digital.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Figma",
        description: (
          <>
            Skilled in designing and prototyping responsive web and mobile
            interfaces using Figma, focusing on user-centered design.
          </>
        ),

        images: [
          {
            src: "/images/figma1.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/figma2.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Wordpress",
        description: <>Building web with more responsive and style.</>,
        images: [
          {
            src: "/images/3.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/buff.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    // Other images omitted for brevity
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
