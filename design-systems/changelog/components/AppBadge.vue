<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    tone?: 'neutral' | 'primary' | 'success' | 'warning' | 'info' | 'accent'
  }>(),
  {
    tone: 'neutral'
  }
)
</script>

<template>
  <span
    class="app-badge"
    :class="`app-badge--${props.tone}`"
  >
    <slot />
  </span>
</template>

<style scoped>
.app-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  min-height: 24px;
  padding: 4px 8px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 600;
}

.app-badge--neutral {
  background: var(--ff-color-secondary-bg);
  color: var(--ff-color-primary-text);
}

.app-badge--primary {
  background: var(--ff-color-primary);
  color: var(--ff-color-white);
}

.app-badge--success {
  background: var(--ff-color-bg-success);
  color: var(--ff-color-success);
}

.app-badge--warning {
  background: var(--ff-color-bg-warning);
  color: #8a5b00;
}

.app-badge--info {
  background: var(--ff-color-bg-info);
  color: var(--ff-color-info);
}

.app-badge--accent {
  background: var(--ff-color-alternate);
  color: var(--ff-color-white);
}
</style>

