module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			animation: {
				wiggle: 'wiggle 1s ease-in-out infinite',
				'spin-slow': 'spin 10s linear infinite'
			},
			backgroundImage: {
				footer: "url('/images/background/footer-bg.png')",
				hero: "url('/images/background/hero-bg.png')",
				'about-me': "url('/images/background/about-me-bg.png')",
				'selected-card':
					'linear-gradient(64.16deg, #18CDCA 0%, #088CDA 33.33%, #82A0DC 60.42%, #EB5757 94.79%)',
				main: 'linear-gradient(0deg, #2B2A2A, #2B2A2A)'
			},
			borderRadius: {
				'4xl': '2.5rem'
			},
			colors: {
				yellow: {
					icon: '#F3CC3B',
					card: '#FFFBEC'
				},
				red: {
					gradian: '#EB5757'
				},
				blue: {
					primary: '#088CDA',
					icon: '#357FA9'
				},
				mint: {
					primary: '#18CDCA',
					gradian: '#39C09B'
				},
				purple: {
					primary: '#82A0DC',
					gradian: '#4F80E1'
				},
				pink: {
					primary: '#FFBFBF',
					'sgcu-icon': '#ED0387',
					'fecamp-icon': '#E37F7F'
				},
				gray: {
					primary: '#373A3C',
					secondary: '#BDBDBD',
					icon: '#6D6D6D'
				}
			},
			fontFamily: {
				MuseoModerno: ['MuseoModerno', 'san-serif'],
				Lato: ['Lato', 'sans-serif'],
				Poppins: ['Poppins', 'sans-serif']
			},
			keyframes: {
				wiggle: {
					'0%, 100%': { transform: 'rotate(-3deg)' },
					'50%': { transform: 'rotate(3deg)' }
				}
			},
			spacing: {
				100: '25rem',
				150: '37.5rem',
				200: '50rem',
				350: '84rem'
			}
		},
		screens: {
			// @media (min-width: <width> px) { ... }
			'mobile-s': '320px',
			'mobile-m': '370px',
			'mobile-l': '425px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px'
		}
	},
	plugins: []
};
