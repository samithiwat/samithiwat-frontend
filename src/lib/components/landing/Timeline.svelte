<script lang="ts">
	import { Modal } from '$lib/common/enums/modal';
	import { modalCarouselPropsStore, modalStatusStore } from '$lib/stores/modal.store';
	import type { TimelineCardProps } from '$lib/common/types/card';
	import Icon from '@iconify/svelte';
	import MediumPhotoCard from '../common/Card/MediumPhotoCard.svelte';
	import Circle from '../common/Icon/Circle.svelte';
	import { IconType } from '$lib/common/enums/timeline';
	import { timelineConfig, timelineProps } from '$lib/stores/timeline.store';
	import { innerWidth } from '$lib/stores/common.store';
	import { onMount } from 'svelte';
	import { calMediumCardSize } from '$lib/common/function/card.function';
	import { ScreenWidth } from '$lib/common/enums/common';
	import { calIconSize } from '$lib/common/function/icon.function';
	import TimelineCardShowcase from '../common/Card/TimelineCardShowcase.svelte';

	const nProps = $timelineProps.length;
	// let height = nProps * 450 + 50 * (nProps - 1) + 500;

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
</script>

<div class="mb-20 flex select-none justify-center font-Poppins">
	<div
		class="flex w-9/12 flex-col items-center justify-center gap-y-20 rounded-4xl bg-gray-primary py-20 text-white shadow-lg shadow-sky-300 transition duration-1000 hover:shadow-mint-gradian"
	>
		<span class="flex w-full flex-col items-center">
			<span>
				<p
					class="bg-gradient-to-r from-mint-gradian via-purple-gradian to-red-gradian bg-clip-text text-4xl font-bold text-transparent sm:text-6xl lg:text-7xl xl:text-8xl"
				>
					TIMELINE
				</p>
			</span>
			<hr class="invisible w-1/2 rounded-lg md:border-2 lg:visible lg:border-2" />
		</span>

		{#key $innerWidth}
			<TimelineCardShowcase />
		{/key}
	</div>
</div>
