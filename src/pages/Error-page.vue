<template>
  <div class="error-page">
    <section-heading class="error-page__heading">
      404 такой страницы нет
    </section-heading>
  </div>
</template>

<script>
import SectionHeading from '@/components/UI/SectionHeading.vue';

export default {
  components: {
    SectionHeading,
  },
};
</script>

<style lang="scss">
.error-page {
  margin: 20%;
  display: flex;
  justify-content: center;
}
</style>
