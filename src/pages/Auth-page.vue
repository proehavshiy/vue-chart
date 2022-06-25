<template>
  <div class="app__page auth-page">
    <section-heading class="app__heading">LeadHit</section-heading>
    <auth-form class="auth-page__form" />
  </div>
</template>

<script>
import AuthForm from '@/components/AuthForm.vue';
import SectionHeading from '@/components/UI/SectionHeading.vue';

export default {
  components: {
    AuthForm,
    SectionHeading,
  },
};
</script>

<style lang="scss">
.auth-page {
  // auth-page__form
  &__form {
    display: flex;
    flex-direction: column;
    max-width: 360px;
    margin: 0 auto;
  }
}
</style>
