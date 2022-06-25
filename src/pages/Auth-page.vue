<template>
  <div class="app__page auth-page">
    <section-heading class="app__heading">LeadHit</section-heading>
    <auth-form
      class="auth-page__form"
      :inputData="inputData"
      @update:inputData="setInputData"
      :submitCallback="submitCallback"
    />
  </div>
</template>

<script>
import AuthForm from '@/components/AuthForm.vue';
import SectionHeading from '@/components/UI/SectionHeading.vue';
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
  components: {
    AuthForm,
    SectionHeading,
  },
  computed: {
    ...mapState({
      inputData: (state) => state.analytics.inputData,
    }),
  },
  methods: {
    submitCallback() {
      const redirectToAnalyticsPage = () => this.$router.push({ name: 'analytics' });
      this.fetchAnalyticsData(redirectToAnalyticsPage);
    },
    ...mapMutations({
      setInputData: 'setInputData',
    }),
    ...mapActions({
      fetchAnalyticsData: 'fetchAnalyticsData',
    }),
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
