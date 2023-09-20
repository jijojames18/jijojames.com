<script lang="ts" setup>
const logoUrl = new URL('/assets/logo-white.png', import.meta.url).href;
const myImageUrl = new URL('/assets/my-image.png', import.meta.url).href;

const scrollIntoView = function (elemId: string) {
  const elem = document.querySelector(`#${elemId}`);
  if (elem) {
    elem.scrollIntoView({
      behavior: 'smooth',
    });
  }
};

const linkStyles =
  'mx-[1em] p-[0.5em] text-[1.5em] text-white cursor-pointer hover:text-custom-success-color text-center';
</script>

<template>
  <section class="mb-[10em] min-h-screen" id="hero">
    <div
      role="banner"
      class="flex justify-between mt-[1.25em] mx-[4em] sm:items-center sm:justify-center md:items-center md:justify-center lg:items-center lg:justify-center"
    >
      <a href="#hero">
        <img :src="logoUrl" loading="lazy" alt="Site logo" />
      </a>
      <nav role="navigation" class="flex items-center sm:hidden md:hidden lg:hidden">
        <div :class="linkStyles">
          <a @click="scrollIntoView('skills')">Skills</a>
        </div>
        <div :class="linkStyles">
          <a @click="scrollIntoView('openSource')">Open Source</a>
        </div>
        <div :class="linkStyles">
          <a @click="scrollIntoView('contact')">Contact</a>
        </div>
      </nav>
    </div>

    <div class="sticky top-0">
      <div class="flex flex-col items-center px-[1em] py-[5em] mx-[auto] max-w-[48em]">
        <div>
          <img
            :src="myImageUrl"
            loading="lazy"
            alt="My image (Jijo James)"
            width="360"
            class="rounded-[100%] shadow-custom-button-shadow"
          />
        </div>
        <div class="mt-[4em]">
          <h1 class="text-[2.5em] text-white text-center">
            Full stack developer, based out of Kerala, with 8+ years of development experience.
          </h1>
        </div>
      </div>
    </div>
  </section>
</template>
