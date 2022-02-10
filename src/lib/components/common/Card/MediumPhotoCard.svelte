<script lang="ts">
	export let title = 'Lorem ipsum';
	export let desc = 'Maecenas porttito4';
	export let height = 390;
	export let width = 400;
	export let src =
		'https://storage.googleapis.com/fe-camp/profile-Smity-Binchu-d84d3b57e7eb5825b283680462fea9a9e17caa54bb094835f3d1d0d2b5837632.jpg';
	let imgHeight = 0.655 * height;
	let imgWidth = 0.85 * height;
	let padding = 0.077 * height;
	let titleSize = 0.07 * height;
	let descriptionSize = 0.06 * height;
	let titleHeight = 0.09 * height;
	let descriptionHeight = 0.08 * height;
</script>

<div
	class="rounded-2xl bg-yellow-card shadow-lg"
	style="height:{height}px; width:{width}px; padding: {padding}px"
>
	<div class="flex w-full items-center justify-center">
		<img {src} alt="Card Img" height={imgHeight} width={imgWidth} class="rounded-2xl" />
	</div>
	<div class="mt-6 flex flex-col items-center font-Poppins">
		<p
			class="text-4xl font-extrabold text-gray-primary"
			style="font-size: {titleSize}px; line-height: {titleHeight}px"
		>
			{title}
		</p>

		<p
			class="mt-4 text-lg text-gray-secondary"
			style="font-size: {descriptionSize}px; line-height: {descriptionHeight}px"
		>
			{desc}
		</p>
	</div>
</div>
