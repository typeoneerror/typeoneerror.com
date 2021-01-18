// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const tailwind = require('tailwindcss');
const purgecss = require('@fullhuman/postcss-purgecss');

const postcssPlugins = [tailwind()];

if (process.env.NODE_ENV === 'production') {
  postcssPlugins.push(purgecss(require('./purgecss.config.js')));
}

module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins,
      },
    },
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: './content/*.md',
        remark: {
          // plugins: [['@gridsome/remark-prismjs', { transformInlineCode: true }]],
        },
        typeName: 'Entry',
      },
    },
  ],
  siteName: 'TYPEONEERROR',
  siteUrl: 'https://typeoneerror.com',
  templates: {
    Entry: '/:title',
  },
  transformers: {
    remark: {},
  },
};
