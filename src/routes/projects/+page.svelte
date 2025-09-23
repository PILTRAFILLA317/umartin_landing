<script lang="ts">
	import type { PageProps } from './$types';
	import HeroParallax from '../../components/HeroParallax/HeroParallax.svelte';
	import ProjectCard from '../../components/ProjectCard/ProjectCard.svelte';
	import ProjectNav from '../../components/Navbar/ProjectNav.svelte';

	let { data }: PageProps = $props();

	interface Project {
		name: string;
		description: string;
		technologies: string[];
		link: string;
		language: string;
		icon: string;
		lottie?: string;
		date: string;
		status: 'public' | 'private';
		category: string;
	}

	const projects: Project[] = [
		{
			name: 'Transcendence',
			description: 'Real-time multiplayer Pong game with chat, tournaments, and user management',
			technologies: ['Django', 'PostgreSQL', 'WebSocket', 'Docker', 'Sveltekit', 'TypeScript'],
			link: 'https://github.com/PILTRAFILLA317/ft_transcendence',
			language: 'Python',
			icon: '🏓',
			lottie: 'lotties/pong.json',
			date: 'Dec 15, 2024',
			status: 'public',
			category: 'Full Stack'
		},
		{
			name: '42-Libasm',
			description:
				'Low-level assembly library implementing standard C functions in x86-64 assembly',
			technologies: ['Assembly (x86-64)', 'C', 'Makefile'],
			link: 'https://github.com/PILTRAFILLA317/42-Libasm',
			language: 'Assembly',
			icon: '⚙️',
			lottie: 'lotties/gear.json',
			date: 'Dec 4, 2024',
			status: 'public',
			category: 'Systems Programming'
		},
		{
			name: '42-darkly',
			description:
				'Web security project exploring vulnerabilities and penetration testing techniques',
			technologies: ['Python', 'SQL', 'HTML', 'Security Tools'],
			link: 'https://github.com/PILTRAFILLA317/42_darkly',
			language: 'Python',
			icon: '🔐',
			lottie: 'lotties/security.json',
			date: 'Nov 18, 2024',
			status: 'public',
			category: 'Security'
		},
		{
			name: 'Inception',
			description: 'DevOps project with Docker containerization and service orchestration',
			technologies: ['Docker', 'Nginx', 'SQL', 'WordPress'],
			link: 'https://github.com/PILTRAFILLA317/Inception',
			language: 'Shell',
			icon: '🐳',
			lottie: 'lotties/container.json',
			date: 'Feb 8, 2024',
			status: 'public',
			category: 'DevOps'
		},
		{
			name: 'WebServ',
			description: 'Custom HTTP web server implementation following RFC standards',
			technologies: ['C++', 'HTML', 'Socket Programming', 'CGI'],
			link: 'https://github.com/PILTRAFILLA317/WebServ',
			language: 'C++',
			icon: '🌐',
			lottie: 'lotties/server.json',
			date: 'Oct 5, 2023',
			status: 'public',
			category: 'Network Programming'
		},
		{
			name: 'Philosophers',
			description:
				'Classical dining philosophers problem solved with threading and synchronization',
			technologies: ['C', 'Pthreads', 'Mutex', 'Semaphores'],
			link: 'https://github.com/PILTRAFILLA317/Philosophers',
			language: 'C',
			icon: '🍽️',
			lottie: 'lotties/plate.json',
			date: 'Dec 26, 2022',
			status: 'public',
			category: 'Algorithms'
		},
		{
			name: 'RayTrace_Engine',
			description: 'Real-time ray tracing renderer with simple lighting and material systems',
			technologies: ['C++', 'OpenGL', 'GLSL', 'Mathematics'],
			link: 'https://github.com/PILTRAFILLA317/RayTrace_Engine',
			language: 'C++',
			icon: '🌟',
			lottie: 'lotties/trace.json',
			date: 'Jun 6, 2024',
			status: 'public',
			category: 'Graphics'
		},
		{
			name: '42lib',
			description:
				'Collection of foundational utility functions and data structures for C projects',
			technologies: ['C', 'Makefile', 'Data Structures', 'Memory Management'],
			link: 'https://github.com/PILTRAFILLA317/42lib',
			language: 'C',
			icon: '📚',
			lottie: 'lotties/library.json',
			date: 'Dec 20, 2024',
			status: 'public',
			category: 'Systems Programming'
		},
		{
			name: 'minishell',
			description: 'Custom shell implementation with command parsing and execution',
			technologies: ['C', 'Unix', 'System Calls', 'Parsing'],
			link: 'https://github.com/PILTRAFILLA317/minishell',
			language: 'C',
			icon: '🖥️',
			lottie: 'lotties/shell.json',
			date: 'Dec 13, 2022',
			status: 'public',
			category: 'Systems Programming'
		},
		{
			name: 'miniRT',
			description: '3D ray tracing engine with realistic lighting and geometric primitives',
			technologies: ['C', 'Mathematics', 'Linear Algebra', 'Graphics'],
			link: 'https://github.com/PILTRAFILLA317/miniRT',
			language: 'C',
			icon: '🎨',
			lottie: 'lotties/3d.json',
			date: 'Mar 14, 2023',
			status: 'public',
			category: 'Graphics'
		},
		{
			name: 'push_swap',
			description: 'Sorting algorithm optimizer using two stacks with minimal operations',
			technologies: ['C', 'Algorithms', 'Data Structures', 'Optimization'],
			link: 'https://github.com/PILTRAFILLA317/push_swap',
			language: 'C',
			icon: '🔄',
			lottie: 'lotties/sort.json',
			date: 'Oct 26, 2022',
			status: 'public',
			category: 'Algorithms'
		},
		{
			name: '42-matcha',
			description: 'Dating web application with real-time messaging and profile matching',
			technologies: ['SvelteKit', 'TypeScript', 'WebSocket', 'PostgreSQL'],
			link: 'https://github.com/PILTRAFILLA317/42-matcha',
			language: 'Svelte',
			icon: '💕',
			lottie: 'lotties/heart.json',
			date: 'Dec 19, 2024',
			status: 'public',
			category: 'Full Stack'
		},
		{
			name: 'GotxoAstroLanding',
			description: 'Modern landing page built with Astro featuring fast loading and SEO',
			technologies: ['Astro', 'TypeScript', 'Tailwind CSS', 'JavaScript'],
			link: 'https://github.com/PILTRAFILLA317/GotxoAstroLanding',
			language: 'Astro',
			icon: '🚀',
			lottie: 'lotties/rocket.json',
			date: 'Jun 5, 2024',
			status: 'public',
			category: 'Full Stack'
		},
		{
			name: 'Briar_Engine',
			description:
				'Custom game engine built from scratch with modern C++ and OpenGL rendering (WIP)',
			technologies: ['C++', 'OpenGL', 'GLFW', 'GLM'],
			link: 'https://github.com/PILTRAFILLA317/Briar_Engine',
			language: 'C++',
			icon: '🎯',
			lottie: 'lotties/game.json',
			date: 'Jan 2, 2024',
			status: 'public',
			category: 'Graphics'
		},
		{
			name: 'Foodiefy',
			description: 'Food discovery and recipe sharing mobile application (WIP)',
			technologies: ['Flutter', 'Dart', 'Python'],
			link: 'https://github.com/PILTRAFILLA317/Foodiefy',
			language: 'Dart',
			icon: '🍽️',
			lottie: 'lotties/food.json',
			date: 'Aug 9, 2024',
			status: 'public',
			category: 'Mobile App'
		},
		{
			name: 'PariApp',
			description:
				'Mobile application built with Flutter to find events and activities nearby (WIP)',
			technologies: ['Flutter', 'Dart', 'Firebase'],
			link: 'https://github.com/PILTRAFILLA317/PariApp',
			language: 'Dart',
			icon: '📱',
			lottie: 'lotties/pari.json',
			date: 'Nov 24, 2024',
			status: 'private',
			category: 'Mobile App'
		},
		{
			name: 'HypeClipsHub',
			description: 'Platform for creating social media clips with IA (WIP)',
			technologies: ['SvelteKit', 'TypeScript', 'Supabase', 'Python'],
			link: 'https://github.com/PILTRAFILLA317/HypeClipsHub',
			language: 'Svelte',
			icon: '🎮',
			lottie: 'lotties/phone.json',
			date: 'Apr 26, 2024',
			status: 'private',
			category: 'Full Stack'
		}
	];

	// Create products for HeroParallax from projects
	const products = projects.slice(0, 15).map((project) => ({
		title: project.name,
		link: project.link,
		thumbnail: `https://socialify.git.ci/${project.link.replace('https://github.com/', '')}/image?description=1&descriptionEditable=${encodeURIComponent(project.description)}&font=Source%20Code%20Pro&forks=1&issues=1&language=1&name=1&owner=1&pattern=Circuit%20Board&stargazers=1&theme=Light`
	}));

	const languageColors: Record<string, string> = {
		TypeScript: '#3178c6',
		JavaScript: '#f7df1e',
		Python: '#3776ab',
		'C++': '#00599c',
		C: '#a8b9cc',
		Dart: '#0175c2',
		Svelte: '#ff3e00',
		Astro: '#ff5d01',
		Shell: '#89e051',
		Assembly: '#6e4c13'
	};

	const categories = [...new Set(projects.map((p) => p.category))];
	let selectedCategory = $state('All');
	let hoveredProject: string | null = $state(null);
	let filteredProjects = $state<Project[]>(projects);

	$effect(() => {
		if (selectedCategory === 'All') {
			filteredProjects = projects;
		} else {
			filteredProjects = projects.filter((p) => p.category === selectedCategory);
		}
	});
