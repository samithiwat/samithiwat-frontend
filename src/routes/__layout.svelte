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
	import Modal from '$lib/components/common/Modal/Modal.svelte';
	import { modalPropsStore } from '$lib/stores/modal.store';
	import Carousel from '$lib/components/common/Carousel/Carousel.svelte';

	export let currentPath: string;

	onMount(() => {
		prefetchRoutes();
	});
</script>

<Modal {...$modalPropsStore}>
	<Carousel />
	<div class="h-1/3 w-4/5 items-center font-Poppins text-lg text-white ">
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi euismod sem at lectus feugiat
			aliquam. Nam sodales eleifend fringilla. Aliquam non nunc viverra, suscipit dui nec, faucibus
			arcu. Donec porttitor libero congue dictum porttitor. Etiam eu pulvinar erat, at consectetur
			quam. Nunc ultricies vestibulum turpis id varius.
		</p>
	</div>
	<div class="flex w-full justify-end px-20">
		<button class="btn btn-white h-12 w-36">Read more</button>
	</div>
</Modal>

<Nav {paths} {currentPath} />
<main>
	<slot />
</main>
