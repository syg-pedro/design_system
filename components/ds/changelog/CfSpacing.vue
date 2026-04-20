<template>
  <section class="ds-section">
    <div class="ds-head">
      <small>Tokens</small>
      <h2>Espaçamento &amp; Radius</h2>
      <p>Escala <code>--ff-space-*</code> e <code>--ff-radius-*</code>.</p>
    </div>

    <div class="group-label">Espaçamento</div>
    <div class="space-list">
      <div v-for="s in spacing" :key="s.token" class="space-row">
        <div class="space-bar" :style="`width:${s.px}; height:20px; background:var(--ff-color-primary,#0094d9); border-radius:4px;`"></div>
        <code class="space-token">{{ s.token }}</code>
        <span class="space-val">{{ s.px }}</span>
      </div>
    </div>

    <div class="group-label">Radius</div>
    <div class="radius-row">
      <div v-for="r in radii" :key="r.token" class="radius-card">
        <div class="radius-preview" :style="`border-radius:${r.value}`"></div>
        <code>{{ r.token }}</code>
        <span>{{ r.value }}</span>
      </div>
    </div>

    <div class="group-label">Sombras</div>
    <div class="shadow-row">
      <div v-for="s in shadows" :key="s.token" class="shadow-card" :style="`box-shadow:${s.value}`">
        <code>{{ s.token }}</code>
        <span>{{ s.label }}</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const spacing = [
  { token: '--ff-space-xs', px: '4px'  },
  { token: '--ff-space-sm', px: '8px'  },
  { token: '--ff-space-md', px: '16px' },
  { token: '--ff-space-lg', px: '24px' },
  { token: '--ff-space-xl', px: '32px' },
]
const radii = [
  { token: '--ff-radius-sm',   value: '8px'    },
  { token: '--ff-radius-md',   value: '16px'   },
  { token: '--ff-radius-lg',   value: '24px'   },
  { token: '--ff-radius-full', value: '9999px' },
]
const shadows = [
  { token: '--ff-shadow-sm', value: '0 1px 3px rgba(0,0,0,0.1)',   label: 'sm' },
  { token: '--ff-shadow-md', value: '0 3px 6px rgba(0,0,0,0.1)',   label: 'md' },
  { token: '--ff-shadow-lg', value: '0 8px 15px rgba(0,0,0,0.1)',  label: 'lg' },
  { token: '--ff-shadow-xl', value: '0 16px 25px rgba(0,0,0,0.1)', label: 'xl' },
]
</script>

<style scoped>
.ds-section { display: grid; gap: 1.5rem; }
.ds-head small { color: #79b83e; font-weight: 600; text-transform: uppercase; font-size: 0.72rem; letter-spacing: 0.1em; }
.ds-head h2 { margin: 0.25rem 0 0.35rem; font-size: 1.8rem; font-weight: 600; }
.ds-head p  { margin: 0; color: var(--ff-color-secondary-text, #979ca3); font-size: 0.88rem; }
.group-label { font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--ff-color-secondary-text); }

.space-list { display: grid; gap: 0.5rem; }
.space-row { display: flex; align-items: center; gap: 1rem; }
.space-token { font-size: 0.75rem; color: var(--ff-color-secondary-text); min-width: 160px; }
.space-val { font-size: 0.75rem; color: var(--ff-color-accent-2,#757575); font-family: monospace; }

.radius-row { display: flex; flex-wrap: wrap; gap: 0.75rem; }
.radius-card { display: flex; flex-direction: column; align-items: center; gap: 0.4rem; padding: 0.75rem; background: var(--ff-color-primary-bg,#fff); border: 1px solid var(--ff-color-accent-3,#e0e0e0); border-radius: 10px; min-width: 100px; }
.radius-preview { width: 56px; height: 56px; background: var(--ff-color-sub-primary,#d8edff); border: 2px solid var(--ff-color-primary,#0094d9); }
.radius-card code { font-size: 0.65rem; color: var(--ff-color-secondary-text); text-align: center; }
.radius-card span { font-size: 0.72rem; font-weight: 600; color: var(--ff-color-primary-text); }

.shadow-row { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px,1fr)); gap: 0.75rem; }
.shadow-card { padding: 1rem 0.75rem; background: var(--ff-color-primary-bg,#fff); border-radius: 12px; display: flex; flex-direction: column; gap: 0.25rem; }
.shadow-card code { font-size: 0.65rem; color: var(--ff-color-secondary-text); }
.shadow-card span { font-size: 0.78rem; font-weight: 600; color: var(--ff-color-primary-text); }
</style>
