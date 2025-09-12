<script lang="ts">
	import { M } from 'svelte-motion';
	import Navbar from '../components/Navbar/Navbar.svelte';
	import Scene from '../components/Scene/Scene.svelte';
	import Card from '../components/Card.svelte';
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
	I design and ship fast, elegant software—web, mobile, games, and more. From low‑level systems and high‑performance backends to polished frontends and native apps, I blend clean architecture, performance tuning, and sharp UI/UX. Complex problems in, reliable products out.
</h2>

<div class="mt-10 h-[500px] max-w-full saturate-200">
	<Canvas>
		<Scene />
	</Canvas>
</div>
<!-- <M.div>
  <h1 class="m-10 text-4xl font-bold text-neutral-600 dark:text-white">Hola, soy Uriel Martín</h1>
</M.div> -->

<Card />
<Card />
<Card />
<Card />
<Card />
<Card />
<Card />
<Card />
<Card />
<Card />
<Card />
<Card />

<!-- Secciones de ejemplo -->
<!-- <section id="about" style="height: 100vh; padding-left: 100px;">Sobre mí</section>
<section id="projects" style="height: 100vh; padding-left: 100px;">Proyectos</section>
<section id="skills" style="height: 100vh; padding-left: 100px;">Skills</section>
<section id="contact" style="height: 100vh; padding-left: 100px;">Contacto</section> -->

<!-- <style>
	.container {
		width: 100vw;
		height: 100vh;
	}
</style> -->

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
