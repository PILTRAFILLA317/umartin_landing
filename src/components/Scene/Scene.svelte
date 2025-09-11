<script lang="ts">
	import { MathUtils } from 'three';
	import { T, useTask } from '@threlte/core';
	import { useLoader } from '@threlte/core';
	import * as THREE from 'three';
	import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

	let mousePosition = { x: 0, y: 0 };
	window.addEventListener('mousemove', (event) => {
		mousePosition.x = (event.clientX / window.innerWidth) * 2 - 1;
		mousePosition.y = -(event.clientY / window.innerHeight) * 2 + 1;
	});

	const gltf = useLoader(GLTFLoader).load('scene.glb');
	
	let head = $state<THREE.Object3D | undefined>(undefined);
	let targetPosition = new THREE.Vector3();
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
				// console.log(`Cabeza encontrada con nombre: ${name}`);
				return bone;
			}
		}

		let foundHead: THREE.Object3D | undefined;
		scene.traverse((child) => {
			if (!foundHead && child.name.toLowerCase().includes('head')) {
				// console.log(`Posible cabeza encontrada: ${child.name}`);
				foundHead = child;
			}
		});

		return foundHead;
	}

	$effect(() => {
		if ($gltf) {
			// console.log("GLTF cargado exitosamente!");
			head = findHeadBone($gltf.scene);
		}
	});

	// Actualizar la rotación de la cabeza cada frame
	useTask(() => {
		if (head) {
			// Calcular la rotación objetivo basada en la posición del mouse
			const targetRotationY = mousePosition.x * 0.5; // Límite de rotación horizontal
			const targetRotationX = -mousePosition.y * 0.5; // Límite de rotación vertical (negativo para invertir)

			// Interpolar suavemente hacia la rotación objetivo
			const lerpFactor = 0.1;
			currentRotationX = THREE.MathUtils.lerp(currentRotationX, targetRotationX, lerpFactor);
			currentRotationY = THREE.MathUtils.lerp(currentRotationY, targetRotationY, lerpFactor);

			// Aplicar la rotación al hueso de la cabeza
			head.rotation.x = currentRotationX;
			head.rotation.y = currentRotationY;
		}
	});
</script>

<T.OrthographicCamera zoom={80} position={[0, 0, 10]} makeDefault lookAt={[0, 1, 0]} />

{#if $gltf}
	<T is={$gltf.scene} scale={2} position={[-2, -4, 0]} rotation={[0, 0.2, 0]} />
	<T.Mesh position={[-1, -2, -10]}>
		<T.BoxGeometry args={[10, 5, 1]}/>
		<T.MeshBasicMaterial color="gray" />
	</T.Mesh>
{:else}
{/if}

<T.AmbientLight intensity={0.3} />
<T.DirectionalLight position={[5, 5, 5]} intensity={1} />