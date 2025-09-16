<script lang="ts">
	import { M } from 'svelte-motion';
	import Navbar from '../components/Navbar/Navbar.svelte';
	import Scene from '../components/Scene/Scene.svelte';
	import Card from '../components/Card/Card.svelte';
	import HeroParallax from '../components/HeroParalax/HeroParallax.svelte';
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

	type();
</script>

<Navbar />

<h1
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
<div class="container w-screen max-w-full overflow-x-hidden">
	<HeroParallax {products} />
</div>
<div class="relative top-0 left-0 w-full py-8 md:py-4">
	<h2
		class="ml-30 bg-gradient-to-b from-[#e7e6e6] to-[#3f3f3f] bg-clip-text text-5xl leading-tight font-bold text-transparent"
	>
		My Skills
	</h2>
	<p class="ml-30 mb-10 max-w-2xl text-lg font-light text-[#b4b4b4]">
		I have experience with a wide range of technologies and tools, including:
	</p>
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
