<template>
  <div class="app">
    <NavBar :items="items" />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import NavBar from '~/components/NavBar'
import Footer from '~/components/Footer'
export default {
  components: {
    NavBar,
    Footer
  },
  data () {
    return {
      items: [
        {
          title: 'Home',
          to: '/'
        },
        {
          title: 'Posts',
          to: '/posts'
        }
      ]
    }
  }
}
</script>

<style>
html {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  color: #333;
  --primary: #fed047;
  --secondary: #feb547;
  --grey: #fffdf6;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.app {
  padding-bottom: 50px;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

a {
  color: #333;
  text-decoration: none;
}

a:visited {
  color: #333;
}
</style>
