import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const fatwas = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/fatwas' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    hijri: z.string().optional(),
    group: z.string().optional(),
    scholar: z.string().optional(),
    shaykh: z.string().optional(),
    source: z.string().optional(),
    mp3: z.string().optional(),
    layout: z.string().optional(),
    author: z.string().optional(),
    lang: z.string().optional(),
    locale: z.string().optional(),
    url: z.string().optional(),
    active: z.string().optional(),
    publisher: z.string().optional(),
    img: z.string().optional(),
    layout: z.string().optional(),
    featured: z.boolean().optional(),
    published: z.boolean().optional(),
    mass_edited: z.boolean().optional(),
    translation: z.boolean().optional(),
    featured_muqolat: z.boolean().optional(),
    category: z.array(z.string()).optional(),
    categories: z.array(z.string()).optional(),
    shaykhs: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
    videoURL: z.string().optional(),
    videoID: z.string().optional(),
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

export const collections = { fatwas, biography };