<script setup lang="ts">
import { computed, ref } from 'vue'
import { useAttachments } from '~/app/composables/useAttachments'
import {
  formatPtBrDate,
  formatTicketStatus,
  formatTicketType,
  type System,
  type SystemChangeLog
} from '~/app/types/domain'

const props = withDefaults(
  defineProps<{
    log: SystemChangeLog
    system?: System | null
    showSystem?: boolean
    showAttachments?: boolean
  }>(),
  {
    system: null,
    showSystem: true,
    showAttachments: true
  }
)

interface PreviewableImage {
  src: string
  alt: string
}

const attachmentsQuery = useAttachments(() =>
  props.showAttachments ? props.log.id : undefined
)

const attachments = computed(() => attachmentsQuery.data.value ?? [])
const imageAttachments = computed(() =>
  attachments.value.filter((attachment) => attachment.kind === 'image')
)
const documentAttachments = computed(() =>
  attachments.value.filter((attachment) => attachment.kind === 'document')
)
const attachmentGalleryImages = computed<PreviewableImage[]>(() =>
  imageAttachments.value.map((attachment, index) => ({
    src: attachment.url,
    alt: buildAttachmentAlt(index)
  }))
)
const activeImageGallery = ref<{
  images: PreviewableImage[]
  initialIndex: number
} | null>(null)

const systemImage = computed(() => props.system?.icon || props.system?.logo || '')

const descriptionHtml = computed(() => normalizeDescriptionHtml(props.log.description))

const releaseTimelineValue = computed(() => {
  if (props.log.releaseQuarter) {
    const match = /^Q([1-4])\s+(\d{4})$/.exec(props.log.releaseQuarter)
    if (match) {
      return `${match[1]}\u00BA trimestre de ${match[2]}`
    }

    return props.log.releaseQuarter
  }

  return props.log.year ? String(props.log.year) : ''
})

const metadataItems = computed(() =>
  [
    {
      label: 'Previsao',
      value: releaseTimelineValue.value
    },
    {
      label: 'Ultima atualizacao',
      value: props.log.lastUpdateAcelerato
        ? formatPtBrDate(props.log.lastUpdateAcelerato)
        : ''
    }
  ].filter((item) => item.value)
)

function normalizeDescriptionHtml(html: string) {
  return (html || '')
    .replace(/<\/?(html|head|body)[^>]*>/gi, '')
    .replace(/<(p|div)\b[^>]*>(?:\s|&nbsp;|<br\s*\/?>)*<\/\1>/gi, '')
    .replace(/<(ul|ol)\b[^>]*>\s*<\/\1>/gi, '')
    .trim()
}

function resolvePreviewSource(image: HTMLImageElement) {
  const anchor = image.closest('a[href]')
  if (anchor instanceof HTMLAnchorElement && anchor.href) {
    return anchor.href
  }

  return image.currentSrc || image.src
}

function buildAttachmentAlt(index: number) {
  return `${props.log.title} - imagem ${index + 1}`
}

function buildPreviewImage(image: HTMLImageElement): PreviewableImage {
  const anchor = image.closest('a[href]')
  const anchorTitle = anchor instanceof HTMLAnchorElement ? anchor.title : ''

  return {
    src: resolvePreviewSource(image),
    alt: image.alt || anchorTitle || props.log.title
  }
}

function handleDescriptionClick(event: MouseEvent) {
  const description = event.currentTarget
  const target = event.target
  if (!(description instanceof HTMLElement) || !(target instanceof HTMLElement)) {
    return
  }

  const image = target.closest('img')
  if (!(image instanceof HTMLImageElement)) {
    return
  }

  event.preventDefault()
  event.stopPropagation()

  const descriptionImages = Array.from(description.querySelectorAll('img'))
  const images = descriptionImages.map(buildPreviewImage).filter((item) => item.src)
  const clickedIndex = descriptionImages.findIndex((candidate) => candidate === image)

  activeImageGallery.value = {
    images: images.length ? images : [buildPreviewImage(image)],
    initialIndex: clickedIndex >= 0 ? clickedIndex : 0
  }
}

function openAttachmentGallery(initialIndex: number) {
  if (!attachmentGalleryImages.value.length) {
    return
  }

  activeImageGallery.value = {
    images: attachmentGalleryImages.value,
    initialIndex: Math.min(
      Math.max(Math.trunc(initialIndex), 0),
      attachmentGalleryImages.value.length - 1
    )
  }
}
</script>

