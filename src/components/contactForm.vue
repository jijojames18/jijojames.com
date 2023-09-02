<script lang="ts" setup>
import { ref } from 'vue';
import { Checkbox as VueRecaptcha } from 'vue-recaptcha';
import axios from 'axios';

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
  }

  axios
    .post(
      import.meta.env.VITE_POST_FEEDBACK_ENDPOINT,
      JSON.stringify({
        formData: {
          name: contactName.value,
          email: contactEmail.value,
          comments: contactMessage.value,
        },
        captcha: captchaResponse.value,
        site: 'jijojames.com',
      }),
      {
        headers: {
          'content-type': 'application/json',
        },
      },
    )
    .then(() => {
      formStatus.value = {
        status: SubmitStatus.SUCCESS,
        message: 'Thank you! Your message has been received! I will get back to you at the earliest.',
      };
    })
    .catch(() => {
      formStatus.value = {
        status: SubmitStatus.SUCCESS,
        message: 'Thank you! Your message has been received! I will get back to you at the earliest.',
      };
    });
};

// Theme
const inputTheme =
  'h-auto min-h-[2.5em] w-full bg-transparent border-2 px-[1em] border-[#09c725] outline-0 focus:bg-[#09e85e1a] focus:shadow-[0_0_4px_2px_#09e85e]';
const labelTheme = 'mb-[0.5em] font-medium text-white';
const wrapperTheme = 'w-1/2 sm:w-full md:w-full';
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
          <div class="flex mb-[1em]">
            <img :src="mailIconUrl" />
            <span class="pl-[1em] text-white self-center">jijojames18@gmail.com</span>
          </div>
          <div class="flex mb-[1em]">
            <img :src="resumeIconUrl" />
            <a href="#" class="pl-[1em] text-[#09c725] self-center">Resume</a>
          </div>
        </div>
      </div>
      <div :class="wrapperTheme">
        <div
          v-if="formStatus.status === SubmitStatus.ERROR"
          v-text="formStatus.message"
          class="text-[#e23939] text-[1.5em] m-[1.5em]"
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
                id="contact-name"
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
                id="contact-email"
                required
                v-model="contactEmail"
              />
            </div>
            <div>
              <label for="contact-message" :class="labelTheme">Message</label>
              <textarea
                id="contact-message"
                name="contact-message"
                maxlength="5000"
                required
                v-model="contactMessage"
                :class="`${inputTheme} py-[1em]`"
              ></textarea>
            </div>
            <div>
              <VueRecaptcha :key="reCaptchaTheme" :theme="reCaptchaTheme" v-model="captchaResponse"></VueRecaptcha>
            </div>
            <input
              type="submit"
              value="Submit"
              class="text-black font-semibold rounded mt-[1em] px-[1em] py-[0.5em] bg-white hover:bg-[#fefdfb] hover:border-[#09e85e] hover:shadow-[0_0_14px_2px_#09e85e]"
            />
          </form>
        </div>
        <div v-else v-text="formStatus.message" class="text-[#09c725] text-[1.5em] m-[1.5em]"></div>
      </div>
    </div>
  </section>
</template>
