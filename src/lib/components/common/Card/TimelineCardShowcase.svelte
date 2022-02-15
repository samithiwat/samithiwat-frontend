<script lang="ts">
	import { ScreenWidth } from '$lib/common/enums/common';
	import { Modal } from '$lib/common/enums/modal';
	import { IconType } from '$lib/common/enums/timeline';
	import { calIconSize } from '$lib/common/function/icon.function';
	import type { TimelineCardProps } from '$lib/common/types/card';
	import { innerWidth } from '$lib/stores/common.store';
	import { modalCarouselPropsStore, modalStatusStore } from '$lib/stores/modal.store';
	import { timelineConfig, timelineProps } from '$lib/stores/timeline.store';
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';
	import Circle from '../Icon/Circle.svelte';
	import MediumPhotoCard from './MediumPhotoCard.svelte';

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

	onMount(async () => {
		await timelineConfig.setIconSize(await calIconSize($innerWidth));
	});
</script>

<div class="relative flex h-full w-full flex-col ">
	<div class="mx-[16%] flex w-full flex-row sm:mx-0 sm:justify-center">
		<div class="absolute h-full w-1 rounded-xl bg-white sm:w-2 lg:w-3" />
	</div>

	{#each $timelineProps as item, pos}
		<div class="my-6 flex h-full flex-row justify-center">
			{#if $innerWidth > ScreenWidth.MOBILE_OVERALL}
				<div class="flex w-2/5 flex-row justify-center ">
					{#if pos % 2 === 0}
						<MediumPhotoCard
							id={item.timelineData.id}
							title={item.timelineData.name}
							desc={item.date}
							src={item.timelineData.thumbnail}
							on:click={handleModalOpen}
						/>
					{/if}
				</div>
			{/if}
			<div class="flex h-full w-1/3 flex-row items-center justify-center sm:w-[15%] ">
				<Circle color={item.timelineData.iconBgColor}>
					{#if item.timelineData.iconType === IconType.ICON}
						<Icon
							icon={item.timelineData.icon}
							class="h-7 w-7 text-white sm:h-10 sm:w-10 xl:h-14 xl:w-14"
						/>
					{:else}
						<img
							src={item.timelineData.icon}
							alt="logo"
							class="h-7 w-7 sm:h-10 sm:w-10 xl:h-14 xl:w-14"
						/>
					{/if}
				</Circle>
			</div>
			<div class="flex h-full w-2/3 flex-row justify-center sm:w-2/5 ">
				{#if pos % 2 !== 0 || $innerWidth < ScreenWidth.MOBILE_OVERALL}
					<MediumPhotoCard
						id={item.timelineData.id}
						title={item.timelineData.name}
						desc={item.date}
						src={item.timelineData.thumbnail}
						on:click={handleModalOpen}
					/>
				{/if}
			</div>
		</div>
	{/each}
</div>
