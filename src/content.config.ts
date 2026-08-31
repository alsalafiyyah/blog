import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    hijri: z.string().optional(),
    scholar: z.string().optional(),
    group: z.string().optional(),
    source: z.string().optional(),
    mp3: z.string().optional(),
    summary: z.string(),
  }),
});

// biography
const biography = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/biography' }),
  schema: z.object({
    name: z.string(),
    title: z.string(),
    died: z.string().optional(),
    summary: z.string(),
  }),
});

export const collections = { blog, biography };