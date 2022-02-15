<script lang="ts">
	import { calMediumCardSize } from '$lib/common/function/card.function';
	import { innerWidth } from '$lib/stores/common.store';
	import { timelineConfig } from '$lib/stores/timeline.store';
	import { createEventDispatcher, onMount } from 'svelte';

	export let id: number;
	export let title = 'Lorem ipsum';
	export let desc = 'Maecenas porttito4';
	export let src =
		'https://storage.googleapis.com/fe-camp/profile-Smity-Binchu-d84d3b57e7eb5825b283680462fea9a9e17caa54bb094835f3d1d0d2b5837632.jpg';
	let padding = 0;
	let titleSize = 0;
	let descriptionSize = 0;
	let titleHeight = 0;
	let descriptionHeight = 0;

	const dispatch = createEventDispatcher();
	onMount(async () => {
		await timelineConfig.setCardSize(await calMediumCardSize($innerWidth));
		padding = 0.077 * $timelineConfig.cardSize.height;
		titleSize = 0.07 * $timelineConfig.cardSize.height;
		descriptionSize = 0.04 * $timelineConfig.cardSize.height;
		titleHeight = 0.09 * $timelineConfig.cardSize.height;
		descriptionHeight = 0.06 * $timelineConfig.cardSize.height;
	});
</script>

<div
	class="card medium-card flex select-none flex-col justify-center gap-y-4 lg:gap-y-8 "
	style="height:{$timelineConfig.cardSize.height}px; width:{$timelineConfig.cardSize
		.width}px; padding: {padding}px"
	on:click={() => dispatch('click', { id })}
>
	<div
		class="flex h-2/3 w-full items-center justify-center overflow-hidden rounded-md sm:rounded-lg lg:rounded-2xl"
	>
		<img {src} alt="Card Img" class="object-cover" />
	</div>
	<div class="flex h-1/3 flex-col items-center gap-y-2 font-Poppins">
		<p
			class="text-center font-extrabold text-gray-primary"
			style="font-size: {titleSize}px; line-height: {titleHeight}px"
		>
			{title}
		</p>

		<p
			class="text-gray-secondary"
			style="font-size: {descriptionSize}px; line-height: {descriptionHeight}px"
		>
			{desc}
		</p>
	</div>
</div>
