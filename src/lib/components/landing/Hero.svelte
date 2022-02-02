<script lang="ts">
	import Particles from 'svelte-particles';

	let config = {
		autoPlay: true,
		background: {
			color: {
				value: '#222525'
			},
			opacity: 0.3
		},
		fullScreen: {
			enable: false
		},
		detectRetina: true,
		fpsLimit: 60,
		interactivity: {
			detectsOn: 'window',
			events: {
				onClick: {
					enable: false,
					mode: 'push'
				},
				onHover: {
					enable: true,
					mode: 'bubble',
					parallax: {
						enable: false,
						force: 2,
						smooth: 10
					}
				},
				resize: true
			},
			modes: {
				bubble: {
					distance: 400,
					duration: 5,
					opacity: 0.2,
					color: {
						value: '#F2F0EF'
					},
					size: 45
				},
				push: {
					quantity: 4
				},
				remove: {
					quantity: 2
				}
			}
		},
		particles: {
			color: {
				value: ['#F2F0EF']
			},
			move: {
				direction: 'none',
				enable: true,
				outModes: {
					default: 'out',
					bottom: 'out',
					left: 'out',
					right: 'out',
					top: 'out'
				},
				random: false,
				speed: 4
			},
			number: {
				density: {
					enable: true,
					area: 800,
					factor: 1000
				},
				limit: 0,
				value: 5
			},
			opacity: {
				value: 0.2,
				animation: {
					enable: true,
					speed: 0.5,
					sync: false,
					minimumValue: 0.1
				}
			},
			shape: {
				options: {
					polygon: {
						sides: 6
					},
					star: {
						sides: 6
					}
				},
				type: 'polygon'
			},
			size: {
				random: {
					enable: true,
					minimumValue: 40
				},
				value: {
					min: 40,
					max: 100
				},
				animation: {
					count: 0,
					enable: false,
					speed: 5,
					minimumValue: 20
				}
			}
		}
	};
</script>

<section class="bg-hero h-full w-full bg-cover relative">
	<div class="w-full h-full flex items-center justify-center absolute top-0 z-20">
		<div class="flex flex-col">
			<p class="text-8xl text-white font-semibold">Samithiwat Boonchai</p>
			<p class="text-3xl text-gray-200 mx-auto">Backend Developer</p>
		</div>
	</div>
	<Particles class="w-full h-full absolute top-0 z-10" options={config} />
</section>
