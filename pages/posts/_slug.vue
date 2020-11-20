<template>
  <article class="content">
    <h1>{{ post.title }}</h1>
    <FloatingShareButton
      :title="post.title"
      :text="post.description"
      :url="url"
    />
    <nuxt-content :document="post" />
    <hr>
    <p>Thank you for reading!!</p>
    <ShareButton
      :title="post.title"
      :text="post.description"
      :url="url"
    />
  </article>
</template>

<script>
import FloatingShareButton from '~/components/FloatingShareButton'
import ShareButton from '~/components/ShareButton'
export default {
  components: {
    ShareButton,
    FloatingShareButton
  },
  async asyncData ({ $content, params }) {
    return {
      post: await $content('posts/' + params.slug).fetch()
    }
  },
  data () {
    return {
      url: this.$nuxt.$route.fullPath
    }
  },
  head () {
    const post = this.post
    return {
      title: 'Svelte Guides | Posts | ' + post.title,
      meta: [
        { hid: 'description', name: 'description', content: post.description },
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: post.title },
        { hid: 'og:description', property: 'og:description', content: post.description },
        { hid: 'og:type', property: 'og:type', content: 'article' },
        { hid: 'og:type', property: 'article:published_time', content: post.createdAt },
        // Twitter Card
        { hid: 'twitter:title', name: 'twitter:title', content: post.title },
        { hid: 'twitter:description', name: 'twitter:description', content: post.description }
      ]
    }
  }
}
</script>

<style scoped>
.content {
  padding: 0 1em;
  max-width: 900px;
  margin: 0 auto;
  min-height: 90vh;
}

.content h1 {
  font-size: 42px;
  font-weight: bold;
}

.nuxt-content h2,
.nuxt-content h3,
.nuxt-content h4,
.nuxt-content h5,
.nuxt-content h6 {
  font-size: 28px;
  font-weight: bold;
  margin: 15px 0;
}

.nuxt-content p {
  padding: 10px;
}

.nuxt-content ul{
  list-style: square;
}

hr {
  margin: 15px 0;
}
</style>
