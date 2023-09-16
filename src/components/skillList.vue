<script lang="ts" setup>
const jsIconUrl = new URL('/assets/icon-js.svg', import.meta.url).href;
const vueIconUrl = new URL('/assets/icon-vue.svg', import.meta.url).href;
const javaIconUrl = new URL('/assets/icon-java.svg', import.meta.url).href;
const dockerIconUrl = new URL('/assets/icon-docker.svg', import.meta.url).href;
const k8sIconUrl = new URL('/assets/icon-k8s.svg', import.meta.url).href;
const htmlIconUrl = new URL('/assets/icon-html.svg', import.meta.url).href;
const cssIconUrl = new URL('/assets/icon-css.svg', import.meta.url).href;
const redisIconUrl = new URL('/assets/icon-redis.svg', import.meta.url).href;
const tsIconUrl = new URL('/assets/icon-ts.svg', import.meta.url).href;
const mySQLIconUrl = new URL('/assets/icon-mysql.svg', import.meta.url).href;

const icons = [
  { icon: jsIconUrl, alt: 'Technology: Javascript' },
  { icon: vueIconUrl, alt: 'Technology: VueJS' },
  { icon: htmlIconUrl, alt: 'Technology: HTMl5' },
  { icon: cssIconUrl, alt: 'Technology: CSS3' },
  { icon: tsIconUrl, alt: 'Technology: TypeScript' },
  { icon: javaIconUrl, alt: 'Technology: Java' },
  { icon: mySQLIconUrl, alt: 'Technology: MySQL' },
  { icon: redisIconUrl, alt: 'Technology: Redis' },
  { icon: dockerIconUrl, alt: 'Technology: Docker' },
  { icon: k8sIconUrl, alt: 'Technology: Kubernetes' },
];
</script>

<template>
  <section class="mt-[8%] mb-[20em] px-[5%]" id="skills">
    <div class="flex flex-col justify-center max-w-[80em] mx-[auto] mt-[1em] mb-0">
      <div class="text-white text-[3em] mb-[2.25em] text-center">
        <h2>Technology stack</h2>
      </div>
      <div class="flex w-full flex-wrap justify-center">
        <div class="m-[1em]" v-for="({ icon, alt }, index) in icons" :key="index">
          <img :src="icon" :alt="alt" />
        </div>
      </div>
    </div>
  </section>
</template>
