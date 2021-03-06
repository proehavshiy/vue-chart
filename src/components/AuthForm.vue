<template>
  <form class="form" @submit.prevent="handleSubmit" noValidate>
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
          :model-value="inputData.id"
          @update:model-value="handleInput"
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
import FormSection from './UI/FormSection.vue';

export default {
  components: { FormSection },
  name: 'auth-form',
  mixins: [formValidity],
  props: {
    inputData: {
      type: Object,
      required: true,
    },
    submitCallback: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      placeHolder: {
        id: 'Введите id',
      },
      label: {
        id: 'id сайта',
      },
    };
  },
  methods: {
    handleInput({ name, value }) {
      this.$emit('update:inputData', { inputType: name, value });
    },
    handleSubmit() {
      this.submitCallback();
      if (this.formValidity) this.formValidity = false;
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
    &:required::v-deep ~ label::before {
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
    min-height: 30px;
    min-width: 100px;
    background: $submitColorActive;

    color: $accentColorLight;

    @include standartTransition(0.2);

    &:disabled {
      background: $submitColorDisabled;
      color: $textColorSecondary;
    }
  }
}
</style>
