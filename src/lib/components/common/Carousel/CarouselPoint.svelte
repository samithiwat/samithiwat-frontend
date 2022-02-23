<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let pos;
	export let width;
	export let color = 'bg-white';

	const dispatch = createEventDispatcher();
</script>

<div
	class={'h-[0.2rem] sm:h-1 lg:h-[0.3rem] hover:cursor-pointer ' + color}
	style="width:{width}px;"
	on:click={() => dispatch('click', { pos })}
/>
