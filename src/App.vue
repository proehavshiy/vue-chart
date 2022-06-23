<template>
  <main class="app">
    <nav-bar></nav-bar>
    <router-view />
  </main>
</template>

<script>
import NavBar from '@/components/Nav-bar.vue';

export default {
  components: { NavBar },
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

<style lang="scss">
.app {
  max-width: $b1440;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  &__heading {
    margin-bottom: 30px;
    text-align: center;
  }
}
</style>
