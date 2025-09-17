<script lang="ts">
	import { M } from 'svelte-motion';
	import Navbar from '../components/Navbar/Navbar.svelte';
	import Scene from '../components/Scene/Scene.svelte';
	import Card from '../components/Card/Card.svelte';
	import HeroParallax from '../components/HeroParallax/HeroParallax.svelte';
	import SkillCard from '../components/SkillCard/SkillCard.svelte';
	import { Canvas } from '@threlte/core';

	const sleep = (time: number) => new Promise((resolve) => setTimeout(resolve, time));

	let words = [
		'Full Stack Developer',
		'UI Designer',
		'Web/Mobile Developer',
		'Tech Enthusiast',
		'Problem Solver',
		'Lifelong Learner',
		'Team Player',
		'Coder'
	];
	let i = 0;
	let j = 0;
	let currentWord = '';
	let isDeleting = false;
	let textElement = '';
	let showCursor = true;

	// Función para actualizar el display sin cursor
	function updateDisplay() {
		if (isDeleting) {
			textElement = currentWord.substring(0, j - 1);
		} else {
			textElement = currentWord.substring(0, j + 1);
		}
	}

	async function type() {
		currentWord = words[i];
		if (isDeleting) {
			j--;
			if (j == 0) {
				await sleep(200);
				isDeleting = false;
				i++;
				if (i == words.length) {
					i = 0;
				}
			}
			updateDisplay();
			setTimeout(type, 50);
		} else {
			j++;
			if (j == currentWord.length) {
				await sleep(2000);
				isDeleting = true;
			}
			updateDisplay();
			setTimeout(type, 100);
		}
	}

	const products = [
		{
			title: 'Moonbeam',
			link: 'https://gomoonbeam.com',
			thumbnail: 'https://aceternity.com/images/products/thumbnails/new/moonbeam.png'
		},
		{
			title: 'Cursor',
			link: 'https://cursor.so',
			thumbnail: 'https://aceternity.com/images/products/thumbnails/new/cursor.png'
		},
		{
			title: 'Rogue',
			link: 'https://userogue.com',
			thumbnail: 'https://aceternity.com/images/products/thumbnails/new/rogue.png'
		},

		{
			title: 'Editorially',
			link: 'https://editorially.org',
			thumbnail: 'https://aceternity.com/images/products/thumbnails/new/editorially.png'
		},
		{
			title: 'Editrix AI',
			link: 'https://editrix.ai',
			thumbnail: 'https://aceternity.com/images/products/thumbnails/new/editrix.png'
		},
		{
			title: 'Pixel Perfect',
			link: 'https://app.pixelperfect.quest',
			thumbnail: 'https://aceternity.com/images/products/thumbnails/new/pixelperfect.png'
		},

		{
			title: 'Algochurn',
			link: 'https://algochurn.com',
			thumbnail: 'https://aceternity.com/images/products/thumbnails/new/algochurn.png'
		},
		{
			title: 'Aceternity UI',
			link: 'https://ui.aceternity.com',
			thumbnail: 'https://aceternity.com/images/products/thumbnails/new/aceternityui.png'
		},
		{
			title: 'Tailwind Master Kit',
			link: 'https://tailwindmasterkit.com',
			thumbnail: 'https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png'
		},
		{
			title: 'SmartBridge',
			link: 'https://smartbridgetech.com',
			thumbnail: 'https://aceternity.com/images/products/thumbnails/new/smartbridge.png'
		},
		{
			title: 'Renderwork Studio',
			link: 'https://renderwork.studio',
			thumbnail: 'https://aceternity.com/images/products/thumbnails/new/renderwork.png'
		},

		{
			title: 'Creme Digital',
			link: 'https://cremedigital.com',
			thumbnail: 'https://aceternity.com/images/products/thumbnails/new/cremedigital.png'
		},
		{
			title: 'Golden Bells Academy',
			link: 'https://goldenbellsacademy.com',
			thumbnail: 'https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png'
		},
		{
			title: 'Invoker Labs',
			link: 'https://invoker.lol',
			thumbnail: 'https://aceternity.com/images/products/thumbnails/new/invoker.png'
		},
		{
			title: 'E Free Invoice',
			link: 'https://efreeinvoice.com',
			thumbnail: 'https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png'
		}
	];

	const projects = [
		{
			title: 'Pari',
			description:
				'In real time party and event finding and planning app. Made in Flutter with Firebase backend and authentication system. (WIP)',
			logo: 'project_assets/pari_logo.png',
			// link: 'https://gomoonbeam.com',
			bg: 'project_assets/pari_bg.png',
			mockup: 'project_assets/pari_mockup.webp'
			// thumbnail: 'https://aceternity.com/images/products/thumbnails/new/moonbeam.png'
		},
		{
			title: 'Foodiefy',
			link: 'https://cursor.so',
			thumbnail: 'https://aceternity.com/images/products/thumbnails/new/cursor.png'
		}
	];

	const front_skills = [
		{
			name: 'Svelte',
			logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/svelte/svelte-original.svg',
			gradientColor: '#ff3e00'
		},
		{
			name: 'Astro',
			logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/astro/astro-original.svg',
			gradientColor: '#7f00ff'
		},
		{
			name: 'TypeScript',
			logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg',
			gradientColor: '#3178c6'
		},
		{
			name: 'JavaScript',
			logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
			gradientColor: '#f7df1e'
		},
		{
			name: 'CSS3',
			logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg',
			gradientColor: '#1572b6'
		},
		{
			name: 'HTML5',
			logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg',
			gradientColor: '#e34f26'
		},
		{
			name: 'Tailwind CSS',
			logo: 'https://tailwindcss.com/_next/static/media/tailwindcss-mark.d52e9897.svg',
			gradientColor: '#06b6d4'
		}
	];

	const back_skills = [
		{
			name: 'Firebase',
			logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg',
			gradientColor: '#ffca28'
		},
		{
			name: 'Flask',
			logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/flask/flask-original.svg',
			gradientColor: '#000000'
		},
		{
			name: 'MySQL',
			logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg',
			gradientColor: '#4479a1'
		},
		{
			name: 'Node.js',
			logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg',
			gradientColor: '#339933'
		},
		{
			name: 'Django',
			logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/django/django-plain.svg',
			gradientColor: '#092e20'
		},
		{
			name: 'PostgreSQL',
			logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg',
			gradientColor: '#336791'
		},
		{
			name: 'Bun',
			logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/bun/bun-original.svg',
			gradientColor: '#fbf0df'
		},
		{
			name: 'Redis',
			logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original.svg',
			gradientColor: '#dc382d'
		},
		{
			name: 'Drizzle ORM',
			logo: 'https://avatars.githubusercontent.com/u/108468352?v=4',
			gradientColor: '#0D9488'
		},
		{
			name: 'Appwrite',
			logo: ' https://raw.githubusercontent.com/devicons/devicon/master/icons/appwrite/appwrite-original.svg',
			gradientColor: '#f02e65'
		},
		{
			name: 'Supabase',
			logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/supabase/supabase-original.svg',
			gradientColor: '#3ecf8e'
		}
	];

	const mobile_skills = [
		{
			name: 'Flutter',
			logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/flutter/flutter-original.svg',
			gradientColor: '#02569b'
		},
		{
			name: 'Kotlin',
			logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/kotlin/kotlin-original.svg',
			gradientColor: '#7f52ff'
		},
		{
			name: 'Swift',
			logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/swift/swift-original.svg',
			gradientColor: '#fa7343'
		},
		{
			name: 'Andoid Studio',
			logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/androidstudio/androidstudio-original.svg',
			gradientColor: '#3DDC84'
		},
		{
			name: 'XCode',
			logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/xcode/xcode-original.svg',
			gradientColor: '#147EFB'
		}
	];
	const tools = [
		{
			name: 'K3s',
			logo: 'https://raw.githubusercontent.com/cncf/artwork/master/projects/k3s/icon/color/k3s-icon-color.svg',
			gradientColor: '#ffc61c'
		},
		{
			name: 'Docker',
			logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg',
			gradientColor: '#2496ed'
		},
		{
			name: 'Nginx',
			logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nginx/nginx-original.svg',
			gradientColor: '#009639'
		},
		{
			name: 'Git',
			logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg',
			gradientColor: '#f05032'
		},
		{
			name: 'GitHub',
			logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg',
			gradientColor: '#181717'
		},
		{
			name: 'Postman',
			logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postman/postman-original.svg',
			gradientColor: '#ff6c37'
		},
		{
			name: 'Prettier',
			logo: 'https://cdn.worldvectorlogo.com/logos/prettier-1.svg',
			gradientColor: '#f7b93e'
		},
		{
			name: 'VS Code',
			logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg',
			gradientColor: '#007acc'
		},
		{
			name: 'Unity',
			logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/unity/unity-original.svg',
			gradientColor: '#000000'
		}
	];

	const design_skills = [
		{
			name: 'Figma',
			logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg',
			gradientColor: '#f24e1e'
		},
		{
			name: 'Illustrator',
			logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/illustrator/illustrator-plain.svg',
			gradientColor: '#ff9a00'
		},
		{
			name: 'Photoshop',
			logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-plain.svg',
			gradientColor: '#31a8ff'
		}
	];

	const languages = [
		{
			name: 'C',
			logo: 'https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg',
			gradientColor: '#A8B9CC'
		},
		{
			name: 'C#',
			logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg',
			gradientColor: '#782599'
		},
		{
			name: 'C++',
			logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg',
			gradientColor: '#00599c'
		},
		{
			name: 'Dart',
			logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/dart/dart-original.svg',
			gradientColor: '#0175c2'
		},
		{
			name: 'Java',
			logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg',
			gradientColor: '#ed8b00'
		},
		{
			name: 'JavaScript',
			logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
			gradientColor: '#f7df1e'
		},
		{
			name: 'Python',
			logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',
			gradientColor: '#3776ab'
		},
		{
			name: 'TypeScript',
			logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg',
			gradientColor: '#3178c6'
		},
		{
			name: 'PHP',
			logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg',
			gradientColor: '#777BB4'
		}
	];

	type();
