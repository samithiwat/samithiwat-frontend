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
	let imgResolution = 0.83 * width;
	let padding = 0.083 * width;
	let titleSize = 0.1 * width;
	let descriptionSize = 0.08 * width;
	let dateAndTimeSize = 0.067 * width;
	let titleHeight = 0.12 * width;
	let descriptionHeight = 0.106 * width;
	let dateAndTimeHeight = 0.093 * width;

	export let id = 0;
	export let cardClass = 'card small-card text-gray-secondary select-none';
	export let titleColor = 'text-gray-primary';

	const dispatch = createEventDispatcher();
	function handleClick() {
		dispatch('click', {
			cardClass,
			titleColor,
			id
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
	<div class="flex h-[4.5rem] flex-col items-center justify-center text-center font-Poppins">
		<p
			class={'font-extrabold ' + titleColor}
			style="font-size: {titleSize}px; line-height: {titleHeight}px"
		>
			{title}
		</p>
	</div>
	<div class="just flex flex-col font-Poppins">
		<div class="flex items-center">
			<Icon icon="ri:quill-pen-fill" class="h-5 w-5" />
			<p class="" style="font-size: {descriptionSize}px; line-height: {descriptionHeight}px">
				{desc}
			</p>
		</div>

		<span class="flex flex-row items-center gap-x-1" style="font-size: {dateAndTimeSize}px;">
			<Icon
				icon="ant-design:calendar-outlined"
				style="width: {dateAndTimeSize}px; height: {dateAndTimeHeight}px"
			/>
			<p>
				{date}
			</p>
			<Icon
				icon="ant-design:clock-circle-outlined"
				style="width: {dateAndTimeSize}px; height: {dateAndTimeHeight}px"
			/>
			<p>{time}</p>
		</span>
	</div>
</div>
