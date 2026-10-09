/**
 * robots.txt مُولَّد وقت البناء — رابط الـsitemap يُبنى من site + base
 * في astro.config.mjs، فيبقى صحيحاً على مسار GitHub Pages (/Dr_S/)
 * وعلى جذر الدومين الحقيقي بلا أي تعديل يدوي.
 */
import type { APIRoute } from 'astro';
import { withBase } from '../utils/paths';

export const GET: APIRoute = ({ site }) => {
  const sitemapUrl = new URL(withBase('/sitemap-index.xml'), site).toString();
  const body = `User-agent: *\nAllow: /\n\nSitemap: ${sitemapUrl}\n`;
  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
