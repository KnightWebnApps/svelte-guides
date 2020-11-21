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
    <ShareNetwork
      class="share"
      network="facebook"
      :url="url"
      :title="post.title"
      :description="post.description"
    >
      Share
    </ShareNetwork>
  </article>
</template>

<script>
import { ShareNetwork } from 'vue-social-sharing'
import FloatingShareButton from '~/components/FloatingShareButton'
export default {
  components: {
    FloatingShareButton,
    ShareNetwork
  },
  async asyncData ({ $content, params }) {
    return {
      post: await $content('posts/' + params.slug).fetch()
    }
  },
  data () {
    return {
      url: process.env.baseUrl + this.$nuxt.$route.fullPath
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

.content .share {
  background-color: var(--primary);
  padding: 10px 15px;
  margin: 15px;
  cursor: pointer;
}
</style>
