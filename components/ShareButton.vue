<template>
  <button @click="onClick">
    <svg style="width:32px;height:32px;color:#333" viewBox="0 0 24 24">
      <path fill="currentColor" d="M18 16.08C17.24 16.08 16.56 16.38 16.04 16.85L8.91 12.7C8.96 12.47 9 12.24 9 12S8.96 11.53 8.91 11.3L15.96 7.19C16.5 7.69 17.21 8 18 8C19.66 8 21 6.66 21 5S19.66 2 18 2 15 3.34 15 5C15 5.24 15.04 5.47 15.09 5.7L8.04 9.81C7.5 9.31 6.79 9 6 9C4.34 9 3 10.34 3 12S4.34 15 6 15C6.79 15 7.5 14.69 8.04 14.19L15.16 18.34C15.11 18.55 15.08 18.77 15.08 19C15.08 20.61 16.39 21.91 18 21.91S20.92 20.61 20.92 19C20.92 17.39 19.61 16.08 18 16.08M18 4C18.55 4 19 4.45 19 5S18.55 6 18 6 17 5.55 17 5 17.45 4 18 4M6 13C5.45 13 5 12.55 5 12S5.45 11 6 11 7 11.45 7 12 6.55 13 6 13M18 20C17.45 20 17 19.55 17 19S17.45 18 18 18 19 18.45 19 19 18.55 20 18 20Z" />
    </svg>
  </button>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      default: ''
    }
  },
  methods: {
    onClick () {
      if (navigator.share) {
        navigator.share({
          title: this.title,
          text: this.text,
          url: this.url
          // eslint-disable-next-line
        }).then(() => console.info('Successful Share!!'))
          // eslint-disable-next-line
          .catch(err => console.error(err))
      } else {
        // eslint-disable-next-line
        console.info('No Web Share API')
      }
    }
  }
}
</script>

<style>
button {
  border: none;
  background-color: var(--primary);
  border-radius: 50%;
  padding: 10px;
  position: fixed;
  bottom: 60px;
  right: 10px;
  z-index: 1;
  box-shadow: 3px 3px 5px #33333310, -3px -3px 5px #33333310;
}

button:hover {
  cursor: pointer;
}
</style>
