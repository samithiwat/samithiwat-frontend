<script lang="ts">
	import AboutMe from '$lib/components/landing/AboutMe.svelte';
	import Footer from '$lib/components/landing/Footer.svelte';
	import GithubRepositories from '$lib/components/landing/GithubRepositories.svelte';
	import Header from '$lib/components/landing/Header.svelte';
	import Timeline from '$lib/components/landing/Timeline.svelte';
	import { innerWidth } from '$lib/stores/common.store';
</script>



<svelte:window bind:innerWidth={$innerWidth} />

<div class="flex min-h-screen flex-col bg-main">
	<Header />
	<AboutMe />
	<GithubRepositories />
	<Timeline />
	<Footer />
</div>
