<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let height = 650;
	export let width = 800;
	export let bgColor = 'bg-gray-primary';
	export let gap = 18;
	export let padding = 48;

	const dispatch = createEventDispatcher();
</script>

<div
	class="fixed z-40 flex h-full w-full items-center justify-center backdrop-blur-sm"
	style="background-color:rgba(0, 0, 0, 0.5);"
	on:click|self={() => dispatch('close')}
>
	<div
		class={'relative rounded-3xl flex flex-col items-center justify-center py-12 ' + bgColor}
		style="height:{height}px; width:{width}px; row-gap: {gap}px; padding-top: {padding}px; padding-bottom: {padding}px;"
	>
		<slot />
	</div>
</div>
