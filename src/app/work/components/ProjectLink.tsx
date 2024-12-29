import styles from '@/app/work/components/ProjectLink.module.scss';

const ProjectSection = () => {
  const projects = [
    { title: 'Lmes', link: 'https://lmes.in/' },
    { title: 'Chitti', link: 'https://chitti.app/' },
    { title: 'Fly', link: 'https://fly-social.com/' },
    { title: 'Engineering', link: 'https://chitti.app/engineering/' },
    { title: 'Landing Pages', link: 'https://chitti.app/workshops' },
    { title: 'Digital It Hub', link: 'https://www.digitalithub.in/' },
    { title: 'Karyon Bio', link: 'https://karyon-bio-omega.vercel.app/' },
    { title: 'Cab Service', link: 'https://carshowroom-beige.vercel.app/' },
    { title: 'Webinar ', link: 'https://www.buffchennai.com/campaigns/workshops/kickstarter-creative-designing-workshop' },
    { title: 'Bootcamp ', link: 'https://buffchennai.com/campaigns/bootcamps/uiux' },
    { title: 'Wordpress ', link: 'https://10web-site.ai/187/worthy-mudfish/' },
    { title: 'Kodestory ', link: 'https://www.kodestory.com/' },
    { title: 'Viss-School ', link: 'https://viss-school.vercel.app/' },






  ];

  return (
    <section className={styles.projectSection}>
     <img src="/images/avatar.jpg" alt="vinoth" className={styles.avatar} />

      <h2 className={styles.projectTitle}>My Awesome Projects</h2>
      <div className={styles.projectBadges}>
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectBadge}
          >
            {project.title}
          </a>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
