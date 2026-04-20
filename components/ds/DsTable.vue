<template>
  <section class="ds-section">
    <div class="ds-section-head">
      <small>Dados</small>
      <h2>DataTable</h2>
      <p>Tabela com cabeçalho em uppercase, hover em linha, paginação e ações inline.</p>
    </div>

    <div class="toolbar">
      <div class="toolbar-search">
        <i class="pi pi-search"></i>
        <input type="search" placeholder="Buscar boleto ou movimento…" />
      </div>
      <div class="spacer"></div>
      <button class="chip active">Todos</button>
      <button class="chip">Pagos</button>
      <button class="chip">Em aberto</button>
    </div>

    <div class="table-shell">
      <table class="table">
        <thead>
          <tr>
            <th>Boleto</th>
            <th>Status</th>
            <th>Data</th>
            <th>Movimento</th>
            <th class="num">Peso líquido</th>
            <th class="actions-col">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in rows" :key="row.id">
            <td class="mono">{{ row.id }}</td>
            <td><span class="tag" :class="row.statusClass">{{ row.status }}</span></td>
            <td>{{ row.date }}</td>
            <td>{{ row.desc }}</td>
            <td class="num">{{ row.weight }}</td>
            <td class="actions-col">
              <button class="btn-icon"><i class="pi pi-eye"></i></button>
              <button class="btn-icon"><i class="pi pi-download"></i></button>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="pagination">
        <span>Mostrando 1–5 de 24</span>
        <div class="pages">
          <button class="pg"><i class="pi pi-angle-left"></i></button>
          <button class="pg active">1</button>
          <button class="pg">2</button>
          <button class="pg">3</button>
          <button class="pg"><i class="pi pi-angle-right"></i></button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const rows = [
  { id: '102948', status: 'Pago',       statusClass: 'success', date: '12/04/2026', desc: 'Entrada papel',     weight: '1.280 kg' },
  { id: '102949', status: 'Aberto',     statusClass: 'warning', date: '13/04/2026', desc: 'Saída plástico',    weight: '860 kg' },
  { id: '102950', status: 'Pago',       statusClass: 'success', date: '14/04/2026', desc: 'Entrada metal',     weight: '540 kg' },
  { id: '102951', status: 'Cancelado',  statusClass: 'error',   date: '14/04/2026', desc: 'Entrada vidro',     weight: '—' },
  { id: '102952', status: 'Pago',       statusClass: 'success', date: '15/04/2026', desc: 'Saída eletrônico',  weight: '220 kg' },
]
</script>

<style scoped>
.ds-section { display: grid; gap: 1.25rem; }
.ds-section-head small { color: var(--ds-primary, #0094d9); font-weight: 600; text-transform: uppercase; font-size: 0.72rem; letter-spacing: 0.1em; }
.ds-section-head h2 { margin: 0.25rem 0 0.35rem; font-size: 1.8rem; font-weight: 400; letter-spacing: -0.015em; }
.ds-section-head p  { margin: 0; color: var(--ds-muted); font-size: 0.88rem; }

.toolbar { display: flex; align-items: center; gap: 0.5rem; padding: 0.65rem 0.75rem; background: var(--ds-bg); border: 1px solid var(--ds-line); border-radius: 12px; }
.toolbar-search { flex: 1; max-width: 300px; position: relative; display: flex; align-items: center; }
.toolbar-search input { width: 100%; height: 36px; padding: 0 0.85rem 0 2.2rem; border-radius: 8px; border: 1px solid transparent; background: var(--ds-surface); color: var(--ds-text); font: inherit; font-size: 0.86rem; outline: none; }
.toolbar-search input:focus { border-color: var(--ds-primary); background: var(--ds-bg); box-shadow: 0 0 0 3px color-mix(in srgb, var(--ds-primary) 22%, transparent); }
.toolbar-search .pi { position: absolute; left: 0.75rem; color: var(--ds-faint); font-size: 0.85rem; }
.spacer { flex: 1; }

.chip { padding: 0.3rem 0.7rem; border-radius: 999px; border: 1px solid var(--ds-line); background: var(--ds-bg); color: var(--ds-muted); font-size: 0.75rem; cursor: pointer; transition: all 0.15s; }
.chip:hover { border-color: var(--ds-faint); color: var(--ds-text); }
.chip.active { background: var(--ds-text); color: var(--ds-bg); border-color: var(--ds-text); }

.table-shell { overflow: hidden; border-radius: 12px; border: 1px solid var(--ds-line); background: var(--ds-bg); }
.table { width: 100%; border-collapse: collapse; font-size: 0.86rem; }
.table thead th { text-align: left; padding: 0.7rem 1rem; background: var(--ds-bg); color: var(--ds-muted); font-weight: 500; font-size: 0.72rem; letter-spacing: 0.08em; text-transform: uppercase; border-bottom: 1px solid var(--ds-line); }
.table tbody td { padding: 0.85rem 1rem; border-bottom: 1px solid var(--ds-line-soft); color: var(--ds-text); vertical-align: middle; }
.table tbody tr:last-child td { border-bottom: 0; }
.table tbody tr:hover td { background: var(--ds-surface); }
.table td.mono { font-family: var(--ds-font-mono, monospace); font-size: 0.82rem; color: var(--ds-text-soft); }
.table td.num  { font-variant-numeric: tabular-nums; text-align: right; font-weight: 500; }
.actions-col  { text-align: right; }

.tag { display: inline-flex; align-items: center; gap: 0.4rem; padding: 0.22rem 0.6rem 0.22rem 0.55rem; border-radius: 999px; font-size: 0.74rem; font-weight: 500; background: color-mix(in srgb, var(--ds-primary) 10%, transparent); color: var(--ds-primary); line-height: 1.2; }
.tag::before { content: ""; width: 6px; height: 6px; border-radius: 50%; background: currentColor; flex-shrink: 0; }
.tag.success { background: color-mix(in srgb, var(--ds-success) 12%, transparent); color: #2e8200; }
.tag.warning { background: color-mix(in srgb, var(--ds-warning) 22%, transparent); color: #946100; }
.tag.error   { background: color-mix(in srgb, var(--ds-error) 10%, transparent); color: var(--ds-error); }

.btn-icon { width: 32px; height: 32px; border: 0; border-radius: 8px; background: transparent; color: var(--ds-muted); cursor: pointer; display: inline-grid; place-items: center; transition: all 0.15s; }
.btn-icon:hover { background: var(--ds-surface-2); color: var(--ds-primary); }

.pagination { display: flex; align-items: center; justify-content: space-between; padding: 0.85rem 1rem; border-top: 1px solid var(--ds-line); font-size: 0.82rem; color: var(--ds-muted); }
.pages { display: flex; gap: 0.2rem; }
.pg { width: 32px; height: 32px; display: grid; place-items: center; border: 1px solid transparent; border-radius: 8px; background: transparent; cursor: pointer; color: var(--ds-muted); font: inherit; font-size: 0.82rem; transition: all 0.15s; }
.pg:hover { background: var(--ds-surface-2); color: var(--ds-text); }
.pg.active { background: var(--ds-text); color: var(--ds-bg); }
</style>
