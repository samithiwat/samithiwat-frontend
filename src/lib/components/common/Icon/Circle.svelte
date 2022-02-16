<script lang="ts">
	import { Default } from '$lib/common/enums/common';
	import { calIconSize } from '$lib/common/function/icon.function';
	import { innerWidth } from '$lib/stores/common.store';
	import { onMount } from 'svelte';

	export let color = 'bg-white';
	export let height = Default.ICON_HEIGHT;
	export let width = Default.ICON_WIDTH;

	onMount(async () => {
		const size = await calIconSize($innerWidth);
		height = size.height;
		width = size.width;
	});
</script>

<div
	class={'flex z-20 items-center justify-center rounded-full hover:animate-rubberBand'}
	style="height: {height}px; width: {width}px; background-color: {color}"
>
	<slot />
</div>
