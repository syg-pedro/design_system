<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title?: string
    description?: string
    width?: string
    closable?: boolean
  }>(),
  {
    title: '',
    description: '',
    width: '455px',
    closable: true
  }
)

const emit = defineEmits<{
  close: []
}>()
</script>

<template>
  <Teleport to="body">
    <div
      class="app-modal"
      @click.self="emit('close')"
    >
      <div
        class="app-modal__panel"
        :style="{ maxWidth: props.width }"
      >
        <div
          v-if="props.closable"
          class="app-modal__close"
        >
          <AppIconButton
            icon="x"
            aria-label="Fechar modal"
            @click="emit('close')"
          />
        </div>

        <div
          v-if="props.title || props.description"
          class="app-modal__header"
        >
          <h3
            v-if="props.title"
            class="app-modal__title"
          >
            {{ props.title }}
          </h3>
          <p
            v-if="props.description"
            class="app-modal__description"
          >
            {{ props.description }}
          </p>
        </div>

        <div class="app-modal__body">
          <slot />
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.app-modal {
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: grid;
  place-items: center;
  padding: 20px;
  background: rgba(0, 0, 0, 0.35);
}

.app-modal__panel {
  width: min(100%, 455px);
  border-radius: 20px;
  background: var(--ff-color-primary-bg);
  box-shadow: var(--ff-shadow-xl);
  padding: 20px;
}

.app-modal__close {
  display: flex;
  justify-content: flex-end;
}

.app-modal__header {
  display: grid;
  gap: 10px;
  margin-bottom: 16px;
}

.app-modal__title {
  margin: 0;
  font-size: 28px;
  line-height: 1.1;
}

.app-modal__description {
  margin: 0;
  color: var(--ff-color-secondary-text);
}
</style>

