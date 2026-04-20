<template>
  <section class="pc-section">
    <div class="pc-head">
      <small>Padrões</small>
      <h2>Tabela de Documentos Fiscais</h2>
      <p>Padrão extraído de <code>DocumentosFiscaisTable</code> + <code>DocumentosFiscaisRow</code>. Seleção em massa, ordenação e ações por linha.</p>
    </div>

    <div class="table-wrap">
      <table class="table">
        <thead>
          <tr>
            <th class="th th--center">
              <button class="icon-action" title="Selecionar todos">
                <svg :class="allSelected ? 'check-icon--active' : 'check-icon'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <polyline v-if="allSelected" points="9 11 12 14 22 4" fill="none"/>
                </svg>
              </button>
            </th>
            <th v-for="col in columns" :key="col.id" class="th" @click="toggleSort(col.id)">
              <span class="th-inner">
                {{ col.label }}
                <svg class="sort-icon" :class="sortBy === col.id ? 'sort-icon--active' : ''" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline v-if="sortBy === col.id && sortOrder === 'asc'" points="18 15 12 9 6 15"/>
                  <polyline v-else-if="sortBy === col.id && sortOrder === 'desc'" points="6 9 12 15 18 9"/>
                  <template v-else><polyline points="18 15 12 9 6 15" opacity="0.4"/><polyline points="6 9 12 15 18 9" opacity="0.4"/></template>
                </svg>
              </span>
            </th>
            <th class="th">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="doc in docs" :key="doc.id" class="tr" :class="{ 'tr--selected': selected.includes(doc.id) }">
            <td class="td td--center">
              <button class="icon-action" @click="toggle(doc.id)">
                <svg :class="selected.includes(doc.id) ? 'check-icon--active' : 'check-icon'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <polyline v-if="selected.includes(doc.id)" points="9 11 12 14 22 4" fill="none"/>
                </svg>
              </button>
            </td>
            <td class="td">
              <div class="td-main">{{ doc.date }}</div>
              <div class="td-sub">{{ doc.time }}</div>
            </td>
            <td class="td">
              <div class="td-file">
                <svg class="file-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                <div>
                  <div class="td-main">{{ doc.numero }} / {{ doc.serie }}</div>
                  <div class="td-sub">{{ doc.modelo }}</div>
                </div>
              </div>
            </td>
            <td class="td">
              <div class="td-main td-truncate">{{ doc.razaoSocial }}</div>
              <div class="td-sub td-mono">{{ doc.cnpj }}</div>
            </td>
            <td class="td td--right">
              <div class="td-main td-bold">{{ doc.valor }}</div>
              <div class="td-sub">{{ doc.tipo }}</div>
            </td>
            <td class="td">
              <span class="badge" :class="`badge--${statusTone(doc.status)}`">{{ doc.status }}</span>
            </td>
            <td class="td">
              <div class="action-group">
                <button class="btn-download btn-download--blue">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                  XML
                </button>
                <button class="btn-download btn-download--blue">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                  PDF
                </button>
                <button class="btn-download btn-download--emerald">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                  Ambos
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

type SortCol = 'date' | 'numero' | 'razaoSocial' | 'valor' | 'status'

const columns = [
  { id: 'date' as SortCol,       label: 'Data Emissão' },
  { id: 'numero' as SortCol,     label: 'Número / Série' },
  { id: 'razaoSocial' as SortCol,label: 'CNPJ / Razão Social' },
  { id: 'valor' as SortCol,      label: 'Valor' },
  { id: 'status' as SortCol,     label: 'Status' },
]

const sortBy = ref<SortCol>('date')
const sortOrder = ref<'asc'|'desc'>('desc')
const selected = ref<string[]>([])

const docs = [
  { id: '1', date: '15/04/2025', time: '14:32', numero: '000042', serie: '001', modelo: 'NF-e 55', razaoSocial: 'Comercial Andrade Ltda', cnpj: '52.123.456/0001-00', valor: 'R$ 3.450,00', tipo: 'Entrada', status: 'Autorizada' },
  { id: '2', date: '14/04/2025', time: '09:15', numero: '000041', serie: '001', modelo: 'NF-e 55', razaoSocial: 'Distribuidora Sul S.A.', cnpj: '31.987.654/0001-11', valor: 'R$ 12.800,00', tipo: 'Saída', status: 'Pendente' },
  { id: '3', date: '12/04/2025', time: '16:48', numero: '000040', serie: '001', modelo: 'CT-e 57', razaoSocial: 'Transportes Rápidos ME', cnpj: '11.222.333/0001-44', valor: 'R$ 890,00', tipo: 'Entrada', status: 'Cancelada' },
]

const allSelected = computed(() => selected.value.length === docs.length)

