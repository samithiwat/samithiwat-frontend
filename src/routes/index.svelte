<script lang="ts">
	import { goto } from '$app/navigation';
	import { Path } from '$lib/common/enums/common';

	$: count = 5;
	$: message = 'PRESS ANYKEY TO CONTINUE';

	function goToLanding() {
		setInterval(() => {
			count--;
			message = 'Go to home page in ' + count;
			if (count === 0) {
				goto(Path.LANDING);
			}
		}, 1000);
	}
</script>

<svelte:window on:keydown={goToLanding} on:click={goToLanding} />

<section class="bg-gradient relative z-0 h-screen w-full select-none">
	<div
		class="z-0 flex h-screen w-full animate-fade-in flex-col justify-center text-center font-Poppins text-white transition duration-1000"
	>
		<p class="text-3xl font-extrabold md:text-5xl lg:text-7xl 2xl:text-9xl">SAMITHIWAT.DEV</p>
		<p class="animate-pulse text-sm md:text-xl lg:text-3xl 2xl:text-5xl">
			{message}
		</p>
	</div>
</section>
