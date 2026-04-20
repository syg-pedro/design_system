<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    modelValue: string
    label?: string
    placeholder?: string
    type?: string
    icon?: string
    disabled?: boolean
  }>(),
  {
    label: '',
    placeholder: '',
    type: 'text',
    icon: '',
    disabled: false
  }
)

const emit = defineEmits<{
  'update:modelValue': [value: string]
  enter: []
}>()
</script>

<template>
  <label class="app-field">
    <span
      v-if="props.label"
      class="app-field__label"
    >
      {{ props.label }}
    </span>

    <span class="app-field__control">
      <span
        v-if="props.icon"
        class="app-field__icon"
      >
        <AppIcon :name="props.icon" />
      </span>
      <input
        class="app-field__input"
        :type="props.type"
        :placeholder="props.placeholder"
        :value="props.modelValue"
        :disabled="props.disabled"
        @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        @keydown.enter="emit('enter')"
      >
    </span>
  </label>
</template>

<style scoped>
.app-field {
  display: grid;
  gap: 6px;
}

.app-field__label {
  font-size: 12px;
  font-weight: 600;
  color: var(--ff-color-primary-text);
}

.app-field__control {
  display: flex;
  align-items: center;
  min-height: 45px;
  gap: 10px;
  padding: 0 14px;
  border: 1px solid var(--ff-color-line);
  border-radius: 10px;
  background: var(--ff-color-primary-bg);
}

.app-field__control:focus-within {
  border-color: var(--ff-color-primary);
}

.app-field__icon {
  color: var(--ff-color-secondary-text);
}

.app-field__input {
  width: 100%;
  border: 0;
  outline: 0;
  background: transparent;
  color: var(--ff-color-primary-text);
}

.app-field__input::placeholder {
  color: var(--ff-color-secondary-text);
}
</style>

