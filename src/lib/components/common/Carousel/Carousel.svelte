<script lang="ts">
	import Icon from '@iconify/svelte';
	import CarouselPointSlice from './CarouselPointSlice.svelte';
	import type { ModalImageProps } from '$lib/common/types/modal';
	import { Direction } from '$lib/common/enums/common';
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import { duration } from 'moment';

	export let height: number = 250;
	export let width: number = 650;
	export let images: ModalImageProps[] = [
		{ imgUrl: 'https://storage.googleapis.com/samithiwat-bucket/timeline-Thinc-Background.svg' },
		{ imgUrl: 'https://storage.googleapis.com/samithiwat-bucket/timeline-MCV-Background.svg' },
		{ imgUrl: 'https://storage.googleapis.com/samithiwat-bucket/timeline-SGCU-Background.svg' }
	];
	let pointWidth: number = width / 5 / images.length;
	let currentImageIdx: number = 0;
	let counter;
	let rightPressed = false;
	let leftPressed = false;

	onMount(() => {
		counter = setInterval(() => {
			handleChangePic(Direction.RIGHT);
		}, 4000);
	});

	function handleChangePic(direction: Direction) {
		switch (direction) {
			case Direction.LEFT:
				[leftPressed, rightPressed] = [true, false];
				currentImageIdx = currentImageIdx === 0 ? images.length - 1 : currentImageIdx - 1;
				break;
			case Direction.RIGHT:
				[leftPressed, rightPressed] = [false, true];
				currentImageIdx = currentImageIdx === images.length - 1 ? 0 : currentImageIdx + 1;
				break;
		}

		clearInterval(counter);
		counter = setInterval(() => {
			handleChangePic(Direction.RIGHT);
		}, 4000);
	}
</script>

<div class="relative flex items-center text-white">
	{#key currentImageIdx}
		<CarouselPointSlice {images} width={pointWidth} selectedPos={currentImageIdx} />
		<div class="absolute flex h-full w-full flex-row justify-between">
			<div
				class="z-30 flex h-full items-center rounded-l-xl bg-black px-3 opacity-0 hover:cursor-pointer hover:opacity-20"
				on:click={() => handleChangePic(Direction.LEFT)}
			>
				<Icon icon="dashicons:arrow-left-alt2" class="h-10 w-10 " />
			</div>
			<div
				class="z-30 flex h-full items-center rounded-r-xl bg-black px-3 opacity-0 hover:cursor-pointer hover:opacity-20"
				on:click={() => handleChangePic(Direction.RIGHT)}
			>
				<Icon icon="dashicons:arrow-right-alt2" class="h-10 w-10" />
			</div>
		</div>
		<img
			src={images[currentImageIdx].imgUrl}
			alt="Carousel"
			class="z-0 select-none rounded-xl object-cover"
			in:fade={{
				duration: 1400
			}}
			style="height:{height}px; width:{width}px; "
		/>
	{/key}
</div>
