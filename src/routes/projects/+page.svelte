<script lang="ts">
	import type { PageProps } from './$types';
	import HeroParallax from '../../components/HeroParallax/HeroParallax.svelte';
	import ProjectCard from '../../components/ProjectCard/ProjectCard.svelte';

	let { data }: PageProps = $props();

	interface Project {
		name: string;
		description: string;
		technologies: string[];
		link: string;
		language: string;
		icon: string;
		date: string;
		status: 'public' | 'private';
		category: string;
	}

	const projects: Project[] = [
		{
			name: 'torrentClient',
			description: 'Advanced BitTorrent client with modern UI and P2P file sharing capabilities',
			technologies: ['TypeScript', 'Electron', 'WebRTC', 'Node.js'],
			link: 'https://github.com/PILTRAFILLA317/torrentClient',
			language: 'TypeScript',
			icon: '📥',
			date: 'Jun 6, 2024',
			status: 'public',
			category: 'Desktop App'
		},
		{
			name: 'GotxoAstroLanding',
			description: 'Modern landing page built with Astro featuring fast loading and SSG optimization',
			technologies: ['Astro', 'TypeScript', 'Tailwind CSS', 'JavaScript'],
			link: 'https://github.com/PILTRAFILLA317/GotxoAstroLanding',
			language: 'Astro',
			icon: '🚀',
			date: 'Jun 5, 2024',
			status: 'public',
			category: 'Web Development'
		},
		{
			name: 'HypeClipsHub',
			description: 'Platform for managing and sharing gaming clips with social features',
			technologies: ['Svelte', 'SvelteKit', 'TypeScript', 'Supabase'],
			link: 'https://github.com/PILTRAFILLA317/HypeClipsHub',
			language: 'Svelte',
			icon: '🎮',
			date: 'Apr 26, 2024',
			status: 'private',
			category: 'Full Stack'
		},
		{
			name: 'neiroProject',
			description: 'AI-powered project with machine learning capabilities and modern web interface',
			technologies: ['Svelte', 'Python', 'TensorFlow', 'FastAPI'],
			link: 'https://github.com/PILTRAFILLA317/neiroProject',
			language: 'Svelte',
			icon: '🤖',
			date: 'Mar 8, 2024',
			status: 'public',
			category: 'AI/ML'
		},
		{
			name: 'Briar_Engine',
			description: 'Custom game engine built from scratch with modern C++ and OpenGL rendering',
			technologies: ['C++', 'OpenGL', 'GLFW', 'GLM'],
			link: 'https://github.com/PILTRAFILLA317/Briar_Engine',
			language: 'C++',
			icon: '🎯',
			date: 'Jan 2, 2024',
			status: 'public',
			category: 'Game Engine'
		},
		{
			name: '42-Libasm',
			description: 'Low-level assembly library implementing standard C functions in x86-64 assembly',
			technologies: ['Assembly', 'C', 'Makefile', 'x86-64'],
			link: 'https://github.com/PILTRAFILLA317/42-Libasm',
			language: 'C',
			icon: '⚙️',
			date: 'Dec 4, 2024',
			status: 'public',
			category: 'Systems Programming'
		},
		{
			name: 'PariApp',
			description: 'Cross-platform mobile application built with Flutter for betting and gaming',
			technologies: ['Flutter', 'Dart', 'Firebase', 'SQLite'],
			link: 'https://github.com/PILTRAFILLA317/PariApp',
			language: 'Dart',
			icon: '📱',
			date: 'Nov 24, 2024',
			status: 'private',
			category: 'Mobile App'
		},
		{
			name: '42_darkly',
			description: 'Web security project exploring vulnerabilities and penetration testing techniques',
			technologies: ['Python', 'SQL', 'HTML', 'Security Tools'],
			link: 'https://github.com/PILTRAFILLA317/42_darkly',
			language: 'Python',
			icon: '🔐',
			date: 'Nov 18, 2024',
			status: 'public',
			category: 'Security'
		},
		{
			name: 'RayTrace_Engine',
			description: 'Real-time ray tracing renderer with advanced lighting and material systems',
			technologies: ['C++', 'OpenGL', 'GLSL', 'Mathematics'],
			link: 'https://github.com/PILTRAFILLA317/RayTrace_Engine',
			language: 'C++',
			icon: '🌟',
			date: 'Jun 6, 2024',
			status: 'public',
			category: 'Graphics'
		},
		{
			name: 'Inception',
			description: 'DevOps project with Docker containerization and service orchestration',
			technologies: ['Docker', 'Shell', 'Docker Compose', 'Linux'],
			link: 'https://github.com/PILTRAFILLA317/Inception',
			language: 'Shell',
			icon: '🐳',
			date: 'Feb 8, 2024',
			status: 'public',
			category: 'DevOps'
		},
		{
			name: 'WebServ',
			description: 'Custom HTTP web server implementation following RFC standards',
			technologies: ['C++', 'HTTP', 'Socket Programming', 'CGI'],
			link: 'https://github.com/PILTRAFILLA317/WebServ',
			language: 'C++',
			icon: '🌐',
			date: 'Oct 5, 2023',
			status: 'public',
			category: 'Network Programming'
		},
		{
			name: 'Philosophers',
			description: 'Classical dining philosophers problem solved with threading and synchronization',
			technologies: ['C', 'Pthreads', 'Mutex', 'Semaphores'],
			link: 'https://github.com/PILTRAFILLA317/Philosophers',
			language: 'C',
			icon: '🍽️',
			date: 'Dec 26, 2022',
			status: 'public',
			category: 'Algorithms'
		},
		{
			name: 'minishell',
			description: 'Custom shell implementation with command parsing and execution',
			technologies: ['C', 'Unix', 'System Calls', 'Parsing'],
			link: 'https://github.com/PILTRAFILLA317/minishell',
			language: 'C',
			icon: '🖥️',
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
			date: 'Oct 26, 2022',
			status: 'public',
			category: 'Algorithms'
		}
	];

	// Create products for HeroParallax from projects
	const products = projects.slice(0, 15).map(project => ({
		title: project.name,
		link: project.link,
		thumbnail: `https://opengraph.githubassets.com/1/${project.link.replace('https://github.com/', '')}`
	}));

	const languageColors: Record<string, string> = {
		'TypeScript': '#3178c6',
		'JavaScript': '#f7df1e',
		'Python': '#3776ab',
		'C++': '#00599c',
		'C': '#a8b9cc',
		'Dart': '#0175c2',
		'Svelte': '#ff3e00',
		'Astro': '#ff5d01',
		'Shell': '#89e051',
		'Assembly': '#6e4c13'
	};

	const categories = [...new Set(projects.map(p => p.category))];
	let selectedCategory = $state('All');
	let hoveredProject: string | null = $state(null);
	let filteredProjects = $state<Project[]>(projects);

	$effect(() => {
		if (selectedCategory === 'All') {
			filteredProjects = projects;
		} else {
			filteredProjects = projects.filter(p => p.category === selectedCategory);
		}
	});
