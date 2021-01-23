// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

require('~/assets/styles/main.css');

import DefaultLayout from '~/layouts/Default.vue';
import MainLayout from '~/layouts/Main.vue';

export default function (Vue, { router, head, isClient }) {
  Vue.component('Layout', DefaultLayout);
  Vue.component('MainLayout', MainLayout);

  head.htmlAttrs = { lang: 'en', class: 'h-full' };

  head.bodyAttrs = {
    class:
      'antialiased bg-white diagonal-fractions font-sans h-full leading-relaxed text-gray-500 dark:bg-gray-900 dark:text-gray-50',
  };
}
