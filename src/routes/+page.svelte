<script lang="ts">
	import { M } from 'svelte-motion';
	import Navbar from '../components/Navbar/Navbar.svelte';
	import Scene from '../components/Scene/Scene.svelte';
	import Card from '../components/Card/Card.svelte';
	import ContactForm from '../components/ContactForm/ContactForm.svelte';
	import Globe from '../components/Globe/Globe.svelte';
	import ProjectsSection from '../components/ProjectsSection/ProjectsSection.svelte';
	import AboutSection from '../components/AboutSection/AboutSection.svelte';
	import SkillSection from '../components/SkillSection/SkillSection.svelte';
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
	let textElement = $state('');
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
	type();
</script>

<Navbar />

<div class="mx-4 flex max-w-4xl flex-col items-start sm:mx-8 md:mx-16 lg:mx-30">
	<h1
		id="home"
		class="mt-10 sm:mt-20 bg-gradient-to-b from-[#e7e6e6] to-[#3f3f3f] bg-clip-text text-3xl font-light text-transparent"
	>
		Hi, I'm Unai!
	</h1>
	<h1
		class="mb-3 bg-gradient-to-b from-[#e7e6e6] to-[#3f3f3f] bg-clip-text text-3xl leading-tight font-bold text-transparent sm:text-4xl md:text-5xl"
		id="typewriter"
	>
		{textElement}<span class="cursor text-cyan-400 drop-shadow-[0px_0px_26px_rgba(0,255,238,1)]"
			>|</span
		>
	</h1>
	<h2 class="mb-10 max-w-2xl text-lg font-light text-[#b4b4b4] sm:text-xl">
		I design and ship fast, elegant software—web, mobile, games, and more. From low‑level systems
		and high‑performance backends to polished frontends and native apps, I blend clean architecture,
		performance tuning, and sharp UI/UX. Complex problems in, reliable products out.
	</h2>
	<div class="flex items-center gap-4 flex-row sm:gap-6">
		<button
			class="group relative w-full cursor-pointer rounded-full bg-cyan-400/20 px-6 py-3 font-semibold sm:w-auto sm:px-8 sm:py-4"
			onclick={() => {
				document.getElementById('Contact')?.scrollIntoView({ behavior: 'smooth' });
			}}
		>
			<span
				class="absolute inset-0 scale-0 rounded-full border-white bg-cyan-400 transition-transform duration-500 group-hover:scale-100"
			>
				<div
					class="absolute -inset-1 rounded-full bg-cyan-400 opacity-25 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-500"
				></div></span
			>
			<span
				class="relative text-base text-white transition-colors duration-500 group-hover:text-black sm:text-lg"
				>Contact</span
			>
		</button>
		<button
			class="group relative w-full cursor-pointer rounded-full bg-black/40 px-6 py-3 font-semibold sm:w-auto sm:px-8 sm:py-4"
			onclick={() => {
				const link = document.createElement('a');
				link.href = '/Unai_Martin_CV.pdf';
				link.download = 'Unai_Martin_CV.pdf';
				link.click();
			}}
		>
			<span
				class="absolute inset-0 scale-0 rounded-full border-white bg-white transition-transform duration-500 group-hover:scale-100"
			>
				<div
					class="absolute -inset-1 rounded-full bg-white opacity-25 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-500"
				></div></span
			>
			<span
				class="relative text-base text-white transition-colors duration-500 group-hover:text-black sm:text-lg"
				>Download CV</span
			>
		</button>
	</div>
</div>

<div class="mt-10 mb-20 h-[700px] max-w-full saturate-150 hidden sm:block">
	<Canvas>
		<Scene />
	</Canvas>
</div>
<AboutSection/>
<ProjectsSection/>
<SkillSection/>
<ContactForm/>


<footer class="mt-10 w-full bg-zinc-900 py-6 text-center text-sm text-zinc-400">
	&copy; {new Date().getFullYear()} Unai Martín. Not a single right reserved.
</footer>

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
</style>
