<template>
  <div class="modal" :class="{ modal_visible: visibility }">
    <div class="modal__content">
      <slot></slot>
    </div>
  </div>
</template>
<script>

export default {
  name: 'modal-info',
  props: {
    visibility: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss">
.modal {
  position: absolute;
  opacity: 0;

  top: -100%;
  right: 0;

  @include standartTransition(0.4);
  z-index: 999;

  &_visible {
    opacity: 1;
    min-width: 100px;
    min-height: 50px;

    top: 0;
  }

  // .modal__content

  &__content {
    display: flex;
    justify-content: flex-end;

    padding: 10px;
    background: $accentColor;
    color: $accentColorLight;
    border-radius: 10px;

    position: relative;
    top: 20px;
    right: 20px;
  }
}
</style>
