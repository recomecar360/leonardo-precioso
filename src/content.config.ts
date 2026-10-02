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
	conselheiros: defineCollection({
		loader: glob({ pattern: '**/*.json', base: './src/content/conselheiros' }),
		schema: z.object({
			name: z.string(),
			role: z.string(),
			linkedin: z.string().url(),
			photo: z.string().optional(),
		}),
	}),
	recomecarTemas: defineCollection({
		loader: glob({ pattern: '**/*.json', base: './src/content/recomecar-temas' }),
		schema: z.object({ title: z.string() }),
	}),
	recomecarPacotes: defineCollection({
		loader: glob({ pattern: '**/*.json', base: './src/content/recomecar-pacotes' }),
		schema: z.object({
			title: z.string(),
			format: z.string(),
			items: z.array(z.string()),
			price: z.string(),
		}),
	}),
	recomecarBeneficios: defineCollection({
		loader: glob({ pattern: '**/*.json', base: './src/content/recomecar-beneficios' }),
		schema: z.object({ title: z.string(), description: z.string() }),
	}),
	recomecarPassos: defineCollection({
		loader: glob({ pattern: '**/*.json', base: './src/content/recomecar-passos' }),
		schema: z.object({
			step: z.number(),
			title: z.string(),
			detail: z.string().optional(),
		}),
	}),
	recomecarImpacto: defineCollection({
		loader: glob({ pattern: '**/*.json', base: './src/content/recomecar-impacto' }),
		schema: z.object({ value: z.string(), label: z.string() }),
	}),
};