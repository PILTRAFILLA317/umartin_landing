<script lang="ts">
	import { LottiePlayer } from '@lottiefiles/svelte-lottie-player';
	import { onMount } from 'svelte';

	interface ProjectCardProps {
		project: {
			name: string;
			description: string;
			technologies: string[];
			link: string;
			language: string;
			icon: string;
			lottie?: string; // URL del archivo Lottie
			date: string;
			status: 'public' | 'private';
			category: string;
		};
		languageColors: Record<string, string>;
		isHovered: boolean;
		onHover: () => void;
		onLeave: () => void;
	}

	let { project, languageColors, isHovered, onHover, onLeave }: ProjectCardProps = $props();

	// Referencias para controlar las animaciones
	let lottiePlayerSmall: any;
	let lottiePlayerLarge: any;
	let isHoveringIcon = $state(false);
	let mounted = $state(false); // Para controlar el renderizado cliente

	// Solo renderizar Lottie después del mount (cliente)
	onMount(() => {
		mounted = true;
	});

	// Controlar animación pequeña en hover del icono
	function handleIconHover() {
		isHoveringIcon = true;
		if (lottiePlayerSmall && project.lottie) {
			lottiePlayerSmall.play();
		}
	}

	function handleIconLeave() {
		isHoveringIcon = false;
		if (lottiePlayerSmall && project.lottie) {
			lottiePlayerSmall.stop();
		}
	}

	// Controlar animación grande cuando cambia isHovered
	$effect(() => {
		if (isHovered && lottiePlayerLarge && project.lottie && mounted) {
			lottiePlayerLarge.play();
		} else if (!isHovered && lottiePlayerLarge && project.lottie) {
			lottiePlayerLarge.stop();
		}
	});
</script>

<div
	class="group relative transform rounded-xl bg-white/5 shadow-lg backdrop-blur-xs transition-all duration-500 ease-out hover:-translate-y-3 hover:scale-[1.04] hover:shadow-2xl hover:shadow-cyan-400/[0.2]"
	role="button"
	tabindex="0"
	onmouseenter={onHover}
	onmouseleave={onLeave}
