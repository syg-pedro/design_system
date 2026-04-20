<template>
  <section class="lv-section">
    <div class="lv-head">
      <small>Fundações</small>
      <h2>Paleta de Cores</h2>
      <p>Tokens <code>--lv-*</code> documentados em <code>assets/css/tokens.css</code>. Cores da marca substituíveis por cliente via <code>useThemeTokens</code>.</p>
    </div>

    <div class="group-label">Marca (sobrescritíveis por cliente)</div>
    <div class="palette-row">
      <div v-for="s in brand" :key="s.name" class="swatch" :style="{ background: s.hex, color: '#fff' }">
        <span class="swatch-var">{{ s.var }}</span>
        <span class="swatch-hex">{{ s.hex }}</span>
      </div>
    </div>

    <div class="group-label">Status</div>
    <div class="palette-row">
      <div v-for="s in status" :key="s.name" class="swatch" :style="{ background: s.hex, color: '#fff' }">
        <span class="swatch-var">{{ s.var }}</span>
        <span class="swatch-hex">{{ s.hex }}</span>
      </div>
    </div>

    <div class="group-label">Superfícies — Claro</div>
    <div class="palette-row">
      <div v-for="s in surfacesLight" :key="s.name" class="swatch" :style="{ background: s.hex, color: s.dark ? '#fff' : '#0f172a', border: '1px solid #e5e9f0' }">
        <span class="swatch-var">{{ s.var }}</span>
        <span class="swatch-hex">{{ s.hex }}</span>
      </div>
    </div>

    <div class="group-label">Superfícies — Escuro</div>
    <div class="palette-row">
      <div v-for="s in surfacesDark" :key="s.name" class="swatch" :style="{ background: s.hex, color: '#e2e8f0', border: '1px solid #1e293b' }">
        <span class="swatch-var">{{ s.var }}</span>
        <span class="swatch-hex">{{ s.hex }}</span>
      </div>
    </div>

    <div class="group-label">Escala PrimeVue (sky)</div>
    <div class="palette-row">
      <div v-for="s in primeScale" :key="s.name" class="swatch swatch--sm" :style="{ background: s.hex, color: s.light ? '#0f172a' : '#fff' }">
        <span class="swatch-var">{{ s.name }}</span>
        <span class="swatch-hex">{{ s.hex }}</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const brand = [
  { var: '--lv-primary',   name: 'primary',   hex: '#0094d9' },
  { var: '--lv-secondary', name: 'secondary',  hex: '#0066b2' },
  { var: '--lv-tertiary',  name: 'tertiary',   hex: '#79b83e' },
  { var: '--lv-alternate', name: 'alternate',  hex: '#f3943d' },
]
const status = [
  { var: '--lv-success', name: 'success', hex: '#3dac00' },
  { var: '--lv-warning', name: 'warning', hex: '#ffb11d' },
  { var: '--lv-error',   name: 'error',   hex: '#ff1414' },
  { var: '--lv-info',    name: 'info',    hex: '#1c4494' },
]
const surfacesLight = [
  { var: '--lv-bg',       name: 'bg',       hex: '#ffffff' },
  { var: '--lv-surface',  name: 'surface',  hex: '#f6f8fb' },
  { var: '--lv-surface-2',name: 'surface-2',hex: '#f1f4f9' },
  { var: '--lv-line',     name: 'line',     hex: '#e5e9f0' },
  { var: '--lv-text',     name: 'text',     hex: '#0f172a', dark: true },
  { var: '--lv-muted',    name: 'muted',    hex: '#64748b', dark: true },
]
const surfacesDark = [
  { var: '--lv-bg',       name: 'bg',      hex: '#0b1220' },
  { var: '--lv-surface',  name: 'surface', hex: '#070c17' },
  { var: '--lv-surface-2',name: 'surface-2',hex: '#0f1729' },
  { var: '--lv-line',     name: 'line',    hex: '#1e293b' },
  { var: '--lv-dk-input', name: 'dk-input',hex: '#111e35' },
  { var: '--lv-dk-border',name: 'dk-border',hex: '#1e3050' },
]
const primeScale = [
  { name: 'p-50',  hex: '#f0f9ff', light: true },
  { name: 'p-100', hex: '#e0f2fe', light: true },
  { name: 'p-200', hex: '#bae6fd', light: true },
  { name: 'p-300', hex: '#7dd3fc', light: true },
  { name: 'p-400', hex: '#38bdf8' },
  { name: 'p-500', hex: '#0094d9' },
  { name: 'p-600', hex: '#0066b2' },
  { name: 'p-700', hex: '#005090' },
  { name: 'p-800', hex: '#003c6e' },
  { name: 'p-900', hex: '#002a4f' },
  { name: 'p-950', hex: '#001a31' },
]
</script>

<style scoped>
.lv-section { display: grid; gap: 1.5rem; font-family: var(--lv-font, 'Geist', sans-serif); }
.lv-head small { color: var(--lv-primary, #0094d9); font-weight: 600; text-transform: uppercase; font-size: 0.72rem; letter-spacing: 0.1em; }
.lv-head h2 { margin: 0.25rem 0 0.35rem; font-size: 1.8rem; font-weight: 700; color: var(--lv-text, #0f172a); }
.lv-head p  { margin: 0; color: var(--lv-muted, #64748b); font-size: 0.88rem; }
.lv-head code { font-family: var(--lv-font-mono, monospace); font-size: 0.82em; background: var(--lv-surface-2, #f1f4f9); padding: 0.1em 0.35em; border-radius: 4px; }
.group-label { font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: var(--lv-muted, #64748b); }
.palette-row { display: flex; flex-wrap: wrap; gap: 0.5rem; }
.swatch { width: 110px; height: 80px; border-radius: var(--lv-radius-sm, 8px); display: flex; flex-direction: column; justify-content: flex-end; padding: 0.45rem 0.55rem; }
.swatch--sm { width: 76px; height: 64px; }
.swatch-var { font-size: 0.65rem; font-weight: 600; font-family: var(--lv-font-mono, monospace); }
.swatch-hex { font-size: 0.62rem; opacity: 0.75; font-family: var(--lv-font-mono, monospace); }
</style>
