<script lang="ts">
	import { innerWidth } from '$lib/stores/common.store';
	import TimelineCardShowcase from '../common/Card/TimelineCardShowcase.svelte';
</script>

<div class="mb-20 flex select-none justify-center font-Poppins">
	<div
		class="flex w-9/12 flex-col items-center justify-center gap-y-20 rounded-4xl bg-gray-primary py-20 text-white shadow-lg shadow-yellow-300 transition duration-1000 hover:shadow-mint-gradian"
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
