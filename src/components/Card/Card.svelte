<script lang="ts">
	import type { Image } from 'lucide-svelte';
	import CardBody from './CardBody.svelte';
	import CardContainer from './CardContainer.svelte';
	import CardItem from './CardItem.svelte';

	type Props = {
		project: {
			title: string;
			logo: Image;
			bg: Image;
			description: string;
			thumbnail: string;
			link: string;
			isWeb: boolean;
		};
	};

	let { project } = $props();

	let isMouseEntered = $state(false);
</script>

<CardContainer bind:isMouseEntered className="inter-var w-full">
	<CardBody
		className="flex relative group/card hover:shadow-2xl hover:shadow-cyan-400/[0.1] bg-black w-full h-[500px] rounded-xl border"
	>
		<div
			class="absolute z-10 h-full w-full overflow-hidden rounded-xl bg-black object-cover opacity-60 group-hover/card:shadow-xl"
		>
			<img
				src={project.bg}
				loading="lazy"
				decoding="async"
				class="absolute z-10 h-full w-full rounded-xl object-cover blur-xs group-hover/card:shadow-xl"
				alt={`Background image for ${project.title}`}
			/>
		</div>
		<CardItem {isMouseEntered} translateZ="60" className="absolute z-50 size-52 lg:size-36 ml-10 sm:bottom-50 lg:bottom-20 ">
			<img
				src={project.logo}
				height="1000"
				width="1000"
				loading="lazy"
				decoding="async"
				class="h-full w-full rounded-xl object-cover"
				alt={`${project.title} logo`}
			/>
		</CardItem>
		{#if project.isWeb}
			<CardItem
				{isMouseEntered}
				translateZ="60"
				className="absolute z-50 size-0 lg:size-[550px] bottom-20 right-10"
			>
				<img
					src={project.mockup}
					height="1000"
					width="1000"
					loading="lazy"
					decoding="async"
					class="h-full w-full rounded-xl object-cover"
					alt={`${project.title} mockup`}
				/>
			</CardItem>
		{:else}
			<CardItem
				{isMouseEntered}
				translateZ="60"
				className="absolute z-50 size-0 lg:size-[500px] bottom-20 right-20"
			>
				<img
					src={project.mockup}
					height="1000"
					width="1000"
					loading="lazy"
					decoding="async"
					class="h-full w-full rounded-xl object-cover"
					alt={`${project.title} mockup`}
				/>
			</CardItem>
		{/if}
		<CardItem
			{isMouseEntered}
			translateZ={50}
			className="bottom-10 lg:bottom-7 mx-10 z-50 absolute font-normal text-start text-white"
		>
			{project.description}
		</CardItem>
	</CardBody>
</CardContainer>
