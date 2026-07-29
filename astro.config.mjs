// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

import homeData from './src/data/home.json';

const [, repoName] = process.env.GITHUB_REPOSITORY?.split('/') ?? [];
const isUserSite = repoName?.endsWith('.github.io');

// GitHub Pages project sites are served from /repo-name/, not the domain root.
const base =
  process.env.BASE_PATH ??
  (repoName && !isUserSite ? `/${repoName}/` : '/');

const [githubOwner] = process.env.GITHUB_REPOSITORY?.split('/') ?? [];
const githubPagesSite = githubOwner ? `https://${githubOwner}.github.io` : undefined;
const siteUrl = process.env.SITE_URL || githubPagesSite || homeData.siteUrl || undefined;

// https://astro.build/config
export default defineConfig({
  site: siteUrl,
  base,

  integrations: [icon(), sitemap()]
});
