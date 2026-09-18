export const site = {
  name: 'Axl Cabunoc',
  title: 'Axl Cabunoc | Full stack engineer and AI automation builder',
  description:
    'Axl Cabunoc builds full stack production systems and AI automation with n8n and Claude. Based in Cebu City, Philippines.',
  ogDescription: 'Full stack production systems and AI automation that runs for real clients.',
  /** The h1 on the home page. */
  tagline: 'I build full stack systems and the AI automation that runs on them.',
  /** Short line under the name on the generated Open Graph image. */
  role: 'Full stack engineer and AI automation builder',
  bio: [
    'Software engineer at Alliance Software, shipping healthcare and enterprise systems across NestJS, Laravel, Angular, Java, PostgreSQL, and AWS. Alongside that, I run an independent practice building AI automation with n8n and Claude for clients in the US and New Zealand, on projects and ongoing retainers.',
    "The two sides make each other better. Production engineering is why my automations are tested, secure, and maintainable, and automation work keeps me close to what a business actually needs from its software. Long term, I'm focused on AI infrastructure and intelligent automation.",
  ],
  email: 'daxlax5@gmail.com',
  linkedin: 'https://www.linkedin.com/in/axlcabunoc',
  github: 'https://github.com/daxlax5',
  /** Served from public/, so the path is absolute and works from any page. */
  resume: '/Axl-Cabunoc-Resume.pdf',
  location: 'Cebu City, Philippines',
  jobTitle: 'Software Engineer',
  employer: 'Alliance Software',
  intro: {
    work: 'Production systems from my role at Alliance Software, side by side with independent client builds. Client names stay private, so each engagement is described by what the work was.',
    workflows:
      'The automation side in detail: workflows built in n8n over the past year, combining LLMs, external APIs, and databases. The ones marked in production are running for clients, and each screenshot is the actual workflow canvas.',
    contact:
      'Open to software engineering and AI automation roles, remote or in Cebu, and to automation projects and retainers. Email is the fastest way to reach me.',
  },
} as const;
