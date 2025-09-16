<script lang="ts">
	import { House } from '@lucide/svelte';
	import scrollIntoView from 'smooth-scroll-into-view-if-needed';

	function scrollToSection(sectionId: string) {
		const element = document.getElementById(sectionId);
		if (element) {
			scrollIntoView(element, {
				behavior: 'smooth',
				block: 'start',
				duration: 800,
				ease: (t) => t * (2 - t) // easeOutQuad
			});
		}
	}
</script>

<div class="relative flex w-full flex-row items-center justify-center">
	<!-- <FloatingNavbar {navItems} /> -->
	<div class="fixed inset-x-0 top-10 z-[5000] flex flex-row items-center justify-center gap-5 px-4">
		<div
			class="flex max-w-fit rounded-full border border-transparent bg-white py-2 pr-2 pl-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] backdrop-blur-sm dark:border-white/[0.2] dark:bg-black/50"
		>
			<button class="group relative cursor-pointer rounded-full px-4 py-2 font-semibold">
				<span
					class="absolute inset-0 scale-0 rounded-full border-white bg-white transition-transform duration-500 group-hover:scale-100"
				></span>
				<span
					class="relative text-sm text-white transition-colors duration-500 group-hover:text-black"
				>
					<House class="inline h-5 w-5" />
				</span>
			</button>
		</div>
		<div
			class="flex items-center justify-center space-x-2 rounded-full border border-transparent bg-white py-2 pr-2 pl-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] backdrop-blur-sm dark:border-white/[0.2] dark:bg-black/50"
		>
			<button class="group relative cursor-pointer rounded-full px-4 py-2 font-semibold">
				<span
					class="absolute inset-0 scale-0 rounded-full border-white bg-white backdrop-blur-md transition-transform duration-500 group-hover:scale-100"
				></span>
				<span
					class="relative text-sm text-white transition-colors duration-500 group-hover:text-black"
					>About</span
				>
				<!-- <span
				class="absolute inset-x-0 -bottom-px mx-auto h-px w-1/2 bg-gradient-to-r from-transparent scale-0 transition-transform duration-500 group-hover:scale-100 via-blue-500 to-transparent"
			>
			</span> -->
			</button>
			<button
				class="group relative cursor-pointer rounded-full px-4 py-2 font-semibold"
				onclick={() => scrollToSection('projects')}
			>
				<span
					class="absolute inset-0 scale-0 rounded-full border-white bg-white transition-transform duration-500 group-hover:scale-100"
				></span>
				<span
					class="relative text-sm text-white transition-colors duration-500 group-hover:text-black"
					>Projects</span
				>
			</button>
			<button class="group relative cursor-pointer rounded-full px-4 py-2 font-semibold">
				<span
					class="absolute inset-0 scale-0 rounded-full border-white bg-white transition-transform duration-500 group-hover:scale-100"
				></span>
				<span
					class="relative text-sm text-white transition-colors duration-500 group-hover:text-black"
					>Skills</span
				>
			</button>
			<button
				class="group relative cursor-pointer rounded-full border-white bg-cyan-400 px-4 py-2 font-semibold"
			>
				<span class="absolute inset-0 scale-0 rounded-full"></span>
				<div
					class="absolute -inset-1 rounded-full bg-cyan-400 opacity-25 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-500"
				></div>
				<span class="relative text-sm text-white">Contact</span>
			</button>
		</div>
	</div>
</div>
