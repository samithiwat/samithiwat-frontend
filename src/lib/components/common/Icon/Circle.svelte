<script lang="ts">
	export let color = 'bg-white';
</script>

<div
	class={'flex h-36 w-36 items-center justify-center rounded-full hover:animate-spin-slow ' + color}
>
	<slot />
</div>
