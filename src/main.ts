import { createApp } from 'vue';
import App from './App.vue';

import { createHead } from '@unhead/vue';
import { VueRecaptchaPlugin } from 'vue-recaptcha';

import './index.css';

const app = createApp(App);

app.use(createHead());
app.use(VueRecaptchaPlugin, {
  v2SiteKey: import.meta.env.VITE_RECAPTCHA_KEY,
});

app.mount('#app');
