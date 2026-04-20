<template>
  <div :class="{ 'app-dark': darkMode }">
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
const { darkMode, init } = useDesignSystem()

onMounted(() => {
  init()
})
</script>

<style>
html, body, #__nuxt {
  height: 100%;
  min-height: 100%;
}
</style>
