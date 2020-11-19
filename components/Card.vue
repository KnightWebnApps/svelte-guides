<template>
  <article>
    <header>
      <h3>{{ title }}</h3>
    </header>
    <hr>
    <section>
      {{ desc }} {{ desc.length >= 145 ? "..." : "" }}
    </section>
  </article>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    }
  },
  computed: {
    desc () {
      return this.description.substring(0, 145)
    }
  }
}
</script>

<style scoped>
article {
  display: flex;
  flex-direction: column;
  background-color: var(--grey);
  padding: 0 10px 10px;
  min-height: 240px;
  box-shadow: 5px 5px 5px #33333342, -3px -3px 7px #33333328;
}

header {
  margin: 10px 0;
}

section {
  margin-top: 10px;
  line-height: 1.5;
}
</style>
