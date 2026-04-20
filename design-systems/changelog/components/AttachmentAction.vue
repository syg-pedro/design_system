<script setup lang="ts">
import { computed } from 'vue'
import {
  formatAttachmentLabel,
  getAttachmentExtension,
  resolveAttachmentIconName,
  type Attachment
} from '~/app/types/domain'

const props = defineProps<{
  attachment: Attachment
}>()

const attachmentIcon = computed(() => resolveAttachmentIconName(props.attachment.url))
const attachmentLabel = computed(() => formatAttachmentLabel(props.attachment.url))
const attachmentMeta = computed(() => {
  const extension = getAttachmentExtension(props.attachment.url)
  return extension ? extension.toUpperCase() : 'Arquivo'
})
</script>

<template>
  <a
    class="attachment-action"
    :href="props.attachment.url"
    target="_blank"
    rel="noopener noreferrer"
  >
    <span class="attachment-action__icon">
      <AppIcon :name="attachmentIcon" />
    </span>
    <span class="attachment-action__content">
      <span class="attachment-action__label">{{ attachmentLabel }}</span>
      <span class="attachment-action__meta">{{ attachmentMeta }}</span>
    </span>
  </a>
</template>

<style scoped>
.attachment-action {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  align-items: center;
  gap: 12px;
  width: 100%;
  min-height: 82px;
  padding: 10px 14px;
  border: 1px solid color-mix(in srgb, var(--ff-color-primary) 20%, var(--ff-color-accent-3));
  border-radius: 14px;
  background: color-mix(in srgb, var(--ff-color-primary) 10%, var(--ff-color-primary-bg));
  color: var(--ff-color-primary-text);
  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    background-color 0.2s ease,
    box-shadow 0.2s ease;
}

.attachment-action:hover,
.attachment-action:focus-visible {
  background: color-mix(in srgb, var(--ff-color-primary) 14%, var(--ff-color-primary-bg));
  border-color: color-mix(in srgb, var(--ff-color-primary) 36%, var(--ff-color-accent-3));
  box-shadow: var(--ff-shadow-md);
  transform: translateY(-1px);
}

.attachment-action:focus-visible {
  outline: 2px solid color-mix(in srgb, var(--ff-color-primary) 35%, transparent);
  outline-offset: 2px;
}

.attachment-action__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  flex: none;
  border-radius: 10px;
  background: color-mix(in srgb, var(--ff-color-primary) 88%, black);
  color: var(--ff-color-white);
}

.attachment-action__content {
  display: grid;
  gap: 4px;
  min-width: 0;
}

.attachment-action__label {
  font-size: 14px;
  font-weight: 700;
  line-height: 1.25;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: break-word;
}

.attachment-action__meta {
  color: var(--ff-color-secondary-text);
  font-size: 12px;
  line-height: 1.2;
}

@media (max-width: 479px) {
  .attachment-action__label {
    font-size: 13px;
  }

  .attachment-action__meta {
    font-size: 11px;
  }
}
</style>

