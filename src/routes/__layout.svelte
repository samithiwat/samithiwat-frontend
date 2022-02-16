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
	import { modalCarouselPropsStore, modalStatusStore } from '$lib/stores/modal.store';
	import ModalCarousel from '$lib/components/common/Modal/ModalCarousel.svelte';
	import ModalRoot from '$lib/components/common/Modal/ModalRoot.svelte';
	import { innerWidth } from '$lib/stores/common.store';

	export let currentPath: string;

	onMount(() => {
		prefetchRoutes();
	});
</script>

<svelte:head>
	<title>Samithiwat.dev</title>
</svelte:head>

{#key $modalStatusStore}
	{#if $modalStatusStore.isOpen}
		<ModalRoot on:close={() => modalStatusStore.close()}>
			{#if $modalStatusStore.carousel}
				<ModalCarousel {...$modalCarouselPropsStore} />
			{/if}
		</ModalRoot>
	{/if}
{/key}

<svelte:window bind:innerWidth={$innerWidth} />

<Nav {paths} {currentPath} />
<main>
	<slot />
</main>
