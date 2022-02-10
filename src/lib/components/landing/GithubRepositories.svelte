<script lang="ts">
	import SmallPhotoCard from '../common/Card/SmallPhotoCard.svelte';
	import Icon from '@iconify/svelte';
	import {
		displayRepositoriesCardStore,
		leftArrowStore,
		repositoriesStore,
		rightArrowStore
	} from '$lib/stores/github-repository.store';
	import type { SmallPhotoCardProps } from '$lib/common/types/small-photo-card';
	import { onMount } from 'svelte';
	import moment from 'moment';

	const cardProps: SmallPhotoCardProps[] = [
		{
			cardClass: 'small-card bg-selected-card text-white',
			titleColor: 'text-white'
		},
		{
			cardClass: 'card small-card text-gray-secondary',
			titleColor: 'text-gray-primary'
		},
		{
			cardClass: 'card small-card text-gray-secondary',
			titleColor: 'text-gray-primary'
		},
		{
			cardClass: 'card small-card text-gray-secondary',
			titleColor: 'text-gray-primary'
		},
		{
			cardClass: 'card small-card text-gray-secondary',
			titleColor: 'text-gray-primary'
		},
		{
			cardClass: 'card small-card text-gray-secondary',
			titleColor: 'text-gray-primary'
		}
	];

	$: selectedPos = 0;
	$: offsetPos = 0;

	function handleNextPageClick() {
		const prevPos = selectedPos;
		selectedPos += 1;

		if (selectedPos > 3) {
			selectedPos = 3;
			offsetPos += 1;

			if (offsetPos > $repositoriesStore.length - 4) {
				offsetPos = $repositoriesStore.length - 4;
			}

			displayRepositoriesCardStore.setRepository($repositoriesStore, offsetPos);
		}

		updateHighlight(prevPos, selectedPos);
	}

	function handlePrevPageClick() {
		const prevPos = selectedPos;
		selectedPos -= 1;

		if (selectedPos < 0) {
			selectedPos = 0;
			offsetPos -= 1;

			if (offsetPos < 0) {
				offsetPos = 0;
			}

			displayRepositoriesCardStore.setRepository($repositoriesStore, offsetPos);
		}

		updateHighlight(prevPos, selectedPos);
	}

	function handleCardClick(e: CustomEvent) {
		const pos = e.detail.pos;
		if (pos === selectedPos) {
			return;
		}

		updateHighlight(selectedPos, pos);

		selectedPos = pos;
	}

	function updateHighlight(prevPos: number, pos: number) {
		cardProps[prevPos].cardClass = 'card small-card text-gray-secondary';
		cardProps[prevPos].titleColor = 'text-gray-primary';

		cardProps[pos].cardClass = 'small-card bg-selected-card text-white';
		cardProps[pos].titleColor = 'text-white';
	}

	onMount(async () => {
		await repositoriesStore.fetch();
		await displayRepositoriesCardStore.setRepository($repositoriesStore, offsetPos);
	});
</script>

<div class="my-20 flex justify-center font-Poppins">
	<div class="flex h-[65rem] w-350 flex-col items-center rounded-4xl bg-gray-primary py-8">
		<span class="flex w-[62.5rem] flex-row items-end justify-center gap-x-5">
			<Icon icon="akar-icons:github-fill" color="white" class="h-20 w-20" />
			<span
				class="flex bg-gradient-to-r from-mint-gradian via-purple-gradian to-red-gradian bg-clip-text text-7xl font-bold text-transparent"
			>
				GITHUB REPOSITORIES
			</span>
		</span>
		<hr class="w-[62.5rem] border-2" />
		<div class="my-10 flex flex-row items-center gap-x-10">
			<img
				src="https://storage.googleapis.com/fe-camp/Annonymous-Icon.png"
				alt="Repository Cover"
				class="h-[22rem] w-[22rem] rounded-4xl"
			/>
			<div class="flex flex-col gap-y-5">
				{#if $displayRepositoriesCardStore.length === 0}
					<h2>{$displayRepositoriesCardStore}</h2>
				{:else}
					<p class="text-6xl font-bold text-white">
						{$displayRepositoriesCardStore[selectedPos].name}
					</p>
					<span class="flex items-center gap-x-1">
						<p class="text-2xl text-white">{$displayRepositoriesCardStore[selectedPos].author}</p>
					</span>
					<p class="mt-2 h-32 w-200 text-base text-gray-secondary">
						{$displayRepositoriesCardStore[selectedPos].description}
					</p>
				{/if}
				<span class="flex w-[42rem] flex-row justify-between">
					<span
						class="flex flex-row items-center justify-center gap-x-1 text-xl text-gray-secondary"
					>
						Latest updated at

						{moment($displayRepositoriesCardStore[selectedPos].updatedAt).format(
							'ddd, Do MMM YYYY,'
						)}
						{$displayRepositoriesCardStore[selectedPos].time}
					</span>
					<button
						class="btn btn-white flex h-12 w-36 items-center justify-center gap-x-3"
						on:click={() => {
							window.open($displayRepositoriesCardStore[selectedPos].url);
						}}
					>
						Browse <Icon icon="bx:bx-link-external" /></button
					>
				</span>
			</div>
		</div>
		<div class="mt-4 flex flex-row items-center gap-x-4 ">
			<div
				on:click={() => {
					leftArrowStore.triggle();
					handlePrevPageClick();
				}}
			>
				<Icon icon={$leftArrowStore} class="h-12 w-12 text-yellow-card" />
			</div>

			{#if $displayRepositoriesCardStore.length === 0}
				<h1>Empty</h1>
			{:else}
				{#each $displayRepositoriesCardStore as repo, pos}
					<SmallPhotoCard
						{pos}
						title={repo.name}
						desc={repo.author}
						date={repo.updatedAt}
						time={repo.time}
						height={400}
						width={285}
						cardClass={cardProps[pos].cardClass}
						titleColor={cardProps[pos].titleColor}
						on:click={handleCardClick}
					/>
				{/each}
			{/if}

			<div
				on:click={() => {
					rightArrowStore.triggle();
					handleNextPageClick();
				}}
			>
				<Icon icon={$rightArrowStore} class="h-12 w-12 text-yellow-card" />
			</div>
		</div>
	</div>
</div>
