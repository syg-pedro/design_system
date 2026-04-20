<template>
  <section class="vv-section">
    <div class="vv-head">
      <small>Fundações</small>
      <h2>Paleta de Cores</h2>
      <p>Cores derivadas da escala green/gray do Tailwind CSS, com brand greens específicos do ViraVerde.</p>
    </div>

    <div class="group-label">Primárias</div>
    <div class="palette-row">
      <div v-for="swatch in primary" :key="swatch.name" class="swatch" :style="{ background: swatch.hex }">
        <span class="swatch-name">{{ swatch.name }}</span>
        <span class="swatch-hex">{{ swatch.hex }}</span>
      </div>
    </div>

    <div class="group-label">Brand Greens</div>
    <div class="palette-row">
      <div v-for="swatch in brand" :key="swatch.name" class="swatch" :style="{ background: swatch.hex }">
        <span class="swatch-name">{{ swatch.name }}</span>
        <span class="swatch-hex">{{ swatch.hex }}</span>
      </div>
    </div>

    <div class="group-label">Semânticas</div>
    <div class="palette-row">
      <div v-for="swatch in semantic" :key="swatch.name" class="swatch" :style="{ background: swatch.hex }">
        <span class="swatch-name">{{ swatch.name }}</span>
        <span class="swatch-hex">{{ swatch.hex }}</span>
      </div>
    </div>

    <div class="group-label">Neutros (Gray)</div>
    <div class="palette-row">
      <div v-for="swatch in neutrals" :key="swatch.name" class="swatch" :style="{ background: swatch.hex, color: swatch.dark ? '#fff' : '#111' }">
        <span class="swatch-name">{{ swatch.name }}</span>
        <span class="swatch-hex">{{ swatch.hex }}</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const primary = [
  { name: 'green-500',  hex: '#22c55e' },
  { name: 'green-600',  hex: '#16a34a' },
  { name: 'green-700',  hex: '#15803d' },
  { name: 'green-800',  hex: '#166534' },
  { name: 'green-50',   hex: '#f0fdf4' },
  { name: 'green-100',  hex: '#dcfce7' },
  { name: 'green-300',  hex: '#86efac' },
]
const brand = [
  { name: 'brand',       hex: '#2E7D32' },
  { name: 'brand-light', hex: '#4CAF50' },
  { name: 'brand-dark',  hex: '#1B5E20' },
]
const semantic = [
  { name: 'success',   hex: '#16a34a' },
  { name: 'warning',   hex: '#d97706' },
  { name: 'error',     hex: '#dc2626' },
  { name: 'info',      hex: '#2563eb' },
  { name: 'amber-100', hex: '#fef3c7' },
  { name: 'red-100',   hex: '#fee2e2' },
  { name: 'blue-100',  hex: '#dbeafe' },
]
const neutrals = [
  { name: 'white',    hex: '#ffffff' },
  { name: 'gray-50',  hex: '#f9fafb' },
  { name: 'gray-100', hex: '#f3f4f6' },
  { name: 'gray-200', hex: '#e5e7eb' },
  { name: 'gray-300', hex: '#d1d5db' },
  { name: 'gray-400', hex: '#9ca3af' },
  { name: 'gray-500', hex: '#6b7280', dark: true },
  { name: 'gray-700', hex: '#374151', dark: true },
  { name: 'gray-900', hex: '#111827', dark: true },
]
</script>

<style scoped>
.vv-section { display: grid; gap: 1.5rem; font-family: var(--vv-font-sans, 'Inter', sans-serif); }
.vv-head small { color: var(--vv-color-primary, #16a34a); font-weight: 600; text-transform: uppercase; font-size: 0.72rem; letter-spacing: 0.1em; }
.vv-head h2 { margin: 0.25rem 0 0.35rem; font-size: 1.8rem; font-weight: 700; color: var(--vv-color-text, #111827); }
.vv-head p  { margin: 0; color: var(--vv-color-text-muted, #6b7280); font-size: 0.88rem; }
.group-label { font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: var(--vv-color-text-muted, #6b7280); }
.palette-row { display: flex; flex-wrap: wrap; gap: 0.5rem; }
.swatch {
  width: 96px; height: 80px; border-radius: var(--vv-radius-md, 8px);
  display: flex; flex-direction: column; justify-content: flex-end; padding: 0.4rem 0.5rem;
  border: 1px solid rgba(0,0,0,0.06);
}
.swatch-name { font-size: 0.7rem; font-weight: 600; color: inherit; }
.swatch-hex  { font-size: 0.65rem; opacity: 0.75; color: inherit; font-family: var(--vv-font-mono, monospace); }
</style>
