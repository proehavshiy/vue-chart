<template>
  <div class="navbar">
    <div>Аналитика визитов</div>
    <nav>
      <button @click="$router.push('/')">Auth</button>
      <button @click="$router.push('/analytics')">Analytics</button>
      <!-- <router-link to="/">Auth</router-link> ///
      <router-link to="/analytics">Analytics</router-link> -->
    </nav>
  </div>
</template>

<script>
export default {
  name: 'nav-bar',
  props: {
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  display: flex;

  color: black;
  font-weight: 600;
  background-color: $bgColor;
}
</style>
