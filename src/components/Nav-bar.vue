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
    </nav>
  </div>
</template>

<script>
export default {
  name: 'nav-bar',
  props: {},
};
</script>

<style lang="scss" scoped>
.navbar {
  height: 60px;
  padding: 0 40px;
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

    font-weight: 600;
    font-size: 12px;

    color: $accentColorLight;
  }
}
</style>
