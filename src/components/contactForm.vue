<script lang="ts" setup>
import { ref } from 'vue';
import { Checkbox as VueRecaptcha } from 'vue-recaptcha';
import emailjs from '@emailjs/browser';

const reCaptchaTheme = 'dark';
const mailIconUrl = new URL('/assets/icon-mail.svg', import.meta.url).href;
const resumeIconUrl = new URL('/assets/icon-resume.svg', import.meta.url).href;
enum SubmitStatus {
  WAITING,
  SUCCESS,
  ERROR,
}

const contactName = ref('');
const contactEmail = ref('');
const contactMessage = ref('');
const captchaResponse = ref(null);

const formStatus = ref({
  status: SubmitStatus.WAITING,
  message: '',
});

const onSubmit = function () {
  if (captchaResponse.value === null) {
    formStatus.value = {
      status: SubmitStatus.ERROR,
      message: 'Captcha expired. Please recheck the captcha',
    };
  } else {
    emailjs
      .send(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        {
          name: contactName.value,
          email: contactEmail.value,
          message: contactMessage.value,
          'g-recaptcha-response': captchaResponse.value,
        },
        import.meta.env.VITE_EMAIL_PUBLIC_KEY,
      )
      .then(
        () => {
          formStatus.value = {
            status: SubmitStatus.SUCCESS,
            message: 'Thank you! Your message has been received! I will get back to you at the earliest.',
          };
        },
        () => {
          formStatus.value = {
            status: SubmitStatus.SUCCESS,
            message: 'Thank you! Your message has been received! I will get back to you at the earliest.',
          };
        },
      );
  }
};

// Theme
const inputTheme =
  'h-auto min-h-[2.5em] w-full bg-transparent border-2 px-[1em] border-custom-success-color outline-0 focus:bg-custom-success-hover-color focus:shadow-custom-input-shadow';
const labelTheme = 'mb-[0.5em] font-medium text-white';
const wrapperTheme = 'w-1/2 sm:w-full md:w-full';
const additionalLinksTheme = 'flex mb-[1em]';
const submitButtonTheme =
  'text-black font-semibold rounded mt-[1em] px-[1em] py-[0.5em] bg-white hover:bg-custom-button-hover-bg-color hover:border-custom-success-hover-color hover:shadow-custom-button-shadow';
</script>

<template>
  <section class="mt-[2em] mb-[4em] px-[5%]">
    <div class="flex justify-center flex-row max-w-[80em] mx-[auto] my-0 sm:flex-col md:flex-col">
      <div :class="wrapperTheme">
        <div class="text-white text-[3em] mb-[0.25em]">
          <h2>Get in touch</h2>
        </div>
        <p class="text-[1.5em] mb-[1em]">Send me a mail, or submit the form to reach me.</p>
        <div>
          <div :class="additionalLinksTheme">
            <img :src="mailIconUrl" alt="Send an email to jijojames18@gmail.com" />
            <span class="ml-[1em] text-white self-center">jijojames18@gmail.com</span>
          </div>
          <div :class="additionalLinksTheme">
            <img :src="resumeIconUrl" alt="Resume icon" />
            <a href="#" class="ml-[1em] text-custom-success-color self-center">Resume</a>
          </div>
        </div>
      </div>
      <div :class="wrapperTheme">
        <div
          v-if="formStatus.status === SubmitStatus.ERROR"
          v-text="formStatus.message"
          class="text-custom-error-color text-[1.5em] m-[1.5em]"
        ></div>
        <div v-if="formStatus.status !== SubmitStatus.SUCCESS">
          <form method="post" @submit.prevent="onSubmit">
            <div>
              <label for="contact-name" :class="labelTheme">Name</label>
              <input
                type="text"
                :class="inputTheme"
                maxlength="256"
                name="contact-name"
                required
                v-model="contactName"
              />
            </div>
            <div>
              <label for="contact-email" :class="labelTheme">Email</label>

              <input
                type="email"
                :class="inputTheme"
                maxlength="256"
                name="contact-email"
                required
                v-model="contactEmail"
              />
            </div>
            <div>
              <label for="contact-message" :class="labelTheme">Message</label>
              <textarea
                :class="`${inputTheme} py-[1em]`"
                maxlength="5000"
                name="contact-message"
                required
                v-model="contactMessage"
              ></textarea>
            </div>
            <div>
              <VueRecaptcha :key="reCaptchaTheme" :theme="reCaptchaTheme" v-model="captchaResponse"></VueRecaptcha>
            </div>
            <input type="submit" value="Submit" :class="submitButtonTheme" />
          </form>
        </div>
        <div v-else v-text="formStatus.message" class="text-custom-success-color text-[1.5em] m-[1.5em]"></div>
      </div>
    </div>
  </section>
</template>
