<script lang="ts">
	import Icon from '@iconify/svelte';
	import {
		displayRepositoriesCardStore,
		repositoriesStore
	} from '$lib/stores/github-repository.store';
	import { onMount } from 'svelte';
	import moment from 'moment';
	import { fade, scale, slide } from 'svelte/transition';
	import { offsetPos } from '$lib/stores/github-repository.store';
	import { selectedPos } from '$lib/stores/github-repository.store';
	import CardShowcase from '../common/Card/CardShowcase.svelte';

	onMount(async () => {
		await repositoriesStore.fetch();
		await displayRepositoriesCardStore.setRepository($repositoriesStore, $offsetPos);
	});
</script>

<div class="my-20 flex select-none justify-center font-Poppins">
	<div class="flex h-[65rem] w-350 flex-col items-center rounded-4xl bg-gray-primary py-8">
		<span class="flex w-[62.5rem] flex-row items-end justify-center gap-x-5">
			<a href="https://github.com/samithiwat" target="blank">
				<Icon icon="akar-icons:github-fill" color="white" class="h-20 w-20" />
			</a>
			<span
				class="flex bg-gradient-to-r from-mint-gradian via-purple-gradian to-red-gradian bg-clip-text text-7xl font-bold text-transparent"
			>
				GITHUB REPOSITORIES
			</span>
		</span>
		<hr class="w-[62.5rem] border-2" />
		{#if $displayRepositoriesCardStore.length === 0}
			<div class="flex h-full flex-row items-center">
				<h2 class="text-white">Empty repository</h2>
			</div>
		{:else}
			{#key $selectedPos}
				<div class="my-10 flex flex-row items-center gap-x-10">
					<img
						src="https://storage.googleapis.com/fe-camp/Annonymous-Icon.png"
						alt="Repository Cover"
						class="h-[22rem] w-[22rem] rounded-4xl overflow-hidden"
						in:scale={{ duration: 800, start: 0.8 }}
					/>
					<div class="flex flex-col gap-y-5">
						<p class="text-6xl font-bold text-white" in:slide={{ duration: 100 }}>
							{$displayRepositoriesCardStore[$selectedPos].repository.name}
						</p>
						<span class="flex items-center gap-x-1">
							<p class="text-2xl text-white">
								{$displayRepositoriesCardStore[$selectedPos].repository.author}
							</p>
						</span>
						<p class="mt-2 h-32 w-200 text-base text-gray-secondary" in:fade={{ duration: 1000 }}>
							{$displayRepositoriesCardStore[$selectedPos].repository.description}
						</p>
						<span class="flex w-[42rem] flex-row justify-between">
							<span
								class="flex flex-row items-center justify-center gap-x-1 text-xl text-gray-secondary"
							>
								Latest updated at

								{moment($displayRepositoriesCardStore[$selectedPos].repository.updatedAt).format(
									'ddd, Do MMM YYYY,'
								)}
								{$displayRepositoriesCardStore[$selectedPos].repository.time}
							</span>
							<button
								class="btn btn-white flex h-12 w-36 items-center justify-center gap-x-3"
								on:click={() => {
									window.open($displayRepositoriesCardStore[$selectedPos].repository.url);
								}}
							>
								View <Icon icon="bx:bx-link-external" /></button
							>
						</span>
					</div>
				</div>
			{/key}
			<CardShowcase />
		{/if}
	</div>
</div>
