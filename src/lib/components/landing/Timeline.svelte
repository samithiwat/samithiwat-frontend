<script>
	$: y = 0;
</script>

<svelte:window bind:scrollY={y} />

<div class="flex h-[100rem] w-full flex-col items-center justify-center bg-gray-700">
	<div class="flex h-full w-36 flex-col items-center bg-pink-300 ">
		<div class="w-5 bg-blue-400" style="height: {Math.max(y - 500, 0)}px;" />
	</div>
</div>
<h1
	class="bg-gradient-to-r from-mint-gradian via-purple-gradian to-red-gradian bg-clip-text text-transparent"
>
	You have scrolled down {y} pixels
</h1>
