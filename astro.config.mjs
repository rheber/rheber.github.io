import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import rehypeExternalLinks from 'rehype-external-links';
import { remarkReadingTime } from './remark-reading-time.mjs';

// https://astro.build/config
export default defineConfig({
	site: 'https://rheber.github.io',
	integrations: [mdx(), sitemap()],
	markdown: {
		remarkPlugins: [remarkReadingTime],
		rehypePlugins: [
			[
			  rehypeExternalLinks,
			  {
				content: { type: 'text', value: ' 🔗' }
			  }
			],
		  ]
	},
});
