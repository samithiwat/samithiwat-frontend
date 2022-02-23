module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			animation: {
				wiggle: 'wiggle 1s ease-in-out infinite',
				'spin-slow': 'spin 10s linear infinite',
				shakeY: 'shakeY 1.2s ease-in-out infinite',
				shakeX: 'shakeX 1.2s ease-in-out infinite',
				'shakeY-once': 'shakeY 0.7s ease-in-out',
				'shakeX-once': 'shakeX 0.7s ease-in-out',
				rubberBand: 'rubberBand 500ms ease-in-out',
				'fade-in': 'fade-in 3s ease-in-out',
				'fade-out': 'fade-out 3s ease-in-out',
				gradient: 'gradient 15s ease-in-out infinite',
				flip: 'flip 1s ease-in-out',
				'bounce-in': 'bounce-in 0.5s ease-in-out'
			},
			backgroundImage: {
				footer: "url('/images/background/footer-bg.png')",
				hero: "url('/images/background/hero-bg.png')",
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
			fontSize: {
				'3xs': ['0.5rem', '0.75rem'],
				'2xs': ['0.625rem', '0.875rem']
			},
			keyframes: {
				wiggle: {
					'0%, 100%': { transform: 'rotate(-3deg)' },
					'50%': { transform: 'rotate(3deg)' }
				},
				shakeY: {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				shakeX: {
					'0%': { transform: 'translateX(10px)' },
					'50%': { transform: 'translateX(-10px)' },
					'100%': { transform: 'translateX(0px)' }
				},
				rubberBand: {
					'0%, 100%': { transform: 'scale(1)' },
					'30%': { transform: 'scale(1.25)' },
					'40%': { transform: 'scale(0.75)' },
					'50%': { transform: 'scale(1.15)' },
					'65%': { transform: 'scale(0.95)' },
					'75%': { transform: 'scale(1.05)' }
				},
				'fade-in': {
					'0%': {
						opacity: '0'
					},
					'100%': {
						opacity: '1'
					}
				},
				'fade-out': {
					'0%': {
						opacity: '1'
					},
					'100%': {
						opacity: '0'
					}
				},
				gradient: {
					'0%': {
						'background-position': '0% 50%'
					},
					'50%': {
						'background-position': '100% 50%'
					},
					'100%': {
						'background-position': '0% 50%'
					}
				},
				flip: {
					'0%': {
						transform: 'perspective(1000px) rotateY(0deg)'
					},
					'50%': {
						transform: 'perspective(1000px) rotateY(180deg)'
					},
					'100%': {
						transform: 'perspective(1000px) rotateY(0deg)'
					}
				},
				'bounce-in': {
					'0%': {
						opacity: '0'
					},
					'40%': {
						opacity: '1'
					},
					'60%': {
						transform: 'translateY(-10px) scale(1.25)'
					},
					'80%': {
						transform: 'translateY(-5px) scale(0.75)'
					},
					'100%': {
						transform: 'translateY(0px) scale(1)'
					}
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
