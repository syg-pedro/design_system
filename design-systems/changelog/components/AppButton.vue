<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    variant?: 'primary' | 'secondary' | 'ghost' | 'tonal'
    type?: 'button' | 'submit' | 'reset'
    block?: boolean
    loading?: boolean
    disabled?: boolean
  }>(),
  {
    variant: 'primary',
    type: 'button',
    block: false,
    loading: false,
    disabled: false
  }
)
</script>

<template>
  <button
    class="app-button"
    :class="[
      `app-button--${props.variant}`,
      { 'app-button--block': props.block }
    ]"
    :type="props.type"
    :disabled="props.disabled || props.loading"
  >
    <span
      v-if="$slots.icon"
      class="app-button__icon"
    >
      <slot name="icon" />
    </span>
    <span class="app-button__label">
      <slot />
    </span>
  </button>
</template>

<style scoped>
.app-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 40px;
  padding: 0 24px;
  border: 1px solid transparent;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease;
}

.app-button--block {
  width: 100%;
}

.app-button--primary {
  background: var(--ff-color-tertiary);
  color: var(--ff-color-white);
}

.app-button--primary:hover {
  background: color-mix(in srgb, var(--ff-color-tertiary) 88%, black);
}

.app-button--secondary {
  background: var(--ff-color-primary-bg);
  color: var(--ff-color-primary-text);
  border-color: var(--ff-color-accent-3);
}

.app-button--secondary:hover {
  background: var(--ff-color-secondary-bg);
}

.app-button--ghost {
  background: transparent;
  color: var(--ff-color-accent-1);
}

.app-button--ghost:hover {
  background: var(--ff-color-secondary-bg);
}

.app-button--tonal {
  background: var(--ff-color-secondary-bg);
  color: var(--ff-color-primary-text);
}

.app-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>

