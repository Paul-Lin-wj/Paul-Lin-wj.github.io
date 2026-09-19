import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://paul-lin-wj.github.io',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    routing: { prefixDefaultLocale: false },
  },
});
