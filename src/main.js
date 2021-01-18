// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

require('~/assets/styles/main.css');

import DefaultLayout from '~/layouts/Default.vue';

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);

  head.htmlAttrs = { lang: 'en' };

  head.bodyAttrs = {
    class:
      'antialiased bg-white diagonal-fractions leading-relaxed text-gray-600 dark:bg-gray-900 dark:text-gray-50',
  };
}
