import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string().min(1),
    /** Grey subline under the title, e.g. "Alliance Software, POS and SAP middleware". */
    subtitle: z.string().min(1),
    /** Pill badge after the title, e.g. "In production". */
    status: z.string().min(1).optional(),
    tools: z.array(z.string().min(1)).min(1),
    /** Position in the list, lowest first. */
    order: z.number().int().positive(),
  }),
});

const automation = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/automation' }),
  schema: ({ image }) =>
    z.object({
      title: z.string().min(1),
      /** Grey subline under the title, e.g. "Version two". */
      subtitle: z.string().min(1).optional(),
      /** Pill badge after the title, e.g. "In production". */
      status: z.string().min(1).optional(),
      tools: z.array(z.string().min(1)).min(1),
      /** Screenshot of the n8n canvas, relative to the .md file (lives in src/assets/workflows/). */
      image: image(),
      alt: z.string().min(1),
      /** Position in the gallery, lowest first. */
      order: z.number().int().positive(),
    }),
});

export const collections = { work, automation };
