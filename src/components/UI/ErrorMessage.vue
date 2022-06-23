<template>
  <transition name="fade">
    <span class="error-message">
      <slot></slot>
    </span>
  </transition>
</template>

<script>
export default {
  name: 'error-message',
};
</script>

<style lang="scss" scoped>
.error-message {
  font-size: 8px;
  letter-spacing: -0.02em;

  color: $accentColor;

  position: absolute;
  top: calc(100% + 5px);
  left: 0;
}
// animations
@include vueFade(0.2);
</style>
