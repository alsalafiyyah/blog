import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Helper function to safely transform single strings or nulls into arrays
const preprocessArray = z.preprocess((val) => {
  if (!val) return [];
  if (typeof val === 'string') return [val];
  return val;
}, z.array(z.string()).optional());

const fatwas = defineCollection({
  loader: glob({ 
    pattern: '**/[^_]*.md', 
    base: './src/content/fatwas',
    generateId: ({ entry }) => {
      return entry
        .replace(/\.md$/, '') // Remove file extension
        .replace(/(^|\/)(\d{4}-\d{2}-\d{2}-)/g, '$1'); // Strip date prefixes even in subdirectories
    }
  }),
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
    link: z.string().optional(),
    active: z.string().optional(),
    publisher: z.string().optional(),
    img: z.string().optional(),
    featured: z.boolean().optional(),
    published: z.boolean().optional(),
    mass_edited: z.boolean().optional(),
    translation: z.boolean().optional(),
    featured_muqolat: z.boolean().optional(),
    category: preprocessArray,
    categories: preprocessArray,
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
  })
});

const biography = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/biography' }),
  schema: z.object({
    name: z.string().optional(),
    title: z.string(),
    official_web: z.string().optional(),
    publisher: z.string().optional(),
    summary: z.string(),
  }),
});

export const collections = { fatwas, biography };