<script lang="ts">
	import Icon from '@iconify/svelte';
</script>

<div class="bg-header flex flex-col justify-center text-center font-MuseoModerno w-full h-100">
	<h2 class="text-white text-5xl">Hello, Visitor!</h2>
	<h5 class="text-white text-lg">Welcome to my personnal website</h5>

	<span
		class="flex flex-wrap sm:flex-row justify-center my-5 sm:my-12 px-12 sm:px-20 gap-x-10 gap-y-5 sm:gap-x-20"
	>
		<a href="https://www.linkedin.com/in/samithiwat/" target="_blank" class="">
			<Icon icon="akar-icons:linkedin-fill" color="white" class="w-20 h-20" />
		</a>
		<a href="https://github.com/samithiwat" target="_blank" class="">
			<Icon icon="akar-icons:github-fill" color="white" class="w-20 h-20" />
		</a>
		<a href="https://www.facebook.com/profile.php?id=100004633398479" target="_blank">
			<Icon icon="entypo-social:facebook" color="white" class="w-20 h-20" />
		</a>
		<a href="https://www.instagram.com/samithiwat/" target="_blank">
			<Icon icon="bi:instagram" color="white" class="w-20 h-20" />
		</a>
	</span>
	<h5 class="text-white text-xs">Follow me</h5>
</div>
