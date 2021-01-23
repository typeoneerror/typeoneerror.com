<template>
  <MainLayout>
    <h1>Devlog</h1>

    <p>
      Lorem ipsum dolor sit amet, consectetur <em>adipisicing elit</em>. Error doloremque omnis
      animi, eligendi magni a voluptatum, vitae, consequuntur rerum illum odit fugit assumenda rem
      dolores inventore iste reprehenderit maxime! Iusto.
    </p>

    <section>
      <article class="my-2 py-2" v-for="entry in this.entries" :key="entry.id">
        <h3>
          <g-link :to="entry.node.path">{{ entry.node.title }}</g-link>
        </h3>
        <p v-if="entry.node.desc">desc: {{ entry.node.desc }}</p>
      </article>
    </section>
  </MainLayout>
</template>

<script>
  export default {
    metaInfo: {
      title: 'Devlog',
    },
    computed: {
      entries() {
        return this.$page.entries.edges;
      },
    },
  };
</script>

<page-query>
  query {
    entries: allEntry(sortBy: "date", order: DESC) {
      totalCount
      edges {
        node {
          id
          title
          path
          description
          date (format: "D MMMM YYYY")
        }
      }
    }
  }
</page-query>
