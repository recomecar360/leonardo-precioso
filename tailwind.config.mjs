/** @type {import('tailwindcss').Config} */
export default {
	theme: {
		extend: {
			colors: {
				petroleum: {
					950: '#061018',
					900: '#0A1929',
					850: '#0C1F2E',
					800: '#102A3D',
					700: '#163550',
					600: '#1C4260',
				},
				// Centralized accent (yellow) and navy tokens
				accent: {
					DEFAULT: '#F0B323',
					light: '#FFBE4D',
					dark: '#E5A620',
					ink: '#8A5E00',
				},
				navy: {
					DEFAULT: '#003366',
				},
				white: {
					DEFAULT: '#FFFFFF',
					soft: '#F0F4F8',
					muted: '#B8C5D3',
				},
			},
			fontFamily: {
				// Removed Inter from stack per performance directive; Poppins self-hosted
				sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
			},
			fontSize: {
				'hero-xl': ['2.75rem', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '700' }],
				'hero-lg': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.015em', fontWeight: '700' }],
				'hero-md': ['1.75rem', { lineHeight: '1.25', letterSpacing: '-0.01em', fontWeight: '700' }],
			},
			borderRadius: {
				pill: '9999px',
			},
		},
	},
};
