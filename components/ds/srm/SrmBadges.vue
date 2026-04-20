<template>
  <section class="srm-section">
    <div class="srm-head">
      <small>Componentes</small>
      <h2>UiBadge &amp; Status</h2>
      <p>7 variantes semânticas com bordas coloridas em fundo translúcido. Dot indicator e 3 tamanhos. UiStatusBadgeGroup para painéis de métricas.</p>
    </div>

    <div class="group-label">UiBadge — variantes</div>
    <div class="demo-row">
      <span class="badge badge--default">Default</span>
      <span class="badge badge--primary">Primary</span>
      <span class="badge badge--success">Success</span>
      <span class="badge badge--warning">Warning</span>
      <span class="badge badge--danger">Danger</span>
      <span class="badge badge--info">Info</span>
      <span class="badge badge--neutral">Neutral</span>
    </div>

    <div class="group-label">Com dot indicator</div>
    <div class="demo-row">
      <span class="badge badge--success is-dot"><span class="dot"></span>Finalizado</span>
      <span class="badge badge--warning is-dot"><span class="dot"></span>Acompanhamento</span>
      <span class="badge badge--danger is-dot"><span class="dot"></span>Pendente</span>
      <span class="badge badge--primary is-dot"><span class="dot"></span>Em andamento</span>
    </div>

    <div class="group-label">Tamanhos</div>
    <div class="demo-row" style="align-items: center">
      <span class="badge badge--primary badge--sm">Small</span>
      <span class="badge badge--primary badge--md">Medium</span>
      <span class="badge badge--primary badge--lg">Large</span>
    </div>

    <div class="group-label">UiStatusBadgeGroup — métricas de painel</div>
    <div class="status-group">
      <div v-for="item in metrics" :key="item.label" class="stat-badge" :style="getBadgeStyle(item.color)">
        <component :is="getIcon(item.icon)" />
        <span class="stat-value">{{ item.value }}</span>
        <span class="stat-label">{{ item.label }}</span>
      </div>
    </div>

    <div class="group-label">Status de Ocorrências</div>
    <div class="demo-row">
      <span class="badge badge--finalizado is-dot"><span class="dot"></span>Finalizado</span>
      <span class="badge badge--acompanhamento is-dot"><span class="dot"></span>Acompanhamento</span>
      <span class="badge badge--pendente is-dot"><span class="dot"></span>Pendente</span>
      <span class="badge badge--vencido is-dot"><span class="dot"></span>Vencido</span>
    </div>
  </section>
</template>

<script setup lang="ts">
import { defineComponent, h } from 'vue'

const metrics = [
  { value: '24', label: 'Total de tarefas', color: 'blue',   icon: 'calendar' },
  { value: '18', label: 'Concluídas',       color: 'green',  icon: 'check' },
  { value: '4',  label: 'Em progresso',     color: 'yellow', icon: 'clock' },
  { value: '2',  label: 'Atrasadas',        color: 'red',    icon: 'x' },
]

function getBadgeStyle(color: string) {
  const map: Record<string, Record<string, string>> = {
    red:    { backgroundColor: 'rgba(239,68,68,0.12)',    color: '#ef4444', borderColor: 'rgba(239,68,68,0.2)' },
    green:  { backgroundColor: 'rgba(16,185,129,0.12)',   color: '#10b981', borderColor: 'rgba(16,185,129,0.2)' },
    yellow: { backgroundColor: 'rgba(245,158,11,0.12)',   color: '#f59e0b', borderColor: 'rgba(245,158,11,0.2)' },
    blue:   { backgroundColor: 'rgba(0,153,255,0.12)',    color: '#0099ff', borderColor: 'rgba(0,153,255,0.2)' },
    gray:   { backgroundColor: 'rgba(255,255,255,0.07)',  color: '#aaaaaa', borderColor: 'rgba(255,255,255,0.08)' },
  }
  return map[color] || map.gray
}