function toggle(id: string) {
  const idx = selected.value.indexOf(id)
  if (idx >= 0) selected.value.splice(idx, 1)
  else selected.value.push(id)
}

function toggleSort(col: SortCol) {
  if (sortBy.value === col) sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc'
  else { sortBy.value = col; sortOrder.value = 'asc' }
}

function statusTone(s: string) {
  if (s === 'Autorizada') return 'success'
  if (s === 'Cancelada' || s === 'Denegada') return 'error'
  if (s === 'Pendente' || s === 'Não transmitida') return 'warning'
  return 'neutral'
}
</script>

<style scoped>
.pc-section { display: grid; gap: 1.5rem; font-family: var(--pc-font-sans, 'Inter', sans-serif); }
.pc-head small { color: var(--pc-color-primary, #2563eb); font-weight: 600; text-transform: uppercase; font-size: 0.72rem; letter-spacing: 0.1em; }
.pc-head h2 { margin: 0.25rem 0 0.35rem; font-size: 1.8rem; font-weight: 700; color: var(--pc-color-text, #0f172a); }
.pc-head p  { margin: 0; color: var(--pc-color-text-muted, #64748b); font-size: 0.88rem; }

.table-wrap { overflow-x: auto; background: var(--pc-color-surface, #fff); border: 1px solid var(--pc-color-line, #e2e8f0); border-radius: var(--pc-radius-lg, 12px); }
.table { width: 100%; border-collapse: collapse; }

.th {
  padding: 0.75rem 1rem; text-align: left;
  font-size: 0.7rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;
  color: var(--pc-color-text-soft, #334155);
  border-bottom: 1px solid var(--pc-color-line, #e2e8f0);
  white-space: nowrap; cursor: pointer; user-select: none;
}
.th--center { text-align: center; }
.th-inner { display: inline-flex; align-items: center; gap: 0.3rem; }
.sort-icon { width: 14px; height: 14px; color: var(--pc-color-text-faint); }
.sort-icon--active { color: var(--pc-color-primary, #2563eb); }

.tr { transition: background 0.1s; }
.tr:hover { background: var(--pc-color-surface-2, #f1f5f9); }
.tr--selected { background: #eff6ff; }

.td { padding: 0.75rem 1rem; border-bottom: 1px solid var(--pc-color-line, #e2e8f0); vertical-align: middle; }
.td--center { text-align: center; }
.td--right { text-align: right; }
.td-main { font-size: 0.875rem; font-weight: 500; color: var(--pc-color-text, #0f172a); }
.td-sub  { font-size: 0.75rem; color: var(--pc-color-text-faint, #94a3b8); }
.td-bold { font-weight: 600; }
.td-truncate { max-width: 180px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.td-mono { font-family: var(--pc-font-mono, monospace); }
.td-file { display: flex; align-items: center; gap: 0.5rem; }
.file-icon { width: 16px; height: 16px; color: var(--pc-color-text-faint); flex-shrink: 0; }

.icon-action { background: none; border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; padding: 0.2rem; }
.check-icon      { width: 20px; height: 20px; color: var(--pc-color-text-muted); }
.check-icon--active { width: 20px; height: 20px; color: var(--pc-color-primary, #2563eb); }

.badge { display: inline-flex; padding: 0.125rem 0.5rem; border-radius: 9999px; font-size: 0.7rem; font-weight: 500; white-space: nowrap; }
.badge--success { background: var(--pc-color-success-bg, #d1fae5); color: var(--pc-color-success-text, #065f46); }
.badge--warning { background: var(--pc-color-warning-bg, #fef3c7); color: var(--pc-color-warning-text, #92400e); }
.badge--error   { background: var(--pc-color-error-bg, #fee2e2);   color: var(--pc-color-error-text, #991b1b);   }
.badge--neutral { background: var(--pc-color-neutral-bg, #f1f5f9); color: var(--pc-color-neutral-text, #334155); }

.action-group { display: flex; gap: 0.25rem; justify-content: flex-end; flex-wrap: wrap; }
.btn-download {
  display: inline-flex; align-items: center; gap: 0.3rem;
  padding: 0.3rem 0.6rem; border-radius: var(--pc-radius-sm, 6px);
  font-size: 0.72rem; font-weight: 500; font-family: inherit;
  border: none; cursor: pointer; transition: background 0.12s; white-space: nowrap;
}
.btn-download svg { width: 12px; height: 12px; }
.btn-download--blue   { color: var(--pc-color-primary, #2563eb); background: transparent; }
.btn-download--blue:hover { background: #eff6ff; }
.btn-download--emerald { color: #10b981; background: transparent; }
.btn-download--emerald:hover { background: #ecfdf5; }
</style>
