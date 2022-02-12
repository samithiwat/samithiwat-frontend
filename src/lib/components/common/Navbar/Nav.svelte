<script lang="ts">
	import type { PagePath } from '$lib/common/types/path';
	import Icon from '@iconify/svelte';
	import { toggleStore } from '$lib/stores/sidebar.store';
	import Sidebar from './Sidebar.svelte';
	import { menuIconStore } from '$lib/stores/nav.store';

	export let paths: PagePath[];
	export let currentPath: string;
</script>

<nav
	class="flex h-16 w-full select-none items-center bg-black text-center mobile-m:h-12 sm:flex-row 2xl:h-16"
>
	<div
		class="visible absolute z-10 mx-3 my-2 hover:cursor-pointer sm:invisible"
		on:click={() => {
			menuIconStore.toggle();
			toggleStore.toggle();
		}}
	>
		<Icon icon={$menuIconStore} color="white" class="h-8 w-8" />
	</div>

	<div class="absolute my-2 w-full sm:static sm:w-min">
		<a href="/" class="z-0 text-2xl text-white sm:mx-20 2xl:text-4xl">Samithiwat.dev</a>
	</div>

	<div class="flex h-12 flex-row items-center justify-start gap-x-7 font-Poppins">
		{#each paths as path}
			<a href={path.path} class="invisible text-white sm:visible 2xl:text-2xl">{path.name}</a>
		{/each}
	</div>
</nav>
<Sidebar />
