<template>
  <button class="btn"><slot></slot></button>
</template>

<script>

export default {
  name: 'main-button',
};
</script>

<style lang="scss" scoped>
.btn {
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background-color: none;
  @include standartTransition(0.2);
  @include extraTextHidden;

  font-size: 12px;
  font-weight: 600;

  &:hover {
    opacity: 0.8;
  }
}
</style>
