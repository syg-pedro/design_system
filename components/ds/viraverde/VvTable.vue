<template>
  <section class="vv-section">
    <div class="vv-head">
      <small>Componentes</small>
      <h2>Data Table</h2>
      <p>AppDataTable com seleção de linhas, ordenação e paginação — padrão das listagens do marketplace.</p>
    </div>

    <div class="group-label">Tabela de Empresas (com seleção)</div>
    <div class="card">
      <div class="table-toolbar">
        <div class="toolbar-left">
          <span v-if="selected.length" class="selected-info">{{ selected.length }} selecionado(s)</span>
          <span v-else class="toolbar-title">Empresas cadastradas</span>
        </div>
        <div class="toolbar-right">
          <button v-if="selected.length" class="btn btn--danger btn--sm">
            <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/></svg>
            Excluir selecionados
          </button>
          <button class="btn btn--primary btn--sm">
            <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            Nova empresa
          </button>
        </div>
      </div>

      <div class="table-wrap">
        <table class="table">
          <thead>
            <tr>
              <th class="th-check">
                <input type="checkbox" class="check" :checked="selected.length === rows.length" @change="toggleAll" />
              </th>
              <th @click="sort('nome')" class="th-sort">
                Empresa
                <svg v-if="sortKey === 'nome'" class="sort-icon" :class="{ desc: sortDir === 'desc' }" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="18 15 12 9 6 15"/></svg>
              </th>
              <th @click="sort('tipo')" class="th-sort">
                Tipo
                <svg v-if="sortKey === 'tipo'" class="sort-icon" :class="{ desc: sortDir === 'desc' }" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="18 15 12 9 6 15"/></svg>
              </th>
              <th>CNPJ</th>
              <th>Status</th>
              <th class="th-actions">Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in sortedRows" :key="row.id" :class="{ selected: isSelected(row) }" @click="toggleRow(row)">
              <td class="td-check"><input type="checkbox" class="check" :checked="isSelected(row)" @click.stop /></td>
              <td>
                <div class="company-cell">
                  <div class="company-avatar" :style="{ background: row.color }">{{ row.nome[0] }}</div>
                  <div>
                    <div class="company-name">{{ row.nome }}</div>
                    <div class="company-sub">{{ row.email }}</div>
                  </div>
                </div>
              </td>
              <td><span class="type-pill">{{ row.tipo }}</span></td>
              <td class="td-mono">{{ row.cnpj }}</td>
              <td>
                <span class="badge" :class="row.status === 'Ativo' ? 'badge--success' : row.status === 'Inativo' ? 'badge--warning' : 'badge--danger'">
                  <span class="dot" :class="row.status === 'Ativo' ? 'dot--success' : row.status === 'Inativo' ? 'dot--warning' : 'dot--danger'"></span>
                  {{ row.status }}
                </span>
              </td>
              <td @click.stop>
                <div class="actions">
                  <button class="icon-btn icon-btn--green" title="Editar">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                  </button>
                  <button class="icon-btn icon-btn--red" title="Excluir">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/></svg>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="pagination">
        <span class="pag-info">Mostrando 1–{{ rows.length }} de {{ rows.length }}</span>
        <div class="pag-btns">
          <button class="pag-btn" disabled>‹</button>
          <button class="pag-btn active">1</button>
          <button class="pag-btn">2</button>
          <button class="pag-btn">3</button>
          <button class="pag-btn">›</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const rows = ref([
  { id: 1, nome: 'AgroVerde S.A.',   email: 'contato@agroverde.com.br',  tipo: 'Demandante', cnpj: '12.345.678/0001-99', status: 'Ativo',   color: '#16a34a' },
  { id: 2, nome: 'CarbonBR Ltda',    email: 'ops@carbonbr.com.br',       tipo: 'Operador',   cnpj: '23.456.789/0001-88', status: 'Ativo',   color: '#2563eb' },
  { id: 3, nome: 'SygeAssoc',        email: 'gestao@sygeassoc.org.br',   tipo: 'Associação', cnpj: '34.567.890/0001-77', status: 'Ativo',   color: '#7c3aed' },
  { id: 4, nome: 'EcoFazenda Ltda',  email: 'eco@fazenda.com.br',        tipo: 'Operador',   cnpj: '45.678.901/0001-66', status: 'Inativo', color: '#d97706' },
  { id: 5, nome: 'BioCredit Corp',   email: 'admin@biocredit.io',        tipo: 'Demandante', cnpj: '56.789.012/0001-55', status: 'Excluído',color: '#dc2626' },
])

