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
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="relative inset-0 h-full min-h-screen w-full bg-[0f0f0f]">
	{@render children?.()}
	<Particles className="absolute opacity-40 inset-0 -z-10" refresh={true} />
</div>
