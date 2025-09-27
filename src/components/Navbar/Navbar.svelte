<script lang="ts">
	import { House, Menu } from '@lucide/svelte';
	import { onMount } from 'svelte';
	import { fade, scale } from 'svelte/transition';

	let menuOpen = false;
	let menuDropdown: HTMLDivElement | null = null;
	let menuToggleButton: HTMLButtonElement | null = null;

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
		menuOpen = false;
	}

	function scrollToSection(id: string) {
		document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
		menuOpen = false;
	}

	onMount(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (!menuOpen) return;

			const target = event.target as Node | null;
			if (!target) return;

			const clickedInsideDropdown = menuDropdown?.contains(target);
			const clickedToggleButton = menuToggleButton?.contains(target);

			if (!clickedInsideDropdown && !clickedToggleButton) {
				menuOpen = false;
			}
		};

		document.addEventListener('click', handleClickOutside, true);

		return () => {
			document.removeEventListener('click', handleClickOutside, true);
		};
	});
</script>

<div class="relative flex w-full flex-row items-center justify-center">
	<div
		class="fixed top-10 z-[5000] flex w-full gap-4 justify-end px-4 md:inset-x-0 md:justify-center md:px-0"
	>
		<div class="relative md:hidden">
			<div
				class="flex max-w-fit rounded-full border border-white/[0.2] bg-black/50 py-2 pr-2 pl-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] backdrop-blur-sm"
			>
				<button
					class="relative cursor-pointer rounded-full px-4 py-2 font-semibold"
					bind:this={menuToggleButton}
					on:click={() => (menuOpen = !menuOpen)}
					aria-label="Open menu"
				>
					<span
						class="relative text-sm text-white"
					>
						<Menu class="inline h-5 w-5" />
					</span>
				</button>
			</div>
			{#if menuOpen}
				<div
					bind:this={menuDropdown}
					transition:scale={{ duration: 200, start: 0.9 }}
					class="absolute top-[calc(100%+0.75rem)] right-0 w-48 rounded-xl border border-white/20 bg-black/90 p-2 shadow-2xl backdrop-blur-lg"
				>
					<button
						class="w-full rounded-lg px-4 py-2 text-left text-white transition hover:bg-cyan-400/20"
						on:click={scrollToTop}
					>
						Home
					</button>
					<button
						class="w-full rounded-lg px-4 py-2 text-left text-white transition hover:bg-cyan-400/20"
						on:click={() => scrollToSection('about')}
					>
						About
					</button>
					<button
						class="w-full rounded-lg px-4 py-2 text-left text-white transition hover:bg-cyan-400/20"
						on:click={() => scrollToSection('projects')}
					>
						Projects
					</button>
					<button
						class="w-full rounded-lg px-4 py-2 text-left text-white transition hover:bg-cyan-400/20"
						on:click={() => scrollToSection('Skills')}
					>
						Skills
					</button>
					<button
						class="w-full rounded-lg bg-cyan-400 px-4 py-2 text-left text-white transition hover:bg-cyan-300"
						on:click={() => scrollToSection('Contact')}
					>
						Contact
					</button>
				</div>
			{/if}
		</div>

		<div
			class="hidden max-w-fit rounded-full border border-white/[0.2] bg-black/50 py-2 pr-2 pl-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] backdrop-blur-sm md:flex"
		>
			<button
				class="group relative cursor-pointer rounded-full px-4 py-2 font-semibold"
				on:click={scrollToTop}
			>
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
			class="hidden items-center justify-center space-x-2 rounded-full border border-white/[0.2] bg-black/50 py-2 pr-2 pl-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] backdrop-blur-sm md:flex"
		>
			<button
				class="group relative cursor-pointer rounded-full px-4 py-2 font-semibold"
				on:click={() => scrollToSection('about')}
			>
				<span
					class="absolute inset-0 scale-0 rounded-full border-white bg-white backdrop-blur-md transition-transform duration-500 group-hover:scale-100"
				></span>
				<span
					class="relative text-sm text-white transition-colors duration-500 group-hover:text-black"
					>About</span
				>
			</button>
			<button
				class="group relative cursor-pointer rounded-full px-4 py-2 font-semibold"
				on:click={() => scrollToSection('projects')}
			>
				<span
					class="absolute inset-0 scale-0 rounded-full border-white bg-white transition-transform duration-500 group-hover:scale-100"
				></span>
				<span
					class="relative text-sm text-white transition-colors duration-500 group-hover:text-black"
					>Projects</span
				>
			</button>
			<button
				class="group relative cursor-pointer rounded-full px-4 py-2 font-semibold"
				on:click={() => scrollToSection('Skills')}
			>
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
				on:click={() => scrollToSection('Contact')}
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
