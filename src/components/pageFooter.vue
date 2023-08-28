<script setup></script>

<template>
  <footer>
    <div class="container m-[2em]">
      <div class="footer-logo-wrapper flex justify-center align-center mb-[2em]">
        <img src="assets/logo-white.png" loading="lazy" alt="" />
      </div>
      <div class="footer-social-links flex align-center justify-center border-b border-[#7a878d]">
        <a href="https://hobbies.jijojames.com" target="_blank" class="footer-social-link mx-[1.5em]">
          <img src="assets/social-hobbies.svg" />
        </a>
        <a href="https://www.linkedin.com/in/jijojames18" target="_blank" class="footer-social-link mx-[1.5em]">
          <img src="assets/social-linkedin.svg" />
        </a>
        <a href="https://github.com/jijojames18" target="_blank" class="footer-social-link mx-[1.5em]">
          <img src="assets/social-github.svg" />
        </a>
        <a
          href="https://jsfiddle.net/user/jijojames18/fiddles/"
          target="_blank"
          class="footer-social-link ml-[1.5em] mr-[0.45em]"
        >
          <img src="assets/social-jsfiddle.svg" />
        </a>
        <a href="https://twitter.com/jijojames18" target="_blank" class="footer-social-link mx-[1.5em]">
          <img src="assets/social-twitter.svg" />
        </a>
      </div>
      <div class="footer-copyright flex justify-center align-center m-[2em]">
        <p>© {{ new Date().getFullYear() }} jijojames.com. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>
