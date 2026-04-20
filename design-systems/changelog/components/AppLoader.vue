<script setup lang="ts">
withDefaults(
  defineProps<{
    title?: string
    message?: string
  }>(),
  {
    title: 'Carregando',
    message: 'Por favor aguarde'
  }
)
</script>

<template>
  <div class="app-loader section-card">
    <img
      class="app-loader__image"
      src="/brand/loader-light.gif"
      alt="Carregando"
    >
    <strong>{{ title }}</strong>
    <span class="text-muted">{{ message }}</span>
  </div>
</template>

<style scoped>
.app-loader {
  display: grid;
  justify-items: center;
  gap: 10px;
  max-width: 250px;
  margin: 0 auto;
  padding: 20px;
}

.app-loader__image {
  width: 100px;
  height: 100px;
  object-fit: cover;
}
</style>