</script>

<Navbar />

<h1
	id="home"
	class="mt-40 ml-30 bg-gradient-to-b from-[#e7e6e6] to-[#3f3f3f] bg-clip-text text-3xl font-light text-transparent"
>
	Hi, I'm Unai!
</h1>
<h1
	class="mb-3 ml-30 bg-gradient-to-b from-[#e7e6e6] to-[#3f3f3f] bg-clip-text text-5xl leading-tight font-bold text-transparent"
	id="typewriter"
>
	{textElement}<span class="cursor text-cyan-400 drop-shadow-[0px_0px_26px_rgba(0,255,238,1)]"
		>|</span
	>
</h1>
<h2 class="mb-10 ml-30 max-w-2xl text-lg font-light text-[#b4b4b4]">
	I design and ship fast, elegant software—web, mobile, games, and more. From low‑level systems and
	high‑performance backends to polished frontends and native apps, I blend clean architecture,
	performance tuning, and sharp UI/UX. Complex problems in, reliable products out.
</h2>

<div class="mt-10 mb-20 h-[700px] max-w-full saturate-200">
	<Canvas>
		<Scene />
	</Canvas>
</div>
<div id="projects" class="relative top-0 left-0 w-full py-8 md:py-4">
	<h2
		class="ml-30 bg-gradient-to-b from-[#e7e6e6] to-[#3f3f3f] bg-clip-text text-5xl leading-tight font-bold text-transparent"
	>
		Lastest Projects
	</h2>
	<div class="mb-20 grid grid-cols-2">
		{#each projects as project (project.title)}
			<Card {project} />
		{/each}
	</div>
</div>
<!-- <div class="container w-screen max-w-full overflow-x-hidden">
	<HeroParallax {products} />
</div> -->
<div class="relative top-0 left-0 w-full py-8 md:py-4" id="Skills">
	<h1
		class="ml-30 bg-gradient-to-b from-[#e7e6e6] to-[#3f3f3f] bg-clip-text text-5xl leading-tight font-bold text-transparent"
	>
		My Skills
	</h1>
	<h2 class="ml-30 max-w-2xl text-lg font-light text-[#b4b4b4]">
		The tools and technologies I use to bring ideas to life:
	</h2>

	<div class="flex flex-col items-center justify-center gap-12 lg:flex-row">
		<SkillCard skills={front_skills} group={'Frontend'} />
		<SkillCard skills={back_skills} group={'Backend'} />
		<SkillCard skills={tools} group={'Tools'} />
	</div>
	<div class="flex flex-row items-center justify-center gap-12">
	</div>
	<div class="flex flex-row items-center justify-center gap-12">
		<SkillCard skills={languages} group={'Languages'} />
		<SkillCard skills={design_skills} group={'Design'} />
		<SkillCard skills={mobile_skills} group={'Mobile Development'} />
	</div>
</div>
<div id="Contact">
	<h1
		class="ml-30 mt-20 bg-gradient-to-b from-[#e7e6e6] to-[#3f3f3f] bg-clip-text text-5xl leading-tight font-bold text-transparent"
	>
		Contact
	</h1>
</div>

<style>
	.cursor {
		animation: blink 1s infinite;
	}

	@keyframes blink {
		0%,
		50% {
			opacity: 1;
		}
		51%,
		100% {
			opacity: 0;
		}
	}
	html {
		scroll-behavior: smooth;
	}
</style>
