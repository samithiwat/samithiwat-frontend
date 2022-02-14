<script lang="ts">
	import { aboutmeProps } from '$lib/stores/aboutme.store';

	import Icon from '@iconify/svelte';
</script>

<div class="flex items-center justify-center">
	<div
		class="flex h-200 w-350 flex-col rounded-[2.5rem] bg-gray-primary p-32 font-Poppins text-6xl shadow-lg shadow-mint-primary transition duration-1000 hover:shadow-yellow-200"
	>
		<span class="flex select-none">
			<p
				class="bg-gradient-to-r from-mint-gradian via-purple-gradian to-red-gradian bg-clip-text font-bold text-transparent"
			>
				ABOUT ME
			</p>
		</span>
		<hr class="w-200 rounded-xl border-2 bg-gray-secondary" />
		<div class="my-12 flex flex-row gap-10 font-Poppins">
			<div class="flex flex-col items-center">
				<img
					src={$aboutmeProps.imgUrl}
					alt="Samithiwat Pic"
					class="my-5 h-100 w-100 rounded-2xl border-[18px] border-yellow-card bg-about-me bg-cover bg-center object-cover"
				/>
				<span class="flex select-none flex-row gap-x-2 text-white">
					<Icon icon="cil:birthday-cake" class=" h-5 w-5" />
					<p class="text-base">27 June 2001</p>
				</span>
			</div>
			<div class="flex w-[45rem] flex-col gap-5">
				<span>
					<p class="text-5xl font-bold text-white">{$aboutmeProps.name}</p>
					<p class="text-2xl font-semibold text-white">{$aboutmeProps.desc}</p>
				</span>
				<p class="h-3/5 text-base text-gray-secondary">
					{$aboutmeProps.content}
				</p>
				<div class=" flex flex-row items-end justify-end">
					<button
						class="btn btn-white flex h-10 w-40 flex-row items-center justify-center gap-x-2 text-base"
					>
						Read more <Icon icon="bi:arrow-right" /></button
					>
				</div>
			</div>
		</div>
	</div>
</div>
