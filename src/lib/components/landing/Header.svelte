<script lang="ts">
	import Icon from '@iconify/svelte';
</script>

<div
	class="bg-header bg-cover flex flex-col justify-center text-center font-MuseoModerno w-full h-48 sm:h-100 relative"
>
	<h2 class="text-white text-xl sm:text-5xl">Hello, Visitor!</h2>
	<h5 class="text-white text-xs sm:text-lg">Welcome to my personnal website</h5>

	<span
		class="flex flex-wrap sm:flex-row justify-center my-3 sm:my-12 px-36 sm:px-20 gap-x-5 gap-y-2 sm:gap-x-20"
	>
		<a href="https://www.linkedin.com/in/samithiwat/" target="_blank" class="">
			<Icon icon="akar-icons:linkedin-fill" color="white" class="w-8 sm:w-20 h-8 sm:h-20" />
		</a>
		<a href="https://github.com/samithiwat" target="_blank" class="">
			<Icon icon="akar-icons:github-fill" color="white" class="w-8 sm:w-20 h-8 sm:h-20" />
		</a>
		<a href="https://www.facebook.com/profile.php?id=80004633398479" target="_blank">
			<Icon icon="entypo-social:facebook" color="white" class="w-8 sm:w-20 h-8 sm:h-20" />
		</a>
		<a href="https://www.instagram.com/samithiwat/" target="_blank">
			<Icon icon="bi:instagram" color="white" class="w-8 sm:w-20 h-8 sm:h-20" />
		</a>
	</span>
	<h5 class="text-white text-xs sm:text-base">Follow me</h5>
</div>
