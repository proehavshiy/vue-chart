<template>
  <form class="form" @submit.prevent="submitForm" noValidate>
    <fieldset class="form__fieldset">
      <form-section
        class="form__section"
        :labelFor="'id'"
        :title="label.id"
        :errorMessage="errorMessage.id"
      >
        <form-input
          class="form__input"
          :class="{ form__input_invalid: errorMessage.id }"
          id="id"
          name="id"
          :placeholder="placeHolder.id"
          v-model="inputData.siteId"
          @validate="checkInputValidity"
          required
          type="text"
          minlength="24"
          maxLength="24"
        />
      </form-section>
    </fieldset>
    <main-button class="form__submit" :disabled="!this.formValidity">
      Войти
    </main-button>
  </form>
</template>

<script>
import formValidity from '@/mixins/formValidity';
import axios from 'axios';
import FormSection from './UI/FormSection.vue';

export default {
  components: { FormSection },
  name: 'auth-form',
  mixins: [formValidity],
  data() {
    return {
      inputData: {
        siteId: '',
      },
      placeHolder: {
        id: 'Введите id',
      },
      label: {
        id: 'Введите id',
      },
    };
  },
  methods: {
    submitForm() {
      console.log('submit:');
      this.fetchData();
    },
    async fetchData() {
      try {
        const response = await axios.get('https://track-api.leadhit.io/client/test_auth', {
          headers: {
            'Api-Key': '5f8475902b0be670555f1bb3:eEZn8u05G3bzRpdL7RiHCvrYAYo',
            'Leadhit-Site-Id': this.inputData.siteId,
          },
        });
        console.log('response:', response);
      } catch (e) {
        console.log('error fetch:', e);
      } finally {
        console.log('finally:');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  // form__fieldset
  &__fieldset {
    margin-bottom: 24px;
    padding: 0;
  }

  // form__section

  &__section {
    display: flex;
    flex-direction: column;
    flex-direction: column-reverse;

    position: relative;

    &:not(:last-of-type) {
      margin-bottom: 16px;
    }
  }

  // .form__input

  &__input {
    @include contentBlockPreset;
    min-height: 36px;
    padding: 10px 16px;

    font-size: 12px;
    @include standartTransition(0.2);

    // .form__input_textarea

    &_textarea {
      min-height: 108px;
    }

    // .form__input_invalid

    &_invalid {
      outline: 2px solid $accentColor !important;
    }

    &::placeholder {
      color: $textColorSecondary;
    }
    &:focus {
      outline: 2px solid $textColorMain;
    }

    // стилизуем label красной точкой, если инпут обязательный
    &:required ~ label::before {
      content: "";
      width: 4px;
      height: 4px;

      background: $accentColor;
      border-radius: 4px;

      position: absolute;
      top: 0;
      left: 100%;
    }
  }

  // .form__submit

  &__submit {
    padding: 10px;
    min-height: 36px;
    background: $submitColorActive;

    font-weight: 600;
    font-size: 12px;

    color: $accentColorLight;

    @include standartTransition(0.2);

    &:disabled {
      background: $submitColorDisabled;
      color: $textColorSecondary;
    }
  }
}
</style>
