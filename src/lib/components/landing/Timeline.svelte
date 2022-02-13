<script lang="ts">
	import { Modal } from '$lib/common/enums/modal';
	import { modalCarouselPropsStore, modalStatusStore } from '$lib/stores/modal.store';
	import type { TimelineCardProps } from '$lib/common/types/card';
	import Icon from '@iconify/svelte';
	import MediumPhotoCard from '../common/Card/MediumPhotoCard.svelte';
	import Circle from '../common/Icon/Circle.svelte';
	import { IconType } from '$lib/common/enums/timeline';
	import { timelineProps } from '$lib/stores/timeline.store';

	function handleModalOpen(e: CustomEvent) {
		const { id } = e.detail;
		modalStatusStore.open(Modal.CAROUSEL);
		const props = $timelineProps.filter(
			(item: TimelineCardProps) => item.timelineData.id === id
		)[0];
		modalCarouselPropsStore.setModalContent(
			props.timelineData.name,
			props.timelineData.description,
			props.timelineData.images
		);
	}

	const nProps = $timelineProps.length;
	let height = nProps * 450 + 50 * (nProps - 1) + 500;
</script>

s
<div class="flex select-none justify-center font-Poppins">
	<div
		class="flex w-350 flex-col items-center justify-center gap-y-20 rounded-4xl bg-gray-primary py-20 text-white"
		style="height: {height}px;"
	>
		<span class="flex flex-col items-center">
			<p
				class="bg-gradient-to-r from-mint-gradian via-purple-gradian to-red-gradian bg-clip-text text-9xl font-bold text-transparent"
			>
				TIMELINE
			</p>
			<hr class="w-[62.5rem] border-2" />
		</span>

		<div class="relative flex h-full w-full flex-col px-14">
			<div class="flex flex-col items-center">
				<div class="absolute h-full w-5 rounded-xl bg-white" />
				<div class="absolute my-[12.5rem] flex flex-col gap-y-[21.875rem]">
					{#each $timelineProps as item}
						<Circle color={item.timelineData.iconBgColor}>
							{#if item.timelineData.iconType === IconType.ICON}
								<Icon icon={item.timelineData.icon} class="h-20 w-20 text-white" />
							{:else}
								<img src={item.timelineData.icon} alt="logo" class="h-20 w-20" />
							{/if}
						</Circle>
					{/each}
				</div>
			</div>

			<div class="flex h-full w-full flex-col items-center">
				<div class="flex h-full w-full flex-col gap-y-[3.125rem] py-[3.125rem]">
					{#each $timelineProps as item, pos}
						{#if pos % 2 === 0}
							<div class="flex w-full flex-row justify-end">
								<MediumPhotoCard
									id={item.timelineData.id}
									title={item.timelineData.name}
									desc={item.date}
									src={item.timelineData.thumbnail}
									on:click={handleModalOpen}
								/>
							</div>
						{:else}
							<div class="flex w-full flex-row justify-start">
								<MediumPhotoCard
									id={item.timelineData.id}
									title={item.timelineData.name}
									desc={item.date}
									src={item.timelineData.thumbnail}
									on:click={handleModalOpen}
								/>
							</div>
						{/if}
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>
