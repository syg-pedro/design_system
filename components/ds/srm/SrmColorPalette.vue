<template>
  <section class="srm-section">
    <div class="srm-head">
      <small>Fundações</small>
      <h2>Paleta de Cores</h2>
      <p>SRM é dark-first — <code>:root</code> define o tema escuro, <code>[data-theme="light"]</code> sobrescreve para claro.</p>
    </div>

    <div class="group-label">Primária</div>
    <div class="palette-row">
      <div v-for="s in primary" :key="s.name" class="swatch" :style="{ background: s.hex, color: '#fff' }">
        <span class="swatch-name">{{ s.name }}</span>
        <span class="swatch-hex">{{ s.hex }}</span>
      </div>
    </div>

    <div class="group-label">Superfícies — Dark (padrão)</div>
    <div class="palette-row">
      <div v-for="s in darkSurfaces" :key="s.name" class="swatch" :style="{ background: s.hex, color: '#fff', border: '1px solid rgba(255,255,255,0.1)' }">
        <span class="swatch-name">{{ s.name }}</span>
        <span class="swatch-hex">{{ s.hex }}</span>
      </div>
    </div>

    <div class="group-label">Superfícies — Light</div>
    <div class="palette-row">
      <div v-for="s in lightSurfaces" :key="s.name" class="swatch" :style="{ background: s.hex, color: s.dark ? '#fff' : '#333', border: '1px solid #e0e0e0' }">
        <span class="swatch-name">{{ s.name }}</span>
        <span class="swatch-hex">{{ s.hex }}</span>
      </div>
    </div>

    <div class="group-label">Status de Ocorrências</div>
    <div class="palette-row">
      <div v-for="s in status" :key="s.name" class="swatch" :style="{ background: s.bg, color: s.color }">
        <span class="swatch-name">{{ s.name }}</span>
        <span class="swatch-hex">{{ s.hex }}</span>
      </div>
    </div>

    <div class="group-label">Semânticas</div>
    <div class="palette-row">
      <div v-for="s in semantic" :key="s.name" class="swatch" :style="{ background: s.hex, color: '#fff' }">
        <span class="swatch-name">{{ s.name }}</span>
        <span class="swatch-hex">{{ s.hex }}</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const primary = [
  { name: 'primary',       hex: '#0099ff' },
  { name: 'primary-dark',  hex: '#0077be' },
  { name: 'primary-soft',  hex: 'rgba(0,153,255,0.1)' },
]
const darkSurfaces = [
  { name: 'bg',       hex: '#0f172a' },
  { name: 'surface',  hex: '#1e293b' },
  { name: 'border',   hex: '#333333' },
]
const lightSurfaces = [
  { name: 'bg',       hex: '#f5f7fa' },
  { name: 'surface',  hex: '#ffffff' },
  { name: 'border',   hex: '#e0e0e0' },
  { name: 'text',     hex: '#333333', dark: true },
  { name: 'muted',    hex: '#666666', dark: true },
]
const status = [
  { name: 'Finalizado',     hex: '#4ade80', bg: 'rgba(74,222,128,0.12)',  color: '#4ade80' },
  { name: 'Acompanhamento', hex: '#fbbf24', bg: 'rgba(251,191,36,0.12)',  color: '#fbbf24' },
  { name: 'Pendente',       hex: '#f87171', bg: 'rgba(248,113,113,0.12)', color: '#f87171' },
  { name: 'Vencido',        hex: '#ef4444', bg: 'rgba(239,68,68,0.12)',   color: '#ef4444' },
]
const semantic = [
  { name: 'success', hex: '#10b981' },
  { name: 'warning', hex: '#f59e0b' },
  { name: 'danger',  hex: '#ef4444' },
  { name: 'info',    hex: '#3b82f6' },
]
</script>

<style scoped>
.srm-section { display: grid; gap: 1.5rem; font-family: var(--srm-font-sans, 'Inter', sans-serif); }
.srm-head small { color: var(--srm-color-primary, #0099ff); font-weight: 600; text-transform: uppercase; font-size: 0.72rem; letter-spacing: 0.1em; }
.srm-head h2 { margin: 0.25rem 0 0.35rem; font-size: 1.8rem; font-weight: 700; color: var(--srm-color-text, #fff); }
.srm-head p  { margin: 0; color: var(--srm-color-text-muted, #aaa); font-size: 0.88rem; }
.srm-head code { font-family: var(--srm-font-mono, monospace); font-size: 0.8em; background: var(--srm-color-hover, rgba(255,255,255,.1)); padding: 0.1em 0.35em; border-radius: 4px; }
.group-label { font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: var(--srm-color-text-muted, #aaa); }
.palette-row { display: flex; flex-wrap: wrap; gap: 0.5rem; }
.swatch { width: 110px; height: 80px; border-radius: var(--srm-radius-lg, 8px); display: flex; flex-direction: column; justify-content: flex-end; padding: 0.45rem 0.55rem; }
.swatch-name { font-size: 0.72rem; font-weight: 600; }
.swatch-hex  { font-size: 0.65rem; opacity: 0.75; font-family: var(--srm-font-mono, monospace); }
</style>
