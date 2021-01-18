<template>
  <Layout>
    <article>
      <h1>{{ $page.entry.title }}</h1>

      <p>
        {{ $page.entry.date }} — <i>{{ $page.entry.timeToRead }} min read</i>
      </p>

      <div v-html="$page.entry.content" />
    </article>
  </Layout>
</template>

<page-query>
  query Entry ($path: String!) {
    metadata {
      siteName
      siteDescription
    }
    entry: entry(path: $path) {
      id
      title
      content
      date (format: "D MMMM YYYY")
      timeToRead
    }
  }
</page-query>