<template>
  <details class="log-card section-card">
    <summary class="log-card__summary">
      <div class="log-card__leading">
        <img
          v-if="props.showSystem && systemImage"
          class="log-card__system"
          :src="systemImage"
          :alt="props.system?.alias || 'Sistema'"
        >
        <div class="log-card__header-text">
          <h3>{{ props.log.title }}</h3>
          <div class="pill-row">
            <AppBadge
              v-if="props.log.type"
              tone="accent"
            >
              {{ formatTicketType(props.log.type) }}
            </AppBadge>
            <AppBadge
              v-if="props.log.status"
              :tone="props.log.status === 'ENTREGUE' ? 'primary' : 'warning'"
            >
              {{ formatTicketStatus(props.log.status) }}
            </AppBadge>
            <AppBadge v-if="props.log.systemVersion">
              {{ props.log.systemVersion }}
            </AppBadge>
          </div>
          <div
            v-if="metadataItems.length"
            class="log-card__meta"
          >
            <span
              v-for="item in metadataItems"
              :key="item.label || item.value"
              class="log-card__meta-item"
            >
              <span
                v-if="item.label"
                class="log-card__meta-label"
              >
                {{ item.label }}
              </span>
              <span class="log-card__meta-value">{{ item.value }}</span>
            </span>
          </div>
        </div>
      </div>
      <span
        class="log-card__summary-trigger"
        aria-hidden="true"
      >
        <span class="log-card__summary-trigger-label log-card__summary-trigger-label--closed">
          Ver mais
        </span>
        <span class="log-card__summary-trigger-label log-card__summary-trigger-label--open">
          Ver menos
        </span>
      </span>
    </summary>

    <div class="log-card__content">
      <div
        class="log-card__description text-body"
        v-html="descriptionHtml"
        @click="handleDescriptionClick"
      />

      <div
        v-if="imageAttachments.length"
        class="log-card__attachment-gallery"
        aria-label="Galeria de imagens anexadas"
      >
        <button
          v-for="(attachment, index) in imageAttachments"
          :key="attachment.id"
          type="button"
          class="log-card__attachment-thumb"
          @click="openAttachmentGallery(index)"
        >
          <img
            class="log-card__attachment-image"
            :src="attachment.url"
            :alt="buildAttachmentAlt(index)"
            loading="lazy"
          >
          <span class="log-card__attachment-overlay">
            <span class="log-card__attachment-caption">
              Imagem {{ index + 1 }}
            </span>
          </span>
        </button>
      </div>

      <div
        v-if="documentAttachments.length"
        class="log-card__attachments"
        aria-label="Lista de arquivos anexados"
      >
        <AttachmentAction
          v-for="attachment in documentAttachments"
          :key="attachment.id"
          :attachment="attachment"
        />
      </div>
    </div>
  </details>

  <ImagePreviewModal
    v-if="activeImageGallery"
    :images="activeImageGallery.images"
    :initial-index="activeImageGallery.initialIndex"
    @close="activeImageGallery = null"
  />
</template>

<style scoped>
.log-card {
  padding: 20px;
}

.log-card__summary {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
  cursor: pointer;
  list-style: none;
}

.log-card__summary::-webkit-details-marker {
  display: none;
}

.log-card__leading {
  display: flex;
  gap: 14px;
  align-items: flex-start;
  flex: 1 1 0;
  min-width: 0;
}

.log-card__system {
  width: 50px;
  height: 50px;
  object-fit: contain;
}

.log-card__header-text {
  display: grid;
  gap: 8px;
  min-width: 0;
}

.log-card__header-text h3 {
  margin: 0;
  font-size: 18px;
}

.log-card__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.log-card__meta-item {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  min-height: 28px;
  max-width: 100%;
  padding: 5px 10px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--ff-color-secondary-bg) 88%, transparent);
  color: var(--ff-color-primary-text);
}

.log-card__meta-label {
  color: var(--ff-color-secondary-text);
  font-size: 11px;
  font-weight: 600;
  white-space: nowrap;
}

.log-card__meta-value {
  font-size: 12px;
  font-weight: 700;
  line-height: 1;
  overflow-wrap: anywhere;
}

.log-card__summary-trigger {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
  flex: none;
  min-height: 30px;
  padding: 0 12px;
  border: 1px solid color-mix(in srgb, var(--ff-color-primary) 18%, var(--ff-color-accent-3));
  border-radius: 999px;
  background: color-mix(in srgb, var(--ff-color-primary) 10%, var(--ff-color-primary-bg));
  color: var(--ff-color-primary);
  font-size: 12px;
  font-weight: 700;
  line-height: 1;
}

.log-card__summary-trigger-label--open {
  display: none;
}

.log-card[open] .log-card__summary-trigger-label--closed {
  display: none;
}

.log-card[open] .log-card__summary-trigger-label--open {
  display: inline;
}

.log-card__content {
  display: grid;
  gap: 16px;
  padding-top: 16px;
}

.log-card__description {
  line-height: 1.45;
}

.log-card__description :deep(p),
.log-card__description :deep(ul),
.log-card__description :deep(ol),
.log-card__description :deep(blockquote),
.log-card__description :deep(pre),
.log-card__description :deep(table) {
  margin: 0 0 12px;
}

.log-card__description :deep(li + li) {
  margin-top: 6px;
}

