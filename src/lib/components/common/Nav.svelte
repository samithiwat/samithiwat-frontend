<script lang="ts">
	import type { PagePath } from '$lib/common/types/path';
	import Icon from '@iconify/svelte';

	export let paths: PagePath[];
	export let currentPath: string;
</script>

<nav class="bg-black-1 w-full h-12 2xl:h-16 sm:flex sm:flex-row text-center items-center">
	<Icon
		icon="ic:baseline-menu"
		color="white"
		class="w-8 h-8 mx-3 my-2 absolute visible sm:invisible"
	/>

	<div class="w-full sm:w-min absolute sm:static my-2">
		<a href="/" class="text-white sm:mx-20 text-2xl 2xl:text-4xl">Samithiwat.dev</a>
	</div>

	<div class="h-12 font-Poppins flex flex-row justify-start items-center gap-x-7">
		{#each paths as path}
			<a href={path.path} class="text-white 2xl:text-2xl invisible sm:visible">{path.name}</a>
		{/each}
	</div>
</nav>
