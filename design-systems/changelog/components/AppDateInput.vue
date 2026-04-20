<script setup lang="ts">
defineProps<{
  modelValue: string
  label?: string
  placeholder?: string
  disabled?: boolean
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>

<template>
  <AppTextInput
    :model-value="modelValue"
    :label="label"
    :placeholder="placeholder || 'dd/MM/aaaa'"
    :disabled="disabled"
    @update:model-value="emit('update:modelValue', $event)"
  />
</template>

