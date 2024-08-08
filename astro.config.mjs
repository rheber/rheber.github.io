import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { rehypeHeadingIds } from '@astrojs/markdown-remark';
import autolinkHeadings from 'rehype-autolink-headings'
import rehypeExternalLinks from 'rehype-external-links';
import rehypeToc from 'rehype-toc';
import { remarkReadingTime } from './remark-reading-time.mjs';

// https://astro.build/config
export default defineConfig({
	site: 'https://rheber.github.io',
	integrations: [
		mdx(),
		sitemap(),
	],
	markdown: {
		remarkPlugins: [remarkReadingTime],
		rehypePlugins: [
			rehypeHeadingIds,
			[
				rehypeToc,
				{
					headings: ['h2'],
				},
			],
			[
				autolinkHeadings,
				{
					behavior: 'append',
				},
			],
			[
				rehypeExternalLinks,
				{
					content: { type: 'text', value: ' 🔗' }
				}
			],
		]
	},
});
