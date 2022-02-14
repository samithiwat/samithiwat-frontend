<script lang="ts">
	import Icon from '@iconify/svelte';
	import CarouselPointSlice from './CarouselPointSlice.svelte';
	import type { ModalImageProps } from '$lib/common/types/modal';
	import { Direction } from '$lib/common/enums/common';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	export let height = 365;
	export let width = 650;
	export let images: ModalImageProps[] = [];
	let pointWidth = width / 5 / images.length;
	let currentImageIdx = 0;
	let counter;

	onMount(() => {
		counter = setInterval(() => {
			handleChangePic(Direction.RIGHT);
		}, 4000);
	});

	function handlePointClick(e: CustomEvent) {
		let pos = e.detail.pos;
		handleChangePic(Direction.NONE, pos);
	}

	function handleChangePic(direction: Direction, idx?: number) {
		switch (direction) {
			case Direction.LEFT:
				currentImageIdx = currentImageIdx === 0 ? images.length - 1 : currentImageIdx - 1;
				break;
			case Direction.RIGHT:
				currentImageIdx = currentImageIdx === images.length - 1 ? 0 : currentImageIdx + 1;
				break;
			default:
				currentImageIdx = idx;
				break;
		}

		if (images.length > 0) {
			clearInterval(counter);
			counter = setInterval(() => {
				handleChangePic(Direction.RIGHT);
			}, 4000);
		}
	}
</script>

<div class="relative flex items-center text-white">
	{#key currentImageIdx}
		{#if images.length > 1}
			<CarouselPointSlice
				{images}
				width={pointWidth}
				selectedPos={currentImageIdx}
				on:click={handlePointClick}
			/>
			<div class="absolute flex h-full w-full flex-row justify-between">
				<div
					class="z-30 flex h-full items-center rounded-l-xl bg-gray-primary px-4 opacity-0 transition duration-500 ease-in-out hover:cursor-pointer hover:opacity-40"
					on:click={() => handleChangePic(Direction.LEFT)}
				>
					<Icon icon="dashicons:arrow-left-alt2" class="h-10 w-10 " />
				</div>
				<div
					class="z-30 flex h-full items-center rounded-r-xl bg-gray-primary px-4 opacity-0 transition duration-500 ease-in-out hover:cursor-pointer hover:opacity-40"
					on:click={() => handleChangePic(Direction.RIGHT)}
				>
					<Icon icon="dashicons:arrow-right-alt2" class="h-10 w-10" />
				</div>
			</div>
		{/if}
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
