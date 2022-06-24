<template>
  <main class="app">
    <nav-bar></nav-bar>
    <router-view />
  </main>
</template>

<script>
import NavBar from '@/components/Nav-bar.vue';
import { mapMutations } from 'vuex';
import unpackLocalStorage from '@/utils/unpackLocalStorage';

export default {
  components: { NavBar },
  data() {
    return {
    };
  },
  beforeMount() {
    // достать из localStorage данные при их наличии
    const [isExist, { siteId, data }] = unpackLocalStorage('analytics-app-store');
    if (isExist) {
      this.setSiteId(siteId);
      this.setAnalyticsData(data);
      // авторедирект на analytics
      this.$router.push({ name: 'analytics' });
    }
  },
  methods: {
    ...mapMutations({
      setAnalyticsData: 'setAnalyticsData',
      setSiteId: 'setSiteId',
    }),
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
