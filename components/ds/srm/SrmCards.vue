<template>
  <section class="srm-section">
    <div class="srm-head">
      <small>Componentes</small>
      <h2>UiCard &amp; UiExpandableCard</h2>
      <p>Card básico com header/body/footer e card expansível com animação de altura e grid de detalhes.</p>
    </div>

    <div class="group-label">Cards básicos</div>
    <div class="cards-row">
      <div class="card">
        <div class="card-header">
          <span class="card-title">Fornecedor</span>
          <div class="card-actions">
            <button class="icon-btn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
            </button>
          </div>
        </div>
        <div class="card-body">
          <p class="body-text">Dados do fornecedor cadastrado na plataforma SRM.</p>
          <div class="detail-grid">
            <div class="detail"><span class="detail-label">CNPJ:</span><span class="detail-value">12.345.678/0001-99</span></div>
            <div class="detail"><span class="detail-label">Status:</span><span class="badge badge--success">Ativo</span></div>
            <div class="detail"><span class="detail-label">Contato:</span><span class="detail-value">João Silva</span></div>
            <div class="detail"><span class="detail-label">Cidade:</span><span class="detail-value">São Paulo, SP</span></div>
          </div>
        </div>
        <div class="card-footer">
          <button class="btn btn--primary btn--sm">Ver detalhes</button>
          <button class="btn btn--ghost btn--sm">Check-in</button>
        </div>
      </div>

      <div class="card card--hoverable">
        <div class="card-body">
          <div class="metric-row">
            <div class="metric">
              <span class="metric-value" style="color: var(--srm-color-primary, #0099ff)">124</span>
              <span class="metric-label">Fornecedores</span>
            </div>
            <div class="metric">
              <span class="metric-value" style="color: #10b981">89</span>
              <span class="metric-label">Ativos</span>
            </div>
            <div class="metric">
              <span class="metric-value" style="color: #fbbf24">12</span>
              <span class="metric-label">Pendentes</span>
            </div>
            <div class="metric">
              <span class="metric-value" style="color: #ef4444">23</span>
              <span class="metric-label">Inativos</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="group-label">UiExpandableCard (com animação)</div>
    <div class="expand-list">
      <div v-for="item in expandableItems" :key="item.id"
        class="exp-card"
        :class="{ 'exp-card--expanded': expanded === item.id }"
        @click="toggle(item.id)">
        <div class="exp-card-row">
          <div class="exp-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" :d="item.icon" />
            </svg>
          </div>
          <div class="exp-info">
            <p class="exp-title">{{ item.title }}</p>
            <p class="exp-sub">{{ item.subtitle }}</p>
          </div>
          <span class="badge badge--sm" :class="`badge--${item.statusVariant}`">{{ item.status }}</span>
          <p class="exp-date">{{ item.date }}</p>
          <svg class="chevron" :class="{ rotated: expanded === item.id }" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
        </div>

        <Transition
          @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter"
          @before-leave="beforeLeave" @leave="leave">
          <div v-if="expanded === item.id" class="exp-details">
            <div class="detail-grid">
              <div v-for="d in item.details" :key="d.label" class="detail">
                <span class="detail-label">{{ d.label }}:</span>
                <span class="detail-value">{{ d.value }}</span>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const expanded = ref<number | null>(null)

function toggle(id: number) { expanded.value = expanded.value === id ? null : id }

function beforeEnter(el: Element) { const e = el as HTMLElement; e.style.height = '0'; e.style.opacity = '0' }
function enter(el: Element) { const e = el as HTMLElement; e.style.transition = 'height 250ms ease-out, opacity 250ms ease-out'; requestAnimationFrame(() => { e.style.height = e.scrollHeight + 'px'; e.style.opacity = '1' }) }
function afterEnter(el: Element) { (el as HTMLElement).style.height = 'auto' }
function beforeLeave(el: Element) { const e = el as HTMLElement; e.style.height = e.scrollHeight + 'px'; e.style.opacity = '1' }
function leave(el: Element) { const e = el as HTMLElement; e.style.transition = 'height 250ms ease-out, opacity 250ms ease-out'; requestAnimationFrame(() => { e.style.height = '0'; e.style.opacity = '0' }) }

