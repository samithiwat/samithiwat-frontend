<script lang="ts">
	import Carousel from '../Carousel/Carousel.svelte';

	export let height = 650;
	export let width = 800;
	export let bgColor = 'bg-gray-primary';
	export let gap = 18;
	export let padding = 48;
</script>

<div
	class={'relative rounded-3xl flex flex-col items-center justify-center py-12 ' + bgColor}
	style="height:{height}px; width:{width}px; row-gap: {gap}px; padding-top: {padding}px; padding-bottom: {padding}px;"
>
	<Carousel />
	<div class="h-1/3 w-4/5 items-center font-Poppins text-lg text-white ">
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi euismod sem at lectus feugiat
			aliquam. Nam sodales eleifend fringilla. Aliquam non nunc viverra, suscipit dui nec, faucibus
			arcu. Donec porttitor libero congue dictum porttitor. Etiam eu pulvinar erat, at consectetur
			quam. Nunc ultricies vestibulum turpis id varius.
		</p>
	</div>
	<div class="flex w-full justify-end px-20">
		<button class="btn btn-white h-12 w-36">Read more</button>
	</div>
</div>
