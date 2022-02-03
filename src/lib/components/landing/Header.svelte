<script lang="ts">
	import Icon from '@iconify/svelte';
</script>

<div
	class="bg-header bg-cover bg-center flex flex-col justify-center text-center font-MuseoModerno w-full h-[25rem] sm:h-100 relative"
>
	<h2 class="text-white text-3xl mobile-m:text-4xl sm:text-5xl 2xl:text-8xl">Hello, Visitor!</h2>
	<h5 class="text-white text-base mobile-m:text-lg 2xl:text-3xl">
		Welcome to my personnal website
	</h5>

	<span
		class="flex flex-wrap sm:flex-row justify-center mt-8 mb-5 sm:my-12 2xl:my-8 px-20 mobile-m:px-28 mobile-l:px-32 sm:px-20 gap-x-5 gap-y-3 sm:gap-x-20"
	>
		<a href="https://www.linkedin.com/in/samithiwat/" target="_blank" class="">
			<Icon
				icon="akar-icons:linkedin-fill"
				color="white"
				class="w-16 sm:w-20 2xl:w-24 h-16 sm:h-20 2xl:h-24"
			/>
		</a>
		<a href="https://github.com/samithiwat" target="_blank" class="">
			<Icon
				icon="akar-icons:github-fill"
				color="white"
				class="w-16 sm:w-20 2xl:w-24 h-16 sm:h-20 2xl:h-24"
			/>
		</a>
		<a href="https://www.facebook.com/profile.php?id=80004633398479" target="_blank">
			<Icon
				icon="entypo-social:facebook"
				color="white"
				class="w-16 sm:w-20 2xl:w-24 h-16 sm:h-20 2xl:h-24"
			/>
		</a>
		<a href="https://www.instagram.com/samithiwat/" target="_blank">
			<Icon icon="bi:instagram" color="white" class="w-16 sm:w-20 2xl:w-24 h-16 sm:h-20 2xl:h-24" />
		</a>
	</span>
	<h5 class="text-white text-xs sm:text-base 2xl:text-2xl">Keep in touch with me</h5>
</div>
