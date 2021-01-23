<template>
  <g-link class="text-gray-400" :to="to">
    <slot />
  </g-link>
</template>

<script>
  export default {
    props: ['to'],
  };
</script>
