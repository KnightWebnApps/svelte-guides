<template>
  <section class="container">
    <header>
      <Logo />
      <h1 class="title">
        Svelte Guides
      </h1>
    </header>
  </section>
</template>

<script>
import gsap from 'gsap'
export default {
  mounted () {
    gsap.to('.title', {
      delay: 0.5,
      duration: 1,
      y: -200,
      backgroundColor: '#33333390',
      opacity: 1
    })
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
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
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #d2e8ff;
  letter-spacing: 1px;
  /* background-color: #33333300; */
  opacity: 0;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
