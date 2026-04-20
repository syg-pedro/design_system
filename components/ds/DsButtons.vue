<template>
  <section class="ds-section">
    <div class="ds-section-head">
      <small>Ações</small>
      <h2>Botões</h2>
      <p>Primário, contornado, texto, ghost e ícone — com todas as severidades.</p>
    </div>

    <div class="panels-grid">
      <div class="sample-panel">
        <h3>Severidades</h3>
        <div class="flex-wrap">
          <button class="btn primary"><i class="pi pi-check"></i> Primário</button>
          <button class="btn success"><i class="pi pi-check-circle"></i> Sucesso</button>
          <button class="btn warn"><i class="pi pi-exclamation-triangle"></i> Aviso</button>
          <button class="btn danger"><i class="pi pi-trash"></i> Perigo</button>
          <button class="btn ghost"><i class="pi pi-arrow-right"></i> Ghost</button>
        </div>
      </div>

      <div class="sample-panel">
        <h3>Variantes</h3>
        <div class="flex-wrap">
          <button class="btn outlined"><i class="pi pi-filter"></i> Contorno</button>
          <button class="btn text"><i class="pi pi-link"></i> Texto</button>
          <button class="btn primary sm"><i class="pi pi-check"></i> Pequeno</button>
          <button class="btn outlined" disabled><i class="pi pi-ban"></i> Desabilitado</button>
        </div>
        <div class="flex-wrap" style="margin-top:0.5rem">
          <button class="btn icon-btn ghost-icon"><i class="pi pi-eye"></i></button>
          <button class="btn icon-btn ghost-icon"><i class="pi pi-pencil"></i></button>
          <button class="btn icon-btn ghost-icon" style="color:var(--ds-success)"><i class="pi pi-download"></i></button>
          <button class="btn icon-btn ghost-icon" style="color:var(--ds-error)"><i class="pi pi-trash"></i></button>
          <button class="btn icon-btn ghost-icon"><i class="pi pi-ellipsis-h"></i></button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.ds-section { display: grid; gap: 1.25rem; }
.ds-section-head small { color: var(--ds-primary, #0094d9); font-weight: 600; text-transform: uppercase; font-size: 0.72rem; letter-spacing: 0.1em; }
.ds-section-head h2 { margin: 0.25rem 0 0.35rem; font-size: 1.8rem; font-weight: 400; letter-spacing: -0.015em; }
.ds-section-head p  { margin: 0; color: var(--ds-muted); font-size: 0.88rem; }

.panels-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
.sample-panel { padding: 1.25rem 1.35rem; background: var(--ds-bg); border: 1px solid var(--ds-line); border-radius: 12px; display: grid; gap: 1rem; }
.sample-panel h3 { margin: 0; font-size: 1rem; font-weight: 400; letter-spacing: -0.01em; color: var(--ds-text); }
.flex-wrap { display: flex; flex-wrap: wrap; align-items: center; gap: 0.5rem; }

.btn {
  display: inline-flex; align-items: center; gap: 0.45rem;
  min-height: 40px; padding: 0 1rem;
  border-radius: 10px; border: 1px solid transparent;
  background: var(--ds-text, #0f172a); color: var(--ds-bg, #fff);
  cursor: pointer; font: inherit; font-size: 0.86rem; font-weight: 500;
  transition: all 0.15s; white-space: nowrap;
}
.btn:hover { opacity: 0.9; transform: translateY(-1px); }
.btn:active { transform: translateY(0); }
.btn:disabled { opacity: 0.45; cursor: not-allowed; transform: none; }
.btn.primary { background: var(--ds-primary, #0094d9); color: #fff; box-shadow: 0 1px 2px color-mix(in srgb, var(--ds-primary) 30%, transparent), inset 0 -1px 0 rgba(0,0,0,0.15); }
.btn.primary:hover { background: var(--ds-secondary, #0066b2); }
.btn.success { background: var(--ds-success, #3dac00); color: #fff; }
.btn.warn    { background: var(--ds-warning, #ffb11d); color: #1f2937; }
.btn.danger  { background: var(--ds-error, #ff1414); color: #fff; }
.btn.ghost   { background: var(--ds-surface-2, #f1f4f9); color: var(--ds-text); }
.btn.ghost:hover { background: var(--ds-line); }
.btn.outlined { background: var(--ds-bg); color: var(--ds-text); border-color: var(--ds-line); box-shadow: 0 1px 2px rgba(15,23,42,0.05); }
.btn.outlined:hover { border-color: var(--ds-primary); color: var(--ds-primary); }
.btn.text { background: transparent; color: var(--ds-primary); min-height: 32px; padding-inline: 0.5rem; box-shadow: none; }
.btn.text:hover { background: color-mix(in srgb, var(--ds-primary) 8%, transparent); }
.btn.sm { min-height: 32px; padding: 0 0.65rem; font-size: 0.78rem; }
.btn.icon-btn { width: 36px; height: 36px; padding: 0; justify-content: center; min-height: unset; }
.btn.ghost-icon { background: transparent; color: var(--ds-muted); border: 1px solid transparent; box-shadow: none; }
.btn.ghost-icon:hover { background: var(--ds-surface-2); color: var(--ds-primary); }

@media (max-width: 768px) { .panels-grid { grid-template-columns: 1fr; } }
</style>
