<script lang="ts">
	import { Status } from '$lib/common/enums/common';
	import { createEventDispatcher } from 'svelte';

	import CarouselPoint from './CarouselPoint.svelte';

	export let images = [];
	export let width = 40;
	export let selectedPos = 0;

	const dispatch = createEventDispatcher();

	function handleClick(e: CustomEvent) {
		const pos = e.detail.pos;
		if (pos !== selectedPos) {
			// selectedPos = pos;
			dispatch('click', { pos });
		}
	}
</script>

<div
	class="absolute z-10 flex h-full w-full flex-row items-end justify-center py-3"
	style="column-gap:{width / 3}px"
>
	{#each { length: images.length } as _, pos}
		{#key selectedPos}
			{#if pos === selectedPos}
				<CarouselPoint color={Status.ACTIVE} {width} {pos} on:click={handleClick} />
			{:else}
				<CarouselPoint color={Status.INACTIVE} {width} {pos} on:click={handleClick} />
			{/if}
		{/key}
	{/each}
</div>
