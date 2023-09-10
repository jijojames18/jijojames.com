<script lang="ts" setup>
import { useFirestore } from 'vuefire';
import { useCollection } from 'vuefire';
import { collection } from 'firebase/firestore';

const db = useFirestore();

const projects = useCollection(collection(db, 'projects'));
</script>

<template>
  <section class="mt-[2em] mb-[4em] px-[5%]" id="openSource">
    <div class="flex flex-col justify-center max-w-[80em] mx-[auto] mt-[1em] mb-0">
      <div class="text-white text-[3em] mb-[0.25em] text-center">
        <h2>Open source projects</h2>
      </div>
    </div>
    <div class="flex flex-wrap">
      <div role="list" v-for="({ title, image, desc, technology }, i) in projects" :key="i">
        <div role="listitem">
          <div>
            <div>
              <img :src="image" loading="lazy" :alt="title" />
            </div>
            <div>
              <h3>{{ title }}</h3>
              <span>
                {{ desc }}
              </span>
              <div v-for="(item, j) in technology" :key="j">
                <div>{{ item }}</div>
              </div>
              <div>
                <div>View Project</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
