<script lang="ts">
	import CarouselPoint from './CarouselPoint.svelte';

	export let images = [];
	export let width = 40;
	let selectedPos = 0;
</script>

<div class="absolute flex h-full w-full flex-row items-end justify-center gap-x-6 py-3">
	{#each images as image, pos}
		{#key selectedPos}
			<CarouselPoint {width} />
		{/key}
	{/each}
</div>
