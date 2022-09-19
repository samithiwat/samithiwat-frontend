<script lang="ts">
	import { aboutmeProps } from '$lib/stores/aboutme.store';

	import Icon from '@iconify/svelte';
</script>

<div class="flex items-center justify-center">
	<div
		class="flex w-9/12 flex-col justify-center rounded-xl bg-gray-primary p-10 font-Poppins text-3xl shadow-lg shadow-mint-primary transition duration-1000 hover:shadow-yellow-200 mobile-s:h-[45rem] sm:rounded-[2.5rem] sm:p-12 sm:text-2xl md:p-20 md:text-4xl lg:h-200 lg:text-6xl xl:p-32"
	>
		<span class="flex w-full select-none justify-center lg:justify-start">
			<p
				class="bg-gradient-to-r from-mint-gradian via-purple-gradian to-red-gradian bg-clip-text text-center font-bold text-transparent"
			>
				ABOUT ME
			</p>
		</span>
		<hr class="invisible rounded-xl border-2 bg-gray-secondary md:w-11/12 lg:visible" />
		<div class="my-6 flex w-full flex-col gap-5 font-Poppins sm:gap-10 lg:my-12 lg:flex-row">
			<div class="flex flex-col items-center">
				<img
					src={$aboutmeProps.imgUrl}
					alt="Samithiwat Pic"
					class="my-2 h-48 w-48 rounded-2xl border-8 border-yellow-card bg-cover bg-center object-cover md:h-60 md:w-60 md:border-[14px] lg:my-5 lg:h-80 lg:w-80 lg:border-[18px] xl:h-100 xl:w-100"
				/>
				<span class="flex select-none flex-row gap-x-2 text-white">
					<Icon icon="cil:birthday-cake" class="h-3 w-3 sm:h-5 sm:w-5" />
					<p class="text-xs sm:text-base">27 June 2001</p>
				</span>
			</div>
			<div class="flex flex-col items-center gap-5 lg:w-4/6 lg:items-start lg:justify-center">
				<span>
					<p
						class="text-center text-sm font-bold text-white mobile-m:text-lg md:text-3xl lg:text-left xl:text-5xl"
					>
						{$aboutmeProps.name}
					</p>
					<p
						class="text-center text-2xs font-semibold text-white mobile-l:text-xs md:text-xl lg:text-left lg:text-base xl:text-2xl"
					>
						{$aboutmeProps.description}
					</p>
				</span>
				<p class="h-3/5 text-2xs text-gray-secondary sm:text-xs lg:text-sm xl:text-base">
					{$aboutmeProps.content}
				</p>
				<div class=" flex w-full flex-row items-end justify-end">
					<!--					<button-->
					<!--						class="btn btn-white flex h-5 w-20 flex-row items-center justify-center gap-x-1 rounded text-3xs sm:h-6 sm:text-xs md:h-8 md:w-28 md:gap-x-2 md:rounded-md lg:h-8 lg:w-32 lg:rounded-lg lg:text-sm xl:h-10 xl:w-40 xl:text-base"-->
					<!--					>-->
					<!--						Read more <Icon icon="bi:arrow-right" /></button-->
					<!--					>-->
				</div>
			</div>
		</div>
	</div>
</div>
