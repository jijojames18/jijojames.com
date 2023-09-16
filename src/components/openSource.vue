<script lang="ts" setup>
import { computed } from 'vue';
import { useFirestore } from 'vuefire';
import { useCollection } from 'vuefire';
import { collection } from 'firebase/firestore';

interface ProjectItem {
  title: string;
  image: string;
  desc: string;
  technology: Array<string>;
  github_link: string;
  site_link: string;
  pos: string;
}

const db = useFirestore();
const projectCollection = useCollection<ProjectItem>(collection(db, 'projects'));

const projects = computed(() =>
  projectCollection.value
    .map((item) => {
      const url = '/assets/projects/' + item.image;
      const iconUrl = new URL(url, import.meta.url).href;
      return { ...item, image: iconUrl, id: parseInt(item.id) };
    })
    .sort((a, b) => (a.pos < b.pos ? -1 : 1)),
);
</script>

<template>
  <section class="mt-[2em] mb-[20em] px-[5%]" id="openSource">
    <div class="flex flex-col justify-center max-w-[80em] mx-[auto] mt-[1em] mb-0">
      <div class="text-white text-[3em] mb-[2.25em] text-center">
        <h2>Open source projects</h2>
      </div>
    </div>
    <div role="list" class="flex flex-wrap justify-center">
      <div
        role="listitem"
        class="m-[2em] border-[4px] px-[1em] border-custom-success-color shadow-custom-input-shadow"
        v-for="({ title, image, desc, technology, github_link, site_link }, i) in projects"
        :key="i"
      >
        <div>
          <div>
            <img width="500" height="300" :src="image" loading="lazy" :alt="title" :class="`Project: ${title}`" />
          </div>
          <div>
            <h3 class="text-[2em] mt-[0.25em] text-white">{{ title }}</h3>
            <span class="text-[1em] mb-[1em] block text-custom-text-color">
              {{ desc }}
            </span>
            <div class="flex mb-[1em]">
              <div
                v-for="(item, j) in technology"
                :key="j"
                class="bg-custom-success-color text-black mr-[1em] p-[0.5em] rounded-[0.3em] text-[1.25em]"
              >
                {{ item }}
              </div>
            </div>
            <div class="flex">
              <a
                :href="github_link"
                target="_blank"
                class="mb-[1em] text-white hover:text-custom-success-color cursor-pointer block text-[1.25em] mr-[1em]"
              >
                Github
              </a>
              <a
                v-if="site_link"
                :href="site_link"
                target="_blank"
                class="mb-[1em] text-white hover:text-custom-success-color cursor-pointer block text-[1.25em]"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
