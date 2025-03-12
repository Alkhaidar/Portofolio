
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
			},
			fontFamily: {
				sans: ['Inter var', 'sans-serif'],
				serif: ['Georgia', 'serif'],
			},
			fontSize: {
				'heading-1': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
				'heading-2': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' }],
				'heading-3': ['1.5rem', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '500' }],
				'body-large': ['1.125rem', { lineHeight: '1.5', fontWeight: '400' }],
				'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
				'small': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				'fade-in': {
					from: { opacity: '0' },
					to: { opacity: '1' },
				},
				'fade-up': {
					from: { opacity: '0', transform: 'translateY(20px)' },
					to: { opacity: '1', transform: 'translateY(0)' },
				},
				'slide-in-right': {
					from: { transform: 'translateX(30px)', opacity: '0' },
					to: { transform: 'translateX(0)', opacity: '1' },
				},
				'slide-in-left': {
					from: { transform: 'translateX(-30px)', opacity: '0' },
					to: { transform: 'translateX(0)', opacity: '1' },
				},
				'blur-in': {
					from: { filter: 'blur(8px)', opacity: '0' },
					to: { filter: 'blur(0)', opacity: '1' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.7s ease-out',
				'fade-up': 'fade-up 0.7s ease-out',
				'slide-in-right': 'slide-in-right 0.7s ease-out',
				'slide-in-left': 'slide-in-left 0.7s ease-out',
				'blur-in': 'blur-in 0.7s ease-out',
			},
			boxShadow: {
				'subtle': '0 4px 20px rgba(0, 0, 0, 0.04)',
				'elevation': '0 10px 40px rgba(0, 0, 0, 0.06)',
				'button': '0 2px 6px rgba(0, 0, 0, 0.04), 0 0 1px rgba(0, 0, 0, 0.04)',
			},
			transitionDuration: {
				'2000': '2000ms',
				'3000': '3000ms',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
