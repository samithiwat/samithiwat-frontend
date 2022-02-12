<script lang="ts">
	import Icon from '@iconify/svelte';
	import CarouselPointSlice from './CarouselPointSlice.svelte';
	import type { ModalImageProps } from '$lib/common/types/modal';
	import { Direction } from '$lib/common/enums/common';

	export let height: number = 250;
	export let width: number = 650;
	export let images: ModalImageProps[] = [
		{ imgUrl: 'https://storage.googleapis.com/samithiwat-bucket/timeline-Thinc-Background.svg' },
		{ imgUrl: 'https://storage.googleapis.com/samithiwat-bucket/timeline-MCV-Background.svg' },
		{ imgUrl: 'https://storage.googleapis.com/samithiwat-bucket/timeline-SGCU-Background.svg' }
	];
	let pointWidth: number = width / 5 / images.length;
	let currentImageIdx: number = 0;

	function handleChangePic(direction: Direction) {
		switch (direction) {
			case Direction.LEFT:
				currentImageIdx = currentImageIdx === 0 ? images.length - 1 : currentImageIdx - 1;
				break;
			case Direction.RIGHT:
				currentImageIdx = currentImageIdx === images.length - 1 ? 0 : currentImageIdx + 1;
				break;
		}
	}
</script>

<div class="relative flex items-center text-white">
	<CarouselPointSlice {images} width={pointWidth} selectedPos={currentImageIdx} />
	<div class="absolute flex w-full flex-row justify-between">
		<div on:click={() => handleChangePic(Direction.LEFT)}>
			<Icon icon="dashicons:arrow-left-alt2" class="h-10 w-10 hover:cursor-pointer" />
		</div>
		<div on:click={() => handleChangePic(Direction.RIGHT)}>
			<Icon icon="dashicons:arrow-right-alt2" class="h-10 w-10 hover:cursor-pointer" />
		</div>
	</div>
	<img
		src={images[currentImageIdx].imgUrl}
		alt="Carousel"
		class="rounded-xl object-cover"
		style="height:{height}px; width:{width}px"
	/>
</div>