const expandableItems = [
  {
    id: 1, title: 'Reciclagem Norte Ltda', subtitle: 'Fornecedor • Ativo',
    status: 'Finalizado', statusVariant: 'finalizado', date: '24/04',
    icon: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z',
    details: [
      { label: 'CNPJ', value: '12.345.678/0001-99' },
      { label: 'Contato', value: 'Maria Santos' },
      { label: 'Telefone', value: '(11) 98765-4321' },
      { label: 'Cidade', value: 'Guarulhos, SP' },
      { label: 'Última visita', value: '15/04/2026' },
      { label: 'Categoria', value: 'Plástico / Metal' },
    ],
  },
  {
    id: 2, title: 'EcoMetais S.A.', subtitle: 'Fornecedor • Acompanhamento',
    status: 'Acompanhamento', statusVariant: 'acompanhamento', date: '22/04',
    icon: 'M3 6h18M3 12h18M3 18h18',
    details: [
      { label: 'CNPJ', value: '98.765.432/0001-11' },
      { label: 'Contato', value: 'Carlos Lima' },
      { label: 'Volume mensal', value: '45 toneladas' },
      { label: 'Cidade', value: 'Campinas, SP' },
    ],
  },
  {
    id: 3, title: 'ResíduosBR Ltda', subtitle: 'Prospecto • Pendente',
    status: 'Pendente', statusVariant: 'pendente', date: '20/04',
    icon: 'M12 5v14M5 12l7 7 7-7',
    details: [
      { label: 'Contato', value: 'Ana Pereira' },
      { label: 'Potencial', value: '20 toneladas/mês' },
      { label: 'Próx. contato', value: '28/04/2026' },
    ],
  },
]
</script>

