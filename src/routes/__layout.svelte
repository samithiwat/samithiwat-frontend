<script context="module" lang="ts">
	/** @type {import('sveltejs/kit').Load}*/
	export async function load({ url }) {
		return {
			props: {
				currentPath: url.pathname
			}
		};
	}
</script>

<script lang="ts">
	import { prefetchRoutes } from '$app/navigation';
	import { onMount } from 'svelte';
	import Nav from '$lib/components/common/Navbar/Nav.svelte';
	import '../app.css';
	import { paths } from '$lib/common/constant/path';

	export let currentPath: string;

	onMount(() => {
		prefetchRoutes();
	});
</script>

<Nav {paths} {currentPath} />
<main>
	<slot />
</main>
