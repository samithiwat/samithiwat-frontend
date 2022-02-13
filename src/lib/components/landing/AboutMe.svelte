<script lang="ts">
	import Icon from '@iconify/svelte';
</script>

<div class="flex items-center justify-center">
	<div
		class="flex h-200 w-350 flex-col rounded-[2.5rem] bg-gray-primary p-32 font-Poppins text-6xl"
	>
		<span class="flex select-none">
			<p
				class="bg-gradient-to-r from-mint-gradian via-purple-gradian to-red-gradian bg-clip-text font-bold text-transparent"
			>
				ABOUT ME
			</p>
		</span>
		<hr class="w-200 rounded-xl border-2 bg-gray-secondary" />
		<div class="my-12 flex flex-row gap-10 font-Poppins">
			<div class="flex flex-col items-center">
				<div
					class="my-5 h-100 w-100 rounded-2xl border-[18px] border-yellow-card bg-about-me bg-cover bg-center"
				/>
				<span class="flex select-none flex-row gap-x-2 text-white">
					<Icon icon="cil:birthday-cake" class=" h-5 w-5" />
					<p class="text-base">27 June 2001</p>
				</span>
			</div>
			<div class="flex w-[45rem] flex-col gap-10">
				<span>
					<p class="text-5xl font-bold text-white">Samithiwat Boonchai</p>
					<p class="text-2xl font-semibold text-white">Software Engineer, Backend & Devops</p>
				</span>
				<p class="text-base text-gray-secondary ">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim est ac neque
					iaculis, vitae blandit enim laoreet. Sed in ligula augue. Vivamus in scelerisque eros, a
					imperdiet libero. Nulla facilisi. Morbi eu velit nisi. Fusce neque eros, congue sit amet
					erat eu, hendrerit egestas risus. Phasellus ac odio ut ante mattis pretium. Proin sit amet
					ipsum vel neque mollis aliquam. Nulla facilisi. Duis euismod mauris nunc, accumsan tempus
					justo mollis id. Quisque sit amet lectus ac mauris accumsan imperdiet. Aliquam non
					hendrerit erat. Sed dolor neque, dignissim id vulputate sit amet, tristique nec libero.
					Donec ornare posuere velit, et aliquam erat cursus id. Morbi nec accumsan purus.
				</p>
				<div class="my-3 flex flex-row items-end justify-end">
					<button
						class="btn btn-white flex h-10 w-40 flex-row items-center justify-center gap-x-2 text-base"
					>
						Read more <Icon icon="bi:arrow-right" /></button
					>
				</div>
			</div>
		</div>
	</div>
</div>
