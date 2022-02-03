<script lang="ts">
	import Header from '$lib/components/landing/Header.svelte';
	import Hero from '$lib/components/landing/Hero.svelte';
</script>

<svelte:head>
	<title>Samithiwat.dev</title>
</svelte:head>

<div class="min-h-screen flex flex-col">
	<Header />
	<Hero />
	<main class="grow" />
</div>
