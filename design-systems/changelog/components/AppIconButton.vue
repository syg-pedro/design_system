<script setup lang="ts">
withDefaults(
  defineProps<{
    icon: string
    variant?: 'soft' | 'filled'
    disabled?: boolean
    ariaLabel?: string
  }>(),
  {
    variant: 'soft',
    disabled: false,
    ariaLabel: undefined
  }
)
</script>

<template>
  <button
    class="app-icon-button"
    :class="`app-icon-button--${variant}`"
    type="button"
    :aria-label="ariaLabel"
    :disabled="disabled"
  >
    <AppIcon :name="icon" />
  </button>
</template>

<style scoped>
.app-icon-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 0;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease;
}

.app-icon-button--soft {
  background: transparent;
  color: var(--ff-color-accent-1);
}

.app-icon-button--soft:hover {
  background: var(--ff-color-accent-3);
}

.app-icon-button--filled {
  background: var(--ff-color-tertiary);
  color: var(--ff-color-white);
}

.app-icon-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
