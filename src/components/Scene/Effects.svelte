<script lang="ts">
  import { useTask, useThrelte } from '@threlte/core'
  import {
    BlendFunction,
    EffectComposer,
    EffectPass,
    BloomEffect,
    RenderPass
  } from 'postprocessing'
  import { onMount } from 'svelte'
  import type { Camera } from 'three'

  const { scene, renderer, camera, size, autoRender, renderStage } = useThrelte()
  const composer = new EffectComposer(renderer)

  function setup(cam: Camera | null) {
    if (!cam) return
    composer.removeAllPasses()
    composer.addPass(new RenderPass(scene, cam))
    const bloom = new BloomEffect({
      intensity: 1.5,
      luminanceThreshold: 0.45,
      luminanceSmoothing: 0.07,
	  radius: 0.4,
      blendFunction: BlendFunction.ADD
    })
    const pass = new EffectPass(cam, bloom)
    pass.renderToScreen = true
    composer.addPass(pass)
  }

  $: setup($camera as Camera | null)
  $: composer.setSize($size.width, $size.height)

  onMount(() => {
    const before = autoRender.current
    autoRender.set(false)
    return () => autoRender.set(before)
  })

  useTask(
    (delta) => {
      composer.render(delta)
    },
    { stage: renderStage, autoInvalidate: false }
  )
</script>