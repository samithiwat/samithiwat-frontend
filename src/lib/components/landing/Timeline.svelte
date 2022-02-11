<script>
	import Icon from '@iconify/svelte';
	import Circle from '../common/Icon/Circle.svelte';

	$: y = 0;
</script>

<svelte:window bind:scrollY={y} />

<div class="flex justify-center font-Poppins">
	<div class="flex h-[200rem] w-350 flex-col items-center rounded-4xl bg-gray-primary py-8">
		<span
			class="flex bg-gradient-to-r from-mint-gradian via-purple-gradian to-red-gradian bg-clip-text text-9xl font-bold text-transparent"
		>
			TIMELINE
		</span>
		<hr class="w-[62.5rem] border-2" />
		<div>
			<div class="flex flex-col gap-y-36">
				<Circle color="bg-blue-icon"
					><Icon icon="clarity:ruler-pencil-line" class="h-20 w-20 text-white" /></Circle
				>
				<Circle color="bg-yellow-icon"><Icon icon="bi:book" class="h-20 w-20 text-white" /></Circle>
				<Circle color="bg-mint-primary"
					><Icon icon="cil:education" class="h-20 w-20 text-white" /></Circle
				>
				<Circle color="bg-pink-primary"
					><Icon icon="la:laptop-code" class="h-20 w-20 text-white" /></Circle
				>
				<Circle color="bg-gray-icon"
					><img src="svg/thinc_logo.svg" alt="thinc logo" class="h-20 w-20" /></Circle
				>
				<Circle color="bg-white"
					><img src="svg/courseville_logo.svg" alt="course ville logo" class="h-20 w-20" /></Circle
				>
				<Circle color="bg-pink-sgcu-icon"
					><img src="svg/sgcu_logo.svg" alt="sgcu logo" class="h-20 w-20" /></Circle
				>
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
