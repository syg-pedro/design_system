<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    name: string
    size?: number
    strokeWidth?: number
  }>(),
  {
    size: 20,
    strokeWidth: 1.8
  }
)

const iconPaths: Record<string, string[]> = {
  search: ['M11 19a8 8 0 1 1 5.29-14.02A8 8 0 0 1 11 19Z', 'm21 21-4.35-4.35'],
  filter: ['M4 5h16', 'M7 12h10', 'M10 19h4'],
  'chevron-left': ['m15 18-6-6 6-6'],
  'chevron-right': ['m9 6 6 6-6 6'],
  'chevron-down': ['m6 9 6 6 6-6'],
  'arrow-left': ['M19 12H5', 'm12 19-7-7 7-7'],
  x: ['m18 6-12 12', 'm6 6 12 12'],
  refresh: ['M20 11a8 8 0 0 0-14.9-3M4 13a8 8 0 0 0 14.9 3', 'M20 4v4h-4', 'M4 20v-4h4'],
  sparkles: ['m12 3 1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8L12 3Z', 'm19 15 1 2.2L22 18l-2 .8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z'],
  bulb: ['M9 18h6', 'M10 22h4', 'M12 2a7 7 0 0 0-4 12.7c.56.38 1 1.12 1 1.8V18h6v-1.5c0-.68.43-1.42 1-1.8A7 7 0 0 0 12 2Z'],
  settings: ['M12 8.5A3.5 3.5 0 1 1 8.5 12 3.5 3.5 0 0 1 12 8.5Z', 'M19.4 15a1.7 1.7 0 0 0 .34 1.87l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06A1.7 1.7 0 0 0 15 19.4a1.7 1.7 0 0 0-1 .6 1.7 1.7 0 0 0-.4 1v.2a2 2 0 1 1-4 0v-.1A1.7 1.7 0 0 0 8.4 19a1.7 1.7 0 0 0-1-.3 1.7 1.7 0 0 0-1 .4l-.1.1a2 2 0 0 1-2.8-2.9l.1-.1a1.7 1.7 0 0 0 .4-1 1.7 1.7 0 0 0-.3-1 1.7 1.7 0 0 0-.8-.7H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 .8-.7 1.7 1.7 0 0 0 .3-1 1.7 1.7 0 0 0-.4-1l-.1-.1A2 2 0 0 1 6.6 3l.1.1a1.7 1.7 0 0 0 1 .4 1.7 1.7 0 0 0 1-.3 1.7 1.7 0 0 0 .7-.8V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 .7.8 1.7 1.7 0 0 0 1 .3 1.7 1.7 0 0 0 1-.4l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.4 1 1.7 1.7 0 0 0 .3 1 1.7 1.7 0 0 0 .8.7H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-.8.8'],
  check: ['m20 6-11 11-5-5'],
  calendar: ['M8 2v4', 'M16 2v4', 'M3 10h18', 'M5 6h14a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z'],
  timeline: ['M7 6h10', 'M7 12h5', 'M7 18h12', 'M5 6h.01', 'M5 12h.01', 'M5 18h.01'],
  mail: ['M4 6h16v12H4z', 'm4 7 8 6 8-6'],
  ticket: ['M6 7V5h12v2a2 2 0 0 0 0 4v2a2 2 0 0 0 0 4v2H6v-2a2 2 0 0 0 0-4v-2a2 2 0 0 0 0-4Z'],
  pdf: ['M7 3h7l5 5v13H7z', 'M14 3v5h5', 'M10 17v-4h2a1 1 0 0 1 0 2h-2', 'M14 17v-4h1.5a1.5 1.5 0 0 1 0 3H14', 'M17 13h2'],
  file: ['M7 3h7l5 5v13H7z', 'M14 3v5h5'],
  'file-text': ['M7 3h7l5 5v13H7z', 'M14 3v5h5', 'M10 13h6', 'M10 17h6'],
  presentation: ['M7 3h7l5 5v13H7z', 'M14 3v5h5', 'M10 13h6', 'm10 17 2.5-2.5L15 17l2-2'],
  sheet: ['M7 3h7l5 5v13H7z', 'M14 3v5h5', 'M10 13h6', 'M10 17h6', 'M13 13v4'],
  archive: ['M4 7h16', 'M6 7l1 13h10l1-13', 'M10 11h4', 'M9 4h6'],
  image: ['M5 5h14v14H5z', 'm8 13 2-2 4 4 2-2 3 3', 'M9 9h.01'],
  sun: ['M12 3v2.5', 'M12 18.5V21', 'M4.93 4.93l1.77 1.77', 'M17.3 17.3l1.77 1.77', 'M3 12h2.5', 'M18.5 12H21', 'M4.93 19.07l1.77-1.77', 'M17.3 6.7l1.77-1.77', 'M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z'],
  moon: ['M20 14.5A7.5 7.5 0 1 1 9.5 4 6 6 0 0 0 20 14.5Z']
}

const paths = computed(() => iconPaths[props.name] ?? iconPaths.search)
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    :stroke-width="strokeWidth"
    aria-hidden="true"
  >
    <path
      v-for="path in paths"
      :key="path"
      :d="path"
    />
  </svg>
</template>
