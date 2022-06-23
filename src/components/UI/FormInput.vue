<template>
  <input type="text" :value="modelValue" @input="changeInputValue" />
</template>

<script>

export default {
  name: 'form-input',
  emits: ['update:modelValue', 'validate'],
  props: {
    modelValue: {
      type: [String, Number, null],
      required: true,
    },
  },
  methods: {
    changeInputValue(e) {
      this.$emit('update:modelValue', e.target.value);
      this.$emit('validate', e.target);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
