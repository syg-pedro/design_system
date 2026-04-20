<template>
  <section class="pc-section">
    <div class="pc-head">
      <small>Componentes</small>
      <h2>Botões</h2>
      <p>Variantes extraídas dos formulários e ações do portal.</p>
    </div>

    <div class="group-label">Variantes primárias</div>
    <div class="demo-row">
      <button class="btn btn--primary">
        <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v14a2 2 0 01-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>
        Salvar Alterações
      </button>
      <button class="btn btn--secondary">Cancelar</button>
      <button class="btn btn--ghost">
        <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
        Filtrar
      </button>
      <button class="btn btn--danger">
        <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4h6v2"/></svg>
        Excluir
      </button>
    </div>

    <div class="group-label">Com loading spinner</div>
    <div class="demo-row">
      <button class="btn btn--primary" disabled>
        <svg class="btn-icon spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" opacity="0.2"/><path d="M21 12a9 9 0 00-9-9" stroke-linecap="round"/></svg>
        Salvando...
      </button>
      <button class="btn btn--primary" disabled>
        <svg class="btn-icon spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" opacity="0.2"/><path d="M21 12a9 9 0 00-9-9" stroke-linecap="round"/></svg>
        Entrando...
      </button>
    </div>

    <div class="group-label">Download actions (table row)</div>
    <div class="demo-row">
      <button class="btn-link btn-link--blue">
        <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
        XML
      </button>
      <button class="btn-link btn-link--blue">
        <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
        PDF
      </button>
      <button class="btn-link btn-link--emerald">
        <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
        Ambos
      </button>
    </div>

    <div class="group-label">Icon buttons (card actions)</div>
    <div class="demo-row">
      <button class="icon-btn icon-btn--blue" title="Editar">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
      </button>
      <button class="icon-btn icon-btn--red" title="Excluir">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4h6v2"/></svg>
      </button>
      <button class="icon-btn icon-btn--slate" title="Menu">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
      </button>
    </div>

    <div class="group-label">Estado desabilitado</div>
    <div class="demo-row">
      <button class="btn btn--primary" disabled>Primary</button>
      <button class="btn btn--secondary" disabled>Secondary</button>
      <button class="btn btn--danger" disabled>Danger</button>
    </div>
  </section>
</template>

<style scoped>
.pc-section { display: grid; gap: 1.5rem; font-family: var(--pc-font-sans, 'Inter', sans-serif); }
.pc-head small { color: var(--pc-color-primary, #2563eb); font-weight: 600; text-transform: uppercase; font-size: 0.72rem; letter-spacing: 0.1em; }
.pc-head h2 { margin: 0.25rem 0 0.35rem; font-size: 1.8rem; font-weight: 700; color: var(--pc-color-text, #0f172a); }
.pc-head p  { margin: 0; color: var(--pc-color-text-muted, #64748b); font-size: 0.88rem; }
.group-label { font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--pc-color-text-muted); }
.demo-row { display: flex; flex-wrap: wrap; gap: 0.65rem; align-items: center; }

.btn {
  display: inline-flex; align-items: center; gap: 0.4rem;
  padding: 0.5rem 1rem; border-radius: var(--pc-radius-md, 8px);
  font-size: 0.875rem; font-weight: 500; font-family: inherit;
  border: 1px solid transparent; cursor: pointer;
  transition: background 0.15s, border-color 0.15s, opacity 0.15s;
}
.btn:disabled { opacity: 0.5; cursor: not-allowed; }
.btn--primary  { background: var(--pc-color-primary, #2563eb); color: #fff; }
.btn--primary:not(:disabled):hover { background: var(--pc-color-primary-hover, #1d4ed8); }
.btn--secondary { background: transparent; color: var(--pc-color-text-soft, #334155); border-color: var(--pc-color-line-soft, #cbd5e1); }
.btn--secondary:not(:disabled):hover { background: var(--pc-color-surface-2, #f1f5f9); }
.btn--ghost { background: transparent; color: var(--pc-color-text-muted, #64748b); border-color: transparent; }
.btn--ghost:not(:disabled):hover { background: var(--pc-color-surface-2, #f1f5f9); color: var(--pc-color-text, #0f172a); }
.btn--danger { background: #dc2626; color: #fff; }
.btn--danger:not(:disabled):hover { background: #b91c1c; }

.btn-icon { width: 16px; height: 16px; flex-shrink: 0; }
.spin { animation: spin 1s linear infinite; }
@keyframes spin { to { transform: rotate(360deg); } }

.btn-link {
  display: inline-flex; align-items: center; gap: 0.35rem;
  padding: 0.35rem 0.65rem; border-radius: var(--pc-radius-sm, 6px);
  font-size: 0.75rem; font-weight: 500; font-family: inherit;
  border: none; cursor: pointer; transition: background 0.12s;
}
.btn-link--blue   { color: var(--pc-color-primary, #2563eb); background: transparent; }
.btn-link--blue:hover { background: #eff6ff; }
.btn-link--emerald { color: #10b981; background: transparent; }
.btn-link--emerald:hover { background: #ecfdf5; }

.icon-btn {
  display: inline-flex; align-items: center; justify-content: center;
  width: 36px; height: 36px; border-radius: var(--pc-radius-md, 8px);
  border: none; cursor: pointer; transition: background 0.12s;
}
.icon-btn svg { width: 18px; height: 18px; }
.icon-btn--blue  { color: var(--pc-color-primary, #2563eb); background: transparent; }
.icon-btn--blue:hover { background: #eff6ff; }
.icon-btn--red   { color: #dc2626; background: transparent; }
.icon-btn--red:hover { background: #fef2f2; }
.icon-btn--slate { color: var(--pc-color-text-muted, #64748b); background: transparent; }
.icon-btn--slate:hover { background: var(--pc-color-surface-2, #f1f5f9); }
</style>
