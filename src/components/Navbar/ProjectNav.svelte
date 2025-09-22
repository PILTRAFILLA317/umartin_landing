<script lang="ts">
	import { ArrowBigLeft } from '@lucide/svelte';
	import scrollIntoView from 'smooth-scroll-into-view-if-needed';

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
</script>

<div class="relative flex w-full flex-row items-start justify-start">
	<div class="fixed inset-x-0 top-10 z-[5000] flex flex-row items-start justify-start gap-5 px-4">
		<div
			class="flex max-w-fit rounded-full border border-transparent bg-white py-2 pr-2 pl-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] backdrop-blur-sm dark:border-white/[0.2] dark:bg-black/50"
		>
			<button
				class="group relative cursor-pointer rounded-full px-4 py-2 font-semibold"
				onclick={() => window.location.href = '/'}
			>
				<span
					class="absolute inset-0 scale-0 rounded-full border-white bg-white transition-transform duration-500 group-hover:scale-100"
				></span>
				<span
					class="relative text-sm text-white transition-colors duration-500 group-hover:text-black"
				>
					<ArrowBigLeft class="h-5 w-5" />
				</span>
			</button>
		</div>
	</div>
</div>
