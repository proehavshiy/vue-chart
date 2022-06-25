<template>
  <main class="app">
    <nav-bar></nav-bar>
    <router-view />
  </main>
  <modal-info :visibility="modalStatus.status">
    {{ modalStatus.message }}
  </modal-info>
</template>

<script>
import NavBar from '@/components/Nav-bar.vue';
import { mapState, mapMutations } from 'vuex';
import unpackLocalStorage from '@/utils/unpackLocalStorage';

export default {
  components: { NavBar },
  data() {
    return {
    };
  },
  computed: {
    ...mapState({
      modalStatus: (state) => state.analytics.modalStatus,
    }),
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

  &__page {
    padding: 0 20px;
    margin-top: 50px;
  }

  &__heading {
    margin-bottom: 50px;
    text-align: center;
  }
}
</style>
