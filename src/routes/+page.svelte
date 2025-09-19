<script lang="ts">
	import { M } from 'svelte-motion';
	import Navbar from '../components/Navbar/Navbar.svelte';
	import Scene from '../components/Scene/Scene.svelte';
	import Card from '../components/Card/Card.svelte';
	import SkillCard from '../components/SkillCard/SkillCard.svelte';
	import Globe from '../components/Globe/Globe.svelte';
	import { Canvas } from '@threlte/core';

	const sleep = (time: number) => new Promise((resolve) => setTimeout(resolve, time));
	let name = '';
	let email = '';
	let subject = '';
	let message = '';
	let submitBtn: HTMLButtonElement;

	function handleSubmit() {
		// Aquí puedes agregar lógica para enviar el formulario
		alert('Mensaje enviado! (demo)');
		name = '';
		email = '';
		subject = '';
		message = '';
	}

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

	const projects = [
		{
			title: 'Pari',
			description:
				'In real time party and event finding and planning app. Made in Flutter with Firebase backend and authentication system. (WIP)',
			logo: 'project_assets/pari_logo.png',
			// link: 'https://gomoonbeam.com',
			bg: 'project_assets/pari_bg.png',
			mockup: 'project_assets/pari_mockup.webp',
			isWeb: false
		},
		{
			title: 'Matcha',
			logo: 'project_assets/matcha_logo.png',
			description:
				'A modern dating web application built with SvelteKit that connects users based on geographic location, shared interests, and personal preferences. Features real-time chat, intelligent matching algorithms, advanced search filters, and comprehensive user profiles with image galleries.',
			// link: 'https://gomoonbeam.com',
			bg: 'project_assets/matcha_bg.png',
			mockup: 'project_assets/matcha_mockup.png',
			isWeb: true
		},
		{
			title: 'Matcha2',
			logo: 'project_assets/matcha_logo.png',
			description:
				'A modern dating web application built with SvelteKit that connects users based on geographic location, shared interests, and personal preferences. Features real-time chat, intelligent matching algorithms, advanced search filters, and comprehensive user profiles with image galleries.',
			// link: 'https://gomoonbeam.com',
			bg: 'project_assets/matcha_bg.png',
			mockup: 'project_assets/matcha_mockup.png',
			isWeb: true
		},
		{
			title: 'Pari2',
			description:
				'In real time party and event finding and planning app. Made in Flutter with Firebase backend and authentication system. (WIP)',
			logo: 'project_assets/pari_logo.png',
			// link: 'https://gomoonbeam.com',
			bg: 'project_assets/pari_bg.png',
			mockup: 'project_assets/pari_mockup.webp',
			isWeb: false
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
			name: 'Kubernetes',
			logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/kubernetes/kubernetes-plain.svg',
			gradientColor: '#326ce5'
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
<h2 class="mb-10 ml-30 max-w-2xl text-xl font-light text-[#b4b4b4]">
	I design and ship fast, elegant software—web, mobile, games, and more. From low‑level systems and
	high‑performance backends to polished frontends and native apps, I blend clean architecture,
	performance tuning, and sharp UI/UX. Complex problems in, reliable products out.
</h2>
<div class="ml-30 flex flex-row items-center gap-6">
	<button
		class="group relative cursor-pointer rounded-full bg-cyan-400/20 px-8 py-4 font-semibold"
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
		<span class="relative text-lg text-white transition-colors duration-500 group-hover:text-black"
			>Contact</span
		>
	</button>
	<button
		class="group relative cursor-pointer rounded-full bg-black/40 px-8 py-4 font-semibold"
		onclick={() => {
			window.location.href = '/projects';
		}}
	>
		<span
			class="absolute inset-0 scale-0 rounded-full border-white bg-white transition-transform duration-500 group-hover:scale-100"
		>
			<div
				class="absolute -inset-1 rounded-full bg-white opacity-25 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-500"
			></div></span
		>
		<span class="relative text-lg text-white transition-colors duration-500 group-hover:text-black"
			>Download CV</span
		>
	</button>
</div>

<div class="mt-10 mb-20 h-[700px] max-w-full saturate-150">
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
	<h2 class="ml-30 max-w-2xl text-lg font-light text-[#b4b4b4]">
		A collection of my recent work, showcasing a variety of skills and technologies.
	</h2>
	<div class="grid grid-cols-2 gap-10 px-30">
		{#each projects as project (project.title)}
			<Card {project} />
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
	<div class="flex flex-row items-center justify-center gap-12"></div>
	<div class="flex flex-row items-center justify-center gap-12">
		<SkillCard skills={languages} group={'Languages'} />
		<SkillCard skills={design_skills} group={'Design'} />
		<SkillCard skills={mobile_skills} group={'Mobile Development'} />
	</div>
</div>
<div id="Contact">
	<h1
		class="mt-20 ml-30 bg-gradient-to-b from-[#e7e6e6] to-[#3f3f3f] bg-clip-text text-5xl leading-tight font-bold text-transparent"
	>
		Contact
	</h1>
	<h2 class="ml-30 max-w-2xl text-lg font-light text-[#b4b4b4]">
		Have a project in mind or just want to say hi? Feel free to reach out!
	</h2>
	<section class="flex items-center justify-center">
		<div class="mx-30 mt-10 flex h-auto w-full rounded-2xl bg-black/10 shadow-xl/10">
			<div
				class="flex flex-1 flex-row overflow-hidden rounded-l-2xl text-white backdrop-blur-lg backdrop-filter"
			>
				<div class="flex flex-col justify-center gap-6">
					<div
						class="backdrop-blur-2xs absolute h-full w-full rounded-l-2xl bg-cyan-400/5 text-white backdrop-filter"
					></div>
					<h2 class="mb-2 ml-16 text-2xl font-semibold tracking-wide">Contact Info</h2>
					<div class="flex items-center gap-3 text-base">
						<span class="ml-16 text-cyan-400">
							<svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"
								><path
									fill="currentColor"
									d="M16 2A11.013 11.013 0 0 0 5 13a10.9 10.9 0 0 0 2.216 6.6s.3.395.349.452L16 30l8.439-9.953c.044-.053.345-.447.345-.447l.001-.003A10.9 10.9 0 0 0 27 13A11.013 11.013 0 0 0 16 2m0 15a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4"
								/><circle cx="16" cy="13" r="4" fill="none" /></svg
							>
						</span>
						<div class="flex flex-col">
							<span class="font-bold">Location</span>
							<span>Bilbao, Spain</span>
						</div>
					</div>
					<div class="flex items-center gap-3 text-base">
						<span class="ml-16 text-cyan-400">
							<svg width="32" height="32" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
								><g fill="currentColor"
									><path
										d="M22 7.535V17a3 3 0 0 1-2.824 2.995L19 20H5a3 3 0 0 1-2.995-2.824L2 17V7.535l9.445 6.297l.116.066a1 1 0 0 0 .878 0l.116-.066z"
									/><path
										d="M19 4c1.08 0 2.027.57 2.555 1.427L12 11.797l-9.555-6.37a3 3 0 0 1 2.354-1.42L5 4z"
									/></g
								></svg
							>
						</span>
						<div class="flex flex-col">
							<span class="font-bold">Email</span>
							<span>contact@umartin.es</span>
						</div>
					</div>
					<div class="flex items-center gap-3 text-base">
						<span class="ml-16 text-cyan-400">
							<svg width="32" height="32" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
								><path
									fill="currentColor"
									fill-rule="evenodd"
									d="m16.1 13.359l.456-.453c.63-.626 1.611-.755 2.417-.317l1.91 1.039c1.227.667 1.498 2.302.539 3.255l-1.42 1.412c-.362.36-.81.622-1.326.67c-1.192.111-3.645.051-6.539-1.643zm-5.91-5.876l.287-.286c.707-.702.774-1.83.157-2.654L9.374 2.86C8.61 1.84 7.135 1.705 6.26 2.575l-1.57 1.56c-.433.432-.723.99-.688 1.61c.065 1.14.453 3.22 2.149 5.776z"
									clip-rule="evenodd"
								/><path
									fill="currentColor"
									d="M12.063 11.497c-2.946-2.929-1.88-4.008-1.873-4.015l-4.039 4.04c.667 1.004 1.535 2.081 2.664 3.204c1.14 1.134 2.26 1.975 3.322 2.596L16.1 13.36s-1.082 1.076-4.037-1.862"
									opacity=".6"
								/></svg
							>
						</span>
						<div class="flex flex-col">
							<span class="font-bold">Phone</span>
							<span>+34 652 68 68 29</span>
						</div>
					</div>
				</div>
				<Globe />
			</div>
			<div class="z-10 flex flex-[1.2] flex-col justify-center gap-4 bg-transparent p-8 text-white">
				<h2 class="mb-2 text-lg font-semibold tracking-wide">Send Me a Message</h2>
				<form class="space-y-4">
					<div class="flex w-full flex-row gap-4">
						<div class="flex-1">
							<input
								type="text"
								placeholder="Name"
								bind:value={name}
								required
								class="w-full rounded-xl bg-zinc-800 px-4 py-3 text-base text-white shadow transition outline-none focus:ring-2 focus:ring-cyan-400"
							/>
						</div>
						<div class="flex-1">
							<input
								type="email"
								placeholder="Email"
								bind:value={email}
								required
								class="w-full rounded-xl bg-zinc-800 px-4 py-3 text-base text-white shadow transition outline-none focus:ring-2 focus:ring-cyan-400"
							/>
						</div>
					</div>
					<div>
						<input
							type="text"
							placeholder="Subject"
							bind:value={subject}
							required
							class="w-full rounded-xl bg-zinc-800 px-4 py-3 text-base text-white shadow transition outline-none focus:ring-2 focus:ring-cyan-400"
						/>
					</div>
					<div>
						<textarea
							placeholder="Message"
							bind:value={message}
							required
							rows="4"
							class="w-full rounded-xl bg-zinc-800 px-4 py-3 text-base text-white shadow transition outline-none focus:ring-2 focus:ring-cyan-400"
						></textarea>
					</div>
					<button
						type="submit"
						class="rounded-xl bg-cyan-400 bg-gradient-to-r px-8 py-3 text-lg font-semibold text-white shadow transition-transform duration-200 hover:scale-105 hover:-rotate-2 hover:shadow-cyan-400/40 active:scale-95"
						bind:this={submitBtn}>Submit</button
					>
				</form>
			</div>
		</div>
	</section>
</div>

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
