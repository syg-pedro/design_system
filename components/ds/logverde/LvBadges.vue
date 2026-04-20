<template>
  <section class="lv-section">
    <div class="lv-head">
      <small>Componentes</small>
      <h2>StatusTag &amp; Tags</h2>
      <p><code>StatusTag</code> mapeia valores do domínio (string) para severidade PrimeVue automaticamente. <code>Tag</code> PrimeVue com 4 variantes semânticas.</p>
    </div>

    <div class="group-label">StatusTag — mapeamento automático</div>
    <div class="demo-row">
      <div class="tag-demo-item">
        <code class="code-val">"Pago"</code>
        <span class="tag tag--success">Pago</span>
      </div>
      <div class="tag-demo-item">
        <code class="code-val">"Emitida"</code>
        <span class="tag tag--success">Emitida</span>
      </div>
      <div class="tag-demo-item">
        <code class="code-val">"Fechada"</code>
        <span class="tag tag--success">Fechada</span>
      </div>
      <div class="tag-demo-item">
        <code class="code-val">"Aberto"</code>
        <span class="tag tag--warn">Aberto</span>
      </div>
      <div class="tag-demo-item">
        <code class="code-val">"Pendente"</code>
        <span class="tag tag--warn">Pendente</span>
      </div>
      <div class="tag-demo-item">
        <code class="code-val">"Solicitada"</code>
        <span class="tag tag--warn">Solicitada</span>
      </div>
      <div class="tag-demo-item">
        <code class="code-val">"Cancelado"</code>
        <span class="tag tag--danger">Cancelado</span>
      </div>
      <div class="tag-demo-item">
        <code class="code-val">"Negado"</code>
        <span class="tag tag--danger">Negado</span>
      </div>
      <div class="tag-demo-item">
        <code class="code-val">"Em trânsito"</code>
        <span class="tag tag--info">Em trânsito</span>
      </div>
    </div>

    <div class="group-label">Tag PrimeVue — variantes diretas</div>
    <div class="demo-row">
      <span class="tag tag--primary">Primary</span>
      <span class="tag tag--success">Success</span>
      <span class="tag tag--warn">Warn</span>
      <span class="tag tag--danger">Danger</span>
      <span class="tag tag--info">Info</span>
      <span class="tag tag--secondary">Secondary</span>
    </div>

    <div class="group-label">Com ícone PrimeIcons</div>
    <div class="demo-row">
      <span class="tag tag--success"><i class="pi pi-check"></i>Concluído</span>
      <span class="tag tag--warn"><i class="pi pi-clock"></i>Pendente</span>
      <span class="tag tag--danger"><i class="pi pi-times"></i>Recusado</span>
      <span class="tag tag--info"><i class="pi pi-truck"></i>Em trânsito</span>
      <span class="tag tag--primary"><i class="pi pi-file"></i>Emitida</span>
    </div>

    <div class="group-label">Contexto de tabela (DataTableShell)</div>
    <div class="table-preview">
      <table class="mini-table">
        <thead>
          <tr>
            <th>Documento</th><th>Data</th><th>Valor</th><th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in tableRows" :key="row.doc">
            <td class="td-mono">{{ row.doc }}</td>
            <td>{{ row.date }}</td>
            <td class="td-mono">{{ row.value }}</td>
            <td><span class="tag" :class="`tag--${row.severity}`">{{ row.status }}</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script setup lang="ts">
const tableRows = [
  { doc: 'NF-001234', date: '24/04/2026', value: 'R$ 1.850,00', status: 'Pago',       severity: 'success' },
  { doc: 'NF-001235', date: '23/04/2026', value: 'R$ 730,50',   status: 'Pendente',   severity: 'warn' },
  { doc: 'NF-001236', date: '22/04/2026', value: 'R$ 2.100,00', status: 'Emitida',    severity: 'primary' },
  { doc: 'NF-001237', date: '20/04/2026', value: 'R$ 490,00',   status: 'Cancelado',  severity: 'danger' },
  { doc: 'NF-001238', date: '18/04/2026', value: 'R$ 3.200,00', status: 'Em trânsito',severity: 'info' },
]
</script>

<style scoped>
.lv-section { display: grid; gap: 1.5rem; font-family: var(--lv-font, 'Geist', sans-serif); }
.lv-head small { color: var(--lv-primary, #0094d9); font-weight: 600; text-transform: uppercase; font-size: 0.72rem; letter-spacing: 0.1em; }
.lv-head h2 { margin: 0.25rem 0 0.35rem; font-size: 1.8rem; font-weight: 700; color: var(--lv-text, #0f172a); }
.lv-head p  { margin: 0; color: var(--lv-muted, #64748b); font-size: 0.88rem; }
.lv-head code { font-family: var(--lv-font-mono, monospace); font-size: 0.82em; background: var(--lv-surface-2, #f1f4f9); padding: 0.1em 0.35em; border-radius: 4px; }
.group-label { font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: var(--lv-muted, #64748b); }
.demo-row { display: flex; flex-wrap: wrap; align-items: center; gap: 0.75rem; }
.code-val { font-family: var(--lv-font-mono, monospace); font-size: 0.72rem; background: var(--lv-surface-2, #f1f4f9); padding: 0.1em 0.4em; border-radius: 4px; color: var(--lv-muted, #64748b); }
.tag-demo-item { display: flex; flex-direction: column; align-items: center; gap: 0.3rem; }

.tag {
  display: inline-flex; align-items: center; gap: 0.35rem;
  padding: 0.2rem 0.65rem; border-radius: 1rem; font-size: 0.78rem; font-weight: 600;
  font-family: inherit; white-space: nowrap;
}
.tag i { font-size: 0.72rem; }
.tag--primary   { background: color-mix(in srgb, var(--lv-primary, #0094d9) 12%, transparent); color: var(--lv-primary, #0094d9); }
.tag--success   { background: color-mix(in srgb, var(--lv-success, #3dac00) 12%, transparent); color: color-mix(in srgb, var(--lv-success, #3dac00) 85%, black); }
.tag--warn      { background: color-mix(in srgb, var(--lv-warning, #ffb11d) 18%, transparent); color: #7a5900; }
.tag--danger    { background: color-mix(in srgb, var(--lv-error, #ff1414) 10%, transparent); color: var(--lv-error, #ff1414); }
.tag--info      { background: color-mix(in srgb, var(--lv-info, #1c4494) 12%, transparent); color: var(--lv-info, #1c4494); }
.tag--secondary { background: var(--lv-surface-2, #f1f4f9); color: var(--lv-text-soft, #334155); }

.table-preview { border: 1px solid var(--lv-line, #e5e9f0); border-radius: var(--lv-radius, 12px); overflow: hidden; }
.mini-table { width: 100%; border-collapse: collapse; font-size: 0.82rem; }
.mini-table thead { background: var(--lv-surface-2, #f1f4f9); }
.mini-table th { padding: 0.5rem 0.875rem; text-align: left; font-size: 0.72rem; font-weight: 600; color: var(--lv-muted, #64748b); text-transform: uppercase; letter-spacing: 0.04em; }
.mini-table td { padding: 0.625rem 0.875rem; border-top: 1px solid var(--lv-line-soft, #eef1f6); color: var(--lv-text-soft, #334155); }
.td-mono { font-family: var(--lv-font-mono, monospace); font-size: 0.78rem; color: var(--lv-muted, #64748b); }
</style>