</script>

<ProjectNav />

<div class="w-full overflow-x-hidden">
	<!-- Hero Section with Parallax -->
	<div class="container w-screen max-w-full">
		<HeroParallax {products} />
	</div>

	<!-- Projects Section -->
	<div class="max-w-8xl container mx-auto px-4">
		<!-- Header -->
		<div class="mb-12 text-center">
			<h2
				class="mb-4 bg-gradient-to-b from-[#e7e6e6] to-[#3f3f3f] bg-clip-text text-7xl leading-tight font-bold text-transparent"
			>
				All Projects
			</h2>
			<p class="mx-auto max-w-2xl text-lg font-light text-[#b4b4b4]">
				A comprehensive collection of my work spanning web development, systems programming, AI, and
				more
			</p>
		</div>

		<!-- Category Filter -->
		<div class="mb-12 flex flex-wrap justify-center gap-2">
			<button
				class="rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 {selectedCategory ===
				'All'
					? 'bg-white text-black'
					: 'bg-white/5 text-white hover:bg-white/10'}"
				onclick={() => (selectedCategory = 'All')}
			>
				All ({projects.length})
			</button>
			{#each categories as category}
				<button
					class="rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 {selectedCategory ===
					category
						? 'bg-white text-black'
						: 'bg-white/5 text-white hover:bg-white/10'}"
					onclick={() => (selectedCategory = category)}
				>
					{category} ({projects.filter((p) => p.category === category).length})
				</button>
			{/each}
		</div>

		<!-- Projects Grid -->
		<div class="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
			{#each filteredProjects as project}
				<ProjectCard
					{project}
					{languageColors}
					isHovered={hoveredProject === project.name}
					onHover={() => (hoveredProject = project.name)}
					onLeave={() => (hoveredProject = null)}
				/>
			{/each}
		</div>

		<!-- Stats Section -->
		<div class="mt-20 grid grid-cols-2 gap-4 text-center md:grid-cols-5">
			<div class="rounded-xl bg-white/5 p-6 shadow-lg backdrop-blur-sm">
				<div class="mb-2 text-3xl font-bold text-blue-600">{projects.length}</div>
				<div class="text-sm text-gray-300">Total Projects</div>
			</div>
			<div class="rounded-xl bg-white/5 p-6 shadow-lg backdrop-blur-sm">
				<div class="mb-2 text-3xl font-bold text-green-600">
					{new Set(projects.flatMap((p) => p.technologies)).size}
				</div>
				<div class="text-sm text-gray-300">Technologies</div>
			</div>
			<div class="rounded-xl bg-white/5 p-6 shadow-lg backdrop-blur-sm">
				<div class="mb-2 text-3xl font-bold text-purple-600">
					{new Set(projects.map((p) => p.language)).size}
				</div>
				<div class="text-sm text-gray-300">Languages</div>
			</div>
			<div class="rounded-xl bg-white/5 p-6 shadow-lg backdrop-blur-sm">
				<div class="mb-2 text-3xl font-bold text-orange-600">{categories.length}</div>
				<div class="text-sm text-gray-300">Categories</div>
			</div>
			<div class="rounded-xl bg-white/5 p-6 shadow-lg backdrop-blur-sm">
				<div class="mb-2 text-3xl font-bold text-red-600">
					{projects.filter((p) => p.status === 'public').length}
				</div>
				<div class="text-sm text-gray-300">Public Repos</div>
			</div>
		</div>
	</div>
</div>

<footer class="mt-10 w-full bg-zinc-900 py-6 text-center text-sm text-zinc-400">
	&copy; {new Date().getFullYear()} Unai Martín. Not a single right reserved.
</footer>
