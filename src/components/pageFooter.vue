<script lang="ts" setup>
const logoUrl = new URL('/assets/logo-white.png', import.meta.url).href;
const socialHobbiesImgUrl = new URL('/assets/social-hobbies.svg', import.meta.url).href;
const socialLinkedInImgUrl = new URL('/assets/social-linkedin.svg', import.meta.url).href;
const socialGithubImgUrl = new URL('/assets/social-github.svg', import.meta.url).href;
const socialJsFiddleImgUrl = new URL('/assets/social-jsfiddle.svg', import.meta.url).href;
const socialTwitterImgUrl = new URL('/assets/social-twitter.svg', import.meta.url).href;
</script>

<template>
  <footer>
    <div class="m-[2em]">
      <div class="footer-logo-wrapper flex justify-center items-center mb-[2em]">
        <img :src="logoUrl" loading="lazy" alt="Site logog" />
      </div>
      <div class="footer-social-links flex items-center justify-center border-b border-[#7a878d] pb-[1em]">
        <a href="https://hobbies.jijojames.com" target="_blank" class="footer-social-link mx-[1.5em]">
          <img :src="socialHobbiesImgUrl" />
        </a>
        <a href="https://www.linkedin.com/in/jijojames18" target="_blank" class="footer-social-link mx-[1.5em]">
          <img :src="socialLinkedInImgUrl" />
        </a>
        <a href="https://github.com/jijojames18" target="_blank" class="footer-social-link mx-[1.5em]">
          <img :src="socialGithubImgUrl" />
        </a>
        <a href="https://jsfiddle.net/user/jijojames18/fiddles/" target="_blank" class="footer-social-link mx-[1.5em]">
          <img :src="socialJsFiddleImgUrl" />
        </a>
        <a href="https://twitter.com/jijojames18" target="_blank" class="footer-social-link mx-[1.5em]">
          <img :src="socialTwitterImgUrl" />
        </a>
      </div>
      <div class="footer-copyright flex justify-center items-center m-[2em]">
        <p>© {{ new Date().getFullYear() }} jijojames.com. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>
