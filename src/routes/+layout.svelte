<script lang="ts">
	import '../app.css';
	import Particles from '../components/Particles/Particles.svelte';
	import favicon from '$lib/assets/favicon.png';

	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	inject({ mode: dev ? 'development' : 'production' });

	let { children } = $props();
</script>

<svelte:head>
	<title>Unai Martín – Full Stack Developer</title>
	<meta name="description" content="Diseño y desarrollo software rápido, elegante y robusto." />

	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://umartin.es/" />
	<meta property="og:title" content="Unai Martín – Full Stack Developer" />
	<meta property="og:image" content="https://www.umartin.es/og-image.png" />
	<meta property="og:image:width" content="600" />
	<meta property="og:image:height" content="600" />
	<meta name="twitter:image" content="https://www.umartin.es/og-image.png" />
	<meta
		property="og:description"
		content="Diseño y entrego productos fiables: web, mobile, juegos y más."
	/>
	<link rel="icon" type="image/png" href={favicon} />
</svelte:head>

<div class="relative inset-0 h-full min-h-screen w-full bg-[0f0f0f]">
	{@render children?.()}
	<Particles className="absolute opacity-40 inset-0 -z-10" refresh={true} />
</div>