>
	<!-- Status Badge -->
	<!-- <div
		class="absolute top-3 right-3 z-10 transition-all duration-300 ease-out group-hover:scale-110"
	>
		<span
			class="rounded-full px-2 py-1 text-xs transition-all duration-300 {project.status === 'public'
				? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
				: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200'}"
		>
			{project.status}
		</span>
	</div> -->

	<!-- Project Content -->
	<div
		class="p-6 transition-all duration-500 ease-out {isHovered
			? 'scale-95 opacity-0'
			: 'scale-100 opacity-100'}"
	>
		<!-- Header -->
		<div class="mb-3 flex items-center gap-3">
			<!-- Lottie Animation Small o Emoji fallback -->
			<div
				class="flex h-10 w-10 items-center justify-center transition-transform duration-300 ease-out group-hover:scale-110 group-hover:rotate-6"
				onmouseenter={handleIconHover}
				onmouseleave={handleIconLeave}
			>
				{#if project.lottie && mounted}
					<LottiePlayer
						bind:this={lottiePlayerSmall}
						src={project.lottie}
						autoplay={false}
						loop={false}
						controls={false}
						renderer="svg"
						background="transparent"
						height="32px"
						width="32px"
						class="transition-transform duration-300 ease-out {isHoveringIcon
							? 'scale-110'
							: 'scale-100'}"
					/>
				{:else}
					<span
						class="text-2xl transition-transform duration-300 ease-out {isHoveringIcon
							? 'scale-110 rotate-12'
							: 'scale-100'}">{project.icon}</span
					>
				{/if}
			</div>
			<div class="flex-1">
				<h3
					class="truncate text-lg font-semibold text-[#e7e6e6] transition-colors duration-300"
				>
					{project.name}
				</h3>
				<p class="text-xs text-zinc-500 transition-colors duration-300 dark:text-zinc-400">
					{project.date}
				</p>
			</div>
			<div
				class="h-3 w-3 flex-shrink-0 rounded-full transition-all duration-300 ease-out group-hover:scale-150 group-hover:shadow-lg"
				style="background-color: {languageColors[project.language] || '#6b7280'}"
				title={project.language}
			></div>
		</div>

		<!-- Description -->
		<p
			class="mb-4 line-clamp-3 text-smtransition-colors duration-300 font-light text-[#b4b4b4]"
		>
			{project.description}
		</p>

		<!-- Technologies -->
		<div class="mb-4 flex flex-wrap gap-1">
			{#each project.technologies.slice(0, 2) as tech, i}
				<span
					class="rounded-md bg-cyan-600 px-2 py-1 text-xs text-white transition-all duration-300 ease-out hover:scale-105"
					style="transition-delay: {i * 50}ms"
				>
					{tech}
				</span>
			{/each}
			{#if project.technologies.length > 2}
				<span
					class="rounded-md bg-zinc-100 px-2 py-1 text-xs font-light text-[#b4b4b4] transition-all duration-300 ease-out hover:scale-105 dark:bg-zinc-700"
				>
					+{project.technologies.length - 2}
				</span>
			{/if}
		</div>

		<!-- Footer -->
		<div class="flex items-center justify-between">
			<span
				class="rounded-md bg-white px-2 py-1 text-xs text-black transition-all duration-300 ease-out hover:scale-105"
			>
				{project.category}
			</span>
			<a
				href={project.link}
				target="_blank"
				rel="noopener noreferrer"
				class="text-blue-600 transition-all duration-300 ease-out hover:scale-110 hover:rotate-12 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200"
				aria-label="View {project.name} repository"
			>
				<!-- <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
					<path
						fill-rule="evenodd"
						d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
						clip-rule="evenodd"
					></path>
				</svg> -->
			</a>
		</div>
	</div>

	<!-- Hover Overlay -->
	<div
		class="absolute inset-0 flex flex-col justify-center rounded-xl bg-gradient-to-r from-zinc-900/10 to-zinc-800/10 p-6 backdrop-blur-sm transition-all duration-500 ease-out {isHovered
			? 'scale-100 opacity-100'
			: 'pointer-events-none scale-95 opacity-0'}"
	>
		<div
			class="transform text-center transition-all duration-600 ease-out {isHovered
				? 'translate-y-0 opacity-100'
				: 'translate-y-4 opacity-0'}"
		>
			<!-- Lottie Animation Large o Emoji fallback -->
			<div
				class="mb-3 block transition-all duration-500 ease-out {isHovered
					? 'scale-100 rotate-0'
					: 'scale-75 rotate-12'} mx-auto flex h-16 w-16 items-center justify-center"
			>
				{#if project.lottie && mounted}
					<LottiePlayer
						bind:this={lottiePlayerLarge}
						src={project.lottie}
						autoplay={false}
						loop={true}
						controls={false}
						renderer="svg"
						background="transparent"
						height="64px"
						width="64px"
						class="drop-shadow-lg"
					/>
				{:else}
					<span
						class="text-4xl transition-all duration-500 ease-out {isHovered
							? 'scale-100 rotate-0'
							: 'scale-75 rotate-12'}">{project.icon}</span
					>
				{/if}
			</div>

			<h3
				class="mb-2 text-xl font-bold text-[#e7e6e6] transition-all duration-400 ease-out"
				style="transition-delay: {isHovered ? '100ms' : '0ms'}"
			>
				{project.name}
			</h3>
			<p
				class="mb-4 text-sm text-[#b4b4b4] transition-all duration-400 ease-out"
				style="transition-delay: {isHovered ? '200ms' : '0ms'}"
			>
				{project.description}
			</p>

			<!-- All Technologies -->
			<div
				class="mb-6 transition-all duration-400 ease-out"
				style="transition-delay: {isHovered ? '300ms' : '0ms'}"
			>
				<div class="flex flex-wrap justify-center gap-2">
					{#each project.technologies as tech, i}
						<span
							class="rounded-full bg-white/20 px-2 py-1 text-xs text-white backdrop-blur transition-all duration-300 ease-out hover:scale-110 hover:bg-white/30"
							style="transition-delay: {isHovered ? 400 + i * 50 : 0}ms"
						>
							{tech}
						</span>
					{/each}
				</div>
			</div>

			<!-- Action Button -->
			<a
				href={project.link}
				target="_blank"
				rel="noopener noreferrer"
				class="inline-flex items-center gap-2 rounded-lg bg-cyan-600 px-4 py-2 font-medium text-white transition-all duration-300 ease-out hover:scale-105 hover:bg-cyan-400 hover:shadow-lg shadow-cyan-400/30"
				style="transition-delay: {isHovered ? '500ms' : '0ms'}"
			>
				<svg
					class="h-4 w-4 transition-transform duration-300 ease-out hover:translate-x-1"
					fill="currentColor"
					viewBox="0 0 20 20"
				>
					<path
						fill-rule="evenodd"
						d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
						clip-rule="evenodd"
					></path>
				</svg>
				View Repository
			</a>
		</div>
	</div>
</div>

<style>
	.line-clamp-3 {
		display: -webkit-box;
		-webkit-line-clamp: 3;
		line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
</style>
