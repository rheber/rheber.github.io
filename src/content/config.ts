import { defineCollection, z } from 'astro:content';

const post = z.optional(z.object({
	slug: z.string(),
	data: z.object({
		title: z.string(),
	}),
}));

const blog = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		pubDate: z.coerce.date(),
		prevPost: post,
		nextPost: post,
	}),
});

export const collections = { blog };
