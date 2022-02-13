<script lang="ts">
	import { Direction } from '$lib/common/enums/common';
	import { GithubClassName } from '$lib/common/enums/github-repo';

	import {
		displayRepositoriesCardStore,
		leftArrowStore,
		offsetPos,
		repositoriesStore,
		rightArrowStore,
		selectedPos
	} from '$lib/stores/github-repository.store';
	import Icon from '@iconify/svelte';
	import SmallPhotoCard from './SmallPhotoCard.svelte';

	function handleCardClick(e: CustomEvent) {
		const pos = e.detail.id;
		if (pos === $selectedPos) {
			return;
		}

		updateHighlight($selectedPos, pos);

		$selectedPos = pos;
	}

	function handleArrowClick(dir: Direction) {
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

					prevPos++;
				}
				break;
			case Direction.RIGHT:
				$selectedPos += 1;
				if ($selectedPos > 3) {
					$selectedPos = 3;
					$offsetPos += 1;

					if ($offsetPos > $repositoriesStore.length - 4) {
						$offsetPos = $repositoriesStore.length - 4;
					}

					prevPos--;
				}

				break;
		}
		displayRepositoriesCardStore.setRepository($repositoriesStore, $offsetPos);
		updateHighlight(prevPos, $selectedPos);
	}

	function updateHighlight(prevPos: number, pos: number) {
		$displayRepositoriesCardStore[prevPos].cardClass = GithubClassName.CARD_DESELECTED;
		$displayRepositoriesCardStore[prevPos].titleColor = GithubClassName.TITLE_DESELECTED;

		$displayRepositoriesCardStore[pos].cardClass = GithubClassName.CARD_SELECTED;
		$displayRepositoriesCardStore[pos].titleColor = GithubClassName.TITLE_SELECTED;
	}
</script>

<div class="mt-4 flex flex-row items-center gap-x-4">
	{#if $displayRepositoriesCardStore.length > 0}
		<div
			on:click={() => {
				leftArrowStore.triggle();
				handleArrowClick(Direction.LEFT);
			}}
		>
			<Icon
				icon={$leftArrowStore}
				class="h-12 w-12 transform text-yellow-card transition duration-200 ease-in-out hover:-translate-x-1 hover:scale-110 active:-translate-x-4"
			/>
		</div>
		{#each $displayRepositoriesCardStore as props, pos}
			{#key $offsetPos}
				<div class="animate-shakeX-once">
					<SmallPhotoCard
						id={pos}
						title={props.repository.name}
						desc={props.repository.author}
						date={props.repository.date}
						time={props.repository.time}
						cardClass={props.cardClass}
						titleColor={props.titleColor}
						height={400}
						width={285}
						on:click={handleCardClick}
					/>
				</div>
			{/key}
		{/each}

		<div
			on:click={() => {
				rightArrowStore.triggle();
				handleArrowClick(Direction.RIGHT);
			}}
		>
			<Icon
				icon={$rightArrowStore}
				class="h-12 w-12 transform text-yellow-card transition duration-200 ease-in-out hover:translate-x-1 hover:scale-110 active:translate-x-4"
			/>
		</div>
	{/if}
</div>
