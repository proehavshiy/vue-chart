<template>
  <section>
    <slot></slot>
    <label class="label" :for="labelFor">
      {{ title }}
    </label>
    <error-message v-show="errorMessage">
      {{ errorMessage }}
    </error-message>
  </section>
</template>

<script>
export default {
  name: 'form-section',
  props: {
    labelFor: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    errorMessage: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
.label {
  margin-bottom: 4px;

  align-self: flex-start;
  position: relative;

  font-size: 10px;
  line-height: 1.3;
  letter-spacing: -0.02em;
  color: $textColorMain;
}
</style>
