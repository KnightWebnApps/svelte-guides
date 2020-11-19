<template>
  <nav>
    <ul>
      <li v-for="item in items" :key="item.to">
        <NuxtLink class="link" :to="item.to">
          <svg v-if="item.to !== '/'" style="width:24px;height:24px" viewBox="0 0 24 24">
            <path fill="currentColor" d="M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M15,18V16H6V18H15M18,14V12H6V14H18Z" />
          </svg>
          <svg v-else style="width:24px;height:24px" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12,3L20,9V21H15V14H9V21H4V9L12,3Z" />
          </svg>
          <span class="nav-title">{{ item.title }}</span>
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
nav {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: var(--primary);
  z-index: 1;
  box-shadow: -7px -7px 7px #33333328;
}

ul {
  display: grid;
  grid-template-columns: 50% 50%;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  /* gap: 15px; */
}

li {
  width: 100%;
  display: flex;
}

.link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 10px 0;
  font-size: 17px;
  font-weight: bold;
}

.link:hover {
  background-color: var(--secondary);
}

.nav-title {
  margin-left: 1em;
}
</style>
