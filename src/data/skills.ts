export interface SkillGroup {
  label: string;
  items: string;
}

export const skills: SkillGroup[] = [
  { label: 'Languages', items: 'TypeScript, JavaScript, Python, Java, PHP, C#, SQL, Bash, HTML/CSS' },
  { label: 'Frameworks', items: 'NestJS, Laravel, Angular, React, Spring Boot, Spring Batch, Flask' },
  {
    label: 'Data and cloud',
    items: 'PostgreSQL, MySQL, MongoDB, Amazon Redshift, S3, Lambda, Supabase, SQLite, Firebase',
  },
  {
    label: 'Infrastructure',
    items: 'Docker, Ubuntu and Linux, SSH, Tailscale, Keycloak, Nx and pnpm monorepos',
  },
  {
    label: 'AI',
    items:
      'Claude and OpenAI integrations, Claude Code and Claude skills, AI agents, RAG and vector databases, structured outputs, Gemini, Perplexity, AI media generation (fal.ai, Kling, Higgsfield, Veo 3, ElevenLabs)',
  },
  {
    label: 'Automation',
    items:
      'n8n and n8n Cloud, REST APIs and webhooks, Apify, GoHighLevel, Apollo, Airtable, Slack, Google APIs, Tally',
  },
  {
    label: 'Quality and tooling',
    items:
      'Playwright, JUnit, Pytest, Jacoco, Postman, Insomnia, Git, Azure DevOps, Bitbucket, Jira, Jasper Reports',
  },
  { label: 'Hardware', items: 'Raspberry Pi, Arduino, RFID integration' },
];
