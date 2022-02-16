<script lang="ts">
	import type { PagePath } from '$lib/common/types/path';
	import Icon from '@iconify/svelte';
	import { toggleStore } from '$lib/stores/sidebar.store';
	import Sidebar from './Sidebar.svelte';
	import { menuIconStore } from '$lib/stores/nav.store';
	import { isError } from '$lib/stores/common.store';
	import { Path } from '$lib/common/enums/path';

	export let paths: PagePath[];
	export let currentPath: string;
</script>

{#if !$isError && currentPath !== Path.PRELANDING}
	<nav
		class="absolute z-40 flex h-16 w-full select-none items-center text-center mobile-m:h-12 sm:flex-row 2xl:h-16"
		style="background-color:rgba(0, 0, 0, 0.35);"
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
				{#if path.path === currentPath}
					<a href={path.path} class="invisible text-white underline sm:visible 2xl:text-2xl"
						>{path.name}</a
					>
				{:else}
					<a href={path.path} class="invisible text-white sm:visible 2xl:text-2xl">{path.name}</a>
				{/if}
			{/each}
		</div>
	</nav>
	<Sidebar />
{/if}
