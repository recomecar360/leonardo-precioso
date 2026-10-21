export function buildWhatsApp(message: string) {
	return `https://wa.me/5511953054694?text=${encodeURIComponent(message)}`;
}

export const contactInfo = {
	phone: '(11) 95305-4694',
	phoneHref: buildWhatsApp('Olá, gostaria de mais informações.'),
	email: 'leonardo.precioso@recomecar360.org',
	footerEmail: 'leonardo.precioso@recomecar360.org',
	youtubeVideoId: 'S2nGFM1OJVk',
} as const;

export const footerNavLinks = [
	{ href: '#sobre', label: 'Sobre' },
	{ href: '/palestras-recomecar', label: 'Palestras' },
	{ href: '#instituto', label: 'Instituto Recomeçar' },
	{ href: '#midia', label: 'Mídia' },
	{ href: '/politica-de-cookies', label: 'Política de Cookies' },
] as const;

export const socialLinks = [
	{
		label: 'Instagram',
		href: 'https://www.instagram.com/leonardomoraesprecioso/',
		icon: 'instagram',
	},
	{
		label: 'Facebook',
		href: 'https://www.facebook.com/leonardomoraesprecioso/?locale=pt_BR',
		icon: 'facebook',
	},
	{
		label: 'LinkedIn',
		href: 'https://www.linkedin.com/in/leonardo-precioso-b1a063157/',
		icon: 'linkedin',
	},
	{
		label: 'YouTube',
		href: 'https://www.youtube.com/@Recomecar360',
		icon: 'youtube',
	},
] as const;
