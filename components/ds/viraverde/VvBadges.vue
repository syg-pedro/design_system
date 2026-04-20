<template>
  <section class="vv-section">
    <div class="vv-head">
      <small>Componentes</small>
      <h2>Badges &amp; Status</h2>
      <p>AppBadge com 6 variantes semânticas e dot indicator. AppStatusBadge mapeia enums do domínio.</p>
    </div>

    <div class="group-label">AppBadge — variantes</div>
    <div class="demo-row">
      <span class="badge badge--success">Ativo</span>
      <span class="badge badge--warning">Inativo</span>
      <span class="badge badge--danger">Excluído</span>
      <span class="badge badge--info">Ofertado</span>
      <span class="badge badge--gray">Livre</span>
      <span class="badge badge--default">Padrão</span>
    </div>

    <div class="group-label">Com dot indicator</div>
    <div class="demo-row">
      <span class="badge badge--success"><span class="dot dot--success"></span>Válida</span>
      <span class="badge badge--danger"><span class="dot dot--danger"></span>Inválida</span>
      <span class="badge badge--warning"><span class="dot dot--warning"></span>Pré-válida</span>
      <span class="badge badge--info"><span class="dot dot--info"></span>Em análise</span>
      <span class="badge badge--gray"><span class="dot dot--gray"></span>Cancelada</span>
    </div>

    <div class="group-label">StatusBadge — Marketplace (Book)</div>
    <div class="demo-row">
      <span class="badge badge--info"><span class="dot dot--info"></span>Ofertado</span>
      <span class="badge badge--success"><span class="dot dot--success"></span>Finalizado</span>
      <span class="badge badge--gray"><span class="dot dot--gray"></span>Livre</span>
      <span class="badge badge--danger"><span class="dot dot--danger"></span>Cancelado</span>
      <span class="badge badge--warning"><span class="dot dot--warning"></span>Expirado</span>
      <span class="badge badge--danger"><span class="dot dot--danger"></span>Recusado</span>
      <span class="badge badge--success"><span class="dot dot--success"></span>Aceito</span>
    </div>

    <div class="group-label">StatusBadge — Situação</div>
    <div class="demo-row">
      <span class="badge badge--info"><span class="dot dot--info"></span>Pré-válida</span>
      <span class="badge badge--success"><span class="dot dot--success"></span>Válida</span>
      <span class="badge badge--danger"><span class="dot dot--danger"></span>Inválida</span>
      <span class="badge badge--warning"><span class="dot dot--warning"></span>Cancelada</span>
    </div>

    <div class="group-label">Tamanhos</div>
    <div class="demo-row" style="align-items: center">
      <span class="badge badge--success badge--sm">Small</span>
      <span class="badge badge--success badge--md">Medium (padrão)</span>
    </div>
  </section>
</template>

<style scoped>
.vv-section { display: grid; gap: 1.5rem; font-family: var(--vv-font-sans, 'Inter', sans-serif); }
.vv-head small { color: var(--vv-color-primary, #16a34a); font-weight: 600; text-transform: uppercase; font-size: 0.72rem; letter-spacing: 0.1em; }
.vv-head h2 { margin: 0.25rem 0 0.35rem; font-size: 1.8rem; font-weight: 700; color: var(--vv-color-text, #111827); }
.vv-head p  { margin: 0; color: var(--vv-color-text-muted, #6b7280); font-size: 0.88rem; }
.group-label { font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: var(--vv-color-text-muted, #6b7280); }
.demo-row { display: flex; flex-wrap: wrap; gap: 0.5rem; }

.badge {
  display: inline-flex; align-items: center; gap: 0.375rem;
  border-radius: var(--vv-radius-full, 9999px); font-size: 0.75rem; font-weight: 500;
  font-family: inherit;
}
.badge--sm { padding: 0.125rem 0.5rem; }
.badge--md, .badge:not(.badge--sm) { padding: 0.25rem 0.625rem; }
.badge--success { background: var(--vv-color-success-bg, #dcfce7); color: var(--vv-color-success-text, #166534); }
.badge--warning { background: var(--vv-color-warning-bg, #fef3c7); color: var(--vv-color-warning-text, #92400e); }
.badge--danger  { background: var(--vv-color-error-bg, #fee2e2);   color: var(--vv-color-error-text, #991b1b); }
.badge--info    { background: var(--vv-color-info-bg, #dbeafe);     color: var(--vv-color-info-text, #1e40af); }
.badge--gray    { background: var(--vv-color-neutral-bg, #f3f4f6);  color: var(--vv-color-neutral-text, #374151); }
.badge--default { background: #f3f4f6; color: #374151; }

.dot { width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0; }
.dot--success { background: var(--vv-color-success, #16a34a); }
.dot--warning { background: var(--vv-color-warning, #d97706); }
.dot--danger  { background: var(--vv-color-error, #dc2626); }
.dot--info    { background: var(--vv-color-info, #2563eb); }
.dot--gray    { background: #9ca3af; }
</style>
