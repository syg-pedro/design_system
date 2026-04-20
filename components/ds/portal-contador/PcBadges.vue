<template>
  <section class="pc-section">
    <div class="pc-head">
      <small>Componentes</small>
      <h2>Badges de Status</h2>
      <p>Usados em <code>DocumentosFiscaisRow</code> para exibir o status de cada NF-e.</p>
    </div>

    <div class="group-label">Status de documento fiscal</div>
    <div class="demo-row">
      <span class="badge badge--success">Autorizada</span>
      <span class="badge badge--warning">Pendente</span>
      <span class="badge badge--warning">Não transmitida</span>
      <span class="badge badge--error">Cancelada</span>
      <span class="badge badge--error">Denegada</span>
      <span class="badge badge--neutral">Inutilizada</span>
    </div>

    <div class="group-label">Tokens por tom</div>
    <div class="token-grid">
      <div class="token-card" v-for="t in badgeTokens" :key="t.tone">
        <span class="badge" :class="`badge--${t.tone}`">{{ t.label }}</span>
        <code>bg: {{ t.bg }}</code>
        <code>text: {{ t.text }}</code>
        <span class="tailwind-hint">Tailwind: {{ t.tw }}</span>
      </div>
    </div>

    <div class="group-label">Estrutura CSS</div>
    <div class="code-block">
      <pre>/* rounded-full = border-radius: 9999px */
.badge {
  display: inline-flex;
  padding: 2px 8px;       /* px-2 py-0.5 */
  border-radius: 9999px;  /* rounded-full */
  font-size: 12px;        /* text-xs */
  font-weight: 500;       /* font-medium */
}</pre>
    </div>
  </section>
</template>

<script setup lang="ts">
const badgeTokens = [
  { tone: 'success', label: 'Autorizada', bg: '--pc-color-success-bg',  text: '--pc-color-success-text', tw: 'bg-emerald-100 text-emerald-800' },
  { tone: 'warning', label: 'Pendente',   bg: '--pc-color-warning-bg',  text: '--pc-color-warning-text', tw: 'bg-amber-100 text-amber-800'   },
  { tone: 'error',   label: 'Cancelada',  bg: '--pc-color-error-bg',    text: '--pc-color-error-text',   tw: 'bg-red-100 text-red-800'       },
  { tone: 'neutral', label: 'Inutilizada',bg: '--pc-color-neutral-bg',  text: '--pc-color-neutral-text', tw: 'bg-slate-100 text-slate-700'   },
]
</script>

<style scoped>
.pc-section { display: grid; gap: 1.5rem; font-family: var(--pc-font-sans, 'Inter', sans-serif); }
.pc-head small { color: var(--pc-color-primary, #2563eb); font-weight: 600; text-transform: uppercase; font-size: 0.72rem; letter-spacing: 0.1em; }
.pc-head h2 { margin: 0.25rem 0 0.35rem; font-size: 1.8rem; font-weight: 700; color: var(--pc-color-text, #0f172a); }
.pc-head p  { margin: 0; color: var(--pc-color-text-muted, #64748b); font-size: 0.88rem; }
.group-label { font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--pc-color-text-muted); }
.demo-row { display: flex; flex-wrap: wrap; gap: 0.5rem; align-items: center; }

.badge {
  display: inline-flex; align-items: center;
  padding: 0.125rem 0.5rem; border-radius: 9999px;
  font-size: 0.75rem; font-weight: 500;
}
.badge--success { background: var(--pc-color-success-bg, #d1fae5); color: var(--pc-color-success-text, #065f46); }
.badge--warning { background: var(--pc-color-warning-bg, #fef3c7); color: var(--pc-color-warning-text, #92400e); }
.badge--error   { background: var(--pc-color-error-bg, #fee2e2);   color: var(--pc-color-error-text, #991b1b);   }
.badge--neutral { background: var(--pc-color-neutral-bg, #f1f5f9); color: var(--pc-color-neutral-text, #334155); }

.token-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px,1fr)); gap: 0.6rem; }
.token-card { display: flex; flex-direction: column; gap: 0.3rem; padding: 0.7rem; background: var(--pc-color-surface, #fff); border: 1px solid var(--pc-color-line, #e2e8f0); border-radius: var(--pc-radius-md, 8px); }
.token-card code { font-size: 0.62rem; color: var(--pc-color-text-muted); }
.tailwind-hint { font-size: 0.6rem; color: var(--pc-color-primary); font-family: monospace; }

.code-block { background: var(--pc-color-surface-2, #f1f5f9); border: 1px solid var(--pc-color-line, #e2e8f0); border-radius: var(--pc-radius-md, 8px); padding: 1rem; }
.code-block pre { margin: 0; font-size: 0.78rem; font-family: var(--pc-font-mono, monospace); color: var(--pc-color-text-soft, #334155); white-space: pre-wrap; }
</style>
