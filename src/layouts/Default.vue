<template>
  <div class="flex flex-col h-full px-12">
    <header class="flex items-center justify-between my-10" role="banner">
      <g-link to="/" class="block flex-grow-0 font-semibold" data-brand-image>
        {{ $static.metadata.siteName }}
      </g-link>

      <nav role="navigation">
        <ul class="flex space-x-4">
          <li v-for="item in this.nav" :key="item.path">
            <g-link class="font-medium" :to="item.path">{{ item.title }}</g-link>
          </li>
        </ul>
      </nav>
    </header>

    <slot />

    <div class="flex flex-grow-0 justify-between my-5 space-x-4 text-sm" role="footer">
      <small>&copy; 2021 Benjamin Borowski</small>
      <nav>
        <ul class="flex space-x-2">
          <li>
            <plain-link to="/terms/">Terms</plain-link>
          </li>
          <li>
            <plain-link to="/privacy/">Privacy</plain-link>
          </li>
          <li>
            <plain-link to="/nda/">NDA</plain-link>
          </li>
        </ul>
      </nav>
    </div>
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
  import PlainLink from '~/components/PlainLink';

  export default {
    components: {
      PlainLink,
    },
    computed: {
      nav() {
        return [
          { title: 'Home', path: '/' },
          { title: 'About', path: '/about/' },
          { title: 'Devlog', path: '/devlog/' },
          { title: 'Now', path: '/now/' },
          { title: 'Uses', path: '/uses/' },
        ];
      },
    },
  };
</script>
