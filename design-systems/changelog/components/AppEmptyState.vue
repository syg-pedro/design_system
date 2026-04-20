<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string
    icon?: string
  }>(),
  {
    icon: 'filter'
  }
)
</script>

<template>
  <div class="app-empty-state">
    <AppIcon
      :name="icon"
      :size="48"
    />
    <span>{{ title }}</span>
  </div>
</template>

<style scoped>
.app-empty-state {
  display: grid;
  justify-items: center;
  gap: 10px;
  min-height: 200px;
  color: var(--ff-color-secondary-text);
  text-align: center;
}
</style>

