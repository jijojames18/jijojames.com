<script setup lang="ts">
import { useRecaptchaProvider } from 'vue-recaptcha';

useRecaptchaProvider();

import AppBg from './components/AppBg.vue';
import PageHeader from './components/pageHeader.vue';
import SkillList from './components/skillList.vue';
import OpenSource from './components/openSource.vue';
import ContactForm from './components/contactForm.vue';
import PageFooter from './components/pageFooter.vue';
</script>

<template>
  <AppBg></AppBg>
  <div>
    <PageHeader></PageHeader>
    <SkillList></SkillList>
    <OpenSource></OpenSource>
    <ContactForm></ContactForm>
    <PageFooter></PageFooter>
  </div>
</template>
