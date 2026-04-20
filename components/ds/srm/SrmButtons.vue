<template>
  <section class="srm-section">
    <div class="srm-head">
      <small>Componentes</small>
      <h2>UiButton</h2>
      <p>6 variantes × 3 tamanhos. Hover com <code>translateY(-1px)</code> e glow colorido. Loading com spinner interno.</p>
    </div>

    <div class="group-label">Variantes</div>
    <div class="demo-row">
      <button class="btn btn--primary">Primary</button>
      <button class="btn btn--secondary">Secondary</button>
      <button class="btn btn--success">
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
        Success
      </button>
      <button class="btn btn--danger">
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/></svg>
        Danger
      </button>
      <button class="btn btn--ghost">Ghost</button>
      <button class="btn btn--link">Link →</button>
    </div>

    <div class="group-label">Tamanhos</div>
    <div class="demo-row" style="align-items: center">
      <button class="btn btn--primary btn--sm">Small</button>
      <button class="btn btn--primary btn--md">Medium</button>
      <button class="btn btn--primary btn--lg">Large</button>
    </div>

    <div class="group-label">Loading</div>
    <div class="demo-row">
      <button class="btn btn--primary is-loading" disabled>
        <span class="spinner"></span>
      </button>
      <button class="btn btn--success is-loading" disabled>
        <span class="spinner"></span>
      </button>
      <button class="btn btn--danger is-loading" disabled>
        <span class="spinner"></span>
      </button>
    </div>

    <div class="group-label">Desabilitado</div>
    <div class="demo-row">
      <button class="btn btn--primary" disabled>Primary</button>
      <button class="btn btn--secondary" disabled>Secondary</button>
      <button class="btn btn--success" disabled>Success</button>
      <button class="btn btn--danger" disabled>Danger</button>
    </div>

    <div class="group-label">Full width</div>
    <button class="btn btn--primary btn--full">Entrar no sistema</button>
  </section>
</template>

<style scoped>
.srm-section { display: grid; gap: 1.5rem; font-family: var(--srm-font-sans, 'Inter', sans-serif); }
.srm-head small { color: var(--srm-color-primary, #0099ff); font-weight: 600; text-transform: uppercase; font-size: 0.72rem; letter-spacing: 0.1em; }
.srm-head h2 { margin: 0.25rem 0 0.35rem; font-size: 1.8rem; font-weight: 700; color: var(--srm-color-text, #fff); }
.srm-head p  { margin: 0; color: var(--srm-color-text-muted, #aaa); font-size: 0.88rem; }
.srm-head code { font-family: var(--srm-font-mono, monospace); font-size: 0.8em; background: var(--srm-color-hover, rgba(255,255,255,.1)); padding: 0.1em 0.35em; border-radius: 4px; }
.group-label { font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: var(--srm-color-text-muted, #aaa); }
.demo-row { display: flex; flex-wrap: wrap; align-items: center; gap: 0.75rem; }

.btn {
  display: inline-flex; align-items: center; justify-content: center; gap: 8px;
  border: none; border-radius: var(--srm-radius-md, 6px); font-weight: 600;
  cursor: pointer; transition: all var(--srm-transition, 0.2s ease);
  font-family: inherit; white-space: nowrap;
  padding: 10px 20px; font-size: 0.95rem; min-height: 40px;
}
.btn:focus { outline: none; box-shadow: 0 0 0 3px rgba(0,153,255,0.2); }
.btn:disabled { opacity: 0.5; cursor: not-allowed; transform: none !important; box-shadow: none !important; }

.btn--sm { padding: 6px 12px; font-size: 0.875rem; min-height: 32px; }
.btn--md { padding: 10px 20px; font-size: 0.95rem;  min-height: 40px; }
.btn--lg { padding: 14px 28px; font-size: 1.05rem;  min-height: 48px; }
.btn--full { width: 100%; }

.btn--primary   { background: var(--srm-color-primary, #0099ff); color: #fff; }
.btn--primary:not(:disabled):hover   { background: var(--srm-color-primary-dark, #0077be); transform: translateY(-1px); box-shadow: 0 4px 12px rgba(0,153,255,0.3); }
.btn--secondary { background: var(--srm-color-bg, #0f172a); color: var(--srm-color-text, #fff); border: 1px solid var(--srm-color-border, #333); }
.btn--secondary:not(:disabled):hover { background: var(--srm-color-hover, rgba(255,255,255,0.1)); border-color: var(--srm-color-primary, #0099ff); }
.btn--success   { background: #10b981; color: #fff; }
.btn--success:not(:disabled):hover   { background: #059669; transform: translateY(-1px); box-shadow: 0 4px 12px rgba(16,185,129,0.3); }
.btn--danger    { background: #ef4444; color: #fff; }
.btn--danger:not(:disabled):hover    { background: #dc2626; transform: translateY(-1px); box-shadow: 0 4px 12px rgba(239,68,68,0.3); }
.btn--ghost     { background: transparent; color: var(--srm-color-text, #fff); }
.btn--ghost:not(:disabled):hover     { background: var(--srm-color-hover, rgba(255,255,255,0.1)); }
.btn--link      { background: transparent; color: var(--srm-color-primary, #0099ff); padding: 4px 8px; }
.btn--link:not(:disabled):hover      { text-decoration: underline; }

.is-loading { cursor: wait; opacity: 0.7; }

.icon { width: 1em; height: 1em; }

@keyframes spin { to { transform: rotate(360deg); } }
.spinner { width: 16px; height: 16px; border: 2px solid rgba(255,255,255,0.3); border-top-color: #fff; border-radius: 50%; animation: spin 0.6s linear infinite; }
</style>
