<template>
  <div class="max-w-3xl mx-auto px-8">
    <header class="flex justify-between my-2 py-2">
      <g-link to="/" class="block font-bold mb-2">{{ $static.metadata.siteName }}</g-link>

      <nav>
        <ul class="flex space-x-3">
          <li><g-link to="/">Home</g-link></li>
          <li><g-link to="/devlog/">Devlog</g-link></li>
          <li><g-link to="/now/">Now</g-link></li>
          <li><g-link to="/gear/">Gear</g-link></li>
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
