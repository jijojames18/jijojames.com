<script lang="ts" setup>
const logoUrl = new URL('/assets/logo-white.png', import.meta.url).href;
const socialHobbiesImgUrl = new URL('/assets/social-hobbies.svg', import.meta.url).href;
const socialLinkedInImgUrl = new URL('/assets/social-linkedin.svg', import.meta.url).href;
const socialGithubImgUrl = new URL('/assets/social-github.svg', import.meta.url).href;
const socialJsFiddleImgUrl = new URL('/assets/social-jsfiddle.svg', import.meta.url).href;

// Theme
const socialLinkTheme = 'footer-social-links mx-[1.5em]';
</script>

<template>
  <footer>
    <div class="m-[2em]">
      <div class="flex justify-center items-center mb-[2em]">
        <img :src="logoUrl" loading="lazy" alt="Site logo" />
      </div>
      <div class="flex items-center justify-center border-b border-custom-text-color pb-[1em]">
        <a href="https://hobbies.jijojames.com" target="_blank" :class="socialLinkTheme">
          <img :src="socialHobbiesImgUrl" alt="Open hobbies.jijojames.com" />
        </a>
        <a href="https://www.linkedin.com/in/jijojames18" target="_blank" :class="socialLinkTheme">
          <img :src="socialLinkedInImgUrl" alt="Open Linkedin page" />
        </a>
        <a href="https://github.com/jijojames18" target="_blank" :class="socialLinkTheme">
          <img :src="socialGithubImgUrl" alt="Open Github page" />
        </a>
        <a href="https://jsfiddle.net/user/jijojames18/fiddles/" target="_blank" :class="socialLinkTheme">
          <img :src="socialJsFiddleImgUrl" alt="Open JSFiddle page" />
        </a>
      </div>
      <div class="flex justify-center items-center m-[2em]">
        <p>© {{ new Date().getFullYear() }} jijojames.com. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>
