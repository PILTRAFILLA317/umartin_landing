<script lang="ts">
	import Card from '../Card/Card.svelte';

	const projects = [
		{
			title: 'Pari',
			description:
				'In real time party and event finding and planning app. Made in Flutter with Firebase backend and authentication system. (WIP)',
			logo: 'project_assets/pari_logo.png',
			bg: 'project_assets/pari_bg.png',
			mockup: 'project_assets/pari_mockup.webp',
			link: 'https://github.com/PILTRAFILLA317/PariApp',
			isWeb: false
		},
		{
			title: 'Matcha',
			logo: 'project_assets/matcha_logo.png',
			description:
				'A modern dating web application built with SvelteKit that connects users based on geographic location, shared interests, and personal preferences. Features real-time chat, intelligent matching algorithms, advanced search filters, and comprehensive user profiles with image galleries.',
			bg: 'project_assets/matcha_bg.png',
			mockup: 'project_assets/matcha_mockup.png',
			link: 'https://github.com/PILTRAFILLA317/42-matcha',
			isWeb: true
		},
		{
			title: 'Bitflix',
			logo: 'project_assets/bitflix_logo.png',
			description:
				'A web platform that uses BitTorrent technology to download and stream movies directly to users. Built with modern web technologies, featuring real-time streaming capabilities, torrent integration, and a sleek user interface for seamless movie discovery and playback.',
			bg: 'project_assets/bitflix_bg.png',
			link: 'https://github.com/Ionmi/hypertube',
			mockup: 'project_assets/bitflix_mockup.png',
			isWeb: true
		},
		{
			title: 'Foodiefy',
			description:
				'A recipe app that transcribes cooking videos from social media platforms, automatically extracting ingredients and instructions. Built with Flutter and AI-powered video analysis using Python API.',
			logo: 'project_assets/foodiefy_logo.png',
			bg: 'project_assets/foodiefy_bg.png',
			mockup: 'project_assets/foodiefy_mockup.png',
			link: 'https://github.com/PILTRAFILLA317/foodiefy',
			isWeb: false
		}
	];
</script>

<div id="projects" class="relative top-0 left-0 w-full mt-10 py-8 md:py-4">
	<div class="mx-4 flex max-w-4xl flex-col items-start sm:mx-8 md:mx-16 lg:mx-30">
		<h2
			class="bg-gradient-to-b from-[#e7e6e6] to-[#3f3f3f] bg-clip-text text-3xl font-bold text-transparent sm:text-4xl md:text-5xl"
		>
			Latest Projects
		</h2>
		<h2 class="mb-8 max-w-2xl text-base font-light text-[#b4b4b4] sm:text-lg md:text-xl">
			A collection of my recent work, showcasing a variety of skills and technologies.
		</h2>
	</div>
	<div class="grid grid-cols-1 2xl:grid-cols-2 gap-10 px-4 md:px-30">
		{#each projects as project (project.title)}
			<button onclick={() => window.open(project.link, '_blank')}>
				<Card {project} />
			</button>
		{/each}
	</div>
</div>
<div class="container mb-10 flex w-screen max-w-full items-center justify-center">
	<button
		class="group relative cursor-pointer rounded-xl bg-black/40 px-8 py-4 font-semibold"
		onclick={() => {
			window.location.href = '/projects';
		}}
	>
		<span
			class="absolute inset-0 z-0 h-full w-full origin-left scale-x-0 transform rounded-xl bg-white transition-transform duration-800 ease-in-out group-hover:scale-x-100"
		>
			<div
				class="absolute -inset-1 rounded-xl bg-white/50 opacity-25 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-500"
			></div></span
		>
		<span
			class="absolute inset-0 z-0 h-full w-full origin-right scale-x-0 transform rounded-xl bg-white transition-transform duration-800 ease-in-out group-hover:scale-x-100"
		>
			<div
				class="absolute -inset-1 rounded-xl bg-white/50 opacity-25 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-500"
			></div>
		</span>
		<span class="relative text-xl text-white transition-colors duration-500 group-hover:text-black"
			>View more projects</span
		>
	</button>
</div>
