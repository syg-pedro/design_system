<script setup lang="ts">
import type { System, SystemChangeLog } from '~/app/types/domain'

defineProps<{
  system: System
  latestLogs: SystemChangeLog[]
}>()
</script>

<template>
  <NuxtLink
    class="product-card section-card"
    :to="{ path: '/logs_produto', query: { system: system.idSystem } }"
  >
    <img
      class="product-card__logo"
      :src="system.logo || system.icon"
      :alt="system.alias"
    >

    <div class="product-card__body">
      <strong>{{ system.alias }}</strong>

      <div
        v-if="latestLogs.length"
        class="product-card__latest"
      >
        <span class="product-card__latest-title">
          <AppIcon
            name="sparkles"
            :size="14"
          />
          Ultimas entregas
        </span>

        <ul>
          <li
            v-for="log in latestLogs"
            :key="log.id"
          >
            <AppIcon
              name="check"
              :size="14"
            />
            <span>{{ log.title }}</span>
          </li>
        </ul>
      </div>
    </div>
  </NuxtLink>
</template>

<style scoped>
.product-card {
  display: grid;
  gap: 20px;
  padding: 20px;
  border-radius: 15px;
}

.product-card__logo {
  height: 60px;
  object-fit: contain;
}

.product-card__body {
  display: grid;
  gap: 12px;
}

.product-card__latest {
  display: grid;
  gap: 8px;
}

.product-card__latest-title {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  font-weight: 600;
}

.product-card__latest ul {
  display: grid;
  gap: 6px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.product-card__latest li {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: var(--ff-color-secondary-text);
}
</style>

