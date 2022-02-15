<script lang="ts">
	import Icon from '@iconify/svelte';
	import {
		cardShowCaseProps,
		displayRepositoriesCardStore,
		repositoriesStore
	} from '$lib/stores/github-repository.store';
	import { onMount } from 'svelte';
	import moment from 'moment';
	import { fade, scale, slide } from 'svelte/transition';
	import { offsetPos } from '$lib/stores/github-repository.store';
	import { selectedPos } from '$lib/stores/github-repository.store';
	import CardShowcase from '../common/Card/CardShowcase.svelte';
	import { ScreenWidth } from '$lib/common/enums/common';
	import { innerWidth } from '$lib/stores/common.store';
	import { calSmallCardSize, calMaxShown } from '$lib/common/function/card.function';

	onMount(async () => {
		cardShowCaseProps.setCardSize(calSmallCardSize($innerWidth));
		cardShowCaseProps.setMaxShown(calMaxShown($innerWidth));
		await repositoriesStore.fetch();
		await displayRepositoriesCardStore.setRepository(
			$repositoriesStore,
			$offsetPos,
			$cardShowCaseProps.maxShown
		);
	});
</script>

<div class="my-20 flex select-none justify-center font-Poppins">
	<div
		class="flex h-full w-3/4 flex-col items-center rounded-xl bg-gray-primary py-8 shadow-lg shadow-pink-primary transition duration-1000 hover:shadow-purple-primary sm:rounded-4xl sm:p-10"
	>
		<span class="flex w-10/12 flex-row items-end justify-center lg:gap-x-5">
			<div class="flex w-full flex-col items-center">
				<span class="flex w-full flex-row items-center justify-center sm:gap-x-2">
					{#if $innerWidth > ScreenWidth.MOBILE_OVERALL}
						<a href="https://github.com/samithiwat" target="blank" class="w-1/12">
							<Icon icon="akar-icons:github-fill" color="white" class="h-auto w-full" />
						</a>
					{/if}
					<p
						class="bg-gradient-to-r from-mint-gradian via-purple-gradian to-red-gradian bg-clip-text text-center text-3xl font-bold text-transparent md:text-3xl lg:text-left lg:text-4xl xl:text-6xl"
					>
						GITHUB REPOSITORIES
					</p>
				</span>
				<hr class="invisible w-11/12 md:visible lg:border-[1px] xl:border-2" />
			</div>
		</span>
		{#if $displayRepositoriesCardStore.length === 0}
			<div class="flex h-screen flex-row items-center">
				<h2 class="text-xl text-white sm:text-4xl lg:text-7xl">Empty repository</h2>
			</div>
		{:else}
			{#key $selectedPos}
				<div class="flex flex-col items-center w-full sm:px-10 my-5 gap-y-2">
					{#if $innerWidth < ScreenWidth.MOBILE_OVERALL}
						<img
							src="https://storage.googleapis.com/fe-camp/Annonymous-Icon.png"
							alt="Repository Cover"
							class="w-1/3 h-auto rounded-lg md:rounded-3xl xl:rounded-4xl overflow-hidden"
							in:scale={{ duration: 800, start: 0.8 }}
						/>
					{/if}
					<div class="flex flex-row gap-x-5 w-full">
						{#if $innerWidth > ScreenWidth.MOBILE_OVERALL}
							<div class="w-1/3" />
						{/if}
						<p
							class="w-full sm:w-3/4 text-lg text-center sm:text-left sm:text-2xl lg:text-4xl xl:text-6xl font-bold text-white"
							in:slide={{ duration: 100 }}
						>
							{$displayRepositoriesCardStore[$selectedPos]?.repository?.name}
						</p>
					</div>
					<div class="flex flex-row gap-x-5 w-full">
						{#if $innerWidth > ScreenWidth.MOBILE_OVERALL}
							<div class="w-1/3" />
						{/if}
						<p class="text-base w-full sm:w-3/4 text-center sm:text-left lg:text-2xl text-white">
							{$displayRepositoriesCardStore[$selectedPos]?.repository?.author}
						</p>
					</div>
					<div class="flex flex-row gap-x-5 w-full px-5 sm:px-0">
						{#if $innerWidth > ScreenWidth.MOBILE_OVERALL}
							<img
								src="https://storage.googleapis.com/fe-camp/Annonymous-Icon.png"
								alt="Repository Cover"
								class="w-1/3 h-auto rounded-lg md:rounded-3xl xl:rounded-4xl overflow-hidden"
								in:scale={{ duration: 800, start: 0.8 }}
							/>
						{/if}
						<p
							class="mt-2 h-56 w-full md:h-32 lg:h-44 sm:w-3/4 text-xs lg:text-base text-gray-secondary"
							in:fade={{ duration: 1000 }}
						>
							{$displayRepositoriesCardStore[$selectedPos]?.repository?.description}
						</p>
					</div>
					<div class="flex flex-row gap-x-5 w-full sm:mt-2">
						{#if $innerWidth > ScreenWidth.MOBILE_OVERALL}
							<div class="w-1/3" />
						{/if}
						<span
							class="my-4 sm:my-0 flex w-full sm:w-3/4 flex-row justify-between gap-x-1 sm:gap-x-0"
						>
							<span
								class="flex flex-row w-full sm:justify-start sm:items-end items-center text-3xs justify-center gap-x-1 lg:text-xs xl:text-sm text-gray-secondary"
							>
								Last update:

								{moment($displayRepositoriesCardStore[$selectedPos]?.repository?.updatedAt).format(
									'ddd, Do MMM YYYY,'
								)}
								{$displayRepositoriesCardStore[$selectedPos]?.repository?.time}
							</span>
							{#if $innerWidth > ScreenWidth.MOBILE_OVERALL}
								<button
									class="btn btn-white rounded-md text-3xs sm:text-sm md:text-xs sm:rounded-lg md:rounded-md flex h-6 md:h-5 lg:h-8 w-5/6 items-center md:w-24 lg:w-36 justify-center lg:gap-x-1 xl:gap-x-3"
									on:click={() => {
										window.open($displayRepositoriesCardStore[$selectedPos]?.repository?.url);
									}}
								>
									View <Icon icon="bx:bx-link-external" /></button
								>
							{/if}
						</span>
					</div>
					{#if $innerWidth < ScreenWidth.MOBILE_OVERALL}
						<button
							class="btn btn-white rounded-md text-xs gap-x-1 flex h-6 w-10/12 items-center justify-center"
							on:click={() => {
								window.open($displayRepositoriesCardStore[$selectedPos]?.repository?.url);
							}}
						>
							View <Icon icon="bx:bx-link-external" /></button
						>
					{/if}
				</div>
			{/key}
			{#key $innerWidth}
				<CardShowcase
					maxShown={$cardShowCaseProps.maxShown}
					cardSize={$cardShowCaseProps.cardSize}
					cards={$displayRepositoriesCardStore}
				/>
			{/key}
		{/if}
	</div>
</div>
