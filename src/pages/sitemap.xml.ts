// Builds /sitemap.xml automatically from the pages in this folder.
// Internal and error pages are left out.
import type { APIRoute } from 'astro';

const pageFiles = Object.keys(import.meta.glob('./**/*.astro'));
const excluded = ['404', 'style-guide'];

const paths = pageFiles
  .map((file) => file.replace(/^\.\//, '').replace(/\.astro$/, ''))
  .filter((name) => !excluded.includes(name) && !name.split('/').some((part) => part.startsWith('_') || part.startsWith('[')))
  .map((name) => (name === 'index' ? '/' : `/${name.replace(/\/index$/, '')}/`))
  .sort((a, b) => (a === '/' ? -1 : b === '/' ? 1 : a.localeCompare(b)));

export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL('https://stay-dry.uk/');
  const urls = paths.map((path) => `  <url><loc>${new URL(path, base).href}</loc></url>`).join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