.log-card__description :deep(ul),
.log-card__description :deep(ol) {
  padding-left: 20px;
}

.log-card__description :deep(strong) {
  font-weight: 700;
}

.log-card__description :deep(a:not(.image)) {
  color: var(--ff-color-primary);
  text-decoration: underline;
  text-underline-offset: 2px;
  font-weight: 600;
  transition: color 0.2s ease;
}

.log-card__description :deep(a:not(.image):hover),
.log-card__description :deep(a:not(.image):focus-visible) {
  color: var(--ff-color-secondary);
}

.log-card__attachments {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax(250px, 320px);
  gap: 12px;
  overflow-x: auto;
  padding-bottom: 4px;
  scrollbar-width: thin;
  scroll-snap-type: x proximity;
}

.log-card__attachment-gallery {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax(220px, 260px);
  gap: 12px;
  overflow-x: auto;
  padding-bottom: 4px;
  scrollbar-width: thin;
  scroll-snap-type: x proximity;
}

.log-card__attachment-thumb {
  position: relative;
  display: block;
  padding: 0;
  border: 1px solid color-mix(in srgb, var(--ff-color-secondary-bg) 62%, transparent);
  border-radius: 18px;
  overflow: hidden;
  background: color-mix(in srgb, var(--ff-color-secondary-bg) 88%, transparent);
  box-shadow: var(--ff-shadow-sm);
  cursor: zoom-in;
  scroll-snap-align: start;
  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease;
}

.log-card__attachment-thumb:hover,
.log-card__attachment-thumb:focus-visible {
  border-color: color-mix(in srgb, var(--ff-color-primary) 40%, transparent);
  box-shadow: var(--ff-shadow-md);
  transform: translateY(-1px);
}

.log-card__attachment-thumb:focus-visible {
  outline: 2px solid color-mix(in srgb, var(--ff-color-primary) 55%, transparent);
  outline-offset: 2px;
}

.log-card__attachment-image {
  display: block;
  width: 100%;
  height: 168px;
  object-fit: cover;
  background:
    linear-gradient(135deg, rgba(18, 34, 46, 0.95), rgba(10, 18, 27, 0.78));
}

.log-card__attachment-overlay {
  position: absolute;
  inset: auto 0 0 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  min-height: 52px;
  padding: 10px 12px;
  background: linear-gradient(180deg, transparent, rgba(7, 12, 18, 0.82) 42%, rgba(7, 12, 18, 0.96));
}

.log-card__attachment-caption {
  display: inline-flex;
  align-items: center;
  min-height: 28px;
  padding: 0 10px;
  border-radius: 999px;
  background: rgba(7, 12, 18, 0.62);
  color: var(--ff-color-white);
  font-size: 12px;
  font-weight: 700;
}

.log-card__description :deep(img) {
  display: block;
  max-width: min(100%, 320px);
  height: auto;
  margin: 18px 0;
  border-radius: 14px;
  box-shadow: var(--ff-shadow-md);
  cursor: zoom-in;
}

.log-card__description :deep(figure) {
  margin: 0;
}

@media (max-width: 767px) {
  .log-card {
    padding: 16px;
  }

  .log-card__summary,
  .log-card__leading {
    gap: 14px;
  }

  .log-card__system {
    width: 42px;
    height: 42px;
  }

  .log-card__meta {
    gap: 6px;
  }

  .log-card__meta-item {
    min-height: 26px;
    padding: 5px 9px;
  }

  .log-card__summary-trigger {
    min-height: 28px;
    padding-inline: 11px;
  }

  .log-card__attachment-gallery {
    grid-auto-columns: minmax(210px, 74vw);
    gap: 10px;
  }

  .log-card__attachments {
    grid-auto-columns: minmax(230px, 78vw);
    gap: 10px;
  }

  .log-card__attachment-image {
    height: 152px;
  }
}

@media (max-width: 479px) {
  .log-card__summary {
    gap: 12px;
  }

  .log-card__leading {
    gap: 12px;
  }

  .log-card__header-text h3 {
    font-size: 17px;
  }

  .log-card__meta {
    gap: 5px;
  }

  .log-card__meta-item {
    min-height: 24px;
    padding: 4px 8px;
  }

  .log-card__meta-label {
    font-size: 10px;
  }

  .log-card__meta-value {
    font-size: 11px;
  }

  .log-card__summary-trigger {
    min-height: 26px;
    padding-inline: 10px;
    font-size: 11px;
  }

  .log-card__attachment-gallery {
    grid-auto-columns: minmax(196px, 82vw);
  }

  .log-card__attachments {
    grid-auto-columns: minmax(220px, 84vw);
  }

  .log-card__attachment-image {
    height: 140px;
  }

  .log-card__attachment-overlay {
    min-height: 48px;
    padding: 8px 10px;
  }

  .log-card__attachment-caption {
    min-height: 26px;
    font-size: 11px;
  }
}
</style>
