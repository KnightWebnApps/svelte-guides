<template>
  <div>
    <label class="search-label">
      <svg style="width:24px;height:24px" viewBox="0 0 24 24">
        <path fill="currentColor" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
      </svg>
      <input v-model="query" placeholder="Search Posts...">
    </label>

    <ul v-if="query.length > 0" class="query-list">
      <li v-if="query.length > 0 && articles.length === 0">
        <span>No Results Found for '{{ query }}'</span>
      </li>
      <li v-for="(article, i) in articles" v-else-if="query.length > 0" :key="article.slug">
        <NuxtLink :to="'posts/' + article.slug">
          <!-- eslint-disable-next-line -->
          {{ i + 1}}. {{ article.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      query: '',
      articles: []
    }
  },
  watch: {
    async query (query) {
      if (!query) {
        this.articles = []
        return
      }

      this.articles = await this.$content('posts')
        .only(['title', 'slug'])
        .sortBy('createdAt', 'asc')
        .limit(12)
        .search(query)
        .fetch()
    }
  }
}
</script>

<style scoped>
input {
  padding: 7px 10px;
  font-size: 16px;
  margin-left: 10px;
}

.search-label {
  display: flex;
  align-items: center;
}

.query-list {
  background-color: var(--primary);
  padding: 10px;
  position: absolute;
  width: 300px;
}
</style>
