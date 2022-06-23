<template>
  <h1 class="section-heading"><slot></slot></h1>
</template>

<script>

export default {
  name: 'section-heading',
};
</script>

<style lang="scss" scoped>
.section-heading {
  font-weight: 600;
  font-size: 28px;
  color: $textColorMain;
}
</style>
