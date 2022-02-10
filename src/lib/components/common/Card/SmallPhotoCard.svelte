<script lang="ts">
	import Icon from '@iconify/svelte';
	import { createEventDispatcher } from 'svelte';

	export let title = 'Lorem ipsum';
	export let desc = 'Maecenas porttito4';
	export let date = '2018-01-01';
	export let time = '12:00 AM';
	export let height = 400;
	export let width = 300;
	export let src = 'https://storage.googleapis.com/fe-camp/FE-Camp-Shop-Icon.png';
	let imgResolution = 0.625 * height;
	let padding = 0.0625 * height;
	let titleSize = 0.075 * height;
	let descriptionSize = 0.06 * height;
	let dateAndTimeSize = 0.05 * height;
	let titleHeight = 0.09 * height;
	let descriptionHeight = 0.08 * height;
	let dateAndTimeHeight = 0.07 * height;

	export let pos = 0;
	let isClicked = false;
	export let cardClass = 'card small-card text-gray-secondary';
	export let titleColor = 'text-gray-primary';

	const dispatch = createEventDispatcher();
	function handleClick() {
		// cardClass = 'card small-card text-gray-secondary';
		// titleColor = 'text-gray-primary';
		// isClicked = !isClicked;

		// if (isClicked) {
		// 	cardClass = 'small-card bg-selected-card text-white';
		// 	titleColor = 'text-white';
		// }

		dispatch('click', {
			cardClass,
			titleColor,
			pos
		});
	}
</script>

<div
	class={cardClass}
	style="height:{height}px; width:{width}px; padding: {padding}px "
	on:click={handleClick}
>
	<div class="flex w-full items-center justify-center">
		<img {src} alt="Card Img" height={imgResolution} width={imgResolution} class="rounded-2xl" />
	</div>
	<div class="flex flex-col items-center font-Poppins">
		<p
			class={'font-extrabold ' + titleColor}
			style="font-size: {titleSize}px; line-height: {titleHeight}px"
		>
			{title}
		</p>
	</div>
	<div class="flex flex-col font-Poppins">
		<p class="" style="font-size: {descriptionSize}px; line-height: {descriptionHeight}px">
			{desc}
		</p>

		<span
			class="flex flex-row items-center justify-center gap-x-1"
			style="font-size: {dateAndTimeSize}px;"
		>
			<Icon
				icon="ant-design:calendar-outlined"
				style="width: {dateAndTimeSize}px; height: {dateAndTimeSize}px; line-height: {dateAndTimeHeight}px"
			/>
			{date}
			<Icon
				icon="ant-design:clock-circle-outlined"
				style="width: {dateAndTimeSize}px; height: {dateAndTimeSize}px; line-height: {dateAndTimeHeight}px"
			/>
			{time}
		</span>
	</div>
</div>
