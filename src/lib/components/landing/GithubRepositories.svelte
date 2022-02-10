<script lang="ts">
	import SmallPhotoCard from '../common/Card/SmallPhotoCard.svelte';
	import Icon from '@iconify/svelte';
	import type { Repository } from '$lib/common/types/github-repo';
	import { leftArrowStore, rightArrowStore } from '$lib/stores/github-repository.store';
	import type { SmallPhotoCardProps } from '$lib/common/types/small-photo-card';

	const repoes: Repository[] = [
		{
			name: 'svelte-icons',
			author: 'svelte',
			description: 'Svelte Icons',
			url: '',
			stars: 0,
			createdAt: '2020-01-01'
		},
		{
			name: 'Coconut Empire',
			author: 'samithiwat',
			description: 'Svelte Icons',
			url: '',
			stars: 0,
			createdAt: '2020-01-01'
		},
		{
			name: 'Samithiwat Backend',
			author: 'samithiwat',
			description: 'Svelte Icons',
			url: '',
			stars: 0,
			createdAt: '2020-01-01'
		},
		{
			name: 'Samithiwat',
			author: 'samithiwat',
			description: 'Svelte Icons',
			url: '',
			stars: 0,
			createdAt: '2020-01-01'
		}
	];

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
		}
	];

	let prevPos = 0;

	function handleCardClick(e: CustomEvent) {
		const pos = e.detail.pos;
		if (pos === prevPos) {
			return;
		}

		cardProps[prevPos].cardClass = 'card small-card text-gray-secondary';
		cardProps[prevPos].titleColor = 'text-gray-primary';

		cardProps[pos].cardClass = 'small-card bg-selected-card text-white';
		cardProps[pos].titleColor = 'text-white';
		prevPos = pos;
		console.log(e.detail);
	}
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
				<p class="text-6xl font-bold text-white">Samithiwat</p>
				<p class="text-2xl text-white">Samithiwat</p>
				<p class="mt-2 h-44 w-200 text-base text-gray-secondary">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim est ac neque
					iaculis, vitae blandit enim laoreet. Sed in ligula augue. Vivamus in scelerisque eros, a
					imperdiet libero. Nulla facilisi. Morbi eu velit nisi. Fusce neque eros, congue sit amet
					erat eu, hendrerit egestas risus. Phasellus ac odio ut ante mattis pretium. Proin sit amet
					ipsum vel neque mollis aliquam. Nulla facilisi. Duis euismod mauris nunc, accumsan tempus
					justo mollis id. Quisque sit amet lectus ac mauris accumsan imperdiet. Aliquam non
					hendrerit erat. Sed dolor neque, dignissim id vulputate sit amet, tristique nec libero.
					Donec ornare posuere velit, et aliquam erat cursus id. Morbi nec accumsan purus.
				</p>
				<span class="flex flex-row justify-between">
					<span
						class="flex flex-row items-center justify-center gap-x-1 text-xl text-gray-secondary"
					>
						<Icon icon="ant-design:calendar-outlined" class="h-5 w-5" />
						23 Jan 2022
						<Icon icon="ant-design:clock-circle-outlined" class="h-5 w-5" />
						1:00 PM
					</span>
					<button class="btn btn-white flex h-12 w-36 items-center justify-center gap-x-3">
						Browse <Icon icon="bx:bx-link-external" /></button
					>
				</span>
			</div>
		</div>
		<div class="mt-4 flex flex-row items-center gap-x-4 ">
			{#if repoes.length >= 4}
				<div
					on:click={() => {
						leftArrowStore.triggle();
					}}
				>
					<Icon icon={$leftArrowStore} class="h-12 w-12 text-yellow-card" />
				</div>
			{/if}
			{#each repoes as repo, pos}
				<SmallPhotoCard
					{pos}
					title={repo.name}
					desc={repo.author}
					date={repo.createdAt}
					height={380}
					width={285}
					cardClass={cardProps[pos].cardClass}
					titleColor={cardProps[pos].titleColor}
					on:click={handleCardClick}
				/>
			{/each}
			{#if repoes.length >= 4}
				<div
					on:click={() => {
						rightArrowStore.triggle();
					}}
				>
					<Icon icon={$rightArrowStore} class="h-12 w-12 text-yellow-card" />
				</div>
			{/if}
		</div>
	</div>
</div>
