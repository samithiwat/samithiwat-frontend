<script lang="ts">
	import type { PagePath } from '$lib/common/types/path';

	export let paths: PagePath[];
	export let currentPath: string;
</script>

<nav class="bg-black-1 w-screen font-MuseoModerno h-12 flex flex-row items-center gap-x-7">
	<a href="/" class="text-white mx-[6rem] text-2xl">Samithiwat.dev</a>
	{#each paths as path}
		<a href={path.path} class="text-white">{path.name}</a>
	{/each}
</nav>
