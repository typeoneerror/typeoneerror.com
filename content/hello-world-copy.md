---
title: 'Goodbye World'
description: 'The first post written in Markdown'
date: 2021-04-20
---

Here's some syntax:

```javascript
const tailwind = require('tailwindcss');
const purgecss = require('@fullhuman/postcss-purgecss');

const postcssPlugins = [tailwind()];

if (process.env.NODE_ENV === 'production') {
  postcssPlugins.push(purgecss(require('./purgecss.config.js')));
}
```

How's that look?
