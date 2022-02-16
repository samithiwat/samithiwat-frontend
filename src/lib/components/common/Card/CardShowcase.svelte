<script lang="ts">
	import { Direction } from '$lib/common/enums/common';
	import { GithubClassName } from '$lib/common/enums/github-repo';
	import { calSmallCardSize, calMaxShown } from '$lib/common/function/card.function';
	import type { GithubCardProps } from '$lib/common/types/card';
	import { innerWidth } from '$lib/stores/common.store';

	import {
		cardShowCaseProps,
		displayRepositoriesCardStore,
		leftArrowStore,
		offsetPos,
		repositoriesStore,
		rightArrowStore,
		selectedPos
	} from '$lib/stores/github-repository.store';
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';
	import SmallPhotoCard from './SmallPhotoCard.svelte';

	export let maxShown = 4;
	export let cardSize = {
		width: 225,
		height: 300
	};
	export let cards: GithubCardProps[] = [];

	async function handleCardClick(e: CustomEvent) {
		const { pos } = e.detail;
		if (pos === $selectedPos) {
			return;
		}

		await updateHighlight($selectedPos, pos);

		$selectedPos = pos;
	}

	async function handleArrowClick(dir: Direction) {
		let prevPos = $selectedPos;
		switch (dir) {
			case Direction.LEFT:
				$selectedPos -= 1;

				if ($selectedPos < 0) {
					$selectedPos = 0;
					$offsetPos -= 1;

					if ($offsetPos < 0) {
						$offsetPos = 0;
					}

					if (cards.length > 1) {
						prevPos++;
					}
				}
				break;
			case Direction.RIGHT:
				$selectedPos += 1;

				if ($selectedPos > maxShown - 1) {
					$selectedPos = maxShown - 1;
					$offsetPos += 1;

					if ($offsetPos > $repositoriesStore.length - maxShown) {
						$offsetPos = $repositoriesStore.length - maxShown;
					}

					if (cards.length > 1) {
						prevPos--;
					}
				}

				break;
		}
		await displayRepositoriesCardStore.setRepository($repositoriesStore, $offsetPos, maxShown);

		await updateHighlight(prevPos, $selectedPos);
	}

	function updateHighlight(prevPos: number, pos: number) {
		if (maxShown > 1) {
			cards[prevPos].cardClass = GithubClassName.CARD_DESELECTED;
			cards[prevPos].titleColor = GithubClassName.TITLE_DESELECTED;
		}

		cards[pos].cardClass = GithubClassName.CARD_SELECTED;
		cards[pos].titleColor = GithubClassName.TITLE_SELECTED;
	}

	onMount(async () => {
		await cardShowCaseProps.setCardSize(calSmallCardSize($innerWidth));
		await cardShowCaseProps.setMaxShown(calMaxShown($innerWidth));
		$selectedPos = maxShown > 1 ? $selectedPos : 0;
		$selectedPos = $selectedPos > maxShown - 1 ? 0 : $selectedPos;
		$offsetPos = $offsetPos + maxShown > cards.length ? $offsetPos - maxShown : $offsetPos;
		$offsetPos = $offsetPos < 0 ? 0 : $offsetPos;
		$selectedPos = $offsetPos === 0 ? 0 : $selectedPos;
		await repositoriesStore.resetCardStyle($offsetPos);
		await displayRepositoriesCardStore.setRepository($repositoriesStore, $offsetPos, maxShown);
	});
</script>

<div class="mt-4 flex flex-row items-center gap-x-3">
	{#if cards.length > 0}
		<div
			on:click={() => {
				leftArrowStore.triggle();
				handleArrowClick(Direction.LEFT);
			}}
		>
			<Icon
				icon={$leftArrowStore}
				class="h-6 w-6 transform text-yellow-card transition duration-200 ease-in-out hover:-translate-x-1 hover:scale-110 active:-translate-x-4 sm:h-10 sm:w-10"
			/>
		</div>
		{#key $cardShowCaseProps.maxShown}
			{#each cards as props, pos}
				{#key $offsetPos}
					<div class="animate-shakeX-once">
						<SmallPhotoCard
							{pos}
							id={props.id}
							title={props.repository.name}
							desc={props.repository.author}
							date={props.repository.date}
							time={props.repository.time}
							cardClass={props.cardClass}
							titleColor={props.titleColor}
							height={cardSize.height}
							width={cardSize.width}
							on:click={handleCardClick}
						/>
					</div>
				{/key}
			{/each}
		{/key}
		<div
			on:click={() => {
				rightArrowStore.triggle();
				handleArrowClick(Direction.RIGHT);
			}}
		>
			<Icon
				icon={$rightArrowStore}
				class="h-6 w-6 transform text-yellow-card transition duration-200 ease-in-out hover:translate-x-1 hover:scale-110 active:translate-x-4 sm:h-10 sm:w-10"
			/>
		</div>
	{/if}
</div>
