<script setup lang="ts">
const props = defineProps<{
  page: number
  totalPages: number
}>()

const emit = defineEmits<{
  'update:page': [value: number]
}>()

const pages = computed(() => {
  const current = props.page
  const total = props.totalPages
  const values = new Set<number>([1, total, current - 1, current, current + 1, 2, 3, 4])

  return [...values]
    .filter((value) => value >= 1 && value <= total)
    .sort((left, right) => left - right)
})
</script>

<template>
  <div
    v-if="props.totalPages > 1"
    class="app-pagination"
  >
    <AppIconButton
      icon="chevron-left"
      aria-label="Pagina anterior"
      :disabled="props.page <= 1"
      @click="emit('update:page', props.page - 1)"
    />

    <button
      v-for="pageNumber in pages"
      :key="pageNumber"
      class="app-pagination__page"
      :class="{ 'app-pagination__page--active': pageNumber === props.page }"
      type="button"
      @click="emit('update:page', pageNumber)"
    >
      {{ pageNumber }}
    </button>

    <AppIconButton
      icon="chevron-right"
      aria-label="Proxima pagina"
      :disabled="props.page >= props.totalPages"
      @click="emit('update:page', props.page + 1)"
    />
  </div>
</template>

<style scoped>
.app-pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  padding: 24px 0 8px;
}

.app-pagination :deep(.app-icon-button) {
  width: 38px;
  height: 38px;
  border: 1px solid var(--ff-color-accent-3);
  border-radius: 12px;
  background: color-mix(in srgb, var(--ff-color-primary-bg) 90%, transparent);
  color: var(--ff-color-secondary-text);
  box-shadow: var(--ff-shadow-sm);
}

.app-pagination :deep(.app-icon-button:hover:not(:disabled)) {
  background: var(--ff-color-secondary-bg);
  color: var(--ff-color-primary-text);
}

.app-pagination :deep(.app-icon-button:disabled) {
  opacity: 0.45;
  box-shadow: none;
}

.app-pagination__page {
  min-width: 38px;
  height: 38px;
  padding: 0 12px;
  border: 1px solid var(--ff-color-accent-3);
  border-radius: 12px;
  background: color-mix(in srgb, var(--ff-color-primary-bg) 90%, transparent);
  color: var(--ff-color-primary-text);
  font-weight: 700;
  cursor: pointer;
  box-shadow: var(--ff-shadow-sm);
  transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease,
    transform 0.2s ease;
}

.app-pagination__page:hover {
  background: var(--ff-color-secondary-bg);
  border-color: var(--ff-color-accent-2);
}

.app-pagination__page--active {
  background: color-mix(in srgb, var(--ff-color-primary) 88%, black 4%);
  border-color: color-mix(in srgb, var(--ff-color-primary) 70%, white 10%);
  color: var(--ff-color-white);
  box-shadow: 0 8px 18px rgba(0, 148, 217, 0.18);
}

.app-pagination__page--active:hover {
  background: color-mix(in srgb, var(--ff-color-primary) 82%, black 8%);
}

@media (max-width: 479px) {
  .app-pagination {
    gap: 6px;
    padding-top: 20px;
  }

  .app-pagination__page,
  .app-pagination :deep(.app-icon-button) {
    min-width: 34px;
    width: 34px;
    height: 34px;
    border-radius: 10px;
  }
}
</style>

