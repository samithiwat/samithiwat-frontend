<script lang="ts">
	import Icon from '@iconify/svelte';
	import CarouselPointSlice from './CarouselPointSlice.svelte';
	import type { ModalImageProps } from '$lib/common/types/modal';

	export let height: number = 250;
	export let width: number = 650;
	export let images: ModalImageProps[] = [
		{ src: 'https://storage.googleapis.com/samithiwat-bucket/timeline-Thinc-Background.svg' },
		{ src: 'https://storage.googleapis.com/samithiwat-bucket/timeline-Thinc-Background.svg' },
		{ src: 'https://storage.googleapis.com/samithiwat-bucket/timeline-Thinc-Background.svg' }
	];
	let pointWidth: number = width / 5 / images.length;
</script>

<div class="relative flex items-center text-white">
	<CarouselPointSlice {images} width={pointWidth} />
	<div class="absolute flex w-full flex-row justify-between">
		<Icon icon="dashicons:arrow-left-alt2" class="h-10 w-10 hover:cursor-pointer" />
		<Icon icon="dashicons:arrow-right-alt2" class="h-10 w-10 hover:cursor-pointer" />
	</div>
	<img
		src="https://storage.googleapis.com/samithiwat-bucket/timeline-Thinc-Background.svg"
		alt="Carousel"
		class="rounded-xl object-cover"
		style="height:{height}px; width:{width}px"
	/>
</div>
