<template>
  <section class="pc-section">
    <div class="pc-head">
      <small>Tipografia</small>
      <h2>Inter + JetBrains Mono</h2>
      <p>Escala tipográfica inspirada no Tailwind. <code>--pc-font-sans</code> e <code>--pc-font-mono</code>.</p>
    </div>

    <div class="group-label">Sans (Inter)</div>
    <div class="type-list">
      <div v-for="t in sansScale" :key="t.label" class="type-row">
        <span class="type-sample" :style="`font-size:${t.size};font-weight:${t.weight};line-height:${t.lh}`">
          {{ t.sample }}
        </span>
        <div class="type-meta">
          <span class="type-name">{{ t.label }}</span>
          <code>{{ t.size }} / {{ t.weight }}</code>
        </div>
      </div>
    </div>

    <div class="group-label">Mono (JetBrains Mono)</div>
    <div class="type-list">
      <div v-for="t in monoScale" :key="t.label" class="type-row">
        <span class="type-mono" :style="`font-size:${t.size};font-weight:${t.weight}`">{{ t.sample }}</span>
        <div class="type-meta">
          <span class="type-name">{{ t.label }}</span>
          <code>{{ t.size }}</code>
        </div>
      </div>
    </div>

    <div class="group-label">Uso nos componentes</div>
    <div class="usage-grid">
      <div class="usage-card" v-for="u in usages" :key="u.context">
        <div class="usage-label">{{ u.context }}</div>
        <div class="usage-example" :style="`font-size:${u.size};font-weight:${u.weight};font-family:${u.mono ? 'JetBrains Mono,monospace' : 'Inter,sans-serif'}`">
          {{ u.sample }}
        </div>
        <code>{{ u.classes }}</code>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const sansScale = [
  { label: '3xl Bold',  size: '30px', weight: 700, lh: '1.2', sample: 'Portal do Contador'     },
  { label: '2xl Bold',  size: '24px', weight: 700, lh: '1.3', sample: 'Bem-vindo de volta'     },
  { label: 'xl Bold',   size: '20px', weight: 700, lh: '1.3', sample: 'Editar Tributação'      },
  { label: 'lg SemiBold', size: '18px', weight: 600, lh: '1.4', sample: 'Documentos Fiscais'  },
  { label: 'base Med',  size: '16px', weight: 500, lh: '1.5', sample: 'Filtrar por período'    },
  { label: 'sm Med',    size: '14px', weight: 500, lh: '1.5', sample: 'Selecionar documentos'  },
  { label: 'xs Sem',    size: '12px', weight: 600, lh: '1.4', sample: 'DATA EMISSÃO / STATUS'  },
]
const monoScale = [
  { label: 'sm Mono', size: '14px', weight: 600, sample: '001-0001 · 52.123.456/0001-00' },
  { label: 'xs Mono', size: '12px', weight: 400, sample: '001-0001 · CNPJ tabular'       },
]
const usages = [
  { context: 'Page heading',   size: '24px', weight: 700, mono: false, sample: 'Documentos Fiscais', classes: 'text-2xl font-bold' },
  { context: 'Section title',  size: '20px', weight: 700, mono: false, sample: 'Identificação',     classes: 'text-xl font-bold'  },
  { context: 'Label',          size: '14px', weight: 500, mono: false, sample: 'Data Emissão',       classes: 'text-sm font-medium text-slate-700' },
  { context: 'Table header',   size: '12px', weight: 600, mono: false, sample: 'RAZÃO SOCIAL',       classes: 'text-xs font-semibold uppercase tracking-wider' },
  { context: 'Product code',   size: '14px', weight: 600, mono: true,  sample: '001-0001',            classes: 'font-mono text-sm font-semibold tabular-nums' },
  { context: 'CNPJ',           size: '12px', weight: 400, mono: true,  sample: '52.123.456/0001-00',  classes: 'font-mono text-xs' },
]
</script>

<style scoped>
.pc-section { display: grid; gap: 1.5rem; font-family: var(--pc-font-sans, 'Inter', sans-serif); }
.pc-head small { color: var(--pc-color-primary, #2563eb); font-weight: 600; text-transform: uppercase; font-size: 0.72rem; letter-spacing: 0.1em; }
.pc-head h2 { margin: 0.25rem 0 0.35rem; font-size: 1.8rem; font-weight: 700; color: var(--pc-color-text, #0f172a); }
.pc-head p  { margin: 0; color: var(--pc-color-text-muted, #64748b); font-size: 0.88rem; }
.group-label { font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--pc-color-text-muted); }

.type-list { display: grid; gap: 0.4rem; }
.type-row {
  display: flex; align-items: baseline; justify-content: space-between; gap: 1rem;
  padding: 0.65rem 0.85rem;
  background: var(--pc-color-surface, #fff);
  border: 1px solid var(--pc-color-line, #e2e8f0);
  border-radius: var(--pc-radius-md, 8px);
}
.type-sample { color: var(--pc-color-text, #0f172a); font-family: var(--pc-font-sans, 'Inter', sans-serif); flex: 1; }
.type-mono   { color: var(--pc-color-text, #0f172a); font-family: var(--pc-font-mono, monospace); flex: 1; }
.type-meta { display: flex; flex-direction: column; align-items: flex-end; gap: 0.1rem; flex-shrink: 0; }
.type-name { font-size: 0.68rem; color: var(--pc-color-text-muted); }
.type-meta code { font-size: 0.62rem; color: var(--pc-color-primary); }

.usage-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 0.6rem; }
.usage-card { padding: 0.75rem; background: var(--pc-color-surface, #fff); border: 1px solid var(--pc-color-line, #e2e8f0); border-radius: var(--pc-radius-md, 8px); display: flex; flex-direction: column; gap: 0.35rem; }
.usage-label { font-size: 0.68rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--pc-color-text-muted); }
.usage-example { color: var(--pc-color-text, #0f172a); }
.usage-card code { font-size: 0.6rem; color: var(--pc-color-primary); }
</style>
