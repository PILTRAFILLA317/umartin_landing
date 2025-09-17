<script lang="ts">
	type Props = {
		products: {
			title: string;
			link: string;
			thumbnail: string;
		}[];
	};

	let { products }: Props = $props();

	import { Motion, useTransform, useSpring, useMotionValue } from 'svelte-motion';
	import ProductCard from './ProductCard.svelte';
	import { onMount } from 'svelte';

	const firstRow = products.slice(0, 5);
	const secondRow = products.slice(5, 10);
	const thirdRow = products.slice(10, 15);

	let containerRef: HTMLDivElement;
	let scrollProgress = useMotionValue(0);

	const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

	const startOffset = 2000;

	const translateX = useSpring(useTransform(scrollProgress, [0, 1], [0, 1000]), springConfig);
	const translateXReverse = useSpring(
		useTransform(scrollProgress, [0, 1], [100, -1000]),
		springConfig
	);
	const rotateX = useSpring(useTransform(scrollProgress, [0, 0.5], [15, 0]), springConfig);
	const opacity = useSpring(useTransform(scrollProgress, [0, 0.3], [0.2, 1]), springConfig);
	const rotateZ = useSpring(useTransform(scrollProgress, [0, 0.5], [20, 0]), springConfig);
	const translateY = useSpring(useTransform(scrollProgress, [0, 0.5], [-700, 0]), springConfig);

	function handleScroll() {
		if (!containerRef) return;

		const rect = containerRef.getBoundingClientRect();
		const windowHeight = window.innerHeight;
		const elementHeight = containerRef.offsetHeight;

		// Punto de inicio ajustable
		const startPoint = startOffset;

		// Solo empezar el efecto cuando el elemento llegue al punto deseado
		if (rect.top > startPoint) {
			// El elemento aún no ha llegado al punto de inicio
			scrollProgress.set(0);
			return;
		}

		// Calcular progreso desde el punto de inicio
		const scrolledDistance = startPoint - rect.top; // Qué tanto ha scrolleado desde el punto de inicio
		const totalScrollDistance = elementHeight + startPoint; // Distancia total ajustada

		const progress = Math.min(1, scrolledDistance / totalScrollDistance);
		scrollProgress.set(progress);
	}

	onMount(() => {
		window.addEventListener('scroll', handleScroll, { passive: true });
		handleScroll();

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<div
	bind:this={containerRef}
	class="relative flex h-[130vh] w-full flex-col self-auto overflow-hidden py-4 antialiased [perspective:1000px] [transform-style:preserve-3d]"
>
	<div class="relative top-0 left-0 mx-auto w-full max-w-7xl px-4 py-8 md:py-4">
		<!-- <h2 class="text-2xl font-bold dark:text-white md:text-7xl">
			The Ultimate <br /> development studio
		</h2> -->
		<h2 class="bg-gradient-to-b from-[#e7e6e6] to-[#3f3f3f] bg-clip-text text-5xl leading-tight font-bold text-transparent mb-10">
			My Work
		</h2>
	</div>

	<Motion
		let:motion
		style={{
			rotateX,
			rotateZ,
			translateY,
			opacity
		}}
	>
		<div use:motion>
			<Motion let:motion>
				<div use:motion class="mb-20 flex flex-row-reverse space-x-20 space-x-reverse">
					{#each firstRow as product (product.title)}
						<ProductCard {product} translate={translateX} />
					{/each}
				</div>
			</Motion>
			<Motion let:motion>
				<div use:motion class="mb-20 flex flex-row space-x-20">
					{#each secondRow as product (product.title)}
						<ProductCard {product} translate={translateXReverse} />
					{/each}
				</div>
			</Motion>
			<Motion let:motion>
				<div use:motion class="flex flex-row-reverse space-x-20 space-x-reverse">
					{#each thirdRow as product (product.title)}
						<ProductCard {product} translate={translateX} />
					{/each}
				</div>
			</Motion>
		</div>
	</Motion>
</div>
