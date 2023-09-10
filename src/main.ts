import { createApp } from 'vue';
import App from './App.vue';

import { createHead } from '@unhead/vue';
import { VueRecaptchaPlugin } from 'vue-recaptcha';
import { VueFire, VueFireAuth } from 'vuefire';
import { initializeApp } from 'firebase/app';

import './index.css';

const firebaseApp = initializeApp(JSON.parse(import.meta.env.VITE_FIREBASE_CONFIG));
const app = createApp(App);

app.use(createHead());
app.use(VueRecaptchaPlugin, {
  v2SiteKey: import.meta.env.VITE_RECAPTCHA_KEY,
});
app.use(VueFire, {
  firebaseApp,
  modules: [VueFireAuth()],
});
app.mount('#app');
