<script lang="ts">
	import '../app.css';
	import Particles from '../components/Particles/Particles.svelte';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="relative min-h-screen bg-[0f0f0f] inset-0 w-full h-full">
	{@render children?.()}
	<Particles className="absolute inset-0 -z-10" refresh={true} />
</div>