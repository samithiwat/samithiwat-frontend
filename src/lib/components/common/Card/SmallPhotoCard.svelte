<script lang="ts">
	import Icon from '@iconify/svelte';
	import { createEventDispatcher } from 'svelte';

	export let title = 'Lorem ipsum';
	export let desc = 'Maecenas porttito4';
	export let date = '2018-01-01';
	export let time = '12:00 AM';
	export let height = 400;
	export let width = 300;
	export let src = 'https://storage.googleapis.com/samithiwat-bucket/samithiwat-icon-3.png';
	let imgResolution = 0.83 * width;
	let padding = 0.083 * width;

	export let id = 0;
	export let pos = 0;
	export let cardClass = 'card small-card text-gray-secondary select-none';
	export let titleColor = 'text-gray-primary';

	const dispatch = createEventDispatcher();
	function handleClick() {
		dispatch('click', {
			id,
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
	<div class="flex h-1/6 flex-col items-center justify-center text-center font-Poppins">
		<p class={'font-extrabold text-2xs xl:text-base ' + titleColor}>
			{title}
		</p>
	</div>
	<div class="just flex flex-col font-Poppins">
		<div class="flex items-center">
			<Icon icon="ri:quill-pen-fill" class="h-3 w-3 xl:h-5 xl:w-5" />
			<p class="text-3xs xl:text-xs">
				{desc}
			</p>
		</div>

		<span class="flex flex-row items-center gap-x-1 text-3xs xl:text-xs">
			<Icon icon="ant-design:calendar-outlined" class="h-2 w-2 xl:h-3 xl:w-3" />
			<p>{date}</p>
			<Icon icon="ant-design:clock-circle-outlined" class="h-2 w-2  xl:h-3 xl:w-3" />
			<p>{time}</p>
		</span>
	</div>
</div>
