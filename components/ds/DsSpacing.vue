<template>
  <section class="ds-section">
    <div class="ds-section-head">
      <small>Espaçamento e forma</small>
      <h2>Tokens de espaço e radius</h2>
      <p>Escala de espaçamento em rem e raios de borda padronizados.</p>
    </div>

    <div class="token-panels">
      <div class="token-panel">
        <h3>Radius</h3>
        <div class="radius-list">
          <div v-for="r in radiusTokens" :key="r.name" class="radius-item">
            <div class="radius-box" :style="`border-radius: ${r.value}; width: ${r.size}; height: ${r.size};`"></div>
            <div class="radius-meta">
              <code>--ds-{{ r.name }}</code>
              <span>{{ r.value }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="token-panel">
        <h3>Sombras</h3>
        <div class="shadow-list">
          <div v-for="s in shadowTokens" :key="s.name" class="shadow-item">
            <div class="shadow-box" :style="`box-shadow: ${s.value}`"></div>
            <div class="radius-meta">
              <code>--ds-{{ s.name }}</code>
            </div>
          </div>
        </div>
      </div>

      <div class="token-panel">
        <h3>Transições</h3>
        <div class="transition-list">
          <div v-for="t in transitionTokens" :key="t.name" class="transition-item">
            <button class="t-demo" @click="animate($event)" :data-duration="t.value">Hover me</button>
            <div class="radius-meta">
              <code>--ds-{{ t.name }}</code>
              <span>{{ t.value }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const radiusTokens = [
  { name: 'radius-sm', value: '8px',  size: '48px' },
  { name: 'radius',    value: '12px', size: '56px' },
  { name: 'radius-lg', value: '16px', size: '64px' },
  { name: 'radius-xl', value: '22px', size: '72px' },
]

const shadowTokens = [
  { name: 'shadow-sm', value: '0 1px 2px rgba(15,23,42,0.05)' },
  { name: 'shadow',    value: '0 1px 3px rgba(15,23,42,0.06), 0 8px 24px -8px rgba(15,23,42,0.08)' },
  { name: 'shadow-lg', value: '0 1px 3px rgba(15,23,42,0.06), 0 24px 48px -18px rgba(15,23,42,0.18)' },
]

const transitionTokens = [
  { name: 'transition',      value: '0.22s cubic-bezier(.4,0,.2,1)' },
  { name: 'transition-fast', value: '0.15s cubic-bezier(.4,0,.2,1)' },
]

function animate(e: MouseEvent) {
  const btn = e.currentTarget as HTMLElement
  btn.style.transform = 'scale(0.96)'
  setTimeout(() => { btn.style.transform = '' }, 200)
}
</script>

<style scoped>
.ds-section { display: grid; gap: 1.25rem; }
.ds-section-head small { color: var(--ds-primary, #0094d9); font-weight: 600; text-transform: uppercase; font-size: 0.72rem; letter-spacing: 0.1em; }
.ds-section-head h2 { margin: 0.25rem 0 0.35rem; font-size: 1.8rem; font-weight: 400; letter-spacing: -0.015em; }
.ds-section-head p  { margin: 0; color: var(--ds-muted); font-size: 0.88rem; }

.token-panels { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; }
.token-panel {
  padding: 1.25rem;
  background: var(--ds-bg); border: 1px solid var(--ds-line); border-radius: 12px;
}
.token-panel h3 { margin: 0 0 1rem; font-size: 1rem; font-weight: 600; letter-spacing: -0.01em; }

.radius-list { display: flex; align-items: flex-end; gap: 1rem; flex-wrap: wrap; }
.radius-item { display: grid; gap: 0.5rem; align-items: center; }
.radius-box { background: color-mix(in srgb, var(--ds-primary, #0094d9) 12%, transparent); border: 2px solid var(--ds-primary, #0094d9); }
.radius-meta { display: grid; gap: 0.1rem; }
.radius-meta code { font-size: 0.7rem; color: var(--ds-primary); }
.radius-meta span { font-size: 0.7rem; color: var(--ds-muted); }

.shadow-list { display: grid; gap: 1rem; }
.shadow-item { display: flex; align-items: center; gap: 1rem; }
.shadow-box { width: 56px; height: 40px; border-radius: 8px; background: var(--ds-bg); flex-shrink: 0; }

.transition-list { display: grid; gap: 0.85rem; }
.transition-item { display: flex; align-items: center; gap: 0.75rem; }
.t-demo {
  padding: 0.4rem 0.9rem; border-radius: 8px;
  border: 1px solid var(--ds-line); background: var(--ds-bg); color: var(--ds-text);
  font: inherit; font-size: 0.82rem; cursor: pointer;
  transition: transform var(--ds-transition);
}
.t-demo:hover { background: var(--ds-surface-2); }

@media (max-width: 768px) {
  .token-panels { grid-template-columns: 1fr; }
}
</style>
