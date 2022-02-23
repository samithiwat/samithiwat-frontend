<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
</script>

<div
	class="fixed z-40 flex h-full w-full items-center justify-center backdrop-blur-sm"
	style="background-color:rgba(0, 0, 0, 0.5);"
	on:click|self={() => dispatch('close')}
>
	<slot />
</div>
