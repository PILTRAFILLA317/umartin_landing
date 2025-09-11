<script>
	import { M } from 'svelte-motion';
	import Navbar from '../components/Navbar/Navbar.svelte';
	import Scene from '../components/Scene/Scene.svelte';
	import Card from '../components/Card.svelte';
	import { Canvas } from '@threlte/core';

	import { writable } from 'svelte/store';
</script>

<Navbar />

<Canvas>
	<Scene />
</Canvas>
<!-- <M.div>
  <h1 class="m-10 text-4xl font-bold text-neutral-600 dark:text-white">Hola, soy Uriel Martín</h1>
</M.div> -->

<Card />
<Card />
<Card />
<Card />
<Card />
<Card />
<Card />
<Card />
<Card />
<Card />
<Card />
<Card />

<!-- Secciones de ejemplo -->
<!-- <section id="about" style="height: 100vh; padding-left: 100px;">Sobre mí</section>
<section id="projects" style="height: 100vh; padding-left: 100px;">Proyectos</section>
<section id="skills" style="height: 100vh; padding-left: 100px;">Skills</section>
<section id="contact" style="height: 100vh; padding-left: 100px;">Contacto</section> -->

<!-- <style>
	.container {
		width: 100vw;
		height: 100vh;
	}
</style> -->
