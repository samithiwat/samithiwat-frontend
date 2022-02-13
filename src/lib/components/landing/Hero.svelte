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

<section class="relative h-[28rem] w-full bg-hero bg-cover bg-center sm:h-full">
	<div class="absolute top-0 z-20 flex h-full w-full items-center justify-center">
		<div class="flex flex-col">
			<p
				class="text-2xl font-semibold text-white mobile-m:text-3xl md:text-5xl lg:text-6xl xl:text-8xl 2xl:text-9xl"
			>
				Samithiwat Boonchai
			</p>
			<p
				class="mx-auto text-xs text-gray-200 mobile-m:text-sm md:text-lg lg:text-2xl xl:text-3xl 2xl:text-4xl"
			>
				Backend Developer
			</p>
		</div>
	</div>
	<div class="visible h-full bg-[#222525] opacity-30 sm:invisible" />
	<div class="invisible sm:visible">
		<Particles class="absolute top-0 z-10 h-full w-full" options={config} />
	</div>
</section>
