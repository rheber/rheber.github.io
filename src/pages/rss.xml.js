import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import sanitizeHtml from 'sanitize-html';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { getContainerRenderer as mdxRenderer } from "@astrojs/mdx";

const image = "android-chrome-512x512.png";

async function loadRenderers(renderers) {
	const loadedRenderers = await Promise.all(
		renderers.map(async (renderer) => {
			const mod = await import( /* @vite-ignore */ renderer.serverEntrypoint);
			if (typeof mod.default !== 'undefined') {
				return {
					...renderer,
					ssr: mod.default,
				};
			}
			return undefined;
		})
	);

	return loadedRenderers.filter((r => Boolean(r)));
}
const renderers = await loadRenderers([mdxRenderer()]);
const container = await AstroContainer.create({renderers});

export async function GET(context) {
	const posts = await getCollection('blog');
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: await Promise.all(posts.map(async (post) => {
			const { Content } = await post.render();
			const postHtml = await container.renderToString(Content);
			
			return {
				...post.data,
				link: `/blog/${post.slug}/`,
				content: sanitizeHtml(postHtml, {
					allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img'])
				}),
			};
		})),
		customData: `
			<language>en-au</language>
			<image>
				<url>${context.site + image}</url>
				<title>${SITE_TITLE}</title>
				<link>${context.site}</link>
			</image
		`,
	});
}