</script>

<div class="w-full overflow-x-hidden">
	<!-- Hero Section with Parallax -->
	<div class="container w-screen max-w-full">
		<HeroParallax {products} />
	</div>

	<!-- Projects Section -->
	<div class="container mx-auto px-4 py-16 max-w-7xl">
		<!-- Header -->
		<div class="text-center mb-12">
			<h2 class="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
				All Projects
			</h2>
			<p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
				A comprehensive collection of my work spanning web development, systems programming, AI, and more
			</p>
		</div>

		<!-- Category Filter -->
		<div class="flex flex-wrap justify-center gap-2 mb-12">
			<button 
				class="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 {selectedCategory === 'All' ? 'bg-blue-600 text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'}"
				onclick={() => selectedCategory = 'All'}
			>
				All ({projects.length})
			</button>
			{#each categories as category}
				<button 
					class="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 {selectedCategory === category ? 'bg-blue-600 text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'}"
					onclick={() => selectedCategory = category}
				>
					{category} ({projects.filter(p => p.category === category).length})
				</button>
			{/each}
		</div>

		<!-- Projects Grid -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
			{#each filteredProjects as project}
				<ProjectCard 
					{project}
					{languageColors}
					isHovered={hoveredProject === project.name}
					onHover={() => hoveredProject = project.name}
					onLeave={() => hoveredProject = null}
				/>
			{/each}
		</div>

		<!-- Stats Section -->
		<div class="mt-20 grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
			<div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
				<div class="text-3xl font-bold text-blue-600 mb-2">{projects.length}</div>
				<div class="text-gray-600 dark:text-gray-300 text-sm">Total Projects</div>
			</div>
			<div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
				<div class="text-3xl font-bold text-green-600 mb-2">
					{new Set(projects.flatMap(p => p.technologies)).size}
				</div>
				<div class="text-gray-600 dark:text-gray-300 text-sm">Technologies</div>
			</div>
			<div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
				<div class="text-3xl font-bold text-purple-600 mb-2">
					{new Set(projects.map(p => p.language)).size}
				</div>
				<div class="text-gray-600 dark:text-gray-300 text-sm">Languages</div>
			</div>
			<div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
				<div class="text-3xl font-bold text-orange-600 mb-2">{categories.length}</div>
				<div class="text-gray-600 dark:text-gray-300 text-sm">Categories</div>
			</div>
			<div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
				<div class="text-3xl font-bold text-red-600 mb-2">
					{projects.filter(p => p.status === 'public').length}
				</div>
				<div class="text-gray-600 dark:text-gray-300 text-sm">Public Repos</div>
			</div>
		</div>
	</div>
</div>
