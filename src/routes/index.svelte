<script lang="ts">
	import AboutMe from '$lib/components/landing/AboutMe.svelte';
	import Footer from '$lib/components/landing/Footer.svelte';
	import GithubRepositories from '$lib/components/landing/GithubRepositories.svelte';
	import Header from '$lib/components/landing/Header.svelte';
	import Hero from '$lib/components/landing/Hero.svelte';
	import Timeline from '$lib/components/landing/Timeline.svelte';
</script>

<svelte:head>
	<title>Samithiwat.dev</title>
</svelte:head>

<div class="flex min-h-screen flex-col bg-main">
	<Header />
	<AboutMe />
	<GithubRepositories />
	<Footer />
	<main class="grow" />
</div>
