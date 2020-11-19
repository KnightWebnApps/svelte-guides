<template>
  <section class="post-section">
    <div class="actions">
      <h2>Posts</h2>
      <Search />
    </div>
    <hr>
    <ul class="post-list">
      <li v-for="(post, index) in posts" :key="index" class="post-list-item">
        <NuxtLink :to="'posts/' + post.slug">
          <Card :title="post.title" :description="post.description">
            {{ post.description }}
          </Card>
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>

<script>
import Card from '~/components/Card'
import Search from '~/components/Search'
export default {
  components: {
    Card,
    Search
  },
  async asyncData ({ $content }) {
    return {
      posts: await $content('posts').where({ isPublished: true }).fetch()
    }
  },
  data () {
    return {
      total: 10,
      current: 1,
      perPage: 10,
      rangeBefore: 3,
      rangeAfter: 1,
      order: '',
      size: '',
      isSimple: false,
      isRounded: false,
      prevIcon: 'chevron-left',
      nextIcon: 'chevron-right'
    }
  }
}
</script>

<style scoped>
.post-section {
  padding: 10px;
}

.actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 900px;
  margin: 0 auto 10px;
}

.actions h2 {
  margin: 10px 0;
}

.post-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  max-width: 900px;
  margin: 15px auto;
  justify-content: center;
  gap: 20px;
}

@media(max-width: 500px){
  .actions {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
