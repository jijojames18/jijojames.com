<script lang="ts" setup>
import { onMounted, ref, onBeforeUnmount } from 'vue';
import * as Three from 'three';

const canvasStyles = ref(['block', 'absolute', 'z-[-1]', ' w-[100%]', 'h-[100%]']);
const canvas = ref<HTMLCanvasElement | null>(null);

let renderer: Three.WebGLRenderer | null = null;

const particleCount = 15000;
const randomParticlePositions = new Float32Array(particleCount * 3);
for (let i = 0; i < particleCount; i++) {
  randomParticlePositions[i] = (Math.random() - 0.5) * 10;
}

const resizeRenderer = () => {
  if (canvas.value && renderer) {
    const width = canvas.value.clientWidth;
    const height = canvas.value.clientHeight;
    const needResize = canvas.value.width !== width || canvas.value.height !== height;
    if (needResize) {
      renderer.setSize(width, height / 1.5);
    }
    return needResize;
  }
};

const setBg = () => {
  if (canvas.value) {
    renderer = new Three.WebGLRenderer({ canvas: canvas.value });
    renderer.setClearColor(new Three.Color('#1c1624'));

    const scene = new Three.Scene();

    const light = new Three.DirectionalLight(0xffffff, 1);
    light.position.set(-1, 2, 4);
    scene.add(light);

    const camera = new Three.PerspectiveCamera(75, 2, 1.5, 5);
    camera.position.z = 2;

    const loader = new Three.TextureLoader();
    loader.load('assets/star.png', (texture) => {
      const material = new Three.PointsMaterial({
        size: 0.015,
        map: texture,
        transparent: true,
      });
      const geometry = new Three.BufferGeometry();
      geometry.setAttribute('position', new Three.BufferAttribute(randomParticlePositions, 3));
      const points = new Three.Points(geometry, material);
      scene.add(points);

      const render = () => {
        if (resizeRenderer() && canvas.value) {
          camera.aspect = canvas.value.clientWidth / canvas.value.clientHeight;
          camera.updateProjectionMatrix();
        }

        if (renderer) {
          renderer.render(scene, camera);
        }
      };
      if (renderer) {
        renderer.setAnimationLoop(render);
      }
    });
  }
};

onMounted(() => {
  setBg();
});

onBeforeUnmount(() => {
  if (renderer) {
    renderer.dispose();
  }
});
</script>
<template>
  <canvas :class="canvasStyles" ref="canvas"></canvas>
</template>
