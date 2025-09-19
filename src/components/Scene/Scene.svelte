<script lang="ts">
	import { T, useTask, useThrelte } from '@threlte/core';
	import { useLoader } from '@threlte/core';
	import * as THREE from 'three';
	import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
	import { interactivity, Text, Text3DGeometry, Align, Grid } from '@threlte/extras';
	import Effects from './Effects.svelte';
	import { onMount } from 'svelte';

	interactivity();

	

	let sphereRef;

	const { scene } = useThrelte();

	let meshRef = $state([0, 0, 0]);

	let webScale = $state(1);
	let mobileScale = $state(1);
	let webStuffScale = $state(1);
	let mobileStuffScale = $state(1);
	let webHovering = $state(false);
	let webStuffHovering = $state(false);
	let mobileHovering = $state(false);
	let mobileStuffHovering = $state(false);

	// Animación suave para todas las transiciones
	useTask(() => {
		const targetWebScale = webHovering ? 1.05 : 1;
		const targetWebStuffScale = webStuffHovering ? 1.05 : 1;
		const targetMobileScale = mobileHovering ? 1.05 : 1;
		const targetMobileStuffScale = mobileStuffHovering ? 1.05 : 1;
		const lerpFactor = 0.08; // Velocidad de la transición

		webScale = THREE.MathUtils.lerp(webScale, targetWebScale, lerpFactor);
		webStuffScale = THREE.MathUtils.lerp(webStuffScale, targetWebStuffScale, lerpFactor);
		mobileScale = THREE.MathUtils.lerp(mobileScale, targetMobileScale, lerpFactor);
		mobileStuffScale = THREE.MathUtils.lerp(mobileStuffScale, targetMobileStuffScale, lerpFactor);
	});

	let mousePosition = { x: 0, y: 0 };
	window.addEventListener('mousemove', (event) => {
		mousePosition.x = (event.clientX / window.innerWidth) * 2 - 1;
		mousePosition.y = -(event.clientY / window.innerHeight) * 2 + 1;
	});

	const gltf = useLoader(GLTFLoader).load('scene_assets/scene.glb');
	const desk = useLoader(GLTFLoader).load('scene_assets/desk.glb');
	// const web = useLoader(GLTFLoader).load('scene_assets/web.glb');
	// const web_stuff = useLoader(GLTFLoader).load('scene_assets/web_stuff.glb');
	// const mobile = useLoader(GLTFLoader).load('scene_assets/mobile.glb');
	// const mobile_stuff = useLoader(GLTFLoader).load('scene_assets/mobile_stuff.glb');

	let head = $state<THREE.Object3D | undefined>(undefined);
	let currentRotationX = 0;
	let currentRotationY = 0;

	// Función para buscar huesos de cabeza
	function findHeadBone(scene: THREE.Object3D): THREE.Object3D | undefined {
		const possibleNames = [
			'mixamorigHead',
			'Head',
			'head',
			'mixamorig:Head',
			'CC_Base_Head',
			'Bip01_Head'
		];

		for (const name of possibleNames) {
			const bone = scene.getObjectByName(name);
			if (bone) {
				return bone;
			}
		}

		let foundHead: THREE.Object3D | undefined;
		scene.traverse((child) => {
			if (!foundHead && child.name.toLowerCase().includes('head')) {
				foundHead = child;
			}
		});

		return foundHead;
	}

	$effect(() => {
		if ($gltf) {
			head = findHeadBone($gltf.scene);
		}
	});

	// Actualizar la rotación de la cabeza cada frame
	useTask(() => {
		if (head) {
			const targetRotationY = mousePosition.x * 0.5;
			const targetRotationX = -mousePosition.y * 0.5;

			const lerpFactor = 0.1;
			currentRotationX = THREE.MathUtils.lerp(currentRotationX, targetRotationX, lerpFactor);
			currentRotationY = THREE.MathUtils.lerp(currentRotationY, targetRotationY, lerpFactor);

			head.rotation.x = currentRotationX;
			head.rotation.y = currentRotationY;
		}
	});

	// Funciones para manejar hover
	function handleWebPointerEnter() {
		webHovering = true;
	}

	function handleWebPointerLeave() {
		webHovering = false;
	}

	function handleWebStuffPointerEnter() {
		webStuffHovering = true;
	}

	function handleWebStuffPointerLeave() {
		webStuffHovering = false;
	}

	function handleMobilePointerEnter() {
		mobileHovering = true;
	}

	function handleMobilePointerLeave() {
		mobileHovering = false;
	}

	function handleMobileStuffPointerEnter() {
		mobileStuffHovering = true;
	}

	function handleMobileStuffPointerLeave() {
		mobileStuffHovering = false;
	}
</script>

<Grid
	position={[-0.2, -5.2, -207]}
	gridSize={[0.5, 13.6]}
	infiniteGrid
	fadeDistance={30}
	fadeStrength={3}
	useFadeOrigin={true}
	cellColor="#ffffff"
	sectionColor="#ffffff"
	sectionSize={0}
/>
<T.PerspectiveCamera makeDefault zoom={2.3} position={[0, 0, 20]} rotation={[-0.1, 0, 0]}
></T.PerspectiveCamera>
<!-- <T.OrthographicCamera makeDefault zoom={80} position={[0, 0, 20]} rotation={[-0.1, 0, 0]}
></T.OrthographicCamera> -->

{#if $gltf}
	<T is={$gltf.scene} scale={2.4} position={[-2.3, -5.2, 0]} rotation={[0, 0.2, 0]} />
{/if}

{#if $desk}
	<T is={$desk.scene} scale={3} position={[0.3, -5.2, -1]} rotation={[0, 2, 0]} />
{/if}

<!-- {#if $web}
	<T
		onpointerenter={handleWebPointerEnter}
		onpointerleave={handleWebPointerLeave}
		interactive
		is={$web.scene}
		scale={20 * webScale}
		position={[-5, -1, -5]}
		rotation={[0, 0.25, 0]}
	/>
{/if}

{#if $web_stuff}
	<T
		onpointerenter={handleWebStuffPointerEnter}
		onpointerleave={handleWebStuffPointerLeave}
		interactive
		is={$web_stuff.scene}
		scale={20 * webStuffScale}
		position={[-5, 1.5, -5]}
		rotation={[0, 0.25, 0]}
	/>
{/if}

{#if $mobile}
	<T
		onpointerenter={handleMobilePointerEnter}
		onpointerleave={handleMobilePointerLeave}
		interactive
		is={$mobile.scene}
		scale={20 * mobileScale}
		position={[-1.6, 0.1, -5]}
		rotation={[0, 0, 0]}
	/>
{/if}

{#if $mobile_stuff}
	<T
		onpointerenter={handleMobileStuffPointerEnter}
		onpointerleave={handleMobileStuffPointerLeave}
		interactive
		is={$mobile_stuff.scene}
		scale={20 * mobileStuffScale}
		position={[-1.6, -0.95, -5]}
		rotation={[0, 0, 0]}
	/>
{/if} -->

<!-- <T.AmbientLight intensity={1} /> -->
<!-- <T.DirectionalLight position={[0, 0, 20]} intensity={0.5} /> -->
<Effects />