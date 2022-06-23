<template>
  <div class="auth-page">
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
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

<style lang="scss">
.auth-page {
  margin-top: 50px;

  // auth-page__form
  &__form {
    max-width: 360px;
    margin: 0 auto;
  }
}
</style>
