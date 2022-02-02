module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			backgroundImage: {
				header: "url('/images/background/header-bg.png')",
				hero: "url('/images/background/hero-bg.png')"
			},
			colors: {
				peach: {
					1: '#f0e7e4'
				},
				black: {
					1: '#131919'
				},
				carafe: {
					1: '634f40'
				},
				nude: {
					1: '#b49a87'
				}
			},
			fontFamily: {
				MuseoModerno: ['MuseoModerno', 'san-serif'],
				Lato: ['Lato', 'sans-serif'],
				Poppins: ['Poppins', 'sans-serif']
			},
			screen: {
				// @media (min-width: <width> px) { ... }
				xs: '400px',
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1536px'
			},
			spacing: {
				100: '25rem'
			}
		}
	},
	plugins: []
};
