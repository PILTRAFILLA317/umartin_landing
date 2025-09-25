<script lang="ts">
    import { House, Menu } from '@lucide/svelte';
    import { onMount } from 'svelte';

    let isMobile = false;
    let menuOpen = false;

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        menuOpen = false;
    }

    function scrollToSection(id: string) {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        menuOpen = false;
    }

    function handleResize() {
        isMobile = window.innerWidth < 768;
    }

    onMount(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    });
</script>

<div class="relative w-full flex flex-row items-center justify-center">
    <div class="fixed top-10 z-[5000] flex flex-row items-center
        {isMobile ? 'left-4 justify-start' : 'inset-x-0 justify-center'}">
        {#if isMobile}
            <div class="flex max-w-fit rounded-full border py-2 pr-2 pl-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] backdrop-blur-sm border-white/[0.2] bg-black/50">
                <button
                    class="group relative cursor-pointer rounded-full px-4 py-2 font-semibold"
                    on:click={() => (menuOpen = !menuOpen)}
                    aria-label="Open menu"
                >
                    <span
                        class="absolute inset-0 scale-0 rounded-full border-white bg-white transition-transform duration-500 group-hover:scale-100"
                    ></span>
                    <span
                        class="relative text-sm text-white transition-colors duration-500 group-hover:text-black"
                    >
                        <Menu class="inline h-5 w-5" />
                    </span>
                </button>
                {#if menuOpen}
                    <div class="absolute left-0 top-16 w-40 rounded-xl bg-black/90 border border-white/20 shadow-lg flex flex-col py-2 z-50">
                        <button class="px-4 py-2 text-white text-left hover:bg-cyan-400/20 rounded" on:click={scrollToTop}>
                            Home
                        </button>
                        <button class="px-4 py-2 text-white text-left hover:bg-cyan-400/20 rounded" on:click={() => scrollToSection('about')}>
                            About
                        </button>
                        <button class="px-4 py-2 text-white text-left hover:bg-cyan-400/20 rounded" on:click={() => scrollToSection('projects')}>
                            Projects
                        </button>
                        <button class="px-4 py-2 text-white text-left hover:bg-cyan-400/20 rounded" on:click={() => scrollToSection('Skills')}>
                            Skills
                        </button>
                        <button class="p-2 mx-2 mt-2 py-2 text-white text-left bg-cyan-400 hover:bg-cyan-400/20 rounded" on:click={() => scrollToSection('Contact')}>
                            Contact
                        </button>
                    </div>
                {/if}
            </div>
        {:else}
            <!-- Navbar normal en escritorio -->
            <div class="flex max-w-fit rounded-full border py-2 pr-2 pl-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] backdrop-blur-sm border-white/[0.2] bg-black/50">
                <button
                    class="group relative cursor-pointer rounded-full px-4 py-2 font-semibold"
                    on:click={scrollToTop}
                >
                    <span
                        class="absolute inset-0 scale-0 rounded-full border-white bg-white transition-transform duration-500 group-hover:scale-100"
                    ></span>
                    <span
                        class="relative text-sm text-white transition-colors duration-500 group-hover:text-black"
                    >
                        <House class="inline h-5 w-5" />
                    </span>
                </button>
            </div>
            <div class="flex items-center justify-center space-x-2 rounded-full border py-2 pr-2 pl-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] backdrop-blur-sm border-white/[0.2] bg-black/50">
                <button class="group relative cursor-pointer rounded-full px-4 py-2 font-semibold" on:click={() => scrollToSection('about')}>
                    <span class="absolute inset-0 scale-0 rounded-full border-white bg-white backdrop-blur-md transition-transform duration-500 group-hover:scale-100"></span>
                    <span class="relative text-sm text-white transition-colors duration-500 group-hover:text-black">About</span>
                </button>
                <button class="group relative cursor-pointer rounded-full px-4 py-2 font-semibold" on:click={() => scrollToSection('projects')}>
                    <span class="absolute inset-0 scale-0 rounded-full border-white bg-white transition-transform duration-500 group-hover:scale-100"></span>
                    <span class="relative text-sm text-white transition-colors duration-500 group-hover:text-black">Projects</span>
                </button>
                <button class="group relative cursor-pointer rounded-full px-4 py-2 font-semibold" on:click={() => scrollToSection('Skills')}>
                    <span class="absolute inset-0 scale-0 rounded-full border-white bg-white transition-transform duration-500 group-hover:scale-100"></span>
                    <span class="relative text-sm text-white transition-colors duration-500 group-hover:text-black">Skills</span>
                </button>
                <button class="group relative cursor-pointer rounded-full border-white bg-cyan-400 px-4 py-2 font-semibold" on:click={() => scrollToSection('Contact')}>
                    <span class="absolute inset-0 scale-0 rounded-full"></span>
                    <div class="absolute -inset-1 rounded-full bg-cyan-400 opacity-25 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-500"></div>
                    <span class="relative text-sm text-white">Contact</span>
                </button>
            </div>
        {/if}
    </div>
</div>