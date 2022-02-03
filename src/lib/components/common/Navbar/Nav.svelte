<script lang="ts">
	import type { PagePath } from '$lib/common/types/path';
	import Icon from '@iconify/svelte';
	import { toggleStore } from '$lib/stores/sidebar-store';
	import Sidebar from './Sidebar.svelte';
	import { menuIconStore } from '$lib/stores/nav-store';

	export let paths: PagePath[];
	export let currentPath: string;
	// let menuIcon: string = 'ic:baseline-menu';
</script>

<nav class="bg-black-1 w-full h-12 2xl:h-16 sm:flex sm:flex-row text-center items-center">
	<div
		class="mx-3 my-2 absolute visible sm:invisible hover:cursor-pointer z-10"
		on:click={() => {
			menuIconStore.toggle();
			toggleStore.toggle();
		}}
	>
		<Icon icon={$menuIconStore} color="white" class="w-8 h-8" />
	</div>

	<div class="w-full sm:w-min absolute sm:static my-2">
		<a href="/" class="text-white sm:mx-20 text-2xl 2xl:text-4xl z-0">Samithiwat.dev</a>
	</div>

	<div class="h-12 font-Poppins flex flex-row justify-start items-center gap-x-7">
		{#each paths as path}
			<a href={path.path} class="text-white 2xl:text-2xl invisible sm:visible">{path.name}</a>
		{/each}
	</div>
</nav>
<Sidebar />
