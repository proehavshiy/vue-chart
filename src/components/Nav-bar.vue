<template>
  <div class="navbar">
    <div class="navbar__logo" @click="$router.push({ name: 'auth' })">
      AdStats.io
    </div>
    <nav class="navbar__nav">
      <main-button
        v-if="this.$route.name !== 'analytics'"
        class="navbar__btn"
        @click="$router.push({ name: 'analytics' })"
      >
        Аналитика
      </main-button>
      <main-button
        v-if="this.$route.name !== 'auth'"
        class="navbar__btn navbar__btn_logout"
        @click="logOut"
      >
        Выйти
      </main-button>
    </nav>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import unpackLocalStorage from '@/utils/unpackLocalStorage';

export default {
  name: 'nav-bar',
  methods: {
    ...mapMutations({
      setAnalyticsData: 'setAnalyticsData',
      setSiteId: 'setSiteId',
    }),
    logOut() {
      // если при изменении не будет в localstorage siteId, произойдет редирект на auth
      this.setAnalyticsData([]);
      this.setSiteId('');
      localStorage.removeItem('analytics-app-store');

      const [isExist] = unpackLocalStorage('analytics-app-store');
      if (!isExist) this.$router.push({ name: 'auth' });
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  height: 60px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: $textColorMain;
  font-weight: 600;
  background-color: $bgColor;

  // .navbar__logo

  &__logo {
    font-size: 18px;
    cursor: pointer;
  }

  // .navbar__nav

  &__nav {
    display: flex;
    & > *:not(:last-of-type) {
      margin-right: 10px;
    }
  }

  // navbar__btn
  &__btn {
    padding: 10px;
    min-height: 20px;
    width: 100px;
    background: $submitColorActive;

    color: $accentColorLight;

    &_logout {
      background: $accentColor;
    }
  }
}
</style>
