export default {
  props: {
    visibility: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    toggleVisibility() {
      setTimeout(() => {
        this.$emit('update:visibility', false);
      }, 2000);
    },
  },
  watch: {
    visibility() {
      this.toggleVisibility();
    },
  },
};
