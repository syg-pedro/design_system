<template>
  <section class="ds-section">
    <div class="ds-section-head">
      <small>Feedback</small>
      <h2>Status tags</h2>
      <p>Pills com dot colorido — mapeamento semântico por palavra-chave.</p>
    </div>

    <div class="sample-panel">
      <div class="tag-row">
        <span class="tag success">Pago</span>
        <span class="tag warning">Pendente</span>
        <span class="tag error">Cancelada</span>
        <span class="tag">Em análise</span>
        <span class="tag info">Emitida</span>
        <span class="tag neutral">Prevista</span>
      </div>

      <div class="tag-table">
        <div class="tag-row-meta" v-for="t in tagExamples" :key="t.variant">
          <span class="tag" :class="t.variant">{{ t.label }}</span>
          <code>.tag.{{ t.variant }}</code>
          <span class="tag-desc">{{ t.use }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const tagExamples = [
  { variant: 'success', label: 'Pago',       use: 'Operação concluída com sucesso' },
  { variant: 'warning', label: 'Pendente',   use: 'Aguarda ação ou aprovação' },
  { variant: 'error',   label: 'Cancelada',  use: 'Operação cancelada ou com falha' },
  { variant: '',        label: 'Em análise', use: 'Estado padrão / informativo (primary)' },
  { variant: 'info',    label: 'Emitida',    use: 'Estado informativo neutro' },
  { variant: 'neutral', label: 'Prevista',   use: 'Estado inativo ou futuro' },
]
</script>

<style scoped>
.ds-section { display: grid; gap: 1.25rem; }
.ds-section-head small { color: var(--ds-primary, #0094d9); font-weight: 600; text-transform: uppercase; font-size: 0.72rem; letter-spacing: 0.1em; }
.ds-section-head h2 { margin: 0.25rem 0 0.35rem; font-size: 1.8rem; font-weight: 400; letter-spacing: -0.015em; }
.ds-section-head p  { margin: 0; color: var(--ds-muted); font-size: 0.88rem; }

.sample-panel { padding: 1.25rem 1.35rem; background: var(--ds-bg); border: 1px solid var(--ds-line); border-radius: 12px; display: grid; gap: 1.25rem; }
.tag-row { display: flex; flex-wrap: wrap; gap: 0.5rem; }

.tag {
  display: inline-flex; align-items: center; gap: 0.4rem;
  padding: 0.22rem 0.6rem 0.22rem 0.55rem;
  border-radius: 999px; font-size: 0.74rem; font-weight: 500;
  background: color-mix(in srgb, var(--ds-primary, #0094d9) 10%, transparent);
  color: var(--ds-primary, #0094d9); line-height: 1.2;
}
.tag::before { content: ""; width: 6px; height: 6px; border-radius: 50%; background: currentColor; flex-shrink: 0; }
.tag.success { background: color-mix(in srgb, var(--ds-success, #3dac00) 12%, transparent); color: #2e8200; }
.tag.warning { background: color-mix(in srgb, var(--ds-warning, #ffb11d) 22%, transparent); color: #946100; }
.tag.error   { background: color-mix(in srgb, var(--ds-error, #ff1414) 10%, transparent); color: var(--ds-error, #ff1414); }
.tag.info    { background: color-mix(in srgb, var(--ds-info, #1c4494) 12%, transparent); color: var(--ds-info, #1c4494); }
.tag.neutral { background: var(--ds-surface-2, #f1f4f9); color: var(--ds-text-soft, #334155); }

.tag-table { display: grid; gap: 0.65rem; }
.tag-row-meta { display: flex; align-items: center; gap: 1rem; padding: 0.55rem 0; border-bottom: 1px solid var(--ds-line-soft); }
.tag-row-meta:last-child { border-bottom: 0; }
.tag-row-meta code { font-size: 0.75rem; color: var(--ds-primary); min-width: 130px; }
.tag-row-meta .tag-desc { font-size: 0.82rem; color: var(--ds-muted); }
</style>
