import type { SvelteComponentTyped } from 'svelte';

declare module '@lottiefiles/svelte-lottie-player' {
	export class LottiePlayer extends SvelteComponentTyped<Record<string, any>, Record<string, any>, Record<string, any>> {}
	export default LottiePlayer;
}
