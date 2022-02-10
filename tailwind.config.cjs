module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
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
					card: '#FFFBEC'
				},
				red: {
					gradian: '#EB5757'
				},
				blue: {
					primary: '#088CDA'
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
					primary: '#FFBFBF'
				},
				gray: {
					primary: '#373A3C',
					secondary: '#BDBDBD'
				}
			},
			fontFamily: {
				MuseoModerno: ['MuseoModerno', 'san-serif'],
				Lato: ['Lato', 'sans-serif'],
				Poppins: ['Poppins', 'sans-serif']
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
