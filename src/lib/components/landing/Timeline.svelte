<script lang="ts">
	import { Modal } from '$lib/common/enums/modal';
	import { modalCarouselPropsStore, modalStatusStore } from '$lib/stores/modal.store';
	import { timelineProps } from '$lib/stores/timeline.store';
	import type { TimelineCardProps } from '$lib/common/types/card';
	import Icon from '@iconify/svelte';
	import MediumPhotoCard from '../common/Card/MediumPhotoCard.svelte';
	import Circle from '../common/Icon/Circle.svelte';

	$: y = 0;
	const leftTimeline: TimelineCardProps[] = $timelineProps.filter(
		(item: TimelineCardProps) => item.timelineData.id % 2 === 0
	);
	const rightTimeline: TimelineCardProps[] = $timelineProps.filter(
		(item: TimelineCardProps) => item.timelineData.id % 2 !== 0
	);

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

<svelte:window bind:scrollY={y} />

<div class="flex justify-center font-Poppins">
	<div
		class="flex h-[190rem] w-350 flex-col items-center justify-center rounded-4xl bg-gray-primary py-8 text-white"
	>
		<span
			class="flex bg-gradient-to-r from-mint-gradian via-purple-gradian to-red-gradian bg-clip-text text-9xl font-bold text-transparent"
		>
			TIMELINE
		</span>
		<hr class="w-[62.5rem] border-2" />
		<div class="relative my-24 flex h-[165rem] w-full flex-row items-center justify-center">
			<div class="absolute flex h-full w-full flex-col items-center gap-y-3 font-MuseoModerno ">
				<h5>Born</h5>
				<div class="z-0 h-full w-5 rounded-xl bg-white" />
				<h5>Present</h5>
			</div>
			<div class="z-20 flex h-full w-full flex-col items-center gap-y-[15.625rem] py-100">
				{#each leftTimeline as item}
					<MediumPhotoCard
						id={item.timelineData.id}
						title={item.timelineData.name}
						desc={item.date}
						src={item.timelineData.thumbnail}
						on:click={handleModalOpen}
					/>
				{/each}
			</div>

			<div class="z-10 flex flex-col gap-y-52">
				<Circle color="bg-blue-icon">
					<Icon icon="clarity:ruler-pencil-line" class="h-20 w-20 text-white" />
				</Circle>
				<Circle color="bg-yellow-icon"><Icon icon="bi:book" class="h-20 w-20 text-white" /></Circle>
				<Circle color="bg-mint-primary">
					<Icon icon="cil:education" class="h-20 w-20 text-white" />
				</Circle>
				<Circle color="bg-pink-primary">
					<Icon icon="la:laptop-code" class="h-20 w-20 text-white" />
				</Circle>
				<Circle color="bg-gray-icon">
					<img src="svg/thinc_logo.svg" alt="thinc logo" class="h-20 w-20" />
				</Circle>
				<Circle color="bg-white">
					<img src="svg/courseville_logo.svg" alt="course ville logo" class="h-20 w-20" />
				</Circle>
				<Circle color="bg-pink-sgcu-icon">
					<img src="svg/sgcu_logo.svg" alt="sgcu logo" class="h-20 w-20" />
				</Circle>
			</div>
			<div class="z-20 flex h-full w-full flex-col items-center gap-y-[15.625rem] py-16">
				{#each rightTimeline as item}
					<MediumPhotoCard
						id={item.timelineData.id}
						title={item.timelineData.name}
						desc={item.date}
						src={item.timelineData.thumbnail}
						on:click={handleModalOpen}
					/>
				{/each}
			</div>
		</div>
	</div>
	<!-- <div class="flex h-full w-36 flex-col items-center bg-pink-300 ">
			<div class="w-5 bg-blue-400" style="height: {Math.max(y - 2100, 0)}px;" />
		</div> -->
</div>
<!-- <h1
		class="bg-gradient-to-r from-mint-gradian via-purple-gradian to-red-gradian bg-clip-text text-transparent"
		>
		You have scrolled down {y} pixels
	</h1> -->
