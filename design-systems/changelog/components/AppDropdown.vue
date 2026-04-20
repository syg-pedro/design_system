<script setup lang="ts">
import type { SelectOption } from '~/app/types/domain'

const props = withDefaults(
  defineProps<{
    modelValue: string
    label?: string
    placeholder?: string
    options: SelectOption[]
    disabled?: boolean
  }>(),
  {
    label: '',
    placeholder: 'Selecionar',
    disabled: false
  }
)

const emit = defineEmits<{
  'update:modelValue': [value: string]
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

    <span class="app-select">
      <select
        class="app-select__input"
        :value="props.modelValue"
        :disabled="props.disabled"
        @change="emit('update:modelValue', ($event.target as HTMLSelectElement).value)"
      >
        <option
          value=""
          disabled
          hidden
        >
          {{ props.placeholder }}
        </option>
        <option
          v-for="option in props.options"
          :key="option.value"
          :value="option.value"
        >
          {{ option.label }}
        </option>
      </select>
      <span class="app-select__icon">
        <AppIcon name="chevron-down" />
      </span>
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
}

.app-select {
  position: relative;
}

.app-select__input {
  width: 100%;
  min-height: 44px;
  padding: 0 42px 0 14px;
  border: 1px solid var(--ff-color-line);
  border-radius: 8px;
  background: var(--ff-color-primary-bg);
  color: var(--ff-color-primary-text);
  appearance: none;
}

.app-select__icon {
  position: absolute;
  top: 50%;
  right: 14px;
  transform: translateY(-50%);
  color: var(--ff-color-secondary-text);
  pointer-events: none;
}
</style>
