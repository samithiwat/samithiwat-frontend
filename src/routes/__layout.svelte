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
	import { modalPropsStore, modalStatusStore } from '$lib/stores/modal.store';
	import ModalCarousel from '$lib/components/common/Modal/ModalCarousel.svelte';
	import ModalRoot from '$lib/components/common/Modal/ModalRoot.svelte';

	export let currentPath: string;

	onMount(() => {
		prefetchRoutes();
	});
</script>

{#key $modalStatusStore}
	{#if $modalStatusStore}
		<ModalRoot on:close={() => modalStatusStore.close()}>
			<ModalCarousel {...$modalPropsStore} />
		</ModalRoot>
	{/if}
{/key}

<Nav {paths} {currentPath} />
<main>
	<slot />
</main>
