<script lang="ts">
	import BorderBeam from '../BorderBeam/BorderBeam.svelte';
	import Skill from '../Skill/Skill.svelte';
	type SkillData = {
		name: string;
		logo: string;
		gradientColor?: string;
	};

	let { skills, group } = $props<{ skills: SkillData[]; group: string }>();
</script>

<div
	class="relative transform rounded-3xl bg-gradient-to-r from-zinc-900 to-zinc-800 p-4 px-6
         py-3 text-xl font-bold text-white shadow-[0_8px_24px_rgba(0,0,0,0.25)]
         backdrop-blur-xl transition duration-500
         ease-in-out
         hover:scale-105 hover:bg-gradient-to-r hover:from-zinc-800
         hover:to-zinc-900
         hover:shadow-zinc-800"
>
	<h2 class="mt-2 mb-4 text-2xl font-bold text-white">{group}</h2>
	<div
		class="grid justify-items-center gap-x-3 gap-y-4
			sm:[grid-template-columns:repeat(3,auto)]
			[grid-template-columns:repeat(2,auto)]"
	>
		{#each skills as skill (skill.name)}
			<div class="w-full items-center">
				<Skill {skill} />
			</div>
		{/each}
	</div>
</div>
