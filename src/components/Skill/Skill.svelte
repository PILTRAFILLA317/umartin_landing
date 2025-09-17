<script lang="ts">
  import { Motion, useMotionValue, useMotionTemplate } from 'svelte-motion';
  import { onMount } from 'svelte';
  import { cn } from '$lib/utils/cn';

  type Props = {
    skill: { name: string; logo: string; gradientColor?: string };
    gradientSize?: number;
    gradientOpacity?: number;
    class?: string;
  };

  let {
    skill,
    gradientSize = 100,
    gradientOpacity = 0.5,
    class: className = ''
  }: Props = $props();

  let gradSize = useMotionValue(gradientSize);
  let gradColor = useMotionValue(skill.gradientColor ?? '#22d3ee'); // fallback
  let mouseX = useMotionValue(-gradientSize);
  let mouseY = useMotionValue(-gradientSize);

  function handleMouseMove(e: MouseEvent) {
    const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  function handleMouseLeave() {
    mouseX.set(-gradientSize);
    mouseY.set(-gradientSize);
  }

  onMount(() => {
    mouseX.set(-gradientSize);
    mouseY.set(-gradientSize);
  });

  let bg = useMotionTemplate`radial-gradient(${gradSize}px circle at ${mouseX}px ${mouseY}px, ${gradColor}, transparent 100%)`;
</script>

<div
  on:mousemove={handleMouseMove}
  on:mouseleave={handleMouseLeave}
  class={cn(
    'bg-zinc-800 border group relative mx-auto inline-flex size-full items-center justify-center overflow-hidden rounded-2xl p-3 py-4 text-white transition-transform duration-200 ease-in-out hover:scale-[1.05]',
    className
  )}
  style={`--grad-color: ${$gradColor ?? skill.gradientColor ?? '#27272a'};`}
>
  <div class="relative z-10">
    <slot>
      <div class="flex items-center gap-x-4 text-xs whitespace-nowrap">
        <img src={skill.logo} alt={skill.name} class="h-6 w-6 rounded-md" />
        <h1 class="text-gray-200">{skill.name}</h1>
      </div>
    </slot>
  </div>

  <Motion style={{ background: bg }} let:motion>
    <div
      use:motion
      class="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      style="opacity: {gradientOpacity}"
    />
  </Motion>
</div>

<style>
  .border {
    border-width: 1px;
    border-color: rgb(75 85 99); /* gray-600 */
    border-style: solid;
  }
  .group:hover {
    border-color: var(--grad-color);
  }
</style>