const iconSvgs: Record<string, string> = {
  calendar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
  check:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
  clock:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
  x:        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>',
}

function getIcon(name: string) {
  return defineComponent({
    render: () => h('span', { innerHTML: iconSvgs[name] || iconSvgs.x, class: 'icon-wrap' })
  })
}
</script>

<style scoped>
.srm-section { display: grid; gap: 1.5rem; font-family: var(--srm-font-sans, 'Inter', sans-serif); }
.srm-head small { color: var(--srm-color-primary, #0099ff); font-weight: 600; text-transform: uppercase; font-size: 0.72rem; letter-spacing: 0.1em; }
.srm-head h2 { margin: 0.25rem 0 0.35rem; font-size: 1.8rem; font-weight: 700; color: var(--srm-color-text, #fff); }
.srm-head p  { margin: 0; color: var(--srm-color-text-muted, #aaa); font-size: 0.88rem; }
.group-label { font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: var(--srm-color-text-muted, #aaa); }
.demo-row { display: flex; flex-wrap: wrap; gap: 0.5rem; align-items: center; }

.badge {
  display: inline-flex; align-items: center; gap: 6px;
  border-radius: 12px; font-weight: 600; white-space: nowrap;
  padding: 4px 10px; font-size: 0.85rem; border: 1px solid transparent;
  font-family: inherit;
}
.badge--sm { padding: 2px 8px; font-size: 0.75rem; }
.badge--md { padding: 4px 10px; font-size: 0.85rem; }
.badge--lg { padding: 6px 14px; font-size: 0.95rem; }

.badge--default  { background: var(--srm-color-surface, #1e293b); color: var(--srm-color-text, #fff); border-color: var(--srm-color-border, #333); }
.badge--primary  { background: rgba(0,153,255,0.1); color: #0099ff; border-color: rgba(0,153,255,0.2); }
.badge--success  { background: rgba(16,185,129,0.1); color: #10b981; border-color: rgba(16,185,129,0.2); }
.badge--warning  { background: rgba(245,158,11,0.1); color: #f59e0b; border-color: rgba(245,158,11,0.2); }
.badge--danger   { background: rgba(239,68,68,0.1); color: #ef4444; border-color: rgba(239,68,68,0.2); }
.badge--info     { background: rgba(59,130,246,0.1); color: #3b82f6; border-color: rgba(59,130,246,0.2); }
.badge--neutral  { background: var(--srm-color-hover, rgba(255,255,255,0.1)); color: var(--srm-color-text-muted, #aaa); border-color: var(--srm-color-border-subtle, rgba(255,255,255,0.08)); }

.badge--finalizado     { background: rgba(74,222,128,0.1); color: #4ade80; border-color: rgba(74,222,128,0.2); }
.badge--acompanhamento { background: rgba(251,191,36,0.1); color: #fbbf24; border-color: rgba(251,191,36,0.2); }
.badge--pendente       { background: rgba(248,113,113,0.1); color: #f87171; border-color: rgba(248,113,113,0.2); }
.badge--vencido        { background: rgba(239,68,68,0.1); color: #ef4444; border-color: rgba(239,68,68,0.2); }

.dot { width: 8px; height: 8px; border-radius: 50%; background: currentColor; flex-shrink: 0; }

/* UiStatusBadgeGroup */
.status-group { display: flex; flex-wrap: wrap; gap: 0.5rem; }
.stat-badge {
  display: flex; align-items: center; gap: 0.4rem;
  min-width: 56px; padding: 0.35rem 0.6rem;
  border-radius: var(--srm-radius-md, 6px); border: 1px solid;
  font-size: 0.78rem; cursor: default;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.stat-badge:hover { transform: scale(1.05); box-shadow: 0 2px 8px rgba(0,0,0,0.3); }
.stat-value { font-weight: 700; font-size: 0.9rem; }
.stat-label { font-size: 0.7rem; opacity: 0.85; }
:deep(.icon-wrap svg) { width: 14px; height: 14px; flex-shrink: 0; }
</style>
