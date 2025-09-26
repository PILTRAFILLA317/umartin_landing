<script lang="ts">
	import '../app.css';
	import Particles from '../components/Particles/Particles.svelte';

	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	inject({ mode: dev ? 'development' : 'production' });

	let { children } = $props();

	const SITE_URL = 'https://umartin.es';
	const OG_IMAGE = `${SITE_URL}/og-image.png`;
	const FAVICON = '/favicon.png';
</script>

<svelte:head>
	<title>Unai Martín – Full Stack Developer</title>
	<meta name="description" content="Diseño y desarrollo software rápido, elegante y robusto." />

	<meta property="og:type" content="website" />
	<meta property="og:url" content={SITE_URL} />
	<meta property="og:title" content="Unai Martín – Full Stack Developer" />
	<meta
		property="og:description"
		content="Diseño y entrego productos fiables: web, mobile, juegos y más."
	/>
	<meta property="og:image" content={OG_IMAGE} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Unai Martín – Full Stack Developer" />
	<meta name="twitter:description" content="Diseño y entrego productos fiables: web, mobile, juegos y más." />
	<meta name="twitter:image" content={OG_IMAGE} />
	<link rel="icon" type="image/png" href={FAVICON} />
</svelte:head>

<div class="relative inset-0 h-full min-h-screen w-full bg-[0f0f0f]">
	{@render children?.()}
	<Particles className="absolute opacity-40 inset-0 -z-10" refresh={true} />
</div>
