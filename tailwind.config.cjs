module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			backgroundImage: {
				headerBg: "url('/images/background/header-bg.png')",
				bannerBg: "url('/images/background/banner-bg.png')"
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
			spacing: {
				100: '25rem'
			}
		}
	},
	plugins: []
};