const selected = ref<typeof rows.value>([])
const sortKey = ref<'nome' | 'tipo' | null>(null)
const sortDir = ref<'asc' | 'desc'>('asc')

const sortedRows = computed(() => {
  if (!sortKey.value) return rows.value
  return [...rows.value].sort((a, b) => {
    const v = a[sortKey.value!] < b[sortKey.value!] ? -1 : 1
    return sortDir.value === 'asc' ? v : -v
  })
})

function sort(key: 'nome' | 'tipo') {
  if (sortKey.value === key) sortDir.value = sortDir.value === 'asc' ? 'desc' : 'asc'
  else { sortKey.value = key; sortDir.value = 'asc' }
}
function isSelected(row: (typeof rows.value)[0]) { return selected.value.some(r => r.id === row.id) }
function toggleRow(row: (typeof rows.value)[0]) {
  const i = selected.value.findIndex(r => r.id === row.id)
  if (i > -1) selected.value.splice(i, 1)
  else selected.value.push(row)
}
function toggleAll() {
  selected.value = selected.value.length === rows.value.length ? [] : [...rows.value]
}
</script>

<style scoped>
.vv-section { display: grid; gap: 1.5rem; font-family: var(--vv-font-sans, 'Inter', sans-serif); }
.vv-head small { color: var(--vv-color-primary, #16a34a); font-weight: 600; text-transform: uppercase; font-size: 0.72rem; letter-spacing: 0.1em; }
.vv-head h2 { margin: 0.25rem 0 0.35rem; font-size: 1.8rem; font-weight: 700; color: var(--vv-color-text, #111827); }
.vv-head p  { margin: 0; color: var(--vv-color-text-muted, #6b7280); font-size: 0.88rem; }
.group-label { font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: var(--vv-color-text-muted, #6b7280); }

.card { background: var(--vv-color-surface, #fff); border: 1px solid var(--vv-color-line, #e5e7eb); border-radius: var(--vv-radius-xl, 12px); overflow: hidden; box-shadow: var(--vv-shadow-sm, 0 1px 2px rgba(0,0,0,.05)); }
.table-toolbar { display: flex; align-items: center; justify-content: space-between; padding: 1rem 1.25rem; border-bottom: 1px solid var(--vv-color-line, #e5e7eb); gap: 0.75rem; flex-wrap: wrap; }
.toolbar-title { font-size: 0.9rem; font-weight: 600; color: var(--vv-color-text, #111827); }
.selected-info { font-size: 0.875rem; font-weight: 500; color: var(--vv-color-primary, #16a34a); }
.toolbar-right { display: flex; gap: 0.5rem; }
.table-wrap { overflow-x: auto; }
.table { width: 100%; border-collapse: collapse; font-size: 0.875rem; }
.table thead { background: var(--vv-color-surface-2, #f3f4f6); }
.table th { padding: 0.75rem 1rem; text-align: left; font-size: 0.75rem; font-weight: 600; color: var(--vv-color-text-muted, #6b7280); text-transform: uppercase; letter-spacing: 0.04em; white-space: nowrap; }
.th-check, .td-check { width: 40px; padding-left: 1rem !important; }
.th-actions { text-align: right; padding-right: 1.25rem !important; }
.th-sort { cursor: pointer; user-select: none; }
.th-sort:hover { color: var(--vv-color-text, #111827); }
.sort-icon { width: 12px; height: 12px; display: inline-block; vertical-align: middle; margin-left: 3px; transition: transform 0.15s; }
.sort-icon.desc { transform: rotate(180deg); }
.table tbody tr { border-bottom: 1px solid var(--vv-color-line, #e5e7eb); cursor: pointer; transition: background 0.1s; }
.table tbody tr:last-child { border-bottom: none; }
.table tbody tr:hover { background: var(--vv-color-surface-2, #f3f4f6); }
.table tbody tr.selected { background: var(--vv-color-primary-bg, #f0fdf4); }
.table td { padding: 0.875rem 1rem; color: var(--vv-color-text, #111827); vertical-align: middle; }
.td-mono { font-family: var(--vv-font-mono, monospace); font-size: 0.8rem; color: var(--vv-color-text-muted, #6b7280); }
.company-cell { display: flex; align-items: center; gap: 0.625rem; }
.company-avatar { width: 32px; height: 32px; border-radius: var(--vv-radius-md, 8px); display: flex; align-items: center; justify-content: center; color: #fff; font-weight: 700; font-size: 0.875rem; flex-shrink: 0; }
.company-name { font-weight: 500; color: var(--vv-color-text, #111827); }
.company-sub  { font-size: 0.75rem; color: var(--vv-color-text-muted, #6b7280); }
.type-pill { display: inline-block; font-size: 0.72rem; background: var(--vv-color-surface-2, #f3f4f6); color: var(--vv-color-text-soft, #374151); border-radius: var(--vv-radius-full, 9999px); padding: 0.15rem 0.5rem; font-weight: 500; }
.actions { display: flex; gap: 0.375rem; justify-content: flex-end; }
.badge { display: inline-flex; align-items: center; gap: 0.375rem; border-radius: 9999px; font-size: 0.75rem; font-weight: 500; padding: 0.2rem 0.55rem; }
.badge--success { background: #dcfce7; color: #166534; }
.badge--warning { background: #fef3c7; color: #92400e; }
.badge--danger  { background: #fee2e2; color: #991b1b; }
.dot { width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0; }
.dot--success { background: #16a34a; }
.dot--warning { background: #d97706; }
.dot--danger  { background: #dc2626; }
.check { width: 15px; height: 15px; accent-color: var(--vv-color-primary, #16a34a); cursor: pointer; }

.pagination { display: flex; align-items: center; justify-content: space-between; padding: 0.875rem 1.25rem; border-top: 1px solid var(--vv-color-line, #e5e7eb); flex-wrap: wrap; gap: 0.5rem; }
.pag-info { font-size: 0.8rem; color: var(--vv-color-text-muted, #6b7280); }
.pag-btns { display: flex; gap: 0.25rem; }
.pag-btn { width: 32px; height: 32px; border-radius: var(--vv-radius-md, 8px); border: 1px solid var(--vv-color-line, #e5e7eb); background: var(--vv-color-surface, #fff); color: var(--vv-color-text-soft, #374151); font-size: 0.82rem; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.1s; }
.pag-btn:hover:not(:disabled) { background: var(--vv-color-surface-2, #f3f4f6); }
.pag-btn.active { background: var(--vv-color-primary, #16a34a); border-color: var(--vv-color-primary, #16a34a); color: #fff; font-weight: 600; }
.pag-btn:disabled { opacity: 0.4; cursor: not-allowed; }
.btn { display: inline-flex; align-items: center; gap: 0.35rem; border: none; border-radius: 8px; font-size: 0.8rem; font-weight: 500; padding: 0.4rem 0.85rem; cursor: pointer; font-family: inherit; transition: all 0.15s; }
.btn--primary { background: var(--vv-color-primary, #16a34a); color: #fff; }
.btn--primary:hover { background: var(--vv-color-primary-hover, #15803d); }
.btn--danger  { background: #fee2e2; color: #dc2626; }
.btn--danger:hover  { background: #fecaca; }
.btn-icon { width: 14px; height: 14px; }
.icon-btn { width: 28px; height: 28px; border-radius: 6px; display: inline-flex; align-items: center; justify-content: center; border: none; cursor: pointer; transition: all 0.15s; }
.icon-btn svg { width: 14px; height: 14px; }
.icon-btn--green { background: #f0fdf4; color: #15803d; }
.icon-btn--green:hover { background: #dcfce7; }
.icon-btn--red   { background: #fee2e2; color: #dc2626; }
.icon-btn--red:hover { background: #fecaca; }
</style>
