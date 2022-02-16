<script context="module">
	/** @type {import('@sveltejs/kit').ErrorLoad} */
	export function load({ status }) {
		return {
			props: {
				status
			}
		};
	}
</script>

<script>
	import { goto } from '$app/navigation';
	import { Path } from '$lib/common/enums/path';
	import { isError } from '$lib/stores/common.store';

	import { onMount } from 'svelte';

	export let status;
	let message = '';
	let counter = 5;

	onMount(() => {
		$isError = true;
		if (status === 404) {
			message = "This Page Isn't Available";
		} else {
			message = 'Something went wrong :(';
		}
		setInterval(() => {
			counter--;
			if (counter === 0) {
				$isError = false;
				goto(Path.LANDING);
			}
		}, 1000);
	});
</script>

<div
	class=" h-screen w-full animate-gradient select-none bg-gradient-to-r from-mint-gradian via-purple-gradian to-red-gradian bg-[length:400%_400%] "
>
	<div
		class="flex h-full w-full flex-col justify-center gap-y-10 text-center font-Poppins text-white"
	>
		<p class="topic xl:text-7xl">{message}</p>
		<p class="sub-topic">{'Back to home in ' + counter}</p>
	</div>
</div>
