export interface Role {
  when: string;
  org: string;
  role: string;
  /** Bullet list, used when the role has several points. */
  bullets?: string[];
  /** Single paragraph, used when the role has one summary line. */
  summary?: string;
}

export const experience: Role[] = [
  {
    when: 'June 2025 to now',
    org: 'Alliance Software',
    role: 'Software Developer',
    bullets: [
      'Building billing, cashiering, and reporting features for the mWell Hospital Information System, plus Playwright test automation for its cashiering flows.',
      'Building insurance partner APIs for the mWell patient platform in a NestJS monorepo.',
      'Built SAP facing APIs and a batching procedure for large record volumes on SIRIUS, and delivered WITS data tools across three rebuilds in Python, C#, and Java.',
      'Work in small teams using Azure DevOps, Bitbucket, Jira, and multi repository Git workflows.',
    ],
  },
  {
    when: '2025 to now',
    org: 'Independent practice',
    role: 'AI Automation Engineer',
    summary:
      'Automation, AI agent, and infrastructure work for clients in real estate, construction, coaching, and content, delivered as projects and ongoing retainers with written scope before every build.',
  },
  {
    when: 'Internship',
    org: 'Encloudment',
    role: 'Web Developer Intern',
    summary:
      'Three month remote internship contributing to front end and back end features, debugging, and team Git workflows.',
  },
  {
    when: '2021 to 2025',
    org: 'University of Cebu',
    role: 'BS Computer Engineering',
    summary:
      'Lapu-Lapu and Mandaue campus. Academic projects included an RFID credit and user management system (Flask, Arduino, Raspberry Pi), an Android food ordering app with Firebase, and an OpenAI powered documentation generator.',
  },
];