<style scoped>
.srm-section { display: grid; gap: 1.5rem; font-family: var(--srm-font-sans, 'Inter', sans-serif); }
.srm-head small { color: var(--srm-color-primary, #0099ff); font-weight: 600; text-transform: uppercase; font-size: 0.72rem; letter-spacing: 0.1em; }
.srm-head h2 { margin: 0.25rem 0 0.35rem; font-size: 1.8rem; font-weight: 700; color: var(--srm-color-text, #fff); }
.srm-head p  { margin: 0; color: var(--srm-color-text-muted, #aaa); font-size: 0.88rem; }
.group-label { font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: var(--srm-color-text-muted, #aaa); }

.cards-row { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1rem; }
.card { background: var(--srm-color-surface, #1e293b); border: 1px solid var(--srm-color-border, #333); border-radius: var(--srm-radius-lg, 8px); overflow: hidden; transition: all var(--srm-transition, 0.2s); }
.card--hoverable:hover { transform: translateY(-2px); box-shadow: 0 4px 12px rgba(0,0,0,0.3); }
.card-header { display: flex; align-items: center; justify-content: space-between; padding: 12px 16px; border-bottom: 1px solid var(--srm-color-border, #333); background: var(--srm-color-bg, #0f172a); }
.card-title { font-size: 1rem; font-weight: 600; color: var(--srm-color-text, #fff); }
.card-actions { display: flex; gap: 6px; }
.card-body { padding: 16px; }
.card-footer { padding: 12px 16px; border-top: 1px solid var(--srm-color-border, #333); background: var(--srm-color-bg, #0f172a); display: flex; gap: 8px; }
.body-text { font-size: 0.875rem; color: var(--srm-color-text-muted, #aaa); margin: 0 0 12px; }
.detail-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 6px 12px; }
.detail { display: flex; align-items: center; gap: 5px; font-size: 0.78rem; }
.detail-label { color: var(--srm-color-text-muted, #aaa); font-weight: 500; }
.detail-value { color: var(--srm-color-text, #fff); font-weight: 500; }
.metric-row { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; text-align: center; }
.metric { display: flex; flex-direction: column; gap: 2px; }
.metric-value { font-size: 1.5rem; font-weight: 700; }
.metric-label { font-size: 0.7rem; color: var(--srm-color-text-muted, #aaa); }

.icon-btn { width: 28px; height: 28px; border-radius: var(--srm-radius-sm, 4px); background: var(--srm-color-hover, rgba(255,255,255,0.08)); color: var(--srm-color-text-muted, #aaa); display: flex; align-items: center; justify-content: center; border: none; cursor: pointer; transition: all var(--srm-transition, 0.2s); }
.icon-btn:hover { color: var(--srm-color-primary, #0099ff); background: rgba(0,153,255,0.1); }
.icon-btn svg { width: 14px; height: 14px; }

.btn { display: inline-flex; align-items: center; gap: 6px; border: none; border-radius: var(--srm-radius-md, 6px); font-size: 0.875rem; font-weight: 600; cursor: pointer; font-family: inherit; transition: all var(--srm-transition, 0.2s); }
.btn--sm { padding: 6px 12px; font-size: 0.875rem; }
.btn--primary { background: var(--srm-color-primary, #0099ff); color: #fff; }
.btn--primary:hover { background: var(--srm-color-primary-dark, #0077be); }
.btn--ghost { background: transparent; color: var(--srm-color-text, #fff); }
.btn--ghost:hover { background: var(--srm-color-hover, rgba(255,255,255,0.08)); }

.badge { display: inline-flex; align-items: center; gap: 5px; border-radius: 12px; font-weight: 600; white-space: nowrap; border: 1px solid transparent; font-family: inherit; padding: 4px 10px; font-size: 0.85rem; }
.badge--sm { padding: 2px 8px; font-size: 0.75rem; }
.badge--finalizado     { background: rgba(74,222,128,0.1); color: #4ade80; border-color: rgba(74,222,128,0.2); }
.badge--acompanhamento { background: rgba(251,191,36,0.1); color: #fbbf24; border-color: rgba(251,191,36,0.2); }
.badge--pendente       { background: rgba(248,113,113,0.1); color: #f87171; border-color: rgba(248,113,113,0.2); }

/* Expandable */
.expand-list { display: flex; flex-direction: column; gap: 6px; }
.exp-card {
  background: var(--srm-color-surface, #1e293b); border: 1px solid var(--srm-color-border-subtle, rgba(255,255,255,0.08));
  border-radius: var(--srm-radius-lg, 8px); padding: 12px; cursor: pointer;
  transition: border-color var(--srm-transition, 0.2s), box-shadow var(--srm-transition, 0.2s);
}
.exp-card:hover { border-color: var(--srm-color-primary-border, rgba(0,153,255,0.3)); box-shadow: 0 2px 8px rgba(0,0,0,0.2); }
.exp-card--expanded { border-color: var(--srm-color-primary-border, rgba(0,153,255,0.3)); }
.exp-card-row { display: flex; align-items: center; gap: 10px; }
.exp-icon { width: 32px; height: 32px; border-radius: var(--srm-radius-md, 6px); background: var(--srm-color-primary-soft, rgba(0,153,255,0.1)); border: 1px solid var(--srm-color-primary-border, rgba(0,153,255,0.2)); display: flex; align-items: center; justify-content: center; flex-shrink: 0; color: var(--srm-color-primary, #0099ff); }
.exp-icon svg { width: 16px; height: 16px; }
.exp-info { flex: 1; min-width: 0; }
.exp-title { font-size: 0.875rem; font-weight: 500; color: var(--srm-color-text, #fff); margin: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.exp-sub { font-size: 0.75rem; color: var(--srm-color-text-muted, #aaa); margin: 0; }
.exp-date { font-size: 0.75rem; font-weight: 500; color: var(--srm-color-primary, #0099ff); flex-shrink: 0; }
.chevron { width: 16px; height: 16px; color: var(--srm-color-text-muted, #aaa); transition: transform 300ms ease; flex-shrink: 0; }
.chevron.rotated { transform: rotate(180deg); }
.exp-details { overflow: hidden; margin-top: 12px; padding-top: 12px; border-top: 1px solid var(--srm-color-border, #333); }
.exp-details .detail-grid { grid-template-columns: repeat(3, 1fr); }
</style>
