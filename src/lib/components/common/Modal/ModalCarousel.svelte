<script lang="ts">
	import Carousel from '../Carousel/Carousel.svelte';

	export let height = 650;
	export let width = 800;
	export let bgColor = 'bg-gray-primary';
	export let gap = 18;
	export let padding = 48;
	export let content = '';
	export let images = [];
</script>

<div
	class={'relative rounded-3xl flex flex-col items-center justify-center py-12 ' + bgColor}
	style="height:{height}px; width:{width}px; row-gap: {gap}px; padding-top: {padding}px; padding-bottom: {padding}px;"
>
	{#if images.length}
		<Carousel {images} />
		<div class="h-1/3 w-4/5 items-center font-Poppins text-lg text-white ">
			<p>
				{content}
			</p>
		</div>
		<div class="flex w-full justify-end px-20">
			<button class="btn btn-white h-12 w-36">Read more</button>
		</div>
	{:else}
		<div class="h-1/3 w-4/5 items-center flex justify-center font-Poppins text-lg text-white ">
			<h2>No Content</h2>
		</div>
	{/if}
</div>
