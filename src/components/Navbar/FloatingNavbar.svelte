<script lang="ts">
	import { Motion, AnimatePresence, useViewportScroll, useMotionValue } from 'svelte-motion';
	import { cn } from '$lib/utils/cn';
	import type { ComponentType } from 'svelte';

	export let navItems: {
		name: string;
		link: string;
		icon?: ComponentType;
	}[];
	export let className: string | undefined = undefined;

	// const { scrollYProgress } = useScroll();
	const { scrollYProgress } = useViewportScroll();

	let visible = true;

	// $: $scrollYProgress, updateDirection();

	// function updateDirection() {
	// 	console.log($scrollYProgress);

	// 	let direction = $scrollYProgress - scrollYProgress.getPrevious();
	// 	console.log(direction);

	// 	if (scrollYProgress.get() < 0.05) {
	// 		visible = false;
	// 	} else {
	// 		if (direction < 0) {
	// 			visible = true;
	// 		} else {
	// 			visible = false;
	// 		}
	// 	}
	// }
</script>

<div
	class="fixed inset-x-0 top-10 z-[5000] mx-auto flex max-w-fit items-center justify-center space-x-4 rounded-full border border-transparent bg-white py-2 pr-2 pl-8 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] backdrop-blur-sm dark:border-white/[0.2] dark:bg-black/50"
>
	<!-- {#each navItems as navItem, idx (`link=${idx}`)}
		<a
			href={navItem.link}
			class={cn(
				'relative flex items-center space-x-1 text-neutral-600 hover:text-neutral-500 dark:text-neutral-50 dark:hover:text-neutral-300'
			)}
		>
			<Motion
				initial={{ scale: 1 }}
				whileHover={{ scale: 1.15 }}
				transition={{ type: 'spring', stiffness: 300 }}
			>
				{#if navItem.icon}
					<svelte:component
						this={navItem.icon}
						class="block h-4 w-4 text-neutral-500 sm:hidden dark:text-white"
					/>
				{/if}
			</Motion>
			<span class="hidden text-sm sm:block">{navItem.name}</span>
		</a>
	{/each} -->

	<!-- <button
		class="relative rounded-full border border-neutral-200 px-4 py-2 text-sm font-medium text-black dark:border-white/[0.2] dark:text-white"
	>
		<span>Login</span>
		<span
			class="absolute inset-x-0 -bottom-px mx-auto h-px w-1/2 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
		>
		</span>
	</button> -->
</div>
