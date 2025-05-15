import styles from "@/app/work/components/ProjectLink.module.scss";

const projects = [
  {
    title: "Lmes",
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
    title: "Webinar",
    link: "https://www.buffchennai.com/campaigns/workshops/kickstarter-creative-designing-workshop",
    image: "/images/projects/webinar.png",
  },
  {
    title: "Bootcamp",
    link: "https://buffchennai.com/campaigns/bootcamps/uiux",
    image: "/images/projects/bootcamp.png",
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
    title: "Viss-School",
    link: "https://viss-school.vercel.app/",
    image: "/images/projects/viss.png",
  },
  {
    title: "Yellow-dubai",
    link: "https://yellowdubai.com/",
    image: "/images/projects/yellow.png",
  },
  {
    title: "Career Guidance by Dr.Sivabalan",
    link: "  https://www.careerguidancebydrsivabalan.com/
,
    image: "/images/projects/siva.png",
  },
];

const ProjectSection = () => {
  return (
    <section className={styles.projectSection}>
      <h2 className={styles.projectTitle}>My Awesome Projects</h2>
      <div className={styles.projectGrid}>
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectCard}
          >
            <img
              src={project.image}
              alt={project.title}
              className={styles.projectImage}
            />
            <h3 className={styles.projectName}>{project.title}</h3>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
