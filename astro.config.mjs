// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

import homeData from './src/data/home.json';


const siteUrl = process.env.SITE_URL || homeData.siteUrl || undefined;

// https://astro.build/config
export default defineConfig({
  site: siteUrl,

  integrations: [icon(), sitemap()]
});
