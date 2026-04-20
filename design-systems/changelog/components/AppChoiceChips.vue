<script setup lang="ts">
import type { ChipOption } from '~/app/types/domain'

const props = withDefaults(
  defineProps<{
    modelValue: string
    options: ChipOption[]
    accentColor?: string | null
  }>(),
  {
    accentColor: null
  }
)

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>

<template>
  <div class="app-choice-chips">
    <button
      v-for="option in props.options"
      :key="option.value"
      class="app-choice-chips__chip"
      :class="{ 'app-choice-chips__chip--selected': props.modelValue === option.value }"
      type="button"
      :style="
        props.modelValue === option.value && props.accentColor
          ? { '--chip-color': props.accentColor }
          : {}
      "
      @click="emit('update:modelValue', option.value)"
    >
      <AppIcon
        v-if="option.icon"
        :name="option.icon"
        :size="16"
      />
      <span>{{ option.label }}</span>
    </button>
  </div>
</template>

<style scoped>
.app-choice-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.app-choice-chips__chip {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-height: 38px;
  padding: 0 14px;
  border: 0;
  border-radius: 16px;
  background: var(--ff-color-secondary-bg);
  color: var(--ff-color-secondary-text);
  cursor: pointer;
}

.app-choice-chips__chip--selected {
  background: var(--chip-color, var(--ff-color-tertiary));
  color: var(--ff-color-white);
}
</style>

