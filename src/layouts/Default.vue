<template>
  <div class="container max-w-3xl mx-auto px-8">
    <header class="flex justify-between my-6">
      <g-link to="/" class="block font-bold mb-2">{{ $static.metadata.siteName }}</g-link>

      <nav>
        <ul class="flex space-x-3 uppercase">
          <li v-for="item in this.nav" :key="item.path">
            <g-link :to="item.path">{{ item.title }}</g-link>
          </li>
        </ul>
      </nav>
    </header>

    <slot />
  </div>
</template>

<static-query>
  query {
    metadata {
      siteName
    }
  }
</static-query>

<script>
  export default {
    computed: {
      nav() {
        return [
          { title: 'Home', path: '/' },
          { title: 'Devlog', path: '/devlog/' },
          { title: 'Now', path: '/now/' },
          { title: 'Gear', path: '/gear/' },
        ];
      },
    },
  };
</script>
