import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    hijri: z.string().optional(),
    group: z.string().optional(),
    scholar: z.string().optional(),
    source: z.string().optional(),
    mp3: z.string().optional(),
    summary: z.string(),
    muftis: z.object({
      shaykh: z.array(
        z.object({
          name: z.string(),
          url: z.string(),
        })
      ).optional(),
    }).optional(),
  }),
});

const fatwas = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/fatwas' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    hijri: z.string().optional(),
    group: z.string().optional(),
    scholar: z.string().optional(),
    source: z.string().optional(),
    mp3: z.string().optional(),
    featured: z.boolean().optional(),
    category: z.array(z.string()).optional(),
    summary: z.string(),
    muftis: z.object({
      shaykh: z.array(
        z.object({
          name: z.string(),
          url: z.string(),
        })
      ).optional(),
    }).optional(),
  }),
});

const biography = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/biography' }),
  schema: z.object({
    name: z.string(),
    title: z.string(),
    died: z.string().optional(),
    summary: z.string(),
  }),
});

export const collections = { blog, fatwas, biography };