<script lang="ts">
	export let color = 'bg-white';
	export let height = 150;
	export let width = 150;
</script>

<div
	class={'flex z-20 items-center justify-center rounded-full hover:animate-spin-slow ' + color}
	style="height: {height}px; width: {width}px;"
>
	<slot />
</div>
