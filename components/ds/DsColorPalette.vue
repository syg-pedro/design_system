<template>
  <section class="ds-section">
    <div class="ds-section-head">
      <small>Base visual</small>
      <h2>Paleta da marca</h2>
      <p>Tokens <code>--ds-*</code> aplicados via CSS custom properties e sobrescritíveis por cliente.</p>
    </div>

    <div class="color-grid">
      <div
        v-for="(hex, name) in allColors"
        :key="name"
        class="color-swatch"
        @click="copy(hex)"
        :title="`Copiar ${hex}`"
      >
        <span class="chip" :style="`background: ${hex}`"></span>
        <strong>{{ label(name) }}</strong>
        <code>{{ hex }}</code>
        <span class="token">--ds-{{ name }}</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { DesignSystemColors } from '~/design-systems/types'

const props = defineProps<{ colors: DesignSystemColors }>()

const semanticColors = computed(() => ({
  text:      '#0f172a',
  'text-soft': '#334155',
  muted:     '#64748b',
  faint:     '#94a3b8',
  bg:        '#ffffff',
  surface:   '#f6f8fb',
  'surface-2': '#f1f4f9',
  line:      '#e5e9f0',
}))

const allColors = computed(() => ({
  ...props.colors,
  ...semanticColors.value,
}))

const labels: Record<string, string> = {
  primary: 'Primária', secondary: 'Secundária', tertiary: 'Terciária',
  alternate: 'Alternativa', success: 'Sucesso', warning: 'Aviso',
  error: 'Erro', info: 'Info', text: 'Texto', 'text-soft': 'Texto suave',
  muted: 'Secundário', faint: 'Tênue', bg: 'Fundo', surface: 'Superfície',
  'surface-2': 'Superfície 2', line: 'Borda',
}

function label(name: string) { return labels[name] ?? name }

async function copy(hex: string) {
  try { await navigator.clipboard.writeText(hex) } catch {}
}
</script>

<style scoped>
.ds-section { display: grid; gap: 1.25rem; }
.ds-section-head small { color: var(--ds-primary, #0094d9); font-weight: 600; text-transform: uppercase; font-size: 0.72rem; letter-spacing: 0.1em; }
.ds-section-head h2 { margin: 0.25rem 0 0.35rem; font-size: 1.8rem; font-weight: 400; letter-spacing: -0.015em; }
.ds-section-head p  { margin: 0; color: var(--ds-muted); font-size: 0.88rem; }

.color-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 0.75rem;
}
.color-swatch {
  display: grid; gap: 0.45rem;
  padding: 0.75rem;
  background: var(--ds-bg, #fff);
  border: 1px solid var(--ds-line, #e5e9f0);
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.15s;
}
.color-swatch:hover { border-color: var(--ds-faint); box-shadow: 0 2px 8px rgba(0,0,0,0.06); }
.chip { display: block; height: 56px; border-radius: 8px; box-shadow: inset 0 0 0 1px rgba(0,0,0,0.06); }
.color-swatch strong { font-size: 0.78rem; font-weight: 600; color: var(--ds-text); }
.color-swatch code  { color: var(--ds-muted); font-size: 0.72rem; }
.token { font-size: 0.65rem; color: var(--ds-faint); font-family: var(--ds-font-mono); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
</style>
