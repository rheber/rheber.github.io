import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

const image = "android-chrome-512x512.png";

export async function GET(context) {
	const posts = await getCollection('blog');
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/blog/${post.slug}/`,
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
