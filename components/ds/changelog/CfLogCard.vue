<template>
  <section class="ds-section">
    <div class="ds-head">
      <small>Padrões</small>
      <h2>LogCard</h2>
      <p>Cartão expansível de ticket do changelog. Clique para expandir.</p>
    </div>

    <div class="group-label">Exemplos</div>

    <details class="log-card" v-for="card in cards" :key="card.key">
      <summary class="log-summary">
        <div class="summary-main">
          <div class="summary-badges">
            <span class="badge" :class="`badge--${statusTone(card.status)}`">{{ card.status }}</span>
            <span class="badge" :class="`badge--${typeTone(card.type)}`">{{ card.type }}</span>
          </div>
          <span class="summary-title">{{ card.title }}</span>
        </div>
        <svg class="summary-chevron" viewBox="0 0 20 20"><path d="M5 7.5l5 5 5-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>
      </summary>
      <div class="log-body">
        <p class="log-description">{{ card.description }}</p>
        <div class="log-meta">
          <span class="meta-pill">
            <svg viewBox="0 0 20 20"><rect x="3" y="4" width="14" height="13" rx="2" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M3 8h14" stroke="currentColor" stroke-width="1.5"/><path d="M7 2v4M13 2v4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
            {{ card.quarter }}
          </span>
          <span class="meta-pill">
            <svg viewBox="0 0 20 20"><circle cx="10" cy="10" r="7" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M10 6v4l2.5 2.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
            {{ card.date }}
          </span>
        </div>
      </div>
    </details>

    <div class="group-label">Anatomia do LogCard</div>
    <div class="anatomy-grid">
      <div class="anatomy-item" v-for="a in anatomy" :key="a.part">
        <strong>{{ a.part }}</strong>
        <span>{{ a.desc }}</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const cards = [
  {
    key: 1,
    title: 'Novo painel de filtros com chips interativos',
    status: 'Entregue',
    type: 'Novidade',
    description: 'Adicionamos chips de filtragem rápida na listagem do changelog, permitindo filtrar por tipo de ticket, status e trimestre sem recarregar a página.',
    quarter: 'Q1 2025',
    date: '15/03/2025',
  },
  {
    key: 2,
    title: 'Melhoria de performance na sincronização com Acelerato',
    status: 'Em desenvolvimento',
    type: 'Melhoria',
    description: 'Otimização do processo de sincronização para reduzir o tempo de atualização dos tickets de 45s para menos de 10s através de requisições paralelas.',
    quarter: 'Q2 2025',
    date: '—',
  },
  {
    key: 3,
    title: 'Correção de exibição de anexos em modo escuro',
    status: 'Em breve',
    type: 'Correção',
    description: 'Corrigido problema onde ícones de anexo ficavam invisíveis no modo escuro devido ao uso de cores hardcoded.',
    quarter: 'Q1 2025',
    date: '—',
  },
]

function statusTone(s: string) {
  if (s === 'Entregue') return 'success'
  if (s === 'Em breve') return 'warning'
  return 'info'
}
function typeTone(t: string) {
  if (t === 'Novidade') return 'primary'
  if (t === 'Melhoria') return 'accent'
  return 'neutral'
}

const anatomy = [
  { part: '<summary>', desc: 'Badges de status+tipo + título + chevron' },
  { part: '.log-body', desc: 'Descrição expandida, metadados, galeria de anexos' },
  { part: '.meta-pill', desc: 'Trimestre e data com ícone inline' },
  { part: 'badge--*', desc: 'Tom dinâmico por status/tipo do ticket' },
]
</script>

<style scoped>
.ds-section { display: grid; gap: 1.5rem; }
.ds-head small { color: #79b83e; font-weight: 600; text-transform: uppercase; font-size: 0.72rem; letter-spacing: 0.1em; }
.ds-head h2 { margin: 0.25rem 0 0.35rem; font-size: 1.8rem; font-weight: 600; }
.ds-head p  { margin: 0; color: var(--ff-color-secondary-text, #979ca3); font-size: 0.88rem; }
.group-label { font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--ff-color-secondary-text); }

.log-card {
  background: var(--ff-color-primary-bg,#fff);
  border: 1px solid var(--ff-color-accent-3,#e0e0e0);
  border-radius: 12px; overflow: hidden;
}
.log-card + .log-card { margin-top: 0; }
.log-summary {
  display: flex; align-items: center; justify-content: space-between; gap: 0.75rem;
  padding: 0.85rem 1rem; cursor: pointer; list-style: none;
  font-family: "Source Sans 3","Segoe UI",sans-serif;
}
.log-summary::-webkit-details-marker { display: none; }
.summary-main { display: flex; align-items: center; gap: 0.6rem; flex: 1; min-width: 0; flex-wrap: wrap; }
.summary-badges { display: flex; gap: 0.3rem; flex-shrink: 0; }
.summary-title { font-size: 0.875rem; font-weight: 600; color: var(--ff-color-primary-text,#3c3c3c); }
.summary-chevron { width: 18px; height: 18px; color: var(--ff-color-secondary-text); flex-shrink: 0; transition: transform 0.2s; }
details[open] .summary-chevron { transform: rotate(180deg); }

.log-body { padding: 0 1rem 1rem; }
.log-description { font-size: 0.875rem; color: var(--ff-color-primary-text); margin: 0 0 0.75rem; line-height: 1.55; }
.log-meta { display: flex; gap: 0.5rem; flex-wrap: wrap; }
.meta-pill {
  display: inline-flex; align-items: center; gap: 0.3rem;
  padding: 0.2rem 0.65rem; border-radius: 999px; font-size: 0.75rem;
  background: var(--ff-color-secondary-bg,#f8f8f8);
  color: var(--ff-color-secondary-text);
}
.meta-pill svg { width: 13px; height: 13px; flex-shrink: 0; }

.badge { display: inline-flex; padding: 0.18rem 0.6rem; border-radius: 999px; font-size: 0.72rem; font-weight: 600; }
.badge--success { background: var(--ff-color-bg-success,#d7ffc5); color: var(--ff-color-success,#3dac00); }
.badge--warning { background: var(--ff-color-bg-warning,#ffeec7); color: #a06600; }
.badge--info    { background: var(--ff-color-bg-info,#ceedff); color: var(--ff-color-info,#1c4494); }
.badge--primary { background: var(--ff-color-sub-primary,#d8edff); color: var(--ff-color-primary,#0094d9); }
.badge--accent  { background: var(--ff-color-sub-alternate,#ffecdc); color: var(--ff-color-alternate,#f3943d); }
.badge--neutral { background: var(--ff-color-secondary-bg,#f8f8f8); color: var(--ff-color-primary-text,#3c3c3c); }

.anatomy-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px,1fr)); gap: 0.5rem; }
.anatomy-item { display: flex; flex-direction: column; gap: 0.2rem; padding: 0.65rem 0.75rem; background: var(--ff-color-primary-bg,#fff); border: 1px solid var(--ff-color-accent-3,#e0e0e0); border-radius: 10px; }
.anatomy-item strong { font-size: 0.78rem; font-family: monospace; color: var(--ff-color-primary,#0094d9); }
.anatomy-item span { font-size: 0.75rem; color: var(--ff-color-secondary-text); }
</style>
