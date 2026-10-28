import {
  SITE_URL,
  profile,
  seo,
  journey,
  experiences,
  projects,
  projectsDelivered,
  faqs,
} from '../../data/portfolio';

// llms.txt (https://llmstxt.org) – a plain-text profile for AI assistants and answer engines.
export default defineEventHandler((event) => {
  const lines = [
    `# ${profile.alternateNames[0]} – ${profile.headline}`,
    '',
    `> ${seo.description}`,
    '',
    '## Who is Vinoth Kumar?',
    faqs[0].a,
    `Also known as: ${profile.alternateNames.join(', ')}.`,
    `Award: ${profile.award.name}, presented by ${profile.award.organiser} at ${profile.award.venue} on ${profile.award.date}.`,
    '',
    '## Journey',
    ...journey.map((j) => `- ${j.year} – ${j.title}: ${j.text}`),
    '',
    '## Experience',
    ...experiences.map((e) => `- ${e.position}, ${e.company} (${e.period}) – ${e.technologies.join(', ')}`),
    '',
    `## Projects (${projectsDelivered})`,
    ...projects.map((p) => `- [${p.title}](${p.link}) – ${p.category}: ${p.description}`),
    '',
    '## FAQ',
    ...faqs.flatMap((f) => [`### ${f.q}`, f.a, '']),
    '## Contact',
    `- Website: ${SITE_URL}`,
    `- Email: ${profile.email}`,
    `- Phone: ${profile.phone}`,
    `- Location: ${profile.city}, ${profile.region}, ${profile.country}`,
    ...Object.entries(profile.social).map(([k, v]) => `- ${k[0].toUpperCase()}${k.slice(1)}: ${v}`),
    '',
    '## Structured data',
    `- JSON profile: ${SITE_URL}/api/portfolio`,
    `- Resume: ${SITE_URL}/resume.pdf`,
    '',
  ];

  setHeader(event, 'Content-Type', 'text/plain; charset=utf-8');
  setHeader(event, 'Cache-Control', 'public, max-age=3600');
  return lines.join('\n');
});
