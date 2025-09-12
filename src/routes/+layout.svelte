<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-[#0f0f0f] dark:to-gray-900 inset-0 w-full h-full">
	{@render children?.()}
</div>