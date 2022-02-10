<script lang="ts">
	import Icon from '@iconify/svelte';
</script>

<div
	class="relative flex h-[25rem] w-full flex-col justify-center bg-footer bg-cover bg-center text-center font-MuseoModerno sm:h-[30rem]"
>
	<p class="text-3xl text-white mobile-m:text-4xl sm:text-5xl 2xl:text-8xl">Get in touch with me</p>
	<p class="mt-5 text-base text-white mobile-m:text-lg 2xl:text-3xl">
		follow me on social media or contact for work
	</p>

	<span
		class="mt-8 mb-5 flex flex-wrap justify-center gap-x-5 gap-y-3 px-20 mobile-m:px-28 mobile-l:px-32 sm:my-12 sm:flex-row sm:gap-x-20 sm:px-20 2xl:my-8"
	>
		<a href="https://www.linkedin.com/in/samithiwat/" target="_blank" class="">
			<Icon
				icon="akar-icons:linkedin-fill"
				color="white"
				class="h-16 w-16 sm:h-20 sm:w-20 2xl:h-24 2xl:w-24"
			/>
		</a>
		<a href="https://github.com/samithiwat" target="_blank" class="">
			<Icon
				icon="akar-icons:github-fill"
				color="white"
				class="h-16 w-16 sm:h-20 sm:w-20 2xl:h-24 2xl:w-24"
			/>
		</a>
		<a href="https://www.facebook.com/profile.php?id=80004633398479" target="_blank">
			<Icon
				icon="entypo-social:facebook"
				color="white"
				class="h-16 w-16 sm:h-20 sm:w-20 2xl:h-24 2xl:w-24"
			/>
		</a>
		<a href="https://www.instagram.com/samithiwat/" target="_blank">
			<Icon icon="bi:instagram" color="white" class="h-16 w-16 sm:h-20 sm:w-20 2xl:h-24 2xl:w-24" />
		</a>
	</span>
</div>
