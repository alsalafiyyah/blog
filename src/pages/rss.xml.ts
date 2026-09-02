import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async (context) => {
  const allFatwas = (await getCollection('fatwas')).sort(
    (a: any, b: any) => b.data.date.valueOf() - a.data.date.valueOf()
  );

  return rss({
    title: 'Authentic Islamic Knowledge & Fatwas',
    description: 'Latest fatwas, scholarly answers, and articles published on our database.',
    site: context.site || 'https://alsalafiyyah.github.io/blog',
    items: allFatwas.map((post: any) => {
      const cleanId = post.id.includes('/') ? post.id.split('/').pop() : post.id;
      return {
        title: post.data.title,
        description: post.data.summary,
        pubDate: post.data.date,
        link: `/blog/fatwas/${cleanId}/`,
        author: post.data.shaykh || undefined,
        categories: post.data.category || [],
      };
    }),
    customData: `<language>en-us</language>`,
  });
};