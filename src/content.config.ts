import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const palestrasSchema = z.object({
	title: z.string(),
	description: z.string(),
	icon: z.string().optional(),
});

const faqSchema = z.object({
	question: z.string(),
	answer: z.string(),
});

const mencoesSchema = z.object({
	outlet: z.string(),
	headline: z.string(),
	href: z.string().url(),
});

const statsSchema = z.object({
	value: z.string(),
	label: z.string(),
});

const premiosSchema = z.object({
	title: z.string(),
	description: z.string().optional(),
	icon: z.string().optional(),
});

export const collections = {
	palestras: defineCollection({
		loader: glob({ pattern: '**/*.json', base: './src/content/palestras' }),
		schema: palestrasSchema,
	}),
	faq: defineCollection({
		loader: glob({ pattern: '**/*.json', base: './src/content/faq' }),
		schema: faqSchema,
	}),
	mencoes: defineCollection({
		loader: glob({ pattern: '**/*.json', base: './src/content/mencoes' }),
		schema: mencoesSchema,
	}),
	stats: defineCollection({
		loader: glob({ pattern: '**/*.json', base: './src/content/stats' }),
		schema: statsSchema,
	}),
	premios: defineCollection({
		loader: glob({ pattern: '**/*.json', base: './src/content/premios' }),
		schema: premiosSchema,
	}),
};