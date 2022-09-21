<script lang="ts">
	import { Color, ScreenWidth } from '$lib/common/enums/common';
	import type { ModalImageProps } from '$lib/common/types/modal';
	import { innerWidth } from '$lib/stores/common.store';
	import Icon from '@iconify/svelte';
	import Carousel from '../Carousel/Carousel.svelte';

	export let bgColor: Color = Color.GRAY_PRIMARY;
	export let content = '';
	export let images: ModalImageProps[] = [];
</script>

<div
	class="relative h-3/4 w-7/12 select-none rounded-3xl py-12 sm:h-[95%] xl:w-1/2 xl:py-5 2xl:w-5/12"
	style="background-color: {bgColor};"
>
	{#if images.length}
		<div class="flex h-full flex-col justify-center gap-y-3 sm:gap-y-4">
			<div class="flex h-full w-full flex-row justify-center">
				<div class="flex h-full w-4/5 flex-row justify-center rounded-xl xl:w-5/6 ">
					<Carousel {images} />
				</div>
			</div>
			<div class="flex h-full w-full flex-row justify-center">
				<div
					class="h-full w-4/5 items-center font-Poppins text-2xs text-white sm:text-sm lg:text-base 2xl:text-xl"
				>
					<p>
						{content}
					</p>
				</div>
			</div>
			<div class="flex h-[10%] w-full flex-row items-center justify-end">
				{#if $innerWidth > ScreenWidth.MOBILE_OVERALL}
					<div class="w-1/3" />
					<div class="w-1/3" />
					<div class="flex w-1/3 flex-row justify-center">
<!--						<button-->
<!--							class="btn btn-white flex items-center justify-center gap-x-1 sm:h-6 sm:w-20 sm:rounded-lg sm:text-2xs lg:h-8 lg:w-24 lg:text-xs 2xl:h-12 2xl:w-36 2xl:text-base"-->
<!--							>Read more <Icon icon="bi:arrow-right" /></button-->
<!--						>-->
					</div>
				{:else}
					<div class="flex flex-row w-full ">
						<div class="w-1/2" />
						<div class="w-1/2 flex flex-row justify-center">
<!--							<button-->
<!--								class="text-2xs rounded-md h-5 w-20 btn btn-white flex items-center justify-center gap-x-[0.125rem] "-->
<!--								>Read more <Icon icon="bi:arrow-right" /></button-->
<!--							>-->
						</div>
					</div>
				{/if}
			</div>
			<div />
		</div>
	{:else}
		<div class="flex flex-row justify-center items-center h-52 sm:h-100 2xl:h-150">
			<p class="text-white font-Poppins font-bold sm:text-5xl xl:text-6xl 2xl:text-8xl">
				No Content
			</p>
		</div>
	{/if}
</div>
