<template>
  <section class="vv-section">
    <div class="vv-head">
      <small>Componentes</small>
      <h2>Botões</h2>
      <p>Variantes extraídas do AppButton — primary, secondary, danger, ghost e outline.</p>
    </div>

    <div class="group-label">Variantes</div>
    <div class="demo-row">
      <button class="btn btn--primary">
        <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v14a2 2 0 01-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>
        Primary
      </button>
      <button class="btn btn--secondary">Secondary</button>
      <button class="btn btn--outline">Outline</button>
      <button class="btn btn--ghost">
        <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
        Ghost
      </button>
      <button class="btn btn--danger">
        <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/></svg>
        Danger
      </button>
    </div>

    <div class="group-label">Tamanhos</div>
    <div class="demo-row wrap">
      <button class="btn btn--primary btn--xs">XS</button>
      <button class="btn btn--primary btn--sm">Small</button>
      <button class="btn btn--primary btn--md">Medium</button>
      <button class="btn btn--primary btn--lg">Large</button>
    </div>

    <div class="group-label">Loading</div>
    <div class="demo-row">
      <button class="btn btn--primary" disabled>
        <svg class="btn-icon spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" opacity="0.2"/><path d="M21 12a9 9 0 00-9-9" stroke-linecap="round"/></svg>
        Salvando...
      </button>
      <button class="btn btn--secondary" disabled>
        <svg class="btn-icon spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" opacity="0.2"/><path d="M21 12a9 9 0 00-9-9" stroke-linecap="round"/></svg>
        Carregando...
      </button>
    </div>

    <div class="group-label">Icon Buttons</div>
    <div class="demo-row">
      <button class="icon-btn icon-btn--green" title="Editar">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
      </button>
      <button class="icon-btn icon-btn--red" title="Excluir">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/></svg>
      </button>
      <button class="icon-btn icon-btn--gray" title="Menu">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
      </button>
      <button class="icon-btn icon-btn--blue" title="Info">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
      </button>
    </div>

    <div class="group-label">Desabilitados</div>
    <div class="demo-row">
      <button class="btn btn--primary" disabled>Primary</button>
      <button class="btn btn--secondary" disabled>Secondary</button>
      <button class="btn btn--danger" disabled>Danger</button>
    </div>
  </section>
</template>

<style scoped>
.vv-section { display: grid; gap: 1.5rem; font-family: var(--vv-font-sans, 'Inter', sans-serif); }
.vv-head small { color: var(--vv-color-primary, #16a34a); font-weight: 600; text-transform: uppercase; font-size: 0.72rem; letter-spacing: 0.1em; }
.vv-head h2 { margin: 0.25rem 0 0.35rem; font-size: 1.8rem; font-weight: 700; color: var(--vv-color-text, #111827); }
.vv-head p  { margin: 0; color: var(--vv-color-text-muted, #6b7280); font-size: 0.88rem; }
.group-label { font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: var(--vv-color-text-muted, #6b7280); }
.demo-row { display: flex; flex-wrap: wrap; align-items: center; gap: 0.75rem; }

.btn {
  display: inline-flex; align-items: center; justify-content: center; gap: 0.4rem;
  border-radius: var(--vv-radius-lg, 10px); font-size: 0.875rem; font-weight: 500;
  padding: 0.5rem 1rem; border: none; cursor: pointer; transition: all var(--vv-transition, 150ms ease);
  font-family: inherit;
}
.btn:disabled { opacity: 0.5; cursor: not-allowed; }
.btn--primary   { background: var(--vv-color-primary, #16a34a); color: #fff; }
.btn--primary:not(:disabled):hover   { background: var(--vv-color-primary-hover, #15803d); }
.btn--secondary { background: #e5e7eb; color: #374151; }
.btn--secondary:not(:disabled):hover { background: #d1d5db; }
.btn--outline   { background: transparent; border: 1px solid var(--vv-color-primary, #16a34a); color: var(--vv-color-primary, #16a34a); }
.btn--outline:not(:disabled):hover   { background: var(--vv-color-primary-bg, #f0fdf4); }
.btn--ghost     { background: transparent; color: #6b7280; }
.btn--ghost:not(:disabled):hover     { background: #f3f4f6; color: #111827; }
.btn--danger    { background: #dc2626; color: #fff; }
.btn--danger:not(:disabled):hover    { background: #b91c1c; }
.btn--xs { padding: 0.25rem 0.5rem; font-size: 0.75rem; }
.btn--sm { padding: 0.375rem 0.75rem; font-size: 0.875rem; }
.btn--md { padding: 0.5rem 1rem; font-size: 0.875rem; }
.btn--lg { padding: 0.75rem 1.5rem; font-size: 1rem; }

.btn-icon { width: 1em; height: 1em; flex-shrink: 0; }
@keyframes spin { to { transform: rotate(360deg); } }
.spin { animation: spin 0.75s linear infinite; }

.icon-btn {
  width: 32px; height: 32px; border-radius: var(--vv-radius-md, 8px);
  display: inline-flex; align-items: center; justify-content: center;
  border: none; cursor: pointer; transition: all var(--vv-transition, 150ms ease);
}
.icon-btn svg { width: 16px; height: 16px; }
.icon-btn--green { background: var(--vv-color-primary-bg, #f0fdf4); color: var(--vv-color-primary-hover, #15803d); }
.icon-btn--green:hover { background: var(--vv-color-primary-100, #dcfce7); }
.icon-btn--red   { background: #fee2e2; color: #dc2626; }
.icon-btn--red:hover   { background: #fecaca; }
.icon-btn--gray  { background: #f3f4f6; color: #6b7280; }
.icon-btn--gray:hover  { background: #e5e7eb; }
.icon-btn--blue  { background: #dbeafe; color: #2563eb; }
.icon-btn--blue:hover  { background: #bfdbfe; }
</style>
