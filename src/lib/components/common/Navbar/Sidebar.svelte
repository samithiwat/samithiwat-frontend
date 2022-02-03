<script lang="ts">
	import { toggleStore } from '$lib/stores/sidebar-store';
	import { paths } from '$lib/common/constant/path';
	import { fly } from 'svelte/transition';
	import { menuIconStore } from '$lib/stores/nav-store';
</script>

{#if $toggleStore}
	<aside
		class="absolute w-2/3 h-full flex flex-col items-center font-Poppins gap-y-5 pt-8 z-30"
		style="background-color:rgba(0, 0, 0, 0.85)"
		transition:fly={{ x: -300, duration: 500 }}
	>
		<p class="text-white text-3xl font-Poppins">Menu</p>

		{#each paths as path}
			<a
				href={path.path}
				class="text-white"
				on:click={() => {
					menuIconStore.toggle();
					toggleStore.toggle();
				}}
			>
				{path.name}
			</a>
		{/each}
	</aside>
{/if}
